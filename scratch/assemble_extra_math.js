// assemble_extra_math.js - Additional Solved MCQs from Document 3 (Faizan Ch chapters) and Document 4 (PPSC Digest)
const fs = require('fs');

console.log('Adding additional solved MCQs from Faizan Ch & PPSC Digest...');

const extraQuestions = [
  // --- Faizan Ch Chapter 2: Speed, Time & Distance Extra Solved ---
  {
    id: 261,
    question: "A farmer travelled a distance of 61 km in 9 hours. He travelled partly on foot at 4 km/hr and partly on bicycle at 9 km/hr. The distance travelled on foot is:",
    options: { A: "14 km", B: "15 km", C: "16 km", D: "17 km" },
    answer: "C",
    answerText: "16 km",
    explanation: "Let distance on foot = x km. Distance on bicycle = 61 - x km. Total time: x/4 + (61 - x)/9 = 9 => 9x + 4(61 - x) = 9 × 36 => 9x + 244 - 4x = 324 => 5x = 80 => x = 16 km.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS", "FPSC"]
  },
  {
    id: 262,
    question: "A man covered a certain distance at some speed. Had he moved 3 kmph faster, he would have taken 40 minutes less. If he had moved 2 kmph slower, he would have taken 40 minutes more. The distance is:",
    options: { A: "35 km", B: "36 2/3 km", C: "37.5 km", D: "40 km" },
    answer: "D",
    answerText: "40 km",
    explanation: "Let distance = d, usual speed = v. Time equations: d/v - d/(v + 3) = 40/60 = 2/3 => 3d / [v(v + 3)] = 2/3 => 9d = 2v(v + 3). Also: d/(v - 2) - d/v = 2/3 => 2d / [v(v - 2)] = 2/3 => 3d = v(v - 2) => 9d = 3v(v - 2). Equating: 2v(v + 3) = 3v(v - 2) => 2v + 6 = 3v - 6 => v = 12 km/hr. Distance d = [12 × 10] / 3 = 40 km.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS"]
  },
  {
    id: 263,
    question: "A car travelling with 5/7 of its actual speed covers 42 km in 1 hr 40 min 48 sec. Find the actual speed of the car:",
    options: { A: "17 6/7 km/hr", B: "25 km/hr", C: "30 km/hr", D: "35 km/hr" },
    answer: "D",
    answerText: "35 km/hr",
    explanation: "Time = 1 hr 40 min 48 sec = 1 + 40/60 + 48/3600 = 1 + 2/3 + 1/75 = 126/75 hr. Reduced speed = 42 / (126/75) = 42 × 75 / 126 = 25 km/hr. Since reduced speed is 5/7 of actual speed: Actual speed = 25 × (7/5) = 35 km/hr.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS", "FPSC"]
  },
  {
    id: 264,
    question: "Rashid is travelling on his cycle. He reaches point A at 2 PM if he travels at 10 kmph, and reaches at 12 noon if he travels at 15 kmph. At what speed must he travel to reach A at 1 PM?",
    options: { A: "8 kmph", B: "11 kmph", C: "12 kmph", D: "14 kmph" },
    answer: "C",
    answerText: "12 kmph",
    explanation: "Difference in time between 10 kmph and 15 kmph = 2 hours. Let distance = d. d/10 - d/15 = 2 => (3d - 2d)/30 = 2 => d = 60 km. Time taken at 10 kmph = 60/10 = 6 hours to reach at 2 PM => Start time was 8 AM. To reach at 1 PM (5 hours journey), speed = 60 / 5 = 12 kmph.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS", "PPSC"]
  },
  {
    id: 265,
    question: "It takes 8 hours for a 600 km journey if 120 km is done by train and the rest by car. It takes 20 minutes more if 200 km is done by train and the rest by car. The ratio of the speed of the train to that of the car is:",
    options: { A: "2 : 3", B: "3 : 2", C: "3 : 4", D: "4 : 3" },
    answer: "C",
    answerText: "3 : 4",
    explanation: "Let train speed = u, car speed = v. 120/u + 480/v = 8 => 15/u + 60/v = 1. Also: 200/u + 400/v = 8 1/3 = 25/3 => 24/u + 48/v = 1. Solving gives u = 60 km/hr and v = 80 km/hr. Ratio = 60 : 80 = 3 : 4.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS"]
  },

  // --- Faizan Ch Chapter 3: Compound Interest Extra Solved ---
  {
    id: 266,
    question: "Albert invested Rs. 8000 in a fixed deposit scheme for 2 years at compound interest rate 5% p.a. How much amount will Albert get on maturity?",
    options: { A: "Rs. 8600", B: "Rs. 8620", C: "Rs. 8820", D: "None of these" },
    answer: "C",
    answerText: "Rs. 8820",
    explanation: "Amount = 8000 × (1 + 5/100)² = 8000 × (21/20)² = 8000 × 441 / 400 = 20 × 441 = Rs. 8820.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS", "FPSC"]
  },
  {
    id: 267,
    question: "The effective annual rate of interest corresponding to a nominal rate of 6% per annum payable half-yearly is:",
    options: { A: "6.06%", B: "6.07%", C: "6.08%", D: "6.09%" },
    answer: "D",
    answerText: "6.09%",
    explanation: "Effective rate = (1 + 0.03)² - 1 = 1.0609 - 1 = 0.0609 = 6.09%.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS"]
  },
  {
    id: 268,
    question: "If simple interest on a sum of money for 2 years at 5% per annum is Rs. 50, what is the compound interest on the same sum at the same rate for the same time?",
    options: { A: "Rs. 51.25", B: "Rs. 52.00", C: "Rs. 54.25", D: "Rs. 60.00" },
    answer: "A",
    answerText: "Rs. 51.25",
    explanation: "Principal = (50 × 100) / (2 × 5) = Rs. 500. C.I. = 500 × [(1 + 5/100)² - 1] = 500 × [1.1025 - 1] = 500 × 0.1025 = Rs. 51.25.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS", "PPSC"]
  },
  {
    id: 269,
    question: "The difference between simple interest and compound interest on Rs. 1200 for one year at 10% per annum reckoned half-yearly is:",
    options: { A: "Rs. 2.50", B: "Rs. 3.00", C: "Rs. 3.75", D: "Rs. 4.00" },
    answer: "B",
    answerText: "Rs. 3.00",
    explanation: "S.I. for 1 year = (1200 × 10 × 1)/100 = Rs. 120. Half-yearly C.I. rate = 5% for 2 periods. C.I. = 1200 × [(1.05)² - 1] = 1200 × 0.1025 = Rs. 123. Difference = 123 - 120 = Rs. 3.00.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS"]
  },
  {
    id: 270,
    question: "The difference between compound interest and simple interest on an amount of Rs. 15,000 for 2 years is Rs. 96. What is the rate of interest per annum?",
    options: { A: "8%", B: "10%", C: "12%", D: "Cannot be determined" },
    answer: "A",
    answerText: "8%",
    explanation: "Diff = P × (R/100)² => 96 = 15000 × (R²/10000) = 1.5 R² => R² = 96 / 1.5 = 64 => R = 8%.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS", "FPSC"]
  },

  // --- Faizan Ch Chapter 4: Average Extra Solved ---
  {
    id: 271,
    question: "The average age of husband, wife and their child 3 years ago was 27 years and that of wife and child 5 years ago was 20 years. The present age of the husband is:",
    options: { A: "35 years", B: "40 years", C: "50 years", D: "None of these" },
    answer: "B",
    answerText: "40 years",
    explanation: "Present sum of husband + wife + child = (27 × 3) + (3 × 3) = 81 + 9 = 90 years. Present sum of wife + child = (20 × 2) + (5 × 2) = 40 + 10 = 50 years. Husband's present age = 90 - 50 = 40 years.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS", "FPSC"]
  },
  {
    id: 272,
    question: "The average monthly income of P and Q is Rs. 5050. The average monthly income of Q and R is Rs. 6250, and of P and R is Rs. 5200. The monthly income of P is:",
    options: { A: "Rs. 3500", B: "Rs. 4000", C: "Rs. 4050", D: "Rs. 5000" },
    answer: "B",
    answerText: "Rs. 4000",
    explanation: "P + Q = 10,100; Q + R = 12,500; P + R = 10,400. Sum: 2(P + Q + R) = 33,000 => P + Q + R = 16,500. P = (P + Q + R) - (Q + R) = 16,500 - 12,500 = Rs. 4000.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS"]
  },
  {
    id: 273,
    question: "The average weight of A, B and C is 45 kg. If the average weight of A and B is 40 kg and that of B and C is 43 kg, then the weight of B is:",
    options: { A: "17 kg", B: "20 kg", C: "26 kg", D: "31 kg" },
    answer: "D",
    answerText: "31 kg",
    explanation: "A + B + C = 45 × 3 = 135 kg. A + B = 80 kg; B + C = 86 kg. (A + B) + (B + C) = 80 + 86 = 166 kg => (A + B + C) + B = 166 => 135 + B = 166 => B = 31 kg.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS", "PPSC"]
  },
  {
    id: 274,
    question: "A library has an average of 510 visitors on Sundays and 240 on other days. The average number of visitors per day in a month of 30 days beginning with a Sunday is:",
    options: { A: "250", B: "276", C: "280", D: "285" },
    answer: "D",
    answerText: "285 visitors",
    explanation: "In a 30-day month starting on Sunday, there are 5 Sundays and 25 other days. Total visitors = (5 × 510) + (25 × 240) = 2550 + 6000 = 8550. Average per day = 8550 / 30 = 285 visitors.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS"]
  },

  // --- Faizan Ch Chapter 5: Profit & Loss Extra Solved ---
  {
    id: 275,
    question: "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?",
    options: { A: "30%", B: "70%", C: "100%", D: "250%" },
    answer: "B",
    answerText: "70%",
    explanation: "Let CP = 100. Profit = 320 => SP = 420. New CP = 125. New Profit = 420 - 125 = 295. Profit as % of SP = (295 / 420) × 100 ≈ 70.24% ≈ 70%.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS", "FPSC"]
  },
  {
    id: 276,
    question: "The percentage profit earned by selling an article for Rs. 1920 is equal to the percentage loss incurred by selling the same article for Rs. 1280. At what price should the article be sold to make 25% profit?",
    options: { A: "Rs. 2000", B: "Rs. 2200", C: "Rs. 2400", D: "Data inadequate" },
    answer: "A",
    answerText: "Rs. 2000",
    explanation: "Since Profit % = Loss %, CP is the midpoint: CP = (1920 + 1280) / 2 = 3200 / 2 = Rs. 1600. To make 25% profit: SP = 1600 × 1.25 = Rs. 2000.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS", "PPSC"]
  },
  {
    id: 277,
    question: "Some articles were bought at 6 articles for Rs. 5 and sold at 5 articles for Rs. 6. The gain percent is:",
    options: { A: "30%", B: "33 1/3%", C: "35%", D: "44%" },
    answer: "D",
    answerText: "44%",
    explanation: "Let number of articles = LCM(6, 5) = 30. CP of 30 articles = 30 × (5/6) = Rs. 25. SP of 30 articles = 30 × (6/5) = Rs. 36. Profit = 36 - 25 = Rs. 11. Profit % = (11 / 25) × 100 = 44%.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS", "FPSC"]
  },
  {
    id: 278,
    question: "On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball is:",
    options: { A: "Rs. 45", B: "Rs. 50", C: "Rs. 55", D: "Rs. 60" },
    answer: "D",
    answerText: "Rs. 60",
    explanation: "Loss = 17 CP - 17 SP = 5 CP => 12 CP = 17 SP = Rs. 720 => CP of 1 ball = 720 / 12 = Rs. 60.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS"]
  },
  {
    id: 279,
    question: "A shopkeeper sells one transistor for Rs. 840 at a gain of 20% and another for Rs. 960 at a loss of 4%. His total gain or loss percent is:",
    options: { A: "5 15/17% loss", B: "5 15/17% gain", C: "6 2/3% gain", D: "None of these" },
    answer: "B",
    answerText: "5 15/17% gain",
    explanation: "CP₁ = 840 / 1.20 = Rs. 700. CP₂ = 960 / 0.96 = Rs. 1000. Total CP = 700 + 1000 = Rs. 1700. Total SP = 840 + 960 = Rs. 1800. Net gain = 1800 - 1700 = Rs. 100. Gain % = (100 / 1700) × 100 = 100 / 17 = 5 15/17% gain.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS", "PPSC"]
  },
  {
    id: 280,
    question: "A trader mixes 26 kg of rice at Rs. 20 per kg with 30 kg of rice of another variety at Rs. 36 per kg and sells the mixture at Rs. 30 per kg. His profit percent is:",
    options: { A: "No profit no loss", B: "5%", C: "8%", D: "10%" },
    answer: "B",
    answerText: "5%",
    explanation: "Total CP = (26 × 20) + (30 × 36) = 520 + 1080 = Rs. 1600 for 56 kg. Total SP = 56 × 30 = Rs. 1680. Profit = 1680 - 1600 = Rs. 80. Profit % = (80 / 1600) × 100 = 5%.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS"]
  },

  // --- Faizan Ch Chapter 6 & 7: Percentage & Simple Interest Extra Solved ---
  {
    id: 281,
    question: "A batsman scored 110 runs which included 3 boundaries and 8 sixes. What percent of his total score did he make by running between the wickets?",
    options: { A: "45%", B: "45 5/11%", C: "54 6/11%", D: "55%" },
    answer: "B",
    answerText: "45 5/11%",
    explanation: "Runs from boundaries = (3 × 4) + (8 × 6) = 12 + 48 = 60 runs. Runs by running = 110 - 60 = 50 runs. % = (50 / 110) × 100 = 500 / 11 = 45 5/11%.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Percentages & Commercial Math",
    examTags: ["CSS", "PMS", "FPSC"]
  },
  {
    id: 282,
    question: "Two students appeared at an examination. One of them secured 9 marks more than the other and his marks were 56% of the sum of their marks. The marks obtained by them are:",
    options: { A: "39, 30", B: "41, 32", C: "42, 33", D: "43, 34" },
    answer: "C",
    answerText: "42 and 33",
    explanation: "Let marks be x + 9 and x. (x + 9) = 0.56(2x + 9) => x + 9 = 1.12x + 5.04 => 0.12x = 3.96 => x = 33. Marks are 42 and 33.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Percentages & Commercial Math",
    examTags: ["CSS", "PMS", "PPSC"]
  },
  {
    id: 283,
    question: "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had:",
    options: { A: "588 apples", B: "600 apples", C: "672 apples", D: "700 apples" },
    answer: "D",
    answerText: "700 apples",
    explanation: "Remaining % = 100% - 40% = 60%. 60% of Total = 420 => Total = (420 × 100) / 60 = 700 apples.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Percentages & Commercial Math",
    examTags: ["FPSC", "NTS"]
  },
  {
    id: 284,
    question: "What percentage of numbers from 1 to 70 have 1 or 9 in their unit's digit?",
    options: { A: "1%", B: "14%", C: "20%", D: "21%" },
    answer: "C",
    answerText: "20%",
    explanation: "Numbers ending in 1: 1, 11, 21, 31, 41, 51, 61 (7 numbers). Numbers ending in 9: 9, 19, 29, 39, 49, 59, 69 (7 numbers). Total = 14 numbers out of 70. Percentage = (14 / 70) × 100 = 20%.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Basic Math & IQ",
    examTags: ["CSS", "PMS"]
  },
  {
    id: 285,
    question: "A student multiplied a number by 3/5 instead of 5/3. What is the percentage error in the calculation?",
    options: { A: "34%", B: "44%", C: "54%", D: "64%" },
    answer: "D",
    answerText: "64%",
    explanation: "Let the number be 15. Correct result = 15 × (5/3) = 25. Incorrect result = 15 × (3/5) = 9. Error = 25 - 9 = 16. Percentage error = (16 / 25) × 100 = 64%.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Percentages & Commercial Math",
    examTags: ["CSS", "PMS", "FPSC"]
  },
  {
    id: 286,
    question: "The population of a town increased from 175,000 to 262,500 in a decade. The average percent increase of population per year is:",
    options: { A: "4.37%", B: "5%", C: "6%", D: "8.75%" },
    answer: "B",
    answerText: "5%",
    explanation: "Total increase = 262,500 - 175,000 = 87,500. Total % increase over 10 years = (87,500 / 175,000) × 100 = 50%. Average increase per year = 50% / 10 = 5%.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Percentages & Commercial Math",
    examTags: ["CSS", "PMS"]
  },
  {
    id: 287,
    question: "A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9% p.a. in 5 years. What is the sum?",
    options: { A: "Rs. 4462.50", B: "Rs. 8032.50", C: "Rs. 8900.00", D: "Rs. 8925.00" },
    answer: "D",
    answerText: "Rs. 8925.00",
    explanation: "Principal = (S.I. × 100) / (R × T) = (4016.25 × 100) / (9 × 5) = 401625 / 45 = Rs. 8925.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS"]
  },
  {
    id: 288,
    question: "How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum simple interest?",
    options: { A: "3.5 years", B: "4 years", C: "4.5 years", D: "5 years" },
    answer: "B",
    answerText: "4 years",
    explanation: "Time = (S.I. × 100) / (P × R) = (81 × 100) / (450 × 4.5) = 8100 / 2025 = 4 years.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS", "PPSC"]
  },
  {
    id: 289,
    question: "Reena took a loan of Rs. 1200 with simple interest for as many years as the rate of interest. If she paid Rs. 432 as interest at the end of the loan period, what was the rate of interest?",
    options: { A: "3.6%", B: "6%", C: "18%", D: "Cannot be determined" },
    answer: "B",
    answerText: "6%",
    explanation: "Let R = T = r. S.I. = (P × r × r) / 100 => 432 = (1200 × r²) / 100 = 12 r² => r² = 432 / 12 = 36 => r = 6%.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS", "FPSC"]
  },
  {
    id: 290,
    question: "A sum of money amounts to Rs. 9800 after 5 years and Rs. 12005 after 8 years at the same rate of simple interest. The rate of interest per annum is:",
    options: { A: "5%", B: "8%", C: "12%", D: "15%" },
    answer: "C",
    answerText: "12%",
    explanation: "S.I. for 3 years = 12005 - 9800 = Rs. 2205. S.I. for 1 year = 2205 / 3 = Rs. 735. S.I. for 5 years = 735 × 5 = Rs. 3675. Principal = 9800 - 3675 = Rs. 6125. Rate = (735 × 100) / 6125 = 12%.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS"]
  },

  // --- Faizan Ch Chapter 8: Ratio & Proportion Extra Solved ---
  {
    id: 291,
    question: "A sum of money is to be distributed among A, B, C, D in the proportion of 5 : 2 : 4 : 3. If C gets Rs. 1000 more than D, what is B's share?",
    options: { A: "Rs. 500", B: "Rs. 1500", C: "Rs. 2000", D: "None of these" },
    answer: "C",
    answerText: "Rs. 2000",
    explanation: "Shares are 5x, 2x, 4x, 3x. C - D = 4x - 3x = x = Rs. 1000. B's share = 2x = 2 × 1000 = Rs. 2000.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS", "FPSC"]
  },
  {
    id: 292,
    question: "Seats for Mathematics, Physics and Biology in a school are in the ratio 5 : 7 : 8. There is a proposal to increase these seats by 40%, 50% and 75% respectively. What will be the ratio of increased seats?",
    options: { A: "2 : 3 : 4", B: "6 : 7 : 8", C: "6 : 8 : 9", D: "None of these" },
    answer: "A",
    answerText: "2 : 3 : 4",
    explanation: "New seats: Math = 5 × 1.40 = 7. Physics = 7 × 1.50 = 10.5. Biology = 8 × 1.75 = 14. Ratio = 7 : 10.5 : 14 = 14 : 21 : 28 = 2 : 3 : 4.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS"]
  },
  {
    id: 293,
    question: "Salaries of Riaz and Salman are in the ratio 2 : 3. If the salary of each is increased by Rs. 4000, the new ratio becomes 40 : 57. What is Salman’s salary?",
    options: { A: "Rs. 17,000", B: "Rs. 20,000", C: "Rs. 25,500", D: "Rs. 38,000" },
    answer: "D",
    answerText: "Rs. 38,000",
    explanation: "(2x + 4000) / (3x + 4000) = 40 / 57 => 57(2x + 4000) = 40(3x + 4000) => 114x + 228,000 = 120x + 160,000 => 6x = 68,000 => 3x = 34,000. Salman's present increased salary = 34,000 + 4000 = Rs. 38,000.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS", "PPSC"]
  },
  {
    id: 294,
    question: "If 0.75 : x :: 5 : 8, then x is equal to:",
    options: { A: "1.12", B: "1.20", C: "1.25", D: "1.30" },
    answer: "B",
    answerText: "1.20",
    explanation: "Product of extremes = Product of means: 5 × x = 0.75 × 8 = 6 => x = 6 / 5 = 1.20.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["FPSC", "NTS"]
  },
  {
    id: 295,
    question: "The sum of three numbers is 98. If the ratio of the first to the second is 2 : 3 and that of the second to the third is 5 : 8, then the second number is:",
    options: { A: "20", B: "30", C: "48", D: "58" },
    answer: "B",
    answerText: "30",
    explanation: "A : B = 2 : 3 = 10 : 15. B : C = 5 : 8 = 15 : 24. Combined ratio A : B : C = 10 : 15 : 24. Sum of ratio terms = 10 + 15 + 24 = 49. Second number B = (15 / 49) × 98 = 15 × 2 = 30.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS", "PPSC"]
  },
  {
    id: 296,
    question: "If Rs. 782 is divided into three parts proportional to 1/2 : 2/3 : 3/4, then the first part is:",
    options: { A: "Rs. 182", B: "Rs. 190", C: "Rs. 196", D: "Rs. 204" },
    answer: "D",
    answerText: "Rs. 204",
    explanation: "Multiply each ratio by LCM(2, 3, 4) = 12: (1/2 × 12) : (2/3 × 12) : (3/4 × 12) = 6 : 8 : 9. Sum of ratio parts = 6 + 8 + 9 = 23. First part = 782 × (6 / 23) = 34 × 6 = Rs. 204.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS"]
  },

  // --- Document 6 BrainyBull Age Problem Practice Drills ---
  {
    id: 297,
    question: "Lina got married 8 years ago. Today her age is 9/7 times her age at the time of her marriage. At present, her daughter’s age is 1/6 of her age. What was her daughter’s age 3 years ago?",
    options: { A: "2 years", B: "3 years", C: "4 years", D: "5 years" },
    answer: "B",
    answerText: "3 years",
    explanation: "Let Lina's present age = x. x = (9/7)(x - 8) => 7x = 9x - 72 => 2x = 72 => x = 36 years. Daughter's present age = 1/6 of 36 = 6 years. Daughter's age 3 years ago = 6 - 3 = 3 years.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS", "NTS"]
  },
  {
    id: 298,
    question: "The ages of Rahul and Amit are in the ratio of 8 : 7. After 10 years, the ratio of their ages will be 13 : 12. What is the difference in years between their ages?",
    options: { A: "2 years", B: "4 years", C: "5 years", D: "6 years" },
    answer: "A",
    answerText: "2 years",
    explanation: "Shortcut formula: x = [New ratio diff × Time shift] / [Cross multiplication diff] = [(13 - 12) × 10] / [|8×12 - 7×13|] = [1 × 10] / [96 - 91] = 10 / 5 = 2. Ages are 8(2) = 16 and 7(2) = 14. Difference = 16 - 14 = 2 years.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS", "FPSC"]
  },
  {
    id: 299,
    question: "The ratio between the ages of Prahlad and Ramavtar is 3 : 5 and the difference between their ages after 4 years will be 10 years. What is the present age of Prahlad?",
    options: { A: "12 years", B: "15 years", C: "20 years", D: "25 years" },
    answer: "B",
    answerText: "15 years",
    explanation: "The age difference between two individuals remains invariant over time. Therefore, current difference is also 10 years: 5x - 3x = 2x = 10 => x = 5. Prahlad's present age = 3x = 3 × 5 = 15 years.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS"]
  },
  {
    id: 300,
    question: "Ganesh is 24 years younger than his father Bholenath. 3 years ago, Ganesh was 1/5 as old as his father was. What is Ganesh’s present age?",
    options: { A: "6 years", B: "9 years", C: "12 years", D: "15 years" },
    answer: "B",
    answerText: "9 years",
    explanation: "Age difference is constant: Father - Ganesh = 24 years. 3 years ago, ages were 5x and 1x => 5x - 1x = 4x = 24 => x = 6 years (Ganesh's age 3 years ago). Today Ganesh is 6 + 3 = 9 years.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Word Problems & Arithmetic",
    examTags: ["CSS", "PMS", "PPSC"]
  }
];

fs.writeFileSync('scratch/extra_mcqs.json', JSON.stringify(extraQuestions, null, 2));
console.log('Saved Extra MCQs:', extraQuestions.length);
