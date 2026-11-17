const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../frontend/js/data_digital_library.js');
let content = fs.readFileSync(filePath, 'utf8');

const newPdfs = `    {
      id: "pdf-aml-act-2010",
      title: "Anti-Money Laundering Act, 2010 (As Amended upto September 2020)",
      category: "Federal Statutes & Legal Frameworks",
      fileSize: "1.85 MB",
      pages: "46 Pages",
      fileName: "Anti_Money_Laundering_Act_2010_Amended_2020.pdf",
      filePath: "acts-rules.html#aml_act_2010",
      description: "Official statutory text of Act No. VII of 2010 as amended by Act XXI of 2020. Complete provisions on money laundering offence, FMU functions, CTR/STR thresholds, provisional attachment, predicate offences in Schedule-I, and FATF compliance."
    },
    {
      id: "pdf-civil-servants-act-1973",
      title: "Civil Servants Act, 1973 (Act No. LXXI of 1973) & Statutory Rules",
      category: "Civil Service Laws & Regulations",
      fileSize: "2.10 MB",
      pages: "45 Pages",
      fileName: "Civil_Servants_Act_1973_and_Rules_Compendium.pdf",
      filePath: "acts-rules.html#civil_servants_act_1973",
      description: "Complete foundational Act governing federal civil servants. Includes tenure during pleasure of President, seniority (Section 8), promotion, retirement at 60 / 20 years, along with APT Rules 1973 and International Deputation Rules 2016."
    },
    {
      id: "pdf-civil-servants-ed-rules-2020",
      title: "Civil Servants (Efficiency and Discipline) Rules, 2020 (S.R.O. 1331(I)/2020)",
      category: "Civil Service Laws & Regulations",
      fileSize: "1.15 MB",
      pages: "13 Pages",
      fileName: "Civil_Servants_Efficiency_and_Discipline_Rules_2020.pdf",
      filePath: "acts-rules.html#civil_servants_ed_rules_2020",
      description: "Official Gazette notification of the modern disciplinary rules. Covers minor and major penalties, suspension rules, time-bound inquiry procedures (60 days), mandatory dismissal for corruption, and complete bar on legal counsel."
    },
`;

const newNotes = `    {
      id: "note-civil-service-acts-mastery",
      title: "Federal Acts & Civil Service Rules High-Yield Summary (AML 2010, CSA 1973, E&D 2020)",
      subject: "Civil Service Laws & General Recruitment",
      author: "Civil Services Legal Faculty",
      lastUpdated: "November 2026",
      keyPoints: [
        "Anti-Money Laundering Act 2010: Rigorous imprisonment 1-10 years, fine up to Rs. 25M (Rs. 100M for corporate), CTR in 7 working days, STR/CTR records kept for 10 years, attachment for 180+180 days.",
        "Civil Servants Act 1973: Seniority is not a vested right (Sec 8), CSB for BS 20-21 chaired by Chairman FPSC, retirement at 60 or after 20 years qualifying service, bar on civil court jurisdiction (Sec 23B).",
        "E&D Rules 2020: Replaced 1973 rules, initial suspension max 120 days, defense reply in 10-14 days, inquiry completed in 60 days, dismissal mandatory for grave corruption.",
        "APT Rules 1973 Quotas: Open Merit 7.5%, Punjab 50%, Sindh 19% (Urban 7.6%, Rural 11.4%), KP 11.5%, Balochistan 6%, Ex-FATA 3%, GB 1%, AJK 2%. Date of birth once recorded is final.",
        "International Deputation 2016: Minimum 5 years cadre service, 3 years cooling-off, qualifying test 60%, 80:20 weightage, max 5 years tenure before placement on static list."
      ]
    },
`;

// Insert into downloadablePdfs
const targetPdfs = 'downloadablePdfs: [';
const idxPdfs = content.indexOf(targetPdfs);
if (idxPdfs !== -1) {
    content = content.slice(0, idxPdfs + targetPdfs.length) + '\n' + newPdfs + content.slice(idxPdfs + targetPdfs.length);
}

// Insert into subjectNotes
const targetNotes = 'subjectNotes: [';
const idxNotes = content.indexOf(targetNotes);
if (idxNotes !== -1) {
    content = content.slice(0, idxNotes + targetNotes.length) + '\n' + newNotes + content.slice(idxNotes + targetNotes.length);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated data_digital_library.js with new Acts and Rules!');
