#!/usr/bin/env python3
"""
Places the official Google tag (gtag.js) for G-TEPBG0KLFR immediately after <head>
across all 91 HTML files in frontend/.

Starts with the exact verbatim Google Analytics 4 tag lines:
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-TEPBG0KLFR"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-TEPBG0KLFR');
so Google Analytics' "Test your website" scanner and Google Tag Assistant detect it
100% reliably, followed by Consent Mode v2 and PII URL protection helpers.
"""

import re
from pathlib import Path

FRONTEND_DIR = Path(__file__).resolve().parent.parent / "frontend"
MEASUREMENT_ID = "G-TEPBG0KLFR"

GA4_HEAD_TOP_SNIPPET = """
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-TEPBG0KLFR"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-TEPBG0KLFR');

      (function() {
        var consentChoice = null;
        try { consentChoice = localStorage.getItem('cssprep_cookie_consent_v1'); } catch (e) {}
        if (consentChoice === 'declined') {
          window['ga-disable-G-TEPBG0KLFR'] = true;
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
          });
        }
        window.setGa4Consent = function(granted) {
          var status = granted ? 'granted' : 'denied';
          window['ga-disable-G-TEPBG0KLFR'] = !granted;
          gtag('consent', 'update', {
            'analytics_storage': status,
            'ad_storage': status,
            'ad_user_data': status,
            'ad_personalization': status
          });
          if (!granted) {
            var hostParts = window.location.hostname.split('.');
            var rootDomain = hostParts.length >= 2 ? '.' + hostParts.slice(-2).join('.') : window.location.hostname;
            ['_ga', '_ga_TEPBG0KLFR', '_gid', '_gat'].forEach(function(cName) {
              document.cookie = cName + '=; Max-Age=0; path=/;';
              document.cookie = cName + '=; Max-Age=0; path=/; domain=' + window.location.hostname + ';';
              document.cookie = cName + '=; Max-Age=0; path=/; domain=' + rootDomain + ';';
            });
          }
        };
      })();
    </script>"""

OLD_GA_BLOCKS_RE = re.compile(
    r"\s*<!-- Google tag \(gtag\.js\)(?: - Google Analytics 4)? -->\s*<script async src=\"https://www\.googletagmanager\.com/gtag/js\?id=G-TEPBG0KLFR\"></script>\s*<script>.*?</script>",
    flags=re.DOTALL,
)

HEAD_OPEN_RE = re.compile(r"(<head[^>]*>)", flags=re.IGNORECASE)


def main():
    html_files = sorted(FRONTEND_DIR.glob("*.html"))
    updated = 0
    for f in html_files:
        original = f.read_text(encoding="utf-8")
        cleaned = OLD_GA_BLOCKS_RE.sub("", original)
        m = HEAD_OPEN_RE.search(cleaned)
        if not m:
            print(f"[WARN] No <head> found in {f.name}")
            continue
        pos = m.end()
        new_content = cleaned[:pos] + GA4_HEAD_TOP_SNIPPET + cleaned[pos:]
        if new_content != original:
            f.write_text(new_content, encoding="utf-8")
            updated += 1
    print(f"Placed verbatim GA4 (G-TEPBG0KLFR) tag at top of <head> across {updated} HTML file(s) (total: {len(html_files)}).")


if __name__ == "__main__":
    main()
