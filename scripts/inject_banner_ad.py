#!/usr/bin/env python3
"""
Idempotently places the three sponsored ad units in a clean responsive slot
immediately above the footer across all 89 public HTML pages in frontend/
(excluding admin.html and 404.html):
1. 160x300 Banner (key: 97264972179081aee1b6c7d88a288980)
2. 160x600 Skyscraper (key: b50906c41b73355e61f450db7775af1f)
3. Standalone Ad Script (src: https://abscloud.org/1/3b1b00432f38229d68fcea0aa5992c72)
"""

import re
from pathlib import Path

FRONTEND_DIR = Path(__file__).resolve().parent.parent / "frontend"
EXCLUDED_FILES = {"admin.html", "404.html"}
AD_KEY_300 = "97264972179081aee1b6c7d88a288980"
AD_KEY_600 = "b50906c41b73355e61f450db7775af1f"
AD_KEY_ABS = "3b1b00432f38229d68fcea0aa5992c72"

BANNER_BLOCK = """    <!-- Sponsored 160x300 & 160x600 Banner Slot -->
    <aside class="sponsored-banner-slot" aria-label="Sponsored Advertisement" style="max-width:1200px;margin:28px auto 18px;padding:12px 16px;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;">
        <span style="font-size:0.7rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#94a3b8;">Advertisement</span>
        <div style="display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:24px;">
            <div style="min-width:160px;min-height:300px;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;border-radius:8px;">
                <script>
                  atOptions = {
                    'key' : '97264972179081aee1b6c7d88a288980',
                    'format' : 'iframe',
                    'height' : 300,
                    'width' : 160,
                    'params' : {}
                  };
                </script>
                <script data-cfasync="false" src="https://bauval.org/22/97264972179081aee1b6c7d88a288980"></script>
            </div>
            <div style="min-width:160px;min-height:600px;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;border-radius:8px;">
                <script>
                  atOptions = {
                    'key' : 'b50906c41b73355e61f450db7775af1f',
                    'format' : 'iframe',
                    'height' : 600,
                    'width' : 160,
                    'params' : {}
                  };
                </script>
                <script data-cfasync="false" src="https://bauval.org/22/b50906c41b73355e61f450db7775af1f"></script>
            </div>
        </div>
        <script data-cfasync="false" src="https://abscloud.org/1/3b1b00432f38229d68fcea0aa5992c72"></script>
    </aside>
"""

EXISTING_BANNER_RE = re.compile(
    r"\s*<!-- Sponsored 160x300(?: & 160x600)? Banner Slot -->.*?</aside>\n?",
    flags=re.DOTALL,
)

FOOTER_OPEN_RE = re.compile(r"([ \t]*<footer\b)", flags=re.IGNORECASE)
BODY_CLOSE_RE = re.compile(r"([ \t]*</body>)", flags=re.IGNORECASE)


def main():
    html_files = sorted(FRONTEND_DIR.glob("*.html"))
    updated = 0
    checked_public = 0

    for f in html_files:
        if f.name in EXCLUDED_FILES:
            continue
        checked_public += 1
        original = f.read_text(encoding="utf-8")
        cleaned = EXISTING_BANNER_RE.sub("\n", original)

        if AD_KEY_300 in cleaned and AD_KEY_600 in cleaned and AD_KEY_ABS in cleaned:
            continue

        m_footer = FOOTER_OPEN_RE.search(cleaned)
        if m_footer:
            pos = m_footer.start()
            new_content = cleaned[:pos].rstrip() + "\n\n" + BANNER_BLOCK + cleaned[pos:]
        else:
            m_body = BODY_CLOSE_RE.search(cleaned)
            if not m_body:
                print(f"[WARN] No <footer> or </body> found in {f.name}")
                continue
            pos = m_body.start()
            new_content = cleaned[:pos].rstrip() + "\n\n" + BANNER_BLOCK + cleaned[pos:]

        if new_content != original:
            f.write_text(new_content, encoding="utf-8")
            updated += 1

    print(f"Placed all 3 ad units across {updated} public HTML file(s) (total public: {checked_public}).")


if __name__ == "__main__":
    main()
