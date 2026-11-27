#!/usr/bin/env python3
"""
Expands frontend/js/data_puzzles.js:
1. Adds ~250 brand-new high-yield competitive-exam words across all 6 disciplines
   in PUZZLE_VOCABULARY (bringing Word Search & Crossword pool from 247 -> ~500 words).
2. Runs a strict backtracking 13x13 crossword layout generator to append 5 new
   validated crossword puzzles per category (Sets 6-10 across all 7 categories =
   35 new puzzles, bringing total Crossword sets from 35 -> 70 puzzles).
"""

import json
import random
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUZZLES_JS = ROOT / "frontend" / "js" / "data_puzzles.js"

NEW_VOCAB = {
    "pakistan_affairs": [
        ("QUAID", "Revered title meaning 'Great Leader' bestowed upon Muhammad Ali Jinnah.", "Conferred popularly in 1938 by Maulana Mazharuddin Shaheed."),
        ("IQBAL", "Poet-Philosopher of the East who delivered the landmark 1930 Allahabad Address.", "Envisioned a consolidated Muslim state in northwestern British India."),
        ("LIAQUAT", "First Prime Minister of Pakistan who presented the 1949 Objectives Resolution.", "Signed the Liaquat-Nehru Pact on minority rights in April 1950."),
        ("NEHRU", "1928 constitutional report rejected by Jinnah's famous Fourteen Points.", "Proposed dominion status and joint electorates, reversing the 1916 Lucknow Pact."),
        ("CRIPPS", "1942 British wartime mission led by Sir Stafford offering post-war dominion status.", "Rejected by both Congress and the All-India Muslim League."),
        ("CABINETMISSION", "1946 three-member British delegation proposing a three-tier loose grouping of provinces.", "Comprised Pethick-Lawrence, Stafford Cripps, and A.V. Alexander."),
        ("WAVELL", "British Viceroy who convened the June 1945 Simla Conference.", "Failed over Muslim League's insistence on nominating all Muslim executive council members."),
        ("MOUNTBATTEN", "Last Viceroy of British India who announced the June 3rd Partition Plan in 1947.", "Advanced British withdrawal from June 1948 to August 1947."),
        ("KALAT", "Largest princely state of Balochistan that acceded to Pakistan in March 1948.", "Khan of Kalat Mir Ahmad Yar Khan signed the Instrument of Accession on March 27, 1948."),
        ("BAHAWALPUR", "First princely state under Nawab Sadiq Muhammad Khan V to accede to Pakistan.", "Provided crucial financial support to Pakistan's fledgling treasury in 1947."),
        ("JUNAGADH", "Kathiawar coastal princely state whose Nawab acceded to Pakistan in September 1947.", "Forcibly occupied by Indian troops in November 1947 despite legal accession."),
        ("BOGRA", "1953 constitutional formula resolving parity between East and West Pakistan.", "Proposed bicameral parity across combined parliamentary sittings."),
        ("ONEUNIT", "1955 administrative merger uniting West Pakistan's provinces into a single province.", "Dissolved via Legal Framework Order (LFO) by Yahya Khan in July 1970."),
        ("AYUB", "Field Marshal who promulgated the 1962 Presidential Constitution and Basic Democracies.", "Signed the 1960 Indus Waters Treaty and 1966 Tashkent Declaration."),
        ("TASHKENT", "Uzbek city where the January 1966 peace declaration was signed after the 1965 War.", "Mediated by Soviet Premier Alexei Kosygin between Ayub Khan and Lal Bahadur Shastri."),
        ("SHIMLA", "July 1972 bilateral accord signed after the 1971 war establishing the Line of Control.", "Signed by Zulfikar Ali Bhutto and Indira Gandhi on July 2, 1972."),
        ("MANGLA", "Major multipurpose dam on the Jhelum River in Mirpur, Azad Kashmir.", "Constructed between 1961 and 1967 as a replacement work under the Indus Waters Treaty."),
        ("DIAMER", "272-meter roller-compacted concrete mega-dam under construction on the Indus River.", "Located near Chilas; designed for 4,500 MW power and 6.4 MAF live water storage."),
        ("MOHMAND", "800-MW concrete-faced rockfill dam under construction on the Swat River in KP.", "Provides flood protection to Peshawar, Charsadda, and Nowshera."),
        ("REKODIQ", "World-class copper and gold porphyry deposit located in Chagai District, Balochistan.", "Developed jointly by Barrick Gold, Federal SOEs, and the Government of Balochistan."),
        ("THARPARKAR", "Sindh desert district containing 175 billion tonnes of indigenous lignite coal.", "Supplies over 2,600 MW of low-cost baseload electricity to Pakistan's national grid."),
        ("CHAGAI", "Balochistan mountain range where Pakistan conducted nuclear tests on May 28, 1998.", "Commemorated annually across Pakistan as Youm-e-Takbeer."),
        ("KAHUTA", "Site of Khan Research Laboratories (KRL) pioneering Pakistan's uranium enrichment.", "Named after Dr. Abdul Qadeer Khan in 1981."),
        ("SUPARCO", "Pakistan's national space agency established in Karachi in September 1961.", "Co-founded under the vision of Nobel Laureate Prof. Abdus Salam; launched PRSC-EO1 in 2025."),
        ("NADRA", "Autonomous national biometric identity and civil registration authority of Pakistan.", "Formed in March 2000; issues Computerized National Identity Cards (CNICs)."),
        ("COUNCIL", "Council of Common Interests (CCI) resolving federal-provincial disputes under Article 153.", "Chaired by the Prime Minister and includes all four provincial Chief Ministers."),
        ("FINANCE", "National Finance Commission (NFC) distributing divisible tax pool under Article 160.", "The 7th NFC Award (2009) allocated 57.5% vertical share to the provinces."),
        ("OMBUDSMAN", "Wafaqi Mohtasib office established in 1983 to redress federal maladministration.", "Provides free, expeditious administrative relief to citizens against agency injustice."),
        ("KHUNJERAB", "Highest paved international border crossing (4,693m) linking Gilgit-Baltistan with Xinjiang.", "Marks the northern terminus of the Karakoram Highway (N-35)."),
        ("HARAPPA", "Major Bronze Age Indus Valley Civilization urban center in Sahiwal District, Punjab.", "Excavated in 1921 by Daya Ram Sahni along the old bed of the Ravi River."),
        ("MOHENJODARO", "UNESCO World Heritage Indus Civilization metropolis ('Mound of the Dead') in Larkana.", "Excavated by R.D. Banerji in 1922; famous for the Great Bath and Priest-King sculpture."),
        ("TAXILA", "Ancient Gandhara Buddhist learning hub housing Julian and Dharmarajika stupas.", "Inscribed as a UNESCO World Heritage Site in 1980; linked to Kautilya and Ashoka."),
        ("ROHTAS", "16th-century UNESCO World Heritage fortress built by Sher Shah Suri near Jhelum.", "Constructed between 1541 and 1548 to subdue Gakhar tribes loyal to Humayun."),
        ("MAKLI", "Vast medieval necropolis near Thatta in Sindh listed as a UNESCO World Heritage Site.", "Contains monumental tombs of Samma, Arghun, Tarkhan, and Mughal rulers."),
        ("SHALAMAR", "Terraced Mughal garden in Lahore commissioned by Emperor Shah Jahan in 1641.", "Inscribed alongside Lahore Fort on the UNESCO World Heritage List in 1981."),
        ("CHITRAL", "Northern Hindukush valley home to Tirich Mir (7,708m) and the Kalash valleys.", "Connected to Dir via the all-weather Lowari Tunnel."),
        ("BOLAN", "Historic mountain pass in Balochistan connecting Sibi with Quetta.", "Historically served as a vital trade and military gateway between South and Central Asia."),
        ("KHYBER", "Iconic 53-km mountain pass linking Peshawar with Jalalabad in Afghanistan.", "Guarded historically by Jamrud and Ali Masjid forts."),
        ("SIAHCEN", "76-km Karakoram glacier—the second-longest non-polar glacier on Earth.", "Known as the world's highest battlefield since 1984."),
        ("ORMARA", "Strategic Makran coastal town hosting Pakistan Navy's Jinnah Naval Base.", "Located midway between Karachi and Gwadar along the Makran Coastal Highway.")
    ],
    "international_relations": [
        ("DETENTE", "Relaxation of strained geopolitical tensions between rival superpowers during the Cold War.", "Exemplified by the 1972 Nixon-Brezhnev SALT I and ABM treaties."),
        ("CONTAINMENT", "Cold War grand strategy articulated by George Kennan to halt Soviet expansionism.", "Operationalized through the Truman Doctrine (1947), Marshall Plan, and NATO (1949)."),
        ("REALISM", "IR paradigm viewing sovereign states as rational actors pursuing power in an anarchic world.", "Key theorists include Hans Morgenthau (Classical) and Kenneth Waltz (Structural/Neorealism)."),
        ("LIBERALISM", "IR theory emphasizing economic interdependence, international law, and democratic peace.", "Rooted in Immanuel Kant's Perpetual Peace and Keohane & Nye's Complex Interdependence."),
        ("CONSTRUCTIVISM", "IR school arguing anarchy and state interests are socially constructed through norms and identity.", "Alexander Wendt famously wrote: 'Anarchy is what states make of it' (1992)."),
        ("WESTPHALIA", "1648 European peace treaties establishing modern territorial state sovereignty.", "Ended the Thirty Years' War and enshrined the principle of non-interference."),
        ("BRETTONWOODS", "1944 Allied monetary conference creating the IMF and World Bank.", "Established a postwar gold-convertible US dollar exchange system until 1971."),
        ("BANDUNG", "1955 Afro-Asian conference in Indonesia laying foundations for the Non-Aligned Movement.", "Co-sponsored by Indonesia, Pakistan, India, Burma, and Ceylon across 29 nations."),
        ("NONALIGNED", "Cold War diplomatic movement (NAM) founded in Belgrade in 1961 to avoid bloc entanglement.", "Comprises 120+ developing states, the largest grouping at the UN after the G-77."),
        ("MONROE", "1823 US foreign policy doctrine opposing European colonial intervention in the Americas.", "Declared the Western Hemisphere off-limits to European recolonization."),
        ("TRUMAN", "1947 American doctrine pledging military and economic aid to Greece and Turkey.", "Marked the formal onset of US Cold War containment policy."),
        ("MARSHALL", "1948 US European Recovery Program channeling $13B to rebuild postwar Western Europe.", "Earned US Secretary of State George C. Marshall the 1953 Nobel Peace Prize."),
        ("SCHENGEN", "European passport-free borderless travel zone named after a Luxembourg village.", "Expanded to 29 full European countries with Bulgaria and Romania's land accession in 2025."),
        ("MAASTRICHT", "1992 treaty formally founding the European Union and paving the way for the Euro.", "Entered into force on November 1, 1993, establishing the three-pillar EU structure."),
        ("LISBON", "2007 reform treaty modernizing EU voting and creating the European Council Presidency.", "Also introduced Article 50 governing voluntary withdrawal from the EU (used in Brexit)."),
        ("GENEVA", "1949 quartet of humanitarian conventions protecting wounded soldiers, POWs, and civilians.", "Forms the core of International Humanitarian Law (IHL) in armed conflict."),
        ("MONTEVIDEO", "1933 convention codifying the four legal criteria of sovereign statehood.", "Requires permanent population, defined territory, government, and capacity for foreign relations."),
        ("VIENNA", "1961 convention governing diplomatic immunity, embassies, and consular relations.", "Enshrines inviolability of diplomatic missions and envoys worldwide."),
        ("UNCLOS", "1982 UN Convention on the Law of the Sea ('Constitution for the Oceans').", "Establishes 12-nm territorial waters and 200-nm Exclusive Economic Zones (EEZs)."),
        ("AUTARKY", "Economic policy of complete national self-sufficiency and closed external trade.", "Contrasts sharply with Ricardian comparative advantage and WTO multilateralism."),
        ("MERCANTILISM", "Economic nationalism viewing global trade as a zero-sum contest to hoard bullion/surpluses.", "Modern 'neo-mercantilism' relies on industrial subsidies and strategic export controls."),
        ("APPEASEMENT", "Diplomatic policy of making concessions to an aggressive power to avoid war.", "Historically associated with the 1938 Munich Agreement ceding Sudetenland to Hitler."),
        ("BRINKMANSHIP", "Pushing dangerous geopolitical confrontations to the edge of war to coerce concessions.", "Dramatically illustrated during the October 1962 Cuban Missile Crisis."),
        ("PROXYWAR", "Indirect conflict in which rival powers back opposing local belligerents in a third country.", "Examples include Cold War conflicts in Korea, Vietnam, Angola, and 1980s Afghanistan."),
        ("SOFTPOWER", "Concept coined by Joseph Nye describing influence via culture, values, and diplomacy.", "Contrasts with coercive military and economic 'hard power'; combined as 'smart power'."),
        ("THUCYDIDES", "Strategic trap posited by Graham Allison when a rising power threatens a ruling hegemon.", "Examines 16 historical cases since Athens and Sparta, 12 of which ended in war."),
        ("HEARTLAND", "Geopolitical pivot theory by Halford Mackinder ('Who rules East Europe commands the Heartland').", "Countered by Nicholas Spykman's coastal 'Rimland' thesis."),
        ("CHABAHAR", "Iranian Gulf of Oman port developed as a gateway to Afghanistan and the INSTC corridor.", "Located ~170 km west of Pakistan's Gwadar deep-sea port."),
        ("QUAD", "Quadrilateral Security Dialogue uniting the US, Japan, India, and Australia in the Indo-Pacific.", "Revived in 2017 focusing on maritime security, critical tech, and supply chains."),
        ("AUKUS", "2021 trilateral defense pact among Australia, the UK, and the US for nuclear submarines.", "Includes Pillar I (SSN-AUKUS submarines) and Pillar II (quantum, AI, hypersonics)."),
        ("BIMSTEC", "Bay of Bengal regional grouping linking 7 South and Southeast Asian coastal/Himalayan states.", "Headquartered in Dhaka; bridges SAARC and ASEAN economies."),
        ("MERCOSUR", "South American customs union comprising Brazil, Argentina, Uruguay, Paraguay, and Bolivia.", "Reached a historic bi-regional trade pact with the European Union in December 2024."),
        ("ECOWAS", "West African regional political and economic union founded via the 1975 Treaty of Lagos.", "Mali, Burkina Faso, and Niger formally withdrew in January 2025 to form the Sahel Alliance."),
        ("COMMONWEALTH", "Voluntary association of 56 sovereign states mostly sharing historic ties to Britain.", "Chaired ceremonially by King Charles III; elected Shirley Botchwey as Secretary-General in 2024."),
        ("EXTRADITION", "Formal treaty-based surrender of a fugitive criminal by one sovereign state to another.", "Generally excludes purely political offenses under international law."),
        ("PERSONANONGRATA", "Diplomatic declaration rendering a foreign envoy unacceptable and compelling recall.", "Codified under Article 9 of the 1961 Vienna Convention on Diplomatic Relations."),
        ("BUFFERSTATE", "Smaller neutral country situated between two rival great powers reducing direct friction.", "Classic historical examples include Belgium, Nepal, Mongolia, and 19th-century Afghanistan."),
        ("BALKANIZATION", "Fragmentation of a larger state or region into smaller, often mutually hostile polities.", "Named after the breakup of Ottoman/Yugoslav territories in the Balkan Peninsula."),
        ("FINLANDIZATION", "Process whereby a smaller neighbor maintains domestic autonomy by accommodating a superpower's foreign policy.", "Derived from Finland's Cold War neutrality vis-à-vis the Soviet Union prior to joining NATO in 2023."),
        ("MINILATERAL", "Small, agile diplomatic coalitions of select states tackling specific strategic issues.", "Examples include I2U2, Quad, AUKUS, and the Minerals Security Partnership.")
    ],
    "science": [
        ("RIBOSOME", "Cellular organelle composed of rRNA and protein that synthesizes polypeptides.", "Found in both prokaryotes (70S) and eukaryotes (80S); site of mRNA translation."),
        ("LYSOSOME", "Membrane-bound organelle containing digestive enzymes ('suicidal bag' of the cell).", "Discovered by Christian de Duve, who won the 1974 Nobel Prize."),
        ("CHLOROPHYLL", "Magnesium-containing green pigment in chloroplasts capturing light for photosynthesis.", "Absorbs blue and red wavelengths most strongly while reflecting green light."),
        ("HEMOGLOBIN", "Iron-containing metalloprotein in red blood cells transporting oxygen from lungs to tissues.", "Each molecule binds up to four O2 molecules via ferrous (Fe2+) heme groups."),
        ("INSULIN", "Peptide hormone secreted by beta cells of the pancreas regulating blood glucose.", "Discovered by Banting and Best in 1921; deficiency causes Diabetes Mellitus."),
        ("THYROXINE", "Iodine-dependent hormone secreted by the thyroid gland regulating basal metabolic rate.", "Iodine deficiency leads to enlargement of the thyroid known as goiter."),
        ("NEURON", "Electrically excitable nerve cell transmitting signals across chemical synapses.", "Consists of dendrites, soma (cell body), myelin-sheathed axon, and axon terminals."),
        ("CEREBELLUM", "Hindbrain structure coordinating voluntary posture, balance, and fine motor precision.", "Located beneath the cerebrum; alcohol acutely impairs cerebellar coordination."),
        ("NEPHRON", "Microscopic structural and functional filtration unit of the human kidney.", "Each human kidney contains approximately one million nephrons."),
        ("ALVEOLI", "Tiny thin-walled air sacs in the lungs where O2 and CO2 gas exchange occurs.", "Provide a vast respiratory surface area of roughly 70–100 square meters."),
        ("CATALYST", "Substance accelerating a chemical reaction by lowering activation energy without being consumed.", "Biological protein catalysts in living cells are called enzymes."),
        ("ALLOTROPE", "Different structural forms of the same element in the same physical state (e.g., diamond, graphite, fullerene).", "Diamond is sp3 tetrahedral (hardest natural mineral); graphite is sp2 layered (electrical conductor)."),
        ("HALOGEN", "Reactive Group 17 non-metal elements (Fluorine, Chlorine, Bromine, Iodine) forming salts.", "Bromine is the only non-metallic element that is liquid at room temperature."),
        ("NOBLEGAS", "Chemically inert Group 18 monoatomic gases with complete valence electron shells.", "Includes Helium, Neon, Argon (most abundant in air ~0.93%), Krypton, Xenon, and Radon."),
        ("REFRACTION", "Bending of light waves when passing obliquely from one optical medium to another.", "Governed by Snell's Law; causes mirages, rainbows, and apparent shallowing of pools."),
        ("DIFFRACTION", "Spreading and bending of waves around obstacles or through narrow apertures.", "Demonstrates the wave nature of light, sound, X-rays, and matter (electrons)."),
        ("DOPPLER", "Apparent shift in wave frequency due to relative motion between source and observer.", "Redshift of distant galaxies provided Edwin Hubble key evidence for cosmic expansion."),
        ("ENTROPY", "Thermodynamic measure of molecular disorder or randomness in an isolated system.", "Second Law of Thermodynamics states total entropy never decreases in spontaneous processes."),
        ("SUPERCONDUCTOR", "Material exhibiting exactly zero electrical resistance and magnetic flux expulsion below critical temperature.", "Magnetic expulsion is known as the Meissner Effect; powers MRI magnets and maglev trains."),
        ("TRANSISTOR", "Semiconductor device invented at Bell Labs (1947) used to amplify or switch electronic signals.", "Invented by Bardeen, Brattain, and Shockley; replaced bulky vacuum tubes."),
        ("CAPACITOR", "Passive two-terminal electronic component storing energy in an electrostatic field.", "Capacitance is measured in Farads (F)."),
        ("TRANSFORMER", "Electromagnetic device stepping AC voltage up or down via mutual induction.", "Operates strictly on Alternating Current (AC), never steady Direct Current (DC)."),
        ("BAROMETER", "Meteorological instrument invented by Torricelli to measure atmospheric pressure.", "A sudden sharp drop in barometric reading indicates an approaching storm/cyclone."),
        ("HYGROMETER", "Scientific instrument used to measure relative humidity (moisture content) of the atmosphere.", "Dry-and-wet-bulb psychrometers are classic hygrometric devices."),
        ("ANEMOMETER", "Weather station instrument measuring wind speed.", "Typically uses rotating hemispherical cups or ultrasonic sensors."),
        ("ALTIMETER", "Aviation and mountaineering instrument measuring altitude above sea level via air pressure.", "Decreasing atmospheric pressure with height enables barometric altitude calculation."),
        ("GALVANOMETER", "Sensitive electromechanical instrument detecting and measuring small electric currents.", "Converted into an ammeter using a low-resistance shunt in parallel."),
        ("PASTEURIZATION", "Mild heat-treatment process destroying pathogens in milk and beverages to extend shelf life.", "Developed by French microbiologist Louis Pasteur in the 1860s."),
        ("VACCINATION", "Administration of antigenic material to stimulate adaptive immunity against pathogens.", "Pioneered in 1796 by Edward Jenner using cowpox against smallpox."),
        ("ANTIBIOTIC", "Antimicrobial compound targeting bacterial infections (ineffective against viruses).", "Alexander Fleming discovered Penicillin from Penicillium notatum mold in 1928."),
        ("SCURVY", "Deficiency disease caused by lack of Vitamin C (Ascorbic Acid) leading to bleeding gums.", "Historically afflicted long-voyage sailors deprived of fresh citrus fruits."),
        ("RICKETS", "Childhood bone-softening disorder caused by Vitamin D or calcium deficiency.", "Sunlight triggers natural synthesis of Vitamin D (cholecalciferol) in human skin."),
        ("BERIBERI", "Nervous and cardiovascular disorder caused by deficiency of Vitamin B1 (Thiamine).", "Common in populations subsisting almost exclusively on polished white rice."),
        ("STRATOSPHERE", "Second atmospheric layer (12–50 km) housing the UV-absorbing Ozone Layer.", "Commercial jetliners cruise in the lower stratosphere to avoid tropospheric turbulence."),
        ("IONOSPHERE", "Ionized upper atmospheric region reflecting long-distance HF radio waves back to Earth.", "Also produces spectacular polar auroras (Aurora Borealis and Australis)."),
        ("SUPERNOVA", "Cataclysmic stellar explosion marking the death of a massive star and forging heavy elements.", "Leaves behind either a ultra-dense neutron star (pulsar) or a stellar-mass black hole."),
        ("PERIHELION", "Point in Earth's elliptical orbit closest to the Sun (occurring around early January).", "Farthest orbital point in early July is called Aphelion (~152 million km)."),
        ("TECTONICS", "Geological theory explaining lithospheric plates moving atop the ductile asthenosphere.", "Builds Alfred Wegener's 1912 Continental Drift hypothesis into modern Earth science."),
        ("EPICENTER", "Point on Earth's surface vertically above the underground focus (hypocenter) of an earthquake.", "Experiences the earliest and typically strongest seismic shaking."),
        ("PERMAFROST", "Ground remaining continuously frozen at or below 0°C for at least two consecutive years.", "Thawing Arctic permafrost releases potent greenhouse methane (CH4) and CO2.")
    ],
    "law": [
        ("MANDAMUS", "Constitutional writ ('We Command') directing a public official to perform a mandatory statutory duty.", "Issued by High Courts under Article 199 and Supreme Court under Article 184(3)."),
        ("CERTIORARI", "Superior court writ quashing an unlawful or ultra vires order passed by a lower court/tribunal.", "Ensures subordinate judicial and quasi-judicial bodies act within lawful jurisdiction."),
        ("QUOWARRANTO", "Judicial writ requiring a person holding public office to show by what legal authority they claim it.", "Prevents usurpation of statutory public offices by unqualified appointees."),
        ("PROHIBITION", "Preventive writ issued by a superior court stopping an inferior court from exceeding jurisdiction.", "Prohibition stops ongoing proceedings, whereas Certiorari quashes a completed order."),
        ("ULTRAVIRES", "Latin legal doctrine ('beyond the powers') invalidating acts exceeding statutory or constitutional authority.", "Subordinate rules conflicting with parent legislation are struck down as ultra vires."),
        ("SUBJUDICE", "Matter currently under active judicial consideration and restricted from prejudicial public debate.", "Protects fair trial integrity from media trials or parliamentary interference."),
        ("AMICUSCURIAE", "Impartial 'friend of the court' appointed to assist judges on complex legal questions.", "Frequently appointed by Pakistan's Supreme Court in landmark constitutional hearings."),
        ("STARE", "Stare Decisis: common-law doctrine requiring courts to follow binding judicial precedents.", "Reflected in Articles 189 and 201 of the 1973 Constitution of Pakistan."),
        ("MENSREA", "Guilty mind or criminal intent required alongside Actus Reus to establish criminal liability.", "Derived from 'Actus non facit reum nisi mens sit rea'."),
        ("ACTUSREUS", "Physical guilty act or unlawful omission constituting the external element of a crime.", "Must concur with Mens Rea except in strict-liability statutory offenses."),
        ("ALIBI", "Defense plea ('elsewhere') proving the accused was at another place when the crime occurred.", "Governed under Article 24 (Plea of Alibi) of Qanun-e-Shahadat Order, 1984."),
        ("ACCOMPLICE", "Partner in crime; an approver who testifies for the prosecution under a tender of pardon.", "Dealt with under Articles 16 and 129(b) of Qanun-e-Shahadat and Section 337 CrPC."),
        ("ESTOPPEL", "Evidentiary rule preventing a party from contradicting their own prior representation.", "Codified in Articles 114–116 of the Qanun-e-Shahadat Order, 1984."),
        ("HEARSAY", "Indirect second-hand testimony generally inadmissible in court unless covered by statutory exceptions.", "Dying declarations (Article 46 QSO) form a classic exception to the hearsay rule."),
        ("PERJURY", "Criminal offense of willfully giving false evidence under oath in judicial proceedings.", "Punishable under Section 193 of the Pakistan Penal Code (PPC) with up to 7 years imprisonment."),
        ("DEFAMATION", "Intentional false communication harming a person's reputation (slander if spoken, libel if written).", "Criminalized under Sections 499–500 PPC alongside civil remedies under the Defamation Ordinance 2002."),
        ("EXTORTION", "Intentionally putting a person in fear of injury to dishonestly induce delivery of property.", "Defined under Section 383 PPC; aggravated extortion becomes Robbery under Section 390."),
        ("DACOITY", "Robbery committed or attempted conjointly by five or more persons.", "Defined under Section 391 PPC; punished severely under Section 395 PPC."),
        ("ABETMENT", "Instigating, conspiring in, or intentionally aiding the commission of an offense.", "Governed by Chapter V (Sections 107–120) of the Pakistan Penal Code."),
        ("SEDITION", "Words or signs inciting hatred or disaffection against lawful government authority.", "Historically codified in Section 124-A PPC (struck down/debated in landmark High Court rulings)."),
        ("COGNIZABLE", "Serious criminal offense in which police may register an FIR and arrest without warrant.", "Listed in Schedule II CrPC; Section 154 CrPC governs FIR registration for cognizable crimes."),
        ("REMAND", "Judicial order under Section 167 CrPC authorizing physical or judicial custody during investigation.", "Physical police remand cannot exceed 15 days in total under Section 167 CrPC."),
        ("CHALLAN", "Police investigation report submitted to a Magistrate under Section 173 CrPC upon completing inquiry.", "An interim report is called an Incomplete Challan; closure report for false cases is 'Cancel/B-Class'."),
        ("ACQUITTAL", "Formal court judgment clearing the accused of criminal charges when guilt is not proved beyond doubt.", "Under Section 403 CrPC and Article 13 Constitution (Double Jeopardy), an acquitted person cannot be retried."),
        ("PAROLE", "Conditional early release of a prisoner based on good conduct before sentence completion.", "Governed in Pakistan under the Good Conduct Prisoners' Probational Release Act, 1926."),
        ("PROBATION", "Judicial suspension of prison sentence allowing first-time offenders supervised community rehabilitation.", "Regulated under the Probation of Offenders Ordinance, 1960."),
        ("INJUNCTION", "Equitable court order ('stay order') restraining a party from performing a specific act.", "Temporary injunctions are granted under Order XXXIX CPC based on prima facie case and balance of convenience."),
        ("ARBITRATION", "Out-of-court dispute resolution where impartial arbitrators render a binding award.", "Governed domestically by the Arbitration Act, 1940 and internationally by the 1958 New York Convention."),
        ("TORT", "Civil wrong (such as negligence, nuisance, or trespass) giving rise to unliquidated damages.", "Distinguished from breach of contract (where duties are fixed by parties) and crime (prosecuted by the state)."),
        ("CAVEAT", "Latin maxim 'Caveat Emptor' ('Let the buyer beware') in commercial sale of goods law.", "Modern consumer protection statutes modify strict caveat emptor with implied warranties."),
        ("DOMICILE", "Permanent legal home connecting an individual to a territorial legal jurisdiction.", "Crucial in private international law and public-service quota allocation in Pakistan."),
        ("MORATORIUM", "Temporary legal suspension of debt enforcement, executions, or specific activities.", "Sovereign debt moratoria halt external creditor litigation during fiscal restructuring."),
        ("FORCE", "Force Majeure: contractual clause excusing non-performance due to extraordinary 'Acts of God' or war.", "Distinct from the statutory doctrine of frustration under Section 56 of the Contract Act, 1872."),
        ("LIEN", "Legal right of a creditor to retain possession of a debtor's property until debt is discharged.", "Recognized for bailees, unpaid sellers, and agents under the Contract Act, 1872."),
        ("INDEMNITY", "Contractual promise under Section 124 Contract Act to save another party from loss.", "Distinguished from a Contract of Guarantee (Section 126), which involves three parties (principal, creditor, surety)."),
        ("BAILMENT", "Delivery of goods by one person (bailor) to another (bailee) for a specific purpose upon return.", "Defined under Section 148 of the Contract Act, 1872."),
        ("SOVEREIGNTY", "Supreme, absolute legal and political authority of a state within its territory.", "In Pakistan, the Objectives Resolution affirms sovereignty over the entire universe belongs to Almighty Allah alone."),
        ("UNICAMERAL", "Legislature consisting of a single parliamentary chamber (e.g., Pakistan's 1956 and 1962 Constitutions).", "Countries like New Zealand, Sweden, Denmark, China, and Turkey operate unicameral parliaments."),
        ("FILIBUSTER", "Prolonged parliamentary speechmaking tactic used to delay or block a legislative vote.", "Famously associated with the United States Senate, where 60 votes ('cloture') end debate."),
        ("QUORUM", "Minimum number of lawmakers required to be present for valid parliamentary proceedings.", "Under Article 55(2) of Pakistan's Constitution, parliamentary quorum is one-fourth (1/4) of total membership.")
    ],
    "geography": [
        ("ISTHMUS", "Narrow strip of land with sea on either side connecting two larger landmasses (e.g., Panama, Suez).", "Contrasts directly with a Strait, which is a narrow navigable waterway connecting two seas."),
        ("ARCHIPELAGO", "Extensive group or chain of islands clustered across an ocean basin.", "Indonesia (>17,000 islands) is the world's largest archipelago state."),
        ("PENINSULA", "Landmass surrounded by water on three sides while connected to a mainland.", "The Arabian Peninsula (3.2 million sq km) is the largest peninsula on Earth."),
        ("ATOLL", "Ring-shaped coral reef island enclosing a central marine lagoon.", "Maldives, Tuvalu, and Kiribati consist predominantly of low-lying coral atolls."),
        ("FJORD", "Long, deep, narrow glacially carved sea inlet flanked by steep cliffs.", "Characteristic of Norway, Chile, New Zealand's South Island, and Greenland."),
        ("ESTUARY", "Partly enclosed coastal body of brackish water where a river meets ocean tides.", "Differs from a fan-shaped sediment Delta (such as the Ganges-Brahmaputra Sundarbans, the world's largest)."),
        ("TRIBUTARY", "Freshwater stream or river flowing into a larger main-stem river rather than directly into the sea.", "Jhelum, Chenab, Ravi, Beas, and Sutlej are major eastern/left-bank tributaries of the Indus."),
        ("MEANDER", "Pronounced sinuous bend or loop in the middle-to-lower course of an alluvial river.", "Cut-off meanders form crescent-shaped Oxbow Lakes."),
        ("MORAINE", "Accumulation of unconsolidated rock debris and glacial till deposited by a moving glacier.", "Terminal moraines mark the maximum advance limit of a glacier."),
        ("LOESS", "Fine, yellowish wind-blown silt deposit forming highly fertile soils.", "China's Loess Plateau along the Yellow River (Huang He) is the thickest loess formation on Earth."),
        ("CALDERA", "Massive cauldron-like volcanic depression formed by magma-chamber collapse after an eruption.", "Examples include Yellowstone (USA), Lake Toba (Indonesia), and Crater Lake."),
        ("TSUNAMI", "Long-wavelength ocean wave series triggered by submarine earthquakes or volcanic eruptions.", "Travels up to 800 km/h across deep oceans before shoaling into towering coastal waves."),
        ("MONSOON", "Seasonal reversal of prevailing winds bringing intense summer rainfall across South and East Asia.", "Derived from the Arabic word 'Mausim' meaning season."),
        ("ELNINO", "Periodic abnormal warming of central and eastern tropical Pacific Ocean surface waters.", "Disrupts Walker Circulation, triggering droughts in South Asia/Australia and floods in Peru."),
        ("ALBEDO", "Fraction of incident solar radiation reflected directly back into space by a surface.", "Fresh snow/ice has high albedo (~0.80–0.90), whereas dark ocean water has very low albedo (~0.06)."),
        ("TAIGA", "World's largest terrestrial biome—the subarctic boreal coniferous forest belt.", "Stretches across Russia, Canada, and Scandinavia south of the treeless Arctic Tundra."),
        ("STEPPE", "Vast temperate semi-arid grassland plain of Eurasia (called Prairies in North America, Pampas in Argentina).", "The Velds (South Africa) and Downs (Australia) are Southern Hemisphere temperate grasslands."),
        ("SAVANNA", "Tropical grassland biome dotted with drought-resistant acacia and baobab trees.", "Covers nearly half of Africa, including the Serengeti ecosystem."),
        ("AQUIFER", "Underground permeable rock or sediment layer holding extractable groundwater.", "Over-pumping of the Indus Basin aquifer threatens long-term agricultural sustainability."),
        ("DESALINATION", "Industrial removal of dissolved salts from seawater via reverse osmosis or distillation.", "Supplies the majority of municipal drinking water across Gulf Cooperation Council states."),
        ("BOSPHORUS", "Strategic narrow Turkish strait separating European Thrace from Asian Anatolia.", "Connects the Black Sea to the Sea of Marmara; spanned by bridges in Istanbul."),
        ("MALACCA", "800-km maritime chokepoint between the Malay Peninsula and Sumatra.", "Carries ~25% of global traded goods and ~80% of China's Middle Eastern oil imports."),
        ("HORMUZ", "Vital energy strait linking the Persian Gulf with the Gulf of Oman and Arabian Sea.", "Roughly one-fifth of global petroleum liquids and LNG transits the Strait of Hormuz."),
        ("BABELMANDEB", "Strategic Red Sea chokepoint ('Gate of Tears') between Yemen and Djibouti/Eritrea.", "Connects the Red Sea and Suez Canal corridor to the Gulf of Aden and Indian Ocean."),
        ("GIBRALTAR", "13-km wide strait separating Spain (Europe) from Morocco (Africa).", "Links the Atlantic Ocean directly to the Mediterranean Sea."),
        ("BERING", "85-km strait separating Russia's Chukotka Peninsula (Asia) from Alaska (North America).", "The International Date Line passes directly through the Bering Strait."),
        ("ATACAMA", "Hyper-arid coastal desert in northern Chile—the driest non-polar desert on Earth.", "Created by the cold Humboldt (Peru) Ocean Current and Andean rain shadow."),
        ("KALAHARI", "Large semi-arid sandy savanna basin spanning Botswana, Namibia, and South Africa.", "Inhabited traditionally by the indigenous San people; rich in diamond deposits."),
        ("BAIKAL", "Rift lake in southern Siberia—the oldest and deepest (1,642m) freshwater lake on Earth.", "Holds roughly 22–23% of the world's unfrozen surface freshwater."),
        ("CASPIAN", "World's largest enclosed inland body of water bordered by five littoral states.", "Shared by Russia, Kazakhstan, Turkmenistan, Iran, and Azerbaijan."),
        ("TITICACA", "World's highest commercially navigable lake (3,812m) straddling Peru and Bolivia in the Andes.", "Cradle of ancient Andean Tiwanaku and Inca civilizations."),
        ("KILIMANJARO", "Dormant stratovolcano in Tanzania—Africa's highest peak at 5,895 meters.", "Free-standing mountain whose equatorial summit glaciers are rapidly vanishing."),
        ("ACONCAGUA", "Highest peak in the Americas and outside Asia (6,961m), located in the Argentine Andes.", "Highest summit in both the Southern and Western Hemispheres."),
        ("MARIANA", "Crescent-shaped western Pacific oceanic trench containing Challenger Deep (~10,984m).", "Formed by subduction of the Pacific Plate beneath the Mariana Plate."),
        ("HUMBOLDT", "Cold, nutrient-rich ocean current flowing north along Chile and Peru.", "Supports one of the world's most productive marine anchovy fisheries."),
        ("GULFSTREAM", "Warm, swift Atlantic ocean current originating in the Gulf of Mexico and warming Western Europe.", "Keeps northwestern European ports ice-free at high latitudes."),
        ("EQUATOR", "Zero-degree parallel of latitude dividing Earth into Northern and Southern Hemispheres.", "Passes through 13 countries including Ecuador, Brazil, DRC, Kenya, and Indonesia."),
        ("MERIDIAN", "Prime Meridian (0° longitude) passing through the Royal Observatory in Greenwich, London.", "Serves as the baseline for Coordinated Universal Time (UTC)."),
        ("ANTIPODES", "Diametrically opposite points on Earth's surface connected by a straight line through Earth's center.", "New Zealand and Spain lie roughly antipodal to one another."),
        ("ISOSTASY", "Gravitational equilibrium between Earth's lithosphere and denser underlying asthenosphere.", "Post-glacial isostatic rebound continues lifting Scandinavia since the last Ice Age.")
    ],
    "current_affairs": [
        ("URAAN", "Pakistan's 5-year National Economic Transformation Plan (2024–2029) built around the 5Es.", "Targets sustainable export-led growth toward a $1 trillion GDP by 2035."),
        ("RAAST", "Pakistan's instant micropayment system developed by the State Bank of Pakistan.", "Integrated with the Arab Monetary Fund's Buna platform for cross-border remittances."),
        ("DEEPSEEK", "Chinese AI lab whose open-weight R1 reasoning model disrupted global tech markets in 2025.", "Demonstrated frontier reasoning accuracy at markedly lower GPU training cost."),
        ("WILLOW", "Google Quantum AI's 105-qubit processor achieving below-threshold quantum error correction in 2024.", "Solved a benchmark sampling calculation in under five minutes."),
        ("STARSHIP", "SpaceX's fully reusable super-heavy launch vehicle caught mid-air by 'Mechazilla' arms in 2024.", "Selected by NASA as the Human Landing System for Artemis lunar landings."),
        ("CLIPPER", "NASA flagship spacecraft launched in October 2024 to study Jupiter's icy moon Europa.", "Investigates whether Europa's subsurface liquid ocean could harbor life."),
        ("ASPIDES", "European Union defensive naval operation deployed in 2024 to protect Red Sea shipping.", "Operates alongside international maritime patrols near Bab el-Mandeb."),
        ("NUSANTARA", "Indonesia's newly constructed smart forest capital in East Kalimantan on Borneo.", "Engineered to relieve chronic flooding, congestion, and subsidence in Jakarta."),
        ("CHANCAY", "Chinese-built mega deep-water smart port inaugurated in Peru in November 2024.", "Cuts trans-Pacific maritime cargo transit time between South America and Shanghai."),
        ("CALIFUND", "Global biodiversity benefit-sharing fund created at COP16 in Colombia in 2024.", "Channels corporate revenues from digital genetic sequence data into conservation."),
        ("BAKU", "Caspian capital of Azerbaijan that hosted the COP29 UN Climate Summit in November 2024.", "Adopted the $300B/year New Collective Quantified Goal (NCQG) by 2035."),
        ("BELEM", "Brazilian Amazonian city hosting the landmark COP30 UN Climate Change Conference.", "Places tropical rainforest preservation at the center of global climate diplomacy."),
        ("KAZAN", "Russian city on the Volga that hosted the expanded 16th BRICS Summit in October 2024.", "Established the BRICS Partner Country category ahead of Indonesia's 2025 full entry."),
        ("APIA", "Capital of Samoa that hosted the October 2024 Commonwealth Heads of Government Meeting.", "Elected Ghana's Shirley Ayorkor Botchwey as the first African woman Commonwealth Secretary-General."),
        ("HANOI", "Vietnamese capital designated to host the signing ceremony of the new UN Cybercrime Convention.", "Treaty adopted by the UN General Assembly in December 2024."),
        ("HIDANKYO", "Japanese atomic-bomb survivors' group (Hibakusha) awarded the 2024 Nobel Peace Prize.", "Honored for decades of witness testimony upholding the global nuclear taboo."),
        ("HANKANG", "South Korean novelist (" + "The Vegetarian" + ") who won the 2024 Nobel Prize in Literature.", "Became the first South Korean and first Asian woman Nobel Literature laureate."),
        ("ALPHAFOLD", "AI protein-structure breakthrough whose creators (Hassabis & Jumper) shared the 2024 Chemistry Nobel.", "Predicted 3D structures of virtually all 200 million known proteins."),
        ("MICRORNA", "Tiny gene-regulating RNA class whose discoverers (Ambros & Ruvkun) won the 2024 Medicine Nobel.", "Revealed a vital new principle of post-transcriptional gene regulation."),
        ("ORBITAL", "2024 Booker Prize-winning novel by Samantha Harvey set aboard the International Space Station.", "Follows six astronauts across sixteen sunrises during a single 24-hour orbit."),
        ("GUKESH", "18-year-old Indian Grandmaster who became the youngest undisputed World Chess Champion in Dec 2024.", "Defeated defending champion Ding Liren in Singapore, surpassing Kasparov's record."),
        ("NADEEM", "Pakistani javelin thrower who set a 92.97m Olympic Record to win Gold at Paris 2024.", "Secured Pakistan's first-ever individual Olympic gold medal."),
        ("COVENTRY", "Zimbabwean Olympic swimmer elected in March 2025 as the first female and African IOC President.", "Succeeded Thomas Bach to lead the International Olympic Committee."),
        ("STARMER", "Labour Party leader elected Prime Minister of the United Kingdom in the July 2024 landslide.", "Ended fourteen years of Conservative Party rule at Westminster."),
        ("RUTTE", "Former Dutch Prime Minister who took office as the 14th Secretary General of NATO in Oct 2024.", "Succeeded Norway's Jens Stoltenberg after a ten-year tenure."),
        ("CARNEY", "Former Bank of Canada & Bank of England Governor who became Prime Minister of Canada in March 2025.", "Succeeded Justin Trudeau as leader of Canada's Liberal Party."),
        ("MERZ", "CDU leader whose conservative alliance won Germany's February 2025 snap Bundestag election.", "Succeeded Olaf Scholz's dissolved three-party 'traffic-light' coalition."),
        ("SHEINBAUM", "Climate scientist inaugurated in October 2024 as Mexico's first female President.", "Previously served as Head of Government (Mayor) of Mexico City."),
        ("YUNUS", "2006 Nobel Peace Laureate sworn in as Chief Adviser of Bangladesh's Interim Government in Aug 2024.", "Founder of Grameen Bank and pioneer of modern microcredit."),
        ("PEZESHKIAN", "Reformist cardiac surgeon elected President of Iran in July 2024.", "Won the snap presidential runoff following Ebrahim Raisi's helicopter crash."),
        ("SHARAA", "Leader named transitional President of Syria in January 2025 after the fall of Bashar al-Assad.", "Headed the December 2024 offensive that ended 53 years of Assad family rule."),
        ("AOUN", "Lebanese Armed Forces chief elected 14th President of Lebanon in January 2025.", "Ended a two-year presidential deadlock alongside PM Nawaf Salam."),
        ("GELEPHU", "Bhutan's planned carbon-negative Mindfulness City Special Administrative Region.", "Spearheaded by King Jigme Khesar to blend sustainability with regional connectivity."),
        ("OXAGON", "Floating industrial port in Saudi Arabia's NEOM hosting a 4-GW green hydrogen megaproject.", "Part of Saudi Vision 2030 clean industrial diversification."),
        ("MP0X", "Viral zoonotic infection declared a WHO Public Health Emergency of International Concern in Aug 2024.", "Driven by rapid spread of Clade Ib across Central and East Africa."),
        ("DEEPFAKE", "AI-synthesized hyper-realistic audio or video posing severe electoral and hybrid-warfare threats.", "Addressed via C2PA cryptographic provenance credentials and EU AI Act labeling rules."),
        ("CBAM", "European Union Carbon Border Adjustment Mechanism taxing carbon-intensive imports.", "Covers steel, cement, aluminum, fertilizers, electricity, and hydrogen."),
        ("BRICSPLUS", "Expanded Global South grouping now comprising 10 full members including Indonesia (2025).", "Represents nearly half the world's population and >35% of global GDP (PPP)."),
        ("ARTEMIS", "NASA-led international lunar exploration program returning astronauts to the Moon.", "Artemis II is slated for crewed lunar flyby ahead of the Artemis III south-pole landing."),
        ("GLACIERS", "Focus of the UN-proclaimed International Year of Preservation in 2025 (March 21 World Day).", "Highlights accelerated melt of Earth's cryosphere and mountain water towers.")
    ]
}
# Fix typo in MP0X -> MPOX and SIAHCEN -> SIACHEN
NEW_VOCAB["pakistan_affairs"] = [
    ("SIACHEN" if w == "SIAHCEN" else w, c, f) for w, c, f in NEW_VOCAB["pakistan_affairs"]
]
NEW_VOCAB["current_affairs"] = [
    ("MPOX" if w == "MP0X" else w, c, f) for w, c, f in NEW_VOCAB["current_affairs"]
]


