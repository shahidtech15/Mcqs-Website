const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '..', 'frontend');

// 1. written-prep.html
let wp = fs.readFileSync(path.join(frontendDir, 'written-prep.html'), 'utf8');
if (!wp.includes('css-essays-2026.html')) {
  // Nav link
  wp = wp.replace(
    '<a href="css-essays-2021.html" style="font-weight: 700; color: #831843;">CSS Essays 2021</a>',
    '<a href="css-essays-2026.html" style="font-weight: 700; color: #002b66;">CSS Essays 2026 <span style="background:#fde047; color:#002b66; font-size:0.68rem; padding:1px 5px; border-radius:4px;">NEW</span></a>\n                <a href="css-essays-2021.html" style="font-weight: 700; color: #831843;">CSS Essays 2021</a>'
  );

  // Banner buttons
  const oldBtn = '<a href="css-essays-2021.html" style="background: #fde047; color: #4c0519; font-weight: 800; padding: 10px 20px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">';
  const newBtns = `<a href="css-essays-2026.html" style="background: #fde047; color: #002b66; font-weight: 800; padding: 10px 20px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                    <i class="fa-solid fa-graduation-cap"></i> CSS 2026 Solved Essays Hub (30k+ Words) <i class="fa-solid fa-arrow-right"></i>
                </a>
                <a href="css-essays-2021.html" style="background: rgba(255, 255, 255, 0.2); color: #ffffff; font-weight: 700; padding: 10px 18px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(255, 255, 255, 0.4);">
                    <i class="fa-solid fa-book-open"></i> CSS 2021 Essays`;
  wp = wp.replace(oldBtn, newBtns);
  fs.writeFileSync(path.join(frontendDir, 'written-prep.html'), wp, 'utf8');
  console.log('Updated written-prep.html!');
}

// 2. index.html
let idx = fs.readFileSync(path.join(frontendDir, 'index.html'), 'utf8');
if (!idx.includes('css-essays-2026.html')) {
  // Nav
  idx = idx.replace(
    '<a href="css-essays-2021.html">CSS Essays 2021</a>',
    '<a href="css-essays-2026.html" style="font-weight:700; color:#002b66;">CSS Essays 2026</a>\n                <a href="css-essays-2021.html">CSS Essays 2021</a>'
  );

  // Search chips
  idx = idx.replace(
    '<button type="button" class="search-chip" onclick="window.location.href=\'css-essays-2021.html\'"',
    '<button type="button" class="search-chip" onclick="window.location.href=\'css-essays-2026.html\'" style="font-weight:700; border-color:#002b66; color:#002b66;"><i class="fa-solid fa-award"></i> CSS 2026 Essays (All 10 Solved)</button>\n                    <button type="button" class="search-chip" onclick="window.location.href=\'css-essays-2021.html\'"'
  );
  fs.writeFileSync(path.join(frontendDir, 'index.html'), idx, 'utf8');
  console.log('Updated index.html!');
}

// 3. articles.html
let art = fs.readFileSync(path.join(frontendDir, 'articles.html'), 'utf8');
if (!art.includes('css-essays-2026.html')) {
  art = art.replace(
    '<a href="css-essays-2021.html">CSS Essays 2021</a>',
    '<a href="css-essays-2026.html">CSS Essays 2026</a>\n                <a href="css-essays-2021.html">CSS Essays 2021</a>'
  );
  fs.writeFileSync(path.join(frontendDir, 'articles.html'), art, 'utf8');
  console.log('Updated articles.html!');
}

// 4. digital-library.html
let dl = fs.readFileSync(path.join(frontendDir, 'digital-library.html'), 'utf8');
if (!dl.includes('css-essays-2026.html')) {
  dl = dl.replace(
    '<a href="css-essays-2021.html">CSS Essays 2021</a>',
    '<a href="css-essays-2026.html">CSS Essays 2026</a>\n                <a href="css-essays-2021.html">CSS Essays 2021</a>'
  );
  fs.writeFileSync(path.join(frontendDir, 'digital-library.html'), dl, 'utf8');
  console.log('Updated digital-library.html!');
}

// 5. css-essays-2021.html
let c21 = fs.readFileSync(path.join(frontendDir, 'css-essays-2021.html'), 'utf8');
if (!c21.includes('css-essays-2026.html')) {
  c21 = c21.replace(
    '<a href="css-essays-2021.html" class="active" style="font-weight: 700; color: #831843;">CSS Essays 2021</a>',
    '<a href="css-essays-2026.html" style="font-weight: 700; color: #002b66;">CSS Essays 2026 <span style="background:#fde047; color:#002b66; font-size:0.68rem; padding:1px 5px; border-radius:4px;">NEW</span></a>\n                <a href="css-essays-2021.html" class="active" style="font-weight: 700; color: #831843;">CSS Essays 2021</a>'
  );
  c21 = c21.replace(
    '<li><a href="css-essays-2021.html">CSS 2021 Solved Essays</a></li>',
    '<li><a href="css-essays-2026.html">CSS 2026 Solved Essays (NEW)</a></li>\n                        <li><a href="css-essays-2021.html">CSS 2021 Solved Essays</a></li>'
  );
  fs.writeFileSync(path.join(frontendDir, 'css-essays-2021.html'), c21, 'utf8');
  console.log('Updated css-essays-2021.html!');
}

console.log('All links successfully synchronized across the site!');
