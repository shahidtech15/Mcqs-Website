const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'frontend', 'recruitment-prep.html');
let html = fs.readFileSync(target, 'utf-8');

if (!html.includes('data_fia_past_paper_2021_batch1.js')) {
  html = html.replace(
    '<script src="js/data_fia_sample_papers.js"></script>',
    '<script src="js/data_fia_sample_papers.js"></script>\r\n    <script src="js/data_fia_past_paper_2021_batch1.js"></script>'
  );
}

if (!html.includes('Solve Real Past Paper (2021 Batch-1)')) {
  const oldBtn = '<button id="btnStartMock" class="btn-launch-mock" onclick="startMockExam()">\r\n                    <i class="fas fa-play"></i> Start Full-Length 100-Mark Mock Exam\r\n                </button>';
  const newBtns = '<div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">\r\n                    <button id="btnStartMock" class="btn-launch-mock" onclick="startMockExam()">\r\n                        <i class="fas fa-play"></i> Start 100-Mark Mock Exam\r\n                    </button>\r\n                    <a href="quiz.html?category=cat_fia_ad_sample&subCategory=Past%20Paper%202021%20Batch-1&limit=100&diff=Mixed" class="btn-launch-mock" style="background: linear-gradient(135deg, #059669, #10b981); text-decoration: none; color: white;">\r\n                        <i class="fas fa-certificate"></i> Solve Real Past Paper (2021 Batch-1)\r\n                    </a>\r\n                </div>';
  html = html.replace(oldBtn, newBtns);
}

fs.writeFileSync(target, html, 'utf-8');
console.log('recruitment-prep.html updated successfully with real past paper links.');
