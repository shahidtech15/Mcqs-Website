const fs = require('fs');
const path = require('path');
const targetPath = path.join(__dirname, '../frontend/js/data_daily_challenges.js');
const data = require(targetPath);

data.currentAffairsWeekly.push(
  {
    id: 'ca-6',
    headline: 'US Presidential Election 2024 Outcome',
    q: 'Following the November 2024 US Presidential election, which candidate secured over 312 Electoral College votes to win the presidency?',
    options: ['Donald J. Trump', 'Kamala Harris', 'Joe Biden', 'Robert F. Kennedy Jr.'],
    correctAnswer: 0,
    exp: 'Donald Trump won the November 2024 presidential election, securing all seven battleground swing states and over 312 Electoral College votes.'
  },
  {
    id: 'ca-7',
    headline: 'Pakistan-China Strategic Dialogue',
    q: 'In late 2024, Pakistan and China agreed to upgrade CPEC under five new corridors. Which of the following is NOT one of these five new corridors?',
    options: ['Growth Corridor', 'Innovation Corridor', 'Green Corridor', 'Nuclear Proliferation Corridor'],
    correctAnswer: 3,
    exp: 'The five new upgraded CPEC 2.0 corridors agreed between Pakistan and China are: (1) Growth, (2) Livelihood, (3) Innovation, (4) Green Corridor, and (5) Openness Corridor.'
  },
  {
    id: 'ca-8',
    headline: 'Global Artificial Intelligence Summit',
    q: 'Which landmark European Union legislative framework on Artificial Intelligence officially came into force in August 2024, setting the world\'s first comprehensive risk-based AI rules?',
    options: ['EU AI Act', 'Digital Markets Act (DMA)', 'GDPR Amendment 2024', 'CHIPS Act Europe'],
    correctAnswer: 0,
    exp: 'The European Union\'s Artificial Intelligence Act (EU AI Act) officially entered into force on August 1, 2024, categorizing AI systems into unacceptable risk, high risk, and general-purpose AI obligations.'
  },
  {
    id: 'ca-9',
    headline: 'Reko Diq Mining Investment Milestone',
    q: 'The Reko Diq copper-gold project in Balochistan, one of the world\'s largest undeveloped copper-gold deposits, is being developed through a 50-50 partnership between Pakistan and:',
    options: ['Barrick Gold Corporation', 'Rio Tinto', 'BHP Billiton', 'Glencore'],
    correctAnswer: 0,
    exp: 'Barrick Gold Corporation holds a 50% stake and project operatorship, with 25% owned by federal Pakistani state-owned enterprises (OGDCL, PPL, GHPL) and 25% by the Government of Balochistan.'
  },
  {
    id: 'ca-10',
    headline: 'Middle East Geopolitical Red Sea Crisis',
    q: 'The commercial shipping crisis that forced international container vessels to divert around the Cape of Good Hope began primarily in which strategic maritime chokepoint?',
    options: ['Bab el-Mandeb Strait / Red Sea', 'Strait of Malacca', 'Strait of Gibraltar', 'Bosphorus Strait'],
    correctAnswer: 0,
    exp: 'Attacks by the Houthi movement targeting commercial vessels navigating through the Bab el-Mandeb strait in the southern Red Sea forced major shipping liners (Maersk, MSC) to reroute thousands of miles around Africa.'
  }
);

const fileContent = `/**
 * Daily Interactive Challenges & Knowledge Hub Database
 * Powers 7 distinct interactive modes: Question of the Day, Identify the Personality,
 * Fact or Fiction, Guess the Organization, Daily Five, Weekly Championship, and Current Affairs.
 */

const DAILY_CHALLENGES_DATA = ${JSON.stringify(data, null, 2)};

if (typeof window !== 'undefined') {
  window.DAILY_CHALLENGES_DATA = DAILY_CHALLENGES_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DAILY_CHALLENGES_DATA;
}
`;

fs.writeFileSync(targetPath, fileContent, 'utf-8');
console.log('Added 5 more current affairs questions! Total now:', data.currentAffairsWeekly.length);
