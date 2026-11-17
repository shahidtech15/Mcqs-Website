const fs = require('fs');
const path = require('path');
const vm = require('vm');

const html = fs.readFileSync(path.join(__dirname, '../frontend/digital-library.html'), 'utf8');
const js = fs.readFileSync(path.join(__dirname, '../frontend/js/data_digital_library.js'), 'utf8');

const scripts = [...html.matchAll(/<script(?:\s+[^>]*)?>([\s\S]*?)<\/script>/gi)];
const lastScript = scripts[scripts.length - 1][1];

const elements = {};
function createMockEl(id) {
    return {
        innerHTML: '',
        id,
        style: {},
        classList: { add: ()=>{}, remove: ()=>{}, toggle: ()=>false },
        textContent: '',
        getAttribute: (attr) => id,
        addEventListener: (evt, fn) => {}
    };
}

const mockDoc = {
    addEventListener: (evt, cb) => { 
        if (evt === 'DOMContentLoaded') mockDoc.readyCb = cb; 
    },
    getElementById: (id) => {
        if (!elements[id]) {
            elements[id] = createMockEl(id);
        }
        return elements[id];
    },
    querySelectorAll: (sel) => {
        if (sel === '.lib-tab-btn') {
            return [
                'tab-reports', 'tab-editorials', 'tab-treaties', 'tab-maps', 
                'tab-notes', 'tab-solved', 'tab-vocab', 'tab-pdfs'
            ].map(createMockEl);
        }
        if (sel === '.tab-pane') {
            return [
                'tab-reports', 'tab-editorials', 'tab-treaties', 'tab-maps', 
                'tab-notes', 'tab-solved', 'tab-vocab', 'tab-pdfs'
            ].map(createMockEl);
        }
        return [];
    },
    querySelector: (sel) => createMockEl(sel),
    body: createMockEl('body'),
    documentElement: createMockEl('documentElement')
};

const sandbox = {
    window: { 
        location: { hash: '' }, 
        addEventListener: () => {} 
    },
    document: mockDoc,
    localStorage: { getItem: () => null, setItem: () => {} },
    console: console
};

vm.runInNewContext(js, sandbox);

try {
    vm.runInNewContext(lastScript, sandbox);
    console.log('Script parsed cleanly. Invoking DOMContentLoaded callback...');
    sandbox.document.readyCb();
    console.log('DOMContentLoaded callback executed successfully with 0 errors!');
    for (const [id, el] of Object.entries(elements)) {
        if (el.innerHTML) {
            console.log(`- Container #${id}: rendered length = ${el.innerHTML.length} chars`);
        }
    }
} catch (err) {
    console.error('CRASH in DOMContentLoaded execution:', err);
}
