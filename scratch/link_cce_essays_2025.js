const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '..', 'frontend');

// 1. written-prep.html
let wp = fs.readFileSync(path.join(frontendDir, 'written-prep.html'), 'utf8');
if (!wp.includes('cce-essays-2025.html')) {
  wp = wp.replace(
    '<a href="css-essays-2026.html"',
    '<a href="cce-essays-2025.html" style="font-weight: 700; color: #0d9488;">CCE Essays 2025 <span style="background:#fde047; color:#115e59; font-size:0.68rem; padding:1px 5px; border-radius:4px;">NEW</span></a>\n                <a href="css-essays-2026.html"'
  );

  // In the essay hub banner:
  wp = wp.replace(
    '<a href="css-essays-2026.html" style="background: #fde047; color: #002b66; font-weight: 800; padding: 10px 20px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">',
    `<a href="cce-essays-2025.html" style="background: #0d9488; color: #ffffff; font-weight: 800; padding: 10px 20px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                    <i class="fa-solid fa-landmark"></i> SPSC CCE 2025 Solved Essays <i class="fa-solid fa-arrow-right"></i>
                </a>
                <a href="css-essays-2026.html" style="background: #fde047; color: #002b66; font-weight: 800; padding: 10px 20px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">`
  );
  fs.writeFileSync(path.join(frontendDir, 'written-prep.html'), wp, 'utf8');
  console.log('Updated written-prep.html with CCE 2025 links!');
}

// 2. index.html
let idx = fs.readFileSync(path.join(frontendDir, 'index.html'), 'utf8');
if (!idx.includes('cce-essays-2025.html')) {
  idx = idx.replace(
    '<a href="css-essays-2026.html"',
    '<a href="cce-essays-2025.html" style="font-weight:700; color:#0d9488;">CCE Essays 2025</a>\n                <a href="css-essays-2026.html"'
  );

  idx = idx.replace(
    '<button type="button" class="search-chip" onclick="window.location.href=\'css-essays-2026.html\'"',
    '<button type="button" class="search-chip" onclick="window.location.href=\'cce-essays-2025.html\'" style="font-weight:700; border-color:#0d9488; color:#0d9488;"><i class="fa-solid fa-landmark"></i> SPSC CCE 2025 Essays (All 8 Solved)</button>\n                    <button type="button" class="search-chip" onclick="window.location.href=\'css-essays-2026.html\'"'
  );
  fs.writeFileSync(path.join(frontendDir, 'index.html'), idx, 'utf8');
  console.log('Updated index.html with CCE 2025 links!');
}

// 3. articles.html
let art = fs.readFileSync(path.join(frontendDir, 'articles.html'), 'utf8');
if (!art.includes('cce-essays-2025.html')) {
  art = art.replace(
    '<a href="css-essays-2026.html">CSS Essays 2026</a>',
    '<a href="cce-essays-2025.html">CCE Essays 2025</a>\n                <a href="css-essays-2026.html">CSS Essays 2026</a>'
  );
  fs.writeFileSync(path.join(frontendDir, 'articles.html'), art, 'utf8');
  console.log('Updated articles.html with CCE 2025 links!');
}

// 4. digital-library.html
let dl = fs.readFileSync(path.join(frontendDir, 'digital-library.html'), 'utf8');
if (!dl.includes('cce-essays-2025.html')) {
  dl = dl.replace(
    '<a href="css-essays-2026.html">CSS Essays 2026</a>',
    '<a href="cce-essays-2025.html">CCE Essays 2025</a>\n                <a href="css-essays-2026.html">CSS Essays 2026</a>'
  );
  fs.writeFileSync(path.join(frontendDir, 'digital-library.html'), dl, 'utf8');
  console.log('Updated digital-library.html with CCE 2025 links!');
}

// 5. css-essays-2026.html
let c26 = fs.readFileSync(path.join(frontendDir, 'css-essays-2026.html'), 'utf8');
if (!c26.includes('cce-essays-2025.html')) {
  c26 = c26.replace(
    '<a href="css-essays-2026.html" class="active">CSS Essays 2026</a>',
    '<a href="cce-essays-2025.html">CCE Essays 2025</a>\n                <a href="css-essays-2026.html" class="active">CSS Essays 2026</a>'
  );
  c26 = c26.replace(
    '<a href="css-essays-2021.html" class="btn-hero btn-hero-secondary"><i class="fas fa-history"></i> View CSS 2021 Solved Essays</a>',
    '<a href="cce-essays-2025.html" class="btn-hero btn-hero-secondary"><i class="fas fa-landmark"></i> View SPSC CCE 2025 Essays</a>\n                <a href="css-essays-2021.html" class="btn-hero btn-hero-secondary"><i class="fas fa-history"></i> View CSS 2021 Solved Essays</a>'
  );
  c26 = c26.replace(
    '<li><a href="css-essays-2026.html">CSS 2026 Solved Essays</a></li>',
    '<li><a href="cce-essays-2025.html">SPSC CCE 2025 Solved Essays</a></li>\n                    <li><a href="css-essays-2026.html">CSS 2026 Solved Essays</a></li>'
  );
  fs.writeFileSync(path.join(frontendDir, 'css-essays-2026.html'), c26, 'utf8');
  console.log('Updated css-essays-2026.html with CCE 2025 links!');
}

// 6. css-essays-2021.html
let c21 = fs.readFileSync(path.join(frontendDir, 'css-essays-2021.html'), 'utf8');
if (!c21.includes('cce-essays-2025.html')) {
  c21 = c21.replace(
    '<a href="css-essays-2026.html"',
    '<a href="cce-essays-2025.html">CCE Essays 2025</a>\n                <a href="css-essays-2026.html"'
  );
  c21 = c21.replace(
    '<li><a href="css-essays-2026.html">CSS 2026 Solved Essays (NEW)</a></li>',
    '<li><a href="cce-essays-2025.html">SPSC CCE 2025 Solved Essays (NEW)</a></li>\n                        <li><a href="css-essays-2026.html">CSS 2026 Solved Essays</a></li>'
  );
  fs.writeFileSync(path.join(frontendDir, 'css-essays-2021.html'), c21, 'utf8');
  console.log('Updated css-essays-2021.html with CCE 2025 links!');
}

console.log('All CCE 2025 cross-links synchronized successfully!');
