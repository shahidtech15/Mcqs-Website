#!/usr/bin/env python3
"""
Fix missing spaces between merged words in ExamVeda MCQs dataset
(frontend/data/examveda_mcqs.json and frontend/js/data_examveda.js)
and frontend/js/data_science_instruments.js.

Uses a clean corpus-trained Viterbi dynamic-programming word segmenter built
strictly from the repository's clean English datasets (~45,000 words) plus
strict proper-noun, acronym, CamelCase, and punctuation spacing rules.
"""

import argparse
import json
import math
import re
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
EXAMVEDA_JSON = ROOT / "frontend" / "data" / "examveda_mcqs.json"
EXAMVEDA_JS = ROOT / "frontend" / "js" / "data_examveda.js"
SCIENCE_INSTR_JS = ROOT / "frontend" / "js" / "data_science_instruments.js"

# Valid 1- and 2-letter English words
VALID_1 = {"a", "i"}
VALID_2 = {
    "am", "an", "as", "at", "be", "by", "do", "go", "he", "hi", "if", "in",
    "is", "it", "me", "my", "no", "of", "oh", "ok", "on", "or", "ox", "so",
    "to", "up", "us", "we",
}

# Intentional CamelCase / tech / chemical / proper-noun tokens to NEVER split
CAMEL_WHITELIST = {
    "javascript", "typescript", "vbscript", "actionscript", "postscript",
    "ecmascript", "livescript", "powerpoint", "mysql", "postgresql", "mongodb",
    "mariadb", "couchdb", "dynamodb", "nosql", "youtube", "linkedin", "github",
    "wordpress", "onedrive", "sharepoint", "macbook", "iphone", "ipad", "ios",
    "macos", "ebay", "paypal", "mcdonald", "mcdonalds", "mcgraw", "latex",
    "phd", "mrna", "trna", "rrna", "dbase", "foxpro", "wordstar", "wordperfect",
    "visicalc", "supercalc", "multiplan", "pagemaker", "photoshop", "coreldraw",
    "autocad", "quicktime", "netscape", "compuserve", "hypercard", "activex",
    "directx", "opengl", "webgl", "geojson", "graphql", "devops", "saas",
    "paas", "iaas", "wifi", "openai", "chatgpt", "deepseek", "khz", "mhz",
    "ghz", "kwh", "mah", "ph", "db", "nacl", "hcl", "naoh", "koh", "mgo",
    "feo", "cuo", "zno", "agcl", "baso", "kmno", "nahco", "caco", "ebook",
    "ebooks", "email", "emails", "ecommerce", "egovernance", "elearning",
    "ebanking", "mcommerce", "fortran", "cobol", "pascal", "basic", "algol",
    "prolog", "snobol", "simula", "smalltalk", "delphi", "erlang", "haskell",
    "clojure", "kotlin", "swift", "golang", "matlab", "octave", "stata",
}

# Obviously glued patterns that should NEVER be treated as valid standalone words
GLUED_BAD_PAT = re.compile(
    r"(?:ofthe|inthe|tothe|forthe|onthe|atthe|bythe|fromthe|withthe|andthe|"
    r"isthe|arethe|wasthe|werethe|thatthe|whichis|whatis|whois|whereis|"
    r"becauseof|lossof|ofwater|waterinto|oftheworld|isinthe|istheplace|aswellas|"
    r"inwhich|ofwhich|forwhich|bywhich|towhich|onwhich|atwhich|fromwhich|"
    r"canbe|willbe|hasbeen|havebeen|hadbeen|maynot|isnot|arenot|wasnot|"
    r"doesnot|donot|didnot|cannotbe|knownas|calledas|usedto|usedfor|"
    r"usedin|refers?to|consistsof|composedof|madeupof|dueto|suchas|standsfor)"
)

