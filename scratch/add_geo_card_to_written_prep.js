const fs = require('fs');
const path = require('path');

const writtenHtmlPath = path.join(__dirname, '..', 'frontend', 'written-prep.html');
let html = fs.readFileSync(writtenHtmlPath, 'utf8');

const targetAnchor = 'Read All 12 Security Master Essays &amp; Outlines\n                </a>\n            </div>\n        </div>';

const geoCard = `
        <!-- Geoeconomics & Global Finance Banner Card -->
        <div style="background: linear-gradient(135deg, #042f2e 0%, #115e59 50%, #0f766e 100%); color: #ffffff; border-radius: 16px; padding: 28px 32px; margin-bottom: 35px; box-shadow: 0 10px 25px rgba(15, 118, 110, 0.25); display: flex; flex-direction: column; gap: 14px; border-left: 5px solid #d97706;">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                <span style="background: rgba(20, 184, 166, 0.25); border: 1px solid rgba(94, 234, 212, 0.45); padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: 700; color: #5eead4; text-transform: uppercase;">
                    <i class="fa-solid fa-chart-line"></i> Global Political Economy, Trade &amp; Finance
                </span>
                <span style="font-size: 0.85rem; color: #ccfbf1; font-weight: 500;">
                    <i class="fa-solid fa-book-reader"></i> 12 Master Solved Essays • Hierarchical Outlines (~17,540 Words)
                </span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px;">
                <h2 style="color: #ffffff; font-size: 1.6rem; font-weight: 800; margin: 0; font-family: 'Outfit', sans-serif;">
                    12 Master Essays on Geoeconomics, Dollar Hegemony &amp; Global Finance
                </h2>
                <p style="color: #ccfbf1; font-size: 0.96rem; line-height: 1.6; margin: 0; max-width: 950px;">
                    Comprehensive model answers and examination outlines: Globalization in Retreat, Dollar Weaponization, Future of the US Dollar as Reserve Currency, Rise of Protectionism, US-China Trade War, Global Debt Crisis, IMF &amp; World Bank Role, Future of Global Supply Chains, Economic Sanctions, Digital Economy &amp; Global Finance, Cryptocurrency &amp; CBDCs, and Red Sea &amp; Hormuz Chokepoint Disruptions.
                </p>
            </div>
            <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center; margin-top: 6px;">
                <a href="geoeconomics-finance-essays.html" style="background: #d97706; color: #ffffff; padding: 10px 22px; border-radius: 8px; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; font-size: 0.95rem; box-shadow: 0 4px 12px rgba(217, 119, 6, 0.35);">
                    <i class="fa-solid fa-book-open"></i> Read All 12 Geoeconomics Master Essays &amp; Outlines
                </a>
                <a href="geoeconomics-finance-essays.html#topic-1" style="background: rgba(255, 255, 255, 0.15); color: #ffffff; padding: 10px 18px; border-radius: 8px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; font-size: 0.9rem; border: 1px solid rgba(255, 255, 255, 0.25);">
                    <i class="fa-solid fa-compass"></i> Topic Quick Navigator
                </a>
            </div>
        </div>`;

if (!html.includes('geoeconomics-finance-essays.html#topic-1')) {
  // Let's find the closing tag of the security card container
  const secIdx = html.indexOf('Read All 12 Security Master Essays &amp; Outlines');
  const cardEnd = html.indexOf('</div>\n        </div>', secIdx);
  if (cardEnd !== -1) {
    const insertPos = cardEnd + '</div>\n        </div>'.length;
    html = html.slice(0, insertPos) + '\n' + geoCard + html.slice(insertPos);
    fs.writeFileSync(writtenHtmlPath, html, 'utf8');
    console.log('Successfully inserted Geoeconomics banner card into written-prep.html');
  } else {
    console.log('Could not find card end');
  }
} else {
  console.log('Already contains geoeconomics banner card');
}
