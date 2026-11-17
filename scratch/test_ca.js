const fs = require('fs');

const current_affairs = [
  { answer: "INFLATION", clue: "Sustained increase in the overall price level eroding real currency purchasing power.", examFact: "Monitored through Consumer Price Index (CPI); central to State Bank of Pakistan interest rate policy." },
  { answer: "RENEWABLE", clue: "Energy from clean natural sources that replenish continually (solar, wind, hydel).", examFact: "Pakistan's Alternative and Renewable Energy (ARE) Policy targets 30% renewable capacity by 2030." },
  { answer: "RESILIENCE", clue: "Capacity of socio-economic systems to absorb climate disasters and recover rapidly.", examFact: "Core focus of Pakistan's Resilient Recovery, Rehabilitation, and Reconstruction Framework (4RF)." },
  { answer: "CORRIDOR", clue: "Designated linear infrastructure zone facilitating trade and energy flow (e.g. CPEC).", examFact: "The China-Pakistan Economic Corridor (CPEC) connects Gwadar with Kashgar, Xinjiang." },
  { answer: "CLIMATE", clue: "Long-term statistical pattern of atmospheric conditions and weather across decades.", examFact: "Pakistan ranks among the top 10 most climate-vulnerable nations according to Germanwatch CRI." },
  { answer: "DEFICIT", clue: "Condition where fiscal expenditures exceed fiscal revenues over a defined budgeting period.", examFact: "Fiscal deficit and current account deficit (CAD) are recurring macro-stabilization issues in Pakistan." },
  { answer: "SUMMIT", clue: "High-level diplomatic conference of heads of state or government (e.g. SCO, COP28).", examFact: "Pakistan successfully hosted the SCO Heads of Government Summit in Islamabad in October 2024." },
  { answer: "DIGITAL", clue: "Electronic technology utilizing binary computing systems transforming governance (e.g. Raast).", examFact: "The State Bank of Pakistan introduced 'Raast' as Pakistan's instant digital payments gateway." },
  { answer: "ENERGY", clue: "Crucial economic sector covering circular debt, thermal generation, and hydel projects.", examFact: "Circular debt in Pakistan's power sector remains a primary structural reform condition under the IMF." },
  { answer: "TARIFF", clue: "Customs duty or tax levied by a government on imports or exports.", examFact: "Import tariffs and regulatory duties form key fiscal instruments for trade balance regulation." },
  { answer: "POLLUTION", clue: "Introduction of contaminants into the natural environment causing adverse change (e.g. Smog).", examFact: "Lahore and Punjab face acute hazardous seasonal smog driven by vehicular emissions and stubble burning." },
  { answer: "CRISIS", clue: "Time of intense difficulty or danger requiring decisive governmental response.", examFact: "Covers balance of payments, food security, and climate adaptation crises in civil service analysis." }
];

// Let's test crossword placement with 13x13 grid
const { buildCrossword } = require('./test_helpers.js');
