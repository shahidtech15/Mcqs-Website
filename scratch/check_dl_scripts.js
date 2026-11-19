const fs = require('fs');
const dl = fs.readFileSync('frontend/digital-library.html', 'utf8');
const scriptMatches = [...dl.matchAll(/<script[^>]*src=["']([^"']+)["'][^>]*>/g)].map(m => m[1]);
console.log('Scripts in digital-library.html:', scriptMatches);

// Also check inline scripts in digital-library.html
const inlineScripts = [...dl.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
console.log('Inline scripts count:', inlineScripts.length);
if (inlineScripts.length > 0) {
    console.log('Inline script preview (first 500 chars):', inlineScripts[0].slice(0, 500));
}
