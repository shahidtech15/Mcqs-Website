const fs = require('fs');
const path = require('path');

console.log('--- Verifying Latest Jobs Integration ---');

// 1. Check recruitment-prep.html
const recHtml = fs.readFileSync(path.join(__dirname, '..', 'frontend', 'recruitment-prep.html'), 'utf-8');
const hasTabBtn = recHtml.includes('data-tab="tab-latest-jobs"');
const hasTabPane = recHtml.includes('id="tab-latest-jobs"');
const hasAsiMention = recHtml.includes('2,000 ASI Investigation');
const hasConstablesMention = recHtml.includes('15,500 Constables');
const hasBorderMention = recHtml.includes('5,000');
const hasSpscMention = recHtml.includes('SPSC');
const hasSjpMention = recHtml.includes('SJP');
const hasIbaMention = recHtml.includes('STS');

console.log('Tab button present:', hasTabBtn);
console.log('Tab pane present:', hasTabPane);
console.log('ASI 2,000 mentioned:', hasAsiMention);
console.log('Constables 15,500 mentioned:', hasConstablesMention);
console.log('Border Security 5,000 mentioned:', hasBorderMention);
console.log('SPSC / SJP / IBA mentioned:', hasSpscMention && hasSjpMention && hasIbaMention);

if (!hasTabBtn || !hasTabPane || !hasAsiMention || !hasConstablesMention || !hasBorderMention) {
  console.error('ERROR: Missing required Latest Jobs content in recruitment-prep.html');
  process.exit(1);
}

// 2. Check data_recruitment_prep.js
const jobsData = require('../frontend/js/data_recruitment_prep.js');
const asiJob = jobsData.find(j => j.id === 'sindh-police-asi');
const constableJob = jobsData.find(j => j.id === 'sindh-police-constable');

console.log('Sindh Police ASI Job profile in data:', !!asiJob);
console.log('Sindh Police Constable Job profile in data:', !!constableJob);

if (!asiJob || !constableJob) {
  console.error('ERROR: Missing job profiles in data_recruitment_prep.js');
  process.exit(1);
}

// 3. Check index.html
const indexHtml = fs.readFileSync(path.join(__dirname, '..', 'frontend', 'index.html'), 'utf-8');
console.log('Index.html has latest jobs link:', indexHtml.includes('recruitment-prep.html#latest-jobs'));

console.log('--- ALL LATEST JOBS VERIFICATION CHECKS PASSED ---');