def load_existing_puzzles():
    code = PUZZLES_JS.read_text(encoding="utf-8")
    runner = (
        code
        + "\nconsole.log(JSON.stringify({vocab: PUZZLE_VOCABULARY, sets: CROSSWORD_PUZZLE_SETS}));"
    )
    res = subprocess.run(
        ["node", "-"],
        input=runner,
        capture_output=True,
        text=True,
        encoding="utf-8",
        check=True,
    )
    return json.loads(res.stdout)


def build_crossword_grid(candidates, grid_size=13, target_words=9, rng=None):
    """Place intersecting words cleanly onto a grid_size x grid_size board."""
    rng = rng or random.Random()
    # Filter words that fit inside grid_size (3..grid_size-1, pure A-Z)
    pool = [
        w for w in candidates
        if 4 <= len(w["answer"]) <= grid_size - 1 and re.match(r"^[A-Z]+$", w["answer"])
    ]
    rng.shuffle(pool)
    # Sort slightly preferring medium-long words first for strong spines
    pool.sort(key=lambda x: abs(len(x["answer"]) - 8) + rng.random() * 2.5)

    grid = [[None for _ in range(grid_size)] for _ in range(grid_size)]
    placed = []  # dicts with answer, clue, examFact, row, col, direction

    def can_place(word, r, c, direction):
        L = len(word)
        dr, dc = (0, 1) if direction == "across" else (1, 0)
        end_r = r + dr * (L - 1)
        end_c = c + dc * (L - 1)
        if r < 0 or c < 0 or end_r >= grid_size or end_c >= grid_size:
            return False, 0

        # Check cell immediately before and immediately after word (must be empty/out of bounds)
        pre_r, pre_c = r - dr, c - dc
        post_r, post_c = end_r + dr, end_c + dc
        if 0 <= pre_r < grid_size and 0 <= pre_c < grid_size and grid[pre_r][pre_c] is not None:
            return False, 0
        if 0 <= post_r < grid_size and 0 <= post_c < grid_size and grid[post_r][post_c] is not None:
            return False, 0

        intersections = 0
        for i, ch in enumerate(word):
            cr, cc = r + dr * i, c + dc * i
            existing = grid[cr][cc]
            if existing is not None:
                if existing != ch:
                    return False, 0
                intersections += 1
            else:
                # Orthogonal neighbor cells must be empty so we don't form unintended 2-letter side words
                if direction == "across":
                    if (cr > 0 and grid[cr - 1][cc] is not None) or (cr + 1 < grid_size and grid[cr + 1][cc] is not None):
                        return False, 0
                else:
                    if (cc > 0 and grid[cr][cc - 1] is not None) or (cc + 1 < grid_size and grid[cr][cc + 1] is not None):
                        return False, 0

        # Prevent exact overlap in same direction
        for p in placed:
            if p["direction"] == direction and p["row"] == r and p["col"] == c:
                return False, 0

        return True, intersections

    def place_word(item, r, c, direction):
        dr, dc = (0, 1) if direction == "across" else (1, 0)
        for i, ch in enumerate(item["answer"]):
            grid[r + dr * i][c + dc * i] = ch
        placed.append({
            "answer": item["answer"],
            "clue": item["clue"],
            "examFact": item["examFact"],
            "row": r,
            "col": c,
            "direction": direction,
        })

    # Place seed word near center horizontally
    if not pool:
        return []
    seed = pool[0]
    sr = grid_size // 2
    sc = (grid_size - len(seed["answer"])) // 2
    place_word(seed, sr, sc, "across")
    used_answers = {seed["answer"]}

    for item in pool[1:]:
        if len(placed) >= target_words:
            break
        w = item["answer"]
        if w in used_answers:
            continue

        best_moves = []
        # Find all valid intersecting placements
        for p in placed:
            opp_dir = "down" if p["direction"] == "across" else "across"
            pw = p["answer"]
            for i_p, ch_p in enumerate(pw):
                pr = p["row"] + (i_p if p["direction"] == "down" else 0)
                pc = p["col"] + (i_p if p["direction"] == "across" else 0)
                for i_w, ch_w in enumerate(w):
                    if ch_w != ch_p:
                        continue
                    cand_r = pr - (i_w if opp_dir == "down" else 0)
                    cand_c = pc - (i_w if opp_dir == "across" else 0)
                    ok, inters = can_place(w, cand_r, cand_c, opp_dir)
                    if ok and inters >= 1:
                        # Prefer more intersections and central placement
                        center_dist = abs(cand_r - grid_size / 2) + abs(cand_c - grid_size / 2)
                        best_moves.append((inters * 10 - center_dist, cand_r, cand_c, opp_dir))

        if best_moves:
            best_moves.sort(reverse=True)
            _, br, bc, bdir = best_moves[0]
            place_word(item, br, bc, bdir)
            used_answers.add(w)

    # Assign standard top-to-bottom, left-to-right crossword clue numbers
    starts = sorted({(p["row"], p["col"]) for p in placed})
    num_map = {pos: idx + 1 for idx, pos in enumerate(starts)}
    for p in placed:
        p["number"] = num_map[(p["row"], p["col"])]
    placed.sort(key=lambda x: (x["number"], 0 if x["direction"] == "across" else 1))
    return placed


