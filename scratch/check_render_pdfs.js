const fs = require('fs');
const dl = fs.readFileSync('frontend/digital-library.html', 'utf8');
const renderPdfsIdx = dl.indexOf('function renderPdfs(');
console.log(dl.slice(renderPdfsIdx, renderPdfsIdx + 1200));
