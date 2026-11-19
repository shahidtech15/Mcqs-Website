const fs = require('fs');
const path = require('path');

const files = [
  'crossword.html',
  'word-search.html',
  'arrange-chronologically.html',
  'guess-the-country.html',
  'locate-on-map.html',
  'match-the-following.html',
  'world-map.html',
  'physical-geography-map.html',
  'geopolitical-hotspots-map.html',
  'international-trade-routes-map.html',
  'pakistan-map.html',
  'sindh-map.html'
];

files.forEach(fileName => {
  const filePath = path.join(__dirname, '..', 'frontend', fileName);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. In switcher bar: add after word-search.html
  const switcherTarget = '<a href="word-search.html" class="switcher-btn';
  if (content.includes(switcherTarget)) {
    // Check if unsc already present
    if (!content.includes('href="unsc-simulator.html" class="switcher-btn"')) {
      const regexSwitcher = /(<a href="word-search\.html" class="switcher-btn[^>]*>[\s\S]*?<\/a>)/;
      content = content.replace(regexSwitcher, `$1\n            <a href="unsc-simulator.html" class="switcher-btn" style="color:#3b82f6;">\n                <i class="fas fa-scale-balanced"></i> UNSC Simulator\n            </a>`);
    }
  }

  // 2. In nav-links: add after word-search.html
  const navTarget1 = '<a href="word-search.html" style="color:#8b5cf6; font-weight:700;"><i class="fas fa-magnifying-glass"></i> Word Search</a>';
  const navTarget2 = '<a href="word-search.html" style="font-weight:700; color:#8b5cf6;"><i class="fas fa-magnifying-glass"></i> Word Search</a>';
  const navTarget3 = '<a href="word-search.html" style="font-weight:700; color:#8b5cf6;"><i class="fa-solid fa-magnifying-glass"></i> Word Search</a>';
  const navTarget4 = '<a href="word-search.html" style="color: #8b5cf6; font-weight: 700;"><i class="fas fa-magnifying-glass"></i> Word Search</a>';
  const navTarget5 = '<a href="word-search.html" class="active" style="color:var(--ws-primary); font-weight:800;"><i class="fas fa-magnifying-glass"></i> Word Search</a>';

  const unscNavLink = '<a href="unsc-simulator.html" style="color:#1d4ed8; font-weight:700;"><i class="fas fa-scale-balanced"></i> UNSC Simulator</a>';

  [navTarget1, navTarget2, navTarget3, navTarget4, navTarget5].forEach(t => {
    if (content.includes(t) && !content.includes(unscNavLink)) {
      content = content.replace(t, `${t}\n                ${unscNavLink}`);
    }
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${fileName}`);
});
