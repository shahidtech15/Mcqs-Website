const fs = require('fs');
const path = require('path');

const svgRaw = fs.readFileSync(path.join(__dirname, '../frontend/img/world-map.svg'), 'utf8');
// Strip XML declaration and doctype so it's clean inline SVG
const cleanSvg = svgRaw
  .replace(/<\?xml[\s\S]*?\?>/i, '')
  .replace(/<!DOCTYPE[\s\S]*?>/i, '')
  .trim();

console.log('Clean SVG length:', cleanSvg.length);
console.log('Clean SVG starts with:', cleanSvg.substring(0, 100));
