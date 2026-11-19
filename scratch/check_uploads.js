const fs = require('fs');

const transcriptPath = 'C:/Users/SHAHID/.gemini/antigravity/brain/0c4309c6-1ca1-4b4a-b132-818009c888ed/.system_generated/logs/transcript.jsonl';
const content = fs.readFileSync(transcriptPath, 'utf8');

const regex = /uploaded as "([^"]+)"/g;
let m;
const uploadedNames = new Set();
while ((m = regex.exec(content)) !== null) {
  uploadedNames.add(m[1]);
}
console.log('Uploaded filenames:');
uploadedNames.forEach(name => console.log(' - ' + name));
