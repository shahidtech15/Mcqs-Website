const fs = require('fs');
const aikb = fs.readFileSync('frontend/js/ai_knowledge_base.js', 'utf8');
const lawKeysMatch = aikb.match(/laws:\s*\{([\s\S]*?)\n\s*\},/);
if (lawKeysMatch) {
    const keys = [...lawKeysMatch[1].matchAll(/([a-zA-Z0-9_]+):\s*\{/g)].map(m => m[1]);
    console.log('Laws in AI_KNOWLEDGE_BASE:', keys);
}
console.log('Top level keys in AI_KNOWLEDGE_BASE:');
const topKeys = [...aikb.matchAll(/^\s{2}([a-zA-Z0-9_]+):\s*\{/gm)].map(m => m[1]);
console.log(topKeys);
