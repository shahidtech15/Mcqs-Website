const fs = require('fs');
const dl = fs.readFileSync('frontend/digital-library.html', 'utf8');
const renderNotesIdx = dl.indexOf('function renderNotes(');
console.log(dl.slice(renderNotesIdx, renderNotesIdx + 1200));
