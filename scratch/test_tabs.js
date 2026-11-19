const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '../frontend/fia-laws-explorer.html'), 'utf-8');
const data = require(path.join(__dirname, '../frontend/js/data_fia_laws.js'));

// Check all tab IDs and panel IDs
const tabs = ['statutes', 'schedule', 'wings', 'scenarios', 'quiz'];
tabs.forEach(t => {
    const cap = t.charAt(0).toUpperCase() + t.slice(1);
    const btnId = 'btnTab' + cap;
    const panelId = 'view' + cap;
    console.log(`Checking ${btnId}:`, html.includes(`id="${btnId}"`), `| ${panelId}:`, html.includes(`id="${panelId}"`));
});