EXTRA_WORDS = [
    "seepage", "percolation", "infiltration", "evaporation", "transpiration",
    "condensation", "precipitation", "irrigation", "waterlogging", "salinity",
    "entomology", "ornithology", "ichthyology", "herpetology", "mycology",
    "virology", "bacteriology", "parasitology", "epidemiology", "immunology",
    "endocrinology", "dermatology", "ophthalmology", "cardiology", "neurology",
    "nephrology", "oncology", "hematology", "radiology", "pathology",
    "pharmacology", "toxicology", "anthropology", "archaeology", "etymology",
    "cosmology", "seismology", "meteorology", "oceanography", "cartography",
    "demography", "paleontology", "gerontology", "cytology", "histology",
    "morphology", "physiology", "taxonomy", "phylogeny", "symbiosis",
    "photosynthesis", "chemosynthesis", "respiration", "fermentation",
    "spreadsheet", "worksheets", "worksheet", "microprocessor", "motherboard",
    "supercomputer", "minicomputer", "microcomputer", "mainframe", "subroutine",
    "pseudocode", "flowchart", "hypertext", "hyperlink", "hypermedia",
    "multitasking", "multiprocessing", "multithreading", "bandwidth",
    "broadband", "baseband", "throughput", "firewall", "malware", "spyware",
    "adware", "ransomware", "freeware", "shareware", "firmware", "middleware",
    "groupware", "courseware", "keylogger", "phishing", "spoofing", "sniffing",
    "encryption", "decryption", "cryptography", "steganography", "biometrics",
    "telecommunications", "interoperability", "virtualization", "defragmentation",
    "concatenation", "polymorphism", "encapsulation", "abstraction", "inheritance",
    "instantiation", "overloading", "overriding", "recursion", "iteration",
    "compilation", "interpretation", "debugging", "bootstrapping", "spooling",
    "swapping", "paging", "segmentation", "deadlock", "starvation", "semaphore",
    "kilobyte", "megabyte", "gigabyte", "terabyte", "petabyte", "exabyte",
    "nibble", "octal", "hexadecimal", "alphanumeric", "bitmap", "bitmaps",
    "raster", "vector", "pixel", "pixels", "ethernet", "intranet", "extranet",
    "arpanet", "usenet", "telnet", "bluetooth", "hotspot", "router", "switch",
    "repeater", "gateway", "modem", "transceiver", "multiplexer", "demultiplexer",
    "attenuation", "crosstalk", "railway", "railways", "station", "stations",
    "avenue", "boulevard", "terminal", "terminals", "sanctuary", "sanctuaries",
    "shorthand", "studies", "studied", "studying", "stands", "standing",
    "highest", "longest", "largest", "smallest", "tallest", "deepest", "widest",
    "fastest", "slowest", "heaviest", "lightest", "oldest", "newest", "youngest",
    "richest", "poorest", "hottest", "coldest", "wettest", "driest", "brightest",
    "darkest", "nearest", "farthest", "furthest", "greatest", "strongest",
    "weakest", "imprisonment", "arbitrary", "discovered", "discovering",
    "discovery", "invented", "inventing", "invention", "inventor", "founded",
    "founder", "established", "establishment", "headquarters", "headquartered",
    "cannot", "without", "within", "throughout", "however", "therefore",
    "moreover", "furthermore", "nevertheless", "nonetheless", "meanwhile",
    "otherwise", "instead", "although", "though", "because", "whereas",
    "whenever", "wherever", "whoever", "whatever", "whichever", "myself",
    "yourself", "himself", "herself", "itself", "ourselves", "themselves",
    "everyone", "everybody", "everything", "everywhere", "someone", "somebody",
    "something", "somewhere", "anyone", "anybody", "anything", "anywhere",
    "nobody", "nothing", "nowhere", "already", "always", "almost",
    "altogether", "together", "today", "tonight", "tomorrow", "yesterday",
    "nowadays", "sometimes", "somewhat", "somehow", "anyway", "anyhow",
    "into", "onto", "upon", "unto", "over", "under", "below", "above",
    "between", "among", "amongst", "across", "along", "around", "behind",
    "beside", "besides", "beyond", "inside", "outside", "toward", "towards",
    "through", "during", "before", "after", "since", "until", "unless",
]

