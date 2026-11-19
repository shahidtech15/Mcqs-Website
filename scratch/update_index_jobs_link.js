const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'frontend', 'index.html');
let html = fs.readFileSync(target, 'utf-8');

if (!html.includes('recruitment-prep.html#latest-jobs')) {
  html = html.replace(
    '<a href="recruitment-prep.html" style="font-weight:700; color:#0f766e;"><i class="fa-solid fa-briefcase"></i> Recruitment Prep <span style="background:#fde047; color:#115e59; font-size:0.68rem; padding:1px 5px; border-radius:4px;">NEW</span></a>',
    '<a href="recruitment-prep.html" style="font-weight:700; color:#0f766e;"><i class="fa-solid fa-briefcase"></i> Recruitment Prep <span style="background:#fde047; color:#115e59; font-size:0.68rem; padding:1px 5px; border-radius:4px;">NEW</span></a>\r\n                <a href="recruitment-prep.html#latest-jobs" style="font-weight:700; color:#e11d48;"><i class="fa-solid fa-bullhorn"></i> Latest Jobs <span style="background:#e11d48; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">17,500+</span></a>'
  );

  html = html.replace(
    '<button type="button" class="search-chip" onclick="window.location.href=\'recruitment-prep.html\'" style="font-weight:700; border-color:#0f766e; color:#0f766e;"><i class="fa-solid fa-briefcase"></i> Complete Recruitment Prep (FIA AD, Inspector, Customs, AAO, NAB, MOD)</button>',
    '<button type="button" class="search-chip" onclick="window.location.href=\'recruitment-prep.html#latest-jobs\'" style="font-weight:800; border-color:#e11d48; color:#e11d48; background: rgba(225, 29, 72, 0.04);"><i class="fa-solid fa-bullhorn"></i> Latest Jobs: 17,500+ in Sindh Police (2,000 ASI & 15,500 Constables via SPSC/SJP/IBA)</button>\r\n                    <button type="button" class="search-chip" onclick="window.location.href=\'recruitment-prep.html\'" style="font-weight:700; border-color:#0f766e; color:#0f766e;"><i class="fa-solid fa-briefcase"></i> Complete Recruitment Prep (FIA, Sindh Police, Customs, AAO, NAB, MOD)</button>'
  );

  fs.writeFileSync(target, html, 'utf-8');
  console.log('Successfully updated index.html with Latest Jobs links.');
} else {
  console.log('Latest jobs links already present in index.html.');
}
