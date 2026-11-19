const fs = require('fs');
const path = require('path');

// 1. Update frontend/index.html
const indexHtmlPath = path.join(__dirname, '..', 'frontend', 'index.html');
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// A. Navbar link
const targetNav = `<a href="global-security-conflict-essays.html" style="font-weight:700; color:#881337;"><i class="fa-solid fa-shield-halved"></i> Global Security (12) <span style="background:#fde047; color:#881337; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`;
const replacementNav = `${targetNav}\n                <a href="geoeconomics-finance-essays.html" style="font-weight:700; color:#0f766e;"><i class="fa-solid fa-chart-line"></i> Geoeconomics (12) <span style="background:#ccfbf1; color:#0f766e; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`;

if (indexHtml.includes(targetNav) && !indexHtml.includes('geoeconomics-finance-essays.html')) {
  indexHtml = indexHtml.replace(targetNav, replacementNav);
  console.log('Updated index.html navbar');
}

// B. Search chip
const targetChip = `<button type="button" class="search-chip" onclick="window.location.href='global-security-conflict-essays.html'" style="font-weight:700; border-color:#881337; color:#881337; background: rgba(136,19,55,0.08);"><i class="fas fa-shield-halved"></i> Global Security Essays (12)</button>`;
const replacementChip = `${targetChip}\n                    <button type="button" class="search-chip" onclick="window.location.href='geoeconomics-finance-essays.html'" style="font-weight:700; border-color:#0f766e; color:#0f766e; background: rgba(15,118,110,0.08);"><i class="fas fa-chart-line"></i> Geoeconomics & Trade Essays (12)</button>`;

if (indexHtml.includes(targetChip)) {
  indexHtml = indexHtml.replace(targetChip, replacementChip);
  console.log('Updated index.html search chip');
}

// C. Footer written links
const targetFooter = `<li><a href="global-security-conflict-essays.html" style="color: #cbd5e1; text-decoration: none;"><i class="fas fa-angle-right" style="margin-right: 6px;"></i>12 Global Security Essays</a></li>`;
const replacementFooter = `${targetFooter}\n                    <li><a href="geoeconomics-finance-essays.html" style="color: #cbd5e1; text-decoration: none;"><i class="fas fa-angle-right" style="margin-right: 6px;"></i>12 Geoeconomics & Trade Essays</a></li>`;

if (indexHtml.includes(targetFooter)) {
  indexHtml = indexHtml.replace(targetFooter, replacementFooter);
  console.log('Updated index.html footer');
}

fs.writeFileSync(indexHtmlPath, indexHtml, 'utf8');

// 2. Update frontend/written-prep.html
const writtenHtmlPath = path.join(__dirname, '..', 'frontend', 'written-prep.html');
let writtenHtml = fs.readFileSync(writtenHtmlPath, 'utf8');

const targetWrittenNav = `<a href="global-security-conflict-essays.html" style="font-weight: 700; color: #881337;"><i class="fa-solid fa-shield-halved"></i> Security & Conflict (12) <span style="background:#fde047; color:#881337; font-size:0.68rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`;
const replacementWrittenNav = `${targetWrittenNav}\n                <a href="geoeconomics-finance-essays.html" style="font-weight: 700; color: #0f766e;"><i class="fa-solid fa-chart-line"></i> Geoeconomics & Trade (12) <span style="background:#ccfbf1; color:#0f766e; font-size:0.68rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`;

if (writtenHtml.includes(targetWrittenNav) && !writtenHtml.includes('geoeconomics-finance-essays.html')) {
  writtenHtml = writtenHtml.replace(targetWrittenNav, replacementWrittenNav);
  console.log('Updated written-prep.html nav');
}

const targetWrittenBanner = `<a href="global-security-conflict-essays.html" style="background: #f59e0b; color: #0f172a; padding: 10px 22px; border-radius: 8px; text-decoration: none; font-weight: 700; display: inline-flex; align-items: center; gap: 8px;"><i class="fas fa-shield-halved"></i> Open Security & Conflict Hub (12 Topics)</a>`;
const replacementWrittenBanner = `${targetWrittenBanner}\n                <a href="geoeconomics-finance-essays.html" style="background: #0f766e; color: #ffffff; padding: 10px 22px; border-radius: 8px; text-decoration: none; font-weight: 700; display: inline-flex; align-items: center; gap: 8px;"><i class="fas fa-chart-line"></i> Open Geoeconomics & Trade Hub (12 Topics)</a>`;

if (writtenHtml.includes(targetWrittenBanner)) {
  writtenHtml = writtenHtml.replace(targetWrittenBanner, replacementWrittenBanner);
  console.log('Updated written-prep.html banner');
}

fs.writeFileSync(writtenHtmlPath, writtenHtml, 'utf8');

// 3. Update frontend/sitemap.xml
const sitemapPath = path.join(__dirname, '..', 'frontend', 'sitemap.xml');
let sitemapXml = fs.readFileSync(sitemapPath, 'utf8');

if (!sitemapXml.includes('geoeconomics-finance-essays.html')) {
  const newUrlEntry = `  <url>
    <loc>https://cssprepcentral.com/geoeconomics-finance-essays.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n</urlset>`;

  sitemapXml = sitemapXml.replace('</urlset>', newUrlEntry);
  fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');
  console.log('Updated sitemap.xml with geoeconomics-finance-essays.html');
}
