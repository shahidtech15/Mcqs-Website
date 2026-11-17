const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== VERIFYING DIGITAL LIBRARY SUB-SECTIONS & TAB SWITCHING ===');

const html = fs.readFileSync(path.join(__dirname, '../frontend/digital-library.html'), 'utf8');
const js = fs.readFileSync(path.join(__dirname, '../frontend/js/data_digital_library.js'), 'utf8');

const scripts = [...html.matchAll(/<script(?:\s+[^>]*)?>([\s\S]*?)<\/script>/gi)];
const lastScript = scripts[scripts.length - 1][1];

const tabsData = [
    { id: 'tab-reports', label: 'Official Reports', grid: 'reportsGrid' },
    { id: 'tab-editorials', label: 'Editorial Summaries', grid: 'editorialsGrid' },
    { id: 'tab-treaties', label: 'Treaties & Accords', grid: 'treatiesGrid' },
    { id: 'tab-maps', label: 'Maps & Chokepoints', grid: 'mapsGrid' },
    { id: 'tab-notes', label: 'Subject Notes', grid: 'notesGrid' },
    { id: 'tab-solved', label: 'Solved 20-Mark Qs', grid: 'solvedGrid' },
    { id: 'tab-vocab', label: 'High-Yield Vocab', grid: 'vocabGrid' },
    { id: 'tab-pdfs', label: 'Downloadable PDFs', grid: 'pdfGrid' }
];

const elements = {};
function createMockEl(id) {
    const listeners = {};
    const classes = new Set();
    return {
        innerHTML: '',
        id,
        style: { display: 'none' },
        classList: { 
            add: (c) => classes.add(c), 
            remove: (c) => classes.delete(c), 
            contains: (c) => classes.has(c),
            toggle: (c, force) => {
                if (force === undefined) {
                    if (classes.has(c)) classes.delete(c); else classes.add(c);
                } else if (force) classes.add(c); else classes.delete(c);
                return classes.has(c);
            }
        },
        textContent: '',
        getAttribute: (attr) => id,
        addEventListener: (evt, fn) => {
            if (!listeners[evt]) listeners[evt] = [];
            listeners[evt].push(fn);
        },
        trigger: (evt) => {
            (listeners[evt] || []).forEach(fn => fn({ target: { value: '' } }));
        }
    };
}

const tabBtns = tabsData.map(t => createMockEl(t.id));
const panes = tabsData.map(t => createMockEl(t.id));

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
        if (sel === '.lib-tab-btn') return tabBtns;
        if (sel === '.tab-pane') return panes;
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
vm.runInNewContext(lastScript, sandbox);

let passed = 0, failed = 0;
function test(desc, cond) {
    if (cond) {
        passed++;
        console.log(`[PASS] ${desc}`);
    } else {
        failed++;
        console.error(`[FAIL] ${desc}`);
    }
}

// 1. Initial execution
sandbox.document.readyCb();

tabsData.forEach(t => {
    const gridEl = elements[t.grid];
    test(`Section '${t.label}' rendered content into #${t.grid}`, gridEl && gridEl.innerHTML.length > 500);
});

// 2. Test tab button clicks
tabsData.forEach((targetTab, index) => {
    const btn = tabBtns[index];
    btn.trigger('click');

    const activePane = panes.find(p => p.id === targetTab.id);
    const otherPanes = panes.filter(p => p.id !== targetTab.id);

    const isTargetActive = activePane.style.display === 'block' && activePane.classList.contains('active');
    const areOthersHidden = otherPanes.every(p => p.style.display === 'none' && !p.classList.contains('active'));

    test(`Clicking '${targetTab.label}' tab button activates #${targetTab.id} and hides others`, isTargetActive && areOthersHidden);
});

// 3. Test search live filter
const searchInput = elements['libSearchInput'];
if (searchInput) {
    searchInput.trigger('input');
    test('Live search filter runs cleanly without throwing', true);
} else {
    test('libSearchInput element exists', false);
}

console.log(`\n========================================`);
console.log(`Verification Complete: ${passed} passed, ${failed} failed.`);
console.log(`========================================`);

if (failed > 0) process.exit(1);
