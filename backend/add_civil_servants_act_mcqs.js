const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Error:', err));

const mcqs = [
    {
        questionText: "Under Section 4 of the Civil Servants Act, 1973, every civil servant holds office during the pleasure of:",
        options: {
            A: "The Prime Minister",
            B: "The President",
            C: "The Federal Public Service Commission",
            D: "The Chief Justice of Pakistan"
        },
        correctAnswer: "B",
        explanation: "According to Section 4 of the Civil Servants Act, 1973, every civil servant holds office during the pleasure of the President.",
        subCategory: "Terms & Conditions",
        difficulty: "Easy"
    },
    {
        questionText: "Which of the following is EXCLUDED from the definition of a 'civil servant' under Section 2(1)(b) of the Civil Servants Act, 1973?",
        options: {
            A: "A member of an All-Pakistan Service",
            B: "A person holding a civil post in connection with affairs of the Federation",
            C: "A person who is on deputation to the Federation from any Province",
            D: "A post connected with defence"
        },
        correctAnswer: "C",
        explanation: "Under Section 2(1)(b)(i), a person on deputation to the Federation from any Province or other authority is explicitly excluded from being a civil servant.",
        subCategory: "Definitions",
        difficulty: "Medium"
    },
    {
        questionText: "According to Section 13(1)(ii) of the Civil Servants Act, 1973, a civil servant shall retire from service on completion of the:",
        options: {
            A: "58th year of age",
            B: "60th year of age",
            C: "62nd year of age",
            D: "65th year of age"
        },
        correctAnswer: "B",
        explanation: "Under Section 13(1)(ii), a civil servant retires from service on the completion of the 60th year of his/her age.",
        subCategory: "Termination & Retirement",
        difficulty: "Easy"
    },
    {
        questionText: "Under Section 13(1)(i), a civil servant may be retired in public interest after completing how many years of qualifying service?",
        options: {
            A: "15 years",
            B: "20 years",
            C: "25 years",
            D: "30 years"
        },
        correctAnswer: "B",
        explanation: "As per Section 13(1)(i) (amended), a civil servant may retire or be directed to retire after completing twenty (20) years of service qualifying for pension.",
        subCategory: "Termination & Retirement",
        difficulty: "Medium"
    },
    {
        questionText: "According to Section 2(1)(a) of the Civil Servants Act, 1973, an 'ad hoc appointment' means:",
        options: {
            A: "An appointment made for a permanent post without probation",
            B: "Appointment of a qualified person made otherwise than in accordance with prescribed method pending regular recruitment",
            C: "An appointment made by direct transfer from a Provincial government",
            D: "An appointment made on contract for a fixed period of 5 years"
        },
        correctAnswer: "B",
        explanation: "Section 2(1)(a) defines ad hoc appointment as appointment of a duly qualified person made otherwise than in accordance with the prescribed method of recruitment, pending recruitment.",
        subCategory: "Definitions",
        difficulty: "Medium"
    },
    {
        questionText: "Under Section 9(3) of the Act, promotion to posts in Basic Pay Scale (BPS) 20 and 21 shall be made on the recommendations of a Selection Board headed by:",
        options: {
            A: "The Federal Law Minister",
            B: "The Cabinet Secretary",
            C: "The Chairman, Federal Public Service Commission (FPSC)",
            D: "The Secretary Establishment Division"
        },
        correctAnswer: "C",
        explanation: "Under Section 9(3), promotion to posts in BPS 20 and 21 is made on recommendations of a Selection Board headed by the Chairman, FPSC.",
        subCategory: "Promotion & Seniority",
        difficulty: "Hard"
    },
    {
        questionText: "What notice period (or pay in lieu thereof) is required for terminating a civil servant in temporary employment or ad hoc appointment under Section 11(3)?",
        options: {
            A: "7 days",
            B: "14 days",
            C: "30 days",
            D: "60 days"
        },
        correctAnswer: "B",
        explanation: "Section 11(3) specifies that temporary or ad hoc civil servants are liable to termination on fourteen (14) days' notice or pay in lieu thereof.",
        subCategory: "Termination & Retirement",
        difficulty: "Medium"
    },
    {
        questionText: "Under Section 9(2)(b) of the Act, promotion to a non-selection post is made on the basis of:",
        options: {
            A: "Pure selection on merit",
            B: "Seniority-cum-fitness",
            C: "Written competitive examination only",
            D: "Length of service only"
        },
        correctAnswer: "B",
        explanation: "Section 9(2)(b) stipulates that non-selection posts are filled by promotion on the basis of seniority-cum-fitness.",
        subCategory: "Promotion & Seniority",
        difficulty: "Easy"
    },
    {
        questionText: "Under Section 22(1) of the Act, an appeal or representation regarding terms and conditions of service must be made within how many days?",
        options: {
            A: "15 days",
            B: "30 days",
            C: "45 days",
            D: "60 days"
        },
        correctAnswer: "B",
        explanation: "Section 22(1) & (2) prescribe a 30-day period from the date of the order to prefer an appeal or representation.",
        subCategory: "Terms & Conditions",
        difficulty: "Medium"
    },
    {
        questionText: "Under Section 15A of the Civil Servants Act, 1973, civil servants of which grade and above are required to digitally file declarations of assets with FBR?",
        options: {
            A: "BS-16 and above",
            B: "BS-17 and above",
            C: "BS-18 and above",
            D: "BS-20 and above"
        },
        correctAnswer: "B",
        explanation: "Section 15A requires civil servants of BS-17 and above to digitally file declarations of assets (including spouse and dependent children) with the FBR.",
        subCategory: "Terms & Conditions",
        difficulty: "Hard"
    },
    {
        questionText: "According to Section 10 of the Civil Servants Act, 1973, a civil servant is liable to serve:",
        options: {
            A: "Only within their domicile province",
            B: "Anywhere within or outside Pakistan",
            C: "Only in Federal Secretariat Islamabad",
            D: "Only within Pakistan"
        },
        correctAnswer: "B",
        explanation: "Section 10 states that every civil servant shall be liable to serve anywhere within or outside Pakistan in any equivalent or higher post.",
        subCategory: "Terms & Conditions",
        difficulty: "Easy"
    },
    {
        questionText: "Under Section 14(2), if a retired civil servant seeks private employment within how many years of retirement, prior approval must be obtained?",
        options: {
            A: "1 year",
            B: "2 years",
            C: "3 years",
            D: "5 years"
        },
        correctAnswer: "B",
        explanation: "Section 14(2) proviso specifies that if employment is sought within two (2) years of retirement, prior approval of the prescribed authority is mandatory.",
        subCategory: "Termination & Retirement",
        difficulty: "Medium"
    },
    {
        questionText: "Under Section 7(3) of the Act, confirmation is NOT permissible against:",
        options: {
            A: "A selection post",
            B: "A permanent post",
            C: "A temporary post",
            D: "A post in BPS-17"
        },
        correctAnswer: "C",
        explanation: "Section 7(3) explicitly states: 'There shall be no confirmation against any temporary post.'",
        subCategory: "Appointments & Probation",
        difficulty: "Medium"
    },
    {
        questionText: "Which section of the Civil Servants Act, 1973 empowers the President or authorized person to make rules for carrying out the purposes of the Act?",
        options: {
            A: "Section 20",
            B: "Section 23",
            C: "Section 25",
            D: "Section 26"
        },
        correctAnswer: "C",
        explanation: "Section 25(1) states that the President, or any person authorized by the President, may make rules necessary or expedient for carrying out the purposes of the Act.",
        subCategory: "Definitions",
        difficulty: "Hard"
    },
    {
        questionText: "When a post in a cadre or service is abolished, which civil servant's service is ordinarily terminated first under Section 11(2)?",
        options: {
            A: "The most senior civil servant",
            B: "The civil servant with lowest qualifications",
            C: "The most junior civil servant in that cadre/service",
            D: "The civil servant on deputation"
        },
        correctAnswer: "C",
        explanation: "Section 11(2) mandates that upon abolition of posts, the person whose services are terminated shall ordinarily be the most junior in such cadre or service.",
        subCategory: "Termination & Retirement",
        difficulty: "Medium"
    },
    {
        questionText: "Under Section 12(2), no civil servant shall be dismissed, removed, or reduced in rank by an authority:",
        options: {
            A: "Subordinate to that by which he was appointed",
            B: "Superior to the appointing authority",
            C: "Outside the Ministry of Law",
            D: "Other than the FPSC Chairman"
        },
        correctAnswer: "A",
        explanation: "Section 12(2) protects civil servants by providing that no civil servant shall be dismissed, removed, or reduced in rank by an authority subordinate to that by which he was appointed.",
        subCategory: "Termination & Retirement",
        difficulty: "Hard"
    },
    {
        questionText: "Under Section 19(4), if determination of pension or gratuity is delayed beyond how long from retirement/death, provisional anticipatory pension shall be paid?",
        options: {
            A: "15 days",
            B: "1 month",
            C: "2 months",
            D: "3 months"
        },
        correctAnswer: "B",
        explanation: "Section 19(4) mandates that if pension determination is delayed beyond one month of retirement or death, anticipatory pension shall be paid provisionally.",
        subCategory: "Terms & Conditions",
        difficulty: "Medium"
    },
    {
        questionText: "Under Section 10A of the Act, a civil servant requires prior permission of which authority to serve in an international organization?",
        options: {
            A: "Provincial Chief Minister",
            B: "Federal Government",
            C: "Supreme Court of Pakistan",
            D: "Senate Standing Committee"
        },
        correctAnswer: "B",
        explanation: "Section 10A stipulates that no civil servant shall serve in an international organization without prior permission of the Federal Government.",
        subCategory: "Terms & Conditions",
        difficulty: "Medium"
    },
    {
        questionText: "Under Section 6(3)(b), if a civil servant appointed by promotion fails to complete probation satisfactorily, he/she shall be:",
        options: {
            A: "Dismissed immediately",
            B: "Reverted to the former post against which he holds a lien",
            C: "Sent on compulsory leave for 1 year",
            D: "Demoted two grades below"
        },
        correctAnswer: "B",
        explanation: "Section 6(3)(b) states that a promoted civil servant failing probation shall be reverted to the post from which promoted and against which he holds a lien.",
        subCategory: "Appointments & Probation",
        difficulty: "Hard"
    },
    {
        questionText: "Under Section 23B of the Act, jurisdiction to grant injunctions against orders made under the Act is barred for:",
        options: {
            A: "Any Court",
            B: "Federal Ombudsman only",
            C: "Service Tribunals only",
            D: "Departmental Appeals Committee only"
        },
        correctAnswer: "A",
        explanation: "Section 23B explicitly bars any Court from calling into question or granting injunctions regarding decisions/proceedings taken under the Act or rules.",
        subCategory: "Terms & Conditions",
        difficulty: "Hard"
    }
];

async function seedCivilServantsAct() {
    try {
        let category = await Category.findOne({ name: 'Civil Servants Act, 1973' });
        if (!category) {
            category = await Category.create({
                name: 'Civil Servants Act, 1973',
                description: 'MCQs on Civil Servants Act 1973 (Act No. LXXI of 1973), rules, appointments, tenure, and service terms.'
            });
            console.log('Created Category: Civil Servants Act, 1973');
        } else {
            console.log('Category Civil Servants Act, 1973 already exists.');
        }

        // Clear existing questions for this category to prevent duplicates
        await Question.deleteMany({ category: category._id });

        const formattedMcqs = mcqs.map(q => ({
            ...q,
            category: category._id
        }));

        const inserted = await Question.insertMany(formattedMcqs);
        console.log(`Successfully added ${inserted.length} MCQs for Civil Servants Act, 1973.`);
        process.exit(0);
    } catch (err) {
        console.error('Error seeding Civil Servants Act MCQs:', err);
        process.exit(1);
    }
}

seedCivilServantsAct();