# High-frequency function words used for safe suffix detachment on proper nouns
PROPER_NOUN_SUFFIXES = [
    "because", "through", "between", "against", "without", "within",
    "which", "where", "there", "their", "these", "those", "about", "after",
    "under", "above", "below", "into", "onto", "from", "with", "that", "this",
    "have", "were", "been", "will", "what", "when", "than", "then", "also",
    "sanctuary", "university", "college", "hospital", "airport", "station",
    "temple", "palace", "museum", "garden", "island", "mountain", "river",
    "valley", "desert", "forest", "ocean", "bridge", "tower", "castle",
    "party", "council", "board", "court", "league", "union", "treaty",
    "award", "prize", "medal", "trophy", "games", "cup", "war", "battle",
    "the", "and", "for", "are", "was", "has", "had", "not", "but", "can",
    "is", "of", "in", "to", "on", "at", "by", "as", "or",
]


def build_vocabulary() -> tuple[dict[str, float], Counter, set[str], int]:
    """Build unigram log-cost dictionary strictly from clean repository datasets."""
    counts = Counter()

    # 1. Clean JS data files (excluding examveda & science_instruments)
    js_dir = ROOT / "frontend" / "js"
    for p in sorted(js_dir.glob("data_*.js")):
        if p.name in ("data_examveda.js", "data_science_instruments.js"):
            continue
        txt = p.read_text(encoding="utf-8", errors="ignore")
        for w in re.findall(r"[A-Za-z]+", txt):
            wl = w.lower()
            if len(wl) == 1 and wl not in VALID_1:
                continue
            if len(wl) == 2 and wl not in VALID_2:
                continue
            if len(wl) >= 6 and GLUED_BAD_PAT.search(wl):
                continue
            counts[wl] += 1

    # 2. Clean HTML visible text (strip script/style tags first)
    for p in sorted((ROOT / "frontend").glob("*.html")):
        txt = p.read_text(encoding="utf-8", errors="ignore")
        txt = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", txt, flags=re.S | re.I)
        txt = re.sub(r"<[^>]+>", " ", txt)
        for w in re.findall(r"[A-Za-z]+", txt):
            wl = w.lower()
            if len(wl) == 1 and wl not in VALID_1:
                continue
            if len(wl) == 2 and wl not in VALID_2:
                continue
            if len(wl) >= 6 and GLUED_BAD_PAT.search(wl):
                continue
            counts[wl] += 1

    # 3. Guarantee extra domain/common words
    for w in EXTRA_WORDS:
        counts[w.lower()] += 80
    for w in VALID_1:
        counts[w] = max(counts[w], 50000)
    for w in VALID_2:
        counts[w] = max(counts[w], 400)

    # Prune rare/noisy 3-letter fragments (require freq >= 3 for 3-letter words, freq >= 2 for >= 4)
    valid_words = {
        w for w, c in counts.items()
        if (len(w) == 1 and w in VALID_1)
        or (len(w) == 2 and w in VALID_2)
        or (len(w) == 3 and c >= 3)
        or (len(w) >= 4 and c >= 2)
    }

    total = sum(counts[w] for w in valid_words)
    log_total = math.log(total)
    word_cost = {}
    for w in valid_words:
        word_cost[w] = (log_total - math.log(counts[w])) + 2.0

    max_word_len = min(max((len(w) for w in valid_words), default=20), 24)
    return word_cost, counts, valid_words, max_word_len


def _run_viterbi(lower: str, word_cost: dict[str, float], max_word_len: int) -> tuple[float, list[tuple[int, int]]]:
    n = len(lower)
    INF = 1e18
    best_cost = [INF] * (n + 1)
    best_prev = [-1] * (n + 1)
    best_cost[0] = 0.0

    for i in range(1, n + 1):
        start = max(0, i - max_word_len)
        for j in range(start, i):
            if best_cost[j] >= INF:
                continue
            sub = lower[j:i]
            cost = word_cost.get(sub)
            if cost is not None:
                if len(sub) == 1:
                    cost += 5.5
                cand = best_cost[j] + cost
                if cand < best_cost[i]:
                    best_cost[i] = cand
                    best_prev[i] = j

    if best_cost[n] >= INF:
        return INF, []

    spans = []
    idx = n
    while idx > 0:
        prev = best_prev[idx]
        spans.append((prev, idx))
        idx = prev
    spans.reverse()
    return best_cost[n], spans


