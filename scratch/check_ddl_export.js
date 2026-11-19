const fs = require('fs');
const path = require('path');

const jsPath = path.join(__dirname, '../frontend/js/data_digital_library.js');
let content = fs.readFileSync(jsPath, 'utf8');

// We can append normalization at the end of data_digital_library.js right before the closing of the IIFE/definition:
// Let's check how DIGITAL_LIBRARY_DATA is exported in data_digital_library.js
