#!/usr/bin/env python3
"""
Automated SEO Optimizer for CSS Prep Central (frontend/).
Applies clean, non-destructive SEO improvements across all HTML pages:
1. Shortens <title> tags > 60 chars cleanly at separator/word boundaries (no ugly mid-word cuts).
2. Shortens <meta name="description"> > 160 chars cleanly at sentence/clause/word boundaries.
3. Adds missing Open Graph and Twitter Card meta tags to indexable pages.
4. Fixes duplicate <h1> on latest-jobs.html (demotes second hero-title to <h2>).
5. Ensures frontend/robots.txt Sitemap URL matches canonical https://www.cssprepcentral.com/sitemap.xml.
"""

import argparse
import html
import re
from pathlib import Path

SITE_HOST = "https://www.cssprepcentral.com"
OG_IMAGE = f"{SITE_HOST}/img/logo.png"
FRONTEND_DIR = Path(__file__).resolve().parent.parent / "frontend"
NON_INDEXABLE = {"admin.html", "404.html"}


def smart_shorten_title(raw_title: str, max_len: int = 60) -> str:
    """Shorten a title cleanly to <= max_len chars without ugly truncation."""
    t = re.sub(r"\s+", " ", html.unescape(raw_title)).strip()
    if len(t) <= max_len:
        return t

    # Step 1: Strip verbose brand suffixes first
    brand_patterns = [
        r"\s*[|—–-]\s*CSS Prep Central\s*&\s*MCQs Portal$",
        r"\s*[|—–-]\s*CSS Prep Central$",
        r"\s*[|—–-]\s*MCQs Portal$",
    ]
    core = t
    for pat in brand_patterns:
        core = re.sub(pat, "", core, flags=re.IGNORECASE).strip()

    # If core fits with " | CSS Prep", use it
    if len(core) + 11 <= max_len:
        return f"{core} | CSS Prep"
    if len(core) <= max_len:
        return core

    # Step 2: Split on major separators (|, —, –) and keep the primary part
    parts = re.split(r"\s*[|—–]\s*", core)
    if len(parts) > 1:
        # Try keeping first part, or first + second if it fits
        candidate = parts[0].strip()
        if len(parts) > 2 and len(candidate) + len(parts[1]) + 3 <= max_len:
            candidate = f"{candidate} — {parts[1].strip()}"
        if 15 <= len(candidate) <= max_len:
            if len(candidate) + 11 <= max_len:
                return f"{candidate} | CSS Prep"
            return candidate
        core = candidate

    # Step 3: Split on colon if first clause is descriptive enough
    if ":" in core:
        before_colon = core.split(":", 1)[0].strip()
        if 20 <= len(before_colon) <= max_len:
            if len(before_colon) + 11 <= max_len:
                return f"{before_colon} | CSS Prep"
            return before_colon

    # Step 4: Clean word-boundary trim (strip trailing connectors/punctuation)
    trimmed = core[:max_len].rsplit(" ", 1)[0].strip()
    trimmed = re.sub(r"[\s,&|:–—-]+$", "", trimmed)
    return trimmed


def smart_shorten_description(raw_desc: str, max_len: int = 160) -> str:
    """Shorten a meta description cleanly to <= max_len chars at sentence/clause/word boundaries."""
    d = re.sub(r"\s+", " ", html.unescape(raw_desc)).strip()
    if len(d) <= max_len:
        return d

    # Step 1: Try taking complete sentences that fit within max_len
    sentences = re.split(r"(?<=[.!?])\s+", d)
    chosen = ""
    for s in sentences:
        candidate = f"{chosen} {s}".strip() if chosen else s
        if len(candidate) <= max_len:
            chosen = candidate
        else:
            break
    if len(chosen) >= 85:
        return chosen

    # Step 2: Trim at clause/word boundary leaving room for a clean period
    limit = max_len - 1
    cut = d[:limit].rsplit(" ", 1)[0].strip()
    # Strip trailing incomplete connectors or punctuation
    cut = re.sub(r"[\s,;:|—–-]+$", "", cut)
    cut = re.sub(r"\b(and|or|with|for|of|in|on|to|the|a|an|by|from|including)$", "", cut, flags=re.IGNORECASE).strip()
    cut = re.sub(r"[\s,;:|—–-]+$", "", cut)
    if not cut.endswith((".", "!", "?")):
        cut += "."
    return cut


def escape_attr(val: str) -> str:
    return html.escape(val, quote=True)


def escape_text(val: str) -> str:
    return html.escape(val, quote=False)


