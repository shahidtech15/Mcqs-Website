const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');
const htmlFiles = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));

console.log('--- ENRICHING SEO: CANONICAL, OPEN GRAPH & TWITTER TAGS ---');

let canonicalAdded = 0;
let ogAdded = 0;

htmlFiles.forEach(file => {
  if (file === 'admin.html') return; // Skip admin
  const filePath = path.join(frontendDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Extract title
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  let title = titleMatch ? titleMatch[1].trim() : 'CSS Prep Central & MCQs Portal';
  // Escape quotes in title
  title = title.replace(/"/g, '&quot;');

  // Extract description
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i) ||
                    content.match(/<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);
  let description = descMatch ? descMatch[1].trim() : 'Comprehensive civil services competitive exam preparation portal for CSS, PMS, FPSC, PPSC, and SPSC aspirants.';
  // Truncate and escape description
  if (description.length > 200) description = description.slice(0, 197) + '...';
  description = description.replace(/"/g, '&quot;');

  // Check canonical
  const hasCanonical = /<link\s+rel=["']canonical["']/i.test(content);
  let seoBlock = '';

  if (!hasCanonical) {
    const canonicalUrl = file === 'index.html' ? 'https://cssprepcentral.com/' : `https://cssprepcentral.com/${file}`;
    seoBlock += `\n    <link rel="canonical" href="${canonicalUrl}">`;
    canonicalAdded++;
    modified = true;
  }

  // Check Open Graph & Twitter
  const hasOg = /<meta\s+property=["']og:title["']/i.test(content);
  if (!hasOg) {
    const pageUrl = file === 'index.html' ? 'https://cssprepcentral.com/' : `https://cssprepcentral.com/${file}`;
    const pageType = file === 'index.html' ? 'website' : 'article';

    seoBlock += `
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${pageType}">
    <meta property="og:site_name" content="CSS Prep Central">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="https://cssprepcentral.com/img/logo.png">

    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="https://cssprepcentral.com/img/logo.png">`;
    ogAdded++;
    modified = true;
  }

  if (seoBlock && content.includes('</head>')) {
    // Inject right before </head>
    content = content.replace('</head>', `${seoBlock}\n</head>`);
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log(`✓ Added canonical tags to ${canonicalAdded} pages`);
console.log(`✓ Added Open Graph & Twitter Cards to ${ogAdded} pages`);
