const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '..', 'frontend', 'index.html');
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// 1. Add to navbar
const targetNav = `<a href="geoeconomics-finance-essays.html" style="font-weight:700; color:#0f766e;"><i class="fa-solid fa-chart-line"></i> Geoeconomics (12) <span style="background:#ccfbf1; color:#0f766e; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`;
const replacementNav = `${targetNav}\n                <a href="math-tricks.html" style="font-weight:700; color:#0284c7;"><i class="fa-solid fa-calculator"></i> Math Tricks <span style="background:#e0f2fe; color:#0284c7; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`;

if (indexHtml.includes(targetNav) && !indexHtml.includes('href="math-tricks.html"')) {
  indexHtml = indexHtml.replace(targetNav, replacementNav);
  console.log('Updated index.html navbar');
}

// 2. Add to search chips
const targetChip = `<button type="button" class="search-chip" onclick="window.location.href='geoeconomics-finance-essays.html'" style="font-weight:700; border-color:#0f766e; color:#0f766e; background: rgba(15,118,110,0.08);"><i class="fas fa-chart-line"></i> Geoeconomics & Trade Essays (12)</button>`;
const replacementChip = `${targetChip}\n                    <button type="button" class="search-chip" onclick="window.location.href='math-tricks.html'" style="font-weight:700; border-color:#0284c7; color:#0284c7; background: rgba(2,132,199,0.08);"><i class="fas fa-calculator"></i> Math Shortcut Tricks (50+)</button>`;

if (indexHtml.includes(targetChip)) {
  indexHtml = indexHtml.replace(targetChip, replacementChip);
  console.log('Updated index.html search chips');
}

// 3. Add to footer study modules
const targetFooter = `<li><a href="fia-sample-papers.html">FIA Past Papers Hub</a></li>`;
const replacementFooter = `<li><a href="math-tricks.html" style="color: #38bdf8; font-weight: 700;">Math Shortcut Tricks (50+)</a></li>\n                    ${targetFooter}`;

if (indexHtml.includes(targetFooter) && !indexHtml.includes('href="math-tricks.html" style="color: #38bdf8')) {
  indexHtml = indexHtml.replace(targetFooter, replacementFooter);
  console.log('Updated index.html footer');
}

fs.writeFileSync(indexHtmlPath, indexHtml, 'utf8');

// 4. Update frontend/written-prep.html
const writtenHtmlPath = path.join(__dirname, '..', 'frontend', 'written-prep.html');
let writtenHtml = fs.readFileSync(writtenHtmlPath, 'utf8');

const targetWrittenNav = `<a href="geoeconomics-finance-essays.html" style="font-weight: 700; color: #0f766e;"><i class="fa-solid fa-chart-line"></i> Geoeconomics (12 Essays) <span style="background:#ccfbf1; color:#0f766e; font-size:0.68rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`;
const replacementWrittenNav = `${targetWrittenNav}\n                <a href="math-tricks.html" style="font-weight: 700; color: #0284c7;"><i class="fa-solid fa-calculator"></i> Math Tricks <span style="background:#e0f2fe; color:#0284c7; font-size:0.68rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`;

if (writtenHtml.includes(targetWrittenNav) && !writtenHtml.includes('href="math-tricks.html"')) {
  writtenHtml = writtenHtml.replace(targetWrittenNav, replacementWrittenNav);
  console.log('Updated written-prep.html navbar');
}

fs.writeFileSync(writtenHtmlPath, writtenHtml, 'utf8');

// 5. Update frontend/sitemap.xml
const sitemapPath = path.join(__dirname, '..', 'frontend', 'sitemap.xml');
let sitemapXml = fs.readFileSync(sitemapPath, 'utf8');

if (!sitemapXml.includes('math-tricks.html')) {
  const newEntry = `  <url>
    <loc>https://cssprepcentral.com/math-tricks.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n</urlset>`;
  sitemapXml = sitemapXml.replace('</urlset>', newEntry);
  fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');
  console.log('Updated sitemap.xml with math-tricks.html');
}
