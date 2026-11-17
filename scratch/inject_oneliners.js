const fs = require('fs');
const path = require('path');

const dataTimelinePath = path.join(__dirname, '../frontend/js/data_timeline.js');
const onelinersPath = path.join(__dirname, 'pakistan_oneliners.json');

const oneliners = JSON.parse(fs.readFileSync(onelinersPath, 'utf8'));
let code = fs.readFileSync(dataTimelinePath, 'utf8');

const injection = `
    const PAKISTAN_ONELINERS = ${JSON.stringify(oneliners, null, 4)};
`;

if (!code.includes('PAKISTAN_ONELINERS')) {
    const returnPattern = '    return {';
    const replacement = injection + '\n    return {\n        getPakistanOneLiners: function() { return JSON.parse(JSON.stringify(PAKISTAN_ONELINERS)); },';
    code = code.replace(returnPattern, replacement);
    fs.writeFileSync(dataTimelinePath, code, 'utf8');
    console.log('Successfully injected 114 Pakistan One-Liners into frontend/js/data_timeline.js!');
} else {
    console.log('PAKISTAN_ONELINERS already exists in frontend/js/data_timeline.js');
}
