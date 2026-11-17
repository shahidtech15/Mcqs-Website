const fs = require('fs');
const path = require('path');

const dlPath = path.join(__dirname, '../frontend/digital-library.html');
let content = fs.readFileSync(dlPath, 'utf8');

const oldTabBlock = `            // Tab Switching
            const tabs = document.querySelectorAll('.lib-tab-btn');
            const panes = document.querySelectorAll('.tab-pane');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => t.classList.remove('active'));
                    panes.forEach(p => {
                        p.classList.remove('active');
                        p.style.display = 'none';
                    });

                    tab.classList.add('active');
                    const targetId = tab.getAttribute('data-tab');
                    const targetPane = document.getElementById(targetId);
                    if (targetPane) {
                        targetPane.classList.add('active');
                        targetPane.style.display = 'block';
                    }
                });
            });`;

const newTabBlock = `            // Tab Switching & Hash Navigation
            const tabs = document.querySelectorAll('.lib-tab-btn');
            const panes = document.querySelectorAll('.tab-pane');

            function switchTab(targetId) {
                if (!targetId) return;
                const cleanId = targetId.replace('#', '');
                tabs.forEach(t => {
                    if (t.getAttribute('data-tab') === cleanId) {
                        t.classList.add('active');
                    } else {
                        t.classList.remove('active');
                    }
                });
                panes.forEach(p => {
                    if (p.id === cleanId) {
                        p.classList.add('active');
                        p.style.display = 'block';
                    } else {
                        p.classList.remove('active');
                        p.style.display = 'none';
                    }
                });
            }

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const targetId = tab.getAttribute('data-tab');
                    switchTab(targetId);
                });
            });

            // Hash navigation on load and change
            if (window.location.hash) {
                switchTab(window.location.hash);
            }
            window.addEventListener('hashchange', () => {
                if (window.location.hash) {
                    switchTab(window.location.hash);
                }
            });`;

content = content.replace(oldTabBlock, newTabBlock);
fs.writeFileSync(dlPath, content, 'utf8');
console.log('Successfully updated Tab Switching and Hash Navigation in digital-library.html!');
