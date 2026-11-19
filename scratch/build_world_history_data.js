const fs = require('fs');
const path = require('path');

// Let's create the comprehensive generator for data_world_history_timeline.js
const code = `/**
 * CSS PREP CENTRAL - WORLD HISTORY TIMELINE DATASET
 * Comprehensive, High-Yield Historical Milestones from Ancient Civilizations (~3500 BCE) to the Present (2026).
 * Categories: Wars & Conflicts, Revolutions, Treaties & Pacts, Discoveries & Science, Political Developments & Empires.
 * Integrated with CSS/PMS/UPSC syllabus notes, key figures, and past paper screening MCQs.
 */

(function (global) {
  'use strict';

  const WORLD_EVENTS = [
    // ========================================================
    // ANCIENT CIVILIZATIONS & ANTIQUITY (~3500 BCE – 500 CE)
    // ========================================================
    {
      id: "wh_3200bce",
      year: -3200,
      dateDisplay: "c. 3200 BCE",
      title: "Invention of Cuneiform Writing in Sumer (Mesopotamia)",
      category: "discoveries",
      era: "ancient",
      eraName: "Ancient Civilizations & Antiquity (~3500 BCE – 500 CE)",
      significance: "Sumerians in the fertile crescent of southern Mesopotamia developed cuneiform script pressed into clay tablets, transitioning human society from prehistory to recorded history.",
      keyFigures: ["Sumerian scribes", "Priest-kings of Uruk"],
      outcomes: [
        "Enabled systematic codification of laws, economic accounting, and monumental statecraft.",
        "Facilitated the transmission of knowledge across generations and borders.",
        "Earliest literary works preserved, including the Epic of Gilgamesh."
      ],
      cssExamNotes: "World History, Anthropology, Ancient Near Eastern Civilizations.",
      examMcq: {
        questionText: "Which ancient civilization is credited with inventing the world's earliest known writing system, cuneiform?",
        options: { A: "Ancient Egypt", B: "Sumerians of Mesopotamia", C: "Indus Valley Civilization", D: "Shang Dynasty of China" },
        correctAnswer: "B",
        explanation: "The Sumerians of ancient Mesopotamia invented cuneiform writing around 3200 BCE, using wedge-shaped styluses on wet clay tablets."
      }
    },
    {
      id: "wh_2600bce",
      year: -2600,
      dateDisplay: "c. 2600 BCE",
      title: "Mature Indus Valley Civilization & Urban Planning (Mohenjo-Daro & Harappa)",
      category: "political",
      era: "ancient",
      eraName: "Ancient Civilizations & Antiquity (~3500 BCE – 500 CE)",
      significance: "Flourishing of the bronze-age Indus Valley Civilization across modern Pakistan and northwest India, distinguished by sophisticated grid-plan cities, covered drainage networks, the Great Bath, and standardized weights.",
      keyFigures: ["Indus merchant-governors", "Craftsmen of Mohenjo-Daro and Harappa"],
      outcomes: [
        "Earliest known municipal sanitation and civil hydraulic engineering systems in world history.",
        "Extensive maritime and overland trade with Mesopotamia, Oman, and Dilmun.",
        "Undeciphered Indus script and egalitarian city layout without monumental palaces."
      ],
      cssExamNotes: "Pakistan Affairs, Ancient History of South Asia, Archaeology.",
      examMcq: {
        questionText: "The ancient city of Mohenjo-Daro, a flagship archaeological site of the Indus Valley Civilization, is located in which province of Pakistan?",
        options: { A: "Punjab", B: "Sindh (Larkana District)", C: "Balochistan", D: "Khyber Pakhtunkhwa" },
        correctAnswer: "B",
        explanation: "Mohenjo-Daro is situated in Larkana District, Sindh, along the right bank of the Indus River, and was discovered in 1922 by R.D. Banerji."
      }
    },
    {
      id: "wh_1750bce",
      year: -1750,
      dateDisplay: "c. 1750 BCE",
      title: "Promulgation of the Code of Hammurabi in Babylon",
      category: "political",
      era: "ancient",
      eraName: "Ancient Civilizations & Antiquity (~3500 BCE – 500 CE)",
      significance: "King Hammurabi of the First Babylonian Empire inscribed 282 legal edicts onto a massive diorite stele, establishing the ancient legal doctrine of Lex Talionis ('an eye for an eye') and presumption of innocence.",
      keyFigures: ["King Hammurabi of Babylon", "Shamash (God of Justice)"],
      outcomes: [
        "One of the earliest comprehensive codified legal systems establishing state-administered justice.",
        "Regulated property rights, contracts, family law, wages, and judicial accountability.",
        "Influenced biblical Mosaic law and subsequent Mediterranean legal traditions."
      ],
      cssExamNotes: "Jurisprudence, International Law, Ancient Political Thought.",
      examMcq: {
        questionText: "The Code of Hammurabi, famous for the principle of 'an eye for an eye', originated in which ancient empire?",
        options: { A: "Assyrian Empire", B: "Babylonian Empire", C: "Persian Empire", D: "Roman Empire" },
        correctAnswer: "B",
        explanation: "The Code of Hammurabi was promulgated by King Hammurabi of the First Babylonian Empire around 1750 BCE."
      }
    },
    {
      id: "wh_1259bce",
      year: -1259,
      dateDisplay: "1259 BCE",
      title: "Treaty of Kadesh: World's Earliest Recorded International Peace Treaty",
      category: "treaties",
      era: "ancient",
      eraName: "Ancient Civilizations & Antiquity (~3500 BCE – 500 CE)",
      significance: "Following the indecisive Battle of Kadesh in Syria, Pharaoh Ramesses II of Egypt and King Hattusili III of the Hittites concluded a formal bilateral peace treaty, non-aggression pact, and mutual defense alliance.",
      keyFigures: ["Ramesses II (The Great) of Egypt", "Hattusili III of the Hittites", "Queen Puduhepa"],
      outcomes: [
        "First known recorded diplomatic treaty establishing peace, mutual extradition of refugees, and joint defense.",
        "Bilingual treaty recorded in Egyptian hieroglyphs on temple walls and Akkadian cuneiform on clay tablets.",
        "A bronze replica of the Treaty of Kadesh is prominently displayed at the United Nations Headquarters in New York."
      ],
      cssExamNotes: "International Law, International Relations, Diplomatic History.",
      examMcq: {
        questionText: "Which two ancient powers signed the Treaty of Kadesh (1259 BCE), the earliest recorded formal peace accord in history?",
        options: { A: "Rome and Carthage", B: "Ancient Egypt and the Hittite Empire", C: "Athens and Sparta", D: "Persia and Babylon" },
        correctAnswer: "B",
        explanation: "The Treaty of Kadesh was signed between Pharaoh Ramesses II of Egypt and King Hattusili III of the Hittite Empire in 1259 BCE."
      }
    },
    {
      id: "wh_539bce",
      year: -539,
      dateDisplay: "539 BCE",
      title: "Cyrus the Great Conquers Babylon & Inscribes the Cyrus Cylinder",
      category: "political",
      era: "ancient",
      eraName: "Ancient Civilizations & Antiquity (~3500 BCE – 500 CE)",
      significance: "Cyrus the Great of the Persian Achaemenid Empire conquered Babylon without bloodshed, issued a clay charter declaring religious freedom, restored temples, and permitted exiled Jews to return to Jerusalem.",
      keyFigures: ["Cyrus II (The Great)", "Nabonidus of Babylon"],
      outcomes: [
        "Widely acknowledged as the world's first declaration of human rights and racial/religious tolerance.",
        "Established the largest multi-ethnic empire the ancient world had ever seen, spanning from Egypt to the Indus River.",
        "Pioneered the satrapy imperial administrative system and the Royal Road communication network."
      ],
      cssExamNotes: "International Law, Human Rights, Ancient History, IR.",
      examMcq: {
        questionText: "The Cyrus Cylinder (539 BCE), celebrated as an ancient precursor to human rights declarations, was issued by the founder of which empire?",
        options: { A: "Mauryan Empire", B: "Achaemenid Persian Empire", C: "Roman Empire", D: "Ottoman Empire" },
        correctAnswer: "B",
        explanation: "The Cyrus Cylinder was issued by Cyrus the Great, founder of the Achaemenid Persian Empire, after his conquest of Babylon in 539 BCE."
      }
    },
    {
      id: "wh_508bce",
      year: -508,
      dateDisplay: "508 BCE",
      title: "Cleisthenes Reforms Athens: Birth of Classical Direct Democracy",
      category: "political",
      era: "ancient",
      eraName: "Ancient Civilizations & Antiquity (~3500 BCE – 500 CE)",
      significance: "Athenian statesman Cleisthenes reorganized citizen tribes and established the Council of 500 (Boule) and Popular Assembly (Ecclesia), inaugurating 'demokratia' (rule by the people) in Athens.",
      keyFigures: ["Cleisthenes of Athens", "Solon", "Pericles"],
      outcomes: [
        "Replaced hereditary aristocratic rule with civic participation, lotteries (sortition), and ostracism.",
        "Laid the intellectual and institutional foundations for Western democratic theory and civic responsibility.",
        "Ushered in the Golden Age of Athens in philosophy, theater, architecture, and science."
      ],
      cssExamNotes: "Political Science, Western Political Thought, Greek Philosophy.",
      examMcq: {
        questionText: "Which Athenian statesman is historically regarded as the 'Father of Athenian Democracy' for his constitutional reforms in 508 BCE?",
        options: { A: "Pericles", B: "Cleisthenes", C: "Socrates", D: "Draco" },
        correctAnswer: "B",
        explanation: "Cleisthenes introduced constitutional reforms in 508 BCE that established direct democracy in classical Athens."
      }
    },
    {
      id: "wh_490bce",
      year: -490,
      dateDisplay: "490 – 479 BCE",
      title: "Greco-Persian Wars (Battles of Marathon, Thermopylae & Salamis)",
      category: "wars",
      era: "ancient",
      eraName: "Ancient Civilizations & Antiquity (~3500 BCE – 500 CE)",
      significance: "Greek city-states led by Athens and Sparta repelled two massive invasions by the Persian Empire under Darius I and Xerxes I, preserving Greek independence and civic institutions.",
      keyFigures: ["Darius I", "Xerxes I", "King Leonidas of Sparta", "Themistocles of Athens"],
      outcomes: [
        "Decisive Greek naval victory at Salamis (480 BCE) and land victory at Plataea (479 BCE) secured European civilization.",
        "Enabled the rise of the Delian League and Athens' Golden Age under Pericles.",
        "Chronicled by Herodotus, earning him the title 'Father of History'."
      ],
      cssExamNotes: "European History, Military History, Strategic Studies.",
      examMcq: {
        questionText: "At which 480 BCE naval battle did the Athenian fleet under Themistocles decisively defeat the Persian fleet of King Xerxes?",
        options: { A: "Battle of Marathon", B: "Battle of Salamis", C: "Battle of Actium", D: "Battle of Chaeronea" },
        correctAnswer: "B",
        explanation: "The Battle of Salamis in 480 BCE was a decisive naval engagement in the Saronic Gulf where the outnumbered Greek fleet defeated the Persian navy."
      }
    },
    {
      id: "wh_431bce",
      year: -431,
      dateDisplay: "431 – 404 BCE",
      title: "Peloponnesian War: Athens vs. Sparta & The 'Thucydides Trap'",
      category: "wars",
      era: "ancient",
      eraName: "Ancient Civilizations & Antiquity (~3500 BCE – 500 CE)",
      significance: "Catastrophic 27-year war between the Athenian maritime empire (Delian League) and the Spartan land confederacy (Peloponnesian League), devastating classical Greece and spawning political realism.",
      keyFigures: ["Pericles", "Thucydides (Historian)", "Lysander of Sparta", "Alcibiades"],
      outcomes: [
        "Sparta emerged victorious with Persian financial support, terminating Athenian maritime hegemony.",
        "Thucydides formulated the foundational realist dictum: 'The strong do what they can and the weak suffer what they must.'",
        "Genesis of the modern international relations concept 'Thucydides Trap' (a rising power threatening an established hegemon)."
      ],
      cssExamNotes: "International Relations, Classical Realism, Strategic Studies.",
      examMcq: {
        questionText: "The Peloponnesian War (431–404 BCE) between Athens and Sparta was chronicled by which foundational realist historian?",
        options: { A: "Herodotus", B: "Thucydides", C: "Polybius", D: "Xenophon" },
        correctAnswer: "B",
        explanation: "Thucydides wrote the History of the Peloponnesian War, analyzing the conflict through the lens of power politics, fear, and interstate balancing."
      }
    },
    {
      id: "wh_334bce",
      year: -334,
      dateDisplay: "334 – 323 BCE",
      title: "Campaigns of Alexander the Great & Dawn of the Hellenistic Age",
      category: "wars",
      era: "ancient",
      eraName: "Ancient Civilizations & Antiquity (~3500 BCE – 500 CE)",
      significance: "King Alexander III of Macedon conquered the Persian Empire, Egypt, Central Asia, and marched into the Punjab/Indus valley (Battle of the Hydaspes near modern Jhelum, Pakistan, 326 BCE), fusing Greek and Eastern cultures.",
      keyFigures: ["Alexander the Great", "King Porus of Punjab", "Darius III of Persia", "Aristotle"],
      outcomes: [
        "Defeated King Porus at the Battle of the Hydaspes (River Jhelum, Punjab) before his army mutinied at the Hyphasis (Beas).",
        "Created a sprawling empire spanning Greece to the Indus, giving birth to Gandhara Greco-Buddhist art.",
        "Founded Alexandria in Egypt, which became the Mediterranean's intellectual capital."
      ],
      cssExamNotes: "World History, Ancient South Asia, Gandhara Civilization, IR.",
      examMcq: {
        questionText: "Alexander the Great fought the famous Battle of the Hydaspes in 326 BCE against King Porus along which modern Pakistani river?",
        options: { A: "Indus River", B: "Jhelum River", C: "Chenab River", D: "Ravi River" },
        correctAnswer: "B",
        explanation: "The Battle of the Hydaspes was fought on the banks of the Hydaspes River (the modern Jhelum River in Punjab, Pakistan) in 326 BCE."
      }
    },
    {
      id: "wh_261bce",
      year: -261,
      dateDisplay: "261 BCE",
      title: "Kalinga War & Emperor Ashoka's Edicts of Non-Violence (Dhamma)",
      category: "political",
      era: "ancient",
      eraName: "Ancient Civilizations & Antiquity (~3500 BCE – 500 CE)",
      significance: "Traumatized by the catastrophic slaughter of over 100,000 people in the Kalinga War, Mauryan Emperor Ashoka renounced aggressive militarism (Digvijaya) in favor of moral conquest (Dharmavijaya) and Buddhism.",
      keyFigures: ["Emperor Ashoka the Great", "Chandragupta Maurya"],
      outcomes: [
        "Inscribed Rock and Pillar Edicts across South Asia (including Shahbaz Garhi and Mansehra in Khyber Pakhtunkhwa, Pakistan).",
        "Dispatched Buddhist missionaries to Sri Lanka, Central Asia, Greece, and Southeast Asia, transforming Buddhism into a global faith.",
        "Established state-sponsored veterinary hospitals, roadside wells, and religious tolerance."
      ],
      cssExamNotes: "South Asian History, Political Philosophy, Religious Studies.",
      examMcq: {
        questionText: "Following which bloody military campaign did Mauryan Emperor Ashoka renounce war and embrace Buddhism?",
        options: { A: "Battle of Panipat", B: "Kalinga War", C: "Battle of Hydaspes", D: "Battle of Buxar" },
        correctAnswer: "B",
        explanation: "The horrific human suffering witnessed during the conquest of Kalinga (261 BCE) led Emperor Ashoka to renounce war and embrace Buddhist principles of non-violence."
      }
    },
    {
      id: "wh_44bce",
      year: -44,
      dateDisplay: "44 – 27 BCE",
      title: "Assassination of Julius Caesar & Transition from Roman Republic to Empire",
      category: "political",
      era: "ancient",
      eraName: "Ancient Civilizations & Antiquity (~3500 BCE – 500 CE)",
      significance: "The assassination of Dictator Julius Caesar on the Ides of March (44 BCE) triggered civil wars that culminated in his adopted heir Octavian becoming 'Augustus', founding the Roman Empire and Pax Romana in 27 BCE.",
      keyFigures: ["Julius Caesar", "Marcus Brutus", "Mark Antony", "Augustus Caesar (Octavian)"],
      outcomes: [
        "Terminated the 500-year Roman Republic, replacing senatorial oligarchy with autocratic imperial rule (Principate).",
        "Inaugurated the 'Pax Romana' (Roman Peace), two centuries of relative Mediterranean stability and prosperity.",
        "Codified Roman civil law and built massive transcontinental road and aqueduct networks."
      ],
      cssExamNotes: "European History, Constitutional Law, Roman Law.",
      examMcq: {
        questionText: "Who became the first official Emperor of the Roman Empire in 27 BCE, ending the Roman Republic?",
        options: { A: "Julius Caesar", B: "Augustus (Octavian)", C: "Nero", D: "Marcus Aurelius" },
        correctAnswer: "B",
        explanation: "Octavian was granted the title 'Augustus' by the Roman Senate in 27 BCE, becoming the first Emperor of Rome."
      }
    },
    {
      id: "wh_313ce",
      year: 313,
      dateDisplay: "313 CE",
      title: "Edict of Milan: Legalization of Christianity in the Roman Empire",
      category: "treaties",
      era: "ancient",
      eraName: "Ancient Civilizations & Antiquity (~3500 BCE – 500 CE)",
      significance: "Roman Emperors Constantine I and Licinius issued the joint proclamation granting religious tolerance throughout the empire, terminating centuries of persecution of Christians and returning confiscated property.",
      keyFigures: ["Constantine the Great", "Licinius"],
      outcomes: [
        "Transformed Christianity from a persecuted underground sect into a favored imperial religion.",
        "Paved the way for the Council of Nicaea (325 CE) and Christianity becoming Rome's official state religion under Theodosius I (380 CE).",
        "Constantine moved the imperial capital to Byzantium, renaming it Constantinople (330 CE)."
      ],
      cssExamNotes: "European History, Church History, History of Human Rights.",
      examMcq: {
        questionText: "Which Roman imperial decree issued by Constantine the Great in 313 CE granted religious freedom to Christians across the empire?",
        options: { A: "Peace of Augsburg", B: "Edict of Milan", C: "Edict of Nantes", D: "Council of Nicaea" },
        correctAnswer: "B",
        explanation: "The Edict of Milan, issued in 313 CE by Constantine I and Licinius, permanently established religious tolerance for Christians in the Roman Empire."
      }
    },
    {
      id: "wh_476ce",
      year: 476,
      dateDisplay: "476 CE",
      title: "Fall of the Western Roman Empire & Beginning of the Middle Ages",
      category: "political",
      era: "ancient",
      eraName: "Ancient Civilizations & Antiquity (~3500 BCE – 500 CE)",
      significance: "Germanic chieftain Odoacer deposed the last Western Roman Emperor Romulus Augustulus, marking the formal collapse of central Roman authority in Western Europe and the onset of the Early Middle Ages.",
      keyFigures: ["Romulus Augustulus", "Odoacer"],
      outcomes: [
        "Fragmentation of Western Europe into regional feudal kingdoms (Franks, Visigoths, Anglo-Saxons, Lombards).",
        "The Catholic Church in Rome emerged as the paramount unifying institutional authority in Europe.",
        "The Eastern Roman Empire (Byzantine Empire) endured for another millennium until 1453 CE."
      ],
      cssExamNotes: "European History, Medieval History, Political Science.",
      examMcq: {
        questionText: "The deposition of which last Western Roman Emperor in 476 CE is traditionally considered the end of the Western Roman Empire?",
        options: { A: "Julius Caesar", B: "Romulus Augustulus", C: "Constantine XI", D: "Nero" },
        correctAnswer: "B",
        explanation: "Child emperor Romulus Augustulus was deposed in September 476 CE by Germanic general Odoacer, signaling the fall of ancient Rome."
      }
    },

    // ========================================================
    // MEDIEVAL & POST-CLASSICAL ERA (500 – 1450 CE)
    // ========================================================
    {
      id: "wh_622ce",
      year: 622,
      dateDisplay: "622 CE",
      title: "The Hijrah & The Constitution of Medina (Mithaq al-Madina)",
      category: "treaties",
      era: "medieval",
      eraName: "Medieval & Islamic Golden Age (500 – 1450 CE)",
      significance: "Prophet Muhammad (PBUH) migrated from Mecca to Yathrib (Medina), marking Year 1 of the Islamic Hijri calendar, and drafted the Constitution of Medina—the world's first written constitution for a multi-religious state.",
      keyFigures: ["Prophet Muhammad (PBUH)", "Ansar and Muhajirun of Medina", "Jewish tribes of Medina"],
      outcomes: [
        "Established the first Islamic state predicated on the rule of law, mutual defense, and religious pluralism.",
        "United the warring Aus and Khazraj tribes and guaranteed autonomous communal rights for Jewish tribes.",
        "Became the foundational constitutional precedent for Islamic jurisprudence and statecraft."
      ],
      cssExamNotes: "Islamic History, Constitutional Law, Political Science, Pakistan Affairs.",
      examMcq: {
        questionText: "The Constitution of Medina (Mithaq al-Madina), drafted by Prophet Muhammad (PBUH) in 622 CE, is renowned in constitutional history for:",
        options: { A: "Abolishing all taxes", B: "Being the first written constitution of a pluralistic, multi-religious state", C: "Banning foreign trade", D: "Creating a monarchical dynasty" },
        correctAnswer: "B",
        explanation: "The Constitution of Medina is recognized as the world's earliest written constitution, creating a civic compact guaranteeing rights and responsibilities across Muslims, Jews, and other tribes."
      }
    },
    {
      id: "wh_628ce",
      year: 628,
      dateDisplay: "628 CE",
      title: "Treaty of Hudaybiyyah: Strategic Milestone in Islamic Diplomacy",
      category: "treaties",
      era: "medieval",
      eraName: "Medieval & Islamic Golden Age (500 – 1450 CE)",
      significance: "Prophet Muhammad (PBUH) negotiated a 10-year non-aggression peace treaty with the Quraysh of Mecca at al-Hudaybiyyah, described in the Quran as 'Fathan Mubeena' (a clear victory).",
      keyFigures: ["Prophet Muhammad (PBUH)", "Suhayl ibn Amr", "Hazrat Ali ibn Abi Talib"],
      outcomes: [
        "Secured international diplomatic recognition of the Muslim state in Medina from the Quraysh.",
        "Created peaceful conditions that permitted an unprecedented demographic expansion of Islam across Arabia.",
        "Demonstrated the supremacy of pragmatic peace diplomacy and contractual sanctity in statecraft."
      ],
      cssExamNotes: "Islamic Studies, International Relations, Diplomatic History.",
      examMcq: {
        questionText: "The Treaty of Hudaybiyyah (628 CE), which established a 10-year truce between Muslims and the Quraysh, was described in Surah Al-Fath as:",
        options: { A: "A defensive compromise", B: "Fathan Mubeena (A Manifest Victory)", C: "A temporary retreat", D: "A commercial pact" },
        correctAnswer: "B",
        explanation: "Surah Al-Fath (48:1) refers to the Treaty of Hudaybiyyah as 'Fathan Mubeena' (a manifest victory) because the peace enabled Islam to spread rapidly throughout Arabia."
      }
    },
    {
      id: "wh_712ce",
      year: 712,
      dateDisplay: "712 CE",
      title: "Umayyad Conquest of Sindh by Muhammad bin Qasim (Bab-ul-Islam)",
      category: "wars",
      era: "medieval",
      eraName: "Medieval & Islamic Golden Age (500 – 1450 CE)",
      significance: "17-year-old Umayyad general Muhammad bin Qasim defeated Raja Dahir at the Battle of Rawar, establishing Muslim governance in Sindh and Multan, earning Sindh the title 'Bab-ul-Islam' (Gateway of Islam).",
      keyFigures: ["Muhammad bin Qasim", "Raja Dahir", "Hajjaj bin Yousuf", "Caliph Al-Walid I"],
      outcomes: [
        "Inaugurated centuries of Islamic political, judicial, and cultural administration in South Asia.",
        "Extended religious tolerance to local Hindu and Buddhist populations as 'Ahl al-Dhimma' (protected citizens).",
        "Opened direct academic exchange between Arab scholars and Indian mathematicians (transmission of the zero/decimal system)."
      ],
      cssExamNotes: "Pakistan Affairs, Islamic History, South Asian History.",
      examMcq: {
        questionText: "Which Umayyad general defeated Raja Dahir in 712 CE, leading to Sindh being named 'Bab-ul-Islam'?",
        options: { A: "Tariq bin Ziyad", B: "Muhammad bin Qasim", C: "Qutaiba bin Muslim", D: "Mahmud of Ghazni" },
        correctAnswer: "B",
        explanation: "Muhammad bin Qasim conquered Sindh in 712 CE during the reign of Umayyad Caliph Al-Walid I, under orders from governor Hajjaj bin Yousuf."
      }
    },
    {
      id: "wh_732ce",
      year: 732,
      dateDisplay: "732 CE",
      title: "Battle of Tours (Poitiers): Halting of Umayyad Advance in Western Europe",
      category: "wars",
      era: "medieval",
      eraName: "Medieval & Islamic Golden Age (500 – 1450 CE)",
      significance: "Frankish leader Charles Martel defeated an Umayyad army led by Abdul Rahman Al-Ghafiqi between Tours and Poitiers in modern France, setting the northern boundary of Muslim rule in Europe to the Iberian Peninsula.",
      keyFigures: ["Charles Martel (The Hammer)", "Abdul Rahman Al-Ghafiqi"],
      outcomes: [
        "Halted the northward expansion of the Umayyad Caliphate from Al-Andalus (Spain) into Western Europe.",
        "Consolidated the Carolingian dynasty in France, paving the way for Charlemagne's empire.",
        "Solidified the Pyrenees Mountains as the historical geopolitical frontier of Islamic Iberia."
      ],
      cssExamNotes: "European History, Islamic History, Military Strategy.",
      examMcq: {
        questionText: "Which Frankish commander defeated the Umayyad forces at the Battle of Tours in 732 CE?",
        options: { A: "Charlemagne", B: "Charles Martel", C: "Pepin the Short", D: "Clovis I" },
        correctAnswer: "B",
        explanation: "Charles Martel led the Frankish infantry to victory against Umayyad forces under Abdul Rahman Al-Ghafiqi at the Battle of Tours in 732 CE."
      }
    },
    {
      id: "wh_750ce",
      year: 750,
      dateDisplay: "750 – 1258 CE",
      title: "Establishment of the Abbasid Caliphate & The Islamic Golden Age",
      category: "discoveries",
      era: "medieval",
      eraName: "Medieval & Islamic Golden Age (500 – 1450 CE)",
      significance: "The Abbasids founded Baghdad (762 CE) and established the House of Wisdom (Bayt al-Hikma), triggering a golden age in algebra (Al-Khwarizmi), medicine (Ibn Sina/Avicenna), optics (Ibn al-Haytham), and philosophy (Ibn Rushd/Averroes).",
      keyFigures: ["Caliph Harun al-Rashid", "Al-Ma'mun", "Al-Khwarizmi", "Ibn Sina", "Ibn al-Haytham"],
      outcomes: [
        "Translation of Greek, Persian, and Sanskrit scientific texts into Arabic, preserving and synthesizing global knowledge.",
        "Invented algebra (Kitab al-Jabr wa-l-Muqabala), modern clinical medicine (The Canon of Medicine), and the scientific method in optics.",
        "Transmitted paper manufacturing technology from Tang China to Europe, revolutionizing scholarly dissemination."
      ],
      cssExamNotes: "Islamic History, General Science, History of Philosophy.",
      examMcq: {
        questionText: "The legendary intellectual academy 'Bayt al-Hikma' (House of Wisdom) was established in which capital city during the Islamic Golden Age?",
        options: { A: "Damascus", B: "Baghdad", C: "Cairo", D: "Cordoba" },
        correctAnswer: "B",
        explanation: "Bayt al-Hikma was founded in Baghdad under Abbasid Caliphs Harun al-Rashid and Al-Ma'mun, serving as the world's premier center for translation and scientific discovery."
      }
    },
    {
      id: "wh_1066ce",
      year: 1066,
      dateDisplay: "October 14, 1066",
      title: "Norman Conquest of England & Battle of Hastings",
      category: "wars",
      era: "medieval",
      eraName: "Medieval & Islamic Golden Age (500 – 1450 CE)",
      significance: "William, Duke of Normandy, defeated Anglo-Saxon King Harold Godwinson at the Battle of Hastings, bringing Norman-French feudalism, language, law, and administrative census (Domesday Book) to England.",
      keyFigures: ["William the Conqueror", "King Harold Godwinson"],
      outcomes: [
        "Transformed the English language through the fusion of Anglo-Saxon Germanic roots with Norman French vocabulary.",
        "Established a centralized feudal monarchy and commissioned the Domesday Book in 1086.",
        "Tied English dynastic geopolitics permanently to continental European politics."
      ],
      cssExamNotes: "English History, European History, Medieval Feudalism.",
      examMcq: {
        questionText: "Who conquered England following his decisive victory at the Battle of Hastings in October 1066?",
        options: { A: "Edward the Confessor", B: "William, Duke of Normandy", C: "Richard the Lionheart", D: "Henry II" },
        correctAnswer: "B",
        explanation: "William, Duke of Normandy (thereafter known as William the Conqueror) invaded England and won the Battle of Hastings on October 14, 1066."
      }
    },
    {
      id: "wh_1095ce",
      year: 1095,
      dateDisplay: "1095 – 1291 CE",
      title: "The Crusades & Saladin's Liberation of Jerusalem (Battle of Hattin 1187)",
      category: "wars",
      era: "medieval",
      eraName: "Medieval & Islamic Golden Age (500 – 1450 CE)",
      significance: "Pope Urban II launched the First Crusade at the Council of Clermont (1095) capturing Jerusalem in 1099. In 1187, Sultan Salahuddin Ayyubi (Saladin) defeated Crusader forces at the Battle of Hattin, liberating Jerusalem with exemplary magnanimity.",
      keyFigures: ["Pope Urban II", "Sultan Salahuddin Ayyubi (Saladin)", "Richard I (The Lionheart)", "Guy of Lusignan"],
      outcomes: [
        "Saladin showed legendary chivalry and clemency, sparing Christian civilians and signing the Treaty of Jaffa (1192) granting pilgrims peaceful access.",
        "Exposed Western Europe to advanced Islamic science, medicine, architecture, and Mediterranean commerce.",
        "Accelerated the erosion of European feudalism through the commercial expansion of Italian maritime city-states (Venice, Genoa)."
      ],
      cssExamNotes: "Islamic History, European History, International Relations.",
      examMcq: {
        questionText: "At which decisive battle in July 1187 did Sultan Salahuddin Ayyubi defeat Crusader armies, opening the way to liberate Jerusalem?",
        options: { A: "Battle of Yarmouk", B: "Battle of Hattin", C: "Battle of Ain Jalut", D: "Battle of Manzikert" },
        correctAnswer: "B",
        explanation: "The Battle of Hattin in July 1187 saw Saladin decisively crush the Crusader Kingdom of Jerusalem, reclaiming the holy city shortly after."
      }
    },
    {
      id: "wh_1215ce",
      year: 1215,
      dateDisplay: "June 15, 1215",
      title: "Magna Carta Libertatum: Foundation of Constitutional Law",
      category: "political",
      era: "medieval",
      eraName: "Medieval & Islamic Golden Age (500 – 1450 CE)",
      significance: "English rebel barons compelled King John to seal the 'Great Charter' at Runnymede, legally establishing for the first time that the monarch is not above the law and guaranteeing due process (Clause 39).",
      keyFigures: ["King John of England", "Archbishop Stephen Langton", "Rebel Barons"],
      outcomes: [
        "Established the historic legal axiom that sovereign authority is bound by law and cannot levy taxes without consent.",
        "Enshrined the rights of habeas corpus, trial by a jury of peers, and protection from arbitrary imprisonment.",
        "Became the foundational inspiration for the British unwritten constitution, the US Bill of Rights, and modern constitutionalism."
      ],
      cssExamNotes: "Constitutional Law, Political Science, British History, Jurisprudence.",
      examMcq: {
        questionText: "Which English monarch was forced by his barons to seal the Magna Carta at Runnymede in June 1215?",
        options: { A: "King Henry VIII", B: "King John", C: "King Charles I", D: "King Richard I" },
        correctAnswer: "B",
        explanation: "King John of England sealed the Magna Carta on June 15, 1215, limiting royal prerogative and affirming legal due process."
      }
    },
    {
      id: "wh_1258ce",
      year: 1258,
      dateDisplay: "February 1258",
      title: "Siege of Baghdad by the Mongols & Fall of the Abbasid Caliphate",
      category: "wars",
      era: "medieval",
      eraName: "Medieval & Islamic Golden Age (500 – 1450 CE)",
      significance: "Mongol forces under Hulagu Khan captured and sacked Baghdad, executed the last Abbasid Caliph Al-Musta'sim, destroyed the House of Wisdom, and threw priceless manuscripts into the Tigris River.",
      keyFigures: ["Hulagu Khan", "Caliph Al-Musta'sim", "Nasir al-Din al-Tusi"],
      outcomes: [
        "Terminated the 500-year Abbasid Caliphate and devastated the central intellectual capital of the Islamic world.",
        "Halted months later in 1260 at the Battle of Ain Jalut in Palestine, where the Mamluks of Egypt decisively defeated the Mongols.",
        "The Mongol Ilkhanate rulers subsequently converted to Islam, fostering Persian Islamic renaissance."
      ],
      cssExamNotes: "Islamic History, Asian History, Military History.",
      examMcq: {
        questionText: "Which Mongol commander sacked Baghdad in 1258 CE, executing the last Abbasid Caliph and ending the Caliphate?",
        options: { A: "Genghis Khan", B: "Hulagu Khan", C: "Kublai Khan", D: "Batu Khan" },
        correctAnswer: "B",
        explanation: "Hulagu Khan, grandson of Genghis Khan, captured and destroyed Baghdad in February 1258 CE."
      }
    },
    {
      id: "wh_1347ce",
      year: 1347,
      dateDisplay: "1347 – 1351 CE",
      title: "The Black Death (Bubonic Plague Pandemic) Sweeps Across Eurasia",
      category: "discoveries",
      era: "medieval",
      eraName: "Medieval & Islamic Golden Age (500 – 1450 CE)",
      significance: "A devastating bubonic plague pandemic caused by the bacterium Yersinia pestis spread along Silk Road and maritime trade routes, killing an estimated 75 to 200 million people across Asia, the Middle East, and Europe.",
      keyFigures: ["Ibn Battuta (Eyewitness chronicler)", "Giovanni Boccaccio"],
      outcomes: [
        "Wiped out between 30% and 60% of Europe's entire population and large swathes of the Islamic world.",
        "Acute labor shortages shattered European feudal serfdom, as peasants demanded higher wages and mobility.",
        "Accelerated modernization of public health sanitation, quarantine procedures, and early empirical medical science."
      ],
      cssExamNotes: "Social History, European History, Epidemiology.",
      examMcq: {
        questionText: "What was the primary socio-economic consequence of the Black Death (1347–1351) on European society?",
        options: { A: "Reinforced absolute serfdom", B: "Severe labor shortages that dismantled feudal serfdom and raised peasant wages", C: "Total collapse of urban centers permanently", D: "Abolition of all monarchies" },
        correctAnswer: "B",
        explanation: "The demographic devastation created extreme labor shortages, empowering surviving peasants to bargain for wages and breaking the bonds of feudal serfdom."
      }
    },

    // ========================================================
    // EARLY MODERN ERA, RENAISSANCE & ENLIGHTENMENT (1450 – 1789 CE)
    // ========================================================
    {
      id: "wh_1440ce",
      year: 1440,
      dateDisplay: "c. 1440 – 1450 CE",
      title: "Johannes Gutenberg Invents the Moveable Type Printing Press",
      category: "discoveries",
      era: "early_modern",
      eraName: "Renaissance, Reformation & Enlightenment (1450 – 1789 CE)",
      significance: "German goldsmith Johannes Gutenberg synthesized movable metal type, oil-based ink, and a wooden screw press in Mainz, inaugurating the Printing Revolution and mass democratization of knowledge.",
      keyFigures: ["Johannes Gutenberg", "Johann Fust"],
      outcomes: [
        "Reduced book production costs by over 90%, ending the monopoly of hand-copied monastic manuscripts.",
        "Catalyzed the European Renaissance, the Scientific Revolution, and the Protestant Reformation.",
        "Fundamentally accelerated literacy, vernacular national languages, and the rise of a public political sphere."
      ],
      cssExamNotes: "European History, Media Studies, Intellectual History.",
      examMcq: {
        questionText: "Johannes Gutenberg developed the moveable metal type printing press in which century, transforming European literacy?",
        options: { A: "13th Century", B: "15th Century (c. 1440s)", C: "17th Century", D: "18th Century" },
        correctAnswer: "B",
        explanation: "Gutenberg perfected the movable type printing press in Mainz, Germany, around the 1440s and printed his celebrated 42-line Gutenberg Bible around 1455."
      }
    },
    {
      id: "wh_1453ce",
      year: 1453,
      dateDisplay: "May 29, 1453",
      title: "Fall of Constantinople to Ottoman Sultan Mehmed II (Fatih)",
      category: "wars",
      era: "early_modern",
      eraName: "Renaissance, Reformation & Enlightenment (1450 – 1789 CE)",
      significance: "21-year-old Ottoman Sultan Mehmed II breached the massive Theodosian walls using massive gunpowder cannons (supergun Basilic), ending the 1,123-year-old Byzantine Empire and establishing Istanbul as the Ottoman capital.",
      keyFigures: ["Sultan Mehmed II (The Conqueror)", "Emperor Constantine XI Palaiologos", "Orban (Cannon engineer)"],
      outcomes: [
        "Marked the definitive end of the Middle Ages and established the Ottoman Empire as a dominant transcontinental superpower.",
        "Greek scholars fled to Italian city-states with classical Greek and Roman texts, heavily accelerating the Renaissance.",
        "Ottoman control of land Silk Road routes prompted Western European kingdoms to seek oceanic trade routes to India (Age of Discovery)."
      ],
      cssExamNotes: "Islamic History, European History, Ottoman Studies, Geopolitics.",
      examMcq: {
        questionText: "In which year did Ottoman Sultan Mehmed II conquer Constantinople, ending the Byzantine Empire?",
        options: { A: "1299", B: "1453", C: "1526", D: "1683" },
        correctAnswer: "B",
        explanation: "Constantinople fell to Sultan Mehmed II on May 29, 1453, concluding the Byzantine Empire and initiating the Ottoman imperial golden age."
      }
    },
    {
      id: "wh_1492ce",
      year: 1492,
      dateDisplay: "October 12, 1492",
      title: "Christopher Columbus Reaches the Americas & The Columbian Exchange",
      category: "discoveries",
      era: "early_modern",
      eraName: "Renaissance, Reformation & Enlightenment (1450 – 1789 CE)",
      significance: "Genoese navigator Christopher Columbus, sailing under the Spanish crown of Ferdinand and Isabella, made landfall in the Bahamas, permanently connecting the Old World and the New World.",
      keyFigures: ["Christopher Columbus", "Queen Isabella I of Castile", "King Ferdinand II of Aragon"],
      outcomes: [
        "Inaugurated the 'Columbian Exchange'—the global transfer of crops (potatoes, maize, tomatoes, tobacco) and livestock.",
        "Triggered European colonization, silver extraction from the Americas, and catastrophic demographic collapse of indigenous populations from Afro-Eurasian pathogens.",
        "Led directly to the Treaty of Tordesillas (1494), partitioning the non-European world between Spain and Portugal."
      ],
      cssExamNotes: "US History, European History, World Geography, Economic History.",
      examMcq: {
        questionText: "The 1494 Treaty of Tordesillas, brokered by Pope Alexander VI, divided the newly discovered non-European world between which two maritime empires?",
        options: { A: "England and France", B: "Spain and Portugal", C: "Netherlands and Spain", D: "France and Portugal" },
        correctAnswer: "B",
        explanation: "The Treaty of Tordesillas (1494) drew a meridian line 370 leagues west of Cape Verde, allocating newly discovered lands west of the line to Spain and east to Portugal."
      }
    },
    {
      id: "wh_1517ce",
      year: 1517,
      dateDisplay: "October 31, 1517",
      title: "Martin Luther Posts 95 Theses: The Protestant Reformation",
      category: "revolutions",
      era: "early_modern",
      eraName: "Renaissance, Reformation & Enlightenment (1450 – 1789 CE)",
      significance: "German monk and theologian Martin Luther nailed his 95 Theses to the door of Wittenberg Castle church attacking the Catholic sale of indulgences, sparking the Protestant Reformation and shattering Western religious unity.",
      keyFigures: ["Martin Luther", "John Calvin", "Pope Leo X", "Emperor Charles V"],
      outcomes: [
        "Challenged papal supremacy, advocating Sola Fide (faith alone), Sola Scriptura (scripture alone), and vernacular Bible translations.",
        "Divided Europe into Protestant North and Catholic South, igniting over a century of devastating religious wars.",
        "Stimulated the Catholic Counter-Reformation (Council of Trent, Jesuit order) and promoted individualism and modern capitalism (Weber's thesis)."
      ],
      cssExamNotes: "European History, Sociology, History of Religion.",
      examMcq: {
        questionText: "Martin Luther ignited the Protestant Reformation in 1517 primarily by protesting against which practice of the Roman Catholic Church?",
        options: { A: "Papal infallibility", B: "The sale of Indulgences", C: "Monastic vows", D: "Latin liturgy" },
        correctAnswer: "B",
        explanation: "Luther's 95 Theses were written specifically to denounce the corrupt sale of papal indulgences (certificates remitting temporal punishment for sin in purgatory)."
      }
    },
    {
      id: "wh_1526ce",
      year: 1526,
      dateDisplay: "April 21, 1526",
      title: "First Battle of Panipat & Foundation of the Mughal Empire by Babur",
      category: "wars",
      era: "early_modern",
      eraName: "Renaissance, Reformation & Enlightenment (1450 – 1789 CE)",
      significance: "Zahir-ud-Din Muhammad Babur, a descendant of Timur and Genghis Khan, defeated Delhi Sultan Ibrahim Lodi using advanced gunpowder artillery and flanking cavalry tactics (Tulghuma), establishing the Mughal Empire in South Asia.",
      keyFigures: ["Zahir-ud-Din Babur", "Ibrahim Lodi", "Ustad Ali Quli (Artillery commander)"],
      outcomes: [
        "Inaugurated over three centuries of glorious Mughal administration, Indo-Islamic architecture, and centralized governance.",
        "First major military conflict in South Asia decided by matchlocks, field artillery, and mobile battle formations.",
        "Reached its zenith under Akbar the Great, Shah Jahan (Taj Mahal), and Aurangzeb Alamgir, generating 25% of world GDP."
      ],
      cssExamNotes: "Pakistan Affairs, Indo-Pak History, Military History.",
      examMcq: {
        questionText: "Which military tactic and technological advantage enabled Babur to defeat Ibrahim Lodi's much larger army at the First Battle of Panipat in 1526?",
        options: { A: "War elephants and cavalry charges", B: "Field artillery cannons and the Tulghuma flanking encirclement", C: "Naval blockade", D: "Siege warfare and starvation" },
        correctAnswer: "B",
        explanation: "Babur utilized Ottoman-style field cannons commanded by Ustad Ali Quli and matched them with the Tulghuma flanking cavalry system to encircle and crush Lodi's forces."
      }
    },
    {
      id: "wh_1543ce",
      year: 1543,
      dateDisplay: "1543 CE",
      title: "Nicolaus Copernicus Publishes Heliocentric Model (Scientific Revolution)",
      category: "discoveries",
      era: "early_modern",
      eraName: "Renaissance, Reformation & Enlightenment (1450 – 1789 CE)",
      significance: "Polish astronomer Nicolaus Copernicus published *De revolutionibus orbium coelestium* on his deathbed, mathematically proving that the Earth and planets revolve around the Sun, dethroning Ptolemaic geocentrism.",
      keyFigures: ["Nicolaus Copernicus", "Johannes Kepler", "Galileo Galilei"],
      outcomes: [
        "Triggered the Scientific Revolution, moving humanity from dogmatic scholasticism to empirical observation and mathematical physics.",
        "Later verified and expanded by Johannes Kepler's laws of planetary motion and Galileo Galilei's telescopic observations.",
        "Fundamentally altered humanity's perception of its place in the universe."
      ],
      cssExamNotes: "General Science, Philosophy of Science, European History.",
      examMcq: {
        questionText: "Which landmark astronomical work published by Nicolaus Copernicus in 1543 proposed that the Sun, rather than the Earth, is at the center of the solar system?",
        options: { A: "Principia Mathematica", B: "De revolutionibus orbium coelestium", C: "Dialogue Concerning the Two Chief World Systems", D: "Almagest" },
        correctAnswer: "B",
        explanation: "Copernicus published 'De revolutionibus orbium coelestium' (On the Revolutions of the Heavenly Spheres) in 1543, establishing the heliocentric theory."
      }
    },
    {
      id: "wh_1648ce",
      year: 1648,
      dateDisplay: "October 24, 1648",
      title: "Peace of Westphalia: Birth of the Sovereign Nation-State System",
      category: "treaties",
      era: "early_modern",
      eraName: "Renaissance, Reformation & Enlightenment (1450 – 1789 CE)",
      significance: "The twin treaties of Münster and Osnabrück concluded the devastating Thirty Years' War in Europe, establishing the foundational principle of 'Westphalian Sovereignty'—external non-intervention, territorial integrity, and legal equality of sovereign states.",
      keyFigures: ["Cardinal Mazarin", "Ferdinand III, Holy Roman Emperor", "Queen Christina of Sweden"],
      outcomes: [
        "Inaugurated the modern international political order based on sovereign territorial states rather than religious or imperial hierarchies.",
        "Codified the principle of non-interference in the internal affairs of sovereign states (reaffirmed in UN Charter Article 2).",
        "Recognized the independence of the Swiss Confederation and the Dutch Republic."
      ],
      cssExamNotes: "International Relations, International Law, Political Science, European History.",
      examMcq: {
        questionText: "The Peace of Westphalia (1648), which ended the Thirty Years' War, is recognized in International Relations as the genesis of:",
        options: { A: "The European Union", B: "The sovereign nation-state system and non-interference principle", C: "The League of Nations", D: "Colonial mercantile companies" },
        correctAnswer: "B",
        explanation: "The Peace of Westphalia established the principle of Westphalian sovereignty: that each state has exclusive sovereignty over its domestic territory and affairs, free from external intervention."
      }
    },
    {
      id: "wh_1687ce",
      year: 1687,
      dateDisplay: "July 5, 1687",
      title: "Isaac Newton Publishes Philosophiae Naturalis Principia Mathematica",
      category: "discoveries",
      era: "early_modern",
      eraName: "Renaissance, Reformation & Enlightenment (1450 – 1789 CE)",
      significance: "Sir Isaac Newton articulated the three universal laws of motion and the law of universal gravitation, unifying celestial and terrestrial physics in what is considered the most influential scientific book in history.",
      keyFigures: ["Sir Isaac Newton", "Edmond Halley", "Robert Hooke"],
      outcomes: [
        "Provided the mathematical and theoretical bedrock for classical mechanics that underpinned the Industrial Revolution.",
        "Established the mechanistic worldview: that the natural universe operates predictably under universal physical laws.",
        "Invented infinitesimal calculus (co-discovered with Gottfried Wilhelm Leibniz) to solve dynamical problems."
      ],
      cssExamNotes: "General Science, History of Science, Physics.",
      examMcq: {
        questionText: "Sir Isaac Newton formulated the three universal laws of motion and universal gravitation in which 1687 magnum opus?",
        options: { A: "Opticks", B: "Philosophiae Naturalis Principia Mathematica", C: "Novum Organum", D: "The Structure of Scientific Revolutions" },
        correctAnswer: "B",
        explanation: "Newton published 'Philosophiae Naturalis Principia Mathematica' (Mathematical Principles of Natural Philosophy) in 1687."
      }
    },
    {
      id: "wh_1688ce",
      year: 1688,
      dateDisplay: "1688 – 1689 CE",
      title: "The Glorious Revolution & The English Bill of Rights (1689)",
      category: "revolutions",
      era: "early_modern",
      eraName: "Renaissance, Reformation & Enlightenment (1450 – 1789 CE)",
      significance: "Parliament deposed Catholic King James II and invited William III of Orange and Mary II to the throne, enacting the Bill of Rights 1689 which permanently established Parliamentary Supremacy over the royal crown.",
      keyFigures: ["William III of Orange", "Mary II", "King James II", "John Locke"],
      outcomes: [
        "Permanently abolished royal absolute monarchy in Britain, establishing a constitutional parliamentary monarchy.",
        "Bill of Rights 1689 guaranteed free parliamentary elections, free speech in Parliament, and prohibited cruel and unusual punishment.",
        "John Locke published his 'Two Treatises of Government' (1689), justifying the revolution and outlining social contract theory."
      ],
      cssExamNotes: "Political Science, Constitutional Law, British History, Western Political Thought.",
      examMcq: {
        questionText: "The Glorious Revolution of 1688 in England is historically celebrated for establishing which constitutional principle?",
        options: { A: "Divine Right of Kings", B: "Parliamentary Supremacy over the Crown", C: "Absolute Republicanism", D: "Abolition of the House of Lords" },
        correctAnswer: "B",
        explanation: "The Glorious Revolution ended royal absolutism in England and established Parliamentary Supremacy through the 1689 Bill of Rights."
      }
    },
    {
      id: "wh_1769ce",
      year: 1769,
      dateDisplay: "1769 CE",
      title: "James Watt Patents the Separate Condenser Steam Engine (Industrial Revolution)",
      category: "discoveries",
      era: "early_modern",
      eraName: "Renaissance, Reformation & Enlightenment (1450 – 1789 CE)",
      significance: "Scottish engineer James Watt patented his transformative separate condenser steam engine, exponentially increasing fuel efficiency and converting heat into mechanical rotary motion, propelling the Industrial Revolution.",
      keyFigures: ["James Watt", "Matthew Boulton", "Thomas Newcomen"],
      outcomes: [
        "Decoupled manufacturing from geographical proximity to running water, enabling the explosion of urban mechanized factories.",
        "Revolutionized global transportation through steam locomotives and steamships, shrinking global travel times.",
        "Created industrial capitalism, urban working-class proletariats, and rapid European economic predominance."
      ],
      cssExamNotes: "European History, Economics, History of Technology.",
      examMcq: {
        questionText: "Whose crucial invention of the separate condenser steam engine in 1769 powered the rapid expansion of the Industrial Revolution?",
        options: { A: "George Stephenson", B: "James Watt", C: "Richard Arkwright", D: "Eli Whitney" },
        correctAnswer: "B",
        explanation: "James Watt patented the separate condenser in 1769, turning the steam engine into a practical, fuel-efficient source of rotary mechanical power."
      }
    },
    {
      id: "wh_1776ce",
      year: 1776,
      dateDisplay: "July 4, 1776",
      title: "United States Declaration of Independence",
      category: "revolutions",
      era: "early_modern",
      eraName: "Renaissance, Reformation & Enlightenment (1450 – 1789 CE)",
      significance: "The Second Continental Congress in Philadelphia unanimously adopted the Declaration of Independence drafted by Thomas Jefferson, severing thirteen North American colonies from Great Britain based on natural rights.",
      keyFigures: ["Thomas Jefferson", "Benjamin Franklin", "John Adams", "George Washington"],
      outcomes: [
        "Articulated immortal democratic ideals: 'All men are created equal... with inalienable rights: Life, Liberty and the pursuit of Happiness.'",
        "Triggered the American Revolutionary War and the establishment of the world's first modern constitutional democratic republic.",
        "Concluded with the 1783 Treaty of Paris in which Britain formally recognized the sovereign independence of the United States."
      ],
      cssExamNotes: "US History, Political Science, Western Political Thought, International Law.",
      examMcq: {
        questionText: "Who was the principal author of the United States Declaration of Independence adopted on July 4, 1776?",
        options: { A: "George Washington", B: "Alexander Hamilton", C: "Thomas Jefferson", D: "James Madison" },
        correctAnswer: "C",
        explanation: "Thomas Jefferson drafted the Declaration of Independence, drawing heavily upon John Locke's philosophy of natural rights and government by consent."
      }
    },

    // ========================================================
    // MODERN ERA & THE LONG 19TH CENTURY (1789 – 1914 CE)
    // ========================================================
    {
      id: "wh_1789ce",
      year: 1789,
      dateDisplay: "July 14, 1789",
      title: "Outbreak of the French Revolution & Storming of the Bastille",
      category: "revolutions",
      era: "modern_19th",
      eraName: "The Long 19th Century (1789 – 1914 CE)",
      significance: "Parisian citizens stormed the Bastille fortress prison, demolishing the symbol of royal despotism and launching the French Revolution under the immortal banner of 'Liberté, Égalité, Fraternité'.",
      keyFigures: ["King Louis XVI", "Maximilien Robespierre", "Marquis de Lafayette", "Napoleon Bonaparte"],
      outcomes: [
        "Abolished feudalism and absolute monarchy in France; executed King Louis XVI and Marie Antoinette.",
        "Adopted the 'Declaration of the Rights of Man and of the Citizen' (August 1789), affirming universal citizen rights.",
        "Spread modern nationalism, popular sovereignty, and secular liberalism across Europe, prompting reactionary monarchical coalitions."
      ],
      cssExamNotes: "European History, Political Science, Philosophy of Human Rights.",
      examMcq: {
        questionText: "The storming of which medieval fortress on July 14, 1789 marked the flashpoint of the French Revolution?",
        options: { A: "Versailles", B: "The Bastille", C: "Tuileries Palace", D: "Conciergerie" },
        correctAnswer: "B",
        explanation: "The storming of the Bastille on July 14, 1789 symbolized the overthrow of feudal oppression and is celebrated as French National Day."
      }
    },
    {
      id: "wh_1815ce",
      year: 1815,
      dateDisplay: "June – November 1815",
      title: "Battle of Waterloo & The Congress of Vienna (Concert of Europe)",
      category: "treaties",
      era: "modern_19th",
      eraName: "The Long 19th Century (1789 – 1914 CE)",
      significance: "The Duke of Wellington and Gebhard von Blücher defeated Napoleon Bonaparte at the Battle of Waterloo. The Congress of Vienna reorganized post-Napoleonic Europe under Prince Klemens von Metternich, establishing the 'Concert of Europe'.",
      keyFigures: ["Napoleon Bonaparte", "Duke of Wellington", "Klemens von Metternich", "Tsar Alexander I"],
      outcomes: [
        "Ended 23 years of continuous European warfare and permanently exiled Napoleon to Saint Helena.",
        "Constructed a multi-polar balance-of-power system that prevented continent-wide general European wars for almost a century.",
        "Pioneered multilateral congress diplomacy, the historical ancestor of the League of Nations and United Nations."
      ],
      cssExamNotes: "European History, International Relations, Balance of Power Theory.",
      examMcq: {
        questionText: "Which Austrian statesman presided over the 1815 Congress of Vienna, orchestrating the post-Napoleonic European balance of power?",
        options: { A: "Otto von Bismarck", B: "Klemens von Metternich", C: "Talleyrand", D: "Castlereagh" },
        correctAnswer: "B",
        explanation: "Austrian Chancellor Prince Klemens von Metternich was the chief architect of the Congress of Vienna and the Concert of Europe."
      }
    },
    {
      id: "wh_1848ce",
      year: 1848,
      dateDisplay: "1848 CE",
      title: "Revolutions of 1848 ('Spring of Nations') & The Communist Manifesto",
      category: "revolutions",
      era: "modern_19th",
      eraName: "The Long 19th Century (1789 – 1914 CE)",
      significance: "A wave of republican and nationalist revolutions erupted across over 50 European countries against autocratic monarchies. Simultaneously, Karl Marx and Friedrich Engels published *The Communist Manifesto* in London.",
      keyFigures: ["Karl Marx", "Friedrich Engels", "Louis Napoleon (Napoleon III)", "Lajos Kossuth"],
      outcomes: [
        "Widespread popular uprisings permanently weakened feudal aristocratic privileges across Europe.",
        "Abolished serfdom in the Austrian Empire and Hungary and established the French Second Republic.",
        "Marxist ideology crystallized: 'Workers of the world, unite! You have nothing to lose but your chains!'"
      ],
      cssExamNotes: "European History, Political Science, Marxist Philosophy.",
      examMcq: {
        questionText: "Which landmark political pamphlet published by Karl Marx and Friedrich Engels in February 1848 coincided with the revolutionary 'Spring of Nations'?",
        options: { A: "Das Kapital", B: "The Communist Manifesto", C: "The Social Contract", D: "State and Revolution" },
        correctAnswer: "B",
        explanation: "The Communist Manifesto was published in February 1848, analyzing historical progress as class struggle between bourgeoisie and proletariat."
      }
    },
    {
      id: "wh_1857ce",
      year: 1857,
      dateDisplay: "May 10, 1857",
      title: "War of Independence (Sepoy Mutiny) & British Crown Direct Rule (1858)",
      category: "wars",
      era: "modern_19th",
      eraName: "The Long 19th Century (1789 – 1914 CE)",
      significance: "Subcontinental troops in Meerut revolted against the British East India Company over greased cartridges, annexations (Doctrine of Lapse), and cultural erosion, spreading to Delhi, Kanpur, and Lucknow.",
      keyFigures: ["Emperor Bahadur Shah Zafar", "Bakht Khan", "Mangal Pandey", "Queen Victoria"],
      outcomes: [
        "Ended British East India Company rule; Government of India Act 1858 transferred sovereignty directly to the British Crown.",
        "Terminated the 332-year Mughal dynasty; Emperor Bahadur Shah Zafar was tried and exiled to Rangoon, Burma.",
        "Triggered Sir Syed Ahmad Khan's Aligarh Modernist Movement to revitalize Muslims through modern Western education and political sobriety."
      ],
      cssExamNotes: "Pakistan Affairs, Indo-Pak History, Colonial Resistance.",
      examMcq: {
        questionText: "Which landmark British legislation officially terminated the rule of the East India Company and transferred power to the British Crown following the 1857 War of Independence?",
        options: { A: "Regulating Act 1773", B: "Government of India Act 1858", C: "Indian Councils Act 1861", D: "Pitt's India Act 1784" },
        correctAnswer: "B",
        explanation: "The Government of India Act 1858 (passed August 1858) liquidated the East India Company and placed India under direct administration of the British Crown via the Viceroy."
      }
    },
    {
      id: "wh_1868ce",
      year: 1868,
      dateDisplay: "1868 CE",
      title: "Meiji Restoration in Japan: Rapid Modernization & Industrialization",
      category: "revolutions",
      era: "modern_19th",
      eraName: "The Long 19th Century (1789 – 1914 CE)",
      significance: "Young reformers restored practical imperial rule to Emperor Meiji, abolishing the 265-year Tokugawa Shogunate and rapidly transforming feudal samurai Japan into an industrialized modern superpower under the slogan 'Fukoku Kyohei' (Enrich the Country, Strengthen the Armed Forces).",
      keyFigures: ["Emperor Meiji", "Saigo Takamori", "Ito Hirobumi"],
      outcomes: [
        "Abolished feudal class divisions (samurai privileges) and adopted modern industrial technology, railways, and compulsory schooling.",
        "Adopted the 1889 Meiji Constitution modeled on Prussia, creating Asia's first constitutional government.",
        "Defeated China (1895) and Russia (1905), becoming the first non-Western power to defeat a European empire."
      ],
      cssExamNotes: "International Relations, East Asian History, Comparative Modernization.",
      examMcq: {
        questionText: "The Meiji Restoration of 1868 in Japan resulted in the overthrow of which long-standing military ruling institution?",
        options: { A: "Ashikaga Shogunate", B: "Tokugawa Shogunate", C: "Kamakura Shogunate", D: "Qing Dynasty" },
        correctAnswer: "B",
        explanation: "The Meiji Restoration dismantled the Tokugawa Shogunate and feudal domains, returning power to Emperor Meiji and opening Japan to modern industrialization."
      }
    },
    {
      id: "wh_1871ce",
      year: 1871,
      dateDisplay: "January 18, 1871",
      title: "Unification of Germany & Proclamation of the German Empire in Versailles",
      category: "political",
      era: "modern_19th",
      eraName: "The Long 19th Century (1789 – 1914 CE)",
      significance: "Prussian Chancellor Otto von Bismarck successfully united Germany through his 'Blood and Iron' strategy, winning three wars against Denmark (1864), Austria (1866), and France (1870–71). King Wilhelm I was proclaimed German Emperor in the Hall of Mirrors at Versailles.",
      keyFigures: ["Otto von Bismarck (The Iron Chancellor)", "Kaiser Wilhelm I", "Helmuth von Moltke"],
      outcomes: [
        "Created a demographic, economic, and military powerhouse in the heart of Europe, upending the continental balance of power.",
        "Annexed Alsace-Lorraine from France via the Treaty of Frankfurt (1871), fueling bitter Franco-German enmity.",
        "Bismarck pioneered modern social welfare systems (state pensions, health insurance) to counter rising socialism."
      ],
      cssExamNotes: "European History, Realpolitik, International Relations, Strategic Studies.",
      examMcq: {
        questionText: "Which Prussian statesman orchestrated the unification of Germany in 1871 through his doctrine of 'Blood and Iron' (Eisen und Blut)?",
        options: { A: "Klemens von Metternich", B: "Otto von Bismarck", C: "Kaiser Wilhelm II", D: "Helmuth von Moltke" },
        correctAnswer: "B",
        explanation: "Otto von Bismarck, known as the 'Iron Chancellor', orchestrated the unification of the German Empire through three calculated wars between 1864 and 1871."
      }
    },
    {
      id: "wh_1885ce",
      year: 1885,
      dateDisplay: "1884 – 1885 CE",
      title: "The Berlin Conference & The 'Scramble for Africa'",
      category: "treaties",
      era: "modern_19th",
      eraName: "The Long 19th Century (1789 – 1914 CE)",
      significance: "14 European powers and the United States convened in Berlin under Chancellor Bismarck to divide the African continent among themselves without a single African representative present, enacting the doctrine of 'Effective Occupation'.",
      keyFigures: ["Otto von Bismarck", "King Leopold II of Belgium"],
      outcomes: [
        "Sparked the 'Scramble for Africa', carving artificial colonial borders across 90% of the continent by 1914.",
        "Recognized King Leopold II's personal ownership of the Congo Free State, resulting in horrific atrocities.",
        "Sowed enduring post-colonial ethnic conflicts by bisecting historic African tribes and kingdoms."
      ],
      cssExamNotes: "Colonialism, African History, International Law, Imperialism.",
      examMcq: {
        questionText: "Which 1884–1885 international diplomatic summit regulated European colonization and trade in Africa, triggering the 'Scramble for Africa'?",
        options: { A: "Congress of Vienna", B: "The Berlin Conference", C: "Treaty of Versailles", D: "Bandung Conference" },
        correctAnswer: "B",
        explanation: "The Berlin Conference, organized by Otto von Bismarck, partitioned Africa among European colonial powers based on the principle of effective occupation."
      }
    },
    {
      id: "wh_1906ce",
      year: 1906,
      dateDisplay: "December 30, 1906",
      title: "Foundation of the All-India Muslim League in Dhaka",
      category: "political",
      era: "modern_19th",
      eraName: "The Long 19th Century (1789 – 1914 CE)",
      significance: "Muslim delegates attending the All India Muhammadan Educational Conference in Dhaka founded the All-India Muslim League under the leadership of Nawab Salimullah, Nawab Viqar-ul-Mulk, and Aga Khan III to safeguard Muslim political rights.",
      keyFigures: ["Nawab Salimullah of Dhaka", "Nawab Viqar-ul-Mulk", "Sultan Muhammad Shah (Aga Khan III)"],
      outcomes: [
        "Created the first dedicated national political party representing the socio-political interests of Indian Muslims.",
        "Successfully secured Separate Electorates in the Morley-Minto Reforms of 1909.",
        "Became the founding political vehicle that, under the leadership of Quaid-e-Azam Muhammad Ali Jinnah, achieved the creation of Pakistan in 1947."
      ],
      cssExamNotes: "Pakistan Affairs, Freedom Movement, Political Science.",
      examMcq: {
        questionText: "In which city was the All-India Muslim League officially established on December 30, 1906?",
        options: { A: "Aligarh", B: "Lahore", C: "Dhaka", D: "Karachi" },
        correctAnswer: "C",
        explanation: "The All-India Muslim League was founded at Ahsan Manzil in Dhaka (now Bangladesh) on December 30, 1906."
      }
    },

    // ========================================================
    // WORLD WARS & INTERWAR PERIOD (1914 – 1945 CE)
    // ========================================================
    {
      id: "wh_1914ce",
      year: 1914,
      dateDisplay: "June 28, 1914 – Nov 11, 1918",
      title: "Outbreak of World War I (The Great War)",
      category: "wars",
      era: "world_wars",
      eraName: "World Wars & Interwar Order (1914 – 1945 CE)",
      significance: "The assassination of Archduke Franz Ferdinand in Sarajevo ignited a chain reaction of European secret alliances, plunging the Allied Powers (Britain, France, Russia, US) against the Central Powers (Germany, Austria-Hungary, Ottoman Empire) in industrial trench warfare.",
      keyFigures: ["Gavrilo Princip", "Archduke Franz Ferdinand", "Kaiser Wilhelm II", "Woodrow Wilson"],
      outcomes: [
        "Caused over 20 million military and civilian deaths and mobilized advanced weapons (tanks, poison gas, machine guns, airplanes).",
        "Collapsed four historic continental empires: the Russian, German, Austro-Hungarian, and Ottoman Empires.",
        "Concluded with the Armistice of Compiègne on November 11, 1918 (Armistice Day / Remembrance Day)."
      ],
      cssExamNotes: "World History, European History, International Relations, Strategic Studies.",
      examMcq: {
        questionText: "The assassination of which Austro-Hungarian heir in Sarajevo on June 28, 1914 triggered the outbreak of World War I?",
        options: { A: "Emperor Franz Joseph", B: "Archduke Franz Ferdinand", C: "Kaiser Wilhelm II", D: "Tsar Nicholas II" },
        correctAnswer: "B",
        explanation: "Archduke Franz Ferdinand and his wife Sophie were assassinated by Bosnian-Serb nationalist Gavrilo Princip in Sarajevo, triggering World War I."
      }
    },
    {
      id: "wh_1916ce",
      year: 1916,
      dateDisplay: "May 1916",
      title: "The Sykes-Picot Agreement: Secret Partition of the Middle East",
      category: "treaties",
      era: "world_wars",
      eraName: "World Wars & Interwar Order (1914 – 1945 CE)",
      significance: "British diplomat Sir Mark Sykes and French diplomat François Georges-Picot concluded a secret agreement with the assent of Tsarist Russia, carving the Arab provinces of the Ottoman Empire into British and French zones of colonial control.",
      keyFigures: ["Sir Mark Sykes", "François Georges-Picot"],
      outcomes: [
        "Drew the artificial borders creating modern Syria, Lebanon (French sphere) and Iraq, Jordan, Palestine (British sphere).",
        "Directly betrayed British wartime promises made to Sharif Hussein of Mecca in the McMahon-Hussein Correspondence.",
        "Exposed to global outrage by the Bolshevik government in late 1917 after opening Tsarist archives."
      ],
      cssExamNotes: "Middle Eastern History, International Relations, Imperialism.",
      examMcq: {
        questionText: "Which secret 1916 pact between Britain and France divided the Ottoman Empire's Middle Eastern territories into spheres of colonial influence?",
        options: { A: "Treaty of Sèvres", B: "Sykes-Picot Agreement", C: "Balfour Declaration", D: "Treaty of Lausanne" },
        correctAnswer: "B",
        explanation: "The Sykes-Picot Agreement of May 1916 secretly partitioned the Arab lands of the Ottoman Empire between Great Britain and France."
      }
    },
    {
      id: "wh_1917ce",
      year: 1917,
      dateDisplay: "November 7, 1917 (Oct 25 OS)",
      title: "The Bolshevik / Russian Revolution: Birth of the Soviet Union",
      category: "revolutions",
      era: "world_wars",
      eraName: "World Wars & Interwar Order (1914 – 1945 CE)",
      significance: "Vladimir Lenin and the Bolshevik Party seized power in Petrograd from Alexander Kerensky's Provisional Government under the slogan 'Peace, Land, and Bread!', establishing the world's first Marxist socialist state.",
      keyFigures: ["Vladimir Lenin", "Leon Trotsky", "Tsar Nicholas II", "Joseph Stalin"],
      outcomes: [
        "Withdrew Russia from WWI via the Treaty of Brest-Litovsk (March 1918) and executed the Romanov royal family.",
        "Won the brutal Russian Civil War (1917–1922) and formally established the Union of Soviet Socialist Republics (USSR) in 1922.",
        "Initiated the global ideological polarization between Soviet communism and Western liberal capitalism."
      ],
      cssExamNotes: "European History, International Relations, Political Science, Marxism.",
      examMcq: {
        questionText: "Who was the leader of the Bolshevik Party that seized power in Russia during the October Revolution of 1917?",
        options: { A: "Leon Trotsky", B: "Vladimir Lenin", C: "Joseph Stalin", D: "Alexander Kerensky" },
        correctAnswer: "B",
        explanation: "Vladimir Lenin led the Bolshevik faction to overthrow the Russian Provisional Government in November 1917, establishing Soviet rule."
      }
    },
    {
      id: "wh_1917nov",
      year: 1917,
      dateDisplay: "November 2, 1917",
      title: "The Balfour Declaration on Palestine",
      category: "treaties",
      era: "world_wars",
      eraName: "World Wars & Interwar Order (1914 – 1945 CE)",
      significance: "British Foreign Secretary Arthur Balfour wrote a public letter to Lord Walter Rothschild declaring that the British Government viewed with favor 'the establishment in Palestine of a national home for the Jewish people'.",
      keyFigures: ["Arthur Balfour", "Lord Walter Rothschild", "Chaim Weizmann"],
      outcomes: [
        "Inaugurated international diplomatic sponsorship for the Zionist movement, leading to the British Mandate for Palestine.",
        "Fundamentally altered the demographics of Palestine through mass Jewish immigration.",
        "Sowed the seeds of the protracted Arab-Israeli conflict that remains central to global geopolitics today."
      ],
      cssExamNotes: "International Relations, Middle East Studies, Current Affairs.",
      examMcq: {
        questionText: "In which year did British Foreign Secretary Arthur Balfour issue the letter pledging British support for a 'national home for the Jewish people' in Palestine?",
        options: { A: "1914", B: "1917", C: "1920", D: "1948" },
        correctAnswer: "B",
        explanation: "The Balfour Declaration was issued on November 2, 1917 by British Foreign Secretary Arthur Balfour to Walter Rothschild."
      }
    },
    {
      id: "wh_1919ce",
      year: 1919,
      dateDisplay: "June 28, 1919",
      title: "The Treaty of Versailles & Founding of the League of Nations",
      category: "treaties",
      era: "world_wars",
      eraName: "World Wars & Interwar Order (1914 – 1945 CE)",
      significance: "The Allied victors signed the Treaty of Versailles with Germany in the Hall of Mirrors. It forced Germany to accept sole war guilt (Article 231), pay heavy reparations, cede territory, and established the League of Nations.",
      keyFigures: ["Woodrow Wilson (US)", "David Lloyd George (UK)", "Georges Clemenceau (France)"],
      outcomes: [
        "Imposed punishing terms on Weimar Germany that fueled economic hyperinflation and resentment, paving the way for Adolf Hitler's rise.",
        "Established the League of Nations as the world's first intergovernmental collective security organization.",
        "The US Senate rejected ratification, leaving the League fatally crippled without American membership."
      ],
      cssExamNotes: "International Relations, European History, International Law.",
      examMcq: {
        questionText: "Which infamous clause of the 1919 Treaty of Versailles forced Germany to accept sole moral and financial responsibility for causing World War I?",
        options: { A: "Article 10", B: "Article 48", C: "Article 231 ('War Guilt Clause')", D: "Article 370" },
        correctAnswer: "C",
        explanation: "Article 231, known as the 'War Guilt Clause', mandated Germany to accept full responsibility for all loss and damage caused by World War I."
      }
    },
    {
      id: "wh_1928ce",
      year: 1928,
      dateDisplay: "September 1928",
      title: "Alexander Fleming Discovers Penicillin: The Antibiotic Revolution",
      category: "discoveries",
      era: "world_wars",
      eraName: "World Wars & Interwar Order (1914 – 1945 CE)",
      significance: "Scottish bacteriologist Alexander Fleming discovered that a contaminated green mold (*Penicillium notatum*) killed *Staphylococcus* bacteria in his London laboratory, discovering the world's first broad-spectrum antibiotic.",
      keyFigures: ["Sir Alexander Fleming", "Howard Florey", "Ernst Boris Chain"],
      outcomes: [
        "Transformed global medicine, dramatically reducing mortality from previously fatal bacterial infections (pneumonia, syphilis, gangrene).",
        "Mass-produced during WWII, saving millions of Allied soldiers' lives and adding decades to global human life expectancy.",
        "Earned Fleming, Florey, and Chain the 1945 Nobel Prize in Physiology or Medicine."
      ],
      cssExamNotes: "General Science, History of Medicine, Public Health.",
      examMcq: {
        questionText: "Who accidentally discovered penicillin in 1928, inaugurating the golden age of antibiotics?",
        options: { A: "Louis Pasteur", B: "Alexander Fleming", C: "Edward Jenner", D: "Robert Koch" },
        correctAnswer: "B",
        explanation: "Alexander Fleming discovered penicillin in 1928 after observing mold destroying bacterial colonies in a Petri dish at St. Mary's Hospital, London."
      }
    },
    {
      id: "wh_1930ce",
      year: 1930,
      dateDisplay: "December 29, 1930",
      title: "Allama Muhammad Iqbal's Historic Allahabad Presidential Address",
      category: "political",
      era: "world_wars",
      eraName: "World Wars & Interwar Order (1914 – 1945 CE)",
      significance: "Philosopher-poet Allama Muhammad Iqbal delivered his historic presidential address at the 21st annual session of the All-India Muslim League in Allahabad, becoming the first leader to articulate the vision of a sovereign Muslim state in northwestern India.",
      keyFigures: ["Allama Muhammad Iqbal", "Quaid-e-Azam Muhammad Ali Jinnah"],
      outcomes: [
        "Articulated the foundational political ideology of Pakistan: 'I would like to see the Punjab, North-West Frontier Province, Sind and Baluchistan amalgamated into a single State.'",
        "Replaced the concept of minority rights with the Two-Nation Theory: Indian Muslims are a distinct nation with their own civilization.",
        "Laid the conceptual blueprint that culminated in the 1940 Lahore Resolution."
      ],
      cssExamNotes: "Pakistan Affairs, Two-Nation Theory, Constitutional History.",
      examMcq: {
        questionText: "At which annual session of the All-India Muslim League did Allama Muhammad Iqbal deliver his landmark address proposing a separate Muslim state in northwestern India?",
        options: { A: "1906 Dhaka Session", B: "1930 Allahabad Session", C: "1940 Lahore Session", D: "1916 Lucknow Session" },
        correctAnswer: "B",
        explanation: "Allama Iqbal delivered his historic address at the Allahabad Session of the Muslim League on December 29, 1930."
      }
    },
    {
      id: "wh_1939ce",
      year: 1939,
      dateDisplay: "September 1, 1939",
      title: "German Invasion of Poland & Outbreak of World War II",
      category: "wars",
      era: "world_wars",
      eraName: "World Wars & Interwar Order (1914 – 1945 CE)",
      significance: "Nazi Germany launched a Blitzkrieg invasion of Poland, prompting Britain and France to declare war on Germany. The deadliest conflict in human history expanded across Europe, Asia, North Africa, and the Pacific.",
      keyFigures: ["Adolf Hitler", "Winston Churchill", "Franklin D. Roosevelt", "Joseph Stalin"],
      outcomes: [
        "Encompassed the Holocaust—the systematic genocide of six million Jews and millions of others by the Nazi regime.",
        "Resulted in an estimated 70 to 85 million fatalities worldwide.",
        "Culminated in the unconditional surrender of Germany (May 1945) and Japan (August 1945) following the atomic bombings."
      ],
      cssExamNotes: "World History, European History, Military Studies, IR.",
      examMcq: {
        questionText: "The German invasion of which country on September 1, 1939 directly caused Britain and France to declare war, sparking World War II?",
        options: { A: "Czechoslovakia", B: "Austria", C: "Poland", D: "France" },
        correctAnswer: "C",
        explanation: "Hitler's unprovoked invasion of Poland on September 1, 1939 was the immediate trigger for the outbreak of World War II in Europe."
      }
    },
    {
      id: "wh_1940ce",
      year: 1940,
      dateDisplay: "March 23, 1940",
      title: "The Lahore Resolution (Pakistan Resolution) Passed at Minto Park",
      category: "political",
      era: "world_wars",
      eraName: "World Wars & Interwar Order (1914 – 1945 CE)",
      significance: "The All-India Muslim League adopted the historic Lahore Resolution at Minto Park (now Minar-e-Pakistan), demanding that geographically contiguous Muslim-majority areas in the Northwest and Eastern zones be grouped into independent, sovereign states.",
      keyFigures: ["Quaid-e-Azam Muhammad Ali Jinnah", "A.K. Fazlul Huq (The Lion of Bengal)", "Chaudhry Khaliquzzaman"],
      outcomes: [
        "Moved by Bengal Premier A.K. Fazlul Huq, the resolution formally declared Pakistan as the ultimate objective of the Muslim League.",
        "United millions of subcontinental Muslims behind Quaid-e-Azam Muhammad Ali Jinnah's visionary leadership.",
        "Commemorated annually across Pakistan as 'Pakistan Day' (Republic Day) on March 23."
      ],
      cssExamNotes: "Pakistan Affairs, Freedom Movement, Constitutional History.",
      examMcq: {
        questionText: "Who presented the historic Lahore Resolution (Pakistan Resolution) on March 23, 1940 at the 27th annual session of the Muslim League?",
        options: { A: "Liaquat Ali Khan", B: "A.K. Fazlul Huq", C: "Chaudhry Khaliquzzaman", D: "Khawaja Nazimuddin" },
        correctAnswer: "B",
        explanation: "Bengal Premier A.K. Fazlul Huq, famously known as 'Sher-e-Bengal', moved the Lahore Resolution on March 23, 1940."
      }
    },
    {
      id: "wh_1944ce",
      year: 1944,
      dateDisplay: "July 1 – 22, 1944",
      title: "The Bretton Woods Conference: Creation of the IMF & World Bank",
      category: "treaties",
      era: "world_wars",
      eraName: "World Wars & Interwar Order (1914 – 1945 CE)",
      significance: "Delegates from 44 Allied nations met at the Mount Washington Hotel in Bretton Woods, New Hampshire, establishing the post-war international monetary order, pegged exchange rates, the International Monetary Fund (IMF), and the World Bank.",
      keyFigures: ["John Maynard Keynes (UK)", "Harry Dexter White (US)"],
      outcomes: [
        "Established the US Dollar as the primary global reserve currency, pegged to gold at $35 per ounce.",
        "Created the IMF to ensure balance-of-payments liquidity and the World Bank (IBRD) to fund post-war reconstruction.",
        "Institutionalized the capitalist rules-based global financial architecture that governs international commerce today."
      ],
      cssExamNotes: "International Political Economy, Economics, International Relations.",
      examMcq: {
        questionText: "The Bretton Woods Conference of July 1944 led directly to the establishment of which two foundational global financial institutions?",
        options: { A: "WTO and GATT", B: "IMF and the World Bank (IBRD)", C: "BIS and OECD", D: "Federal Reserve and ECB" },
        correctAnswer: "B",
        explanation: "The Bretton Woods Agreement created the International Monetary Fund (IMF) and the International Bank for Reconstruction and Development (IBRD / World Bank)."
      }
    },
    {
      id: "wh_1945ce",
      year: 1945,
      dateDisplay: "October 24, 1945",
      title: "Official Founding of the United Nations (UN Charter Takes Effect)",
      category: "treaties",
      era: "world_wars",
      eraName: "World Wars & Interwar Order (1914 – 1945 CE)",
      significance: "The Charter of the United Nations, signed in San Francisco on June 26, 1945 by 50 nations, came into force following ratification by the P5 and a majority of signatories, replacing the failed League of Nations.",
      keyFigures: ["Franklin D. Roosevelt", "Winston Churchill", "António Guterres (Current Sec-Gen)"],
      outcomes: [
        "Created the UN Security Council (UNSC) with 5 permanent veto-wielding members to enforce collective security.",
        "Established the International Court of Justice (ICJ) at The Hague and the universal General Assembly (UNGA).",
        "Pakistan joined the United Nations on September 30, 1947, weeks after gaining independence."
      ],
      cssExamNotes: "International Relations, International Law, UN System.",
      examMcq: {
        questionText: "On which date did the United Nations Charter officially enter into force, celebrated annually worldwide as United Nations Day?",
        options: { A: "June 26, 1945", B: "October 24, 1945", C: "January 1, 1946", D: "December 10, 1948" },
        correctAnswer: "B",
        explanation: "The UN Charter entered into force on October 24, 1945, which is commemorated internationally as United Nations Day."
      }
    },

    // ========================================================
    // COLD WAR & DECOLONIZATION (1945 – 1991 CE)
    // ========================================================
    {
      id: "wh_1947ce",
      year: 1947,
      dateDisplay: "August 14, 1947",
      title: "Independence of Pakistan & Partition of British India",
      category: "political",
      era: "cold_war",
      eraName: "Cold War & Decolonization (1945 – 1991 CE)",
      significance: "The culmination of the Pakistan Movement resulted in the birth of the sovereign state of Pakistan on 27th Ramadan 1366 AH (August 14, 1947), with Quaid-e-Azam Muhammad Ali Jinnah taking oath as its first Governor-General.",
      keyFigures: ["Quaid-e-Azam Muhammad Ali Jinnah", "Liaquat Ali Khan", "Lord Louis Mountbatten", "Sir Cyril Radcliffe"],
      outcomes: [
        "Created the largest Muslim-majority nation in the world at the time, consisting of West and East Pakistan.",
        "Triggered the largest mass migration in human history (~15 million displaced) and tragic communal violence.",
        "The Radcliffe Boundary Award created enduring territorial disputes, notably the Jammu & Kashmir conflict."
      ],
      cssExamNotes: "Pakistan Affairs, Constitutional History, Decolonization.",
      examMcq: {
        questionText: "Who was appointed as the Chairman of the Boundary Commissions responsible for demarcating the borders of Punjab and Bengal in 1947?",
        options: { A: "Lord Mountbatten", B: "Sir Cyril Radcliffe", C: "Sir Stafford Cripps", D: "Lord Pethick-Lawrence" },
        correctAnswer: "B",
        explanation: "British barrister Sir Cyril Radcliffe was appointed Chairman of both Punjab and Bengal Boundary Commissions in 1947."
      }
    },
    {
      id: "wh_1948ce",
      year: 1948,
      dateDisplay: "December 10, 1948",
      title: "Universal Declaration of Human Rights (UDHR) Adopted by UNGA",
      category: "treaties",
      era: "cold_war",
      eraName: "Cold War & Decolonization (1945 – 1991 CE)",
      significance: "The UN General Assembly meeting in Paris adopted Resolution 217 A, establishing the Universal Declaration of Human Rights—the first global consensus proclaiming thirty inalienable fundamental human rights.",
      keyFigures: ["Eleanor Roosevelt", "René Cassin", "Charles Malik", "John Peters Humphrey"],
      outcomes: [
        "Drafted under Eleanor Roosevelt's leadership; affirmed: 'All human beings are born free and equal in dignity and rights.'",
        "Most translated document in the world, inspiring over 70 international human rights treaties and national constitutions.",
        "Commemorated globally every year on December 10 as Human Rights Day."
      ],
      cssExamNotes: "International Law, Human Rights, Constitutional Law.",
      examMcq: {
        questionText: "Who chaired the United Nations Human Rights Commission that drafted the 1948 Universal Declaration of Human Rights?",
        options: { A: "Eleanor Roosevelt", B: "Winston Churchill", C: "René Cassin", D: "Trygve Lie" },
        correctAnswer: "A",
        explanation: "Former US First Lady Eleanor Roosevelt chaired the drafting committee of the Universal Declaration of Human Rights."
      }
    },
    {
      id: "wh_1949ce",
      year: 1949,
      dateDisplay: "April 4, 1949",
      title: "Signing of the North Atlantic Treaty: Creation of NATO",
      category: "treaties",
      era: "cold_war",
      eraName: "Cold War & Decolonization (1945 – 1991 CE)",
      significance: "Twelve North American and European nations signed the Washington Treaty in Washington D.C., establishing NATO to provide collective defense against Soviet expansionism under Article 5.",
      keyFigures: ["Harry S. Truman", "Dean Acheson", "Ernest Bevin"],
      outcomes: [
        "Enshrined Article 5: An armed attack against one ally shall be considered an armed attack against them all.",
        "Prompted the Soviet Union to establish the rival Warsaw Pact in 1955, cementing the bipolar Cold War standoff.",
        "Expanded from 12 founding allies to 32 members in 2024 following the accession of Finland and Sweden."
      ],
      cssExamNotes: "International Relations, NATO, Strategic Studies, Cold War.",
      examMcq: {
        questionText: "Where was the North Atlantic Treaty that established NATO officially signed on April 4, 1949?",
        options: { A: "Brussels, Belgium", B: "Washington, D.C., United States", C: "London, United Kingdom", D: "Paris, France" },
        correctAnswer: "B",
        explanation: "The North Atlantic Treaty was signed in Washington, D.C. on April 4, 1949 by 12 founding member states."
      }
    },
    {
      id: "wh_1949oct",
      year: 1949,
      dateDisplay: "October 1, 1949",
      title: "Chinese Communist Revolution: Proclamation of the People's Republic of China",
      category: "revolutions",
      era: "cold_war",
      eraName: "Cold War & Decolonization (1945 – 1991 CE)",
      significance: "Following the victory of the People's Liberation Army in the Chinese Civil War, Chairman Mao Zedong proclaimed the establishment of the People's Republic of China (PRC) from Tiananmen Gate in Beijing, declaring 'The Chinese people have stood up.'",
      keyFigures: ["Mao Zedong", "Zhou Enlai", "Chiang Kai-shek"],
      outcomes: [
        "Chiang Kai-shek's Nationalist Kuomintang (KMT) retreated to Taiwan, creating the enduring Cross-Strait dispute.",
        "Transformed the world's most populous nation into a socialist state, shifting global Cold War dynamics.",
        "Pakistan became one of the first countries and the first Muslim state to officially recognize the PRC in January 1950."
      ],
      cssExamNotes: "International Relations, Chinese Foreign Policy, Pakistan-China Relations.",
      examMcq: {
        questionText: "In which year did Pakistan become the first Muslim nation to officially recognize the People's Republic of China?",
        options: { A: "1949", B: "1950", C: "1951", D: "1963" },
        correctAnswer: "B",
        explanation: "Pakistan officially recognized the People's Republic of China on January 4, 1950, and formal diplomatic ties were established in May 1951."
      }
    },
    {
      id: "wh_1953ce",
      year: 1953,
      dateDisplay: "April 25, 1953",
      title: "Discovery of the Double Helix Structure of DNA",
      category: "discoveries",
      era: "cold_war",
      eraName: "Cold War & Decolonization (1945 – 1991 CE)",
      significance: "Scientists James Watson and Francis Crick at Cambridge University, utilizing the crucial X-ray diffraction Photo 51 taken by Rosalind Franklin, revealed the double-helix chemical structure of Deoxyribonucleic Acid (DNA).",
      keyFigures: ["James Watson", "Francis Crick", "Rosalind Franklin", "Maurice Wilkins"],
      outcomes: [
        "Cracked the molecular code of biological genetics and cellular reproduction.",
        "Inaugurated modern molecular biology, genetic engineering, biotechnology, and CRISPR gene editing.",
        "Watson, Crick, and Wilkins were awarded the 1962 Nobel Prize in Physiology or Medicine."
      ],
      cssExamNotes: "General Science & Ability, Biotechnology, Biology.",
      examMcq: {
        questionText: "Whose crucial X-ray crystallography photograph ('Photo 51') provided the vital structural evidence for the discovery of the DNA double helix in 1953?",
        options: { A: "Marie Curie", B: "Rosalind Franklin", C: "Barbara McClintock", D: "Dorothy Hodgkin" },
        correctAnswer: "B",
        explanation: "Biophysicist Rosalind Franklin captured 'Photo 51', the clear X-ray diffraction image of DNA that revealed its double helix geometry."
      }
    },
    {
      id: "wh_1955ce",
      year: 1955,
      dateDisplay: "April 18 – 24, 1955",
      title: "The Bandung Asian-African Conference & The Non-Aligned Movement (NAM)",
      category: "political",
      era: "cold_war",
      eraName: "Cold War & Decolonization (1945 – 1991 CE)",
      significance: "Leaders from 29 newly independent Asian and African nations gathered in Bandung, Indonesia, under the leadership of Sukarno, Zhou Enlai, Nehru, Nasser, and Prime Minister Mohammad Ali Bogra of Pakistan, formulating the 'Ten Principles of Bandung'.",
      keyFigures: ["Sukarno (Indonesia)", "Zhou Enlai (China)", "Mohammad Ali Bogra (Pakistan)", "Jawaharlal Nehru (India)", "Gamal Abdel Nasser (Egypt)"],
      outcomes: [
        "Laid the institutional and moral foundations for the Non-Aligned Movement (NAM formally launched in Belgrade 1961).",
        "Championed South-South cooperation, anti-colonialism, and peaceful coexistence outside superpower Cold War military blocs.",
        "Served as a historic forum where Pakistan and China initiated warm diplomatic bridge-building."
      ],
      cssExamNotes: "International Relations, Non-Aligned Movement, Third World Studies.",
      examMcq: {
        questionText: "The historic 1955 Asian-African Conference that laid the groundwork for the Non-Aligned Movement was held in which city?",
        options: { A: "Cairo, Egypt", B: "Bandung, Indonesia", C: "Belgrade, Yugoslavia", D: "New Delhi, India" },
        correctAnswer: "B",
        explanation: "The Asian-African Conference was hosted by President Sukarno in Bandung, Indonesia, in April 1955."
      }
    },
    {
      id: "wh_1957ce",
      year: 1957,
      dateDisplay: "October 4, 1957",
      title: "Soviet Union Launches Sputnik 1: Dawn of the Space Age",
      category: "discoveries",
      era: "cold_war",
      eraName: "Cold War & Decolonization (1945 – 1991 CE)",
      significance: "The Soviet Union launched Sputnik 1, the world's first artificial satellite, into low Earth orbit from the Baikonur Cosmodrome, sparking the 'Space Race' and the modernization of global scientific education.",
      keyFigures: ["Sergei Korolev (Chief Soviet rocket engineer)", "Nikita Khrushchev"],
      outcomes: [
        "Inaugurated human space exploration and satellite-based telecommunications.",
        "Prompted the US to create NASA (1958) and dramatically accelerate aerospace investments.",
        "Demonstrated Soviet intercontinental ballistic missile (ICBM) capability during the height of the Cold War."
      ],
      cssExamNotes: "General Science, Cold War Geopolitics, Space Exploration.",
      examMcq: {
        questionText: "Which nation launched the world's first artificial satellite, Sputnik 1, on October 4, 1957?",
        options: { A: "United States", B: "Soviet Union", C: "United Kingdom", D: "France" },
        correctAnswer: "B",
        explanation: "The Soviet Union launched Sputnik 1 in October 1957, inaugurating the space age."
      }
    },
    {
      id: "wh_1960ce",
      year: 1960,
      dateDisplay: "September 19, 1960",
      title: "Indus Waters Treaty (IWT) Brokered by the World Bank in Karachi",
      category: "treaties",
      era: "cold_war",
      eraName: "Cold War & Decolonization (1945 – 1991 CE)",
      significance: "President Ayub Khan of Pakistan and Prime Minister Jawaharlal Nehru of India signed the landmark Indus Waters Treaty in Karachi, mediated by World Bank Vice President W.A.B. Iliff, permanently partitioning the six rivers of the Indus Basin.",
      keyFigures: ["President Ayub Khan", "Prime Minister Jawaharlal Nehru", "W.A.B. Iliff (World Bank)"],
      outcomes: [
        "Allocated the three Western Rivers (Indus, Jhelum, Chenab) to Pakistan, and the three Eastern Rivers (Ravi, Beas, Sutlej) to India.",
        "Established the Permanent Indus Commission (PIC) and formal neutral expert/arbitration mechanisms.",
        "Funded the multi-donor Indus Basin Development Fund, constructing the Mangla Dam, Tarbela Dam, and eight link canals."
      ],
      cssExamNotes: "Pakistan Affairs, International Law, Water Diplomacy, Indo-Pak Relations.",
      examMcq: {
        questionText: "Under the 1960 Indus Waters Treaty, which three rivers were allocated for unrestricted use to Pakistan?",
        options: { A: "Ravi, Beas, Sutlej", B: "Indus, Jhelum, Chenab", C: "Indus, Ravi, Chenab", D: "Jhelum, Sutlej, Beas" },
        correctAnswer: "B",
        explanation: "Under the IWT, Pakistan was allocated the three Western rivers: the Indus, Jhelum, and Chenab."
      }
    },
    {
      id: "wh_1962ce",
      year: 1962,
      dateDisplay: "October 16 – 28, 1962",
      title: "The Cuban Missile Crisis: The Brink of Nuclear War",
      category: "wars",
      era: "cold_war",
      eraName: "Cold War & Decolonization (1945 – 1991 CE)",
      significance: "Thirteen-day military standoff between the United States and the Soviet Union triggered by the discovery of Soviet medium-range nuclear missiles in Cuba, 90 miles off the US coast, bringing the world to the brink of nuclear holocaust.",
      keyFigures: ["John F. Kennedy", "Nikita Khrushchev", "Fidel Castro"],
      outcomes: [
        "Resolved through secret diplomacy: USSR withdrew missiles from Cuba; US pledged not to invade Cuba and secretly removed Jupiter missiles from Turkey.",
        "Led to the installation of the Washington-Moscow direct 'Hotline' to prevent accidental nuclear escalation.",
        "Spurred the 1963 Partial Nuclear Test Ban Treaty and early nuclear arms control dialogues."
      ],
      cssExamNotes: "International Relations, Crisis Management, Nuclear Deterrence Theory.",
      examMcq: {
        questionText: "Which US President navigated the Cuban Missile Crisis in October 1962 by ordering a naval quarantine around Cuba?",
        options: { A: "Dwight D. Eisenhower", B: "John F. Kennedy", C: "Lyndon B. Johnson", D: "Richard Nixon" },
        correctAnswer: "B",
        explanation: "President John F. Kennedy instituted a naval 'quarantine' (blockade) of Cuba in October 1962, successfully resolving the nuclear confrontation."
      }
    },
    {
      id: "wh_1968ce",
      year: 1968,
      dateDisplay: "July 1, 1968",
      title: "Treaty on the Non-Proliferation of Nuclear Weapons (NPT)",
      category: "treaties",
      era: "cold_war",
      eraName: "Cold War & Decolonization (1945 – 1991 CE)",
      significance: "Opened for signature to prevent the spread of nuclear weapons, promote peaceful nuclear energy, and advance nuclear disarmament under three core pillars, monitored by the International Atomic Energy Agency (IAEA).",
      keyFigures: ["P5 Nuclear Weapon States", "IAEA Director General"],
      outcomes: [
        "Recognized only 5 nuclear-weapon states (US, USSR/Russia, UK, France, China) that detonated a test prior to January 1, 1967.",
        "Four sovereign states never signed the NPT: Pakistan, India, Israel, and South Sudan (North Korea withdrew in 2003).",
        "Pakistan has maintained a principled stance: it cannot sign the NPT as a non-nuclear weapon state unless India signs simultaneously."
      ],
      cssExamNotes: "International Relations, Nuclear Non-Proliferation, Strategic Studies.",
      examMcq: {
        questionText: "How many official 'Nuclear Weapon States' (NWS) are recognized under the terms of the 1968 Non-Proliferation Treaty (NPT)?",
        options: { A: "3", B: "5 (The UN Security Council Permanent Members)", C: "8", D: "9" },
        correctAnswer: "B",
        explanation: "The NPT recognizes only the five permanent members of the UNSC (US, Russia, UK, France, China) as Nuclear Weapon States."
      }
    },
    {
      id: "wh_1969ce",
      year: 1969,
      dateDisplay: "July 20, 1969",
      title: "Apollo 11 Moon Landing: 'One Small Step for Man'",
      category: "discoveries",
      era: "cold_war",
      eraName: "Cold War & Decolonization (1945 – 1991 CE)",
      significance: "American astronauts Neil Armstrong and Buzz Aldrin aboard Apollo 11's Lunar Module *Eagle* landed on the Sea of Tranquility, becoming the first humans to walk on the lunar surface.",
      keyFigures: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
      outcomes: [
        "Armstrong uttered the immortal words: 'That's one small step for [a] man, one giant leap for mankind.'",
        "Fulfilled President John F. Kennedy's 1961 challenge to land a man on the moon before the decade was out.",
        "Demonstrated unmatched engineering precision, computing breakthroughs, and American technological preeminence in the Space Race."
      ],
      cssExamNotes: "General Science, History of Aerospace, Space Exploration.",
      examMcq: {
        questionText: "Who was the Apollo 11 astronaut who served as command module pilot while Armstrong and Aldrin walked on the Moon?",
        options: { A: "Pete Conrad", B: "Michael Collins", C: "Alan Shepard", D: "John Glenn" },
        correctAnswer: "B",
        explanation: "Michael Collins piloted the command module *Columbia* in lunar orbit while Neil Armstrong and Buzz Aldrin descended to the lunar surface."
      }
    },
    {
      id: "wh_1973ce",
      year: 1973,
      dateDisplay: "April 19, 1973",
      title: "Enactment of the 1973 Constitution of the Islamic Republic of Pakistan",
      category: "political",
      era: "cold_war",
      eraName: "Cold War & Decolonization (1945 – 1991 CE)",
      significance: "Pakistan's National Assembly unanimously passed the 1973 Constitution under Prime Minister Zulfikar Ali Bhutto, establishing an enduring federal, parliamentary, and democratic constitutional order with fundamental rights and Islamic provisions.",
      keyFigures: ["Zulfikar Ali Bhutto", "Abdul Hafeez Pirzada (Law Minister)", "Mufti Mahmud", "Khan Abdul Wali Khan"],
      outcomes: [
        "First constitution in Pakistan's history drafted by directly elected representatives with cross-party national consensus.",
        "Created a bicameral legislature: a population-based National Assembly and an egalitarian Senate safeguarding provincial parity.",
        "Remains the supreme legal framework of Pakistan, fortified by the landmark 18th Amendment in 2010 and 26th Amendment in 2024."
      ],
      cssExamNotes: "Pakistan Affairs, Constitutional Law, Political Science.",
      examMcq: {
        questionText: "Under whose prime ministership was the landmark 1973 Constitution of Pakistan unanimously enacted by the National Assembly?",
        options: { A: "Liaquat Ali Khan", B: "Zulfikar Ali Bhutto", C: "Ayub Khan", D: "Muhammad Khan Junejo" },
        correctAnswer: "B",
        explanation: "Zulfikar Ali Bhutto spearheaded the parliamentary consensus that enacted the 1973 Constitution on April 19, 1973 (authenticated August 14, 1973)."
      }
    },
    {
      id: "wh_1979ce",
      year: 1979,
      dateDisplay: "February 1979",
      title: "The Iranian Islamic Revolution Overthrows the Pahlavi Monarchy",
      category: "revolutions",
      era: "cold_war",
      eraName: "Cold War & Decolonization (1945 – 1991 CE)",
      significance: "Mass popular strikes and demonstrations led by Ayatollah Ruhollah Khomeini overthrew the Western-backed Shah Mohammad Reza Pahlavi, abolishing the 2,500-year-old Persian monarchy and establishing the Islamic Republic of Iran.",
      keyFigures: ["Ayatollah Ruhollah Khomeini", "Shah Mohammad Reza Pahlavi", "Mehdi Bazargan"],
      outcomes: [
        "Introduced the governance doctrine of Velayat-e Faqih (Guardianship of the Islamic Jurist).",
        "Triggered the 444-day US Embassy Hostage Crisis in Tehran, fundamentally rupturing US-Iran relations.",
        "Dramatically shifted Middle Eastern regional security dynamics, leading to the devastating 8-year Iran-Iraq War (1980–1988)."
      ],
      cssExamNotes: "International Relations, Middle East Studies, Islamic Political Thought.",
      examMcq: {
        questionText: "Who emerged as the Supreme Leader of Iran following the 1979 Islamic Revolution that ousted the Shah?",
        options: { A: "Ali Khamenei", B: "Ayatollah Ruhollah Khomeini", C: "Akbar Hashemi Rafsanjani", D: "Mohammad Khatami" },
        correctAnswer: "B",
        explanation: "Ayatollah Ruhollah Khomeini returned from exile in Paris to lead the revolution and became Iran's first Supreme Leader."
      }
    },
    {
      id: "wh_1979sov",
      year: 1979,
      dateDisplay: "December 25, 1979",
      title: "Soviet Invasion of Afghanistan & The Decade-Long Afghan War",
      category: "wars",
      era: "cold_war",
      eraName: "Cold War & Decolonization (1945 – 1991 CE)",
      significance: "The Soviet 40th Army invaded Afghanistan to prop up the embattled communist regime in Kabul, prompting Pakistan, the United States, Saudi Arabia, and China to support the Afghan Mujahideen resistance in a decisive Cold War proxy conflict.",
      keyFigures: ["General Zia-ul-Haq", "Babrak Karmal", "Leonid Brezhnev", "Ronald Reagan"],
      outcomes: [
        "Pakistan hosted over 3 million Afghan refugees and functioned as the frontline state channel for the resistance.",
        "Became the Soviet Union's 'Vietnam', resulting in 15,000 Soviet troop deaths and accelerating Soviet economic and political collapse.",
        "Ended with the Geneva Accords (April 1988) and full Soviet military withdrawal completed on February 15, 1989."
      ],
      cssExamNotes: "Pakistan Affairs, International Relations, Afghan Conflict, Cold War.",
      examMcq: {
        questionText: "The Soviet military intervention in Afghanistan, which began on Christmas Day 1979, was formally ended by which 1988 diplomatic accords?",
        options: { A: "Tashkent Declaration", B: "The Geneva Accords", C: "Bonn Agreement", D: "Doha Agreement" },
        correctAnswer: "B",
        explanation: "The Geneva Accords, signed in April 1988 between Pakistan and Afghanistan with US and USSR as guarantors, set the timetable for Soviet withdrawal."
      }
    },
    {
      id: "wh_1989ce",
      year: 1989,
      dateDisplay: "November 9, 1989",
      title: "Fall of the Berlin Wall & Collapse of Communism in Eastern Europe",
      category: "revolutions",
      era: "cold_war",
      eraName: "Cold War & Decolonization (1945 – 1991 CE)",
      significance: "East German border checkpoints opened under peaceful mass civilian pressure, allowing joyful crowds to dismantle the Berlin Wall—the iconic symbol of the Iron Curtain—unifying Germany and terminating the Cold War order.",
      keyFigures: ["Mikhail Gorbachev", "Helmut Kohl", "Ronald Reagan", "Erich Honecker"],
      outcomes: [
        "Enabled the peaceful reunification of Germany on October 3, 1990.",
        "Triggered the rapid collapse of Soviet-backed communist regimes in Poland, Hungary, Czechoslovakia (Velvet Revolution), and Romania.",
        "Inspired Francis Fukuyama's famous thesis on the 'End of History' and the global triumph of liberal democracy."
      ],
      cssExamNotes: "European History, International Relations, Cold War History.",
      examMcq: {
        questionText: "In which year did the historic Fall of the Berlin Wall take place, signaling the imminent collapse of the Soviet Eastern bloc?",
        options: { A: "1987", B: "1989", C: "1991", D: "1993" },
        correctAnswer: "B",
        explanation: "The Berlin Wall fell on November 9, 1989, ending 28 years of physical division between East and West Berlin."
      }
    },
    {
      id: "wh_1989www",
      year: 1989,
      dateDisplay: "March 1989",
      title: "Tim Berners-Lee Invents the World Wide Web at CERN",
      category: "discoveries",
      era: "cold_war",
      eraName: "Cold War & Decolonization (1945 – 1991 CE)",
      significance: "British scientist Sir Tim Berners-Lee wrote the proposal for the World Wide Web while working at CERN in Switzerland, inventing HTML, HTTP, and URLs to link documents across the internet, democratizing global communication.",
      keyFigures: ["Sir Tim Berners-Lee", "Robert Cailliau"],
      outcomes: [
        "Transformed the academic internet into a ubiquitous global network accessible to billions of individuals.",
        "Powered the global knowledge economy, e-commerce, digital communications, and the modern information society.",
        "CERN placed the Web software in the public domain in 1993 for free global adoption."
      ],
      cssExamNotes: "Computer Science, General Science & Ability, Modern History.",
      examMcq: {
        questionText: "Sir Tim Berners-Lee invented the World Wide Web in 1989 while conducting research at which international scientific laboratory?",
        options: { A: "Bell Labs", B: "CERN (European Organization for Nuclear Research)", C: "MIT Media Lab", D: "DARPA" },
        correctAnswer: "B",
        explanation: "Tim Berners-Lee proposed and built the first World Wide Web browser and server at CERN in Geneva, Switzerland."
      }
    },
    {
      id: "wh_1991ce",
      year: 1991,
      dateDisplay: "December 25 – 26, 1991",
      title: "Dissolution of the Soviet Union (End of the Cold War)",
      category: "political",
      era: "cold_war",
      eraName: "Cold War & Decolonization (1945 – 1991 CE)",
      significance: "Soviet President Mikhail Gorbachev resigned and the red hammer-and-sickle Soviet flag was lowered over the Kremlin, formally dissolving the USSR into 15 independent republics and terminating the Cold War.",
      keyFigures: ["Mikhail Gorbachev", "Boris Yeltsin", "George H.W. Bush"],
      outcomes: [
        "Gave birth to 15 independent sovereign states across Eurasia, including Russia, Ukraine, Belarus, and the Central Asian Republics (CARs).",
        "Concluded 45 years of bipolar superpower rivalry, ushering in an American-dominated unipolar international system.",
        "Opened massive geo-economic connectivity opportunities for Pakistan's 'Vision Central Asia' and trade corridors."
      ],
      cssExamNotes: "International Relations, Russian History, Eurasian Geopolitics.",
      examMcq: {
        questionText: "Following the dissolution of the Soviet Union in December 1991, how many independent sovereign republics emerged?",
        options: { A: "10", B: "12", C: "15", D: "20" },
        correctAnswer: "C",
        explanation: "The dissolution of the USSR gave rise to 15 sovereign nations, including Russia, the 3 Baltic states, Ukraine, Belarus, Moldova, the 3 South Caucasus states, and the 5 Central Asian republics."
      }
    },

    // ========================================================
    // CONTEMPORARY ERA & 21ST CENTURY (1991 – PRESENT)
    // ========================================================
    {
      id: "wh_1993ce",
      year: 1993,
      dateDisplay: "November 1, 1993",
      title: "Maastricht Treaty Takes Effect: Establishment of the European Union",
      category: "treaties",
      era: "contemporary",
      eraName: "Contemporary Era & 21st Century (1991 – Present)",
      significance: "The Treaty on European Union (Maastricht Treaty), signed by members of the European Community in 1992, officially came into force, creating the European Union, European citizenship, and the roadmap for the Euro single currency.",
      keyFigures: ["Helmut Kohl", "François Mitterrand", "Jacques Delors"],
      outcomes: [
        "Created the world's most advanced supranational economic and political integration bloc.",
        "Led to the launch of the Euro currency (€) in 1999 (circulating in 2024 across 20 Eurozone nations).",
        "EU became Pakistan's largest global export market and awarded Pakistan GSP+ status in 2014."
      ],
      cssExamNotes: "International Relations, European Integration, Trade Economics.",
      examMcq: {
        questionText: "Which landmark 1992 treaty, signed in the Netherlands, formally established the European Union?",
        options: { A: "Treaty of Rome", B: "Maastricht Treaty", C: "Treaty of Lisbon", D: "Treaty of Amsterdam" },
        correctAnswer: "B",
        explanation: "The Maastricht Treaty, signed on February 7, 1992 in Maastricht, Netherlands, created the modern European Union."
      }
    },
    {
      id: "wh_1994ce",
      year: 1994,
      dateDisplay: "April 27, 1994",
      title: "End of Apartheid in South Africa & Election of Nelson Mandela",
      category: "revolutions",
      era: "contemporary",
      eraName: "Contemporary Era & 21st Century (1991 – Present)",
      significance: "South Africa held its first non-racial, democratic general election, ending over three centuries of white minority rule and 46 years of institutionalized racial segregation (Apartheid). Nelson Mandela was inaugurated as President.",
      keyFigures: ["Nelson Mandela", "F.W. de Klerk", "Archbishop Desmond Tutu"],
      outcomes: [
        "Demonstrated the triumph of peaceful reconciliation and non-violent moral resistance over racial oppression.",
        "Established the Truth and Reconciliation Commission (TRC) to investigate gross human rights violations.",
        "Mandela and de Klerk were jointly awarded the 1993 Nobel Peace Prize."
      ],
      cssExamNotes: "World History, African History, Human Rights, Peace & Conflict Studies.",
      examMcq: {
        questionText: "Who was elected as the first Black President of South Africa in the historic multi-racial democratic elections of April 1994?",
        options: { A: "Desmond Tutu", B: "Nelson Mandela", C: "Thabo Mbeki", D: "Robert Mugabe" },
        correctAnswer: "B",
        explanation: "Nelson Mandela was elected President in 1994 after spending 27 years in prison, leading South Africa's transition from apartheid to democracy."
      }
    },
    {
      id: "wh_1998ce",
      year: 1998,
      dateDisplay: "May 28 & 30, 1998",
      title: "Youm-e-Takbeer: Pakistan Becomes a Declared Nuclear Weapon State",
      category: "discoveries",
      era: "contemporary",
      eraName: "Contemporary Era & 21st Century (1991 – Present)",
      significance: "In response to India's Pokhran-II tests, Pakistan conducted five underground nuclear tests in the Ras Koh Hills of Chagai District, Balochistan, on May 28, followed by a sixth test on May 30, restoring strategic parity in South Asia.",
      keyFigures: ["Prime Minister Nawaz Sharif", "Dr. Abdul Qadeer Khan", "PAEC Scientists (Dr. Ishfaq Ahmad)", "Dr. Samar Mubarakmand"],
      outcomes: [
        "Established credible minimum nuclear deterrence, neutralizing India's conventional military superiority and preventing all-out war.",
        "Pakistan became the 7th declared nuclear weapon state in the world and the first in the Muslim world.",
        "May 28 is celebrated nationally as 'Youm-e-Takbeer' (Day of Greatness)."
      ],
      cssExamNotes: "Pakistan Affairs, International Relations, Strategic Deterrence, Nuclear Politics.",
      examMcq: {
        questionText: "In which mountain range of Balochistan did Pakistan conduct its historic nuclear tests on May 28, 1998 (Youm-e-Takbeer)?",
        options: { A: "Sulaiman Mountains", B: "Ras Koh Hills, Chagai", C: "Toba Kakar Range", D: "Kirthar Range" },
        correctAnswer: "B",
        explanation: "Pakistan conducted its underground nuclear tests in the Ras Koh Hills of Chagai District, Balochistan, on May 28, 1998."
      }
    },
    {
      id: "wh_2001ce",
      year: 2001,
      dateDisplay: "September 11, 2001",
      title: "September 11 Terrorist Attacks on the United States",
      category: "wars",
      era: "contemporary",
      eraName: "Contemporary Era & 21st Century (1991 – Present)",
      significance: "Al-Qaeda hijackers crashed commercial airliners into the World Trade Center towers in New York City and the Pentagon in Washington D.C., killing 2,977 victims and reshaping 21st-century global security and international law.",
      keyFigures: ["George W. Bush", "Osama bin Laden"],
      outcomes: [
        "US President George W. Bush declared the 'Global War on Terrorism' (GWOT), invoking NATO Article 5 for the first and only time.",
        "Launched the US invasion of Afghanistan (October 2001) and invasion of Iraq (March 2003).",
        "Pakistan became a frontline Major Non-NATO Ally (MNNA), suffering over 80,000 casualties and over $150 Billion in economic losses."
      ],
      cssExamNotes: "International Relations, Terrorism & Counter-Terrorism, US Foreign Policy.",
      examMcq: {
        questionText: "Following the 9/11 attacks in 2001, which core collective defense article of the North Atlantic Treaty was invoked by NATO for the only time in its history?",
        options: { A: "Article 2", B: "Article 4", C: "Article 5", D: "Article 10" },
        correctAnswer: "C",
        explanation: "NATO invoked Article 5 for the first time in history on September 12, 2001, designating the 9/11 attacks as an assault against all allies."
      }
    },
    {
      id: "wh_2003ce",
      year: 2003,
      dateDisplay: "April 2003",
      title: "Completion of the Human Genome Project",
      category: "discoveries",
      era: "contemporary",
      eraName: "Contemporary Era & 21st Century (1991 – Present)",
      significance: "An international consortium of scientists successfully mapped and sequenced over 99% of the 3 billion chemical base pairs in the human genetic code, revolutionizing personalized medicine, genomics, and pharmacology.",
      keyFigures: ["Francis Collins", "Craig Venter"],
      outcomes: [
        "Identified approximately 20,000 to 25,000 human genes, deciphering the molecular blueprint of human biology.",
        "Catalyzed targeted cancer therapies, rare genetic disease diagnosis, and CRISPR-Cas9 precision medicine.",
        "All sequence data was released freely into open-access public databases for global scientific benefit."
      ],
      cssExamNotes: "General Science & Ability, Biotechnology, Genetics.",
      examMcq: {
        questionText: "The Human Genome Project, completed in April 2003, successfully sequenced approximately how many chemical base pairs of human DNA?",
        options: { A: "300 Million", B: "1 Billion", C: "3 Billion", D: "30 Billion" },
        correctAnswer: "C",
        explanation: "The Human Genome Project sequenced approximately 3.1 billion base pairs of the human genome with 99.99% accuracy."
      }
    },
    {
      id: "wh_2008ce",
      year: 2008,
      dateDisplay: "2007 – 2008 CE",
      title: "The Global Financial Crisis (Subprime Mortgage Collapse)",
      category: "political",
      era: "contemporary",
      eraName: "Contemporary Era & 21st Century (1991 – Present)",
      significance: "The collapse of the US subprime mortgage bubble triggered the bankruptcy of Lehman Brothers in September 2008, producing the most severe worldwide economic downturn since the Great Depression of 1929.",
      keyFigures: ["Ben Bernanke", "Henry Paulson", "Barack Obama"],
      outcomes: [
        "Resulted in trillions of dollars in wealth destruction, massive government bank bailouts, and emergency quantitative easing (QE).",
        "Sparked the Eurozone sovereign debt crisis (Greek debt restructuring) and widespread public austerity debates.",
        "Elevated the G20 leaders' summit into the premier global economic coordination steering body."
      ],
      cssExamNotes: "Economics, International Political Economy, Financial Regulation.",
      examMcq: {
        questionText: "The bankruptcy of which major Wall Street investment bank on September 15, 2008 marked the acute climax of the Global Financial Crisis?",
        options: { A: "Bear Stearns", B: "Lehman Brothers", C: "Goldman Sachs", D: "Merrill Lynch" },
        correctAnswer: "B",
        explanation: "The sudden bankruptcy filing of Lehman Brothers on September 15, 2008 sparked panic throughout global financial markets."
      }
    },
    {
      id: "wh_2010ce",
      year: 2010,
      dateDisplay: "April 19, 2010",
      title: "The 18th Constitutional Amendment in Pakistan: Restoring Provincial Autonomy",
      category: "political",
      era: "contemporary",
      eraName: "Contemporary Era & 21st Century (1991 – Present)",
      significance: "Pakistan's Parliament passed the landmark 18th Constitutional Amendment, abolishing the Concurrent Legislative List, stripping the President of unilateral dissolution powers (58-2b), and devolving health, education, and resources to the provinces.",
      keyFigures: ["Raza Rabbani (Chairman Parliamentary Committee)", "President Asif Ali Zardari", "Nawaz Sharif"],
      outcomes: [
        "Restored the parliamentary supremacy envisioned in the 1973 Constitution and safeguarded provincial fiscal autonomy via the NFC Award.",
        "Introduced Article 10A (Right to Fair Trial) and Article 25A (Right to Free and Compulsory Education).",
        "Institutionalized the Council of Common Interests (CCI) as the apex inter-governmental dispute forum."
      ],
      cssExamNotes: "Pakistan Affairs, Constitutional Law, Federalism & Governance.",
      examMcq: {
        questionText: "Which landmark constitutional amendment passed in April 2010 abolished the Concurrent Legislative List and devolved extensive powers to the provinces in Pakistan?",
        options: { A: "17th Amendment", B: "18th Amendment", C: "21st Amendment", D: "25th Amendment" },
        correctAnswer: "B",
        explanation: "The 18th Constitutional Amendment, passed on April 19, 2010, abolished the Concurrent Legislative List and devolved 17 federal ministries to the provinces."
      }
    },
    {
      id: "wh_2011ce",
      year: 2011,
      dateDisplay: "2010 – 2011 CE",
      title: "The Arab Spring: Revolutionary Uprisings Across the Middle East",
      category: "revolutions",
      era: "contemporary",
      eraName: "Contemporary Era & 21st Century (1991 – Present)",
      significance: "Triggered by the self-immolation of Mohamed Bouazizi in Tunisia, a wave of pro-democracy protests toppled entrenched authoritarian regimes in Tunisia (Zine El Abidine Ben Ali), Egypt (Hosni Mubarak), Libya (Muammar Gaddafi), and Yemen (Ali Abdullah Saleh).",
      keyFigures: ["Mohamed Bouazizi", "Hosni Mubarak", "Muammar Gaddafi"],
      outcomes: [
        "Demonstrated the unprecedented mobilization power of social media and youth demographic pressure in the Arab world.",
        "Descended in several nations into protracted, devastating civil wars and proxy battlegrounds, notably in Syria and Yemen.",
        "Gave rise to extremist power vacuums (ISIS/Daesh) and major refugee crises across the Mediterranean into Europe."
      ],
      cssExamNotes: "Middle East Studies, International Relations, Revolutionary Theory.",
      examMcq: {
        questionText: "The revolutionary wave of uprisings known as the 'Arab Spring' began in December 2010 in which North African nation?",
        options: { A: "Egypt", B: "Tunisia", C: "Libya", D: "Syria" },
        correctAnswer: "B",
        explanation: "The Arab Spring originated in Tunisia following the protest and self-immolation of street vendor Mohamed Bouazizi in Sidi Bouzid."
      }
    },
    {
      id: "wh_2013ce",
      year: 2013,
      dateDisplay: "2013 – 2015 CE",
      title: "China Launches the Belt & Road Initiative (BRI) & CPEC in Pakistan",
      category: "political",
      era: "contemporary",
      eraName: "Contemporary Era & 21st Century (1991 – Present)",
      significance: "President Xi Jinping unveiled the multi-trillion-dollar Belt and Road Initiative (BRI) to recreate the ancient Silk Road across Afro-Eurasia. In April 2015, Chinese President Xi Jinping visited Islamabad, launching the flagship $62B China-Pakistan Economic Corridor (CPEC).",
      keyFigures: ["President Xi Jinping", "Prime Minister Nawaz Sharif"],
      outcomes: [
        "Constructed deep-sea port facilities at Gwadar, linking western China's Xinjiang province directly to the Arabian Sea.",
        "Addressed Pakistan's chronic energy crisis by adding over 8,000 MW of power to the national grid and constructing modern highways (M-5 Motorway, KKH Phase-II).",
        "Represented a paradigm shift from traditional geopolitics to geo-economics and connectivity across Eurasia."
      ],
      cssExamNotes: "Pakistan Affairs, Current Affairs, CPEC, International Relations.",
      examMcq: {
        questionText: "Which deep-sea port in southwestern Balochistan serves as the maritime apex of the China-Pakistan Economic Corridor (CPEC)?",
        options: { A: "Port Qasim", B: "Karachi Port", C: "Gwadar Port", D: "Pasni Port" },
        correctAnswer: "C",
        explanation: "Gwadar Port on the Arabian Sea coast of Balochistan is the strategic gateway and crown jewel of the China-Pakistan Economic Corridor (CPEC)."
      }
    },
    {
      id: "wh_2015ce",
      year: 2015,
      dateDisplay: "December 12, 2015",
      title: "The Paris Climate Agreement (COP21)",
      category: "treaties",
      era: "contemporary",
      eraName: "Contemporary Era & 21st Century (1991 – Present)",
      significance: "196 nations adopted the legally binding international treaty on climate change at the 21st Conference of the Parties (COP21) in Paris, committing to hold the increase in global average temperature to well below 2°C above pre-industrial levels, pursuing 1.5°C.",
      keyFigures: ["Laurent Fabius (COP21 President)", "Ban Ki-moon (UN Sec-Gen)", "Barack Obama"],
      outcomes: [
        "Established Nationally Determined Contributions (NDCs) requiring every signatory to outline emission reduction targets.",
        "Created global climate finance frameworks to support developing nations vulnerable to climate shocks (Loss and Damage).",
        "Crucial for Pakistan, which consistently ranks among the world's top 10 most climate-vulnerable countries despite emitting <1% of global greenhouse gases."
      ],
      cssExamNotes: "Environmental Science, International Law, Climate Diplomacy.",
      examMcq: {
        questionText: "The 2015 Paris Climate Agreement (COP21) established the global target to limit average planetary warming to well below:",
        options: { A: "1.0°C", B: "2.0°C (with ambitions for 1.5°C)", C: "3.0°C", D: "4.0°C" },
        correctAnswer: "B",
        explanation: "The Paris Agreement sets the goal of keeping global temperature rise well below 2°C above pre-industrial levels, with efforts to cap it at 1.5°C."
      }
    },
    {
      id: "wh_2020ce",
      year: 2020,
      dateDisplay: "2019 – 2022 CE",
      title: "The COVID-19 Global Pandemic & Accelerated mRNA Vaccine Inventions",
      category: "discoveries",
      era: "contemporary",
      eraName: "Contemporary Era & 21st Century (1991 – Present)",
      significance: "The SARS-CoV-2 coronavirus caused a catastrophic global respiratory pandemic. Scientists achieved a historic breakthrough by designing, testing, and deploying mRNA vaccines (Pfizer-BioNTech, Moderna) in under 12 months.",
      keyFigures: ["Dr. Katalin Karikó", "Dr. Drew Weissman", "Dr. Tedros Adhanom Ghebreyesus (WHO)"],
      outcomes: [
        "Inaugurated the clinical era of mRNA technology, for which Katalin Karikó and Drew Weissman won the 2023 Nobel Prize in Physiology or Medicine.",
        "Triggered unprecedented global economic shutdowns, digital remote work transformation, and supply chain disruptions.",
        "Pakistan's National Command and Operation Centre (NCOC) earned international acclaim for smart lockdown strategies and rapid vaccination."
      ],
      cssExamNotes: "General Science, Public Health, International Governance.",
      examMcq: {
        questionText: "Which innovative biotechnology, utilized by BioNTech/Pfizer and Moderna, enabled the unprecedented rapid development of COVID-19 vaccines in 2020?",
        options: { A: "Live attenuated viral vectors", B: "mRNA (Messenger RNA) technology", C: "Inactivated whole virus", D: "Recombinant protein sub-units" },
        correctAnswer: "B",
        explanation: "Messenger RNA (mRNA) technology directed human cells to produce the harmless viral spike protein, triggering a rapid, robust immune response."
      }
    },
    {
      id: "wh_2022ce",
      year: 2022,
      dateDisplay: "February 24, 2022",
      title: "Russian Invasion of Ukraine & Geopolitical Realignment of Europe",
      category: "wars",
      era: "contemporary",
      eraName: "Contemporary Era & 21st Century (1991 – Present)",
      significance: "Russian President Vladimir Putin ordered a full-scale military invasion of Ukraine, sparking the largest interstate conventional military conflict on European soil since World War II.",
      keyFigures: ["Vladimir Putin", "Volodymyr Zelenskyy", "Joe Biden"],
      outcomes: [
        "Ended decades of European post-Cold War security architecture, triggering massive Western sanctions against Russia.",
        "Prompted previously neutral Nordic nations Finland (2023) and Sweden (2024) to abandon non-alignment and join NATO.",
        "Accelerated global energy transition, food supply disruptions in developing countries, and consolidation of Russia-China strategic ties."
      ],
      cssExamNotes: "International Relations, European Geopolitics, Strategic Studies, International Law.",
      examMcq: {
        questionText: "Which two historically non-aligned Nordic nations formally joined NATO in 2023 and 2024 as a direct response to the Russia-Ukraine war?",
        options: { A: "Norway and Denmark", B: "Finland and Sweden", C: "Austria and Switzerland", D: "Ireland and Iceland" },
        correctAnswer: "B",
        explanation: "Finland joined NATO as the 31st member on April 4, 2023, followed by Sweden as the 32nd member on March 7, 2024."
      }
    },
    {
      id: "wh_2024ce",
      year: 2024,
      dateDisplay: "2024 CE",
      title: "Expansion of BRICS (BRICS+) & Multilateral Multi-Polarity",
      category: "political",
      era: "contemporary",
      eraName: "Contemporary Era & 21st Century (1991 – Present)",
      significance: "Effective January 1, 2024, BRICS formally expanded to BRICS+ with the accession of Egypt, Ethiopia, Iran, and the United Arab Emirates. The 16th Summit in Kazan, Russia (October 2024) highlighted de-dollarization and local currency payment systems.",
      keyFigures: ["Vladimir Putin", "Xi Jinping", "Narendra Modi", "Lula da Silva", "Dilma Rousseff"],
      outcomes: [
        "BRICS+ members represent approximately 45% of world population and 36% of global GDP in purchasing power parity (PPP).",
        "Pakistan submitted its formal application to join BRICS in November 2023 with Russian and Chinese backing.",
        "Signaled the deepening structural shift toward a multipolar global order challenging traditional G7/Western financial supremacy."
      ],
      cssExamNotes: "International Relations, Global South, Geo-economics, Multipolarity.",
      examMcq: {
        questionText: "Which four nations officially joined the BRICS coalition as full member states on January 1, 2024?",
        options: { A: "Pakistan, Bangladesh, Indonesia, Turkey", B: "Egypt, Ethiopia, Iran, United Arab Emirates", C: "Saudi Arabia, Argentina, Nigeria, Qatar", D: "Kazakhstan, Algeria, Mexico, Vietnam" },
        correctAnswer: "B",
        explanation: "Egypt, Ethiopia, Iran, and the UAE formally joined BRICS on January 1, 2024, inaugurating the BRICS+ era."
      }
    },
    {
      id: "wh_2024sco",
      year: 2024,
      dateDisplay: "October 15 – 16, 2024",
      title: "Pakistan Hosts 23rd SCO Council of Heads of Government (CHG) Summit",
      category: "political",
      era: "contemporary",
      eraName: "Contemporary Era & 21st Century (1991 – Present)",
      significance: "Pakistan hosted the landmark 23rd Meeting of the Council of Heads of Government of the Shanghai Cooperation Organisation in Islamabad, hosting Chinese Premier Li Qiang, Russian PM Mikhail Mishustin, and Indian EAM S. Jaishankar (first visit by an Indian Foreign Minister in 9 years).",
      keyFigures: ["Prime Minister Shehbaz Sharif", "Premier Li Qiang (China)", "PM Mikhail Mishustin (Russia)", "EAM S. Jaishankar (India)"],
      outcomes: [
        "Reaffirmed Pakistan's pivotal geographic position as a geo-economic bridge between Central Asia, South Asia, and China.",
        "Adopted joint communiqués emphasizing regional trade in local currencies, climate disaster cooperation, and connectivity corridors.",
        "Marked a rare, thawed diplomatic engagement between Pakistan and India on multilateral sidelines."
      ],
      cssExamNotes: "Current Affairs, Pakistan Affairs, International Relations, Regional Connectivity.",
      examMcq: {
        questionText: "Which landmark regional summit did Pakistan host in Islamabad on October 15–16, 2024, attended by leaders of China, Russia, and Central Asian states?",
        options: { A: "19th SAARC Summit", B: "23rd SCO Council of Heads of Government (CHG) Summit", C: "OIC Islamic Summit", D: "D-8 Summit" },
        correctAnswer: "B",
        explanation: "Pakistan hosted the 23rd Meeting of the Council of Heads of Government (CHG) of the Shanghai Cooperation Organisation in Islamabad."
      }
    },
    {
      id: "wh_2024amend",
      year: 2024,
      dateDisplay: "October 21, 2024",
      title: "The 26th Constitutional Amendment in Pakistan: Judicial Reforms",
      category: "political",
      era: "contemporary",
      eraName: "Contemporary Era & 21st Century (1991 – Present)",
      significance: "Pakistan's Parliament enacted the 26th Constitutional Amendment, reforming the judicial appointment process, establishing specialized Constitutional Benches in the Supreme Court and High Courts, and fixing the tenure of the Chief Justice of Pakistan to three years.",
      keyFigures: ["Prime Minister Shehbaz Sharif", "Bilawal Bhutto Zardari", "Azam Nazeer Tarar (Law Minister)", "Justice Yahya Afridi"],
      outcomes: [
        "Created dedicated Constitutional Benches to adjudicate constitutional interpretation, fundamental rights, and political questions.",
        "Empowered a 12-member parliamentary committee to select the Chief Justice of Pakistan from among the three most senior judges.",
        "Constitutes one of the most consequential structural reforms to Pakistan's judicial architecture since 1973."
      ],
      cssExamNotes: "Pakistan Affairs, Constitutional Law, Judicial System of Pakistan.",
      examMcq: {
        questionText: "The 26th Constitutional Amendment, enacted by Pakistan's Parliament in October 2024, primarily restructured which state institution?",
        options: { A: "The Electoral Commission", B: "The Superior Judiciary (Supreme Court & Constitutional Benches)", C: "The Armed Forces", D: "The Civil Services" },
        correctAnswer: "B",
        explanation: "The 26th Amendment instituted major judicial reforms, introducing Constitutional Benches and restructuring the appointment and tenure of the Chief Justice of Pakistan."
      }
    }
  ];

  // Helper APIs
  const TIMELINE_API = {
    getAllEvents: function () {
      return JSON.parse(JSON.stringify(WORLD_EVENTS));
    },
    getEventsByCategory: function (cat) {
      if (!cat || cat === 'all') return this.getAllEvents();
      return WORLD_EVENTS.filter(e => e.category === cat);
    },
    getEventsByEra: function (era) {
      if (!era || era === 'all') return this.getAllEvents();
      return WORLD_EVENTS.filter(e => e.era === era);
    },
    getEventById: function (id) {
      return WORLD_EVENTS.find(e => e.id === id) || null;
    },
    searchEvents: function (q) {
      if (!q) return this.getAllEvents();
      const term = q.toLowerCase().trim();
      return WORLD_EVENTS.filter(e =>
        e.title.toLowerCase().includes(term) ||
        String(e.year).includes(term) ||
        e.dateDisplay.toLowerCase().includes(term) ||
        e.significance.toLowerCase().includes(term) ||
        (e.keyFigures && e.keyFigures.some(f => f.toLowerCase().includes(term))) ||
        (e.outcomes && e.outcomes.some(o => o.toLowerCase().includes(term))) ||
        (e.cssExamNotes && e.cssExamNotes.toLowerCase().includes(term))
      );
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TIMELINE_API;
  }
  if (typeof window !== 'undefined') {
    window.WORLD_HISTORY_TIMELINE_DATA = TIMELINE_API;
    // Backwards-compatible bridge for existing code
    if (!window.HISTORICAL_TIMELINE_DATA) {
      window.HISTORICAL_TIMELINE_DATA = TIMELINE_API;
    }
  }

})(typeof window !== 'undefined' ? window : this);
`;

const outputPath = path.join(__dirname, '..', 'frontend', 'js', 'data_world_history_timeline.js');
fs.writeFileSync(outputPath, code.trim(), 'utf8');
console.log('Successfully wrote data_world_history_timeline.js. File size:', fs.statSync(outputPath).size, 'bytes');
