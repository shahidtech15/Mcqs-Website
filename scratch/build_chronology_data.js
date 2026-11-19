const fs = require('fs');

const CHRONOLOGY_DATA = {
  // ==========================================
  // 1. HISTORICAL EVENTS & MILESTONES (25+)
  // ==========================================
  history: [
    {
      id: "hist-712",
      title: "Conquest of Sindh by Muhammad bin Qasim",
      year: 712,
      dateDisplay: "712 AD",
      era: "Early Islamic Era",
      summary: "17-year-old Umayyad general Muhammad bin Qasim defeated Raja Dahir at the Battle of Rawar, establishing Muslim rule in Sindh.",
      examSignificance: "Earned Sindh the historic title 'Bab-ul-Islam' (Gateway of Islam); dispatched by Umayyad governor of Iraq, Hajjaj bin Yousuf."
    },
    {
      id: "hist-1206",
      title: "Establishment of the Delhi Sultanate (Mamluk Dynasty)",
      year: 1206,
      dateDisplay: "1206 AD",
      era: "Medieval Era",
      summary: "Qutb-ud-din Aibak became the first independent Muslim Sultan of Delhi, founding the Mamluk (Slave) Dynasty.",
      examSignificance: "Marked the formal commencement of the Delhi Sultanate which lasted until 1526; began construction of Qutb Minar."
    },
    {
      id: "hist-1526",
      title: "First Battle of Panipat & Foundation of Mughal Empire",
      year: 1526,
      dateDisplay: "21 April 1526",
      era: "Mughal Empire",
      summary: "Zahir-ud-din Muhammad Babur defeated Ibrahim Lodi, the last Sultan of Delhi, using gunpowder artillery and Tulughma tactics.",
      examSignificance: "Ended the Delhi Sultanate; established the Mughal Empire which ruled South Asia for over three centuries."
    },
    {
      id: "hist-1857",
      title: "War of Independence (The Great Uprising)",
      year: 1857,
      dateDisplay: "10 May 1857",
      era: "British Colonial Rule",
      summary: "Widespread armed rebellion against the British East India Company initiated by sepoys in Meerut and spread across Delhi, Awadh, and Punjab.",
      examSignificance: "Led to the dissolution of the British East India Company and the formal transfer of power to the British Crown under the Government of India Act 1858."
    },
    {
      id: "hist-1875",
      title: "Foundation of MAO College Aligarh by Sir Syed Ahmad Khan",
      year: 1875,
      dateDisplay: "24 May 1875",
      era: "Aligarh Movement",
      summary: "Sir Syed Ahmad Khan founded the Muhammadan Anglo-Oriental (MAO) College in Aligarh to impart modern Western education to Muslims.",
      examSignificance: "Formed the intellectual nursery of the Pakistan Movement; elevated to Aligarh Muslim University (AMU) in 1920."
    },
    {
      id: "hist-1906",
      title: "Formation of the All-India Muslim League in Dhaka",
      year: 1906,
      dateDisplay: "30 December 1906",
      era: "Pakistan Movement",
      summary: "Muslim delegates at the All-India Muhammadan Educational Conference in Dhaka founded the All-India Muslim League (AIML).",
      examSignificance: "Chaired by Nawab Waqar-ul-Mulk; Nawab Salimullah Khan of Dhaka moved the resolution; Sir Aga Khan III was appointed its first permanent president."
    },
    {
      id: "hist-1909",
      title: "Minto-Morley Reforms (Separate Electorates)",
      year: 1909,
      dateDisplay: "21 May 1909",
      era: "Constitutional Development",
      summary: "The Indian Councils Act 1909 formally conceded separate electorates for Muslims in provincial and imperial legislative councils.",
      examSignificance: "Followed the 1906 Simla Deputation led by Sir Aga Khan; legally established Muslims as a distinct political entity in British India."
    },
    {
      id: "hist-1916",
      title: "The Historic Lucknow Pact",
      year: 1916,
      dateDisplay: "December 1916",
      era: "Hindu-Muslim Unity",
      summary: "Joint agreement between the Indian National Congress and the All-India Muslim League reached at Lucknow.",
      examSignificance: "Congress accepted separate electorates for Muslims; Muhammad Ali Jinnah earned the title 'Ambassador of Hindu-Muslim Unity' from Sarojini Naidu."
    },
    {
      id: "hist-1929",
      title: "Jinnah's Fourteen Points",
      year: 1929,
      dateDisplay: "March 1929",
      era: "Constitutional Struggle",
      summary: "Muhammad Ali Jinnah presented his 14 constitutional points in Delhi in response to the anti-Muslim Nehru Report of 1928.",
      examSignificance: "Demanded federal constitution with residual powers to provinces, one-third Muslim representation in Central Legislature, and separation of Sindh from Bombay."
    },
    {
      id: "hist-1930",
      title: "Allama Iqbal's Historic Allahabad Address",
      year: 1930,
      dateDisplay: "29 December 1930",
      era: "Ideological Genesis",
      summary: "Allama Muhammad Iqbal delivered his presidential address at the 21st annual session of the All-India Muslim League in Allahabad.",
      examSignificance: "First clear articulation of the vision for a consolidated North-Western Muslim state (Punjab, NWFP, Sindh, Balochistan); ideological blueprint for Pakistan."
    },
    {
      id: "hist-1940",
      title: "The Lahore Resolution (Pakistan Resolution)",
      year: 1940,
      dateDisplay: "23 March 1940",
      era: "Pakistan Movement",
      summary: "Historic resolution moved by A.K. Fazlul Huq (Sher-e-Bangla) at Minto Park (now Iqbal Park), Lahore, demanding autonomous sovereign Muslim states.",
      examSignificance: "Drafted by a committee including Sir Sikandar Hayat Khan; celebrated annually in Pakistan as Republic Day / Pakistan Day on 23 March."
    },
    {
      id: "hist-1947",
      title: "Independence of Pakistan & Partition of India",
      year: 1947,
      dateDisplay: "14 August 1947",
      era: "Creation of Pakistan",
      summary: "Pakistan emerged as an independent sovereign state under the 3rd June Plan and the Indian Independence Act 1947.",
      examSignificance: "Quaid-e-Azam Muhammad Ali Jinnah sworn in as the 1st Governor-General; Liaquat Ali Khan became the 1st Prime Minister; Radcliffe Award determined borders."
    },
    {
      id: "hist-1949",
      title: "Adoption of the Objectives Resolution",
      year: 1949,
      dateDisplay: "12 March 1949",
      era: "Constitutional Milestone",
      summary: "The 1st Constituent Assembly of Pakistan passed the Objectives Resolution moved by Prime Minister Liaquat Ali Khan.",
      examSignificance: "Laid down that sovereignty over the entire universe belongs to Allah Almighty; made a substantive part of the 1973 Constitution via Article 2A in 1985."
    },
    {
      id: "hist-1956",
      title: "Enactment of Pakistan's First Constitution",
      year: 1956,
      dateDisplay: "23 March 1956",
      era: "First Republic",
      summary: "Pakistan promulgated its first written constitution, transforming the Dominion of Pakistan into the Islamic Republic of Pakistan.",
      examSignificance: "Unicameral parliament under the One Unit scheme; Iskander Mirza became the first President of Pakistan; abrogated by Ayub Khan's martial law in October 1958."
    },
    {
      id: "hist-1973",
      title: "Unanimous Promulgation of the 1973 Constitution",
      year: 1973,
      dateDisplay: "14 August 1973",
      era: "Democratic Era",
      summary: "National Assembly unanimously passed the 1973 Constitution of Pakistan under the leadership of Prime Minister Zulfikar Ali Bhutto.",
      examSignificance: "Established a parliamentary, federal democracy with a bicameral legislature (Senate and National Assembly); declared Islam as the state religion (Article 2)."
    },
    {
      id: "hist-1974",
      title: "Second OIC Islamic Summit Conference in Lahore",
      year: 1974,
      dateDisplay: "22–24 February 1974",
      era: "Pan-Islamic Solidarity",
      summary: "Zulfikar Ali Bhutto hosted leaders of 38 Muslim nations in Lahore, including King Faisal of Saudi Arabia, Muammar Gaddafi, Yasser Arafat, and Sheikh Mujibur Rahman.",
      examSignificance: "Pakistan officially recognized Bangladesh; Summit passed historic resolutions supporting Palestinian liberation and economic cooperation."
    },
    {
      id: "hist-1998",
      title: "Youm-e-Takbeer: Pakistan's Nuclear Tests at Chagai",
      year: 1998,
      dateDisplay: "28 May 1998",
      era: "Nuclear Power",
      summary: "Pakistan conducted five underground nuclear tests in the Ras Koh Hills of Chagai District, Balochistan, followed by a sixth test on May 30 at Kharan.",
      examSignificance: "Made Pakistan the 7th nuclear-armed nation in the world and the 1st in the Muslim world; celebrated annually on 28 May as Youm-e-Takbeer."
    }
  ],

  // ==========================================
  // 2. CONSTITUTIONAL AMENDMENTS (PAKISTAN 1973)
  // ==========================================
  constitution: [
    {
      id: "amend-1st",
      title: "1st Constitutional Amendment (Redefining Borders)",
      year: 1974,
      dateDisplay: "4 May 1974",
      era: "1973 Constitution",
      summary: "Redefined Pakistan's national boundaries following the diplomatic recognition of Bangladesh as a sovereign state.",
      examSignificance: "Amended Article 1 of the Constitution, eliminating East Pakistan and defining the federation as four provinces, federal capital, and federally administered areas."
    },
    {
      id: "amend-2nd",
      title: "2nd Constitutional Amendment (Status of Ahmadis)",
      year: 1974,
      dateDisplay: "7 September 1974",
      era: "1973 Constitution",
      summary: "Amended Article 260(3) to declare persons of the Qadiani and Lahori groups (Ahmadis) as non-Muslims for the purposes of the Constitution and law.",
      examSignificance: "Unanimously passed by the National Assembly under Prime Minister Zulfikar Ali Bhutto following exhaustive parliamentary hearings."
    },
    {
      id: "amend-8th",
      title: "8th Constitutional Amendment (Introduction of Article 58-2b)",
      year: 1985,
      dateDisplay: "11 November 1985",
      era: "Zia-ul-Haq Era",
      summary: "Transformed Pakistan's parliamentary system into a semi-presidential system by granting the President discretionary power to dissolve the National Assembly under Article 58(2)(b).",
      examSignificance: "Passed by Muhammad Khan Junejo's parliament to end martial law; used repeatedly to dismiss elected governments in 1988, 1990, 1993, and 1996."
    },
    {
      id: "amend-13th",
      title: "13th Constitutional Amendment (Stripping Article 58-2b)",
      year: 1997,
      dateDisplay: "1 April 1997",
      era: "Nawaz Sharif 2nd Term",
      summary: "Stripped the President of the discretionary power to dissolve the National Assembly, revoking Article 58(2)(b).",
      examSignificance: "Passed with a two-thirds majority by Prime Minister Nawaz Sharif to restore parliamentary supremacy; also removed presidential discretion in military appointments."
    },
    {
      id: "amend-14th",
      title: "14th Constitutional Amendment (Anti-Defection Law)",
      year: 1997,
      dateDisplay: "3 July 1997",
      era: "Nawaz Sharif 2nd Term",
      summary: "Added Article 63A to the Constitution to disqualify parliamentarians who defect or vote contrary to party leadership directives.",
      examSignificance: "Designed to curb horse-trading ('Lota-ism') and floor-crossing in the National Assembly and Provincial Assemblies."
    },
    {
      id: "amend-17th",
      title: "17th Constitutional Amendment (Restoration of Article 58-2b & LFO)",
      year: 2003,
      dateDisplay: "31 December 2003",
      era: "Musharraf Era",
      summary: "Incorporated General Pervez Musharraf's Legal Framework Order (LFO) 2002 into the Constitution and revived presidential dissolution power under Article 58(2)(b).",
      examSignificance: "Passed with the support of the Muttahida Majlis-e-Amal (MMA); permitted Musharraf to hold the dual offices of President and Chief of Army Staff until 2004."
    },
    {
      id: "amend-18th",
      title: "18th Constitutional Amendment (Provincial Autonomy)",
      year: 2010,
      dateDisplay: "19 April 2010",
      era: "Democratic Consolidation",
      summary: "Landmark reform abolishing the Concurrent Legislative List, devolving 17 federal ministries to the provinces, and permanently repealing Article 58(2)(b).",
      examSignificance: "Renamed NWFP to Khyber Pakhtunkhwa; inserted Article 19A (Right to Information), Article 25A (Right to Free Education), and Article 10A (Right to Fair Trial); modified judicial appointment process (Article 175A)."
    },
    {
      id: "amend-19th",
      title: "19th Constitutional Amendment (Judicial Appointments)",
      year: 2011,
      dateDisplay: "1 January 2011",
      era: "Democratic Consolidation",
      summary: "Reformed the composition of the Judicial Commission of Pakistan (JCP) following concerns expressed by the Supreme Court.",
      examSignificance: "Increased the number of senior judges on the Judicial Commission from two to four, enhancing the judiciary's primacy in selecting superior court judges."
    },
    {
      id: "amend-21st",
      title: "21st Constitutional Amendment (Military Courts for Terrorism)",
      year: 2015,
      dateDisplay: "7 January 2015",
      era: "National Action Plan",
      summary: "Established military courts to try terrorists belonging to terrorist groups or organizations using the name of religion or a sect.",
      examSignificance: "Enacted with a 2-year sunset clause as part of the National Action Plan (NAP) following the tragic Army Public School (APS) Peshawar attack of 16 December 2014."
    },
    {
      id: "amend-25th",
      title: "25th Constitutional Amendment (FATA Merger with KP)",
      year: 2018,
      dateDisplay: "31 May 2018",
      era: "Administrative Integration",
      summary: "Merged the Federally Administered Tribal Areas (FATA) and Provincially Administered Tribal Areas (PATA) with Khyber Pakhtunkhwa province.",
      examSignificance: "Abolished the colonial-era Frontier Crimes Regulation (FCR) of 1901; extended the jurisdiction of the Supreme Court and Peshawar High Court to the tribal agencies."
    },
    {
      id: "amend-26th",
      title: "26th Constitutional Amendment (Judicial Reforms & CJP Appointment)",
      year: 2024,
      dateDisplay: "21 October 2024",
      era: "Judicial Restructuring",
      summary: "Reformed the appointment mechanism of the Chief Justice of Pakistan (CJP), establishing a 12-member Parliamentary Committee to select from the three most senior judges.",
      examSignificance: "Fixed the CJP term at 3 years; established constitutional benches in the Supreme Court and High Courts; reconstituted the Judicial Commission of Pakistan."
    }
  ],

  // ==========================================
  // 3. WARS & CONFLICTS
  // ==========================================
  wars: [
    {
      id: "war-1757",
      title: "Battle of Plassey",
      year: 1757,
      dateDisplay: "23 June 1757",
      era: "Colonial Subjugation",
      summary: "British East India Company forces under Robert Clive defeated Nawab Siraj-ud-Daulah of Bengal due to the betrayal of Mir Jafar.",
      examSignificance: "Established British East India Company territorial dominion over the wealthy province of Bengal, beginning the colonization of India."
    },
    {
      id: "war-1764",
      title: "Battle of Buxar",
      year: 1764,
      dateDisplay: "22 October 1764",
      era: "Colonial Expansion",
      summary: "British East India Company defeated the combined armies of Mir Qasim (Bengal), Shuja-ud-Daulah (Awadh), and Mughal Emperor Shah Alam II.",
      examSignificance: "Led to the 1765 Treaty of Allahabad, granting the British Company the Diwani rights (tax revenue collection) over Bengal, Bihar, and Orissa."
    },
    {
      id: "war-1914",
      title: "Outbreak of World War I",
      year: 1914,
      dateDisplay: "28 July 1914",
      era: "First World War",
      summary: "Triggered by the assassination of Archduke Franz Ferdinand of Austria in Sarajevo, pitting the Allied Powers against the Central Powers.",
      examSignificance: "Resulted in over 20 million deaths, the collapse of four empires (Ottoman, Austro-Hungarian, German, Russian), and the 1919 Treaty of Versailles."
    },
    {
      id: "war-1939",
      title: "Outbreak of World War II",
      year: 1939,
      dateDisplay: "1 September 1939",
      era: "Second World War",
      summary: "Nazi Germany invaded Poland, prompting Britain and France to declare war, igniting the deadliest global conflict in human history.",
      examSignificance: "Involved over 100 million personnel; concluded in 1945 with the defeat of the Axis powers, the atomic bombing of Hiroshima and Nagasaki, and the creation of the UN."
    },
    {
      id: "war-1947",
      title: "First Indo-Pak War over Kashmir",
      year: 1947,
      dateDisplay: "October 1947 – January 1949",
      era: "Post-Independence Conflict",
      summary: "Armed conflict erupted after Maharaja Hari Singh signed the controversial Instrument of Accession to India while tribal lashkars entered Kashmir.",
      examSignificance: "Concluded with a UN-brokered ceasefire on 1 January 1949 establishing the Ceasefire Line (CFL, later LoC) and UNCIP plebiscite resolutions."
    },
    {
      id: "war-1965",
      title: "1965 Indo-Pak War",
      year: 1965,
      dateDisplay: "6–23 September 1965",
      era: "Cold War Conflict",
      summary: "Seventeen-day war sparked by skirmishes in Rann of Kutch and Operation Gibraltar in Kashmir, leading to major tank battles in Chawinda and Khemkaran.",
      examSignificance: "Celebrated in Pakistan on 6 September as Defence Day; ended through Soviet mediation resulting in the Tashkent Declaration of 10 January 1966."
    },
    {
      id: "war-1971",
      title: "1971 Indo-Pak War & Fall of Dhaka",
      year: 1971,
      dateDisplay: "3–16 December 1971",
      era: "Separation of East Pakistan",
      summary: "War in East Pakistan culminated in the surrender of Eastern Command forces and the formal establishment of the independent People's Republic of Bangladesh.",
      examSignificance: "Led to the 1972 Simla Agreement; ended over 24 years of united Pakistan and restructured the geopolitical balance of power in South Asia."
    },
    {
      id: "war-1973",
      title: "Yom Kippur / Ramadan War",
      year: 1973,
      dateDisplay: "6–25 October 1973",
      era: "Middle East Conflict",
      summary: "Coalition of Arab states led by Egypt (Operation Badr crossing the Suez) and Syria attacked Israeli forces in the Sinai Peninsula and Golan Heights.",
      examSignificance: "Triggered the 1973 OAPEC Oil Embargo; created global stagflation; directly facilitated the 1978 Camp David Accords and 1979 Egypt-Israel Peace Treaty."
    },
    {
      id: "war-1979",
      title: "Soviet Invasion of Afghanistan",
      year: 1979,
      dateDisplay: "24 December 1979",
      era: "Cold War Proxy Conflict",
      summary: "Soviet 40th Army invaded Afghanistan to prop up the Marxist PDPA regime, initiating a decade-long guerilla war against Afghan Mujahideen.",
      examSignificance: "Turned Pakistan into a frontline Cold War state; led to Geneva Accords in 1988 and complete Soviet withdrawal in February 1989, accelerating USSR collapse."
    },
    {
      id: "war-1991",
      title: "The Gulf War (Operation Desert Storm)",
      year: 1991,
      dateDisplay: "17 January – 28 February 1991",
      era: "Post-Cold War Era",
      summary: "US-led 35-nation military coalition authorized by UNSC Resolution 678 expelled Iraqi forces from Kuwait following Saddam Hussein's August 1990 invasion.",
      examSignificance: "Demonstrated American unipolar military dominance ('New World Order'); established no-fly zones over Iraq; catalyzed the 1991 Madrid Peace Conference."
    },
    {
      id: "war-1999",
      title: "Kargil Conflict",
      year: 1999,
      dateDisplay: "May – July 1999",
      era: "Nuclear Era Conflict",
      summary: "High-altitude armed confrontation between India and Pakistan along the Line of Control (LoC) in the Kargil district of Kashmir.",
      examSignificance: "First direct military clash between India and Pakistan after both became declared nuclear powers in 1998; concluded after the 4 July Washington Declaration."
    },
    {
      id: "war-2001",
      title: "US Invasion of Afghanistan (Operation Enduring Freedom)",
      year: 2001,
      dateDisplay: "7 October 2001",
      era: "Global War on Terror",
      summary: "US and allied forces attacked Afghanistan following the 9/11 attacks after the Taliban regime refused to extradite Al-Qaeda leader Osama bin Laden.",
      examSignificance: "Longest war in US military history (20 years); ended in August 2021 with the US troop withdrawal and return of the Taliban to power in Kabul."
    },
    {
      id: "war-2003",
      title: "US-Led Invasion of Iraq (Operation Iraqi Freedom)",
      year: 2003,
      dateDisplay: "20 March 2003",
      era: "War on Terror Era",
      summary: "US and coalition forces invaded Iraq, overthrowing Saddam Hussein's Ba'athist government on allegations of Weapons of Mass Destruction (WMDs).",
      examSignificance: "Conducted without explicit UN Security Council authorization; triggered prolonged sectarian insurgency and the rise of ISIS (Daesh)."
    },
    {
      id: "war-2022",
      title: "Russian Invasion of Ukraine",
      year: 2022,
      dateDisplay: "24 February 2022",
      era: "Great Power Rivalry",
      summary: "Russia launched a full-scale military invasion of Ukraine, triggering the largest armed conflict and refugee crisis in Europe since World War II.",
      examSignificance: "Catalyzed major Western sanctions on Russia, revived NATO unity (accession of Finland and Sweden), and caused major global food/energy price shocks."
    }
  ],

  // ==========================================
  // 4. TREATIES & PACTS
  // ==========================================
  treaties: [
    {
      id: "trt-1648",
      title: "Peace of Westphalia",
      year: 1648,
      dateDisplay: "24 October 1648",
      era: "Birth of International Relations",
      summary: "Two peace treaties (Osnabrück and Münster) ending the Thirty Years' War in the Holy Roman Empire and Eighty Years' War between Spain and Netherlands.",
      examSignificance: "Established the 'Westphalian Sovereignty' doctrine: sovereign equality of states, territorial integrity, and non-interference in domestic affairs."
    },
    {
      id: "trt-1919",
      title: "Treaty of Versailles",
      year: 1919,
      dateDisplay: "28 June 1919",
      era: "Interwar Period",
      summary: "Peace treaty signed in the Hall of Mirrors at Versailles, formally ending World War I between Germany and the Allied Powers.",
      examSignificance: "Imposed harsh reparations and Article 231 ('War Guilt Clause') on Germany; established the League of Nations and the International Labour Organization (ILO)."
    },
    {
      id: "trt-1945",
      title: "Signing of the United Nations Charter",
      year: 1945,
      dateDisplay: "26 June 1945",
      era: "Post-WWII Order",
      summary: "50 founding nations signed the UN Charter at the San Francisco Conference; entered into force on 24 October 1945 (United Nations Day).",
      examSignificance: "Established the UN Security Council (with 5 veto-holding permanent members), General Assembly, and the International Court of Justice (ICJ)."
    },
    {
      id: "trt-1950",
      title: "Liaquat-Nehru Pact (Delhi Pact)",
      year: 1950,
      dateDisplay: "8 April 1950",
      era: "Bilateral Diplomacy",
      summary: "Bilateral treaty signed in New Delhi by Pakistani PM Liaquat Ali Khan and Indian PM Jawaharlal Nehru regarding the rights of minorities.",
      examSignificance: "Agreed to protect minorities in both countries and facilitate refugee property recovery following communal tensions in East and West Bengal."
    },
    {
      id: "trt-1960",
      title: "Signing of the Indus Waters Treaty",
      year: 1960,
      dateDisplay: "19 September 1960",
      era: "Transboundary Water Accord",
      summary: "Water-distribution treaty brokered by the World Bank dividing the six rivers of the Indus basin between India and Pakistan.",
      examSignificance: "Signed in Karachi by Field Marshal Ayub Khan and PM Jawaharlal Nehru. Pakistan received the Western Rivers (Indus, Jhelum, Chenab); India received Eastern Rivers (Ravi, Beas, Sutlej)."
    },
    {
      id: "trt-1966",
      title: "The Tashkent Declaration",
      year: 1966,
      dateDisplay: "10 January 1966",
      era: "Cold War Mediation",
      summary: "Peace agreement mediated by Soviet Premier Alexei Kosygin in Tashkent, Uzbek SSR, formally resolving the 1965 Indo-Pak War.",
      examSignificance: "Signed by Pakistani President Ayub Khan and Indian Prime Minister Lal Bahadur Shastri (who died hours after signing); troops withdrew to pre-war positions."
    },
    {
      id: "trt-1968",
      title: "Nuclear Non-Proliferation Treaty (NPT)",
      year: 1968,
      dateDisplay: "1 July 1968",
      era: "Nuclear Disarmament",
      summary: "Multilateral treaty aimed at preventing the spread of nuclear weapons and promoting peaceful uses of nuclear energy.",
      examSignificance: "Recognized 5 official Nuclear Weapon States (US, USSR, UK, France, China). India, Pakistan, and Israel never signed; North Korea withdrew in 2003."
    },
    {
      id: "trt-1972",
      title: "The Simla Agreement",
      year: 1972,
      dateDisplay: "2 July 1972",
      era: "Post-1971 Diplomacy",
      summary: "Comprehensive peace pact signed by Prime Minister Zulfikar Ali Bhutto and Indian Prime Minister Indira Gandhi following the 1971 War.",
      examSignificance: "Converted the 1949 Ceasefire Line into the Line of Control (LoC); secured the release of 93,000 Pakistani prisoners of war (POWs); pledged bilateral resolution of disputes."
    },
    {
      id: "trt-1999",
      title: "The Lahore Declaration",
      year: 1999,
      dateDisplay: "21 February 1999",
      era: "Nuclear Confidence-Building",
      summary: "Bilateral agreement signed in Lahore by Prime Minister Nawaz Sharif and Indian Prime Minister Atal Bihari Vajpayee following Vajpayee's historic bus diplomacy trip.",
      examSignificance: "Committed both newly declared nuclear states to nuclear risk reduction measures, advance notification of ballistic missile tests, and peaceful dialogue on Kashmir."
    },
    {
      id: "trt-2015",
      title: "The Paris Climate Agreement",
      year: 2015,
      dateDisplay: "12 December 2015",
      era: "Global Environmental Governance",
      summary: "Legally binding international treaty on climate change adopted by 196 parties at COP21 in Paris.",
      examSignificance: "Aims to limit global warming to well below 2°C, preferably 1.5°C, compared to pre-industrial levels through Nationally Determined Contributions (NDCs)."
    },
    {
      id: "trt-2020",
      title: "The Abraham Accords",
      year: 2020,
      dateDisplay: "15 September 2020",
      era: "Middle East Geopolitics",
      summary: "Bilateral normalization agreements brokered by the US between Israel and Arab states (United Arab Emirates and Bahrain, later joined by Sudan and Morocco).",
      examSignificance: "First Arab-Israeli normalization treaties since Jordan in 1994, shifting Middle East alliances toward regional economic and security integration."
    }
  ],

  // ==========================================
  // 5. INTERNATIONAL DEVELOPMENTS
  // ==========================================
  international: [
    {
      id: "intl-1920",
      title: "Establishment of the League of Nations",
      year: 1920,
      dateDisplay: "10 January 1920",
      era: "Interwar Internationalism",
      summary: "First worldwide intergovernmental organization whose principal mission was to maintain world peace, championed by US President Woodrow Wilson.",
      examSignificance: "Headquartered in Geneva, Switzerland; collapsed due to lack of an enforcement military mechanism, US non-membership, and inability to stop 1930s aggression."
    },
    {
      id: "intl-1944",
      title: "The Bretton Woods Conference",
      year: 1944,
      dateDisplay: "1–22 July 1944",
      era: "Global Financial Architecture",
      summary: "730 delegates from 44 Allied nations met in Bretton Woods, New Hampshire, USA to design the post-WWII international monetary system.",
      examSignificance: "Created the International Monetary Fund (IMF) and the International Bank for Reconstruction and Development (IBRD, now World Bank); established US Dollar as global reserve peg."
    },
    {
      id: "intl-1949",
      title: "Formation of NATO (North Atlantic Treaty Organization)",
      year: 1949,
      dateDisplay: "4 April 1949",
      era: "Cold War Alliances",
      summary: "12 Western nations signed the North Atlantic Treaty in Washington, D.C., establishing a collective defense military alliance against Soviet expansionism.",
      examSignificance: "Enshrined Article 5 (an armed attack against one shall be considered an attack against all); first NATO Secretary-General Lord Ismay quipped its goal was 'to keep the Russians out, the Americans in, and the Germans down'."
    },
    {
      id: "intl-1955",
      title: "Bandung Conference (Birth of Non-Aligned Movement)",
      year: 1955,
      dateDisplay: "18–24 April 1955",
      era: "Third World Solidarity",
      summary: "29 Asian and African countries met in Bandung, Indonesia, organized by Sukarno, Nehru, Zhou Enlai, Nasser, and Tito.",
      examSignificance: "Formulated the 10 Principles of Bandung promoting peaceful coexistence and anti-colonialism; directly catalyzed the formal founding of the Non-Aligned Movement (NAM) in Belgrade in 1961."
    },
    {
      id: "intl-1962",
      title: "Cuban Missile Crisis",
      year: 1962,
      dateDisplay: "16–29 October 1962",
      era: "Cold War Brinkmanship",
      summary: "13-day confrontation between the US and the USSR initiated by Soviet nuclear missile deployments in Cuba, bringing the superpowers to the brink of nuclear war.",
      examSignificance: "Resolved after Khrushchev withdrew missiles in exchange for Kennedy's public pledge not to invade Cuba and secret withdrawal of US Jupiter missiles from Turkey; led to Moscow-Washington hotline."
    },
    {
      id: "intl-1969",
      title: "Formation of the Organization of Islamic Cooperation (OIC)",
      year: 1969,
      dateDisplay: "25 September 1969",
      era: "Islamic Solidarity",
      summary: "Founded at an emergency summit in Rabat, Morocco, convened in the wake of the criminal arson attack on Al-Aqsa Mosque in Jerusalem on 21 August 1969.",
      examSignificance: "Second largest intergovernmental organization after the UN (57 member states); permanent Secretariat based in Jeddah, Saudi Arabia."
    },
    {
      id: "intl-1985",
      title: "Establishment of SAARC in Dhaka",
      year: 1985,
      dateDisplay: "8 December 1985",
      era: "South Asian Regionalism",
      summary: "Founding summit held in Dhaka, Bangladesh, uniting 7 South Asian states (Bangladesh, Bhutan, India, Maldives, Nepal, Pakistan, Sri Lanka; Afghanistan joined 2007).",
      examSignificance: "Permanent Secretariat established in Kathmandu, Nepal in 1987; established SAFTA (South Asian Free Trade Area) in 2004."
    },
    {
      id: "intl-1989",
      title: "The Fall of the Berlin Wall",
      year: 1989,
      dateDisplay: "9 November 1989",
      era: "End of the Cold War",
      summary: "East German authorities announced free border crossing, prompting citizens to demolish the Berlin Wall that had divided the city since 1961.",
      examSignificance: "Symbolized the collapse of Soviet-backed communist regimes in Eastern Europe and paved the way for German reunification on 3 October 1990."
    },
    {
      id: "intl-1991",
      title: "Dissolution of the Soviet Union (USSR)",
      year: 1991,
      dateDisplay: "26 December 1991",
      era: "Unipolar Moment",
      summary: "President Mikhail Gorbachev resigned and the Supreme Soviet formally dissolved the Union of Soviet Socialist Republics into 15 independent sovereign republics.",
      examSignificance: "Marked the official end of the Cold War; created 5 independent Central Asian republics (CARs) in Pakistan's immediate neighborhood; ushered in the American unipolar era."
    },
    {
      id: "intl-1992",
      title: "Signing of the Maastricht Treaty (Creation of the European Union)",
      year: 1992,
      dateDisplay: "7 February 1992",
      era: "European Integration",
      summary: "Members of the European Community signed the Treaty on European Union in Maastricht, Netherlands, entering into force on 1 November 1993.",
      examSignificance: "Formed the European Union (EU); established the three pillars structure and paved the way for the creation of the single European currency (the Euro)."
    },
    {
      id: "intl-1995",
      title: "Establishment of the World Trade Organization (WTO)",
      year: 1995,
      dateDisplay: "1 January 1995",
      era: "Global Economic Governance",
      summary: "Established under the 1994 Marrakesh Agreement, officially replacing the 1947 General Agreement on Tariffs and Trade (GATT).",
      examSignificance: "Headquartered in Geneva, Switzerland; operates the binding dispute settlement mechanism and oversees multilateral trade negotiations."
    },
    {
      id: "intl-2001",
      title: "September 11 Terrorist Attacks on the United States",
      year: 2001,
      dateDisplay: "11 September 2001",
      era: "Post-9/11 Era",
      summary: "Nineteen Al-Qaeda hijackers crashed four commercial airliners into the World Trade Center towers in New York, the Pentagon, and a field in Shanksville, Pennsylvania.",
      examSignificance: "Killed 2,977 victims; triggered the Global War on Terror, the invasion of Afghanistan (2001) and Iraq (2003), and transformed Pakistan's geopolitical landscape."
    },
    {
      id: "intl-2015",
      title: "Official Launch of CPEC (China-Pakistan Economic Corridor)",
      year: 2015,
      dateDisplay: "20 April 2015",
      era: "Geoeconomic Transformation",
      summary: "Chinese President Xi Jinping visited Islamabad and signed 51 agreements worth $46 billion, formally launching CPEC as the flagship corridor of the Belt and Road Initiative.",
      examSignificance: "Connects Gwadar deep-sea port with Xinjiang, China; encompasses energy power plants, transport infrastructure, and Special Economic Zones (SEZs)."
    },
    {
      id: "intl-2024",
      title: "Historic BRICS Expansion (BRICS+)",
      year: 2024,
      dateDisplay: "1 January 2024",
      era: "Multipolar Order",
      summary: "BRICS officially doubled its membership from 5 nations (Brazil, Russia, India, China, South Africa) by inducting Iran, Egypt, Ethiopia, and the UAE.",
      examSignificance: "Represents over 45% of the world's population and nearly 36% of global GDP (PPP); accelerates de-dollarization discussions and Global South institutional influence."
    }
  ]
};

const jsContent = `/**
 * CSS PREP CENTRAL - ARRANGE EVENTS CHRONOLOGICALLY GAME DATASET
 * Curated Historical, Constitutional, Conflict & Geopolitical Milestone Engine.
 * Categories:
 * 1. history (Historical Events & Milestones) - 17 items
 * 2. constitution (1973 Constitutional Amendments) - 11 items
 * 3. wars (Wars & Military Conflicts) - 14 items
 * 4. treaties (Treaties, Declarations & Pacts) - 11 items
 * 5. international (Major International Developments) - 14 items
 * Total Curated Timeline Events: 67 authoritative milestones.
 */

const CHRONOLOGY_DATA = ${JSON.stringify(CHRONOLOGY_DATA, null, 2)};

if (typeof window !== 'undefined') {
  window.CHRONOLOGY_DATA = CHRONOLOGY_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CHRONOLOGY_DATA;
}
`;

fs.writeFileSync('frontend/js/data_chronology.js', jsContent, 'utf8');
console.log('Successfully generated frontend/js/data_chronology.js with 67 milestones!');
