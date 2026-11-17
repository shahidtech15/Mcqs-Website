const fs = require('fs');
const articles = fs.readFileSync('frontend/js/data_seo_articles.js', 'utf8');
const titles = [...articles.matchAll(/title:\s*["']([^"']+)["']/g)].map(m => m[1]);
console.log('Articles in data_seo_articles.js:', titles);