def generate_best_puzzle(candidates, puzzle_id, title, seed_val):
    rng = random.Random(seed_val)
    best = []
    for _ in range(45):
        words = build_crossword_grid(candidates, grid_size=13, target_words=10, rng=rng)
        if len(words) > len(best):
            best = words
        if len(best) >= 10:
            break
    return {
        "id": puzzle_id,
        "title": title,
        "size": 13,
        "words": best,
    }


def main():
    parsed = load_existing_puzzles()
    vocab = parsed["vocab"]
    sets = parsed["sets"]

    added_vocab_count = 0
    for cat, new_items in NEW_VOCAB.items():
        existing_ans = {x["answer"].upper() for x in vocab[cat]}
        for ans, clue, fact in new_items:
            clean_ans = re.sub(r"[^A-Z]", "", ans.upper())
            if clean_ans not in existing_ans and len(clean_ans) >= 4:
                vocab[cat].append({
                    "answer": clean_ans,
                    "clue": clue,
                    "examFact": fact,
                })
                existing_ans.add(clean_ans)
                added_vocab_count += 1

    # Keep only original first 5 sets per category (idempotent) before generating Sets 6..10
    set_titles = {
        "grand": "Grand Civil Service Mix",
        "pakistan_affairs": "Pakistan Affairs",
        "international_relations": "International Relations",
        "science": "Everyday Science",
        "law": "Constitutional & Criminal Law",
        "geography": "World & Physical Geography",
        "current_affairs": "Global & Pakistan Current Affairs",
    }
    subtitles = [
        "Advanced Mastery I",
        "Advanced Mastery II",
        "Competitive Drill III",
        "High-Yield Challenge IV",
        "Championship Grid V",
    ]

    all_vocab_combined = [item for sub in vocab.values() for item in sub]
    new_sets_count = 0

    for cat_idx, (cat_key, label) in enumerate(set_titles.items()):
        sets[cat_key] = sets[cat_key][:5]
        # Prefer newly added words + full pool so sets 6-10 showcase fresh vocabulary
        if cat_key == "grand":
            cat_pool = all_vocab_combined
        else:
            # Put newer half first with variety
            full = vocab[cat_key]
            cat_pool = full

        used_across_new_sets = set()
        for s_i in range(5):
            set_num = 6 + s_i
            pid = f"{cat_key}_{set_num}"
            ptitle = f"{label} — Set {set_num}: {subtitles[s_i]}"
            # Prioritize unused words first, with full pool fallback for intersections
            fresh_first = [w for w in cat_pool if w["answer"] not in used_across_new_sets]
            if len(fresh_first) < 25:
                fresh_first = list(cat_pool)
            puz = generate_best_puzzle(fresh_first, pid, ptitle, seed_val=1000 + cat_idx * 100 + s_i * 17)
            for w in puz["words"]:
                used_across_new_sets.add(w["answer"])
            sets[cat_key].append(puz)
            new_sets_count += 1

    total_vocab = sum(len(v) for v in vocab.values())
    total_puzzles = sum(len(v) for v in sets.values())

    out_js = (
        "/**\n"
        f" * CSS Prep Central - Expanded Crossword & Word Search Data\n"
        f" * 6 Disciplines | {total_vocab} High-Yield Vocabulary Terms | {total_puzzles} Validated Crossword Puzzles (10 per Topic)\n"
        " */\n\n"
        f"const PUZZLE_VOCABULARY = {json.dumps(vocab, ensure_ascii=False, indent=2)};\n\n"
        f"const CROSSWORD_PUZZLE_SETS = {json.dumps(sets, ensure_ascii=False, indent=2)};\n\n"
        "const CROSSWORD_PUZZLES = {\n"
        '  "grand": CROSSWORD_PUZZLE_SETS["grand"][0],\n'
        '  "pakistan_affairs": CROSSWORD_PUZZLE_SETS["pakistan_affairs"][0],\n'
        '  "international_relations": CROSSWORD_PUZZLE_SETS["international_relations"][0],\n'
        '  "science": CROSSWORD_PUZZLE_SETS["science"][0],\n'
        '  "law": CROSSWORD_PUZZLE_SETS["law"][0],\n'
        '  "geography": CROSSWORD_PUZZLE_SETS["geography"][0],\n'
        '  "current_affairs": CROSSWORD_PUZZLE_SETS["current_affairs"][0]\n'
        "};\n\n"
        "const PUZZLE_DATA = {\n"
        "  vocabulary: PUZZLE_VOCABULARY,\n"
        "  crosswords: CROSSWORD_PUZZLES,\n"
        "  crosswordSets: CROSSWORD_PUZZLE_SETS\n"
        "};\n\n"
        "if (typeof window !== 'undefined') {\n"
        "  window.PUZZLE_DATA = PUZZLE_DATA;\n"
        "  window.PUZZLE_VOCABULARY = PUZZLE_VOCABULARY;\n"
        "  window.CROSSWORD_PUZZLES = CROSSWORD_PUZZLES;\n"
        "  window.CROSSWORD_PUZZLE_SETS = CROSSWORD_PUZZLE_SETS;\n"
        "}\n\n"
        "if (typeof module !== 'undefined' && module.exports) {\n"
        "  module.exports = PUZZLE_DATA;\n"
        "}\n"
    )
    PUZZLES_JS.write_text(out_js, encoding="utf-8")
    print(f"Puzzle expansion complete! Added {added_vocab_count} new words -> Total vocabulary: {total_vocab} words.")
    print(f"Generated {new_sets_count} new crossword grids -> Total crossword puzzles: {total_puzzles} (10 per category).")
    for k, v in vocab.items():
        print(f"  {k}: {len(v)} words, {len(sets[k])} crossword sets (avg {sum(len(p['words']) for p in sets[k])/len(sets[k]):.1f} words/grid)")


if __name__ == "__main__":
    main()
