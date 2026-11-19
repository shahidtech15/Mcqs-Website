const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'frontend', 'index.html');
let html = fs.readFileSync(target, 'utf-8');

if (!html.includes('href="scholarships.html"')) {
  html = html.replace(
    '<a href="recruitment-prep.html#latest-jobs" style="font-weight:700; color:#e11d48;"><i class="fa-solid fa-bullhorn"></i> Latest Jobs <span style="background:#e11d48; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">17,500+</span></a>',
    '<a href="recruitment-prep.html#latest-jobs" style="font-weight:700; color:#e11d48;"><i class="fa-solid fa-bullhorn"></i> Latest Jobs <span style="background:#e11d48; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">17,500+</span></a>\r\n                <a href="scholarships.html" style="font-weight:700; color:#4338ca;"><i class="fa-solid fa-graduation-cap"></i> Scholarships <span style="background:#4338ca; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">MS/PhD</span></a>'
  );

  html = html.replace(
    '<button type="button" class="search-chip" onclick="window.location.href=\'recruitment-prep.html#latest-jobs\'"',
    '<button type="button" class="search-chip" onclick="window.location.href=\'scholarships.html\'" style="font-weight:800; border-color:#4338ca; color:#4338ca; background: rgba(67, 56, 202, 0.04);"><i class="fa-solid fa-graduation-cap"></i> Master\'s &amp; PhD Scholarships (Fulbright, Chevening, Erasmus, DAAD, MEXT, CSC, HEC)</button>\r\n                    <button type="button" class="search-chip" onclick="window.location.href=\'recruitment-prep.html#latest-jobs\'"'
  );

  fs.writeFileSync(target, html, 'utf-8');
  console.log('index.html updated with Scholarships link.');
} else {
  console.log('Scholarships link already in index.html.');
}
