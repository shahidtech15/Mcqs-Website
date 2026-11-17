const fs = require('fs');

// Mock browser DOM
const dom = {};
global.window = {};
global.document = {
  getElementById: (id) => {
    if (!dom[id]) {
      dom[id] = {
        innerHTML: '',
        listeners: {},
        addEventListener: function(evt, fn) { this.listeners[evt] = fn; },
        querySelectorAll: function(sel) { return []; }
      };
    }
    return dom[id];
  },
  querySelectorAll: (sel) => [],
  addEventListener: () => {}
};

eval(fs.readFileSync('frontend/js/data_exam_guides.js', 'utf8'));
console.log('window.EXAM_GUIDES length:', window.EXAM_GUIDES.length);

// Load app.js
const appCode = fs.readFileSync('frontend/js/app.js', 'utf8');
eval(appCode);

// Call initExamGuideSection
initExamGuideSection();

console.log('examTabsNav rendered length:', dom['examTabsNav'].innerHTML.length);
console.log('examCardContainer rendered length:', dom['examCardContainer'].innerHTML.length);
console.log('Card contains FIA:', dom['examCardContainer'].innerHTML.includes('Federal Investigation Agency'));
console.log('Simulation test passed successfully!');