def viterbi_split(
    token: str,
    word_cost: dict[str, float],
    counts: Counter,
    valid_words: set[str],
    max_word_len: int,
) -> list[str]:
    """Split a merged alphabetic token into English words using Viterbi DP, preserving proper nouns."""
    lower = token.lower()
    n = len(lower)

    if n <= 3:
        return [token]
    if lower in valid_words and not GLUED_BAD_PAT.search(lower):
        return [token]
    if lower in CAMEL_WHITELIST:
        return [token]

    is_capitalized = token[0].isupper() and token[1:].islower()

    # For Capitalized words (often proper nouns like Gangtok, Nagaland, Junagarh, Garampani):
    # First check if a common English word or function word is glued to the end (e.g. Garampanisanctuaryis, Yorkis)
    if is_capitalized:
        # Try full Viterbi first, but ONLY accept it if EVERY piece is a genuinely common word (not obscure fragments)
        cost, spans = _run_viterbi(lower, word_cost, max_word_len)
        if spans and len(spans) > 1:
            parts = [token[a:b] for a, b in spans]
            # Reject if it splits a proper noun using a 1-letter word ('Nag a land', 'Jun a garh')
            # or low-frequency fragments ('Gang tok', 'Gar amp ani')
            has_1letter = any(len(p) == 1 for p in parts)
            all_common = all(
                (p.lower() in VALID_2) or (len(p) >= 3 and counts.get(p.lower(), 0) >= 15)
                for p in parts
            )
            if not has_1letter and all_common:
                return parts

        # Otherwise, safely detach known glued suffixes from the right (recursively up to 2 times)
        # e.g. 'Garampanisanctuaryis' -> ['Garampani', 'sanctuary', 'is']
        detached = detach_proper_noun_suffixes(token, valid_words)
        if len(detached) > 1:
            return detached

        # Keep unknown proper noun intact (e.g., Gangtok, Nagaland, Junagarh)!
        return [token]

    # Lowercase token: run Viterbi DP
    cost, spans = _run_viterbi(lower, word_cost, max_word_len)
    if spans:
        parts = [token[a:b] for a, b in spans]
        if len(parts) >= 4 and (n / len(parts)) < 2.2:
            return [token]
        return parts

    # Fallback: if token still contains an unmistakable glued function-word pair
    # (e.g., 'alkalinityofthe', 'bythebowlertothefielder'), split around those anchors
    if GLUED_BAD_PAT.search(lower):
        anchor_repl = [
            ("becauseof", " because of "), ("oftheworld", " of the world "),
            ("isinthe", " is in the "), ("istheplace", " is the place "),
            ("aswellas", " as well as "), ("ofthe", " of the "),
            ("inthe", " in the "), ("tothe", " to the "), ("forthe", " for the "),
            ("onthe", " on the "), ("atthe", " at the "), ("bythe", " by the "),
            ("fromthe", " from the "), ("withthe", " with the "), ("andthe", " and the "),
            ("isthe", " is the "), ("arethe", " are the "), ("wasthe", " was the "),
            ("werethe", " were the "), ("thatthe", " that the "),
            ("inwhich", " in which "), ("ofwhich", " of which "),
            ("forwhich", " for which "), ("bywhich", " by which "),
            ("towhich", " to which "), ("onwhich", " on which "),
            ("fromwhich", " from which "), ("lossof", " loss of "),
            ("ofwater", " of water "), ("waterinto", " water into "),
        ]
        s_tmp = token
        for pat, rep in anchor_repl:
            s_tmp = re.sub(pat, rep, s_tmp, flags=re.IGNORECASE)
        pieces = [p for p in s_tmp.split() if p]
        if len(pieces) > 1:
            out = []
            for p in pieces:
                if p.lower() in valid_words or len(p) <= 3:
                    out.append(p)
                else:
                    c2, sp2 = _run_viterbi(p.lower(), word_cost, max_word_len)
                    out.extend([p[a:b] for a, b in sp2] if sp2 else [p])
            return out

    # Fallback: detach common prefix/suffix if one side is valid
    return detach_proper_noun_suffixes(token, valid_words)


