-- Core Case Record
CREATE TABLE cases (
    case_id UUID PRIMARY KEY,
    fir_number VARCHAR(50) NOT NULL,
    fir_date DATE NOT NULL,
    police_station VARCHAR(100) NOT NULL,
    complainant_name VARCHAR(150),
    complainant_address TEXT,
    penal_sections VARCHAR(255) -- Stored as comma-separated or JSON array (e.g., "420, 468, 471 PPC")
);

-- Accused Roster (Drives Columns 2, 3, 4, and 5 of the Charge Sheet)
CREATE TABLE accused (
    accused_id UUID PRIMARY KEY,
    case_id UUID REFERENCES cases(case_id),
    full_name VARCHAR(150) NOT NULL,
    address TEXT,
    current_status VARCHAR(50) CHECK (current_status IN ('in_custody', 'on_bail', 'absconding', 'insufficient_evidence')),
    arrest_date DATE
);

-- Witness Logs (Drives Column 6)
CREATE TABLE witnesses (
    witness_id UUID PRIMARY KEY,
    case_id UUID REFERENCES cases(case_id),
    full_name VARCHAR(150) NOT NULL,
    statement_161 TEXT -- Summary of the witness statement recorded under Section 161
);

-- Evidence & Recoveries (Drives Column 7 & Evidentiary Checks)
CREATE TABLE evidence (
    evidence_id UUID PRIMARY KEY,
    case_id UUID REFERENCES cases(case_id),
    item_description TEXT NOT NULL,
    recovery_date DATE,
    forensic_report_attached BOOLEAN DEFAULT FALSE,
    investigator_notes TEXT
);
