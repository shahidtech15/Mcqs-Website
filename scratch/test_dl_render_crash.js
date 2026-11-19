const fs = require('fs');
const vm = require('vm');

const ddlContent = fs.readFileSync('frontend/js/data_digital_library.js', 'utf8');
const ctx = { window: {} };
vm.runInNewContext(ddlContent, ctx);
const data = ctx.window.DIGITAL_LIBRARY_DATA;

console.log('Testing renderNotes items:');
data.subjectNotes.forEach((n, idx) => {
    try {
        const themes = (n.coreThemes || []).map(t => t);
        if (!n.coreThemes) throw new Error(`n.coreThemes is undefined on note #${idx}: ${n.title}`);
    } catch (e) {
        console.error('ERROR in note:', e.message);
    }
});

console.log('\nTesting renderPdfs items:');
data.downloadablePdfs.forEach((p, idx) => {
    try {
        if (!p.tags) throw new Error(`p.tags is undefined on pdf #${idx}: ${p.title}`);
        const tags = p.tags.map(t => t);
    } catch (e) {
        console.error('ERROR in pdf:', e.message);
    }
});
