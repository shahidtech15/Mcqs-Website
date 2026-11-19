const fs = require('fs');
const path = require('path');

// 1. world-economy-dashboard.html
const wedPath = path.join('frontend', 'world-economy-dashboard.html');
let wedContent = fs.readFileSync(wedPath, 'utf8');
if (!wedContent.includes('href="index.html"')) {
  wedContent = wedContent.replace(
    '<div class="header-actions">',
    `<div class="header-actions">
                <a href="index.html" style="text-decoration:none; display:inline-flex; align-items:center; gap:6px; padding:6px 14px; border-radius:20px; font-size:0.82rem; font-weight:700; background:var(--econ-card-bg, #1e293b); color:inherit; border:1px solid var(--econ-border, #334155); transition:all 0.2s;" title="Return to CSS Prep Central Home"><i class="fa-solid fa-house"></i> Main Portal</a>`
  );
  fs.writeFileSync(wedPath, wedContent, 'utf8');
  console.log('✓ Updated world-economy-dashboard.html with Main Portal link');
}

// 2. currency-exchange-explorer.html
const ceePath = path.join('frontend', 'currency-exchange-explorer.html');
let ceeContent = fs.readFileSync(ceePath, 'utf8');
if (!ceeContent.includes('href="index.html"')) {
  ceeContent = ceeContent.replace(
    '<div class="header-actions">',
    `<div class="header-actions">
                <a href="index.html" style="text-decoration:none; display:inline-flex; align-items:center; gap:6px; padding:6px 14px; border-radius:20px; font-size:0.82rem; font-weight:700; background:var(--card-bg, #1e293b); color:inherit; border:1px solid var(--border-color, #334155); transition:all 0.2s;" title="Return to CSS Prep Central Home"><i class="fa-solid fa-house"></i> Main Portal</a>`
  );
  fs.writeFileSync(ceePath, ceeContent, 'utf8');
  console.log('✓ Updated currency-exchange-explorer.html with Main Portal link');
}

// 3. fia-laws-explorer.html
const fiaPath = path.join('frontend', 'fia-laws-explorer.html');
let fiaContent = fs.readFileSync(fiaPath, 'utf8');
if (!fiaContent.includes('href="index.html"')) {
  fiaContent = fiaContent.replace(
    '<div class="header-actions">',
    `<div class="header-actions">
                <a href="index.html" class="tab-nav-btn" style="text-decoration:none; background:rgba(30,58,138,0.3); border-color:#3b82f6; color:#93c5fd;" title="Return to CSS Prep Central Home"><i class="fa-solid fa-house"></i> Main Portal</a>`
  );
  fs.writeFileSync(fiaPath, fiaContent, 'utf8');
  console.log('✓ Updated fia-laws-explorer.html with Main Portal link');
}
