const fs = require('fs');

const transcriptPath = 'C:/Users/SHAHID/.gemini/antigravity/brain/0c4309c6-1ca1-4b4a-b132-818009c888ed/.system_generated/logs/transcript.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;
  try {
    const obj = JSON.parse(line);
    if (obj.media && obj.media.length > 0) {
      console.log(`Step ${obj.step_index}: media = ${JSON.stringify(obj.media)}`);
    }
    if (obj.type === 'USER_INPUT') {
      const c = obj.content || '';
      if (c.includes('media_') || c.includes('.pdf') || c.includes('.jpg') || c.includes('.png')) {
        console.log(`Step ${obj.step_index} user input mentions file: ${c.substring(0, 150)}`);
      }
    }
  } catch (e) {}
}