def detach_proper_noun_suffixes(token: str, valid_words: set[str], depth: int = 0) -> list[str]:
    if depth >= 3:
        return [token]
    lower = token.lower()
    if lower in valid_words and not GLUED_BAD_PAT.search(lower):
        return [token]

    for suf in PROPER_NOUN_SUFFIXES:
        if lower.endswith(suf) and len(lower) - len(suf) >= 4:
            stem = token[: -len(suf)]
            tail = token[-len(suf) :]
            # For short 2-letter suffixes (is, of, in, to, on, at, by, as, or),
            # require stem to be a valid word OR >= 5 chars capitalized word ending in vowel/consonant that isn't a real suffix
            if len(suf) == 2:
                # Only split 2-letter suffix if stem is a known word OR stem itself ends with a known suffix
                if stem.lower() in valid_words:
                    return [stem, tail]
                # Check if recursive peel succeeds (e.g., Garampanisanctuary + is -> Garampani + sanctuary + is)
                sub = detach_proper_noun_suffixes(stem, valid_words, depth + 1)
                if len(sub) > 1:
                    return sub + [tail]
                # For 'is' glued to a capitalized proper noun (e.g., 'Yorkis', 'Entomologyis', 'Sikkimis'),
                # avoid real words ending in -is like 'Paris', 'Tennis', 'Crisis', 'Basis', 'Thesis', 'Axis', 'Oasis', 'Louis', 'Denis', 'Boris', 'Chris', 'Morris', 'Davis', 'Lewis', 'Harris', 'Travis', 'Ellis', 'Willis', 'Curtis', 'Francis', 'Alexis'
                continue
            else:
                # Longer suffix (>= 3 chars like 'sanctuary', 'party', 'the', 'and', 'for', 'because')
                # Avoid splitting real English words ending in -for, -the, -and, -can, -not, -was, -are, -has, -had, -but
                if suf in ("sanctuary", "university", "college", "hospital", "airport", "station",
                           "temple", "palace", "museum", "garden", "island", "mountain", "river",
                           "valley", "desert", "forest", "ocean", "bridge", "tower", "castle",
                           "party", "council", "board", "court", "league", "union", "treaty",
                           "award", "prize", "medal", "trophy", "games", "battle", "because",
                           "through", "between", "against", "without", "within", "which", "where"):
                    return detach_proper_noun_suffixes(stem, valid_words, depth + 1) + [tail]
                if stem.lower() in valid_words:
                    return [stem, tail]
    return [token]


def split_camelcase_and_acronyms(
    token: str,
    word_cost: dict[str, float],
    counts: Counter,
    valid_words: set[str],
    max_word_len: int,
) -> list[str]:
    """Split CamelCase merges and acronym+word merges (e.g. 'FFCstandsfor' -> ['FFC', 'stands', 'for'])."""
    if token.lower() in CAMEL_WHITELIST or (token.lower() in valid_words and not GLUED_BAD_PAT.search(token.lower())):
        return [token]
    # Preserve short chemical formulas like NaCl, HCl, FeO
    if len(token) <= 6 and re.match(r"^[A-Z][a-z]?[A-Z][a-z]?$", token):
        return [token]

    # Case 1: Acronym glued to lowercase words, e.g., FFCstandsfor, UNin, HTMLis, CPUhas
    m = re.match(r"^([A-Z]{2,})([a-z]{2,})$", token)
    if m:
        caps, tail = m.group(1), m.group(2)
        # Check if tail itself is a valid word or splits cleanly via Viterbi (e.g. 'standsfor' -> 'stands for', 'in' -> 'in')
        tail_cost, tail_spans = _run_viterbi(tail, word_cost, max_word_len)
        # Compare with splitting last cap letter onto tail (e.g. 'USPresident' -> 'US' + 'President')
        cap_tail = (caps[-1] + tail).lower()
        if tail in valid_words or (tail_spans and len(tail) >= 2 and cap_tail not in valid_words):
            tail_parts = [tail[a:b] for a, b in tail_spans] if tail_spans else [tail]
            return [caps] + tail_parts
        if len(caps) >= 3 and cap_tail in valid_words:
            return [caps[:-1], caps[-1] + tail]

    # Case 2: Standard lowercase -> uppercase boundary (CentralTerminal -> Central Terminal)
    parts = re.sub(r"([a-z])([A-Z])", r"\1 \2", token).split(" ")
    out = []
    for p in parts:
        if p.lower() in CAMEL_WHITELIST or (p.lower() in valid_words and not GLUED_BAD_PAT.search(p.lower())):
            out.append(p)
        else:
            # Re-check acronym + lowercase inside each part
            m2 = re.match(r"^([A-Z]{2,})([a-z]{2,})$", p)
            if m2:
                caps, tail = m2.group(1), m2.group(2)
                cap_tail = (caps[-1] + tail).lower()
                tail_cost, tail_spans = _run_viterbi(tail, word_cost, max_word_len)
                if tail in valid_words or (tail_spans and cap_tail not in valid_words):
                    tail_parts = [tail[a:b] for a, b in tail_spans] if tail_spans else [tail]
                    out.extend([caps] + tail_parts)
                elif len(caps) >= 3 and cap_tail in valid_words:
                    out.extend([caps[:-1], caps[-1] + tail])
                else:
                    out.append(p)
            else:
                out.append(p)
    return out


