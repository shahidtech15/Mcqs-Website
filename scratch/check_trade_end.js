const fs = require('fs');
const content = fs.readFileSync('frontend/js/data_trade_routes.js', 'utf8');
console.log(content.substring(content.length - 200));