def optimize_html_file(path: Path, dry_run: bool = False) -> list[str]:
    original = path.read_text(encoding="utf-8")
    content = original
    changes = []
    indexable = path.name not in NON_INDEXABLE
    canonical_url = f"{SITE_HOST}/" if path.name == "index.html" else f"{SITE_HOST}/{path.name}"

    # 1. Optimize <title>
    title_match = re.search(r"(<title>)(.*?)(</title>)", content, flags=re.IGNORECASE | re.DOTALL)
    final_title = ""
    if title_match:
        old_title = re.sub(r"\s+", " ", html.unescape(title_match.group(2))).strip()
        new_title = smart_shorten_title(old_title, 60)
        final_title = new_title
        if new_title != old_title:
            content = (
                content[: title_match.start(2)]
                + escape_text(new_title)
                + content[title_match.end(2) :]
            )
            changes.append(f"title: {len(old_title)} -> {len(new_title)} chars")

    # 2. Optimize <meta name="description">
    desc_pat = re.compile(
        r'(<meta\s+[^>]*name=["\']description["\'][^>]*content=)(["\'])(.*?)(\2)',
        flags=re.IGNORECASE | re.DOTALL,
    )
    desc_match = desc_pat.search(content)
    final_desc = ""
    if desc_match:
        old_desc = re.sub(r"\s+", " ", html.unescape(desc_match.group(3))).strip()
        new_desc = smart_shorten_description(old_desc, 160)
        final_desc = new_desc
        if new_desc != old_desc:
            content = (
                content[: desc_match.start(3)]
                + escape_attr(new_desc)
                + content[desc_match.end(3) :]
            )
            changes.append(f"meta description: {len(old_desc)} -> {len(new_desc)} chars")

    # 3. Add missing Open Graph and Twitter Card tags on indexable pages
    if indexable:
        has_og = bool(re.search(r'property=["\']og:title["\']', content, flags=re.IGNORECASE))
        has_tw = bool(re.search(r'name=["\']twitter:card["\']', content, flags=re.IGNORECASE))

        inject_blocks = []
        if not has_og:
            inject_blocks.append(
                "    <!-- Open Graph -->\n"
                '    <meta property="og:type" content="website">\n'
                f'    <meta property="og:url" content="{canonical_url}">\n'
                f'    <meta property="og:title" content="{escape_attr(final_title)}">\n'
                f'    <meta property="og:description" content="{escape_attr(final_desc)}">\n'
                f'    <meta property="og:image" content="{OG_IMAGE}">'
            )
            changes.append("added Open Graph tags")

        if not has_tw:
            inject_blocks.append(
                "    <!-- Twitter Card -->\n"
                '    <meta name="twitter:card" content="summary_large_image">\n'
                f'    <meta name="twitter:title" content="{escape_attr(final_title)}">\n'
                f'    <meta name="twitter:description" content="{escape_attr(final_desc)}">\n'
                f'    <meta name="twitter:image" content="{OG_IMAGE}">'
            )
            changes.append("added Twitter Card tags")

        if inject_blocks:
            block_str = "\n" + "\n".join(inject_blocks) + "\n"
            # Insert right after canonical link (or before </head> as fallback)
            canon_m = re.search(r'<link\s+[^>]*rel=["\']canonical["\'][^>]*>', content, flags=re.IGNORECASE)
            if canon_m:
                pos = canon_m.end()
                content = content[:pos] + block_str + content[pos:]
            else:
                head_end = content.lower().find("</head>")
                if head_end != -1:
                    content = content[:head_end] + block_str + content[head_end:]

    # 4. Fix duplicate <h1> on latest-jobs.html (demote second hero-title to <h2>)
    if path.name == "latest-jobs.html":
        h1_matches = list(re.finditer(r"<h1(\s+class=\"hero-title\"[^>]*)>(.*?)</h1>", content, flags=re.DOTALL))
        if len(h1_matches) > 1:
            second = h1_matches[1]
            replacement = f"<h2{second.group(1)}>{second.group(2)}</h2>"
            content = content[: second.start()] + replacement + content[second.end() :]
            changes.append("demoted duplicate <h1> to <h2>")

    if content != original and not dry_run:
        path.write_text(content, encoding="utf-8")

    return changes


def fix_robots_txt(dry_run: bool = False) -> bool:
    robots_path = FRONTEND_DIR / "robots.txt"
    text = robots_path.read_text(encoding="utf-8")
    updated = text.replace(
        "Sitemap: https://cssprepcentral.com/sitemap.xml",
        f"Sitemap: {SITE_HOST}/sitemap.xml",
    )
    if updated != text:
        if not dry_run:
            robots_path.write_text(updated, encoding="utf-8")
        return True
    return False


def main():
    parser = argparse.ArgumentParser(description="Optimize SEO metadata across frontend HTML files.")
    parser.add_argument("--dry-run", action="store_true", help="Preview changes without writing files.")
    args = parser.parse_args()

    total_modified = 0
    for f in sorted(FRONTEND_DIR.glob("*.html")):
        changes = optimize_html_file(f, dry_run=args.dry_run)
        if changes:
            total_modified += 1
            print(f"  [UPDATED] {f.name}: {', '.join(changes)}")

    if fix_robots_txt(dry_run=args.dry_run):
        print("  [UPDATED] robots.txt: aligned Sitemap URL to https://www.cssprepcentral.com/sitemap.xml")

    mode = "DRY RUN — " if args.dry_run else ""
    print(f"\n{mode}SEO optimization finished. Modified {total_modified} HTML file(s).")


if __name__ == "__main__":
    main()
