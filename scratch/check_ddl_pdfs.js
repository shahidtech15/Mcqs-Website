const fs = require('fs');
const ddl = fs.readFileSync('frontend/js/data_digital_library.js', 'utf8');
const pdfIdx = ddl.indexOf('downloadablePdfs: [');
console.log(ddl.slice(pdfIdx, pdfIdx + 500));
