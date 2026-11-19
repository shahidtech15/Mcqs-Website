const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '..', 'frontend');
const htmlFiles = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));

console.log(`Auditing ${htmlFiles.length} HTML files in ${frontendDir}...\n`);

const results = [];
const allHtmlFileSet = new Set(htmlFiles);

htmlFiles.forEach(file => {
  const filePath = path.join(frontendDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Title
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;

  // Description
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i) ||
                    content.match(/<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);
  const description = descMatch ? descMatch[1].trim() : null;

  // Viewport
  const hasViewport = /<meta\s+name=["']viewport["']/i.test(content);

  // Canonical
  const hasCanonical = /<link\s+rel=["']canonical["']/i.test(content);

  // Open Graph
  const hasOgTitle = /<meta\s+property=["']og:title["']/i.test(content);
  const hasOgDesc = /<meta\s+property=["']og:description["']/i.test(content);

  // Schema JSON-LD
  const hasSchema = /<script\s+type=["']application\/ld\+json["']/i.test(content);

  // H1 tags
  const h1Matches = content.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];

  // Plain text word count approx
  const textOnly = content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const wordCount = textOnly ? textOnly.split(' ').length : 0;

  // Internal link check
  const linkMatches = [...content.matchAll(/href=["']([^"']+)["']/gi)].map(m => m[1]);
  const deadHashLinks = linkMatches.filter(l => l === '#').length;
  
  const brokenInternalLinks = [];
  linkMatches.forEach(href => {
    // Ignore absolute URLs (http://, https://, mailto:, etc.)
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return;
    }
    // Only check relative html links
    if (href.endsWith('.html') || href.includes('.html#')) {
      const targetBase = href.split('#')[0];
      if (!allHtmlFileSet.has(targetBase)) {
        brokenInternalLinks.push(href);
      }
    }
  });

  results.push({
    file,
    title,
    titleLen: title ? title.length : 0,
    hasDesc: !!description,
    descLen: description ? description.length : 0,
    hasViewport,
    hasCanonical,
    hasOg: hasOgTitle && hasOgDesc,
    hasSchema,
    h1Count: h1Matches.length,
    wordCount,
    deadHashLinks,
    brokenInternalLinks
  });
});

console.log('--- AUDIT RESULTS TABLE ---');
let allClean = true;
results.forEach(r => {
  const flags = [];
  if (!r.title) flags.push('NO_TITLE');
  if (!r.hasDesc) flags.push('NO_DESC');
  if (r.h1Count !== 1) flags.push(`H1_COUNT_${r.h1Count}`);
  if (r.brokenInternalLinks.length > 0) flags.push(`BROKEN_LINKS_${r.brokenInternalLinks.length}`);
  
  if (flags.length > 0) allClean = false;
  console.log(`${r.file.padEnd(35)} | Words: ${String(r.wordCount).padStart(6)} | H1: ${r.h1Count} | Desc: ${r.hasDesc ? 'YES' : 'NO '} | Status: ${flags.join(', ') || 'PERFECT [PASS]'}`);
  if (r.brokenInternalLinks.length > 0) {
    console.log(`   -> Broken links in ${r.file}:`, r.brokenInternalLinks);
  }
});

console.log(`\nOverall Internal Link & Structure Health: ${allClean ? '100% CLEAN - ZERO BROKEN INTERNAL LINKS' : 'ISSUES DETECTED'}`);

// Check policy files
console.log('\n--- MANDATORY ADSENSE POLICY FILES CHECK ---');
const policyFiles = ['privacy.html', 'terms.html', 'about.html', 'contact.html', 'disclaimer.html', 'robots.txt', 'sitemap.xml'];
let allPoliciesPresent = true;
policyFiles.forEach(pf => {
  const exists = fs.existsSync(path.join(frontendDir, pf));
  if (!exists) allPoliciesPresent = false;
  console.log(`${pf.padEnd(20)}: ${exists ? 'EXISTS [PASS]' : 'MISSING [FAIL]'}`);
});
console.log(`AdSense Policy Architecture Status: ${allPoliciesPresent ? '100% COMPLIANT' : 'INCOMPLETE'}`);
