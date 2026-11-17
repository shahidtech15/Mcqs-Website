const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../frontend/js/data_timeline.js');

const jsCode = `/**
 * Historical Timeline Data Engine
 * Interactive repository of key milestones from Pakistan History & World History.
 * Designed for CSS, PMS, FIA, and Competitive Examination candidates.
 */
window.HISTORICAL_TIMELINE_DATA = (function() {
    'use strict';

    const TIMELINE_EVENTS = [
        // ========================================================
        // PAKISTAN HISTORY TRACK
        // ========================================================
        {
            id: 'pak_712',
            year: 712,
            dateDisplay: '712 AD',
            title: 'Conquest of Sindh by Muhammad bin Qasim',
            category: 'pakistan',
            era: 'pak_pre1947',
            eraName: 'Pre-Partition & Muslim Era',
            significance: '17-year-old Umayyad general Muhammad bin Qasim defeated Raja Dahir at the Battle of Rawar, establishing Muslim governance in Sindh and earning Sindh the historic title "Bab-ul-Islam" (Gateway of Islam in South Asia).',
            keyFigures: ['Muhammad bin Qasim', 'Raja Dahir', 'Hajjaj bin Yousuf'],
            outcomes: [
                'Establishment of Arab-Muslim administration and tolerance in Multan and Sindh.',
                'Beginning of Islamic scholarly and cultural exchange in the subcontinent.',
                'Sindh historically designated as Bab-ul-Islam in civil services history.'
            ],
            examMcq: {
                questionText: 'Who was the Umayyad governor of Iraq who dispatched Muhammad bin Qasim to conquer Sindh in 712 AD?',
                options: {
                    A: 'Hajjaj bin Yousuf',
                    B: 'Walid bin Abdul Malik',
                    C: 'Tariq bin Ziyad',
                    D: 'Qutaiba bin Muslim'
                },
                correctAnswer: 'A',
                explanation: 'Hajjaj bin Yousuf, the Umayyad governor of Iraq, dispatched his nephew and son-in-law Muhammad bin Qasim to Sindh after pirates attacked Muslim merchant ships near Debal.'
            }
        },
        {
            id: 'pak_1526',
            year: 1526,
            dateDisplay: 'April 21, 1526',
            title: 'First Battle of Panipat & Foundation of the Mughal Empire',
            category: 'pakistan',
            era: 'pak_pre1947',
            eraName: 'Pre-Partition & Muslim Era',
            significance: 'Zahir-ud-Din Muhammad Babur defeated Ibrahim Lodi, the last Sultan of Delhi, using advanced field artillery and gunpowder tactics (Tulghuma system), founding the Mughal Empire which shaped South Asian art, architecture, and administration for over three centuries.',
            keyFigures: ['Zahir-ud-Din Babur', 'Ibrahim Lodi'],
            outcomes: [
                'Overthrow of the Delhi Sultanate (Lodi Dynasty).',
                'Establishment of the grand Mughal dynasty in South Asia.',
                'First major successful military deployment of matchlocks and cannons in the subcontinent.'
            ],
            examMcq: {
                questionText: 'The First Battle of Panipat in 1526 was fought between Babur and which Sultan of Delhi?',
                options: {
                    A: 'Sikandar Lodi',
                    B: 'Bahlul Lodi',
                    C: 'Ibrahim Lodi',
                    D: 'Sher Shah Suri'
                },
                correctAnswer: 'C',
                explanation: 'Babur defeated Sultan Ibrahim Lodi at Panipat on April 21, 1526, bringing an end to the Delhi Sultanate.'
            }
        },
        {
            id: 'pak_1857',
            year: 1857,
            dateDisplay: 'May 10, 1857',
            title: 'War of Independence (The Great Uprising)',
            category: 'pakistan',
            era: 'pak_pre1947',
            eraName: 'Freedom Movement (1857-1947)',
            significance: 'The historic armed uprising against British East India Company rule erupted at Meerut. Although suppressed, it led to the formal liquidation of the East India Company and the direct imposition of the British Crown Rule (British Raj) via the Government of India Act 1858.',
            keyFigures: ['Bahadur Shah Zafar', 'Bakht Khan', 'Mangal Pandey', 'Rani Lakshmibai'],
            outcomes: [
                'Deposition and exile of last Mughal Emperor Bahadur Shah Zafar to Rangoon (Burma).',
                'Abolition of the East India Company; Queen Victoria proclaimed Empress of India.',
                'Severe socio-political and economic marginalization of Muslims in India.'
            ],
            examMcq: {
                questionText: 'Which British statute officially abolished the British East India Company following the 1857 War of Independence?',
                options: {
                    A: 'Regulating Act 1773',
                    B: 'Government of India Act 1858',
                    C: 'Indian Councils Act 1861',
                    D: 'Pitt\\\\\\'s India Act 1784'
                },
                correctAnswer: 'B',
                explanation: 'The Government of India Act 1858 liquidated the East India Company and transferred powers of government, territories, and revenues to the British Crown.'
            }
        },
        {
            id: 'pak_1875',
            year: 1875,
            dateDisplay: 'May 24, 1875',
            title: 'Foundation of MAO College Aligarh by Sir Syed Ahmad Khan',
            category: 'pakistan',
            era: 'pak_pre1947',
            eraName: 'Freedom Movement (1857-1947)',
            significance: 'Sir Syed Ahmad Khan founded the Muhammadan Anglo-Oriental (MAO) College at Aligarh (upgraded to Aligarh Muslim University in 1920) to bridge modern Western scientific education with traditional Islamic values, giving birth to the Aligarh Movement that nurtured the leadership of the Pakistan Movement.',
            keyFigures: ['Sir Syed Ahmad Khan', 'Nawab Mohsin-ul-Mulk', 'Nawab Viqar-ul-Mulk', 'Maulana Shibli Nomani'],
            outcomes: [
                'Inception of modern higher education for Indian Muslims.',
                'Intellectual foundation of the Two-Nation Theory (rationalized Muslim distinct identity).',
                'Aligarh became the nursery of future Muslim League statesmen.'
            ],
            examMcq: {
                questionText: 'In which year was the Muhammadan Anglo-Oriental (MAO) College founded by Sir Syed Ahmad Khan?',
                options: {
                    A: '1867',
                    B: '1875',
                    C: '1885',
                    D: '1898'
                },
                correctAnswer: 'B',
                explanation: 'MAO High School was established in May 1875 and became a College in 1877; it was later upgraded to Aligarh Muslim University in 1920.'
            }
        },
        {
            id: 'pak_1906',
            year: 1906,
            dateDisplay: 'December 30, 1906',
            title: 'Formation of the All-India Muslim League in Dhaka',
            category: 'pakistan',
            era: 'pak_pre1947',
            eraName: 'Freedom Movement (1857-1947)',
            significance: 'Muslim leaders meeting at the All-India Muhammadan Educational Conference in Dhaka resolved to create a separate political party, the All-India Muslim League, to protect Muslim political rights and foster loyalty to the British Crown while advancing Muslim interests.',
            keyFigures: ['Nawab Salimullah Khan of Dhaka', 'Nawab Viqar-ul-Mulk', 'Aga Khan III', 'Nawab Mohsin-ul-Mulk'],
            outcomes: [
                'Nawab Salimullah presented the founding resolution; Nawab Viqar-ul-Mulk presided over the session.',
                'Sir Aga Khan III was appointed the first permanent President of the Muslim League.',
                'Direct precursor to constitutional representation and the demand for Pakistan.'
            ],
            examMcq: {
                questionText: 'Who was elected as the first permanent President of the All-India Muslim League in 1906?',
                options: {
                    A: 'Nawab Salimullah Khan',
                    B: 'Nawab Viqar-ul-Mulk',
                    C: 'Sir Aga Khan III',
                    D: 'Quaid-e-Azam Muhammad Ali Jinnah'
                },
                correctAnswer: 'C',
                explanation: 'Sir Aga Khan III was elected as the first permanent President of the All-India Muslim League following its establishment in Dhaka.'
            }
        },
        {
            id: 'pak_1909',
            year: 1909,
            dateDisplay: 'May 25, 1909',
            title: 'Minto-Morley Reforms (Indian Councils Act 1909)',
            category: 'pakistan',
            era: 'pak_pre1947',
            eraName: 'Freedom Movement (1857-1947)',
            significance: 'The British Parliament enacted the Indian Councils Act 1909, formally conceding the pivotal Muslim demand (submitted in the 1906 Simla Deputation) for Separate Electorates for Muslims, legally acknowledging Muslims as a distinct political community in India.',
            keyFigures: ['Lord Minto (Viceroy)', 'John Morley (Secretary of State)', 'Aga Khan III'],
            outcomes: [
                'Introduction of Separate Electorates for Muslims in central and provincial legislative councils.',
                'Enlargement of legislative council memberships across British India.',
                'First official constitutional validation of Muslim separate identity.'
            ],
            examMcq: {
                questionText: 'Which key constitutional demand of Muslims was formally conceded in the Minto-Morley Reforms of 1909?',
                options: {
                    A: 'Provincial Autonomy',
                    B: 'Separate Electorates',
                    C: 'Bicameral Legislature',
                    D: 'Federal Court of India'
                },
                correctAnswer: 'B',
                explanation: 'The Minto-Morley Reforms (Indian Councils Act 1909) conceded Separate Electorates for Muslims, as requested by the Simla Deputation in 1906.'
            }
        },
        {
            id: 'pak_1916',
            year: 1916,
            dateDisplay: 'December 1916',
            title: 'The Historic Lucknow Pact',
            category: 'pakistan',
            era: 'pak_pre1947',
            eraName: 'Freedom Movement (1857-1947)',
            significance: 'A joint constitutional agreement concluded between the Indian National Congress and the All-India Muslim League at Lucknow. Congress officially accepted Separate Electorates for Muslims, and Quaid-e-Azam Muhammad Ali Jinnah was hailed as the "Ambassador of Hindu-Muslim Unity".',
            keyFigures: ['Quaid-e-Azam Muhammad Ali Jinnah', 'Bal Gangadhar Tilak', 'Sarojini Naidu'],
            outcomes: [
                'Congress conceded Muslim Separate Electorates and weightage in minority provinces.',
                'Muslim League agreed to concessions in Punjab and Bengal Muslim majority percentages.',
                'Sarojini Naidu conferred the title "Ambassador of Hindu-Muslim Unity" on Quaid-e-Azam.'
            ],
            examMcq: {
                questionText: 'Who gave Quaid-e-Azam Muhammad Ali Jinnah the title of "Ambassador of Hindu-Muslim Unity" after the Lucknow Pact 1916?',
                options: {
                    A: 'Annie Besant',
                    B: 'Sarojini Naidu',
                    C: 'Lord Chelmsford',
                    D: 'Allama Muhammad Iqbal'
                },
                correctAnswer: 'B',
                explanation: 'Sarojini Naidu conferred the celebrated title "Ambassador of Hindu-Muslim Unity" on Quaid-e-Azam for orchestrating the Lucknow Pact.'
            }
        },
        {
            id: 'pak_1929',
            year: 1929,
            dateDisplay: 'March 28, 1929',
            title: 'Jinnah\\\\\\'s Fourteen Points',
            category: 'pakistan',
            era: 'pak_pre1947',
            eraName: 'Freedom Movement (1857-1947)',
            significance: 'In response to the anti-Muslim Nehru Report (1928), Quaid-e-Azam formulated his historic Fourteen Points at the Muslim League session in Delhi, defining the irreducible minimum constitutional safeguards for Muslims in any future federal constitution of India.',
            keyFigures: ['Quaid-e-Azam Muhammad Ali Jinnah', 'Motilal Nehru'],
            outcomes: [
                'Demand for a true federal system with residual powers vested in the provinces.',
                'Demanded separation of Sindh from Bombay and reforms in NWFP and Balochistan.',
                'Mandated minimum 1/3rd Muslim representation in Central Legislature and protection of religious freedom.'
            ],
            examMcq: {
                questionText: 'Quaid-e-Azam presented his historic Fourteen Points in 1929 in direct response to which constitutional document?',
                options: {
                    A: 'Simon Commission Report',
                    B: 'Nehru Report (1928)',
                    C: 'Rowlatt Act 1919',
                    D: 'Cabinet Mission Plan'
                },
                correctAnswer: 'B',
                explanation: 'Jinnah\\\\\\'s Fourteen Points (March 1929) were drafted to counter the Nehru Report (1928), which had rejected separate electorates and provincial safeguards.'
            }
        },
        {
            id: 'pak_1930',
            year: 1930,
            dateDisplay: 'December 29, 1930',
            title: 'Allama Iqbal\\\\\\'s Historic Allahabad Address',
            category: 'pakistan',
            era: 'pak_pre1947',
            eraName: 'Freedom Movement (1857-1947)',
            significance: 'Presiding over the annual session of the All-India Muslim League at Allahabad, Dr. Allama Muhammad Iqbal articulated the philosophical vision of an autonomous sovereign state for the Muslims of North-Western India, becoming the ideological blueprint of Pakistan.',
            keyFigures: ['Dr. Allama Muhammad Iqbal'],
            outcomes: [
                'Iqbal declared: "I would like to see Punjab, NWFP, Sind and Baluchistan amalgamated into a single State."',
                'Formulated the philosophical foundation of the Two-Nation Theory.',
                'Direct catalyst for the Lahore Resolution a decade later.'
            ],
            examMcq: {
                questionText: 'Where did Dr. Allama Muhammad Iqbal deliver his landmark presidential address in December 1930 proposing a consolidated Muslim state?',
                options: {
                    A: 'Lahore',
                    B: 'Allahabad',
                    C: 'Delhi',
                    D: 'Karachi'
                },
                correctAnswer: 'B',
                explanation: 'Allama Iqbal delivered his historic address at Allahabad on December 29, 1930, during the 25th annual session of the All-India Muslim League.'
            }
        },
        {
            id: 'pak_1940',
            year: 1940,
            dateDisplay: 'March 23, 1940',
            title: 'The Lahore Resolution (Pakistan Resolution)',
            category: 'pakistan',
            era: 'pak_pre1947',
            eraName: 'Freedom Movement (1857-1947)',
            significance: 'Passed unanimously at the annual session of the Muslim League at Minto Park (now Iqbal Park), Lahore, moved by A.K. Fazlul Huq (Sher-e-Bengal). It officially demanded that geographically contiguous units be demarcated into independent sovereign states where Muslims are in majority.',
            keyFigures: ['Quaid-e-Azam Muhammad Ali Jinnah', 'A.K. Fazlul Huq', 'Chaudhry Khaliquzzaman'],
            outcomes: [
                'Transformed the Muslim League from a safeguard-seeking party into a national liberation movement.',
                'March 23 is commemorated annually as "Pakistan Day" (National Holiday).',
                'Minar-e-Pakistan was erected at the site to commemorate this historic resolution.'
            ],
            examMcq: {
                questionText: 'Who presented the historic Lahore Resolution on March 23, 1940, at Minto Park, Lahore?',
                options: {
                    A: 'Liaquat Ali Khan',
                    B: 'A.K. Fazlul Huq',
                    C: 'Chaudhry Khaliquzzaman',
                    D: 'Khawaja Nazimuddin'
                },
                correctAnswer: 'B',
                explanation: 'Abul Kashem Fazlul Huq, the Premier of Bengal (known as Sher-e-Bengal), moved the Lahore Resolution on March 23, 1940.'
            }
        },
        {
            id: 'pak_1947',
            year: 1947,
            dateDisplay: 'August 14, 1947',
            title: 'Independence of Pakistan & Partition of India',
            category: 'pakistan',
            era: 'pak_post1947',
            eraName: 'Post-Independence & Statehood',
            significance: 'Following the June 3rd Plan and the Indian Independence Act 1947 enacted by the British Parliament, Pakistan emerged on the world map as an independent sovereign dominion. Quaid-e-Azam Muhammad Ali Jinnah was sworn in as the First Governor-General in Karachi.',
            keyFigures: ['Quaid-e-Azam Muhammad Ali Jinnah', 'Liaquat Ali Khan', 'Lord Mountbatten', 'Sir Cyril Radcliffe'],
            outcomes: [
                'Creation of the largest Muslim sovereign nation in the world at the time.',
                'Karachi designated as the first federal capital of Pakistan.',
                'Radcliffe Award demarcated controversial boundaries in Punjab and Bengal on August 17, 1947.'
            ],
            examMcq: {
                questionText: 'Who administered the oath of office to Quaid-e-Azam Muhammad Ali Jinnah as the first Governor-General of Pakistan on August 15, 1947?',
                options: {
                    A: 'Justice Mian Abdul Rashid',
                    B: 'Lord Mountbatten',
                    C: 'Liaquat Ali Khan',
                    D: 'Justice Muhammad Munir'
                },
                correctAnswer: 'A',
                explanation: 'Chief Justice of Lahore High Court, Justice Mian Abdul Rashid (later First Chief Justice of Pakistan), administered the oath of Governor-General to Quaid-e-Azam.'
            }
        },
        {
            id: 'pak_1949',
            year: 1949,
            dateDisplay: 'March 12, 1949',
            title: 'Adoption of the Objectives Resolution',
            category: 'pakistan',
            era: 'pak_post1947',
            eraName: 'Constitution Making & Early Era',
            significance: 'Prime Minister Liaquat Ali Khan moved the landmark Objectives Resolution in the First Constituent Assembly, declaring that sovereignty over the entire universe belongs to Allah Almighty alone and the authority delegated to the State of Pakistan is a sacred trust to be exercised within limits prescribed by Him.',
            keyFigures: ['Liaquat Ali Khan', 'Maulana Shabbir Ahmad Usmani'],
            outcomes: [
                'Served as the grundnorm and preamble for all three Constitutions of Pakistan (1956, 1962, 1973).',
                'Made an active substantive part of the 1973 Constitution via Article 2A in 1985.',
                'Synthesized Islamic spiritual sovereignty with democratic representation and minority safeguards.'
            ],
            examMcq: {
                questionText: 'Under which Article was the Objectives Resolution 1949 incorporated as an active, substantive part of the 1973 Constitution in 1985?',
                options: {
                    A: 'Article 2',
                    B: 'Article 2A',
                    C: 'Article 25',
                    D: 'Article 227'
                },
                correctAnswer: 'B',
                explanation: 'The Revival of Constitution Order 1985 (President\\\\\\'s Order No. 14 of 1985) inserted Article 2A, making the Objectives Resolution an effective and substantive part of the Constitution.'
            }
        },
        {
            id: 'pak_1956',
            year: 1956,
            dateDisplay: 'March 23, 1956',
            title: 'Enactment of Pakistan\\\\\\'s First Constitution',
            category: 'pakistan',
            era: 'pak_post1947',
            eraName: 'Constitution Making & Early Era',
            significance: 'After nine years of parliamentary deliberations and crises, the Constituent Assembly adopted Pakistan\\\\\\'s first formal written Constitution. Pakistan ceased to be a British Dominion and was proclaimed the "Islamic Republic of Pakistan", with Major General Iskander Mirza taking oath as the first President.',
            keyFigures: ['Chaudhry Muhammad Ali (PM)', 'Iskander Mirza'],
            outcomes: [
                'Proclaimed the Islamic Republic of Pakistan and established parliamentary democracy.',
                'Adopted the principle of parity between East and West Pakistan (under the One Unit scheme).',
                'Lasted only two and a half years before being abrogated by Martial Law in October 1958.'
            ],
            examMcq: {
                questionText: 'Who was the Prime Minister of Pakistan when the First Constitution of 1956 was promulgated?',
                options: {
                    A: 'Khawaja Nazimuddin',
                    B: 'Chaudhry Muhammad Ali',
                    C: 'Huseyn Shaheed Suhrawardy',
                    D: 'Feroz Khan Noon'
                },
                correctAnswer: 'B',
                explanation: 'Chaudhry Muhammad Ali was the Prime Minister of Pakistan who successfully piloted the passage of the 1956 Constitution.'
            }
        },
        {
            id: 'pak_1960',
            year: 1960,
            dateDisplay: 'September 19, 1960',
            title: 'Signing of the Indus Waters Treaty',
            category: 'pakistan',
            era: 'pak_post1947',
            eraName: 'Ayub Era & Regional Pacts',
            significance: 'President Ayub Khan and Indian Prime Minister Jawaharlal Nehru signed the historic Indus Waters Treaty in Karachi, brokered by the World Bank. The treaty allocated unrestricted use of the three Western Rivers (Indus, Jhelum, Chenab) to Pakistan and the three Eastern Rivers (Ravi, Beas, Sutlej) to India.',
            keyFigures: ['Field Marshal Ayub Khan', 'Jawaharlal Nehru', 'W.A.B. Iliff (World Bank)'],
            outcomes: [
                'Resolved the critical transboundary river dispute between Pakistan and India.',
                'Led to the construction of Mangla Dam (Jhelum) and Tarbela Dam (Indus) with international Indus Basin Development Fund.',
                'Created the Permanent Indus Commission to arbitrate hydrological disagreements.'
            ],
            examMcq: {
                questionText: 'Under the Indus Waters Treaty 1960, which three rivers were allocated to Pakistan for unrestricted use?',
                options: {
                    A: 'Indus, Jhelum, and Chenab',
                    B: 'Ravi, Beas, and Sutlej',
                    C: 'Indus, Ravi, and Sutlej',
                    D: 'Jhelum, Chenab, and Ravi'
                },
                correctAnswer: 'A',
                explanation: 'The three Western Rivers (Indus, Jhelum, Chenab) were allocated to Pakistan, while Eastern Rivers (Ravi, Beas, Sutlej) were given to India.'
            }
        },
        {
            id: 'pak_1965',
            year: 1965,
            dateDisplay: 'September 6, 1965',
            title: '1965 Indo-Pak War & Tashkent Declaration',
            category: 'pakistan',
            era: 'pak_post1947',
            eraName: 'Ayub Era & Regional Pacts',
            significance: 'India launched an unprovoked multi-front attack across the international border toward Lahore and Sialkot following skirmishes in the Rann of Kutch and Kashmir. Pakistan Armed Forces mounted a legendary defense at Wagah, Burki, and the tank battle of Chawinda. The war ended on Sept 23 with a UN ceasefire, followed by the Tashkent Declaration in Jan 1966.',
            keyFigures: ['Field Marshal Ayub Khan', 'Gen Musa Khan', 'Maj Aziz Bhatti (NH)', 'Lal Bahadur Shastri'],
            outcomes: [
                'September 6 is observed annually as Defence Day (Youm-e-Difa).',
                'Major Raja Aziz Bhatti was awarded Nishan-e-Haider for heroic defense at the BRB Canal.',
                'Tashkent Agreement brokered by Soviet Premier Alexei Kosygin in January 1966.'
            ],
            examMcq: {
                questionText: 'Where was the historic 1966 peace declaration signed between President Ayub Khan and Indian PM Lal Bahadur Shastri?',
                options: {
                    A: 'Moscow',
                    B: 'Tashkent',
                    C: 'Geneva',
                    D: 'Almaty'
                },
                correctAnswer: 'B',
                explanation: 'The Tashkent Declaration was signed in Tashkent (then Soviet Uzbekistan) on January 10, 1966, through the mediation of Soviet Premier Alexei Kosygin.'
            }
        },
        {
            id: 'pak_1973',
            year: 1973,
            dateDisplay: 'April 10 / August 14, 1973',
            title: 'Unanimous Adoption of the 1973 Constitution',
            category: 'pakistan',
            era: 'pak_post1947',
            eraName: 'Democratic Era & 1973 Constitution',
            significance: 'The National Assembly of Pakistan unanimously passed the landmark Constitution of the Islamic Republic of Pakistan 1973, which established a federal parliamentary democracy with a bicameral legislature (Senate and National Assembly), fundamental rights protections, and Islamic provisions.',
            keyFigures: ['Zulfikar Ali Bhutto', 'Abdul Hafeez Pirzada', 'Khan Abdul Wali Khan', 'Mufti Mahmud'],
            outcomes: [
                'First constitution enacted by directly elected representatives with full consensus of political parties.',
                'Created the Senate of Pakistan to guarantee equal provincial representation.',
                'Remains the supreme governing law of Pakistan today (with 26 amendments).'
            ],
            examMcq: {
                questionText: 'Who served as the Law Minister of Pakistan who piloted and drafted the 1973 Constitution?',
                options: {
                    A: 'Abdul Hafeez Pirzada',
                    B: 'A.K. Brohi',
                    C: 'Chaudhry Aitzaz Ahsan',
                    D: 'Sharifuddin Pirzada'
                },
                correctAnswer: 'A',
                explanation: 'Abdul Hafeez Pirzada served as the Minister for Law and Parliamentary Affairs and piloted the draft of the 1973 Constitution through the National Assembly.'
            }
        },
        {
            id: 'pak_1974',
            year: 1974,
            dateDisplay: 'February 22-24, 1974',
            title: 'Historic Second OIC Islamic Summit Conference in Lahore',
            category: 'pakistan',
            era: 'pak_post1947',
            eraName: 'Democratic Era & 1973 Constitution',
            significance: 'Pakistan hosted the historic 2nd Islamic Summit of the Organisation of Islamic Cooperation (OIC) at Shalimar Gardens and Punjab Assembly in Lahore, uniting top Muslim heads of state including King Faisal of Saudi Arabia, Muammar Gaddafi, Yasser Arafat, and Sheikh Mujibur Rahman, formally recognizing Bangladesh.',
            keyFigures: ['Zulfikar Ali Bhutto', 'King Faisal of Saudi Arabia', 'Muammar Gaddafi', 'Yasser Arafat'],
            outcomes: [
                'Showcased Pakistan\\\\\\'s premier diplomatic leadership in the Muslim World.',
                'Pakistan formally recognized Bangladesh, with Sheikh Mujib flying to Lahore.',
                'Lahore\\\\\\'s Faisal Square and summit monuments erected in memory of this event.'
            ],
            examMcq: {
                questionText: 'In which city was the historic 2nd OIC Islamic Summit Conference hosted by Pakistan in February 1974?',
                options: {
                    A: 'Islamabad',
                    B: 'Karachi',
                    C: 'Lahore',
                    D: 'Rawalpindi'
                },
                correctAnswer: 'C',
                explanation: 'The 2nd Islamic Summit Conference was held in Lahore from February 22 to 24, 1974, bringing together over 35 Muslim world leaders.'
            }
        },
        {
            id: 'pak_1998',
            year: 1998,
            dateDisplay: 'May 28, 1998',
            title: 'Youm-e-Takbeer: Pakistan\\\\\\'s Nuclear Tests at Chagai',
            category: 'pakistan',
            era: 'pak_post1947',
            eraName: 'Nuclear Power & Contemporary Era',
            significance: 'In response to Indian nuclear tests (Pokhran-II) earlier in May, Pakistan successfully conducted five underground nuclear tests at the Ras Koh Hills in Chagai, Balochistan (followed by a sixth test on May 30 at Kharan), establishing credible nuclear deterrence and becoming the world\\\\\\'s 7th nuclear-armed state and 1st in the Muslim world.',
            keyFigures: ['Nawaz Sharif (PM)', 'Dr. Abdul Qadeer Khan', 'Dr. Ishfaq Ahmad (PAEC)', 'Dr. Samar Mubarakmand'],
            outcomes: [
                'Established strategic and nuclear deterrence balance in South Asia.',
                'May 28 is celebrated annually nationwide as Youm-e-Takbeer.',
                'Pakistan became the 7th recognized nuclear-weapon state globally.'
            ],
            examMcq: {
                questionText: 'At which mountain range in Balochistan did Pakistan conduct its five underground nuclear tests on May 28, 1998?',
                options: {
                    A: 'Ras Koh Hills, Chagai',
                    B: 'Toba Kakar Range',
                    C: 'Sulaiman Range',
                    D: 'Kirthar Range'
                },
                correctAnswer: 'A',
                explanation: 'Pakistan conducted its first five nuclear tests inside a granite mountain tunnel in the Ras Koh Hills of Chagai District, Balochistan, on May 28, 1998.'
            }
        },
        {
            id: 'pak_2010',
            year: 2010,
            dateDisplay: 'April 19, 2010',
            title: 'Passing of the 18th Constitutional Amendment',
            category: 'pakistan',
            era: 'pak_post1947',
            eraName: 'Nuclear Power & Contemporary Era',
            significance: 'President Asif Ali Zardari signed the landmark 18th Constitutional Amendment into law, which stripped presidential powers under Article 58(2)(b), abolished the Concurrent Legislative List, devolved 17 federal ministries to the provinces, renamed NWFP to Khyber Pakhtunkhwa, and established a constitutional floor protecting provincial shares under the NFC Award (Article 160(3A)).',
            keyFigures: ['Senator Raza Rabbani', 'Asif Ali Zardari', 'Yousaf Raza Gillani', 'Nawaz Sharif'],
            outcomes: [
                'Restored genuine parliamentary supremacy and provincial autonomy.',
                'Protected provincial revenue allocations: subsequent NFC Awards cannot reduce provincial shares.',
                'Introduced Article 10A (Right to Fair Trial) and Article 19A (Right to Information).'
            ],
            examMcq: {
                questionText: 'Which Parliamentary Committee Chairman steered the drafting and consensus for the 18th Constitutional Amendment 2010?',
                options: {
                    A: 'Senator Raza Rabbani',
                    B: 'Farooq H. Naek',
                    C: 'Aitzaz Ahsan',
                    D: 'Chaudhry Nisar Ali Khan'
                },
                correctAnswer: 'A',
                explanation: 'Senator Mian Raza Rabbani headed the Parliamentary Committee on Constitutional Reforms (PCCR) that drafted the 18th Amendment.'
            }
        },
        {
            id: 'pak_2018',
            year: 2018,
            dateDisplay: 'May 31, 2018',
            title: '25th Amendment & Historic FATA Merger with KP',
            category: 'pakistan',
            era: 'pak_post1947',
            eraName: 'Nuclear Power & Contemporary Era',
            significance: 'The Parliament enacted the 25th Constitutional Amendment (Constitution Thirty-First Amendment Bill), formally merging the Federally Administered Tribal Areas (FATA) and Provincially Administered Tribal Areas (PATA) with Khyber Pakhtunkhwa, abolishing the colonial-era Frontier Crimes Regulation (FCR) 1901 and extending the jurisdiction of the Supreme Court and Peshawar High Court to the tribal belt.',
            keyFigures: ['Sartaj Aziz', 'Shahid Khaqan Abbasi', 'Mamnoon Hussain'],
            outcomes: [
                'Repealed the draconian 117-year-old Frontier Crimes Regulation (FCR).',
                'Granted 5+ million tribal citizens constitutional fundamental rights, courts, and provincial assembly seats.',
                'Transformed seven tribal agencies into regular administrative districts of KP.'
            ],
            examMcq: {
                questionText: 'Which colonial-era regulation was formally abolished in FATA through the 25th Constitutional Amendment in 2018?',
                options: {
                    A: 'Rowlatt Act',
                    B: 'Frontier Crimes Regulation (FCR) 1901',
                    C: 'Criminal Law Amendment Act',
                    D: 'Public Safety Ordinance'
                },
                correctAnswer: 'B',
                explanation: 'The 25th Constitutional Amendment formally dismantled the Frontier Crimes Regulation (FCR) 1901, integrating FATA into mainstream constitutional governance.'
            }
        },

        // ========================================================
        // WORLD HISTORY TRACK
        // ========================================================
        {
            id: 'wld_1215',
            year: 1215,
            dateDisplay: 'June 15, 1215',
            title: 'Sealing of the Magna Carta (Great Charter)',
            category: 'world',
            era: 'world_ancient_medieval',
            eraName: 'Ancient & Medieval World',
            significance: 'King John of England was forced by rebel feudal barons to grant the Magna Carta at Runnymede meadow near Windsor. It established the foundational principle that the monarch is subject to the law, protecting individual rights from arbitrary tyranny and laying the bedrock of modern constitutional law, habeas corpus, and trial by jury.',
            keyFigures: ['King John of England', 'Barons of England', 'Archbishop Stephen Langton'],
            outcomes: [
                'Subordinated royal executive prerogative to the rule of law.',
                'Clause 39 established the sacred principle of due process and lawful judgment of peers.',
                'Direct conceptual ancestor of the US Constitution and Universal Declaration of Human Rights.'
            ],
            examMcq: {
                questionText: 'Where did King John of England affix his seal to the Magna Carta in June 1215?',
                options: {
                    A: 'Westminster Abbey',
                    B: 'Runnymede',
                    C: 'Tower of London',
                    D: 'Oxford'
                },
                correctAnswer: 'B',
                explanation: 'King John sealed the Magna Carta on the meadows of Runnymede near Windsor on June 15, 1215.'
            }
        },
        {
            id: 'wld_1453',
            year: 1453,
            dateDisplay: 'May 29, 1453',
            title: 'Conquest of Constantinople by Ottoman Sultan Mehmed II',
            category: 'world',
            era: 'world_ancient_medieval',
            eraName: 'Ancient & Medieval World',
            significance: 'The 21-year-old Ottoman Sultan Mehmed II (Fatih) breached the massive Theodosian walls using colossal super-cannons (Urban\\\\\\'s cannon), capturing Constantinople and bringing an end to the 1,123-year-old Eastern Roman (Byzantine) Empire. The city became the Ottoman capital, Istanbul, and displaced Greek scholars fled to Western Europe, catalyzing the European Renaissance.',
            keyFigures: ['Sultan Mehmed II (The Conqueror)', 'Constantine XI Palaiologos', 'Urban (Engineer)'],
            outcomes: [
                'Formal end of the Middle Ages and collapse of the Byzantine Empire.',
                'Ottomans controlled the Silk Road and Bosphorus maritime trade routes.',
                'European maritime nations were forced to seek ocean trade routes, triggering the Age of Discovery.'
            ],
            examMcq: {
                questionText: 'The fall of Constantinople in 1453 brought an end to which thousand-year-old empire?',
                options: {
                    A: 'Holy Roman Empire',
                    B: 'Byzantine Empire (Eastern Roman Empire)',
                    C: 'Ottoman Empire',
                    D: 'Sassanid Empire'
                },
                correctAnswer: 'B',
                explanation: 'The fall of Constantinople to Sultan Mehmed II on May 29, 1453, marked the definitive demise of the Byzantine (Eastern Roman) Empire.'
            }
        },
        {
            id: 'wld_1648',
            year: 1648,
            dateDisplay: 'October 24, 1648',
            title: 'Peace of Westphalia (Birth of the Nation-State System)',
            category: 'world',
            era: 'world_modern',
            eraName: 'Modern Era & Westphalia (1648-1914)',
            significance: 'Signed in the Westphalian cities of Munster and Osnabruck, this historic peace settlement ended the Thirty Years\\\\\\' War (1618-1648) in the Holy Roman Empire and Eighty Years\\\\\\' War between Spain and the Dutch Republic. It established the modern international relations concept of "Westphalian Sovereignty"—the inviolability of state borders, non-interference in domestic affairs, and legal equality among sovereign states.',
            keyFigures: ['Ferdinand III (Holy Roman Emperor)', 'Cardinal Mazarin (France)', 'Queen Christina (Sweden)'],
            outcomes: [
                'Inception of the modern sovereign state system in international relations.',
                'Recognition of national sovereignty and the principle of non-intervention in internal affairs.',
                'Ended major catastrophic religious wars in continental Europe.'
            ],
            examMcq: {
                questionText: 'Which foundational concept of modern international relations was established by the Peace of Westphalia in 1648?',
                options: {
                    A: 'Collective Security',
                    B: 'State Sovereignty and Non-Intervention',
                    C: 'Balance of Terror',
                    D: 'Democratic Peace Theory'
                },
                correctAnswer: 'B',
                explanation: 'The Peace of Westphalia established Westphalian Sovereignty: state sovereignty, legal equality of states, and non-interference in internal affairs.'
            }
        },
        {
            id: 'wld_1776',
            year: 1776,
            dateDisplay: 'July 4, 1776',
            title: 'American Declaration of Independence',
            category: 'world',
            era: 'world_modern',
            eraName: 'Modern Era & Westphalia (1648-1914)',
            significance: 'The Continental Congress meeting in Philadelphia unanimously adopted the Declaration of Independence, primarily drafted by Thomas Jefferson. It severed political allegiance to King George III of Great Britain, boldly proclaiming that all men are created equal with inalienable rights to "Life, Liberty and the pursuit of Happiness".',
            keyFigures: ['Thomas Jefferson', 'Benjamin Franklin', 'John Adams', 'George Washington'],
            outcomes: [
                'Birth of the United States of America as a sovereign federal republic.',
                'First formal, successful colonial rebellion applying Enlightenment political philosophy.',
                'Direct inspiration for the French Revolution (1789) and anticolonial movements.'
            ],
            examMcq: {
                questionText: 'Who was the principal author of the American Declaration of Independence adopted on July 4, 1776?',
                options: {
                    A: 'George Washington',
                    B: 'Thomas Jefferson',
                    C: 'Alexander Hamilton',
                    D: 'James Madison'
                },
                correctAnswer: 'B',
                explanation: 'Thomas Jefferson was chosen by the Committee of Five to draft the formal Declaration of Independence.'
            }
        },
        {
            id: 'wld_1789',
            year: 1789,
            dateDisplay: 'July 14, 1789',
            title: 'French Revolution & Storming of the Bastille',
            category: 'world',
            era: 'world_modern',
            eraName: 'Modern Era & Westphalia (1648-1914)',
            significance: 'Parisian citizens stormed the medieval fortress-prison of the Bastille, symbolizing the overthrow of the Ancien Regime and royal absolutism. The Revolution gave the world the Declaration of the Rights of Man and the Citizen, the slogan "Liberte, Egalite, Fraternite", and abolished feudal privileges, permanently transforming modern world politics.',
            keyFigures: ['King Louis XVI', 'Maximilien Robespierre', 'Jean-Paul Marat', 'Napoleon Bonaparte'],
            outcomes: [
                'Overthrow and execution of King Louis XVI and Marie Antoinette; abolition of monarchy.',
                'Proclamation of the universal rights of citizens and secular republic.',
                'Triggered the Napoleonic Wars and the spread of civil codes across Europe.'
            ],
            examMcq: {
                questionText: 'Which historic Parisian fortress-prison was stormed on July 14, 1789, marking the flashpoint of the French Revolution?',
                options: {
                    A: 'The Louvre',
                    B: 'The Bastille',
                    C: 'Versailles Palace',
                    D: 'Tuileries Palace'
                },
                correctAnswer: 'B',
                explanation: 'The Storming of the Bastille on July 14, 1789, became the defining flashpoint of the French Revolution, commemorated as Bastille Day (French National Day).'
            }
        },
        {
            id: 'wld_1914',
            year: 1914,
            dateDisplay: 'June 28 / July 28, 1914',
            title: 'Outbreak of World War I & Assassination of Archduke Franz Ferdinand',
            category: 'world',
            era: 'world_20th',
            eraName: 'World Wars & Cold War (1914-1991)',
            significance: 'Archduke Franz Ferdinand of Austria was assassinated in Sarajevo by Gavrilo Princip (a Bosnian Serb nationalist of the Black Hand). A month later, Austria-Hungary declared war on Serbia, activating interlocking alliance systems (Allied Powers vs Central Powers) and igniting the First World War (1914-1918), claiming over 20 million lives.',
            keyFigures: ['Archduke Franz Ferdinand', 'Gavrilo Princip', 'Kaiser Wilhelm II', 'Woodrow Wilson'],
            outcomes: [
                'Collapse of four major empires: Ottoman, Russian, German, and Austro-Hungarian.',
                'Signing of the Treaty of Versailles (1919) and creation of the League of Nations.',
                'Redrawing of the political map of Europe and the Middle East (Sykes-Picot Agreement).'
            ],
            examMcq: {
                questionText: 'The assassination of Archduke Franz Ferdinand in 1914 occurred in which city?',
                options: {
                    A: 'Vienna',
                    B: 'Sarajevo',
                    C: 'Belgrade',
                    D: 'Budapest'
                },
                correctAnswer: 'B',
                explanation: 'Archduke Franz Ferdinand was assassinated on June 28, 1914, in Sarajevo, the provincial capital of Bosnia and Herzegovina.'
            }
        },
        {
            id: 'wld_1917',
            year: 1917,
            dateDisplay: 'November 7, 1917',
            title: 'The Bolshevik October Revolution in Russia',
            category: 'world',
            era: 'world_20th',
            eraName: 'World Wars & Cold War (1914-1991)',
            significance: 'The Bolshevik faction of the Russian Social Democratic Labour Party, led by Vladimir Lenin and Leon Trotsky, overthrew Alexander Kerensky\\\\\\'s Provisional Government in Petrograd. They established the world\\\\\\'s first communist workers\\\\\\' state (RSFSR, later the Soviet Union in 1922), withdrawing Russia from World War I via the Treaty of Brest-Litovsk.',
            keyFigures: ['Vladimir Lenin', 'Leon Trotsky', 'Joseph Stalin', 'Tsar Nicholas II'],
            outcomes: [
                'Creation of the Soviet Union (USSR), reshaping 20th-century ideological warfare.',
                'Abolition of the 300-year Romanov Tsarist autocracy and private landlord property.',
                'Birth of global Marxism-Leninism as a counter to Western liberal capitalism.'
            ],
            examMcq: {
                questionText: 'Who was the primary Bolshevik leader who led the October Revolution of 1917 in Russia?',
                options: {
                    A: 'Leon Trotsky',
                    B: 'Vladimir Lenin',
                    C: 'Joseph Stalin',
                    D: 'Nikita Khrushchev'
                },
                correctAnswer: 'B',
                explanation: 'Vladimir Ilyich Lenin was the chief architect and leader of the Bolshevik Revolution in November (October O.S.) 1917.'
            }
        },
        {
            id: 'wld_1945',
            year: 1945,
            dateDisplay: 'October 24, 1945',
            title: 'End of World War II & Founding of the United Nations',
            category: 'world',
            era: 'world_20th',
            eraName: 'World Wars & Cold War (1914-1991)',
            significance: 'Following the unconditional surrender of Nazi Germany (May 1945) and the atomic bombings of Hiroshima and Nagasaki leading to Japanese surrender (August 1945), World War II concluded. The United Nations Charter, negotiated in San Francisco, came into official force on October 24, 1945, creating the UN to replace the failed League of Nations and prevent future world wars.',
            keyFigures: ['Franklin D. Roosevelt', 'Winston Churchill', 'Joseph Stalin', 'Harry S. Truman'],
            outcomes: [
                'Establishment of the United Nations headquarters in New York.',
                'Creation of the UN Security Council with five veto-wielding permanent members (P5).',
                'October 24 is commemorated globally every year as "United Nations Day".'
            ],
            examMcq: {
                questionText: 'In which American city was the United Nations Charter drafted and signed by 50 nations in 1945?',
                options: {
                    A: 'New York',
                    B: 'Washington, D.C.',
                    C: 'San Francisco',
                    D: 'Chicago'
                },
                correctAnswer: 'C',
                explanation: 'The UN Charter was negotiated and signed at the San Francisco Conference (April-June 1945) and took effect on October 24, 1945.'
            }
        },
        {
            id: 'wld_1962',
            year: 1962,
            dateDisplay: 'October 16-29, 1962',
            title: 'Cuban Missile Crisis (The Cold War Nuclear Brink)',
            category: 'world',
            era: 'world_20th',
            eraName: 'World Wars & Cold War (1914-1991)',
            significance: 'A 13-day confrontation between the United States and the Soviet Union triggered by American U-2 reconnaissance photos revealing secret Soviet medium-range nuclear ballistic missiles stationed in Cuba, 90 miles from Florida. It was the closest the world ever came to a full-scale thermonuclear war.',
            keyFigures: ['John F. Kennedy', 'Nikita Khrushchev', 'Fidel Castro'],
            outcomes: [
                'Soviets agreed to dismantle Cuban missile sites; US pledged not to invade Cuba and secretly removed Jupiter missiles from Turkey.',
                'Establishment of the Moscow-Washington direct "hotline" telephone link to avert accidental war.',
                'Led to the 1963 Partial Nuclear Test Ban Treaty (PTBT).'
            ],
            examMcq: {
                questionText: 'Which Soviet leader negotiated the resolution of the 1962 Cuban Missile Crisis with US President John F. Kennedy?',
                options: {
                    A: 'Joseph Stalin',
                    B: 'Nikita Khrushchev',
                    C: 'Leonid Brezhnev',
                    D: 'Mikhail Gorbachev'
                },
                correctAnswer: 'B',
                explanation: 'Premier Nikita Khrushchev of the Soviet Union reached a diplomatic agreement with President John F. Kennedy to withdraw missiles from Cuba.'
            }
        },
        {
            id: 'wld_1989',
            year: 1989,
            dateDisplay: 'November 9, 1989',
            title: 'The Fall of the Berlin Wall',
            category: 'world',
            era: 'world_20th',
            eraName: 'World Wars & Cold War (1914-1991)',
            significance: 'East German authorities announced that citizens were free to cross border checkpoints into West Berlin. Thousands surged to the Berlin Wall, demolishing concrete slabs with sledgehammers, bringing a symbolic end to the Cold War and the ideological division of Europe.',
            keyFigures: ['Mikhail Gorbachev', 'Helmut Kohl', 'Ronald Reagan', 'George H.W. Bush'],
            outcomes: [
                'Accelerated the reunification of Germany on October 3, 1990.',
                'Spurred the collapse of Soviet-backed communist regimes across Central and Eastern Europe.',
                'Paved the way for the dissolution of the Soviet Union in December 1991.'
            ],
            examMcq: {
                questionText: 'In which year did the historic Fall of the Berlin Wall take place, symbolizing the end of the Cold War?',
                options: {
                    A: '1987',
                    B: '1989',
                    C: '1991',
                    D: '1993'
                },
                correctAnswer: 'B',
                explanation: 'The Berlin Wall fell on November 9, 1989, leading to German reunification in October 1990.'
            }
        },
        {
            id: 'wld_1991',
            year: 1991,
            dateDisplay: 'December 26, 1991',
            title: 'Dissolution of the Soviet Union (End of Cold War)',
            category: 'world',
            era: 'world_20th',
            eraName: 'World Wars & Cold War (1914-1991)',
            significance: 'Mikhail Gorbachev resigned as President of the USSR, and the Soviet flag was lowered over the Kremlin for the final time. The Supreme Soviet formally voted the Union of Soviet Socialist Republics out of existence, establishing 15 independent republics and inaugurating the "Unipolar Moment" dominated by the United States.',
            keyFigures: ['Mikhail Gorbachev', 'Boris Yeltsin', 'George H.W. Bush'],
            outcomes: [
                'Emergence of 15 sovereign nations, including the Russian Federation, Ukraine, and Central Asian states.',
                'Official end of the 45-year bipolar Cold War standoff.',
                'Expansion of NATO and European Union eastward in subsequent decades.'
            ],
            examMcq: {
                questionText: 'Following the dissolution of the Soviet Union in December 1991, how many independent sovereign republics emerged from the former USSR?',
                options: {
                    A: '10',
                    B: '12',
                    C: '15',
                    D: '18'
                },
                correctAnswer: 'C',
                explanation: '15 independent sovereign states emerged from the dissolution of the Soviet Union (Russia, Ukraine, Belarus, 3 Baltic states, 3 Caucasus states, and 5 Central Asian republics).'
            }
        },
        {
            id: 'wld_2001',
            year: 2001,
            dateDisplay: 'September 11, 2001',
            title: 'September 11 Attacks & The Global War on Terror',
            category: 'world',
            era: 'world_21st',
            eraName: '21st Century & Contemporary World',
            significance: 'Nineteen Al-Qaeda hijackers commandeered four commercial airliners, crashing two into the World Trade Center Twin Towers in New York City and one into the Pentagon in Virginia, while passengers forced the fourth (Flight 93) down in Shanksville, Pennsylvania. Over 2,977 people died, triggering the US-led Global War on Terror and invasions of Afghanistan (2001) and Iraq (2003).',
            keyFigures: ['George W. Bush', 'Osama bin Laden'],
            outcomes: [
                'Invasion of Afghanistan (Operation Enduring Freedom) in October 2001.',
                'Fundamental transformation of international homeland security, surveillance, and counter-terrorism law.',
                'Pakistan became a pivotal Major Non-NATO Ally (MNNA) on the frontline.'
            ],
            examMcq: {
                questionText: 'Which international military operation was launched by the United States in Afghanistan following the September 11, 2001 attacks?',
                options: {
                    A: 'Operation Desert Storm',
                    B: 'Operation Enduring Freedom',
                    C: 'Operation Iraqi Freedom',
                    D: 'Operation Resolute Support'
                },
                correctAnswer: 'B',
                explanation: 'Operation Enduring Freedom was officially launched on October 7, 2001, in Afghanistan targeting Al-Qaeda and Taliban regimes.'
            }
        },
        {
            id: 'wld_2015',
            year: 2015,
            dateDisplay: 'December 12, 2015',
            title: 'Adoption of the Paris Climate Agreement',
            category: 'world',
            era: 'world_21st',
            eraName: '21st Century & Contemporary World',
            significance: 'At COP21 in Paris, 196 parties to the UNFCCC negotiated a landmark, legally binding international treaty on climate change. It set the global goal of holding the increase in global average temperature to well below 2 degrees Celsius above pre-industrial levels, and pursuing efforts to limit temperature increase to 1.5 degrees Celsius.',
            keyFigures: ['Laurent Fabius', 'Christiana Figueres', 'Barack Obama', 'Ban Ki-moon'],
            outcomes: [
                'First universal, legally binding global pact on greenhouse gas emissions reduction.',
                'Introduced Nationally Determined Contributions (NDCs) updated every 5 years.',
                'Framework for climate adaptation finance for vulnerable nations like Pakistan.'
            ],
            examMcq: {
                questionText: 'What is the primary temperature limit goal articulated in the Paris Agreement on Climate Change (2015)?',
                options: {
                    A: 'Well below 2 degrees Celsius, pursuing efforts to limit to 1.5 degrees Celsius',
                    B: 'Below 3 degrees Celsius',
                    C: 'Exact reduction of 0.5 degrees Celsius',
                    D: 'Stabilization at 4 degrees Celsius'
                },
                correctAnswer: 'A',
                explanation: 'The Paris Agreement aims to hold global temperature increase to well below 2 degrees Celsius, striving to limit it to 1.5 degrees Celsius above pre-industrial levels.'
            }
        },
        {
            id: 'wld_2024',
            year: 2024,
            dateDisplay: 'January - October 2024',
            title: 'BRICS Expansion & Rise of the Multipolar Geopolitical Order',
            category: 'world',
            era: 'world_21st',
            eraName: '21st Century & Contemporary World',
            significance: 'The BRICS bloc officially expanded, inducting Iran, Egypt, Ethiopia, and the UAE into its ranks, while over 30 countries applied for partnership. The Kazan Summit in October 2024 highlighted growing momentum for de-dollarization, local currency settlements, and an alternative financial architecture, solidifying the transition toward a multipolar world order.',
            keyFigures: ['Vladimir Putin', 'Xi Jinping', 'Narendra Modi', 'Luiz Inacio Lula da Silva'],
            outcomes: [
                'BRICS+ accounts for over 45% of the world population and over 35% of global GDP (PPP).',
                'Accelerated exploration of bilateral non-dollar trade settling mechanisms.',
                'Deepening strategic collaboration across the Global South.'
            ],
            examMcq: {
                questionText: 'In which Russian city was the 16th BRICS Summit held in October 2024, cementing the historic expansion of the bloc?',
                options: {
                    A: 'Moscow',
                    B: 'Saint Petersburg',
                    C: 'Kazan',
                    D: 'Sochi'
                },
                correctAnswer: 'C',
                explanation: 'The 16th annual BRICS Summit was hosted in Kazan, Russia, on October 22-24, 2024, welcoming new member states.'
            }
        }
    ];

    return {
        getAllEvents: function() {
            return JSON.parse(JSON.stringify(TIMELINE_EVENTS));
        },
        getEventsByCategory: function(category) {
            if (!category || category === 'all') return this.getAllEvents();
            return TIMELINE_EVENTS.filter(e => e.category === category);
        },
        getEventsByEra: function(era) {
            if (!era || era === 'all') return this.getAllEvents();
            return TIMELINE_EVENTS.filter(e => e.era === era);
        },
        searchEvents: function(query) {
            if (!query) return this.getAllEvents();
            const q = query.toLowerCase().trim();
            return TIMELINE_EVENTS.filter(e => 
                e.title.toLowerCase().includes(q) ||
                String(e.year).includes(q) ||
                e.significance.toLowerCase().includes(q) ||
                (e.keyFigures && e.keyFigures.some(f => f.toLowerCase().includes(q))) ||
                e.eraName.toLowerCase().includes(q)
            );
        },
        getEventById: function(id) {
            return TIMELINE_EVENTS.find(e => e.id === id) || null;
        }
    };
})();
`;

fs.writeFileSync(targetPath, jsCode, 'utf8');
console.log('Successfully written frontend/js/data_timeline.js!');
