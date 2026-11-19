const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../frontend/js/data_daily_facts.js');
const data = require(targetPath);

const moreFacts = [
  {
    id: "fact-nov09",
    month: 11,
    day: 9,
    year: 1877,
    dateDisplay: "November 9",
    category: "culture",
    title: "Birth of Allama Muhammad Iqbal (Iqbal Day)",
    shortFact: "On November 9, 1877, Allama Muhammad Iqbal, philosopher-poet of the East and national poet of Pakistan, was born in Sialkot.",
    fullNarrative: "Educated in Lahore, Cambridge, and Munich, Iqbal revitalized Islamic philosophy through his doctrine of 'Khudi' (Selfhood) and his seminal English lectures 'The Reconstruction of Religious Thought in Islam'. His celebrated poetry collections in Persian and Urdu ('Asrar-e-Khudi', 'Bang-e-Dra', 'Bal-e-Jibril', 'Zarb-e-Kaleem') mobilized the intellectual consciousness of Indian Muslims, culminating in his 1930 Allahabad Address proposing an autonomous Muslim state in Northwest India.",
    keySignificance: "Ideological father of Pakistan whose philosophical fusion of Islamic spirituality and Western dynamism inspired the Pakistan Movement.",
    didYouKnow: "Iqbal's tomb, constructed with red sandstone from Rajasthan, is situated at the foot of the Badshahi Mosque in Lahore.",
    examRelevance: "CSS Pakistan Affairs & Islamic History: Iqbal's concept of Ijtihad, Allahabad Address 1930, and spiritual foundation of Two-Nation Theory.",
    tags: ["Allama Iqbal", "Iqbal Day", "Poetry", "Philosophy", "Allahabad Address"],
    quiz: {
      question: "In which city was Allama Muhammad Iqbal born on November 9, 1877?",
      options: ["Lahore", "Sialkot", "Rawalpindi", "Delhi"],
      correctAnswer: 1,
      explanation: "Allama Muhammad Iqbal was born in Sialkot, Punjab, on November 9, 1877."
    }
  },
  {
    id: "fact-sep06",
    month: 9,
    day: 6,
    year: 1965,
    dateDisplay: "September 6",
    category: "pakistan",
    title: "Pakistan Defence Day: Outbreak of the 1965 War",
    shortFact: "On September 6, 1965, Indian armed forces crossed the international border to attack Lahore, marking the official outbreak of the 1965 Indo-Pak War.",
    fullNarrative: "In the early morning hours of September 6, Indian infantry divisions launched a surprise multi-pronged assault across the Wagah-Barki and Bedian sectors toward Lahore. Major Raja Aziz Bhatti of the Punjab Regiment held off intense tank and artillery assaults along the BRB Canal for five days before embracing martyrdom, earning the Nishan-e-Haider. The war saw the largest tank battle since World War II at Chawinda (the 'Graveyard of Indian Tanks') in Sialkot, and concluded under the Soviet-mediated Tashkent Declaration in January 1966.",
    keySignificance: "Celebrated nationwide annually as Defence Day (Youm-e-Difa), honoring the resilience and sacrifice of Pakistan's armed forces.",
    didYouKnow: "Squadron Leader Muhammad Mahmood Alam (M.M. Alam) set a world combat aviation record on September 7, 1965, by shooting down five Indian Hunter fighter jets in under one minute in his F-86 Sabre.",
    examRelevance: "CSS Pakistan Affairs: 1965 War causes (Operation Gibraltar), military balance, international diplomacy, and the Tashkent Declaration.",
    tags: ["Defence Day", "1965 War", "September 6", "Aziz Bhatti", "Chawinda"],
    quiz: {
      question: "Which water barrier near Lahore served as the frontline defense against Indian armor during the September 1965 war?",
      options: ["Ravi River", "Bambawali-Ravi-Bedian (BRB) Canal", "Chenab Canal", "Sutlej River"],
      correctAnswer: 1,
      explanation: "Major Raja Aziz Bhatti and Pakistan Army units heroically defended the BRB Canal, preventing Indian forces from advancing into Lahore."
    }
  },
  {
    id: "fact-may28",
    month: 5,
    day: 28,
    year: 1998,
    dateDisplay: "May 28",
    category: "pakistan",
    title: "Youm-e-Takbeer: Pakistan Becomes the 7th Nuclear Power",
    shortFact: "On May 28, 1998, Pakistan successfully conducted five underground nuclear tests in the Ras Koh Hills of Chaghai, Balochistan.",
    fullNarrative: "In direct response to India's Pokhran-II nuclear tests conducted earlier in May 1998, Pakistan detonated five nuclear devices in a horizontal shaft drilled into the Ras Koh mountain, which visibly turned white from the intense seismic and thermal shockwaves (Chagai-I). A sixth test was conducted on May 30 in the Kharan Desert (Chagai-II). The tests restored strategic deterrence and strategic stability in South Asia, establishing Pakistan as the world's 7th nuclear weapons state and the first in the Muslim world.",
    keySignificance: "Established nuclear deterrence in South Asia, precluding full-scale conventional warfare between India and Pakistan.",
    didYouKnow: "The code signal transmitted to confirm the success of the tests was 'Allah-o-Akbar' (God is Greatest), and the day is officially observed as Youm-e-Takbeer.",
    examRelevance: "CSS International Relations & Strategic Studies: Full Spectrum Deterrence (FSD), Nuclear Non-Proliferation Treaty (NPT), and strategic stability.",
    tags: ["Youm-e-Takbeer", "Nuclear Tests", "Chagai", "Deterrence", "May 28"],
    quiz: {
      question: "In which mountain range of Balochistan did Pakistan conduct its five underground nuclear tests on May 28, 1998?",
      options: ["Sulaiman Range", "Kirthar Range", "Ras Koh Hills", "Toba Kakar Range"],
      correctAnswer: 2,
      explanation: "The tests were conducted inside the Ras Koh Hills in the Chaghai district of Balochistan."
    }
  },
  {
    id: "fact-jul16",
    month: 7,
    day: 16,
    year: 1945,
    dateDisplay: "July 16",
    category: "technology",
    title: "The Trinity Test: First Detonation of a Nuclear Weapon",
    shortFact: "On July 16, 1945, the United States Army conducted the 'Trinity' nuclear test in the Jornada del Muerto desert in New Mexico.",
    fullNarrative: "Directed by J. Robert Oppenheimer and Major General Leslie Groves under the top-secret Manhattan Project, an implosion-design plutonium device codenamed 'The Gadget' was hoisted onto a 100-foot steel tower and detonated at 5:29 AM. The explosion released energy equivalent to approximately 21 kilotons of TNT, vaporizing the steel tower, melting desert sand into a jade-green radioactive glass named 'trinitite', and creating a mushroom cloud rising 12 kilometers into the atmosphere.",
    keySignificance: "Inaugurated the Atomic Age, forever transforming military strategy, international diplomacy, and geopolitics.",
    didYouKnow: "Watching the blinding flash, Oppenheimer recalled lines from the Hindu scripture Bhagavad Gita: 'Now I am become Death, the destroyer of worlds.'",
    examRelevance: "Everyday Science & International Relations: Nuclear fission mechanics, mass defect (E=mc²), and the beginning of the Cold War nuclear arms race.",
    tags: ["Trinity", "Manhattan Project", "Nuclear Physics", "Oppenheimer", "Atomic Age"],
    quiz: {
      question: "Which fissile material powered 'The Gadget', the first atomic device detonated during the Trinity test in July 1945?",
      options: ["Uranium-235", "Plutonium-239", "Thorium-232", "Deuterium"],
      correctAnswer: 1,
      explanation: "The Trinity device utilized an implosion-assembly design fueled by Plutonium-239."
    }
  },
  {
    id: "fact-nov17",
    month: 11,
    day: 17,
    year: 1869,
    dateDisplay: "November 17",
    category: "history",
    title: "Official Opening of the Suez Canal in Egypt",
    shortFact: "On November 17, 1869, the Suez Canal was officially opened to international navigation, linking the Mediterranean Sea directly to the Red Sea.",
    fullNarrative: "Constructed over a decade under the leadership of French diplomat Ferdinand de Lesseps, the 193-kilometer sea-level waterway bypassed the dangerous 7,000-kilometer voyage around the African Cape of Good Hope. The canal dramatically reduced transit time between Europe and Asia from months to weeks, accelerating global trade, European imperial reach in Asia, and cementing Egypt's role as the paramount maritime crossroads of the world.",
    keySignificance: "The most critical artificial maritime shortcut in human history, handling over 12% of modern global merchandise trade.",
    didYouKnow: "The inaugural procession through the canal was led by French Empress Eugénie aboard the imperial yacht L'Aigle.",
    examRelevance: "CSS International Relations & Geography: Maritime chokepoints, the 1956 Suez Crisis, and contemporary Red Sea shipping diversions.",
    tags: ["Suez Canal", "Maritime Trade", "Egypt", "Ferdinand de Lesseps", "Red Sea"],
    quiz: {
      question: "Which French engineer and diplomat spearheaded the construction of the Suez Canal opened in November 1869?",
      options: ["Gustave Eiffel", "Ferdinand de Lesseps", "Georges-Eugène Haussmann", "Louis Pasteur"],
      correctAnswer: 1,
      explanation: "Ferdinand de Lesseps organized the Suez Canal Company and supervised its 10-year construction."
    }
  },
  {
    id: "fact-nov19",
    month: 11,
    day: 19,
    year: 1863,
    dateDisplay: "November 19",
    category: "history",
    title: "Abraham Lincoln Delivers the Gettysburg Address",
    shortFact: "On November 19, 1863, US President Abraham Lincoln delivered the 272-word Gettysburg Address at the dedication of the Soldiers' National Cemetery in Pennsylvania.",
    fullNarrative: "Speaking four months after the bloody Battle of Gettysburg during the American Civil War, Lincoln redefined the American Civil War not merely as a constitutional struggle for the Union, but as a moral crusade for human equality, invoking the 1776 Declaration of Independence. In a speech lasting barely two minutes, he immortalized the ideal of 'government of the people, by the people, for the people'.",
    keySignificance: "One of the greatest oratorical masterpieces in political philosophy, establishing democratic popular sovereignty as a universal human aspiration.",
    didYouKnow: "The featured speaker of the day, Edward Everett, spoke for two full hours before Lincoln. Everett later wrote to Lincoln: 'I should be glad if I could flatter myself that I came as near to the central idea of the occasion, in two hours, as you did in two minutes.'",
    examRelevance: "CSS Political Science & US History: Democratic theory, civil rights, Lincoln's presidency, and constitutional interpretations of federalism.",
    tags: ["Gettysburg Address", "Abraham Lincoln", "Democracy", "US History", "Civil War"],
    quiz: {
      question: "Lincoln began the Gettysburg Address on November 19, 1863, with which iconic phrase signifying 87 years earlier (1776)?",
      options: ["'Four score and seven years ago'", "'In the course of human events'", "'We the people of these United States'", "'A house divided against itself'"],
      correctAnswer: 0,
      explanation: "'A score' equals 20 years; 'Four score and seven' represents 87 years, referring back to the 1776 Declaration of Independence."
    }
  },
  {
    id: "fact-nov20",
    month: 11,
    day: 20,
    year: 1945,
    dateDisplay: "November 20",
    category: "history",
    title: "Commencement of the Nuremberg Trials",
    shortFact: "On November 20, 1945, the International Military Tribunal convened in Nuremberg, Germany, to try 24 top Nazi war criminals.",
    fullNarrative: "Presided over by Allied judges from the US, UK, Soviet Union, and France at the Palace of Justice, the Nuremberg Trials established groundbreaking legal precedents by holding political and military leaders individually criminally liable under international law for crimes against peace, war crimes, and crimes against humanity. The tribunal rejected the defense of 'superior orders' ('Befehlsnotstand'), establishing the universal principle that individuals have duties transcending national obligations.",
    keySignificance: "Laid the statutory foundation for modern international criminal law, the 1948 Genocide Convention, and the International Criminal Court (ICC).",
    didYouKnow: "Nuremberg was deliberately chosen as the trial venue because it had been the ceremonial birthplace of Nazi propaganda rallies and the infamous 1935 Nuremberg Race Laws.",
    examRelevance: "CSS International Law: Individual criminal responsibility, Nuremberg Principles, crimes against humanity, and the Rome Statute of the ICC.",
    tags: ["Nuremberg Trials", "International Law", "War Crimes", "ICC", "Human Rights"],
    quiz: {
      question: "Which defense commonly claimed by military subordinates was categorically rejected as an absolute shield from liability at Nuremberg?",
      options: ["Diplomatic Immunity", "Defense of Superior Orders ('Just following orders')", "Double Jeopardy", "Statute of Limitations"],
      correctAnswer: 1,
      explanation: "The Nuremberg Tribunal established Principle IV: following superior orders does not relieve an individual of criminal responsibility if a moral choice was in fact possible."
    }
  },
  {
    id: "fact-dec17",
    month: 12,
    day: 17,
    year: 1903,
    dateDisplay: "December 17",
    category: "technology",
    title: "The Wright Brothers Achieve the First Powered, Controlled Heavier-Than-Air Flight",
    shortFact: "On December 17, 1903, Orville and Wilbur Wright achieved the first sustained, controlled, powered airplane flight at Kitty Hawk, North Carolina.",
    fullNarrative: "Piloting the 'Wright Flyer' powered by a custom 12-horsepower aluminum engine and dual pusher propellers, Orville Wright flew 120 feet in 12 seconds over the sand dunes of Kill Devil Hills. Later that day, Wilbur flew 852 feet in 59 seconds. The brothers solved the critical problem of aeronautical stability through their patented 'three-axis control' system (wing warping for roll, elevator for pitch, and rudder for yaw), which remains the standard aerodynamic steering principle of all modern aircraft.",
    keySignificance: "Inaugurated the aviation revolution, shrinking global geographic distance and transforming military strategy, commercial transit, and logistics.",
    didYouKnow: "A small piece of fabric and wood from the 1903 Wright Flyer was carried to Mars aboard NASA's Ingenuity helicopter in 2021, linking the first powered flight on Earth with the first powered flight on another planet.",
    examRelevance: "Everyday Science: Aerodynamics, Bernoulli's principle, lift and drag forces, and three-axis flight dynamics.",
    tags: ["Aviation", "Wright Brothers", "Aerodynamics", "Flight", "Invention"],
    quiz: {
      question: "What patented aerodynamic control method allowed the Wright brothers to maintain lateral roll balance on their 1903 Flyer?",
      options: ["Aileron Flaps", "Wing Warping", "Jet Thrusters", "Canard Elevators"],
      correctAnswer: 1,
      explanation: "The Wright brothers used wing warping—twisting the trailing edges of the wings in opposite directions—to control roll."
    }
  },
  {
    id: "fact-aug06",
    month: 8,
    day: 6,
    year: 1945,
    dateDisplay: "August 6",
    category: "history",
    title: "Atomic Bombing of Hiroshima ('Little Boy')",
    shortFact: "On August 6, 1945, the US B-29 bomber Enola Gay dropped the first wartime uranium atomic bomb on the Japanese city of Hiroshima.",
    fullNarrative: "Detonating at an altitude of 600 meters directly above the Shima Surgical Hospital with an explosive yield of 15 kilotons, 'Little Boy' generated a blinding thermal fireball reaching 4,000°C, instantly vaporizing thousands of inhabitants and creating a devastating shockwave that flattened five square miles of the city. An estimated 70,000 to 80,000 people were killed instantly, with thousands more succumbing in subsequent weeks to severe acute radiation sickness.",
    keySignificance: "The first offensive use of a nuclear weapon in history, precipitating Japan's unconditional surrender and the dawn of the nuclear deterrence era.",
    didYouKnow: "The Hiroshima Peace Memorial (Genbaku Dome), one of the very few structures near the hypocenter to survive the blast, is preserved today as a UNESCO World Heritage Site.",
    examRelevance: "CSS International Relations: The ethics of total war, nuclear proliferation, and the Hiroshima/Nagasaki precedent in nuclear taboo theory.",
    tags: ["Hiroshima", "Atomic Bomb", "World War II", "Nuclear Weapons", "Enola Gay"],
    quiz: {
      question: "What was the name of the B-29 Superfortress aircraft that dropped the atomic bomb on Hiroshima on August 6, 1945?",
      options: ["Bockscar", "Enola Gay", "Memphis Belle", "The Great Artiste"],
      correctAnswer: 1,
      explanation: "The Boeing B-29 bomber was named 'Enola Gay' by its pilot, Colonel Paul Tibbets, after his mother."
    }
  },
  {
    id: "fact-mar14",
    month: 3,
    day: 14,
    year: 1879,
    dateDisplay: "March 14",
    category: "science",
    title: "Birth of Albert Einstein & International Pi Day",
    shortFact: "On March 14, 1879, theoretical physicist Albert Einstein was born in Ulm, Germany. March 14 (3/14) is celebrated globally as International Pi Day.",
    fullNarrative: "In his 'Miracle Year' (Annus Mirabilis) of 1905, Einstein published four revolutionary papers while working as a patent clerk in Bern: the Photoelectric Effect (earning the 1921 Nobel Prize), Brownian Motion (confirming atomic existence), Special Relativity, and Mass-Energy Equivalence (E = mc²). A decade later in 1915, he completed General Relativity, demonstrating that gravity is not a Newtonian mechanical force, but the curvature of four-dimensional spacetime caused by mass and energy.",
    keySignificance: "Fundamentally overturned 200 years of Newtonian classical mechanics and redefined our understanding of time, space, light, and gravity.",
    didYouKnow: "British astronomer Sir Arthur Eddington experimentally verified Einstein's General Relativity in May 1919 by measuring the bending of starlight around the Sun during a total solar eclipse, turning Einstein into a global sensation overnight.",
    examRelevance: "Everyday Science: General vs. Special Relativity, photoelectric effect (quantum theory), gravitational lensing, and black holes.",
    tags: ["Albert Einstein", "Relativity", "Pi Day", "Nobel Prize", "Physics"],
    quiz: {
      question: "For which specific scientific discovery was Albert Einstein awarded the 1921 Nobel Prize in Physics?",
      options: ["Special Relativity", "General Relativity", "Law of the Photoelectric Effect", "Unified Field Theory"],
      correctAnswer: 2,
      explanation: "Einstein was formally awarded the 1921 Nobel Prize 'for his services to Theoretical Physics, and especially for his discovery of the law of the photoelectric effect'."
    }
  }
];

moreFacts.forEach(f => {
  if (!data.facts.some(existing => existing.id === f.id)) {
    data.facts.push(f);
  }
});

const fileContent = `/**
 * Daily Important Facts Explorer Database
 * Curated facts in History, Science, Technology, Culture, and Pakistan History.
 * Features full narratives, key significance, trivia, and interactive recall quizzes.
 */

const DAILY_FACTS_DATA = ${JSON.stringify(data, null, 2)};

if (typeof window !== 'undefined') {
  window.DAILY_FACTS_DATA = DAILY_FACTS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DAILY_FACTS_DATA;
}
`;

fs.writeFileSync(targetPath, fileContent, 'utf-8');
console.log('Successfully expanded data_daily_facts.js! Total facts now:', data.facts.length);
