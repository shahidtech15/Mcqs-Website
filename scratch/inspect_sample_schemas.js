const fs = require('fs');
const vm = require('vm');

const ddlContent = fs.readFileSync('frontend/js/data_digital_library.js', 'utf8');
const ctx = { window: {} };
vm.runInNewContext(ddlContent, ctx);
const data = ctx.window.DIGITAL_LIBRARY_DATA;

console.log('Sample existing note (note #1):');
console.log(JSON.stringify(data.subjectNotes[1], null, 2));

console.log('\nSample existing PDF (pdf #3):');
console.log(JSON.stringify(data.downloadablePdfs[3], null, 2));
