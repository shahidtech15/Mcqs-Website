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

const currentAffairsQuestions = [
    { q: "Which country hosted the COP28 climate summit in 2023?", opts: ["Egypt", "UAE", "UK", "France"], ans: "B", diff: "Easy" },
    { q: "Who won the Nobel Peace Prize in 2023?", opts: ["Narges Mohammadi", "Ales Bialiatski", "Maria Ressa", "Abiy Ahmed"], ans: "A", diff: "Medium" },
    { q: "Which nation became the 31st member of NATO in 2023?", opts: ["Sweden", "Finland", "Ukraine", "Georgia"], ans: "B", diff: "Medium" },
    { q: "What is the name of India's successful lunar mission that landed on the South Pole of the Moon in 2023?", opts: ["Mangalyaan", "Chandrayaan-2", "Chandrayaan-3", "Gaganyaan"], ans: "C", diff: "Easy" },
    { q: "Which country holds the presidency of the G20 in 2024?", opts: ["India", "Brazil", "South Africa", "Indonesia"], ans: "B", diff: "Medium" },
    { q: "Who was elected as the President of Argentina in late 2023?", opts: ["Sergio Massa", "Alberto Fernández", "Javier Milei", "Mauricio Macri"], ans: "C", diff: "Medium" },
    { q: "Which country recently announced its withdrawal from OPEC effective January 2024?", opts: ["Angola", "Nigeria", "Venezuela", "Iran"], ans: "A", diff: "Hard" },
    { q: "Who was named TIME Magazine's Person of the Year for 2023?", opts: ["Volodymyr Zelensky", "Elon Musk", "Taylor Swift", "Sam Altman"], ans: "C", diff: "Easy" },
    { q: "Which global organization declared an end to the COVID-19 global health emergency in May 2023?", opts: ["UN", "WHO", "CDC", "FDA"], ans: "B", diff: "Easy" },
    { q: "Which African country experienced a military coup in July 2023, ousting President Mohamed Bazoum?", opts: ["Mali", "Burkina Faso", "Niger", "Sudan"], ans: "C", diff: "Hard" },
    { q: "What is the name of the AI chatbot launched by Google as a competitor to ChatGPT?", opts: ["Gemini", "Bing Chat", "Claude", "Watson"], ans: "A", diff: "Easy" },
    { q: "Which country won the ICC Men's Cricket World Cup in 2023?", opts: ["India", "Australia", "England", "South Africa"], ans: "B", diff: "Easy" },
    { q: "Which tech CEO was briefly ousted and then reinstated within days at OpenAI in November 2023?", opts: ["Satya Nadella", "Elon Musk", "Sam Altman", "Greg Brockman"], ans: "C", diff: "Easy" },
    { q: "Which country officially became the 32nd member of NATO in 2024?", opts: ["Finland", "Sweden", "Ukraine", "Austria"], ans: "B", diff: "Medium" },
    { q: "What was the main theme of the World Economic Forum (WEF) Annual Meeting 2024 in Davos?", opts: ["Rebuilding Trust", "Cooperation in a Fragmented World", "Working Together, Restoring Trust", "Creating a Shared Future"], ans: "A", diff: "Medium" },
    { q: "Who is the current Secretary-General of the United Nations?", opts: ["Ban Ki-moon", "Kofi Annan", "António Guterres", "Boutros Boutros-Ghali"], ans: "C", diff: "Easy" },
    { q: "Which country became the first to successfully land a spacecraft near the Moon's south pole?", opts: ["USA", "Russia", "China", "India"], ans: "D", diff: "Easy" },
    { q: "The 'BRICS' group invited several new members to join in 2024. Which of these was NOT one of them?", opts: ["Saudi Arabia", "Iran", "Argentina", "Japan"], ans: "D", diff: "Medium" },
    { q: "What is the currency of the United Kingdom?", opts: ["Euro", "Pound Sterling", "Dollar", "Franc"], ans: "B", diff: "Easy" },
    { q: "Who won the Best Actor award at the 2024 Academy Awards (Oscars) for 'Oppenheimer'?", opts: ["Bradley Cooper", "Cillian Murphy", "Leonardo DiCaprio", "Ryan Gosling"], ans: "B", diff: "Medium" },
    { q: "Which region has been at the center of the Israel-Hamas conflict that escalated significantly in October 2023?", opts: ["Golan Heights", "Gaza Strip", "Sinai Peninsula", "West Bank"], ans: "B", diff: "Easy" },
    { q: "What is the capital of Ukraine?", opts: ["Odessa", "Kharkiv", "Kyiv", "Lviv"], ans: "C", diff: "Easy" },
    { q: "Who is the President of Russia as of 2024?", opts: ["Dmitry Medvedev", "Vladimir Putin", "Mikhail Mishustin", "Alexei Navalny"], ans: "B", diff: "Easy" },
    { q: "Which city hosted the 2024 Summer Olympics?", opts: ["Los Angeles", "Tokyo", "Paris", "London"], ans: "C", diff: "Easy" },
    { q: "What does the acronym 'ASEAN' stand for?", opts: ["Association of South East Asian Nations", "Alliance of South East Asian Nations", "Agreement of South East Asian Nations", "Assembly of South East Asian Nations"], ans: "A", diff: "Medium" },
    { q: "Which country is the largest emitter of greenhouse gases globally as of recent data?", opts: ["USA", "India", "Russia", "China"], ans: "D", diff: "Medium" },
    { q: "Who is the CEO of Tesla and SpaceX?", opts: ["Jeff Bezos", "Elon Musk", "Mark Zuckerberg", "Bill Gates"], ans: "B", diff: "Easy" },
    { q: "The ongoing civil war in Sudan primarily involves the SAF and which other major paramilitary group?", opts: ["RSF", "Boko Haram", "Al-Shabaab", "TPLF"], ans: "A", diff: "Hard" },
    { q: "Which country's space agency is known as NASA?", opts: ["Russia", "China", "United States", "European Union"], ans: "C", diff: "Easy" },
    { q: "What is the world's most spoken language by total number of speakers?", opts: ["Spanish", "Mandarin Chinese", "English", "Hindi"], ans: "C", diff: "Medium" },
    { q: "Who was the Prime Minister of the UK at the start of 2024?", opts: ["Boris Johnson", "Liz Truss", "Rishi Sunak", "Keir Starmer"], ans: "C", diff: "Medium" },
    { q: "Which cryptocurrency is the largest by market capitalization?", opts: ["Ethereum", "Bitcoin", "Tether", "Binance Coin"], ans: "B", diff: "Easy" },
    { q: "What does the term 'Inflation' mean in economics?", opts: ["Decrease in prices", "Increase in the general price level", "Stabilization of prices", "Increase in product quality"], ans: "B", diff: "Easy" },
    { q: "Which country has the highest population in the world according to UN estimates in 2023?", opts: ["China", "India", "USA", "Indonesia"], ans: "B", diff: "Medium" },
    { q: "What is the headquarters of the World Health Organization (WHO) located?", opts: ["New York, USA", "Geneva, Switzerland", "Paris, France", "London, UK"], ans: "B", diff: "Medium" },
    { q: "Which major canal connects the Mediterranean Sea to the Red Sea?", opts: ["Panama Canal", "Suez Canal", "Kiel Canal", "Erie Canal"], ans: "B", diff: "Easy" },
    { q: "Who wrote the national anthem of Pakistan?", opts: ["Allama Iqbal", "Hafeez Jalandhari", "Faiz Ahmed Faiz", "Mirza Ghalib"], ans: "B", diff: "Medium" },
    { q: "Which planet is known as the Red Planet?", opts: ["Venus", "Jupiter", "Mars", "Saturn"], ans: "C", diff: "Easy" },
    { q: "What is the chemical symbol for Gold?", opts: ["Ag", "Go", "Au", "Gd"], ans: "C", diff: "Easy" },
    { q: "Which country is the host for the FIFA World Cup 2026?", opts: ["Qatar", "USA, Canada, and Mexico", "Brazil", "Germany"], ans: "B", diff: "Medium" },
    { q: "What does the 'G' in 5G technology stand for?", opts: ["Gigabit", "Generation", "Global", "Gateway"], ans: "B", diff: "Easy" },
    { q: "Which ocean is the largest on Earth?", opts: ["Atlantic", "Indian", "Arctic", "Pacific"], ans: "D", diff: "Easy" },
    { q: "Who is known as the father of modern computer?", opts: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"], ans: "B", diff: "Medium" },
    { q: "What is the largest desert in the world (excluding polar deserts)?", opts: ["Gobi", "Kalahari", "Sahara", "Arabian"], ans: "C", diff: "Easy" },
    { q: "Which vitamin is primarily obtained from sunlight?", opts: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], ans: "D", diff: "Easy" },
    { q: "What is the capital of Canada?", opts: ["Toronto", "Vancouver", "Montreal", "Ottawa"], ans: "D", diff: "Medium" },
    { q: "Who was the first woman to win a Nobel Prize?", opts: ["Mother Teresa", "Marie Curie", "Rosa Parks", "Jane Addams"], ans: "B", diff: "Medium" },
    { q: "Which of the following is NOT a primary color?", opts: ["Red", "Blue", "Green", "Yellow"], ans: "C", diff: "Medium" },
    { q: "What is the longest river in the world?", opts: ["Amazon", "Nile", "Yangtze", "Mississippi"], ans: "B", diff: "Easy" },
    { q: "Which element is said to keep bones strong?", opts: ["Iron", "Calcium", "Potassium", "Zinc"], ans: "B", diff: "Easy" }
];

const seedCurrentAffairs = async () => {
    try {
        // 1. Find or create the Current Affairs category
        let caCategory = await Category.findOne({ name: 'Current Affairs' });

        if (!caCategory) {
            caCategory = await Category.create({
                name: 'Current Affairs',
                description: 'Latest news, global events, and general awareness'
            });
            console.log('Created Current Affairs category');
        }

        const caId = caCategory._id;

        // 2. Map questions to DB Schema
        const formattedQuestions = currentAffairsQuestions.map(item => ({
            questionText: item.q,
            options: {
                A: item.opts[0],
                B: item.opts[1],
                C: item.opts[2],
                D: item.opts[3]
            },
            correctAnswer: item.ans,
            explanation: item.explanation || `The correct answer is ${item.opts[['A', 'B', 'C', 'D'].indexOf(item.ans)]}.`,
            category: caId,
            difficulty: item.diff
        }));

        // 3. Insert questions
        const result = await Question.insertMany(formattedQuestions);
        console.log(`Successfully added ${result.length} Current Affairs MCQs!`);

        process.exit(0);
    } catch (err) {
        console.error('Error seeding Current Affairs questions:', err);
        process.exit(1);
    }
};

seedCurrentAffairs();
