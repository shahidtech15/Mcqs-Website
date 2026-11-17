const fs = require('fs');

console.log('--- Updating quiz.html ---');
let quiz = fs.readFileSync('frontend/quiz.html', 'utf8');
if (!quiz.includes('href="exam-guide.html"')) {
  quiz = quiz.replace(
    '<a href="quiz.html" class="active">Take a Quiz</a>',
    '<a href="quiz.html" class="active">Take a Quiz</a>\n                <a href="exam-guide.html">Exam Guide</a>'
  );
  quiz = quiz.replace(
    '<li><a href="science-notes.html">Science Notes</a>',
    '<li><a href="exam-guide.html" style="font-weight: 600; color: #f59e0b;"><i class="fa-solid fa-book-open-reader"></i> Exam Guide</a></li>\n                <li><a href="science-notes.html">Science Notes</a>'
  );
  fs.writeFileSync('frontend/quiz.html', quiz, 'utf8');
  console.log('quiz.html navbar updated.');
}

console.log('--- Updating science-notes.html ---');
let sci = fs.readFileSync('frontend/science-notes.html', 'utf8');
if (!sci.includes('href="exam-guide.html"')) {
  sci = sci.replace(
    '<a href="quiz.html">Take a Quiz</a>',
    '<a href="exam-guide.html">Exam Guide</a>\n                <a href="quiz.html">Take a Quiz</a>'
  );
  sci = sci.replace(
    '<li><a href="science-notes.html" class="active">🔬 Science Capsule</a></li>',
    '<li><a href="exam-guide.html" style="font-weight: 600; color: #f59e0b;"><i class="fa-solid fa-book-open-reader"></i> Exam Guide</a></li>\n                <li><a href="science-notes.html" class="active">🔬 Science Capsule</a></li>'
  );
  fs.writeFileSync('frontend/science-notes.html', sci, 'utf8');
  console.log('science-notes.html navbar updated.');
}

console.log('--- Updating about.html ---');
let about = fs.readFileSync('frontend/about.html', 'utf8');
if (!about.includes('href="exam-guide.html"')) {
  about = about.replace(
    '<a href="about.html" class="active">About Us</a>',
    '<a href="exam-guide.html">Exam Guide</a>\n                <a href="about.html" class="active">About Us</a>'
  );
  about = about.replace(
    '<li><a href="science-notes.html">Science Notes</a>',
    '<li><a href="exam-guide.html" style="font-weight: 600; color: #f59e0b;"><i class="fa-solid fa-book-open-reader"></i> Exam Guide</a></li>\n                <li><a href="science-notes.html">Science Notes</a>'
  );
  fs.writeFileSync('frontend/about.html', about, 'utf8');
  console.log('about.html navbar updated.');
}
