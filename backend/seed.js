const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const Category = require('./models/Category');
const Question = require('./models/Question');
const User = require('./models/User');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

const seedDatabase = async () => {
    try {
        await Category.deleteMany();
        await Question.deleteMany();
        await User.deleteMany();

        // Seed Admin User
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('admin123', salt);
        await User.create({
            username: 'admin',
            password: hashedPassword,
            isAdmin: true
        });
        console.log('Admin user created: admin / admin123');

        // Seed Categories
        const categories = await Category.insertMany([
            { name: 'Pakistan Affairs', description: 'General Knowledge about Pakistan' },
            { name: 'Current Affairs', description: 'Latest news and global affairs' },
            { name: 'Computer Science', description: 'IT, Software, Hardware' },
            { name: 'General Knowledge', description: 'World geography, history, and facts' },
            { name: 'Islamiat', description: 'Islamic studies and history' }
        ]);
        console.log('Categories inserted');

        // Get Categroy IDs
        const pakAffairsId = categories[0]._id;
        const csId = categories[2]._id;
        const gkId = categories[3]._id;

        // Seed Questions
        await Question.insertMany([
            {
                questionText: 'When did Pakistan become an Islamic Republic?',
                options: { A: '1947', B: '1956', C: '1962', D: '1973' },
                correctAnswer: 'B',
                explanation: 'Pakistan became an Islamic Republic on 23rd March 1956 under the first constitution.',
                category: pakAffairsId,
                difficulty: 'Medium'
            },
            {
                questionText: 'What does HTML stand for?',
                options: { A: 'Hyper Text Markup Language', B: 'Home Tool Markup Language', C: 'Hyperlinks and Text Markup Language', D: 'Hyper Text Multi Language' },
                correctAnswer: 'A',
                explanation: 'HTML stands for Hyper Text Markup Language, used to structure content on the web.',
                category: csId,
                difficulty: 'Easy'
            },
            {
                questionText: 'What is the capital of Australia?',
                options: { A: 'Sydney', B: 'Melbourne', C: 'Canberra', D: 'Perth' },
                correctAnswer: 'C',
                explanation: 'Canberra is the capital city of Australia, chosen as a compromise between Sydney and Melbourne.',
                category: gkId,
                difficulty: 'Easy'
            },
            {
                questionText: 'In computer science, what does RAM stand for?',
                options: { A: 'Read Access Memory', B: 'Random Access Memory', C: 'Rapid Action Memory', D: 'Remote Access Memory' },
                correctAnswer: 'B',
                explanation: 'RAM allows programs to access data quickly on a temporary basis.',
                category: csId,
                difficulty: 'Easy'
            }
        ]);
        console.log('Sample Questions inserted');

        console.log('Database Seeding Completed Successfully');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDatabase();
