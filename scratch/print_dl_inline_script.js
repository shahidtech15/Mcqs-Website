const fs = require('fs');
const dl = fs.readFileSync('frontend/digital-library.html', 'utf8');
const inlineScripts = [...dl.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
if (inlineScripts.length > 1) {
    console.log(inlineScripts[1]);
}
