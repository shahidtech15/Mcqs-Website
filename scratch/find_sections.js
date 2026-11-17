const fs = require('fs');
const content = fs.readFileSync('frontend/admin.html', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => {
    if (line.includes('id="dashboard"') || line.includes('id="bulkUpload"') || line.includes('id="manageQuestions"')) {
        console.log(`Line ${i+1}: ${line.trim()}`);
    }
});
