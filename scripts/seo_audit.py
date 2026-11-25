#!/usr/bin/env python3
"""
Comprehensive SEO Auditor for CSS Prep Central (frontend/).
Checks on-page SEO, technical SEO, social meta tags, structured data,
robots.txt, and sitemap.xml coverage.
Outputs a Markdown report to scripts/seo-audit-report.md.
"""

import html
import re
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path

SITE_HOST = "https://www.cssprepcentral.com"
FRONTEND_DIR = Path(__file__).resolve().parent.parent / "frontend"
REPORT_PATH = Path(__file__).resolve().parent / "seo-audit-report.md"
NON_INDEXABLE = {"admin.html", "404.html"}


class PageSEOParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ""
        self._in_head = False
        self._in_title = False
        self.meta_desc = ""
        self.robots = ""
        self.viewport = False
        self.lang = ""
        self.canonical = ""
        self.og = {}
        self.twitter = {}
        self.h1_count = 0
        self.imgs = []
        self.jsonld_count = 0

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "head":
            self._in_head = True
        elif tag == "html":
            self.lang = (a.get("lang") or "").strip()
        elif tag == "title" and self._in_head and not self.title:
            self._in_title = True
        elif tag == "meta":
            name = (a.get("name") or "").lower().strip()
            prop = (a.get("property") or "").lower().strip()
            content = (a.get("content") or "").strip()
            if name == "description":
                self.meta_desc = content
            elif name == "robots":
                self.robots = content
            elif name == "viewport":
                self.viewport = True
            elif name.startswith("twitter:"):
                self.twitter[name] = content
            if prop.startswith("og:"):
                self.og[prop] = content
        elif tag == "link" and (a.get("rel") or "").lower().strip() == "canonical":
            self.canonical = (a.get("href") or "").strip()
        elif tag == "h1":
            self.h1_count += 1
        elif tag == "img":
            self.imgs.append((a.get("src", ""), a.get("alt")))
        elif tag == "script" and (a.get("type") or "").lower().strip() == "application/ld+json":
            self.jsonld_count += 1

    def handle_data(self, data):
        if self._in_title:
            self.title += data

    def handle_endtag(self, tag):
        if tag == "head":
            self._in_head = False
        elif tag == "title":
            self._in_title = False


