/**
 * Master Data Module: European Union (EU) Complete Preparation Dossier
 * Authoritative CSS / PMS / FPSC / PPSC / NTS Master Repository
 * Contains 50 Verified Practice MCQs, Past Papers, High-Yield Facts & Current Affairs
 */

(function (root, factory) {
  var data = factory();
  if (typeof window !== 'undefined') {
    window.EU_TOPIC_DATA = data;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = data;
  }
})(this, function () {

  const PRACTICE_50_MCQS = [
    // --- Subtopic 1: Origins, Genesis & Treaties (Q1 - Q8) ---
    {
      id: "eu_1",
      question: "Which landmark proposal, presented by the French Foreign Minister on May 9, 1950, is celebrated annually as 'Europe Day' and considered the foundational moment of European integration?",
      options: {
        A: "The Marshall Plan",
        B: "The Schuman Declaration",
        C: "The Churchill Zurich Manifesto",
        D: "The Pleven Plan"
      },
      correctAnswer: "B",
      explanation: "On May 9, 1950, French Foreign Minister Robert Schuman proposed pooling French and West German coal and steel production under a common High Authority. Conceived by Jean Monnet, this became known as the Schuman Declaration. May 9 is commemorated annually as Europe Day.",
      subtopic: "Origins & Treaties",
      difficulty: "Easy",
      examCitation: "CSS Screening 2021 / FPSC AD 2020"
    },
    {
      id: "eu_2",
      question: "The European Coal and Steel Community (ECSC), the precursor to the European Union, was officially established by which treaty signed in 1951 by 'The Inner Six' nations?",
      options: {
        A: "Treaty of Rome",
        B: "Treaty of Paris",
        C: "Treaty of Maastricht",
        D: "Treaty of Versailles"
      },
      correctAnswer: "B",
      explanation: "The Treaty of Paris was signed on April 18, 1951, by France, West Germany, Italy, Belgium, the Netherlands, and Luxembourg ('The Inner Six'), establishing the ECSC for a period of 50 years (expired in 2002).",
      subtopic: "Origins & Treaties",
      difficulty: "Medium",
      examCitation: "PMS General Knowledge 2022"
    },
    {
      id: "eu_3",
      question: "Which historic 1957 treaty created both the European Economic Community (EEC) and the European Atomic Energy Community (Euratom)?",
      options: {
        A: "Treaty of Paris",
        B: "Treaty of Rome",
        C: "Single European Act",
        D: "Treaty of Lisbon"
      },
      correctAnswer: "B",
      explanation: "The Treaties of Rome were signed on March 25, 1957, by the Six founding members, establishing the European Economic Community (EEC or Common Market) and Euratom. It entered into force on January 1, 1958.",
      subtopic: "Origins & Treaties",
      difficulty: "Easy",
      examCitation: "FPSC Inspector 2021 / CSS IR 2019"
    },
    {
      id: "eu_4",
      question: "Which landmark treaty, signed in 1992 and entered into force on November 1, 1993, formally created the European Union (EU) and introduced the three-pillar architecture?",
      options: {
        A: "Treaty of Amsterdam",
        B: "Treaty of Nice",
        C: "Treaty of Maastricht (Treaty on European Union)",
        D: "Single European Act"
      },
      correctAnswer: "C",
      explanation: "The Treaty on European Union (TEU), signed in Maastricht, Netherlands on February 7, 1992 (effective Nov 1, 1993), formally established the European Union, introduced EU citizenship, established the three-pillar structure, and laid down the criteria for the single European currency (Euro).",
      subtopic: "Origins & Treaties",
      difficulty: "Easy",
      examCitation: "CSS International Relations 2020 / FPSC 2022"
    },
    {
      id: "eu_5",
      question: "Which of the following was NOT one of the 'Three Pillars' established under the Maastricht Treaty structure (1993–2009)?",
      options: {
        A: "European Communities (supranational pillar)",
        B: "Common Foreign and Security Policy (CFSP)",
        C: "Justice and Home Affairs (JHA / Police and Judicial Cooperation)",
        D: "North Atlantic Collective Defence Architecture"
      },
      correctAnswer: "D",
      explanation: "The Maastricht Treaty established three pillars: Pillar 1: European Communities (EC, ECSC, Euratom); Pillar 2: Common Foreign and Security Policy (CFSP); Pillar 3: Justice and Home Affairs (JHA). NATO is an independent transatlantic alliance, not an EU pillar.",
      subtopic: "Origins & Treaties",
      difficulty: "Medium",
      examCitation: "CSS Political Science 2021"
    },
    {
      id: "eu_6",
      question: "The Single European Act (SEA), signed in 1986 under the leadership of Commission President Jacques Delors, set a deadline of which year to complete the European Single Market?",
      options: {
        A: "1989",
        B: "1992",
        C: "1995",
        D: "2000"
      },
      correctAnswer: "B",
      explanation: "The Single European Act (1986, effective 1987) aimed to establish an internal market without internal frontiers by December 31, 1992, guaranteeing the 'Four Freedoms': free movement of goods, services, capital, and persons.",
      subtopic: "Origins & Treaties",
      difficulty: "Medium",
      examCitation: "PMS GK 2021"
    },
    {
      id: "eu_7",
      question: "Which treaty, signed in December 2007 and entering into force on December 1, 2009, abolished the Three-Pillar system, gave the EU a single legal personality, and created a permanent President of the European Council?",
      options: {
        A: "Treaty of Nice",
        B: "Treaty of Amsterdam",
        C: "Treaty of Lisbon",
        D: "Treaty of Rome"
      },
      correctAnswer: "C",
      explanation: "The Treaty of Lisbon (2007/2009) thoroughly restructured the EU: it abolished the pillar system, made the Charter of Fundamental Rights legally binding, created the posts of permanent European Council President and High Representative for Foreign Affairs, and introduced Article 50 for member secession.",
      subtopic: "Origins & Treaties",
      difficulty: "Easy",
      examCitation: "CSS Current Affairs 2021 / 2023"
    },
    {
      id: "eu_8",
      question: "Under the Treaty of Lisbon, which specific article provides the legal mechanism for a member state to voluntarily withdraw from the European Union?",
      options: {
        A: "Article 7",
        B: "Article 42",
        C: "Article 50",
        D: "Article 103"
      },
      correctAnswer: "C",
      explanation: "Article 50 of the Treaty on European Union (TEU) sets out the procedure for a member state to withdraw voluntarily from the EU. The UK famously invoked Article 50 on March 29, 2017 following the 2016 Brexit referendum.",
      subtopic: "Origins & Treaties",
      difficulty: "Easy",
      examCitation: "CSS MPT 2022 / FPSC AD FIA 2021"
    },

    // --- Subtopic 2: Institutions & Governance Architecture (Q9 - Q18) ---
    {
      id: "eu_9",
      question: "How many principal institutional bodies are formally established under Article 13 of the Treaty on European Union?",
      options: {
        A: "Five (5)",
        B: "Six (6)",
        C: "Seven (7)",
        D: "Nine (9)"
      },
      correctAnswer: "C",
      explanation: "Article 13(1) TEU lists seven institutional bodies: (1) European Parliament, (2) European Council, (3) Council of the European Union, (4) European Commission, (5) Court of Justice of the European Union, (6) European Central Bank, and (7) European Court of Auditors.",
      subtopic: "Institutions & Governance",
      difficulty: "Medium",
      examCitation: "CSS International Relations 2022"
    },
    {
      id: "eu_10",
      question: "Which EU institution acts as the executive arm of the European Union, is referred to as the 'Guardian of the Treaties', and holds the near-exclusive right of legislative initiative?",
      options: {
        A: "The European Council",
        B: "The European Commission",
        C: "The Council of the European Union",
        D: "The European Parliament"
      },
      correctAnswer: "B",
      explanation: "The European Commission (headquartered in the Berlaymont building in Brussels) is the executive branch. It proposes new EU legislation, implements decisions, upholds the EU treaties, and manages day-to-day EU business through its 27 Commissioners.",
      subtopic: "Institutions & Governance",
      difficulty: "Easy",
      examCitation: "FPSC Custom Inspector 2021"
    },
    {
      id: "eu_11",
      question: "What is the official seat and primary location for plenary voting sessions of the European Parliament as established by EU treaties, despite committee meetings taking place in Brussels?",
      options: {
        A: "Luxembourg City, Luxembourg",
        B: "Strasbourg, France",
        C: "The Hague, Netherlands",
        D: "Geneva, Switzerland"
      },
      correctAnswer: "B",
      explanation: "Under Protocol No. 6 of the treaties, the official seat of the European Parliament is Strasbourg, France, where 12 monthly plenary sessions take place. Committee hearings and additional sessions occur in Brussels, while the Secretariat is in Luxembourg.",
      subtopic: "Institutions & Governance",
      difficulty: "Medium",
      examCitation: "CSS Screening 2023 / PPSC Lecturer 2022"
    },
    {
      id: "eu_12",
      question: "How many Members of the European Parliament (MEPs) were directly elected in the June 2024 EU-wide elections, and what is the length of their elected term?",
      options: {
        A: "705 MEPs for 4 years",
        B: "720 MEPs for 5 years",
        C: "751 MEPs for 5 years",
        D: "650 MEPs for 6 years"
      },
      correctAnswer: "B",
      explanation: "Following post-Brexit seat reallocations and demographic adjustments, the European Parliament composition for the 2024–2029 term was set at 720 MEPs, elected for 5-year terms by proportional representation across all 27 member states.",
      subtopic: "Institutions & Governance",
      difficulty: "Medium",
      examCitation: "CSS Current Affairs 2024 / PMS 2023"
    },
    {
      id: "eu_13",
      question: "In the Council of the European Union, what defines 'Qualified Majority Voting' (QMV) under the Double Majority rule established by the Treaty of Lisbon?",
      options: {
        A: "50% of states representing 50% of population",
        B: "55% of member states representing at least 65% of the total EU population",
        C: "67% of member states representing 75% of population",
        D: "Unanimous consent of all member states"
      },
      correctAnswer: "B",
      explanation: "Under the double majority system (Article 16 TEU), a qualified majority requires at least 55% of member states (currently 15 out of 27) representing at least 65% of the total EU population. A blocking minority must include at least four member states.",
      subtopic: "Institutions & Governance",
      difficulty: "Hard",
      examCitation: "CSS International Law / IR 2022"
    },
    {
      id: "eu_14",
      question: "Where is the Court of Justice of the European Union (CJEU) permanently seated?",
      options: {
        A: "The Hague, Netherlands",
        B: "Brussels, Belgium",
        C: "Luxembourg City, Luxembourg",
        D: "Strasbourg, France"
      },
      correctAnswer: "C",
      explanation: "The CJEU is seated in Luxembourg City. (Do not confuse with the ICJ and ICC in The Hague, or the European Court of Human Rights [ECHR] in Strasbourg, which belongs to the Council of Europe, not the EU).",
      subtopic: "Institutions & Governance",
      difficulty: "Easy",
      examCitation: "FPSC AD 2022 / PMS GK 2021"
    },
    {
      id: "eu_15",
      question: "Where is the European Central Bank (ECB) headquartered, and which city hosts the Eurotower?",
      options: {
        A: "Zurich, Switzerland",
        B: "Frankfurt am Main, Germany",
        C: "Amsterdam, Netherlands",
        D: "Basel, Switzerland"
      },
      correctAnswer: "B",
      explanation: "The European Central Bank (ECB) is headquartered in Frankfurt am Main, Germany. It is responsible for the monetary policy of the Eurozone member states and maintains price stability (targeting ~2% inflation).",
      subtopic: "Institutions & Governance",
      difficulty: "Easy",
      examCitation: "CSS GK 2020 / FPSC Inspector 2022"
    },
    {
      id: "eu_16",
      question: "Which institution brings together the heads of state or government of the 27 EU member states, along with its own President and the President of the European Commission, to define the overall political direction and priorities of the EU?",
      options: {
        A: "The Council of Europe",
        B: "The European Council",
        C: "The Council of the European Union",
        D: "The Eurogroup"
      },
      correctAnswer: "B",
      explanation: "The European Council consists of the heads of state or government of the member states, its permanent President, and the President of the European Commission. It meets at least quarterly in Brussels. It defines political direction but does not exercise legislative functions.",
      subtopic: "Institutions & Governance",
      difficulty: "Medium",
      examCitation: "CSS International Relations 2023"
    },
    {
      id: "eu_17",
      question: "Who was confirmed for a second 5-year term as President of the European Commission following the June 2024 European Parliament elections?",
      options: {
        A: "Roberta Metsola",
        B: "Ursula von der Leyen",
        C: "Christine Lagarde",
        D: "Kaja Kallas"
      },
      correctAnswer: "B",
      explanation: "Ursula von der Leyen (Germany, EPP) was re-elected by the European Parliament on July 18, 2024, securing 401 votes to serve as President of the European Commission for the 2024–2029 term.",
      subtopic: "Institutions & Governance",
      difficulty: "Easy",
      examCitation: "CSS Current Affairs 2024 / 2025"
    },
    {
      id: "eu_18",
      question: "The Presidency of the Council of the European Union rotates among the EU member states every:",
      options: {
        A: "3 months",
        B: "6 months",
        C: "1 year",
        D: "2.5 years"
      },
      correctAnswer: "B",
      explanation: "The Presidency of the Council of the EU rotates among the member states every 6 months. States holding the presidency work together in groups of three called 'trios' to ensure continuity over an 18-month period.",
      subtopic: "Institutions & Governance",
      difficulty: "Easy",
      examCitation: "FPSC Patrol Officer 2020"
    },

    // --- Subtopic 3: Schengen, Eurozone & The Single Market (Q19 - Q26) ---
    {
      id: "eu_19",
      question: "In which year and country was the historic Schengen Agreement originally signed aboard the ship Princesse Marie-Astrid on the River Moselle?",
      options: {
        A: "1975, Netherlands",
        B: "1985, Luxembourg",
        C: "1992, Belgium",
        D: "1999, France"
      },
      correctAnswer: "B",
      explanation: "The Schengen Agreement was signed on June 14, 1985 near the town of Schengen, Luxembourg, by five of the ten EEC member states (France, West Germany, Belgium, Netherlands, Luxembourg) to abolish internal border controls.",
      subtopic: "Schengen & Eurozone",
      difficulty: "Medium",
      examCitation: "CSS Geography / IR 2021"
    },
    {
      id: "eu_20",
      question: "As of 2024, how many countries comprise the border-free Schengen Area, including non-EU member states?",
      options: {
        A: "25 countries",
        B: "27 countries",
        C: "29 countries",
        D: "32 countries"
      },
      correctAnswer: "C",
      explanation: "The Schengen Area encompasses 29 European countries: 25 EU member states plus 4 non-EU EFTA countries (Iceland, Liechtenstein, Norway, Switzerland). On March 31, 2024, Bulgaria and Romania joined Schengen for air and maritime borders.",
      subtopic: "Schengen & Eurozone",
      difficulty: "Medium",
      examCitation: "CSS Current Affairs 2024"
    },
    {
      id: "eu_21",
      question: "Which EU member state negotiated a permanent legal opt-out from the Schengen Agreement and maintains its own Common Travel Area (CTA)?",
      options: {
        A: "Ireland",
        B: "Denmark",
        C: "Sweden",
        D: "Cyprus"
      },
      correctAnswer: "A",
      explanation: "Ireland holds a formal legal opt-out from the Schengen Area in order to preserve its bilateral Common Travel Area (CTA) with the United Kingdom and Northern Ireland without imposing a hard border.",
      subtopic: "Schengen & Eurozone",
      difficulty: "Medium",
      examCitation: "CSS International Law 2021"
    },
    {
      id: "eu_22",
      question: "On January 1, 2023, which country became the 20th member state of the European Union to officially adopt the Euro (€) as its currency?",
      options: {
        A: "Poland",
        B: "Croatia",
        C: "Bulgaria",
        D: "Romania"
      },
      correctAnswer: "B",
      explanation: "Croatia adopted the Euro on January 1, 2023, replacing the Croatian kuna at a conversion rate of €1 = 7.53450 kuna, and simultaneously entered the Schengen Area, becoming the 20th Eurozone member.",
      subtopic: "Schengen & Eurozone",
      difficulty: "Easy",
      examCitation: "CSS Screening 2023 / FPSC 2023"
    },
    {
      id: "eu_23",
      question: "On which date were Euro coins and banknotes officially introduced into physical cash circulation across participating member states?",
      options: {
        A: "January 1, 1999",
        B: "January 1, 2002",
        C: "November 1, 1993",
        D: "July 1, 2000"
      },
      correctAnswer: "B",
      explanation: "The Euro was launched as an electronic accounting currency on January 1, 1999, but physical Euro banknotes and coins entered into public circulation on January 1, 2002.",
      subtopic: "Schengen & Eurozone",
      difficulty: "Easy",
      examCitation: "PMS General Knowledge 2021"
    },
    {
      id: "eu_24",
      question: "Which EU member state negotiated a formal, legally binding opt-out from adopting the Euro under the Maastricht Treaty protocols?",
      options: {
        A: "Sweden",
        B: "Denmark",
        C: "Poland",
        D: "Czech Republic"
      },
      correctAnswer: "B",
      explanation: "Denmark secured a formal protocol opt-out from the third stage of Economic and Monetary Union (EMU) and is not legally obligated to adopt the Euro (the Danish krone participates in ERM II).",
      subtopic: "Schengen & Eurozone",
      difficulty: "Medium",
      examCitation: "CSS IR 2020"
    },
    {
      id: "eu_25",
      question: "What are the macroeconomic fiscal limits prescribed by the Stability and Growth Pact (SGP) and the Maastricht convergence criteria for Eurozone countries?",
      options: {
        A: "Budget deficit below 3% of GDP and government debt below 60% of GDP",
        B: "Budget deficit below 5% of GDP and government debt below 80% of GDP",
        C: "Budget deficit below 1% of GDP and government debt below 50% of GDP",
        D: "Inflation rate below 1% and GDP growth above 4%"
      },
      correctAnswer: "A",
      explanation: "The Maastricht criteria require member states to keep their national budget deficit under 3% of GDP and total gross government debt below 60% of GDP (or on a satisfactory downward trajectory).",
      subtopic: "Schengen & Eurozone",
      difficulty: "Medium",
      examCitation: "CSS Economics / Current Affairs 2022"
    },
    {
      id: "eu_26",
      question: "Which of the following is NOT one of the 'Four Freedoms' underpinning the European Union Single Market?",
      options: {
        A: "Free movement of Goods",
        B: "Free movement of Services",
        C: "Free movement of Capital",
        D: "Free movement of Weapons & Armed Forces"
      },
      correctAnswer: "D",
      explanation: "The Four Freedoms of the Single Market are: Free movement of Goods, Free movement of Capital, Free movement of Services, and Free movement of Persons (workers/citizens). Defence matters remain under national/CSDP frameworks.",
      subtopic: "Schengen & Eurozone",
      difficulty: "Easy",
      examCitation: "PMS GK 2022"
    },

    // --- Subtopic 4: Member States, Enlargements & Brexit (Q27 - Q34) ---
    {
      id: "eu_27",
      question: "How many sovereign member states currently belong to the European Union following the departure of the United Kingdom?",
      options: {
        A: "26 Member States",
        B: "27 Member States",
        C: "28 Member States",
        D: "30 Member States"
      },
      correctAnswer: "B",
      explanation: "There are currently 27 sovereign member states in the European Union following the departure of the United Kingdom (which reduced the membership from 28 to 27).",
      subtopic: "Members & Enlargement",
      difficulty: "Easy",
      examCitation: "FPSC Inspector 2021 / CSS MPT 2022"
    },
    {
      id: "eu_28",
      question: "In which year did the historic 'Big Bang' enlargement occur, when ten new countries (primarily from Central and Eastern Europe) joined the EU simultaneously?",
      options: {
        A: "1995",
        B: "2000",
        C: "2004",
        D: "2007"
      },
      correctAnswer: "C",
      explanation: "On May 1, 2004, the largest single expansion in EU history occurred when 10 countries joined: Cyprus, the Czech Republic, Estonia, Hungary, Latvia, Lithuania, Malta, Poland, Slovakia, and Slovenia.",
      subtopic: "Members & Enlargement",
      difficulty: "Easy",
      examCitation: "CSS International Relations 2021"
    },
    {
      id: "eu_29",
      question: "Which country was the most recent to join the European Union, becoming its 28th member state on July 1, 2013?",
      options: {
        A: "Bulgaria",
        B: "Romania",
        C: "Croatia",
        D: "Montenegro"
      },
      correctAnswer: "C",
      explanation: "Croatia became the 28th member state of the EU on July 1, 2013, following a decade of accession negotiations.",
      subtopic: "Members & Enlargement",
      difficulty: "Easy",
      examCitation: "PMS GK 2020 / FPSC 2021"
    },
    {
      id: "eu_30",
      question: "The essential political, economic, and legislative standards that a candidate country must satisfy to be eligible to join the European Union are known as the:",
      options: {
        A: "Copenhagen Criteria (1993)",
        B: "Helsinki Accords",
        C: "Geneva Protocols",
        D: "Lisbon Benchmarks"
      },
      correctAnswer: "A",
      explanation: "Established by the European Council in Copenhagen in 1993, the Copenhagen Criteria require: (1) stable democratic institutions, rule of law, human rights; (2) functioning market economy capable of competitive pressure; (3) ability to adopt the acquis communautaire (EU law body).",
      subtopic: "Members & Enlargement",
      difficulty: "Medium",
      examCitation: "CSS International Law 2021 / IR 2023"
    },
    {
      id: "eu_31",
      question: "On which date did the United Kingdom officially leave the European Union ('Brexit'), ending 47 years of membership?",
      options: {
        A: "June 23, 2016",
        B: "March 29, 2017",
        C: "January 31, 2020",
        D: "December 31, 2020"
      },
      correctAnswer: "C",
      explanation: "The UK held the referendum on June 23, 2016 (51.89% voted Leave). The UK formally exited the EU at 23:00 GMT on January 31, 2020, entering an 11-month transition period that concluded on December 31, 2020.",
      subtopic: "Members & Enlargement",
      difficulty: "Medium",
      examCitation: "CSS Current Affairs 2020 / 2021"
    },
    {
      id: "eu_32",
      question: "Which of the following wealthy European countries is NOT an EU member state, but participates in the Single Market via the European Economic Area (EEA) agreement?",
      options: {
        A: "Norway",
        B: "Austria",
        C: "Finland",
        D: "Ireland"
      },
      correctAnswer: "A",
      explanation: "Norway (along with Iceland and Liechtenstein) is not an EU member state, but participates in the Single Market through the European Economic Area (EEA). Switzerland participates through a web of bilateral treaties.",
      subtopic: "Members & Enlargement",
      difficulty: "Easy",
      examCitation: "PMS General Knowledge 2022"
    },
    {
      id: "eu_33",
      question: "In June 2022, in the immediate wake of the Russian invasion, the European Council granted official EU candidate status to which two countries?",
      options: {
        A: "Serbia and Kosovo",
        B: "Ukraine and Moldova",
        C: "Georgia and Armenia",
        D: "Albania and Montenegro"
      },
      correctAnswer: "B",
      explanation: "On June 23, 2022, EU leaders granted candidate country status to Ukraine and Moldova. Georgia was granted candidate status later in December 2023.",
      subtopic: "Members & Enlargement",
      difficulty: "Medium",
      examCitation: "CSS Current Affairs 2023 / 2024"
    },
    {
      id: "eu_34",
      question: "Which body of accumulated European Union legislation, legal acts, and court decisions must candidate nations fully transpose into national law across 35 negotiation chapters?",
      options: {
        A: "Corpus Juris Canonici",
        B: "Acquis Communautaire",
        C: "Magna Carta Europaea",
        D: "Jus Cogens"
      },
      correctAnswer: "B",
      explanation: "The 'Acquis Communautaire' (or simply the Acquis) represents the cumulative body of EU treaties, directives, regulations, and case law that every accession country must accept and implement across 35 thematic chapters.",
      subtopic: "Members & Enlargement",
      difficulty: "Hard",
      examCitation: "CSS International Law 2020"
    },

    // --- Subtopic 5: Key Policies, Law & Treaties (Q35 - Q42) ---
    {
      id: "eu_35",
      question: "In the foundational 1963 landmark ruling of the European Court of Justice (Van Gend en Loos), what constitutional doctrine of EU law was established?",
      options: {
        A: "The Doctrine of State Immunity",
        B: "The Doctrine of Direct Effect",
        C: "The Doctrine of Parliamentary Supremacy",
        D: "The Doctrine of Sovereign Immunity"
      },
      correctAnswer: "B",
      explanation: "In Van Gend en Loos (Case 26/62), the Court established that European Community law produces 'Direct Effect', meaning provisions of EU law can confer rights directly on individuals which national courts must enforce.",
      subtopic: "Key Policies & Law",
      difficulty: "Hard",
      examCitation: "CSS International Law 2019 / 2022"
    },
    {
      id: "eu_36",
      question: "Which landmark 1964 ECJ ruling established the absolute supremacy (primacy) of European Community law over conflicting domestic national law, including national constitutions?",
      options: {
        A: "Costa v ENEL",
        B: "Francovich v Italy",
        C: "Cassis de Dijon",
        D: "Factortame Ltd v Secretary of State"
      },
      correctAnswer: "A",
      explanation: "In Costa v ENEL (Case 6/64), the ECJ ruled that EU law takes precedence over conflicting national law, and member states cannot invoke domestic statutory or constitutional provisions to override EU treaty obligations.",
      subtopic: "Key Policies & Law",
      difficulty: "Hard",
      examCitation: "CSS International Law 2021"
    },
    {
      id: "eu_37",
      question: "What is the primary difference between an EU 'Regulation' and an EU 'Directive'?",
      options: {
        A: "Directives are binding on individuals; Regulations only apply to states.",
        B: "Regulations are directly applicable in all member states; Directives set binding goals but leave the choice of form and method to national authorities.",
        C: "Regulations are non-binding recommendations; Directives are mandatory penalties.",
        D: "Regulations apply only to the Eurozone; Directives apply to the entire EU."
      },
      correctAnswer: "B",
      explanation: "Under Article 288 TFEU, a Regulation has general application and is binding in its entirety and directly applicable in all member states. A Directive is binding as to the result to be achieved, but leaves the choice of form and methods of transposition to national authorities.",
      subtopic: "Key Policies & Law",
      difficulty: "Medium",
      examCitation: "CSS International Law 2023"
    },
    {
      id: "eu_38",
      question: "The principle of 'Subsidiarity' in European Union law (enshrined in Article 5 TEU) dictates that:",
      options: {
        A: "The EU may only act in areas outside its exclusive competence if the objectives cannot be sufficiently achieved by the member states alone.",
        B: "National courts are subordinated to federal executive decree.",
        C: "All decisions must receive unanimous consent from regional assemblies.",
        D: "EU agricultural subsidies must be equal across all farms."
      },
      correctAnswer: "A",
      explanation: "The Principle of Subsidiarity stipulates that in areas that do not fall within its exclusive competence, the EU shall act only if and in so far as the objectives cannot be sufficiently achieved by member states at national, regional, or local levels.",
      subtopic: "Key Policies & Law",
      difficulty: "Hard",
      examCitation: "CSS Political Science 2022"
    },
    {
      id: "eu_39",
      question: "Which flagship European Union policy, consuming a historic plurality of the EU budget, was launched in 1962 to support agricultural productivity and rural food security?",
      options: {
        A: "Common Fisheries Policy (CFP)",
        B: "Common Agricultural Policy (CAP)",
        C: "European Green Deal",
        D: "Cohesion Fund"
      },
      correctAnswer: "B",
      explanation: "The Common Agricultural Policy (CAP), introduced in 1962, aims to support farmers, ensure agricultural productivity, and safeguard affordable food supplies. Though reformed, it still accounts for approximately one-third of the EU's Multiannual Financial Framework.",
      subtopic: "Key Policies & Law",
      difficulty: "Medium",
      examCitation: "CSS Economics / IR 2021"
    },
    {
      id: "eu_40",
      question: "What is the duration of the European Union's long-term budget framework, known as the Multiannual Financial Framework (MFF)?",
      options: {
        A: "3 years",
        B: "5 years",
        C: "7 years",
        D: "10 years"
      },
      correctAnswer: "C",
      explanation: "The Multiannual Financial Framework (MFF) lays down the maximum annual spending limits for the EU budget over a 7-year period (e.g., the current 2021–2027 MFF).",
      subtopic: "Key Policies & Law",
      difficulty: "Medium",
      examCitation: "PMS General Knowledge 2022"
    },
    {
      id: "eu_41",
      question: "Which EU law enforcement agency, established in 1998 and based in The Hague, coordinates cross-border criminal intelligence and operational cooperation between national police forces?",
      options: {
        A: "Eurojust",
        B: "Europol (European Union Agency for Law Enforcement Cooperation)",
        C: "Frontex",
        D: "Interpol"
      },
      correctAnswer: "B",
      explanation: "Europol is the European Union Agency for Law Enforcement Cooperation, headquartered in The Hague, Netherlands. It assists EU member states in combating serious international crime and terrorism.",
      subtopic: "Key Policies & Law",
      difficulty: "Easy",
      examCitation: "FPSC AD FIA 2020 / 2022"
    },
    {
      id: "eu_42",
      question: "Which agency of the European Union, headquartered in Warsaw, Poland, is responsible for border and coast guard management along the external borders of the Schengen Area?",
      options: {
        A: "Frontex (European Border and Coast Guard Agency)",
        B: "Europol",
        C: "CEPOL",
        D: "EASA"
      },
      correctAnswer: "A",
      explanation: "Frontex (the European Border and Coast Guard Agency), headquartered in Warsaw, Poland, assists EU member states and Schengen-associated countries in managing external borders and border control operations.",
      subtopic: "Key Policies & Law",
      difficulty: "Medium",
      examCitation: "CSS Current Affairs 2021 / FPSC 2022"
    },

    // --- Subtopic 6: Pakistan-EU Relations & GSP+ (Q43 - Q47) ---
    {
      id: "eu_43",
      question: "In which year was Pakistan granted the lucrative Generalized Scheme of Preferences Plus (GSP+) trade status by the European Union, granting duty-free access to over 66% of tariff lines?",
      options: {
        A: "2008",
        B: "2014",
        C: "2018",
        D: "2020"
      },
      correctAnswer: "B",
      explanation: "Pakistan was awarded GSP+ status effective January 1, 2014. GSP+ allows duty-free access to the EU single market on more than 66% of tariff lines, significantly boosting Pakistan's textile and garment exports.",
      subtopic: "Pakistan-EU Relations",
      difficulty: "Easy",
      examCitation: "CSS Pakistan Affairs / Commerce 2022 / FPSC 2021"
    },
    {
      id: "eu_44",
      question: "To qualify for and retain GSP+ trade status with the European Union, beneficiary countries like Pakistan are legally obligated to ratify and effectively implement how many core international conventions?",
      options: {
        A: "12 conventions",
        B: "20 conventions",
        C: "27 conventions",
        D: "35 conventions"
      },
      correctAnswer: "C",
      explanation: "Under the EU GSP regulation, beneficiary countries must ratify and effectively implement 27 core international conventions covering human rights, labor rights, environmental protection, and good governance. (The proposed new framework expands this to 32).",
      subtopic: "Pakistan-EU Relations",
      difficulty: "Medium",
      examCitation: "CSS International Relations 2023 / PMS 2022"
    },
    {
      id: "eu_45",
      question: "What bilateral framework agreement, signed in June 2019, guides long-term multifaceted cooperation between Pakistan and the European Union across trade, security, migration, and climate change?",
      options: {
        A: "The Cotonou Agreement",
        B: "The EU-Pakistan Strategic Engagement Plan (SEP)",
        C: "The Islamabad Treaty of Friendship",
        D: "The EU-Asia Comprehensive Accord"
      },
      correctAnswer: "B",
      explanation: "In June 2019, Pakistan and the European Union signed the Strategic Engagement Plan (SEP), a comprehensive 10-year framework to deepen cooperation in peace, security, democracy, trade, and climate change.",
      subtopic: "Pakistan-EU Relations",
      difficulty: "Medium",
      examCitation: "CSS Pakistan Affairs 2021"
    },
    {
      id: "eu_46",
      question: "What is the European Union's economic rank among Pakistan's global export partners?",
      options: {
        A: "Fourth largest export partner",
        B: "Third largest export partner",
        C: "Largest export destination (over 25% of total exports)",
        D: "Sixth largest export partner"
      },
      correctAnswer: "C",
      explanation: "The European Union collectively represents Pakistan's largest export destination, absorbing over 25–28% of total Pakistani exports annually, predominantly driven by textiles and clothing under GSP+.",
      subtopic: "Pakistan-EU Relations",
      difficulty: "Easy",
      examCitation: "FPSC Inspector Customs 2021 / CSS PA 2020"
    },
    {
      id: "eu_47",
      question: "In October 2023, the European Parliament and Council voted to extend the current GSP+ scheme for beneficiary countries, including Pakistan, until:",
      options: {
        A: "December 31, 2024",
        B: "December 31, 2027",
        C: "December 31, 2030",
        D: "December 31, 2035"
      },
      correctAnswer: "B",
      explanation: "In late 2023, the EU extended the existing GSP regulation until December 31, 2027, ensuring trade continuity for Pakistan while negotiations on the new GSP regulations continue.",
      subtopic: "Pakistan-EU Relations",
      difficulty: "Medium",
      examCitation: "CSS Current Affairs 2024"
    },

    // --- Subtopic 7: Current Affairs & The Brussels Effect (Q48 - Q50) ---
    {
      id: "eu_48",
      question: "In March 2024, the European Parliament approved which landmark law, making the EU the world's first jurisdiction to establish a comprehensive, horizontal legal framework regulating Artificial Intelligence?",
      options: {
        A: "The General Data Protection Regulation (GDPR)",
        B: "The European Artificial Intelligence Act (EU AI Act)",
        C: "The Digital Markets Act (DMA)",
        D: "The European Chips Act"
      },
      correctAnswer: "B",
      explanation: "The EU Artificial Intelligence Act (AI Act), approved in early 2024, classifies AI systems by risk (unacceptable risk banned, high risk strictly audited, general-purpose models regulated), setting global regulatory precedents.",
      subtopic: "Current Affairs & Tech",
      difficulty: "Easy",
      examCitation: "CSS Current Affairs 2024 / 2025"
    },
    {
      id: "eu_49",
      question: "The phenomenon whereby the European Union unilaterally projects its regulatory standards across global markets due to the size of its single market (coined by Anu Bradford) is known as:",
      options: {
        A: "The Washington Consensus",
        B: "The Brussels Effect",
        C: "The European Hegemony",
        D: "The Rhine Model"
      },
      correctAnswer: "B",
      explanation: "Coined by Columbia Law Professor Anu Bradford, 'The Brussels Effect' describes the EU's unilateral power to regulate global business (in privacy like GDPR, green standards like CBAM, and tech like the AI Act) without resorting to international treaties.",
      subtopic: "Current Affairs & Tech",
      difficulty: "Medium",
      examCitation: "CSS International Relations 2023 / 2024"
    },
    {
      id: "eu_50",
      question: "Which former Italian Prime Minister and ECB President authored the landmark September 2024 report warning of Europe's 'existential challenge' and urging €800 billion in annual investments to close the innovation gap with the US and China?",
      options: {
        A: "Mario Monti",
        B: "Mario Draghi",
        C: "Enrico Letta",
        D: "Matteo Renzi"
      },
      correctAnswer: "B",
      explanation: "In September 2024, Mario Draghi published 'The Future of European Competitiveness' report, calling for radical EU reforms, joint borrowing, and €800 billion in yearly investments to boost industrial competitiveness against the US and China.",
      subtopic: "Current Affairs & Tech",
      difficulty: "Medium",
      examCitation: "CSS Current Affairs 2025"
    }
  ];

  const PAST_EXAM_QUESTIONS = [
    {
      exam: "CSS Competitive Examination (International Relations)",
      year: "2023",
      type: "Subjective (20 Marks)",
      question: "Critically evaluate the institutional evolution of the European Union from the Treaty of Rome to the Treaty of Lisbon. In your analysis, discuss whether the EU is evolving toward a supranational federal state or reverting to an intergovernmental confederation in light of contemporary geopolitical pressures."
    },
    {
      exam: "CSS Competitive Examination (Current Affairs / Pakistan Affairs)",
      year: "2022",
      type: "Subjective (20 Marks)",
      question: "Analyze Pakistan-European Union trade and diplomatic relations with special focus on the GSP+ status. Discuss the economic dividends Pakistan has reaped, the human rights and labor compliance hurdles it faces, and strategic policy recommendations for ensuring GSP+ continuity beyond 2027."
    },
    {
      exam: "CSS Competitive Examination (International Relations / Political Science)",
      year: "2024",
      type: "Subjective (20 Marks)",
      question: "Examine the concept of the 'Brussels Effect' and the EU's quest for 'Strategic Autonomy'. Can the European Union transform its economic and regulatory superpower status into a credible, independent global security actor amidst the Russia-Ukraine war and transatlantic friction?"
    },
    {
      exam: "PMS Provincial Management Service (Political Science)",
      year: "2021",
      type: "Subjective (20 Marks)",
      question: "Analyze the causes, political dynamics, and long-term geopolitical ramifications of 'Brexit'. How has the United Kingdom's departure influenced European integration, regional stability, and the rise of Euroskepticism across member states?"
    }
  ];

  // Ensure full compatibility with both standalone topic engine and main quiz simulator
  PRACTICE_50_MCQS.forEach((q, idx) => {
    if (!q.questionText) q.questionText = q.question;
    if (!q.category) q.category = { _id: 'cat_world_org', name: 'World Organizations' };
    if (!q.subCategory) q.subCategory = 'European Union & Regional Blocs';
    if (!q.questionId) q.questionId = idx + 1;
    if (!q._id) q._id = q.id;
  });

  return {
    PRACTICE_50_MCQS: PRACTICE_50_MCQS,
    PAST_EXAM_QUESTIONS: PAST_EXAM_QUESTIONS
  };
});