def fix_text(
    text: str,
    word_cost: dict[str, float],
    counts: Counter,
    valid_words: set[str],
    max_word_len: int,
) -> str:
    if not text or not isinstance(text, str):
        return text

    s = text

    # 1. Punctuation spacing
    s = re.sub(r"([,;])([A-Za-z])", r"\1 \2", s)
    s = re.sub(r"(?<!http)(?<!https):([A-Za-z])", r": \1", s)
    s = re.sub(r"([?!])([A-Za-z])", r"\1 \2", s)
    s = re.sub(r"([a-z]{3,})\.([A-Z][a-z])", r"\1. \2", s)

    # 2. Space between preposition/word and 4-digit year (e.g. 'in1993' -> 'in 1993', 'from1947' -> 'from 1947')
    s = re.sub(
        r"\b(in|on|of|at|by|to|from|since|until|before|after|during|between|around|circa|year|years)((?:1[0-9]{3}|20[0-9]{2}))\b",
        r"\1 \2",
        s,
        flags=re.IGNORECASE,
    )
    # Also 'UNin1993' -> 'UNin 1993' before word splitting
    s = re.sub(r"([A-Za-z]{2,})(1[5-9][0-9]{2}|20[0-2][0-9])\b", r"\1 \2", s)

    # 3. Space between word and opening parenthesis (excluding math/code functions)
    s = re.sub(
        r"\b(?!(?:sin|cos|tan|cot|sec|csc|log|ln|exp|sqrt|abs|max|min|sum|avg|if|for|while|print|printf|scanf|main|int|void|f|g|h|p|O)\b)([A-Za-z]{2,})\(",
        r"\1 (",
        s,
    )

    # 4. Split CamelCase, acronym merges, and Viterbi lowercase merges
    def replace_word(m: re.Match) -> str:
        tok = m.group(0)
        if tok.isupper():
            return tok
        camel_parts = split_camelcase_and_acronyms(tok, word_cost, counts, valid_words, max_word_len)
        final_parts = []
        for cp in camel_parts:
            if cp.isupper():
                final_parts.append(cp)
            else:
                final_parts.extend(viterbi_split(cp, word_cost, counts, valid_words, max_word_len))
        return " ".join(final_parts)

    s = re.sub(r"[A-Za-z]+", replace_word, s)

    # 5. Clean up extra whitespace & space before punctuation
    s = re.sub(r"[ \t]{2,}", " ", s)
    s = re.sub(r" ([.,;?!])", r"\1", s)
    return s.strip()


def fix_science_instruments(dry_run: bool = False) -> int:
    txt = SCIENCE_INSTR_JS.read_text(encoding="utf-8")
    new_txt = txt.replace("oftheearth", "of the earth").replace("ofthe", "of the")
    if new_txt != txt:
        if not dry_run:
            SCIENCE_INSTR_JS.write_text(new_txt, encoding="utf-8")
        return 1
    return 0


