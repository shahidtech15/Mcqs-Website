const fs = require('fs');
const path = require('path');

const adminJsPath = path.join(__dirname, '../frontend/js/admin.js');
let content = fs.readFileSync(adminJsPath, 'utf8');

// Check if AML Act note is already in DEFAULT_NOTES
if (!content.includes('Anti-Money Laundering Act, 2010 (As Amended 2020)')) {
    const targetAnchor = 'const DEFAULT_NOTES = [';
    const newNote = `    {
        _id: 'note_aml_2010',
        title: 'Anti-Money Laundering Act, 2010 (As Amended Upto Sept 2020)',
        exam: 'FPSC / FIA / NAB',
        fileType: 'PDF',
        url: 'acts-rules.html#aml_act_2010',
        description: 'Complete statutory text of Act No. VII of 2010 with September 2020 amendments. Crucial for FIA AD Investigation, Inspector, and Legal tests.',
        uploadedAt: '2026-11-15'
    },
    {
        _id: 'note_civil_servants_act_1973',
        title: 'Civil Servants Act, 1973 & E&D Rules 2020 Compendium',
        exam: 'CSS / PMS / FPSC',
        fileType: 'PDF',
        url: 'acts-rules.html#civil_servants_act_1973',
        description: 'Foundational statutory framework for civil servants: appointments, probation, seniority (Sec 8), CSB, and E&D Rules 2020 disciplinary procedures.',
        uploadedAt: '2026-11-15'
    },`;

    const idx = content.indexOf(targetAnchor);
    if (idx !== -1) {
        content = content.slice(0, idx + targetAnchor.length) + '\n' + newNote + content.slice(idx + targetAnchor.length);
        fs.writeFileSync(adminJsPath, content, 'utf8');
        console.log('Successfully added new statutory notes to admin.js DEFAULT_NOTES!');
    }
} else {
    console.log('admin.js already contains statutory notes.');
}
