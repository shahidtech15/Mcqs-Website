const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');
const htmlFiles = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));

console.log('--- REGENERATING SITEMAP.XML ---');

// Exclude admin and 404 from sitemap
const publicFiles = htmlFiles.filter(f => f !== 'admin.html' && f !== '404.html');

// Helper to determine priority and changefreq
function getMeta(file) {
  if (file === 'index.html') {
    return { priority: '1.0', changefreq: 'daily' };
  }
  if (['daily-challenges.html', 'daily-fact.html', 'quiz.html', 'latest-jobs.html', 'leaderboard.html'].includes(file)) {
    return { priority: '0.9', changefreq: 'daily' };
  }
  if ([
    'pakistan-map.html', 'world-map.html', 'sindh-map.html', 'physical-geography-map.html',
    'geopolitical-hotspots-map.html', 'international-trade-routes-map.html', 'locate-on-map.html',
    'guess-the-country.html', 'world-economy-dashboard.html', 'currency-exchange-explorer.html',
    'who-trades-what.html', 'fia-laws-explorer.html', 'constitution-explorer.html',
    'court-structure-explorer.html', 'ppc-section-finder.html', 'crpc-procedure-flowchart.html',
    'identify-legal-provision.html', 'periodic-table.html', 'solar-system-explorer.html',
    'human-body-explorer.html', 'climate-change-explorer.html', 'technology-explorer.html',
    'world-history-timeline.html', 'timeline.html', 'unsc-simulator.html', 'global-power-comparison.html',
    'international-organizations-explorer.html', 'math-mcqs.html', 'islamiat-mcqs.html',
    'digital-library.html', 'recruitment-prep.html', 'written-prep.html', 'scholarships.html'
  ].includes(file)) {
    return { priority: '0.8', changefreq: 'weekly' };
  }
  if (file.includes('essay') || file.includes('topic') || ['grammar-rules.html', 'math-tricks.html', 'science-notes.html', 'fia-sample-papers.html', 'recommended-books.html', 'acts-rules.html', 'articles.html'].includes(file)) {
    return { priority: '0.7', changefreq: 'weekly' };
  }
  // Policy & meta pages
  if (['about.html', 'contact.html', 'privacy.html', 'terms.html', 'disclaimer.html'].includes(file)) {
    return { priority: '0.5', changefreq: 'monthly' };
  }
  return { priority: '0.6', changefreq: 'monthly' };
}

const today = '2026-11-18';

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Put index.html first
const sortedFiles = ['index.html', ...publicFiles.filter(f => f !== 'index.html').sort()];

sortedFiles.forEach(f => {
  const meta = getMeta(f);
  const loc = f === 'index.html' ? 'https://cssprepcentral.com/' : `https://cssprepcentral.com/${f}`;
  xml += `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
  </url>
`;
});

xml += `</urlset>\n`;

fs.writeFileSync(path.join(frontendDir, 'sitemap.xml'), xml, 'utf8');
fs.writeFileSync(path.join(__dirname, '../sitemap.xml'), xml, 'utf8');

console.log(`✓ Generated sitemap.xml with ${sortedFiles.length} URLs in frontend/ and workspace root`);
