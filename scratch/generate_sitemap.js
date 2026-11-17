const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '..', 'frontend');
const htmlFiles = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));

const baseUrl = 'https://cssprepcentral.com';

const priorityMap = {
  'index.html': { priority: '1.0', changefreq: 'daily' },
  'written-prep.html': { priority: '0.95', changefreq: 'weekly' },
  'recruitment-prep.html': { priority: '0.95', changefreq: 'daily' },
  'international-relations-essays.html': { priority: '0.9', changefreq: 'weekly' },
  'scholarships.html': { priority: '0.9', changefreq: 'weekly' },
  'upsc-essays-2023.html': { priority: '0.85', changefreq: 'monthly' },
  'cce-essays-2025.html': { priority: '0.85', changefreq: 'monthly' },
  'css-essays-2026.html': { priority: '0.85', changefreq: 'weekly' },
  'css-essays-2021.html': { priority: '0.8', changefreq: 'monthly' },
  'essay-russia-ukraine-war.html': { priority: '0.85', changefreq: 'monthly' },
  'essay-pakistan-education-crisis.html': { priority: '0.85', changefreq: 'monthly' },
  'articles.html': { priority: '0.8', changefreq: 'weekly' },
  'digital-library.html': { priority: '0.8', changefreq: 'weekly' },
  'topic-united-nations.html': { priority: '0.8', changefreq: 'monthly' },
  'topic-european-union.html': { priority: '0.8', changefreq: 'monthly' },
  'topic-nato.html': { priority: '0.8', changefreq: 'monthly' },
  'fia-sample-papers.html': { priority: '0.8', changefreq: 'weekly' },
  'grammar-rules.html': { priority: '0.75', changefreq: 'monthly' },
  'exam-guide.html': { priority: '0.75', changefreq: 'monthly' },
  'editorial-explainer.html': { priority: '0.75', changefreq: 'weekly' },
  'timeline.html': { priority: '0.7', changefreq: 'monthly' },
  'acts-rules.html': { priority: '0.7', changefreq: 'monthly' },
  'quiz.html': { priority: '0.7', changefreq: 'daily' },
  'recommended-books.html': { priority: '0.7', changefreq: 'monthly' },
  'science-notes.html': { priority: '0.7', changefreq: 'monthly' },
  'world-map.html': { priority: '0.65', changefreq: 'monthly' },
  'dashboard.html': { priority: '0.6', changefreq: 'monthly' },
  'leaderboard.html': { priority: '0.6', changefreq: 'daily' },
  'ai-assistant.html': { priority: '0.6', changefreq: 'monthly' },
  'about.html': { priority: '0.5', changefreq: 'monthly' },
  'contact.html': { priority: '0.5', changefreq: 'monthly' },
  'privacy.html': { priority: '0.5', changefreq: 'monthly' },
  'terms.html': { priority: '0.5', changefreq: 'monthly' },
  'disclaimer.html': { priority: '0.5', changefreq: 'monthly' }
};

// Filter out admin.html
const indexableFiles = htmlFiles.filter(f => f !== 'admin.html');

const xmlEntries = indexableFiles.map(file => {
  const filePath = path.join(frontendDir, file);
  const stats = fs.statSync(filePath);
  const lastmod = stats.mtime.toISOString().split('T')[0];
  const config = priorityMap[file] || { priority: '0.6', changefreq: 'monthly' };

  return `  <url>
    <loc>${baseUrl}/${file === 'index.html' ? '' : file}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${config.priority}</priority>
  </url>`;
});

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries.join('\n')}
</urlset>
`;

const outputPath = path.join(frontendDir, 'sitemap.xml');
fs.writeFileSync(outputPath, sitemapXml, 'utf8');
console.log(`Generated sitemap.xml with ${indexableFiles.length} URLs at ${outputPath}`);
