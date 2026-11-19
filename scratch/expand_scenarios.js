const fs = require('fs');
const path = require('path');

const targetJsPath = path.join(__dirname, '../frontend/js/data_fia_laws.js');

const rawData = fs.readFileSync(targetJsPath, 'utf-8');
let dataStr = rawData.substring(rawData.indexOf('{'), rawData.lastIndexOf('};') + 1);
const fiaData = JSON.parse(dataStr);

fiaData.practicalScenarios.push(
  {
    id: "scen-5",
    title: "The Unauthorized SIM Activation & Biometric Fraud",
    facts: "Franchise staff of a telecom operator used scanned thumb impressions of uneducated citizens to activate 300 unregistered SIM cards, which were then sold on the black market for fraudulent banking calls.",
    applicableLaw: "PECA 2016 & NADRA Ordinance 2002",
    applicableSections: "Section 16 (Unauthorized use of identity information) & Section 14 (Electronic fraud) of PECA 2016",
    responsibleWing: "Cyber Crime Wing (CCW)",
    investigationProcedure: "FIA CCW seizes the biometric verification devices (BVS), tracks IMEI numbers and CDR logs with PTA, arrests the franchise employees, and registers an FIR under PECA Section 16."
  },
  {
    id: "scen-6",
    title: "Transnational Migrant Smuggling (The Boat Tragedy Conduit)",
    facts: "An organized gang operating across Gujrat, Mandi Bahauddin, and Libya charged Rs. 2,500,000 per person to smuggle Pakistani nationals across the Mediterranean Sea on unseaworthy vessels, leading to a fatal capsizing.",
    applicableLaw: "Prevention of Smuggling of Migrants Act, 2018 (PSMA)",
    applicableSections: "Sections 3 & 4 of PSMA 2018 (Smuggling of migrants under aggravated circumstances) read with Section 18 Emigration Ordinance 1979",
    responsibleWing: "Anti-Human Trafficking & Smuggling Directorate (AHTD)",
    investigationProcedure: "AHTD initiates a national crackdown, coordinates with Interpol (NCB) to track Libyan sub-agents, freezes bank accounts of the main handlers under Section 5(5) FIA Act, and files charges before the Special Court."
  },
  {
    id: "scen-7",
    title: "Industrial Gas Pipeline Tampering & Theft",
    facts: "A large textile manufacturing mill in Faisalabad installed an underground bypass pipeline connecting directly to the high-pressure Sui Northern Gas transmission line, stealing Rs. 40,000,000 worth of natural gas monthly.",
    applicableLaw: "Pakistan Penal Code & OGRA Ordinance, 2002",
    applicableSections: "Sections 462A, 462B, 462C PPC (Gas theft from transmission line) read with Sections 25 to 29 of OGRA Ordinance 2002 (Entry 37 of FIA Schedule via SRO 1620(I)/2026)",
    responsibleWing: "Economic Crime Wing (ECW)",
    investigationProcedure: "FIA ECW conducts a joint raid with SNGPL measurement engineers, excavates the illegal bypass line, seizes technical logs, arrests the mill owners, and submits a challan to the Special Gas Utility Court."
  },
  {
    id: "scen-8",
    title: "Commercial Bank Embezzlement by Branch Manager",
    facts: "The manager of a state-controlled commercial bank fraudulently created fictitious loan accounts, forged signatures of deceased account holders, and siphoned Rs. 65,000,000 into offshore accounts.",
    applicableLaw: "Pakistan Penal Code, Banking Companies Ordinance & AMLA 2010",
    applicableSections: "Section 409 PPC (Criminal breach of trust by public servant/banker), Section 477-A PPC (Falsification of accounts), read with Section 3 & 4 AMLA 2010",
    responsibleWing: "Anti-Corruption Wing (ACW) / Economic Crime Wing (ECW)",
    investigationProcedure: "FIA forensic auditors examine core banking system audit trails, obtain bank records, issue lookout notices to the Immigration Wing, arrest the manager, and initiate asset forfeiture under Section 8 AMLA 2010."
  }
);

fiaData.metadata.totalCaseScenarios = fiaData.practicalScenarios.length;

const fileHeader = `/**
 * Federal Investigation Agency (FIA) Laws & Scheduled Offences Explorer
 * Comprehensive database covering FIA Act 1974, PECA 2016, AMLA 2010, Emigration 1979, PCA 1947, and the 37 Scheduled Acts.
 * Formulated from the official Federal Investigation Agency statutory repository (SRO amendments through 2026).
 */

const FIA_LAWS_DATA = `;

const fileFooter = `;

if (typeof window !== 'undefined') {
  window.FIA_LAWS_DATA = FIA_LAWS_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FIA_LAWS_DATA;
}
`;

fs.writeFileSync(targetJsPath, fileHeader + JSON.stringify(fiaData, null, 2) + fileFooter, 'utf-8');
console.log(`Updated data_fia_laws.js with ${fiaData.practicalScenarios.length} practical scenarios!`);