def audit_site():
    html_files = sorted(FRONTEND_DIR.glob("*.html"))
    pages = []
    titles = Counter()
    descs = Counter()

    for f in html_files:
        p = PageSEOParser()
        p.feed(f.read_text(encoding="utf-8", errors="ignore"))
        title = re.sub(r"\s+", " ", html.unescape(p.title)).strip()
        desc = re.sub(r"\s+", " ", html.unescape(p.meta_desc)).strip()
        missing_alt = sum(1 for _, alt in p.imgs if alt is None or not alt.strip())
        indexable = f.name not in NON_INDEXABLE

        if indexable:
            titles[title] += 1
            descs[desc] += 1

        pages.append({
            "file": f.name,
            "indexable": indexable,
            "title": title,
            "title_len": len(title),
            "desc": desc,
            "desc_len": len(desc),
            "h1_count": p.h1_count,
            "img_count": len(p.imgs),
            "missing_alt": missing_alt,
            "canonical": p.canonical,
            "has_og": all(k in p.og for k in ("og:title", "og:description", "og:url")),
            "has_twitter": "twitter:card" in p.twitter,
            "jsonld_count": p.jsonld_count,
            "lang": p.lang,
            "viewport": p.viewport,
            "robots": p.robots,
        })

    # Sitemap check
    sitemap_path = FRONTEND_DIR / "sitemap.xml"
    sitemap_urls = re.findall(r"<loc>(.*?)</loc>", sitemap_path.read_text(encoding="utf-8"))
    sitemap_files = set()
    sitemap_bad_hosts = []
    for u in sitemap_urls:
        if not u.startswith(SITE_HOST):
            sitemap_bad_hosts.append(u)
        rel = re.sub(r"^https?://[^/]+/?", "", u)
        sitemap_files.add("index.html" if rel == "" else rel)

    expected_indexable = {p["file"] for p in pages if p["indexable"]}
    missing_from_sitemap = sorted(expected_indexable - sitemap_files)
    extra_in_sitemap = sorted(sitemap_files - expected_indexable)

    # robots.txt check
    robots_text = (FRONTEND_DIR / "robots.txt").read_text(encoding="utf-8")
    robots_sitemap_ok = f"Sitemap: {SITE_HOST}/sitemap.xml" in robots_text

    # Summarize metrics
    idx_pages = [p for p in pages if p["indexable"]]
    issues = []

    for p in pages:
        f = p["file"]
        if not p["title"]:
            issues.append(f"`{f}`: Missing `<title>` tag")
        elif p["title_len"] > 60:
            issues.append(f"`{f}`: Title > 60 chars ({p['title_len']})")
        if not p["desc"]:
            issues.append(f"`{f}`: Missing `<meta name=\"description\">`")
        elif p["desc_len"] > 160:
            issues.append(f"`{f}`: Meta description > 160 chars ({p['desc_len']})")
        if p["h1_count"] == 0:
            issues.append(f"`{f}`: Missing `<h1>`")
        elif p["h1_count"] > 1:
            issues.append(f"`{f}`: Multiple `<h1>` tags ({p['h1_count']})")
        if p["missing_alt"] > 0:
            issues.append(f"`{f}`: {p['missing_alt']} image(s) missing `alt`")
        if p["indexable"]:
            expected_canon = f"{SITE_HOST}/" if f == "index.html" else f"{SITE_HOST}/{f}"
            if p["canonical"] != expected_canon:
                issues.append(f"`{f}`: Canonical mismatch (`{p['canonical']}` vs `{expected_canon}`)")
            if not p["has_og"]:
                issues.append(f"`{f}`: Incomplete/missing Open Graph tags")
            if not p["has_twitter"]:
                issues.append(f"`{f}`: Missing Twitter Card tags")
            if p["jsonld_count"] == 0:
                issues.append(f"`{f}`: Missing JSON-LD structured data")

    dup_titles = [t for t, c in titles.items() if c > 1]
    dup_descs = [d for d, c in descs.items() if c > 1]
    if dup_titles:
        issues.append(f"Duplicate titles found: {len(dup_titles)}")
    if dup_descs:
        issues.append(f"Duplicate meta descriptions found: {len(dup_descs)}")
    if not robots_sitemap_ok:
        issues.append(f"`frontend/robots.txt`: Sitemap URL does not match `{SITE_HOST}/sitemap.xml`")
    if missing_from_sitemap:
        issues.append(f"Pages missing from `sitemap.xml`: {', '.join(missing_from_sitemap)}")
    if extra_in_sitemap:
        issues.append(f"Extra entries in `sitemap.xml`: {', '.join(extra_in_sitemap)}")
    if sitemap_bad_hosts:
        issues.append(f"Non-canonical host URLs in `sitemap.xml`: {len(sitemap_bad_hosts)}")

    summary = {
        "Total HTML pages": len(pages),
        "Indexable pages": len(idx_pages),
        "Titles > 60 chars": sum(1 for p in pages if p["title_len"] > 60),
        "Meta descriptions > 160 chars": sum(1 for p in pages if p["desc_len"] > 160),
        "Missing / Multiple H1": sum(1 for p in pages if p["h1_count"] != 1),
        "Images missing alt": sum(p["missing_alt"] for p in pages),
        "Indexable pages missing Canonical": sum(1 for p in idx_pages if not p["canonical"]),
        "Indexable pages missing Open Graph": sum(1 for p in idx_pages if not p["has_og"]),
        "Indexable pages missing Twitter Card": sum(1 for p in idx_pages if not p["has_twitter"]),
        "Indexable pages missing JSON-LD": sum(1 for p in idx_pages if p["jsonld_count"] == 0),
        "Duplicate titles": len(dup_titles),
        "Duplicate descriptions": len(dup_descs),
        "robots.txt Sitemap matches canonical host": "Yes" if robots_sitemap_ok else "No",
        "sitemap.xml coverage": f"{len(sitemap_files)}/{len(expected_indexable)} (missing: {len(missing_from_sitemap)}, extra: {len(extra_in_sitemap)})",
    }

    lines = [
        "# SEO Audit Report — CSS Prep Central",
        "",
        "## Executive Summary",
        "",
        "| Metric | Status |",
        "|--------|--------|",
    ]
    for k, v in summary.items():
        lines.append(f"| {k} | {v} |")

    lines.extend(["", f"## Issues Found ({len(issues)})", ""])
    if issues:
        for item in issues:
            lines.append(f"- {item}")
    else:
        lines.append("All SEO checks passed with 0 issues!")

    lines.extend([
        "",
        "## Per-Page SEO Matrix",
        "",
        "| Page | Title Len | Desc Len | H1 | Missing Alt | OG | Twitter | JSON-LD |",
        "|------|-----------|----------|----|-------------|----|---------|---------|",
    ])
    for p in pages:
        og = "Yes" if p["has_og"] else ("N/A" if not p["indexable"] else "No")
        tw = "Yes" if p["has_twitter"] else ("N/A" if not p["indexable"] else "No")
        ld = str(p["jsonld_count"]) if p["indexable"] else "N/A"
        lines.append(
            f"| `{p['file']}` | {p['title_len']} | {p['desc_len']} | {p['h1_count']} | {p['missing_alt']} | {og} | {tw} | {ld} |"
        )

    REPORT_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"SEO Audit complete: {len(issues)} issue(s) across {len(pages)} pages.")
    for k, v in summary.items():
        print(f"  {k}: {v}")
    print(f"Report saved to: {REPORT_PATH}")
    return len(issues)


if __name__ == "__main__":
    audit_site()
