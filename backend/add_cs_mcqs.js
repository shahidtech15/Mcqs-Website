const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db')
    .then(() => console.log('MongoDB Connected for Seeding'))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const csQuestions = [
    { q: "What does HTML stand for?", opts: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Multi Language"], ans: "A", diff: "Easy" },
    { q: "What does CSS stand for?", opts: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Cascading System Styles"], ans: "A", diff: "Easy" },
    { q: "Which programming language is known as the language of the web?", opts: ["Python", "Java", "JavaScript", "C++"], ans: "C", diff: "Easy" },
    { q: "What does SQL stand for?", opts: ["Structured Query Language", "Statement Question Language", "Strong Query Language", "Structured Question List"], ans: "A", diff: "Easy" },
    { q: "Which data structure operates on a Last In First Out (LIFO) principle?", opts: ["Queue", "Stack", "Tree", "Graph"], ans: "B", diff: "Medium" },
    { q: "What is the time complexity of binary search?", opts: ["O(n)", "O(n log n)", "O(log n)", "O(1)"], ans: "C", diff: "Medium" },
    { q: "Which protocol is used for secure communication over the internet?", opts: ["HTTP", "FTP", "HTTPS", "SMTP"], ans: "C", diff: "Easy" },
    { q: "What does API stand for?", opts: ["Application Programming Interface", "Advanced Program Integration", "Application Process Interface", "Automated Programming Interface"], ans: "A", diff: "Medium" },
    { q: "Which sorting algorithm has the best average-case performance?", opts: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"], ans: "C", diff: "Medium" },
    { q: "What does JSON stand for?", opts: ["JavaScript Object Notation", "Java System Online Network", "JavaScript Output Name", "Java Scripted Object Node"], ans: "A", diff: "Easy" },
    { q: "In OOP, what is the concept of hiding internal implementation details called?", opts: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"], ans: "C", diff: "Medium" },
    { q: "Which company developed the Java programming language?", opts: ["Microsoft", "Sun Microsystems", "Apple", "Google"], ans: "B", diff: "Easy" },
    { q: "What is a primary key in a database?", opts: ["A key to unlock the database", "A unique identifier for a record", "A key used for encryption", "A foreign key in another table"], ans: "B", diff: "Easy" },
    { q: "What does GUI stand for?", opts: ["General User Interface", "Graphical User Interface", "Global User Index", "Graphic Unix Interface"], ans: "B", diff: "Easy" },
    { q: "Which of the following is not a NoSQL database?", opts: ["MongoDB", "Cassandra", "Redis", "MySQL"], ans: "D", diff: "Medium" },
    { q: "What is the default port for HTTP?", opts: ["443", "80", "21", "22"], ans: "B", diff: "Easy" },
    { q: "What is the default port for HTTPS?", opts: ["443", "80", "8080", "22"], ans: "A", diff: "Easy" },
    { q: "Which command is used to initialize a new Git repository?", opts: ["git init", "git start", "git create", "git new"], ans: "A", diff: "Easy" },
    { q: "What does 'DOM' stand for in web development?", opts: ["Document Object Model", "Data Object Manager", "Digital Output Method", "Document Order Module"], ans: "A", diff: "Medium" },
    { q: "Which of the following is a Javascript framework?", opts: ["Django", "Laravel", "React", "Flask"], ans: "C", diff: "Easy" },
    { q: "What is the purpose of 'Docker'?", opts: ["To write code faster", "To containerize applications", "To replace databases", "To design user interfaces"], ans: "B", diff: "Medium" },
    { q: "Which HTTP method is used to update an existing resource completely?", opts: ["GET", "POST", "PUT", "PATCH"], ans: "C", diff: "Medium" },
    { q: "Which HTTP method is used to update an existing resource partially?", opts: ["PUT", "POST", "PATCH", "UPDATE"], ans: "C", diff: "Medium" },
    { q: "What is a closure in JavaScript?", opts: ["A way to block variables", "A function bundled with its lexical environment", "Closing a browser tab", "A loop that never ends"], ans: "B", diff: "Hard" },
    { q: "What does 'MVC' stand for?", opts: ["Model View Controller", "Main Visual Component", "Multi View Code", "Module View Center"], ans: "A", diff: "Medium" },
    { q: "Which command is used to display the current directory path in Linux?", opts: ["cd", "ls", "pwd", "dir"], ans: "C", diff: "Easy" },
    { q: "What is the role of a DNS server?", opts: ["To store websites", "To translate domain names to IP addresses", "To block viruses", "To speed up internet"], ans: "B", diff: "Medium" },
    { q: "In Python, which keyword is used to define a function?", opts: ["def", "function", "func", "define"], ans: "A", diff: "Easy" },
    { q: "What does CPU stand for?", opts: ["Central Process Unit", "Computer Personal Unit", "Central Processing Unit", "Central Processor Unit"], ans: "C", diff: "Easy" },
    { q: "Which of the following is an OS?", opts: ["Python", "Linux", "HTML", "MySQL"], ans: "B", diff: "Easy" },
    { q: "What is the base of the hexadecimal number system?", opts: ["2", "8", "10", "16"], ans: "D", diff: "Medium" },
    { q: "What is an IP address?", opts: ["Internet Protocol address", "Internet Provider address", "Internal Process address", "Invalid Protocol address"], ans: "A", diff: "Easy" },
    { q: "Which Javascript method removes the last element from an array?", opts: ["shift()", "pop()", "push()", "unshift()"], ans: "B", diff: "Medium" },
    { q: "Which structural design pattern allows composing objects into tree structures?", opts: ["Decorator", "Composite", "Facade", "Adapter"], ans: "B", diff: "Hard" },
    { q: "What is Big O notation used for?", opts: ["Describing code complexity", "Writing large numbers", "Defining objects", "Styling websites"], ans: "A", diff: "Medium" },
    { q: "Which of the following is statically typed?", opts: ["Python", "JavaScript", "Ruby", "TypeScript"], ans: "D", diff: "Medium" },
    { q: "What is 'State' in React?", opts: ["The physical location of the server", "An object that stores component data", "The URL of the page", "A CSS class"], ans: "B", diff: "Medium" },
    { q: "What does IDE stand for?", opts: ["Integrated Development Environment", "Internal Design Engine", "Interactive Display Element", "Internet Data Explorer"], ans: "A", diff: "Easy" },
    { q: "What does RAM stand for?", opts: ["Read Access Memory", "Random Access Memory", "Rapid Action Memory", "Remote Access Memory"], ans: "B", diff: "Easy" },
    { q: "What is Deadlock in OS?", opts: ["When a computer dies", "When two or more processes wait indefinitely for each other", "When a file is locked", "When internet disconnects"], ans: "B", diff: "Hard" },
    { q: "What does an HTTP 404 error mean?", opts: ["Server Error", "Unauthorized", "Not Found", "Forbidden"], ans: "C", diff: "Easy" },
    { q: "What is a 'foreign key'?", opts: ["A key from another country", "A primary key from another table", "A forgotten password", "An encrypted column"], ans: "B", diff: "Medium" },
    { q: "Which language is primarily used for iOS native app development?", opts: ["Swift", "Java", "Kotlin", "C#"], ans: "A", diff: "Medium" },
    { q: "What is 'Recursion'?", opts: ["A function calling itself", "A loop that breaks", "A database query", "A variable type"], ans: "A", diff: "Medium" },
    { q: "Which is the fastest memory in a computer?", opts: ["RAM", "Hard Drive", "Cache Memory", "SSD"], ans: "C", diff: "Medium" },
    { q: "What does XML stand for?", opts: ["Extensible Markup Language", "Extra Modern Link", "Extreme Mapping Language", "Example Markup Language"], ans: "A", diff: "Easy" },
    { q: "Which component is known as the brain of the computer?", opts: ["Monitor", "RAM", "CPU", "Motherboard"], ans: "C", diff: "Easy" },
    { q: "What is the purpose of a Firewall?", opts: ["To cool the CPU", "To monitor and control network traffic", "To speed up typing", "To build websites"], ans: "B", diff: "Easy" },
    { q: "Which of the following is NOT a cloud provider?", opts: ["AWS", "Azure", "GCP", "Apache"], ans: "D", diff: "Medium" },
    { q: "In Git, what does 'git push' do?", opts: ["Downloads code", "Deletes branches", "Uploads local repository content to a remote repository", "Creates a new file"], ans: "C", diff: "Easy" }
];

const seedCS = async () => {
    try {
        // 1. Find the Computer Science category
        let csCategory = await Category.findOne({ name: 'Computer Science' });

        // If it doesn't exist for some reason, create it
        if (!csCategory) {
            csCategory = await Category.create({
                name: 'Computer Science',
                description: 'IT, Software, Hardware, and Programming'
            });
            console.log('Created Computer Science category');
        }

        const csId = csCategory._id;

        // 2. Map questions to DB Schema
        const formattedQuestions = csQuestions.map(item => ({
            questionText: item.q,
            options: {
                A: item.opts[0],
                B: item.opts[1],
                C: item.opts[2],
                D: item.opts[3]
            },
            correctAnswer: item.ans,
            explanation: `The correct answer is ${item.opts[['A', 'B', 'C', 'D'].indexOf(item.ans)]}.`,
            category: csId,
            difficulty: item.diff
        }));

        // 3. Insert questions
        const result = await Question.insertMany(formattedQuestions);
        console.log(`Successfully added ${result.length} Computer Science MCQs!`);

        process.exit(0);
    } catch (err) {
        console.error('Error seeding CS questions:', err);
        process.exit(1);
    }
};

seedCS();
