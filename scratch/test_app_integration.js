const fs = require('fs');

global.window = {};
global.document = {
  getElementById: (id) => ({
    addEventListener: () => {},
    classList: { add: () => {}, remove: () => {} },
    innerHTML: '',
    value: '',
    style: {}
  }),
  querySelectorAll: () => [],
  querySelector: () => null,
  addEventListener: () => {}
};

eval(fs.readFileSync('frontend/js/data_world_org.js', 'utf8'));
eval(fs.readFileSync('frontend/js/data_2200.js', 'utf8'));

const code = fs.readFileSync('frontend/js/app.js', 'utf8') + `
console.log('Category found:', FALLBACK_CATEGORIES.find(c => c._id === 'cat_world_org'));
console.log('Subcategories:', KNOWN_SUBCATEGORIES['World Organizations']);
`;
eval(code);
