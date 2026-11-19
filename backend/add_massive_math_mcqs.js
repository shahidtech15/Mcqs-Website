const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db')
    .then(() => console.log('MongoDB Connected for Massive Math Seeding'))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const subCategories = [
    "Average", "Number System", "Progressions", "Speed, time and distance",
    "Permutation and Combination", "Alligation", "Triangles", "Partnership",
    "Height and Distance", "Problems on Ages", "Calendar", "Clock", "Area",
    "Volume and Surface Area", "Problems on Numbers", "Problems on H.C.F and L.C.M",
    "Decimal Fraction", "Simplification", "Square Root and Cube Root", "Surds and Indices",
    "Chain Rule", "Pipes and Cistern", "Boats and Streams", "Races and Games",
    "Stocks and Shares", "Probability", "True Discount", "Bankers Discount",
    "Trigonometry", "Circular Measurement of Angle", "Coordinate Geometry",
    "Mensuration 2D", "Mensuration 3D"
];

const generateMathMCQs = () => {
    let allQuestions = [];

    for (let sub of subCategories) {
        for (let i = 1; i <= 100; i++) {
            let difficulty = i <= 35 ? 'Easy' : (i <= 70 ? 'Medium' : 'Hard');
            let q, ans, exp;

            // Randomly generated base numbers to ensure distinct questions
            let a = Math.floor(Math.random() * 20) + 2;
            let b = Math.floor(Math.random() * 15) + 3;
            let c = Math.floor(Math.random() * 10) + 4;

            switch (sub) {
                case "Average":
                    q = `The average of three numbers is ${a}. If the first two numbers are ${a - 2} and ${a + 4}, what is the third number?`;
                    ans = (a * 3) - ((a - 2) + (a + 4));
                    exp = `Step 1: Total sum = Average × 3 = ${a * 3}. \nStep 2: Sum of first two = ${(a - 2) + (a + 4)}. \nStep 3: Third number = Total Sum - Sum of first two = ${ans}.`;
                    break;
                case "Number System":
                    q = `If a number is multiplied by ${b} and then reduced by ${a}, the result is ${b * c - a}. What is the number?`;
                    ans = c;
                    exp = `Step 1: Let the number be x. \nStep 2: According to the problem, ${b}x - ${a} = ${b * c - a}. \nStep 3: ${b}x = ${b * c}. \nStep 4: x = ${ans}.`;
                    break;
                case "Progressions":
                    q = `In an Arithmetic Progression, the first term is ${a} and the common difference is ${b}. What is the 5th term?`;
                    ans = a + (4 * b);
                    exp = `Step 1: Formula for nth term in AP is Tn = a + (n-1)d. \nStep 2: Evaluate T5 = ${a} + (5-1)×${b}. \nStep 3: T5 = ${ans}.`;
                    break;
                case "Speed, time and distance":
                    q = `A car travels at a speed of ${a * 10} km/hr. How much distance will it cover in ${b} hours?`;
                    ans = (a * 10) * b;
                    exp = `Step 1: Formula for Distance is Speed × Time. \nStep 2: Evaluate Distance = ${a * 10} × ${b}. \nStep 3: Distance = ${ans} km.`;
                    break;
                case "Permutation and Combination":
                    q = `In how many ways can a committee of 2 be selected from a group of ${c} people?`;
                    ans = (c * (c - 1)) / 2;
                    exp = `Step 1: Formula for combinations is ${c}C2 = ${c}! / (2! × (${c}-2)!). \nStep 2: Evaluate (${c} × ${c - 1}) / 2. \nStep 3: Answer = ${ans}.`;
                    break;
                case "Alligation":
                    q = `In what ratio must a grocer mix two varieties of pulses costing Rs. ${a} and Rs. ${a + 10} per kg to get a mixture worth Rs. ${a + 4} per kg?`;
                    ans = "3:2";
                    exp = `Step 1: Use the rule of alligation. \nStep 2: Price of cheaper = ${a}, Price of dearer = ${a + 10}, Mean price = ${a + 4}. \nStep 3: Ratio = (${a + 10} - ${a + 4}) : (${a + 4} - ${a}) = 6 : 4 = 3:2.`;
                    break;
                case "Triangles":
                    q = `The base of a triangle is ${a} cm and its height is ${b} cm. Find its area.`;
                    ans = 0.5 * a * b;
                    exp = `Step 1: The formula for the area of a triangle is 0.5 × base × height. \nStep 2: Area = 0.5 × ${a} × ${b} = ${ans} sq cm.`;
                    break;
                case "Partnership":
                    q = `A and B invest Rs. ${a * 1000} and Rs. ${b * 1000} in a business. If the total profit is Rs. ${(a + b) * 100}, what is A's share?`;
                    ans = a * 100;
                    exp = `Step 1: Ratio of investment = ${a * 1000} : ${b * 1000} = ${a} : ${b}. \nStep 2: A's profit share = (A's Ratio / Total Ratio) × Total Profit. \nStep 3: Share = (${a} / ${a + b}) × ${(a + b) * 100} = ${ans}.`;
                    break;
                case "Height and Distance":
                    q = `The angle of elevation of a tower from a point on the ground ${a * 10}m away from its foot is 45 degrees. What is the height of the tower?`;
                    ans = a * 10;
                    exp = `Step 1: Let the height be h. tan(45) = Perpendicular / Base = h / ${a * 10}. \nStep 2: Since tan(45) = 1, h = ${ans}m.`;
                    break;
                case "Problems on Ages":
                    q = `The sum of ages of a father and son is ${a + b + 20} years. If the father is ${a + 20} years old, how old is the son?`;
                    ans = b;
                    exp = `Step 1: Total age = ${a + b + 20}. Father's age = ${a + 20}. \nStep 2: Son's age = Total age - Father's age. \nStep 3: ${a + b + 20} - ${a + 20} = ${ans} years.`;
                    break;
                case "Calendar":
                    q = `If today is Monday, what day of the week will it be after ${a * 7 + 3} days?`;
                    ans = "Thursday";
                    exp = `Step 1: Find the number of odd days by calculating (${a * 7 + 3} % 7). \nStep 2: Odd days = 3. \nStep 3: Monday + 3 days = Thursday.`;
                    break;
                case "Clock":
                    q = `How many degrees does the minute hand move in ${c} minutes?`;
                    ans = c * 6;
                    exp = `Step 1: The minute hand covers 360 degrees in 60 minutes. \nStep 2: Angle per minute = 360 / 60 = 6 degrees. \nStep 3: Angle for ${c} minutes = ${c} × 6 = ${ans} degrees.`;
                    break;
                case "Area":
                    q = `The length of a rectangle is ${a} m and width is ${b} m. Find its area.`;
                    ans = a * b;
                    exp = `Step 1: Area of a rectangle = length × width. \nStep 2: Area = ${a} × ${b} = ${ans} sq m.`;
                    break;
                case "Volume and Surface Area":
                    q = `What is the volume of a cube with side length ${c} cm?`;
                    ans = c * c * c;
                    exp = `Step 1: Volume of a cube is side³. \nStep 2: Volume = ${c} × ${c} × ${c} = ${ans} cubic cm.`;
                    break;
                case "Problems on Numbers":
                    q = `The sum of two numbers is ${a + b} and their difference is ${a - b}. What is the larger number?`;
                    ans = a;
                    exp = `Step 1: Let numbers be x and y. x + y = ${a + b}, x - y = ${a - b}. \nStep 2: Adding both equations gives 2x = ${2 * a}. \nStep 3: x = ${ans}.`;
                    break;
                case "Problems on H.C.F and L.C.M":
                    q = `The product of two numbers is ${a * b}. If their H.C.F is 1, what is their L.C.M?`;
                    ans = a * b;
                    exp = `Step 1: The formula relates HCF and LCM: HCF × LCM = Product of numbers. \nStep 2: 1 × LCM = ${a * b}. \nStep 3: LCM = ${ans}.`;
                    break;
                case "Decimal Fraction":
                    q = `Convert the fraction ${a}/${a * 4} to a decimal.`;
                    ans = 0.25;
                    exp = `Step 1: Simplify the fraction to 1/4. \nStep 2: Divide 1 by 4 to get ${ans}.`;
                    break;
                case "Simplification":
                    q = `Simplify: (${a} + ${b}) × ${c}`;
                    ans = (a + b) * c;
                    exp = `Step 1: According to BODMAS, solve parenthesis first: ${a} + ${b} = ${a + b}. \nStep 2: Multiply by ${c}: ${a + b} × ${c} = ${ans}.`;
                    break;
                case "Square Root and Cube Root":
                    q = `What is the square root of ${a * a}?`;
                    ans = a;
                    exp = `Step 1: Find a number which when multiplied by itself gives ${a * a}. \nStep 2: ${a} × ${a} = ${a * a}. Therefore, √${a * a} = ${ans}.`;
                    break;
                case "Surds and Indices":
                    q = `Evaluate: ${c} squared multiplied by ${c} cubed (i.e., ${c}^2 × ${c}^3).`;
                    ans = Math.pow(c, 5);
                    exp = `Step 1: According to the laws of indices, a^m × a^n = a^(m+n). \nStep 2: The expression translates to ${c}^(2+3) = ${c}^5. \nStep 3: ${c}^5 = ${ans}.`;
                    break;
                case "Chain Rule":
                    q = `If ${a} men can complete a work in ${b} days, how many days will 1 man take to complete the same work?`;
                    ans = a * b;
                    exp = `Step 1: Less men means more days. This is an inverse proportion. \nStep 2: 1 man will take ${a} times the number of days. \nStep 3: Days = ${a} × ${b} = ${ans}.`;
                    break;
                case "Pipes and Cistern":
                    q = `Pipe A can fill a tank in ${a} hours. In what fraction of the tank will it fill in 1 hour?`;
                    ans = `1/${a}`;
                    exp = `Step 1: If a pipe fills the tank in ${a} hours, its 1-hour work is 1 divided by the total time. \nStep 2: Part filled in 1 hour = ${ans}.`;
                    break;
                case "Boats and Streams":
                    q = `A boat has a speed of ${a} km/hr in still water and the stream speed is ${b} km/hr. What is its downstream speed?`;
                    ans = a + b;
                    exp = `Step 1: Downstream speed is calculated as Speed of Boat + Speed of Stream. \nStep 2: Downstream Speed = ${a} + ${b} = ${ans} km/hr.`;
                    break;
                case "Races and Games":
                    q = `In a 100m race, A covers the distance in ${a} seconds and B in ${a + 2} seconds. By what time does A beat B?`;
                    ans = 2;
                    exp = `Step 1: Time taken by A = ${a} sec, Time by B = ${a + 2} sec. \nStep 2: Difference = (${a + 2} - ${a}) = ${ans} seconds.`;
                    break;
                case "Stocks and Shares":
                    q = `If a dividend of ${b}% is declared on a Rs. 100 share, what is the dividend amount per share?`;
                    ans = b;
                    exp = `Step 1: Dividend is calculated on the face value of the share. \nStep 2: Dividend Amount = ${b}% of 100 = Rs. ${ans}.`;
                    break;
                case "Probability":
                    q = `A coin is tossed ${c} times. What is the total number of possible outcomes?`;
                    ans = Math.pow(2, c);
                    exp = `Step 1: A single coin toss has 2 outcomes. \nStep 2: Total outcomes for ${c} tosses = 2^${c} = ${ans}.`;
                    break;
                case "True Discount":
                    q = `If the True Discount on a sum due 1 year hence at ${b}% p.a. is Rs. ${c * b}, what is the Present Worth?`;
                    ans = (c * b * 100) / (b * 1);
                    exp = `Step 1: The formula for Present Worth (PW) based on True Discount (TD) is: PW = (TD × 100) / (Rate × Time). \nStep 2: PW = (${c * b} × 100) / (${b} × 1). \nStep 3: PW = ${ans}.`;
                    break;
                case "Bankers Discount":
                    q = `Banker's Discount (BD) on a sum of Rs. ${a * 100} for 1 year at ${b}% p.a. is?`;
                    ans = (a * 100 * b * 1) / 100;
                    exp = `Step 1: Banker's Discount is the simple interest on the Face Value for the given time. \nStep 2: BD = (Face Value × Rate × Time) / 100. \nStep 3: BD = (${a * 100} × ${b} × 1) / 100 = ${ans}.`;
                    break;
                case "Trigonometry":
                    q = `In a right triangle, the opposite side is ${a} and the adjacent side is ${b}. What is the tangent of the angle?`;
                    ans = (a / b).toFixed(2);
                    exp = `Step 1: By definition, tan(θ) = Opposite / Adjacent. \nStep 2: tan(θ) = ${a} / ${b} = ${ans}.`;
                    break;
                case "Circular Measurement of Angle":
                    q = `Convert ${b * 18} degrees into radians (Express as a fraction of π).`;
                    ans = `${(b * 18) / 180}π`;
                    exp = `Step 1: The formula to convert degrees to radians is (Degrees × π) / 180. \nStep 2: Radian measure = (${b * 18} × π) / 180 = ${(b * 18) / 180}π.`;
                    break;
                case "Coordinate Geometry":
                    q = `What is the distance between the origin (0,0) and the point (${a}, 0)?`;
                    ans = a;
                    exp = `Step 1: The distance formula is √((x2 - x1)² + (y2 - y1)²). \nStep 2: Distance = √((${a} - 0)² + (0 - 0)²) = √(${a * a}) = ${ans}.`;
                    break;
                case "Mensuration 2D":
                    q = `Find the circumference of a circle with radius ${c} units (Use π ≈ 3).`;
                    ans = 2 * 3 * c;
                    exp = `Step 1: The formula for circumference is 2πr. \nStep 2: Circumference ≈ 2 × 3 × ${c} = ${ans}.`;
                    break;
                case "Mensuration 3D":
                    q = `Find the total surface area of a cube of edge ${a} units.`;
                    ans = 6 * a * a;
                    exp = `Step 1: The formula for the total surface area of a cube is 6 × edge². \nStep 2: Total Surface Area = 6 × ${a}² = ${6 * a * a}.`;
                    break;
                default:
                    q = `Solve: ${a} + ${b}`;
                    ans = a + b;
                    exp = `Simple addition.`;
            }

            // Options generation strategy to avoid duplicates and ensure answers are present
            let wrongSet = new Set();
            while (wrongSet.size < 3) {
                // If it's a string ratio, make fake ratios
                if (typeof ans === 'string' && ans.includes(':')) {
                    wrongSet.add(`${Math.floor(Math.random() * 5) + 1}:${Math.floor(Math.random() * 5) + 1}`);
                }
                // If it's a string fraction
                else if (typeof ans === 'string' && ans.includes('/')) {
                    wrongSet.add(`1/${Math.floor(Math.random() * 10) + 1}`);
                }
                // If it's a string with Pi
                else if (typeof ans === 'string' && ans.includes('π')) {
                    wrongSet.add(`${Math.floor(Math.random() * 5) + 1}π`);
                }
                // If it's a day String
                else if (typeof ans === 'string' && ans === "Thursday") {
                    let days = ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"];
                    wrongSet.add(days[Math.floor(Math.random() * days.length)]);
                }
                // Numbers
                else {
                    let fake = Number(ans) + (Math.floor(Math.random() * 10) + 1) * (Math.random() < 0.5 ? 1 : -1);
                    if (fake > 0) wrongSet.add(fake);
                }
            }

            let optionsArray = [String(ans), ...Array.from(wrongSet).map(String)].slice(0, 4);
            optionsArray = optionsArray.sort(() => Math.random() - 0.5);
            let correctLetter = ['A', 'B', 'C', 'D'][optionsArray.indexOf(String(ans))];

            allQuestions.push({
                questionText: `Question ${i}: ${q}`,
                options: {
                    A: optionsArray[0] || '1',
                    B: optionsArray[1] || '2',
                    C: optionsArray[2] || '3',
                    D: optionsArray[3] || '4'
                },
                correctAnswer: correctLetter || 'A',
                explanation: exp,
                subCategory: sub,
                difficulty: difficulty
            });
        }
    }
    return allQuestions;
};

const seedMassiveMath = async () => {
    try {
        let category = await Category.findOne({ name: 'Mathematics' });
        if (!category) {
            category = await Category.create({ name: 'Mathematics', description: 'Advanced Mathematics.' });
        }

        const generated = generateMathMCQs();
        const finalData = generated.map(q => ({ ...q, category: category._id }));

        const result = await Question.insertMany(finalData);

        console.log(`Successfully generated and inserted ${result.length} MCQs for Mathematics!`);
        process.exit(0);
    } catch (err) {
        console.error('Error seeding Massive Math category:', err);
        process.exit(1);
    }
};

seedMassiveMath();
