const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');
const htmlFiles = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));

console.log('--- STANDARDIZING FOOTERS & POLICY LINKS ---');

let footersAppended = 0;
let footersEnhanced = 0;
let cookieConsentAdded = 0;

const legalBarHtml = `
        <div class="footer-legal-bar" style="margin-top:16px; padding-top:14px; border-top:1px solid rgba(255,255,255,0.1); font-size:0.8rem; display:flex; flex-wrap:wrap; justify-content:center; gap:16px; color:#94a3b8;">
            <a href="about.html" style="color:#94a3b8; text-decoration:none;"><i class="fa-solid fa-users"></i> About Us</a>
            <a href="contact.html" style="color:#94a3b8; text-decoration:none;"><i class="fa-solid fa-envelope"></i> Contact Us</a>
            <a href="privacy.html" style="color:#60a5fa; text-decoration:none;"><i class="fa-solid fa-shield-halved"></i> Privacy Policy</a>
            <a href="terms.html" style="color:#94a3b8; text-decoration:none;"><i class="fa-solid fa-file-contract"></i> Terms of Service</a>
            <a href="disclaimer.html" style="color:#f87171; text-decoration:none;"><i class="fa-solid fa-triangle-exclamation"></i> Disclaimer</a>
            <a href="sitemap.xml" style="color:#94a3b8; text-decoration:none;"><i class="fa-solid fa-sitemap"></i> Sitemap</a>
        </div>`;

const fullFooterHtml = `
    <!-- Standard Academic & Legal Footer -->
    <footer class="site-footer" style="background:#0f172a; color:#94a3b8; padding:36px 20px 24px; margin-top:50px; border-top:1px solid #1e293b; font-family:'Plus Jakarta Sans', sans-serif;">
        <div style="max-width:1200px; margin:0 auto; text-align:center;">
            <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:16px; font-size:0.88rem; margin-bottom:14px;">
                <a href="index.html" style="color:#ffffff; font-weight:700; text-decoration:none;"><i class="fa-solid fa-house"></i> Home</a>
                <a href="quiz.html" style="color:#cbd5e1; text-decoration:none;"><i class="fa-solid fa-graduation-cap"></i> Practice Quiz</a>
                <a href="daily-challenges.html" style="color:#a78bfa; font-weight:700; text-decoration:none;"><i class="fa-solid fa-bolt"></i> Daily Challenges</a>
                <a href="daily-fact.html" style="color:#2dd4bf; font-weight:700; text-decoration:none;"><i class="fa-solid fa-calendar-day"></i> Daily Fact</a>
                <a href="digital-library.html" style="color:#cbd5e1; text-decoration:none;"><i class="fa-solid fa-book-bookmark"></i> Digital Library</a>
                <a href="pakistan-map.html" style="color:#cbd5e1; text-decoration:none;"><i class="fa-solid fa-map"></i> Pakistan Map</a>
            </div>
            <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:18px; font-size:0.8rem; padding-top:12px; border-top:1px solid #1e293b; color:#94a3b8;">
                <a href="about.html" style="color:#94a3b8; text-decoration:none;"><i class="fa-solid fa-users"></i> About Us</a>
                <a href="contact.html" style="color:#94a3b8; text-decoration:none;"><i class="fa-solid fa-envelope"></i> Contact Us</a>
                <a href="privacy.html" style="color:#60a5fa; text-decoration:none;"><i class="fa-solid fa-shield-halved"></i> Privacy Policy</a>
                <a href="terms.html" style="color:#94a3b8; text-decoration:none;"><i class="fa-solid fa-file-contract"></i> Terms of Service</a>
                <a href="disclaimer.html" style="color:#f87171; text-decoration:none;"><i class="fa-solid fa-triangle-exclamation"></i> Disclaimer</a>
                <a href="sitemap.xml" style="color:#94a3b8; text-decoration:none;"><i class="fa-solid fa-sitemap"></i> Sitemap</a>
            </div>
            <p style="font-size:0.78rem; margin-top:14px; color:#64748b;">
                &copy; 2026 CSS Prep Central &bull; Pakistan's Premier Open-Access Civil Services Preparation Repository.
            </p>
        </div>
    </footer>`;

htmlFiles.forEach(file => {
  if (file === 'admin.html') return; // Skip admin
  const filePath = path.join(frontendDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  const hasPrivacy = content.includes('privacy.html');
  const hasFooter = /<footer[\s\S]*?<\/footer>/i.test(content);

  if (!hasFooter) {
    // Append full footer before </body>
    if (content.includes('</body>')) {
      content = content.replace('</body>', `${fullFooterHtml}\n</body>`);
      footersAppended++;
      modified = true;
    }
  } else if (!hasPrivacy) {
    // Has footer, but lacks privacy link -> inject legal bar right before </footer>
    content = content.replace(/<\/footer>/i, `${legalBarHtml}\n    </footer>`);
    footersEnhanced++;
    modified = true;
  }

  // Cookie consent script injection
  if (!content.includes('cookie-consent.js') && content.includes('</body>')) {
    content = content.replace('</body>', `    <script src="js/cookie-consent.js"></script>\n</body>`);
    cookieConsentAdded++;
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log(`✓ Footers newly appended to ${footersAppended} pages`);
console.log(`✓ Footers enhanced with policy links in ${footersEnhanced} pages`);
console.log(`✓ Cookie consent banner script injected into ${cookieConsentAdded} pages`);
