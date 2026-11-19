const fs = require('fs');
const path = require('path');

console.log('====================================================');
console.log('   FULL-PORTAL AUDIT: ASSETS, LINKS, SEO & ADSENSE   ');
console.log('====================================================');

const frontendDir = path.join(__dirname, '../frontend');
const htmlFiles = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));

console.log(`Found ${htmlFiles.length} HTML files in frontend/`);

// 1. Audit All References (Links, Scripts, Stylesheets, Images)
let totalLocalRefs = 0;
let brokenRefs = [];
let missingMetaDescription = [];
let missingCanonical = [];
let missingOgTags = [];
let missingHomeLink = [];
let missingFooterOrPolicy = [];
let missingTitle = [];

htmlFiles.forEach(file => {
  const filePath = path.join(frontendDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Title check
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    missingTitle.push(file);
  }

  // Meta description check
  const metaDescMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i) ||
                        content.match(/<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);
  if (!metaDescMatch || !metaDescMatch[1].trim()) {
    missingMetaDescription.push(file);
  }

  // Canonical tag check
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
  if (!canonicalMatch) {
    missingCanonical.push(file);
  }

  // OG tags check
  const ogTitle = content.match(/<meta\s+property=["']og:title["']/i);
  const ogDesc = content.match(/<meta\s+property=["']og:description["']/i);
  if (!ogTitle || !ogDesc) {
    missingOgTags.push(file);
  }

  // Home link check (is there a link to index.html or logo home?)
  const hasHomeLink = /href=["'](index\.html|[\/.]?)["']/i.test(content) || file === 'index.html';
  if (!hasHomeLink) {
    missingHomeLink.push(file);
  }

  // Policy / Footer links check
  const hasPrivacy = content.includes('privacy.html');
  const hasTerms = content.includes('terms.html');
  const hasContact = content.includes('contact.html');
  if (!hasPrivacy && !hasTerms && !hasContact) {
    missingFooterOrPolicy.push(file);
  }

  // Check all src="..." and href="..."
  const attrRegex = /(?:src|href)=["']([^"']+)["']/gi;
  let m;
  while ((m = attrRegex.exec(content)) !== null) {
    const rawRef = m[1].trim();

    // Skip external URLs, tel, mailto, javascript, empty, and pure anchors
    if (/^(https?:|\/\/|mailto:|tel:|javascript:|#|data:)/i.test(rawRef)) {
      continue;
    }

    // Strip anchor fragment and query params
    const cleanRef = rawRef.split('#')[0].split('?')[0];
    if (!cleanRef) continue; // was just #hash or ?query

    totalLocalRefs++;

    // Resolve relative path from file directory
    const resolvedPath = path.resolve(frontendDir, cleanRef);
    if (!fs.existsSync(resolvedPath)) {
      brokenRefs.push({
        sourceFile: file,
        rawRef: rawRef,
        resolvedPath: resolvedPath
      });
    }
  }
});

console.log(`\n--- REFERENCE AUDIT RESULTS ---`);
console.log(`Total local references (href/src) checked: ${totalLocalRefs}`);
console.log(`Broken references found: ${brokenRefs.length}`);
if (brokenRefs.length > 0) {
  brokenRefs.forEach(b => {
    console.error(`  [BROKEN] in ${b.sourceFile}: "${b.rawRef}" -> not found at ${b.resolvedPath}`);
  });
}

console.log(`\n--- SEO AUDIT RESULTS ---`);
console.log(`Pages missing <title>: ${missingTitle.length}`);
if (missingTitle.length > 0) console.log(' ', missingTitle);

console.log(`Pages missing <meta name="description">: ${missingMetaDescription.length}`);
if (missingMetaDescription.length > 0) console.log(' ', missingMetaDescription);

console.log(`Pages missing <link rel="canonical">: ${missingCanonical.length}`);
if (missingCanonical.length > 0) console.log(' ', missingCanonical);

console.log(`Pages missing Open Graph tags: ${missingOgTags.length}`);
if (missingOgTags.length > 0) console.log(' ', missingOgTags);

console.log(`\n--- NAVIGATION & ADSENSE COMPLIANCE RESULTS ---`);
console.log(`Pages missing Home link (index.html): ${missingHomeLink.length}`);
if (missingHomeLink.length > 0) console.log(' ', missingHomeLink);

console.log(`Pages missing policy links (privacy/terms/contact): ${missingFooterOrPolicy.length}`);
if (missingFooterOrPolicy.length > 0) console.log(' ', missingFooterOrPolicy);

// Check sitemap.xml coverage
const sitemapPath = path.join(frontendDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const missingFromSitemap = htmlFiles.filter(f => !sitemapContent.includes(f));
  console.log(`\n--- SITEMAP.XML AUDIT ---`);
  console.log(`HTML files in directory: ${htmlFiles.length}`);
  console.log(`Files missing from sitemap.xml: ${missingFromSitemap.length}`);
  if (missingFromSitemap.length > 0) {
    console.log(' ', missingFromSitemap);
  }
} else {
  console.log('sitemap.xml is missing!');
}
