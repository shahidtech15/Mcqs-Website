const fs = require('fs');
const path = require('path');

const timelinePath = path.join(__dirname, '../frontend/timeline.html');
let html = fs.readFileSync(timelinePath, 'utf8');

const targetStr = `<li><a href="timeline.html" class="active" style="font-weight: 700; color: #4338ca;"><i class="fa-solid fa-timeline"></i> Historical Timeline</a></li>`;
const repStr = `<li><a href="timeline.html" class="active" style="font-weight: 700; color: #4338ca;"><i class="fa-solid fa-timeline"></i> Historical Timeline</a></li>
                <li><a href="#pakistan-oneliners" style="font-weight: 700; color: #059669;"><i class="fa-solid fa-bolt"></i> 1857-Present One-Liners</a></li>`;

if (html.includes(targetStr)) {
    html = html.replace(targetStr, repStr);
    fs.writeFileSync(timelinePath, html, 'utf8');
    console.log('Successfully updated secondary nav in timeline.html!');
} else {
    console.warn('Target string not found');
}
