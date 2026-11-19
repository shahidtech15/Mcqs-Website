const fs = require('fs');
const ddl = fs.readFileSync('frontend/js/data_digital_library.js', 'utf8');
const objKeys = [...ddl.matchAll(/(REPORTS_DATA|EDITORIALS_DATA|TREATIES_DATA|MAPS_DATA|SUBJECT_NOTES_DATA|SOLVED_DESCRIPTIVE_DATA|VOCABULARY_500_DATA|DOWNLOADABLE_PDFS_DATA)\s*=\s*\[/g)].map(m => m[1]);
console.log('Datasets in data_digital_library.js:', objKeys);
