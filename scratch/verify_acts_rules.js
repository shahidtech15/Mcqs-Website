const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== ACTS & RULES COMPREHENSIVE VERIFICATION ===');
let pass = 0, fail = 0;

function test(name, condition) {
    if (condition) {
        pass++;
        console.log(`[PASS] ${name}`);
    } else {
        fail++;
        console.error(`[FAIL] ${name}`);
    }
}

// 1. Check acts-rules.html
const actsHtmlPath = path.join(__dirname, '../frontend/acts-rules.html');
test('frontend/acts-rules.html exists', fs.existsSync(actsHtmlPath));
const actsHtml = fs.readFileSync(actsHtmlPath, 'utf8');

const expectedHtmlStrings = [
    'Anti-Money Laundering Act, 2010',
    'Civil Servants Act, 1973',
    'Civil Servants (Efficiency and Discipline) Rules, 2020',
    'APT Rules, 1973 &amp; Quotas',
    'International Deputation Rules, 2016',
    'Official Provincial &amp; Regional Quotas Matrix (Rule 14)',
    'Statutory Mastery Quiz Engine',
    'actsSearchInput',
    'tab-aml', 'tab-csa', 'tab-ed', 'tab-apt', 'tab-intl', 'tab-quiz'
];
expectedHtmlStrings.forEach(s => {
    test(`acts-rules.html contains: ${s}`, actsHtml.includes(s));
});

// 2. Check data_acts_rules.js
const actsJsPath = path.join(__dirname, '../frontend/js/data_acts_rules.js');
test('frontend/js/data_acts_rules.js exists', fs.existsSync(actsJsPath));
const ctxActs = { window: {} };
vm.runInNewContext(fs.readFileSync(actsJsPath, 'utf8'), ctxActs);
const actsData = ctxActs.window.ACTS_RULES_DATA;

test('data_acts_rules.js has aml_act_2010', !!actsData.aml_act_2010);
test('data_acts_rules.js has civil_servants_act_1973', !!actsData.civil_servants_act_1973);
test('data_acts_rules.js has civil_servants_ed_rules_2020', !!actsData.civil_servants_ed_rules_2020);
test('data_acts_rules.js has civil_servants_apt_rules_1973', !!actsData.civil_servants_apt_rules_1973);
test('data_acts_rules.js has civil_servants_intl_org_rules_2016', !!actsData.civil_servants_intl_org_rules_2016);
test('data_acts_rules.js has 40+ high-yield questions', actsData.questions && actsData.questions.length >= 40);

// 3. Check ai_knowledge_base.js
const aikbPath = path.join(__dirname, '../frontend/js/ai_knowledge_base.js');
const ctxAikb = { window: {} };
vm.runInNewContext(fs.readFileSync(aikbPath, 'utf8'), ctxAikb);
const laws = ctxAikb.window.AI_KNOWLEDGE_BASE.laws;

test('AI_KNOWLEDGE_BASE contains aml_act_2010', !!laws.aml_act_2010);
test('AI_KNOWLEDGE_BASE contains civil_servants_act_1973', !!laws.civil_servants_act_1973);
test('AI_KNOWLEDGE_BASE contains civil_servants_ed_rules_2020', !!laws.civil_servants_ed_rules_2020);
test('AI_KNOWLEDGE_BASE contains civil_servants_apt_rules_1973', !!laws.civil_servants_apt_rules_1973);
test('AI_KNOWLEDGE_BASE contains civil_servants_intl_org_rules_2016', !!laws.civil_servants_intl_org_rules_2016);

// 4. Check data_digital_library.js
const ddlPath = path.join(__dirname, '../frontend/js/data_digital_library.js');
const ctxDdl = { window: {} };
vm.runInNewContext(fs.readFileSync(ddlPath, 'utf8'), ctxDdl);
const pdfs = ctxDdl.window.DIGITAL_LIBRARY_DATA.downloadablePdfs;

test('Digital Library has pdf-aml-act-2010', pdfs.some(p => p.id === 'pdf-aml-act-2010'));
test('Digital Library has pdf-civil-servants-act-1973', pdfs.some(p => p.id === 'pdf-civil-servants-act-1973'));
test('Digital Library has pdf-civil-servants-ed-rules-2020', pdfs.some(p => p.id === 'pdf-civil-servants-ed-rules-2020'));

// 5. Check navigation across all HTML files
const frontendDir = path.join(__dirname, '../frontend');
const htmlFiles = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));
test('All HTML files include link to acts-rules.html', htmlFiles.every(f => {
    const c = fs.readFileSync(path.join(frontendDir, f), 'utf8');
    return c.includes('acts-rules.html');
}));

console.log(`\nVerification Summary: ${pass} passed, ${fail} failed.`);
if (fail === 0) {
    console.log('ALL VERIFICATIONS PASSED SUCCESSFULLY!');
} else {
    process.exit(1);
}