def main():
    parser = argparse.ArgumentParser(description="Fix merged words in ExamVeda MCQs.")
    parser.add_argument("--dry-run", action="store_true", help="Preview sample fixes without writing files.")
    args = parser.parse_args()

    print("Building clean English + domain vocabulary from repository corpus...")
    word_cost, counts, valid_words, max_word_len = build_vocabulary()
    print(f"Vocabulary ready: {len(valid_words):,} words (max len {max_word_len})")

    data = json.loads(EXAMVEDA_JSON.read_text(encoding="utf-8"))
    total_questions = len(data)
    changed_questions = 0
    changed_fields = 0
    samples = []

    for item in data:
        q_changed = False

        old_q = item.get("questionText", "")
        new_q = fix_text(old_q, word_cost, counts, valid_words, max_word_len)
        if new_q != old_q:
            if len(samples) < 25 or "lossofwater" in old_q.lower():
                samples.append((item.get("_id"), "Q", old_q, new_q))
            item["questionText"] = new_q
            q_changed = True
            changed_fields += 1

        opts = item.get("options") or {}
        for k, v in list(opts.items()):
            old_v = str(v)
            new_v = fix_text(old_v, word_cost, counts, valid_words, max_word_len)
            if new_v != old_v:
                if len(samples) < 25:
                    samples.append((item.get("_id"), f"Opt {k}", old_v, new_v))
                opts[k] = new_v
                q_changed = True
                changed_fields += 1

        ans_key = item.get("correctAnswer")
        if ans_key and ans_key in opts:
            old_cat = item.get("correctAnswerText", "")
            new_cat = opts[ans_key]
            if new_cat != old_cat:
                item["correctAnswerText"] = new_cat
                q_changed = True
                changed_fields += 1
        elif item.get("correctAnswerText"):
            old_cat = item["correctAnswerText"]
            new_cat = fix_text(old_cat, word_cost, counts, valid_words, max_word_len)
            if new_cat != old_cat:
                item["correctAnswerText"] = new_cat
                q_changed = True
                changed_fields += 1

        old_exp = item.get("explanation", "")
        if old_exp:
            m = re.match(r"^(From ExamVeda Question Bank: .+?\.)\s*Correct option is \(([A-D])\).*$", old_exp)
            if m and ans_key and ans_key in opts:
                new_exp = f"{m.group(1)} Correct option is ({ans_key}) {opts[ans_key]}."
            else:
                new_exp = fix_text(old_exp, word_cost, counts, valid_words, max_word_len)
            if new_exp != old_exp:
                item["explanation"] = new_exp
                q_changed = True
                changed_fields += 1

        if q_changed:
            changed_questions += 1

    print(f"\nProcessed {total_questions:,} questions: {changed_questions:,} questions modified ({changed_fields:,} fields).")
    print("\n--- Sample Before -> After ---")
    for qid, kind, before, after in samples[:30]:
        print(f"[{qid} {kind}]\n  BEFORE: {before}\n  AFTER : {after}")

    sci_fixed = fix_science_instruments(dry_run=args.dry_run)
    if sci_fixed:
        print("\nAlso fixed merged words in frontend/js/data_science_instruments.js")

    if not args.dry_run:
        json_str = json.dumps(data, ensure_ascii=False, indent=2)
        EXAMVEDA_JSON.write_text(json_str + "\n", encoding="utf-8")
        js_header = (
            "/**\n"
            " * ExamVeda MCQs Dataset (5,700+ MCQs across General Knowledge, Computer Science, and English)\n"
            " */\n"
            "window.EXAMVEDA_MCQS = "
        )
        EXAMVEDA_JS.write_text(js_header + json_str + ";\n", encoding="utf-8")
        print(f"\nWrote updated files:\n  - {EXAMVEDA_JSON}\n  - {EXAMVEDA_JS}")
    else:
        print("\n[DRY RUN] No files were modified.")


if __name__ == "__main__":
    main()
