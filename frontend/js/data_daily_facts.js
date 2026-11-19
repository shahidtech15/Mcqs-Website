/**
 * Daily Important Facts Explorer Database
 * Curated facts in History, Science, Technology, Culture, and Pakistan History.
 * Features full narratives, key significance, trivia, and interactive recall quizzes.
 */

const DAILY_FACTS_DATA = {
  "meta": {
    "title": "Daily Fact Explorer: This Day in History, Science, Technology & Culture",
    "description": "Interactive daily knowledge repository delivering curated historical milestones, scientific breakthroughs, technological innovations, and cultural wonders.",
    "categories": [
      {
        "id": "all",
        "name": "All Categories",
        "icon": "fa-border-all",
        "color": "#6366f1"
      },
      {
        "id": "history",
        "name": "History & Statecraft",
        "icon": "fa-landmark",
        "color": "#d97706"
      },
      {
        "id": "science",
        "name": "Science & Nature",
        "icon": "fa-flask-vial",
        "color": "#0284c7"
      },
      {
        "id": "technology",
        "name": "Tech & Computing",
        "icon": "fa-microchip",
        "color": "#7c3aed"
      },
      {
        "id": "culture",
        "name": "Culture & Philosophy",
        "icon": "fa-feather-pointed",
        "color": "#0d9488"
      },
      {
        "id": "pakistan",
        "name": "Pakistan Special",
        "icon": "fa-star-and-crescent",
        "color": "#16a34a"
      }
    ]
  },
  "facts": [
    {
      "id": "fact-nov18-history",
      "month": 11,
      "day": 18,
      "year": 1918,
      "dateDisplay": "November 18",
      "category": "history",
      "title": "Latvia Declares Independence from the Russian Empire",
      "shortFact": "On November 18, 1918, the People's Council of Latvia officially proclaimed the independence of the Republic of Latvia in Riga following World War I.",
      "fullNarrative": "In the tumultuous aftermath of the collapse of the Russian Empire and the armistice ending World War I, representatives of Latvian political parties gathered in the National Theatre of Riga on November 18, 1918, to declare an independent, democratic republic with Kārlis Ulmanis as Prime Minister. Despite subsequent military invasions by Soviet forces and Baltic-German militias, Latvia successfully defended its sovereignty in the 1918–1920 War of Independence.",
      "keySignificance": "Symbolized the collapse of imperial dynastic empires across Central and Eastern Europe and the realization of Woodrow Wilson's principle of national self-determination.",
      "didYouKnow": "November 18 is celebrated annually as the official National Holiday (Proclamation Day of the Republic of Latvia) marked by the Staro Rīga light festival.",
      "examRelevance": "CSS International Relations: Post-WWI collapse of the Romanov, Habsburg, and Ottoman empires; self-determination and the Treaty of Versailles.",
      "tags": [
        "Latvia",
        "Baltic States",
        "WWI",
        "Independence",
        "Sovereignty"
      ],
      "quiz": {
        "question": "On November 18, 1918, which Baltic republic formally proclaimed its national independence in Riga?",
        "options": [
          "Estonia",
          "Lithuania",
          "Latvia",
          "Finland"
        ],
        "correctAnswer": 2,
        "explanation": "Latvia declared its sovereign independence in Riga on November 18, 1918, following the end of the First World War."
      }
    },
    {
      "id": "fact-nov18-tech",
      "month": 11,
      "day": 18,
      "year": 1963,
      "dateDisplay": "November 18",
      "category": "technology",
      "title": "Introduction of the First Commercial Touch-Tone Push-Button Telephone",
      "shortFact": "On November 18, 1963, Bell Systems introduced the world's first commercial push-button 'Touch-Tone' telephone service in Carnegie and Greensburg, Pennsylvania.",
      "fullNarrative": "Prior to November 18, 1963, telephony worldwide relied on mechanical rotary pulse dialing, which was sluggish and mechanically complex. Bell Labs engineers developed Dual-Tone Multi-Frequency (DTMF) signaling, where pressing each key generated a unique combination of two distinct acoustic frequencies. This touch-tone standard accelerated call connection times from 10 seconds to less than one second, ultimately laying the foundation for electronic banking, automated IVR call menus, voicemail systems, and data transmission over phone lines.",
      "keySignificance": "DTMF audio signaling revolutionized global telecommunications and served as the direct precursor to early modem data networking.",
      "didYouKnow": "The original touch-tone keypad had only 10 buttons (0-9). The '*' (star) and '#' (pound/hash) keys were added later in 1968 for automated menu signaling.",
      "examRelevance": "Everyday Science: Telecommunications, electromagnetic waves, frequency multiplexing, and digital signal processing.",
      "tags": [
        "Telecommunications",
        "Bell Labs",
        "Touch-Tone",
        "DTMF",
        "Invention"
      ],
      "quiz": {
        "question": "What technical signaling system was introduced with the commercial push-button telephone on November 18, 1963?",
        "options": [
          "Frequency Modulation (FM)",
          "Dual-Tone Multi-Frequency (DTMF)",
          "Pulse-Code Modulation (PCM)",
          "Amplitude Modulation (AM)"
        ],
        "correctAnswer": 1,
        "explanation": "Dual-Tone Multi-Frequency (DTMF) generated two simultaneous acoustic tones per key, replacing mechanical rotary pulses."
      }
    },
    {
      "id": "fact-nov18-science",
      "month": 11,
      "day": 18,
      "year": 1923,
      "dateDisplay": "November 18",
      "category": "science",
      "title": "Alan Shepard, First American in Space, is Born",
      "shortFact": "On November 18, 1923, Alan Bartlett Shepard Jr., the first American astronaut in space and the fifth human to walk on the Moon, was born in New Hampshire.",
      "fullNarrative": "Selected as one of NASA's original 'Mercury Seven' astronauts in 1959, Alan Shepard piloted the Freedom 7 spacecraft on May 5, 1961, executing a suborbital flight reaching an altitude of 187 kilometers just three weeks after Yuri Gagarin's orbital flight. A decade later, at age 47, Shepard commanded Apollo 14 in 1971, landing on the Fra Mauro lunar highlands where he famously struck two golf balls on the lunar surface, demonstrating the low-gravity trajectory.",
      "keySignificance": "Pioneered manned spaceflight during the Cold War Space Race, verifying human physiological tolerance to space acceleration and weightlessness.",
      "didYouKnow": "Shepard had to overcome severe Ménière's disease (an inner-ear fluid imbalance) via experimental ear surgery before returning to fly the Apollo 14 mission.",
      "examRelevance": "Everyday Science: Space exploration, escape velocity, lunar gravity (one-sixth of Earth), and manned orbital flight mechanics.",
      "tags": [
        "Space",
        "NASA",
        "Astronomy",
        "Apollo",
        "Alan Shepard"
      ],
      "quiz": {
        "question": "Alan Shepard, born on November 18, 1923, achieved which historic milestone on May 5, 1961?",
        "options": [
          "First human to orbit the Earth",
          "First American astronaut in space",
          "First person to perform a spacewalk",
          "First commander of the Space Shuttle"
        ],
        "correctAnswer": 1,
        "explanation": "Alan Shepard piloted Freedom 7 on May 5, 1961, becoming the first American astronaut in space."
      }
    },
    {
      "id": "fact-nov18-culture",
      "month": 11,
      "day": 18,
      "year": 1928,
      "dateDisplay": "November 18",
      "category": "culture",
      "title": "Debut of Mickey Mouse in 'Steamboat Willie'",
      "shortFact": "On November 18, 1928, Walt Disney's animated short 'Steamboat Willie' premiered in New York City, debuting Mickey Mouse with fully synchronized sound.",
      "fullNarrative": "Released at the Colony Theatre in New York, 'Steamboat Willie' was among the very first animated cartoons with fully synchronized post-produced sound, integrating dialogue, sound effects, and a musical score. Directed by Walt Disney and Ub Iwerks, the film transformed animation from a silent novelty into a mainstream cinematic storytelling medium, establishing the global cultural icon of Mickey Mouse.",
      "keySignificance": "Marked the birth of the modern commercial animation industry and acoustic synchronization in cinema.",
      "didYouKnow": "Walt Disney personally provided the vocal squeaks and sounds for Mickey Mouse in 'Steamboat Willie' and continued voicing him until 1947.",
      "examRelevance": "Media & Cultural Studies: The transition from silent cinema to synchronized sound ('talkies') and mass media cultural globalization.",
      "tags": [
        "Cinema",
        "Animation",
        "Culture",
        "Walt Disney",
        "Sound"
      ],
      "quiz": {
        "question": "Which pioneering 1928 animated film featured the debut of Mickey Mouse with synchronized sound?",
        "options": [
          "Snow White",
          "Steamboat Willie",
          "Fantasia",
          "Plane Crazy"
        ],
        "correctAnswer": 1,
        "explanation": "'Steamboat Willie', premiering on November 18, 1928, revolutionized animation with synchronized music and sound effects."
      }
    },
    {
      "id": "fact-nov18-pakistan",
      "month": 11,
      "day": 18,
      "year": 1974,
      "dateDisplay": "November 18",
      "category": "pakistan",
      "title": "Pakistan and Bangladesh Postal & Telecommunications Accord",
      "shortFact": "In mid-November 1974, Pakistan and Bangladesh established direct telecommunications and mail links, cementing post-1971 diplomatic normalization.",
      "fullNarrative": "Following Pakistan's formal diplomatic recognition of Bangladesh at the historic 2nd OIC Islamic Summit held in Lahore in February 1974, bilateral ties normalized rapidly. In November 1974, bilateral technical delegations formalized the restoration of direct postal exchange routes and telegraphic links across the subcontinent, restoring personal and commercial communication between divided families for the first time since December 1971.",
      "keySignificance": "Reflected the post-Simla Agreement diplomatic reconciliation between Pakistan and Bangladesh under the umbrella of Islamic solidarity.",
      "didYouKnow": "Prime Minister Zulfikar Ali Bhutto had visited Dhaka in June 1974, laying a wreath at the National Martyrs' Memorial in Savar.",
      "examRelevance": "CSS Pakistan Affairs & International Relations: Normalization of relations between Pakistan and Bangladesh; the 1974 Lahore Islamic Summit.",
      "tags": [
        "Pakistan",
        "Bangladesh",
        "Diplomacy",
        "OIC",
        "Telecommunications"
      ],
      "quiz": {
        "question": "At which landmark international forum did Pakistan formally recognize Bangladesh as a sovereign state in February 1974?",
        "options": [
          "UN General Assembly in New York",
          "2nd OIC Islamic Summit in Lahore",
          "Simla Summit in India",
          "Non-Aligned Movement Summit in Algiers"
        ],
        "correctAnswer": 1,
        "explanation": "Prime Minister Zulfikar Ali Bhutto announced the official recognition of Bangladesh on February 22, 1974, at the 2nd OIC Summit in Lahore."
      }
    },
    {
      "id": "fact-aug14",
      "month": 8,
      "day": 14,
      "year": 1947,
      "dateDisplay": "August 14",
      "category": "pakistan",
      "title": "Creation of the Sovereign State of Pakistan",
      "shortFact": "On August 14, 1947 (27th Ramadan 1366 AH), Pakistan emerged on the world map as an independent sovereign Muslim homeland in South Asia.",
      "fullNarrative": "Culminating decades of constitutional struggle led by the All-India Muslim League under Quaid-e-Azam Muhammad Ali Jinnah, Pakistan gained independence under the Indian Independence Act 1947 passed by the British Parliament. Lord Mountbatten addressed the Constituent Assembly in Karachi on August 13/14, and Quaid-e-Azam took oath as the nation's first Governor-General on August 15, establishing the largest Muslim state in the world at the time.",
      "keySignificance": "The culmination of the Two-Nation Theory and the most significant post-colonial state creation of the 20th century.",
      "didYouKnow": "The date of independence coincided with Laylat al-Qadr (the 27th night of Ramadan), which held profound spiritual symbolism for Muslims of the subcontinent.",
      "examRelevance": "CSS Pakistan Affairs Compulsory: 1947 partition, Radcliffe Award, and early administrative/refugee crises.",
      "tags": [
        "Independence",
        "Quaid-e-Azam",
        "Pakistan Movement",
        "1947",
        "Constitution"
      ],
      "quiz": {
        "question": "Under which British Act of Parliament was Pakistan created as an independent dominion on August 14, 1947?",
        "options": [
          "Government of India Act 1935",
          "Indian Independence Act 1947",
          "Indian Councils Act 1909",
          "Wavell Plan Accord 1945"
        ],
        "correctAnswer": 1,
        "explanation": "The Indian Independence Act 1947, enacted on July 18, 1947, partitioned British India into two independent dominions."
      }
    },
    {
      "id": "fact-mar23",
      "month": 3,
      "day": 23,
      "year": 1940,
      "dateDisplay": "March 23",
      "category": "pakistan",
      "title": "Passage of the Historic Lahore Resolution (Pakistan Resolution)",
      "shortFact": "On March 23, 1940, the All-India Muslim League adopted the Lahore Resolution demanding autonomous sovereign Muslim states in Northwest and Eastern India.",
      "fullNarrative": "Convening at Minto Park (now Iqbal Park), Lahore, under the presidency of Quaid-e-Azam Muhammad Ali Jinnah, over 100,000 delegates unanimously endorsed the resolution moved by A.K. Fazlul Huq, the Premier of Bengal. The resolution declared that no constitutional plan would be workable or acceptable to Muslims unless geographically contiguous units were demarcated into regions where Muslims were in a majority, laying the unambiguous ideological foundation for Pakistan.",
      "keySignificance": "Transformed the Muslim political goal from constitutional minority safeguards into an outright demand for sovereign statehood.",
      "didYouKnow": "The text of the resolution did not originally contain the word 'Pakistan'; the Hindu and British press labeled it the 'Pakistan Resolution', which Jinnah and the League proudly embraced.",
      "examRelevance": "Core question in CSS Pakistan Affairs: Analysis of the 1940 Lahore Resolution, the 1946 Delhi Legislators' Convention amendment, and Minar-e-Pakistan.",
      "tags": [
        "Lahore Resolution",
        "Minar-e-Pakistan",
        "March 23",
        "Muslim League",
        "Jinnah"
      ],
      "quiz": {
        "question": "Who formally moved the historic Lahore Resolution on March 23, 1940, at Minto Park?",
        "options": [
          "Liaquat Ali Khan",
          "Sir Muhammad Zafarullah Khan",
          "Abul Kashem Fazlul Huq (Sher-e-Bangla)",
          "Chaudhry Khaliquzzaman"
        ],
        "correctAnswer": 2,
        "explanation": "A.K. Fazlul Huq, the Premier of Bengal, formally moved the resolution on March 23, 1940."
      }
    },
    {
      "id": "fact-jul20",
      "month": 7,
      "day": 20,
      "year": 1969,
      "dateDisplay": "July 20",
      "category": "technology",
      "title": "Apollo 11 Manned Lunar Landing: First Human Steps on the Moon",
      "shortFact": "On July 20, 1969, American astronaut Neil Armstrong stepped off the Apollo 11 Lunar Module Eagle onto the surface of the Moon.",
      "fullNarrative": "Watched live by an estimated 650 million people worldwide, Neil Armstrong descended the ladder onto the Moon's Sea of Tranquility, uttering the iconic phrase: 'That's one small step for [a] man, one giant leap for mankind.' Accompanied by Lunar Module Pilot Buzz Aldrin, the crew collected 21.5 kilograms of lunar rocks, deployed experimental seismometers and solar wind collectors, and fulfilled President John F. Kennedy's 1961 national commitment to land a man on the Moon and return him safely to Earth.",
      "keySignificance": "The zenith of the Cold War Space Race and the most complex technological engineering achievement in human history.",
      "didYouKnow": "The Apollo Guidance Computer (AGC) that navigated the spacecraft had only 4 kilobytes of RAM and 72 kilobytes of ROM—a fraction of the computing power of a modern musical greeting card.",
      "examRelevance": "Everyday Science: Space exploration, escape velocity, Saturn V propulsion, and lunar geology.",
      "tags": [
        "Apollo 11",
        "Moon Landing",
        "Neil Armstrong",
        "NASA",
        "Space Race"
      ],
      "quiz": {
        "question": "What lunar location did the Apollo 11 Lunar Module Eagle land on July 20, 1969?",
        "options": [
          "Ocean of Storms",
          "Sea of Tranquility",
          "Copernicus Crater",
          "Sea of Serenity"
        ],
        "correctAnswer": 1,
        "explanation": "Apollo 11 touched down on the lunar basaltic plain known as Mare Tranquillitatis (Sea of Tranquility)."
      }
    },
    {
      "id": "fact-oct24",
      "month": 10,
      "day": 24,
      "year": 1945,
      "dateDisplay": "October 24",
      "category": "history",
      "title": "Establishment of the United Nations (UN Charter Comes into Force)",
      "shortFact": "On October 24, 1945, the United Nations Charter came into official force, creating the premier intergovernmental organization for international peace and security.",
      "fullNarrative": "Following the catastrophic devastation of World War II and the failure of the League of Nations, delegates from 50 nations met at the San Francisco Conference to draft the 111 articles of the UN Charter. Ratified by the five permanent members of the Security Council (US, UK, USSR, China, France) and a majority of other signatories, the Charter pledged to 'save succeeding generations from the scourge of war' and established the General Assembly, Security Council, ICJ, and Secretariat.",
      "keySignificance": "Institutionalized post-WWII multilateral international law, collective security, and universal human rights covenants.",
      "didYouKnow": "October 24 is celebrated globally every year as 'United Nations Day'. Pakistan joined the UN shortly after independence on September 30, 1947.",
      "examRelevance": "CSS International Relations & International Law: UN Charter Chapter VI vs. Chapter VII, collective security, and veto power reforms.",
      "tags": [
        "United Nations",
        "UN Charter",
        "Multilateralism",
        "San Francisco",
        "Peace"
      ],
      "quiz": {
        "question": "Which organ of the United Nations is vested with primary legal authority for international peace and security under Chapter VII of the Charter?",
        "options": [
          "General Assembly",
          "Security Council",
          "International Court of Justice",
          "Economic and Social Council"
        ],
        "correctAnswer": 1,
        "explanation": "The UN Security Council (UNSC) has primary responsibility and is the only organ empowered to authorize binding sanctions and military force under Chapter VII."
      }
    },
    {
      "id": "fact-apr10",
      "month": 4,
      "day": 10,
      "year": 1973,
      "dateDisplay": "April 10",
      "category": "pakistan",
      "title": "Unanimous Passage of the 1973 Constitution of Pakistan",
      "shortFact": "On April 10, 1973, the National Assembly of Pakistan passed the 1973 Constitution unanimously with zero opposing votes.",
      "fullNarrative": "Following the tragic loss of East Pakistan in 1971, the nation desperately needed a permanent, consensus-based constitutional framework. Under President Zulfikar Ali Bhutto, cross-party negotiations succeeded in bridging deep regional and ideological divides between the PPP, National Awami Party (Wali Khan), JUI (Mufti Mahmud), and Jamaat-e-Islami. Out of 128 members present, 125 voted in favor, with three abstentions and zero dissenting votes. The Constitution was promulgated on August 14, 1973, establishing a parliamentary republic, federal bicameral legislature, and Islamic provisions.",
      "keySignificance": "The only Constitution in Pakistan's history endorsed by democratic consensus across all political parties and federating provinces.",
      "didYouKnow": "Abdul Hafeez Pirzada served as the Federal Minister for Law and Parliamentary Affairs and is recognized as the chief draftsman of the 1973 Constitution.",
      "examRelevance": "Highest-yield topic in CSS Pakistan Affairs and Constitutional Law: Bicameralism, Islamic character, fundamental rights, and provincial autonomy.",
      "tags": [
        "1973 Constitution",
        "Consensus",
        "Parliamentary Republic",
        "Zulfikar Ali Bhutto",
        "Federalism"
      ],
      "quiz": {
        "question": "Who served as the chief draftsman and Law Minister responsible for piloting the 1973 Constitution through the National Assembly?",
        "options": [
          "Chaudhry Muhammad Ali",
          "Abdul Hafeez Pirzada",
          "Syed Sharifuddin Pirzada",
          "Maulvi Tamizuddin Khan"
        ],
        "correctAnswer": 1,
        "explanation": "Abdul Hafeez Pirzada served as Law Minister and piloted the draft of the 1973 Constitution through Parliament."
      }
    },
    {
      "id": "fact-sep28",
      "month": 9,
      "day": 28,
      "year": 1928,
      "dateDisplay": "September 28",
      "category": "science",
      "title": "Discovery of Penicillin by Sir Alexander Fleming",
      "shortFact": "On September 28, 1928, Scottish microbiologist Alexander Fleming discovered penicillin, ushering in the modern era of lifesaving antibiotics.",
      "fullNarrative": "Returning to his laboratory at St. Mary's Hospital in London after summer vacation, Alexander Fleming noticed that a stray mold (Penicillium notatum) had contaminated a Petri dish of Staphylococcus bacteria. Remarkably, the bacterial colonies surrounding the mold had dissolved and ceased growing. Fleming isolated the substance, naming it penicillin. Later purified and mass-produced by Howard Florey and Ernst Chain during World War II, penicillin saved millions of wounded soldiers and transformed bacterial pneumonia, syphilis, and sepsis from fatal death sentences into curable conditions.",
      "keySignificance": "Revolutionized medical therapeutics, introduced antibiotics, and increased average human life expectancy worldwide by over a decade.",
      "didYouKnow": "Fleming famously warned in his 1945 Nobel Prize lecture that underdosing penicillin would cause bacteria to develop antibiotic resistance—a warning that anticipated today's global antimicrobial resistance crisis.",
      "examRelevance": "Everyday Science: Microbiology, antibiotics mechanism (cell-wall inhibition), and antimicrobial resistance (AMR).",
      "tags": [
        "Penicillin",
        "Alexander Fleming",
        "Antibiotics",
        "Medicine",
        "Nobel Prize"
      ],
      "quiz": {
        "question": "Alexander Fleming discovered penicillin in 1928 after observing clear inhibition zones on a culture of which bacteria?",
        "options": [
          "Escherichia coli",
          "Staphylococcus aureus",
          "Mycobacterium tuberculosis",
          "Streptococcus pneumoniae"
        ],
        "correctAnswer": 1,
        "explanation": "Fleming observed that Penicillium mold had cleared colonies of Staphylococcus bacteria in his laboratory Petri dish."
      }
    },
    {
      "id": "fact-dec10",
      "month": 12,
      "day": 10,
      "year": 1948,
      "dateDisplay": "December 10",
      "category": "culture",
      "title": "Adoption of the Universal Declaration of Human Rights (UDHR)",
      "shortFact": "On December 10, 1948, the UN General Assembly adopted the landmark Universal Declaration of Human Rights at the Palais de Chaillot in Paris.",
      "fullNarrative": "Drafted by an international committee chaired by Eleanor Roosevelt, the UDHR set out for the first time fundamental civil, political, economic, social, and cultural rights to be universally protected for all human beings. Consisting of 30 articles, it declared that 'all human beings are born free and equal in dignity and rights' without distinction of race, color, sex, language, religion, or political opinion.",
      "keySignificance": "The foundation of all modern international human rights law, translated into over 500 languages (the most translated document in human history).",
      "didYouKnow": "December 10 is observed worldwide every year as International Human Rights Day in commemoration of the adoption of the UDHR.",
      "examRelevance": "CSS International Relations, Sociology, and Political Science: First generation (civil/political) vs. second generation (economic/social) rights.",
      "tags": [
        "UDHR",
        "Human Rights",
        "Eleanor Roosevelt",
        "United Nations",
        "Paris"
      ],
      "quiz": {
        "question": "Who chaired the United Nations Human Rights Commission that drafted the 1948 Universal Declaration of Human Rights?",
        "options": [
          "Winston Churchill",
          "Eleanor Roosevelt",
          "René Cassin",
          "John Peters Humphrey"
        ],
        "correctAnswer": 1,
        "explanation": "Former US First Lady Eleanor Roosevelt served as the chair of the UN drafting committee that created the UDHR."
      }
    },
    {
      "id": "fact-dec25",
      "month": 12,
      "day": 25,
      "year": 1876,
      "dateDisplay": "December 25",
      "category": "pakistan",
      "title": "Birth of Quaid-e-Azam Muhammad Ali Jinnah in Karachi",
      "shortFact": "On December 25, 1876, Muhammad Ali Jinnah, founder of Pakistan, was born at Wazir Mansion in Karachi.",
      "fullNarrative": "Born to Jinnahbhai Poonja and Mithibai in Karachi, Jinnah traveled to England at age 16 to study at Lincoln's Inn, becoming the youngest Indian called to the Bar. Initially celebrated as the 'Ambassador of Hindu-Muslim Unity', the intransigence of Hindu majoritarianism led him to articulate the Two-Nation Theory, uniting millions of Indian Muslims under the banner of the All-India Muslim League to achieve an independent Pakistan in 1947.",
      "keySignificance": "Celebrated across Pakistan as Quaid-e-Azam Day, honoring the legal acumen, integrity, and statesmanship of Pakistan's founding father.",
      "didYouKnow": "Jinnah's personal library in Bombay contained over 2,500 legal and political treatises, reflecting his rigorous constitutional discipline.",
      "examRelevance": "Foundational pillar of CSS Pakistan Affairs: Jinnah's 14 Points, Lucknow Pact, Lahore Resolution, and August 11, 1947 address.",
      "tags": [
        "Quaid-e-Azam",
        "Jinnah",
        "December 25",
        "Karachi",
        "Two-Nation Theory"
      ],
      "quiz": {
        "question": "At which historic institution in London did Quaid-e-Azam Muhammad Ali Jinnah study law, being called to the Bar in 1896?",
        "options": [
          "Middle Temple",
          "Inner Temple",
          "Lincoln's Inn",
          "Gray's Inn"
        ],
        "correctAnswer": 2,
        "explanation": "Jinnah chose Lincoln's Inn because he saw the name of Prophet Muhammad (PBUH) inscribed among the world's greatest lawgivers at the main entrance."
      }
    },
    {
      "id": "fact-apr25",
      "month": 4,
      "day": 25,
      "year": 1953,
      "dateDisplay": "April 25",
      "category": "science",
      "title": "Discovery of the Double Helix Structure of DNA",
      "shortFact": "On April 25, 1953, James Watson and Francis Crick published their groundbreaking paper in 'Nature' revealing the double helix structure of DNA.",
      "fullNarrative": "Relying critically on Photo 51—an extraordinary X-ray diffraction image captured by biophysicist Rosalind Franklin and Raymond Gosling at King's College London—Watson and Crick constructed a physical three-dimensional model of deoxyribonucleic acid (DNA). The model revealed two antiparallel helical strands linked by complementary base pairs (Adenine with Thymine, Cytosine with Guanine), immediately solving the molecular mystery of how genetic information is copied, stored, and passed between generations.",
      "keySignificance": "Considered the biological discovery of the 20th century, birthing molecular biology, recombinant DNA technology, and modern genomics.",
      "didYouKnow": "Watson and Crick concluded their historic 1-page paper with the famously understated sentence: 'It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism for the genetic material.'",
      "examRelevance": "Everyday Science: Molecular genetics, DNA replication, PCR, and Rosalind Franklin's Photo 51.",
      "tags": [
        "DNA",
        "Double Helix",
        "Watson and Crick",
        "Genetics",
        "Biology"
      ],
      "quiz": {
        "question": "Which complementary base pairing rule governs the double helix structure of DNA discovered in 1953?",
        "options": [
          "Adenine pairs with Guanine; Cytosine with Thymine",
          "Adenine pairs with Thymine; Guanine with Cytosine",
          "Adenine pairs with Uracil; Guanine with Thymine",
          "Thymine pairs with Cytosine; Adenine with Guanine"
        ],
        "correctAnswer": 1,
        "explanation": "In DNA, Adenine (A) forms two hydrogen bonds with Thymine (T), and Guanine (G) forms three hydrogen bonds with Cytosine (C)."
      }
    },
    {
      "id": "fact-oct04",
      "month": 10,
      "day": 4,
      "year": 1957,
      "dateDisplay": "October 4",
      "category": "technology",
      "title": "Sputnik 1: Launch of the World's First Artificial Earth Satellite",
      "shortFact": "On October 4, 1957, the Soviet Union launched Sputnik 1 into low Earth orbit, inaugurating the Space Age and triggering the Space Race.",
      "fullNarrative": "Designed under chief engineer Sergei Korolev and launched aboard an R-7 intercontinental ballistic missile from the Baikonur Cosmodrome, Sputnik 1 was a polished aluminum sphere measuring 58 cm in diameter with four external radio antennas. It orbited Earth every 96 minutes at a speed of 29,000 km/h, transmitting continuous radio beeps at 20.005 and 40.002 MHz picked up by amateur radio operators globally. The successful launch sent geopolitical shockwaves through the United States, spurring the creation of NASA and DARPA.",
      "keySignificance": "Triggered the Cold War technological space race, accelerating satellite communications, intercontinental rocketry, and STEM education.",
      "didYouKnow": "Sputnik traveled roughly 70 million kilometers during its 1,440 orbits around Earth before burning up upon atmospheric re-entry on January 4, 1958.",
      "examRelevance": "Everyday Science & International Relations: Satellite orbits (LEO/GEO), Cold War Space Race, and the establishment of NASA.",
      "tags": [
        "Sputnik",
        "Space Age",
        "Soviet Union",
        "Satellite",
        "Cold War"
      ],
      "quiz": {
        "question": "Which Soviet chief rocket engineer led the design and successful launch of Sputnik 1 in October 1957?",
        "options": [
          "Yuri Gagarin",
          "Sergei Korolev",
          "Valentin Glushko",
          "Andrei Sakharov"
        ],
        "correctAnswer": 1,
        "explanation": "Sergei Korolev, the brilliant 'Chief Designer' of the Soviet space program, engineered the R-7 rocket and Sputnik 1."
      }
    },
    {
      "id": "fact-nov09",
      "month": 11,
      "day": 9,
      "year": 1877,
      "dateDisplay": "November 9",
      "category": "culture",
      "title": "Birth of Allama Muhammad Iqbal (Iqbal Day)",
      "shortFact": "On November 9, 1877, Allama Muhammad Iqbal, philosopher-poet of the East and national poet of Pakistan, was born in Sialkot.",
      "fullNarrative": "Educated in Lahore, Cambridge, and Munich, Iqbal revitalized Islamic philosophy through his doctrine of 'Khudi' (Selfhood) and his seminal English lectures 'The Reconstruction of Religious Thought in Islam'. His celebrated poetry collections in Persian and Urdu ('Asrar-e-Khudi', 'Bang-e-Dra', 'Bal-e-Jibril', 'Zarb-e-Kaleem') mobilized the intellectual consciousness of Indian Muslims, culminating in his 1930 Allahabad Address proposing an autonomous Muslim state in Northwest India.",
      "keySignificance": "Ideological father of Pakistan whose philosophical fusion of Islamic spirituality and Western dynamism inspired the Pakistan Movement.",
      "didYouKnow": "Iqbal's tomb, constructed with red sandstone from Rajasthan, is situated at the foot of the Badshahi Mosque in Lahore.",
      "examRelevance": "CSS Pakistan Affairs & Islamic History: Iqbal's concept of Ijtihad, Allahabad Address 1930, and spiritual foundation of Two-Nation Theory.",
      "tags": [
        "Allama Iqbal",
        "Iqbal Day",
        "Poetry",
        "Philosophy",
        "Allahabad Address"
      ],
      "quiz": {
        "question": "In which city was Allama Muhammad Iqbal born on November 9, 1877?",
        "options": [
          "Lahore",
          "Sialkot",
          "Rawalpindi",
          "Delhi"
        ],
        "correctAnswer": 1,
        "explanation": "Allama Muhammad Iqbal was born in Sialkot, Punjab, on November 9, 1877."
      }
    },
    {
      "id": "fact-sep06",
      "month": 9,
      "day": 6,
      "year": 1965,
      "dateDisplay": "September 6",
      "category": "pakistan",
      "title": "Pakistan Defence Day: Outbreak of the 1965 War",
      "shortFact": "On September 6, 1965, Indian armed forces crossed the international border to attack Lahore, marking the official outbreak of the 1965 Indo-Pak War.",
      "fullNarrative": "In the early morning hours of September 6, Indian infantry divisions launched a surprise multi-pronged assault across the Wagah-Barki and Bedian sectors toward Lahore. Major Raja Aziz Bhatti of the Punjab Regiment held off intense tank and artillery assaults along the BRB Canal for five days before embracing martyrdom, earning the Nishan-e-Haider. The war saw the largest tank battle since World War II at Chawinda (the 'Graveyard of Indian Tanks') in Sialkot, and concluded under the Soviet-mediated Tashkent Declaration in January 1966.",
      "keySignificance": "Celebrated nationwide annually as Defence Day (Youm-e-Difa), honoring the resilience and sacrifice of Pakistan's armed forces.",
      "didYouKnow": "Squadron Leader Muhammad Mahmood Alam (M.M. Alam) set a world combat aviation record on September 7, 1965, by shooting down five Indian Hunter fighter jets in under one minute in his F-86 Sabre.",
      "examRelevance": "CSS Pakistan Affairs: 1965 War causes (Operation Gibraltar), military balance, international diplomacy, and the Tashkent Declaration.",
      "tags": [
        "Defence Day",
        "1965 War",
        "September 6",
        "Aziz Bhatti",
        "Chawinda"
      ],
      "quiz": {
        "question": "Which water barrier near Lahore served as the frontline defense against Indian armor during the September 1965 war?",
        "options": [
          "Ravi River",
          "Bambawali-Ravi-Bedian (BRB) Canal",
          "Chenab Canal",
          "Sutlej River"
        ],
        "correctAnswer": 1,
        "explanation": "Major Raja Aziz Bhatti and Pakistan Army units heroically defended the BRB Canal, preventing Indian forces from advancing into Lahore."
      }
    },
    {
      "id": "fact-may28",
      "month": 5,
      "day": 28,
      "year": 1998,
      "dateDisplay": "May 28",
      "category": "pakistan",
      "title": "Youm-e-Takbeer: Pakistan Becomes the 7th Nuclear Power",
      "shortFact": "On May 28, 1998, Pakistan successfully conducted five underground nuclear tests in the Ras Koh Hills of Chaghai, Balochistan.",
      "fullNarrative": "In direct response to India's Pokhran-II nuclear tests conducted earlier in May 1998, Pakistan detonated five nuclear devices in a horizontal shaft drilled into the Ras Koh mountain, which visibly turned white from the intense seismic and thermal shockwaves (Chagai-I). A sixth test was conducted on May 30 in the Kharan Desert (Chagai-II). The tests restored strategic deterrence and strategic stability in South Asia, establishing Pakistan as the world's 7th nuclear weapons state and the first in the Muslim world.",
      "keySignificance": "Established nuclear deterrence in South Asia, precluding full-scale conventional warfare between India and Pakistan.",
      "didYouKnow": "The code signal transmitted to confirm the success of the tests was 'Allah-o-Akbar' (God is Greatest), and the day is officially observed as Youm-e-Takbeer.",
      "examRelevance": "CSS International Relations & Strategic Studies: Full Spectrum Deterrence (FSD), Nuclear Non-Proliferation Treaty (NPT), and strategic stability.",
      "tags": [
        "Youm-e-Takbeer",
        "Nuclear Tests",
        "Chagai",
        "Deterrence",
        "May 28"
      ],
      "quiz": {
        "question": "In which mountain range of Balochistan did Pakistan conduct its five underground nuclear tests on May 28, 1998?",
        "options": [
          "Sulaiman Range",
          "Kirthar Range",
          "Ras Koh Hills",
          "Toba Kakar Range"
        ],
        "correctAnswer": 2,
        "explanation": "The tests were conducted inside the Ras Koh Hills in the Chaghai district of Balochistan."
      }
    },
    {
      "id": "fact-jul16",
      "month": 7,
      "day": 16,
      "year": 1945,
      "dateDisplay": "July 16",
      "category": "technology",
      "title": "The Trinity Test: First Detonation of a Nuclear Weapon",
      "shortFact": "On July 16, 1945, the United States Army conducted the 'Trinity' nuclear test in the Jornada del Muerto desert in New Mexico.",
      "fullNarrative": "Directed by J. Robert Oppenheimer and Major General Leslie Groves under the top-secret Manhattan Project, an implosion-design plutonium device codenamed 'The Gadget' was hoisted onto a 100-foot steel tower and detonated at 5:29 AM. The explosion released energy equivalent to approximately 21 kilotons of TNT, vaporizing the steel tower, melting desert sand into a jade-green radioactive glass named 'trinitite', and creating a mushroom cloud rising 12 kilometers into the atmosphere.",
      "keySignificance": "Inaugurated the Atomic Age, forever transforming military strategy, international diplomacy, and geopolitics.",
      "didYouKnow": "Watching the blinding flash, Oppenheimer recalled lines from the Hindu scripture Bhagavad Gita: 'Now I am become Death, the destroyer of worlds.'",
      "examRelevance": "Everyday Science & International Relations: Nuclear fission mechanics, mass defect (E=mc²), and the beginning of the Cold War nuclear arms race.",
      "tags": [
        "Trinity",
        "Manhattan Project",
        "Nuclear Physics",
        "Oppenheimer",
        "Atomic Age"
      ],
      "quiz": {
        "question": "Which fissile material powered 'The Gadget', the first atomic device detonated during the Trinity test in July 1945?",
        "options": [
          "Uranium-235",
          "Plutonium-239",
          "Thorium-232",
          "Deuterium"
        ],
        "correctAnswer": 1,
        "explanation": "The Trinity device utilized an implosion-assembly design fueled by Plutonium-239."
      }
    },
    {
      "id": "fact-nov17",
      "month": 11,
      "day": 17,
      "year": 1869,
      "dateDisplay": "November 17",
      "category": "history",
      "title": "Official Opening of the Suez Canal in Egypt",
      "shortFact": "On November 17, 1869, the Suez Canal was officially opened to international navigation, linking the Mediterranean Sea directly to the Red Sea.",
      "fullNarrative": "Constructed over a decade under the leadership of French diplomat Ferdinand de Lesseps, the 193-kilometer sea-level waterway bypassed the dangerous 7,000-kilometer voyage around the African Cape of Good Hope. The canal dramatically reduced transit time between Europe and Asia from months to weeks, accelerating global trade, European imperial reach in Asia, and cementing Egypt's role as the paramount maritime crossroads of the world.",
      "keySignificance": "The most critical artificial maritime shortcut in human history, handling over 12% of modern global merchandise trade.",
      "didYouKnow": "The inaugural procession through the canal was led by French Empress Eugénie aboard the imperial yacht L'Aigle.",
      "examRelevance": "CSS International Relations & Geography: Maritime chokepoints, the 1956 Suez Crisis, and contemporary Red Sea shipping diversions.",
      "tags": [
        "Suez Canal",
        "Maritime Trade",
        "Egypt",
        "Ferdinand de Lesseps",
        "Red Sea"
      ],
      "quiz": {
        "question": "Which French engineer and diplomat spearheaded the construction of the Suez Canal opened in November 1869?",
        "options": [
          "Gustave Eiffel",
          "Ferdinand de Lesseps",
          "Georges-Eugène Haussmann",
          "Louis Pasteur"
        ],
        "correctAnswer": 1,
        "explanation": "Ferdinand de Lesseps organized the Suez Canal Company and supervised its 10-year construction."
      }
    },
    {
      "id": "fact-nov19",
      "month": 11,
      "day": 19,
      "year": 1863,
      "dateDisplay": "November 19",
      "category": "history",
      "title": "Abraham Lincoln Delivers the Gettysburg Address",
      "shortFact": "On November 19, 1863, US President Abraham Lincoln delivered the 272-word Gettysburg Address at the dedication of the Soldiers' National Cemetery in Pennsylvania.",
      "fullNarrative": "Speaking four months after the bloody Battle of Gettysburg during the American Civil War, Lincoln redefined the American Civil War not merely as a constitutional struggle for the Union, but as a moral crusade for human equality, invoking the 1776 Declaration of Independence. In a speech lasting barely two minutes, he immortalized the ideal of 'government of the people, by the people, for the people'.",
      "keySignificance": "One of the greatest oratorical masterpieces in political philosophy, establishing democratic popular sovereignty as a universal human aspiration.",
      "didYouKnow": "The featured speaker of the day, Edward Everett, spoke for two full hours before Lincoln. Everett later wrote to Lincoln: 'I should be glad if I could flatter myself that I came as near to the central idea of the occasion, in two hours, as you did in two minutes.'",
      "examRelevance": "CSS Political Science & US History: Democratic theory, civil rights, Lincoln's presidency, and constitutional interpretations of federalism.",
      "tags": [
        "Gettysburg Address",
        "Abraham Lincoln",
        "Democracy",
        "US History",
        "Civil War"
      ],
      "quiz": {
        "question": "Lincoln began the Gettysburg Address on November 19, 1863, with which iconic phrase signifying 87 years earlier (1776)?",
        "options": [
          "'Four score and seven years ago'",
          "'In the course of human events'",
          "'We the people of these United States'",
          "'A house divided against itself'"
        ],
        "correctAnswer": 0,
        "explanation": "'A score' equals 20 years; 'Four score and seven' represents 87 years, referring back to the 1776 Declaration of Independence."
      }
    },
    {
      "id": "fact-nov20",
      "month": 11,
      "day": 20,
      "year": 1945,
      "dateDisplay": "November 20",
      "category": "history",
      "title": "Commencement of the Nuremberg Trials",
      "shortFact": "On November 20, 1945, the International Military Tribunal convened in Nuremberg, Germany, to try 24 top Nazi war criminals.",
      "fullNarrative": "Presided over by Allied judges from the US, UK, Soviet Union, and France at the Palace of Justice, the Nuremberg Trials established groundbreaking legal precedents by holding political and military leaders individually criminally liable under international law for crimes against peace, war crimes, and crimes against humanity. The tribunal rejected the defense of 'superior orders' ('Befehlsnotstand'), establishing the universal principle that individuals have duties transcending national obligations.",
      "keySignificance": "Laid the statutory foundation for modern international criminal law, the 1948 Genocide Convention, and the International Criminal Court (ICC).",
      "didYouKnow": "Nuremberg was deliberately chosen as the trial venue because it had been the ceremonial birthplace of Nazi propaganda rallies and the infamous 1935 Nuremberg Race Laws.",
      "examRelevance": "CSS International Law: Individual criminal responsibility, Nuremberg Principles, crimes against humanity, and the Rome Statute of the ICC.",
      "tags": [
        "Nuremberg Trials",
        "International Law",
        "War Crimes",
        "ICC",
        "Human Rights"
      ],
      "quiz": {
        "question": "Which defense commonly claimed by military subordinates was categorically rejected as an absolute shield from liability at Nuremberg?",
        "options": [
          "Diplomatic Immunity",
          "Defense of Superior Orders ('Just following orders')",
          "Double Jeopardy",
          "Statute of Limitations"
        ],
        "correctAnswer": 1,
        "explanation": "The Nuremberg Tribunal established Principle IV: following superior orders does not relieve an individual of criminal responsibility if a moral choice was in fact possible."
      }
    },
    {
      "id": "fact-dec17",
      "month": 12,
      "day": 17,
      "year": 1903,
      "dateDisplay": "December 17",
      "category": "technology",
      "title": "The Wright Brothers Achieve the First Powered, Controlled Heavier-Than-Air Flight",
      "shortFact": "On December 17, 1903, Orville and Wilbur Wright achieved the first sustained, controlled, powered airplane flight at Kitty Hawk, North Carolina.",
      "fullNarrative": "Piloting the 'Wright Flyer' powered by a custom 12-horsepower aluminum engine and dual pusher propellers, Orville Wright flew 120 feet in 12 seconds over the sand dunes of Kill Devil Hills. Later that day, Wilbur flew 852 feet in 59 seconds. The brothers solved the critical problem of aeronautical stability through their patented 'three-axis control' system (wing warping for roll, elevator for pitch, and rudder for yaw), which remains the standard aerodynamic steering principle of all modern aircraft.",
      "keySignificance": "Inaugurated the aviation revolution, shrinking global geographic distance and transforming military strategy, commercial transit, and logistics.",
      "didYouKnow": "A small piece of fabric and wood from the 1903 Wright Flyer was carried to Mars aboard NASA's Ingenuity helicopter in 2021, linking the first powered flight on Earth with the first powered flight on another planet.",
      "examRelevance": "Everyday Science: Aerodynamics, Bernoulli's principle, lift and drag forces, and three-axis flight dynamics.",
      "tags": [
        "Aviation",
        "Wright Brothers",
        "Aerodynamics",
        "Flight",
        "Invention"
      ],
      "quiz": {
        "question": "What patented aerodynamic control method allowed the Wright brothers to maintain lateral roll balance on their 1903 Flyer?",
        "options": [
          "Aileron Flaps",
          "Wing Warping",
          "Jet Thrusters",
          "Canard Elevators"
        ],
        "correctAnswer": 1,
        "explanation": "The Wright brothers used wing warping—twisting the trailing edges of the wings in opposite directions—to control roll."
      }
    },
    {
      "id": "fact-aug06",
      "month": 8,
      "day": 6,
      "year": 1945,
      "dateDisplay": "August 6",
      "category": "history",
      "title": "Atomic Bombing of Hiroshima ('Little Boy')",
      "shortFact": "On August 6, 1945, the US B-29 bomber Enola Gay dropped the first wartime uranium atomic bomb on the Japanese city of Hiroshima.",
      "fullNarrative": "Detonating at an altitude of 600 meters directly above the Shima Surgical Hospital with an explosive yield of 15 kilotons, 'Little Boy' generated a blinding thermal fireball reaching 4,000°C, instantly vaporizing thousands of inhabitants and creating a devastating shockwave that flattened five square miles of the city. An estimated 70,000 to 80,000 people were killed instantly, with thousands more succumbing in subsequent weeks to severe acute radiation sickness.",
      "keySignificance": "The first offensive use of a nuclear weapon in history, precipitating Japan's unconditional surrender and the dawn of the nuclear deterrence era.",
      "didYouKnow": "The Hiroshima Peace Memorial (Genbaku Dome), one of the very few structures near the hypocenter to survive the blast, is preserved today as a UNESCO World Heritage Site.",
      "examRelevance": "CSS International Relations: The ethics of total war, nuclear proliferation, and the Hiroshima/Nagasaki precedent in nuclear taboo theory.",
      "tags": [
        "Hiroshima",
        "Atomic Bomb",
        "World War II",
        "Nuclear Weapons",
        "Enola Gay"
      ],
      "quiz": {
        "question": "What was the name of the B-29 Superfortress aircraft that dropped the atomic bomb on Hiroshima on August 6, 1945?",
        "options": [
          "Bockscar",
          "Enola Gay",
          "Memphis Belle",
          "The Great Artiste"
        ],
        "correctAnswer": 1,
        "explanation": "The Boeing B-29 bomber was named 'Enola Gay' by its pilot, Colonel Paul Tibbets, after his mother."
      }
    },
    {
      "id": "fact-mar14",
      "month": 3,
      "day": 14,
      "year": 1879,
      "dateDisplay": "March 14",
      "category": "science",
      "title": "Birth of Albert Einstein & International Pi Day",
      "shortFact": "On March 14, 1879, theoretical physicist Albert Einstein was born in Ulm, Germany. March 14 (3/14) is celebrated globally as International Pi Day.",
      "fullNarrative": "In his 'Miracle Year' (Annus Mirabilis) of 1905, Einstein published four revolutionary papers while working as a patent clerk in Bern: the Photoelectric Effect (earning the 1921 Nobel Prize), Brownian Motion (confirming atomic existence), Special Relativity, and Mass-Energy Equivalence (E = mc²). A decade later in 1915, he completed General Relativity, demonstrating that gravity is not a Newtonian mechanical force, but the curvature of four-dimensional spacetime caused by mass and energy.",
      "keySignificance": "Fundamentally overturned 200 years of Newtonian classical mechanics and redefined our understanding of time, space, light, and gravity.",
      "didYouKnow": "British astronomer Sir Arthur Eddington experimentally verified Einstein's General Relativity in May 1919 by measuring the bending of starlight around the Sun during a total solar eclipse, turning Einstein into a global sensation overnight.",
      "examRelevance": "Everyday Science: General vs. Special Relativity, photoelectric effect (quantum theory), gravitational lensing, and black holes.",
      "tags": [
        "Albert Einstein",
        "Relativity",
        "Pi Day",
        "Nobel Prize",
        "Physics"
      ],
      "quiz": {
        "question": "For which specific scientific discovery was Albert Einstein awarded the 1921 Nobel Prize in Physics?",
        "options": [
          "Special Relativity",
          "General Relativity",
          "Law of the Photoelectric Effect",
          "Unified Field Theory"
        ],
        "correctAnswer": 2,
        "explanation": "Einstein was formally awarded the 1921 Nobel Prize 'for his services to Theoretical Physics, and especially for his discovery of the law of the photoelectric effect'."
      }
    }
  ]
};

if (typeof window !== 'undefined') {
  window.DAILY_FACTS_DATA = DAILY_FACTS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DAILY_FACTS_DATA;
}
