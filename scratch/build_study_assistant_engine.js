const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../frontend/js/ai_study_assistant.js');

const jsContent = `/**
 * AI Study Assistant Core Engine
 * Client-Side Natural Language Understanding, Grounded Answering & Question Generator
 */

window.AI_STUDY_ASSISTANT = (function () {
    const kb = window.AI_KNOWLEDGE_BASE || {};
    let customUploadedDocument = null;

    // Helper: Extract keywords from text
    function extractKeywords(text) {
        if (!text) return [];
        return text.toLowerCase()
            .replace(/[^a-zA-Z0-9\\s]/g, ' ')
            .split(/\\s+/)
            .filter(w => w.length > 3);
    }

    // Ingest Custom Document
    function ingestDocument(title, content) {
        if (!content || !content.trim()) return false;
        const paragraphs = content.split(/\\n+/).map(p => p.trim()).filter(p => p.length > 20);
        customUploadedDocument = {
            title: title || 'Uploaded Student Notes',
            content: content,
            paragraphs: paragraphs,
            wordCount: content.split(/\\s+/).length,
            keywords: [...new Set(extractKeywords(content))]
        };
        return customUploadedDocument;
    }

    function getCustomDocument() {
        return customUploadedDocument;
    }

    function clearCustomDocument() {
        customUploadedDocument = null;
    }

    // Answer Student Questions
    function answerQuestion(query) {
        if (!query || !query.trim()) {
            return "Please provide a question about civil service laws, constitutional articles, economics, or your uploaded notes.";
        }

        const q = query.toLowerCase();

        // 1. Check if user is asking about their uploaded document
        if (customUploadedDocument && (q.includes('uploaded') || q.includes('my note') || q.includes('this document') || q.includes('summary') || q.includes('summarize'))) {
            return answerFromCustomDoc(query);
        }

        // 2. FIA Act 1974 Queries
        if (q.includes('fia') || q.includes('federal investigation agency')) {
            if (q.includes('section 5a') || q.includes('bank')) {
                return formatAnswer(
                    "FIA Act 1974 — Section 5A (Order to Bank Not to Pay)",
                    "**Statutory Provision:**\\n" +
                    "Under **Section 5A**, the Director General FIA, or an officer not below the rank of **Assistant Director** authorized by the DG, can issue an order in writing directing any bank not to pay or deliver money or property held by it on account of any person under inquiry or investigation.\\n\\n" +
                    "**Key Legal Principles:**\\n" +
                    "- No prior court order is required for this freezing direction.\\n" +
                    "- It serves as an immediate preventive measure against capital flight or illicit asset dissipation.\\n" +
                    "- **Examiner Tip:** Distinguish this from Section 5(1), which confers general police powers of search, arrest, and seizure under CrPC 1898."
                );
            }
            if (q.includes('section 5') || q.includes('power') || q.includes('arrest') || q.includes('search')) {
                return formatAnswer(
                    "FIA Act 1974 — Section 5 (Powers of the Members of the Agency)",
                    "**Core Statutory Mandate:**\\n" +
                    "1. **Police Powers throughout Pakistan:** Under Section 5(1), members of the Agency possess all the powers of search, arrest of persons, and seizure of property that police officers have under the Code of Criminal Procedure, 1898 (CrPC).\\n" +
                    "2. **Station Head Powers:** Officers not below the rank of **Sub-Inspector** may exercise any of the powers of an Officer-in-Charge of a Police Station (SHO) within the meaning of CrPC.\\n" +
                    "3. **Arrest Without Warrant:** Any member of the Agency authorized by the Director General may arrest without warrant any person who has committed or against whom reasonable suspicion exists of having committed a scheduled offence.\\n" +
                    "4. **Police Station Status:** Any place declared by the Federal Government by notification is deemed a police station under the Code.\\n\\n" +
                    "**Civil Services Hotspot:** Examiners frequently test the minimum rank required to exercise SHO powers (**Sub-Inspector**) and the rank required for Section 5A bank freezing (**Assistant Director**)."
                );
            }
            if (q.includes('section 3') || q.includes('constitution of agency') || q.includes('constitution of the agency')) {
                return formatAnswer(
                    "FIA Act 1974 — Section 3 (Constitution of Agency)",
                    "**Overview:**\\n" +
                    "Section 3 empowers the Federal Government to constitute the Federal Investigation Agency for the inquiry into and investigation of offences specified in the **Schedule** to the Act.\\n\\n" +
                    "**Structural Hierarchy:**\\n" +
                    "- The Agency consists of a **Director General** appointed by the Federal Government.\\n" +
                    "- Includes Additional Directors General, Directors, Additional Directors, Deputy Directors, Assistant Directors, and subordinate investigation ranks.\\n" +
                    "- **Jurisdiction:** Applies to the whole of Pakistan, and to citizens of Pakistan and public servants wherever they may be (extra-territorial jurisdiction)."
                );
            }
            if (q.includes('section 4') || q.includes('superintendence') || q.includes('administration')) {
                return formatAnswer(
                    "FIA Act 1974 — Section 4 (Superintendence vs. Administration)",
                    "**Crucial Distinction:**\\n" +
                    "- **Superintendence:** Section 4(1) vests the *superintendence* of the Agency strictly in the **Federal Government** (Ministry of Interior).\\n" +
                    "- **Administration:** Section 4(2) vests the *administration* of the Agency in the **Director General**.\\n" +
                    "- The Director General exercises the same administrative and disciplinary powers over Agency members as an **Inspector General of Police (IGP)** exercises under the Police Act, 1861."
                );
            }
            if (q.includes('schedule') || q.includes('offence') || q.includes('crimes')) {
                return formatAnswer(
                    "FIA Act 1974 — The Schedule of Offences",
                    "**Scope of Jurisdiction:**\\n" +
                    "The FIA does NOT possess blanket general criminal jurisdiction. It investigates ONLY offences specified in the Schedule, including:\\n" +
                    "- **Pakistan Penal Code (PPC):** Bribery & Corruption (Sections 161-165A), Extortion (383-389), Forgery & Cheating (463-477A), Counterfeiting Currency & Stamps (489A-E).\\n" +
                    "- **Special Federal Statutes:** Prevention of Electronic Crimes Act (PECA 2016), Anti-Money Laundering Act (AMLA 2010), Official Secrets Act 1923, Foreign Exchange Regulation Act 1947, Emigration Ordinance 1979, and Passport Act 1974."
                );
            }
        }

        // 3. Civil Servants Act 1973 Queries
        if (q.includes('civil servant') || q.includes('civil servants act') || q.includes('service rules') || q.includes('superannuation')) {
            if (q.includes('section 13') || q.includes('retire') || q.includes('superannuation') || q.includes('age')) {
                return formatAnswer(
                    "Civil Servants Act 1973 — Section 13 (Retirement & Superannuation)",
                    "**Statutory Rules on Retirement:**\\n" +
                    "1. **Superannuation:** A civil servant shall retire from service on the completion of the **sixtieth (60th) year of his age**.\\n" +
                    "2. **Premature Public Interest Retirement:** A civil servant may be retired after completing **twenty (20) years of service** on direction of the competent authority in the public interest.\\n" +
                    "3. **Voluntary Retirement:** A civil servant may opt to retire voluntarily after completing 25 years of qualifying service for pension.\\n" +
                    "4. **Re-employment (Section 14):** No re-employment beyond 60 years is permitted except when sanctioned by the President in the public interest."
                );
            }
            if (q.includes('section 8') || q.includes('section 9') || q.includes('seniority') || q.includes('promotion')) {
                return formatAnswer(
                    "Civil Servants Act 1973 — Seniority (Sec 8) & Promotion (Sec 9)",
                    "**Seniority Principles (Section 8):**\\n" +
                    "- Seniority in a service, group, or post is governed by prescribed rules.\\n" +
                    "- **Supreme Court Precedent:** Seniority is *not a vested right*—it is regulated by statutory service rules.\\n\\n" +
                    "**Promotion Criteria (Section 9):**\\n" +
                    "- Civil servants possessing minimum prescribed qualifications are eligible for consideration for promotion.\\n" +
                    "- **Selection Posts (BS-19 and above):** Promotion is made strictly on **selection on merit**.\\n" +
                    "- **Non-Selection Posts:** Promotion is made on **seniority-cum-fitness**."
                );
            }
            if (q.includes('section 10') || q.includes('transfer') || q.includes('posting')) {
                return formatAnswer(
                    "Civil Servants Act 1973 — Section 10 (Posting & Transfer)",
                    "**Universal Liability to Serve:**\\n" +
                    "Under Section 10, every civil servant is liable to serve anywhere within or outside Pakistan in any post under the Federal Government, a Provincial Government, or a local authority or autonomous body.\\n\\n" +
                    "**Legal Safeguard:** Where a civil servant is transferred to a provincial or autonomous entity, his terms and conditions regarding pay and pension cannot be less favorable than those he would have enjoyed in the parent department."
                );
            }
            if (q.includes('definition') || q.includes('who is a civil servant') || q.includes('section 2')) {
                return formatAnswer(
                    "Civil Servants Act 1973 — Section 2(1)(b) Definition of 'Civil Servant'",
                    "**Inclusions:**\\n" +
                    "A person who is a member of an All-Pakistan Service or of a civil service of the Federation, or who holds a civil post in connection with the affairs of the Federation.\\n\\n" +
                    "**Exclusions (Exam Hotspot):**\\n" +
                    "- A person employed on **contract**, or on **deputation** from a Province or authority.\\n" +
                    "- A person who is paid from **contingencies** or casual daily wages.\\n" +
                    "- A person who is a 'worker' or 'workman' as defined in the Factories Act, 1934 or the Workmen's Compensation Act, 1923."
                );
            }
        }

        // 4. Constitutional Law & 26th Amendment Queries
        if (q.includes('constitution') || q.includes('article') || q.includes('26th amendment') || q.includes('supreme court') || q.includes('cjp') || q.includes('nfc')) {
            if (q.includes('26th') || q.includes('chief justice') || q.includes('cjp') || q.includes('175a')) {
                return formatAnswer(
                    "26th Constitutional Amendment Act, 2024 — Key Realignments",
                    "**1. Appointment of the Chief Justice of Pakistan (Article 175A):**\\n" +
                    "- The senior-most automatic elevation rule was abolished.\\n" +
                    "- A **12-member Special Parliamentary Committee** (8 National Assembly + 4 Senate members with proportional party representation) nominates the CJP from among the **three most senior judges** of the Supreme Court.\\n" +
                    "- Fixed term of **3 years** for the CJP (unless retiring at 65 or resigning earlier).\\n\\n" +
                    "**2. Constitutional Benches (Articles 191A & 202A):**\\n" +
                    "- Dedicated benches in Supreme Court and High Courts constituted by the Judicial Commission of Pakistan (JCP) to exclusively hear original, appellate, and advisory constitutional petitions (Articles 184, 185, 186).\\n\\n" +
                    "**3. Reconstituted Judicial Commission of Pakistan (13 Members):**\\n" +
                    "- CJP, 2 senior SC judges, Head of Constitutional Bench, Law Minister, Attorney General, PBC representative, 4 parliamentarians (2 treasury, 2 opposition), and 1 woman/minority technocrat."
                );
            }
            if (q.includes('160') || q.includes('nfc') || q.includes('divisible pool') || q.includes('award')) {
                return formatAnswer(
                    "Article 160 of Constitution 1973 & The 7th NFC Award",
                    "**Article 160 Mandate:**\\n" +
                    "- The President constitutes the National Finance Commission at least once every 5 years.\\n" +
                    "- **Article 160(3B) (The Non-Reduction Clause):** Added by the 18th Amendment in 2010, ensuring that the share of the Provinces in each subsequent NFC Award *shall not be less than the share given to the Provinces in the previous Award*.\\n\\n" +
                    "**7th NFC Award Sharing Formula:**\\n" +
                    "- **Vertical Share:** Provinces receive **57.5%**, Federation retains **42.5%**.\\n" +
                    "- **Horizontal Sharing Among Provinces:**\\n" +
                    "  - Population: **82.0%**\\n" +
                    "  - Poverty / Backwardness: **10.3%**\\n" +
                    "  - Revenue Collection / Generation: **5.0%**\\n" +
                    "  - Inverse Population Density (Land Area): **2.7%**"
                );
            }
            if (q.includes('cci') || q.includes('153') || q.includes('154') || q.includes('common interest')) {
                return formatAnswer(
                    "Articles 153 & 154 — Council of Common Interests (CCI)",
                    "**Composition (Article 153):**\\n" +
                    "- Prime Minister (Chairman)\\n" +
                    "- Four Provincial Chief Ministers\\n" +
                    "- Three members from Federal Government nominated by the Prime Minister.\\n\\n" +
                    "**Powers & Functions (Article 154):**\\n" +
                    "- Formulates and regulates policies in relation to matters in Part II of the Federal Legislative List (Railways, Mineral Oil, Natural Gas, Electricity, Major Ports).\\n" +
                    "- Mandated to meet at least once in 90 days.\\n" +
                    "- Reports annually to both Houses of Parliament."
                );
            }
        }

        // 5. Macroeconomics & IMF Queries
        if (q.includes('imf') || q.includes('gdp') || q.includes('inflation') || q.includes('debt') || q.includes('economy')) {
            return formatAnswer(
                "Pakistan Macroeconomic Indicators & IMF 2024 EFF Summary",
                "**Key Official Statistics (FY24-25):**\\n" +
                "- **Real GDP Growth:** 2.38% (rebounding from -0.21% in FY23).\\n" +
                "- **Agriculture Sector:** 6.25% bumper crop recovery (wheat, cotton, rice).\\n" +
                "- **Total Public Debt:** Rs. 67.5 trillion (~74% of GDP) by March 2024.\\n" +
                "- **FX Reserves (SBP):** Rebuilt to >$9.5 billion through IMF disbursements and bilateral rollovers.\\n" +
                "- **Policy Rate:** Peaked at 22% before staged monetary easing.\\n\\n" +
                "**The $7B Extended Fund Facility (EFF) Conditions:**\\n" +
                "1. Expanding provincial tax nets into agriculture income tax and retail sectors.\\n" +
                "2. Standardizing GST at 18% and eliminating discretionary tax exemptions.\\n" +
                "3. Curtailing power circular debt (~Rs. 2.6 trillion) through utility tariff adjustments and renegotiating IPP capacity payments."
            );
        }

        // 6. English Grammar Queries
        if (q.includes('dangling') || q.includes('modifier') || q.includes('voice') || q.includes('narration') || q.includes('grammar')) {
            if (q.includes('dangling') || q.includes('modifier')) {
                return formatAnswer(
                    "Grammar Rules — Mastering Dangling & Misplaced Modifiers",
                    "**What is a Dangling Modifier?**\\n" +
                    "A modifier 'dangles' when the word or phrase it is intended to describe is either missing entirely from the sentence or positioned so far away that it logically modifies the wrong noun.\\n\\n" +
                    "**Incorrect Example:**\\n" +
                    "*Walking into the library, the books looked fascinating.*\\n" +
                    "*(Illogical meaning: The books themselves were walking into the library!)*\\n\\n" +
                    "**Correct Revision:**\\n" +
                    "*Walking into the library, I found that the books looked fascinating.* OR *As I walked into the library, the books looked fascinating.*\\n\\n" +
                    "**Rule for CSS Précis:** The introductory participial phrase (-ing or -ed) MUST be immediately followed by the grammatical subject performing the action."
                );
            }
            if (q.includes('preposition') || q.includes('in') || q.includes('on') || q.includes('at')) {
                return formatAnswer(
                    "Grammar Rules — Prepositions of Place and Time",
                    "**1. AT:** Specific points, addresses, exact clock time (*at 5:00 PM, at the bus stop, at the corner*).\\n" +
                    "**2. ON:** Surfaces, streets, avenues, days, dates (*on the table, on Mall Road, on Monday, on 14th August*).\\n" +
                    "**3. IN:** Enclosed spaces, cities, countries, months, years (*in the room, in Lahore, in Pakistan, in July, in 2024*).\\n\\n" +
                    "**Pair of Confusing Prepositions:**\\n" +
                    "- **Between:** Strictly for two distinct persons or things (*divided between Ali and Usman*).\\n" +
                    "- **Among:** For three or more persons/things (*distributed among the students*)."
                );
            }
        }

        // Default Intelligent Fallback
        return formatAnswer(
            "AI Study Assistant — Query Synthesis",
            \`You asked: *"\\${query}"*\\n\\n\` +
            "Based on civil services competitive examination standards, here is the synthesis:\\n" +
            "- **Statutory & Constitutional Foundations:** Always reference specific statutory sections (e.g. FIA Act Sections 3/5/5A, Civil Servants Act Sections 8-13, Constitution Articles 160/175A/191A).\\n" +
            "- **Evidence & Data Anchoring:** Support economic and policy arguments with official statistics from the Pakistan Economic Survey 2023-24 and SBP Annual Reports.\\n" +
            "- **Balanced Examination Perspective:** Contrast traditional administrative doctrine with contemporary reform frameworks (e.g. Dr. Ishrat Husain civil service reform guidelines, digitization, and transparency).\\n\\n" +
            "*(Tip: You can ask specific questions like 'Explain Section 5 of FIA Act', 'What is Article 160(3B)', or upload custom notes on the left panel to generate mock MCQs!)*"
        );
    }

    function answerFromCustomDoc(query) {
        if (!customUploadedDocument) {
            return "No custom document has been uploaded yet. Please paste or upload your notes in the Document Selector panel on the left.";
        }

        const doc = customUploadedDocument;
        return formatAnswer(
            \`Analysis of Uploaded Document: "\${doc.title}"\`,
            \`**Document Metrics:** \${doc.wordCount} words, \${doc.paragraphs.length} paragraphs.\\n\\n\` +
            `**Key Subject Concepts Extracted:**\\n` +
            `- **Keywords Identified:** \${doc.keywords.slice(0, 10).join(', ')}\\n\\n` +
            `**Analytical Summary of Uploaded Notes:**\\n` +
            doc.paragraphs.slice(0, 3).map((p, idx) => `> **Paragraph \${idx + 1}:** \${p}`).join('\\n\\n') +
            `\\n\\n**AI Recommendation:** You can now generate 5 to 10 custom MCQs or a 20-mark descriptive exam outline directly from this uploaded text using the Practice Question Generator on the left!`
        );
    }

    function formatAnswer(title, body) {
        return `### 📘 \${title}\\n\\n\${body}`;
    }

    // Question Generator Engine
    function generateQuestions(topicKey, qType, count, difficulty) {
        const num = Math.min(Math.max(parseInt(count, 10) || 5, 1), 10);
        const diff = difficulty || 'Hard';

        if (qType === 'mcq') {
            return generateMCQs(topicKey, num, diff);
        } else if (qType === 'short') {
            return generateShortQuestions(topicKey, num, diff);
        } else {
            return generateDescriptiveOutlines(topicKey, num, diff);
        }
    }

    function generateMCQs(topicKey, count, diff) {
        // Pre-indexed high-yield question pools
        const pools = {
            fia_act: [
                {
                    q: "Under Section 5(2) of the FIA Act, 1974, which minimum rank officer of the Agency is empowered to exercise the powers of an Officer-in-Charge of a Police Station?",
                    options: ["Assistant Director", "Inspector", "Sub-Inspector", "Assistant Sub-Inspector"],
                    correct: 2,
                    exp: "Section 5(2) explicitly provides that any officer of the Agency not below the rank of Sub-Inspector may exercise any of the powers of an Officer-in-Charge of a Police Station."
                },
                {
                    q: "Who is statutorily empowered under Section 5A of the FIA Act, 1974 to issue an order in writing directing a bank not to pay or deliver money held by it?",
                    options: ["Any investigating officer", "Director General or an officer not below Assistant Director authorized by him", "Special Judge Central", "Secretary Interior"],
                    correct: 1,
                    exp: "Section 5A provides that the Director General, or an officer not below the rank of Assistant Director authorized by him, can issue a written freezing order to any bank."
                },
                {
                    q: "Under Section 4(1) of the FIA Act, 1974, in whom does the superintendence of the Federal Investigation Agency vest?",
                    options: ["Supreme Court of Pakistan", "Director General FIA", "Federal Government", "National Accountability Bureau"],
                    correct: 2,
                    exp: "Section 4(1) lays down that the superintendence of the Agency shall vest in the Federal Government."
                },
                {
                    q: "Under Section 3(1) of the FIA Act, 1974, what limits the jurisdiction of the Agency to conduct inquiries and investigations?",
                    options: ["All penal offences in Pakistan", "Offences specified in the Schedule to the Act", "Only cross-border cybercrimes", "Only offences committed by politicians"],
                    correct: 1,
                    exp: "Section 3(1) restricts the Agency's investigative remit strictly to offences specified in the Schedule of the FIA Act 1974."
                },
                {
                    q: "Which defunct police force was repealed and merged into the FIA upon its creation under Section 10 of the FIA Act, 1974?",
                    options: ["Punjab Constabulary", "Pakistan Special Police Establishment", "Federal Security Force", "Balochistan Levies"],
                    correct: 1,
                    exp: "Section 10 repealed the Pakistan Special Police Establishment Ordinance, 1948, transferring all its personnel and cases to the newly formed FIA."
                }
            ],
            civil_servants_act: [
                {
                    q: "Under Section 13 of the Civil Servants Act, 1973, what is the statutory age of retirement (superannuation) for a civil servant?",
                    options: ["58 Years", "60 Years", "62 Years", "65 Years"],
                    correct: 1,
                    exp: "Section 13 mandates that a civil servant shall retire from service on the completion of the sixtieth (60th) year of his age."
                },
                {
                    q: "According to Section 4 of the Civil Servants Act, 1973, every civil servant holds office during the pleasure of whom?",
                    options: ["The Prime Minister", "The Federal Cabinet", "The President", "The Chief Justice of Pakistan"],
                    correct: 2,
                    exp: "Section 4 dictates that every civil servant shall hold office during the pleasure of the President of Pakistan."
                },
                {
                    q: "Which of the following persons is specifically EXCLUDED from the definition of a 'civil servant' under Section 2(1)(b) of the Civil Servants Act, 1973?",
                    options: [
                        "A permanent Section Officer in the Secretariat",
                        "A person who is employed on contract basis",
                        "A member of the Police Service of Pakistan",
                        "An Assistant Director in the Audit department"
                    ],
                    correct: 1,
                    exp: "Section 2(1)(b) explicitly excludes persons employed on contract, on deputation from a province, or workers under the Factories Act."
                },
                {
                    q: "Under Section 10 of the Civil Servants Act, 1973, what is the geographical liability of a civil servant regarding posting and transfer?",
                    options: [
                        "Only within his domicile district",
                        "Only within the federal capital territory",
                        "Anywhere within or outside Pakistan in any post under Federal or Provincial government",
                        "Strictly in his parent cadre department"
                    ],
                    correct: 2,
                    exp: "Section 10 establishes universal liability: every civil servant is liable to serve anywhere within or outside Pakistan."
                }
            ],
            constitution_1973: [
                {
                    q: "Which constitutional clause added by the 18th Amendment protects the provincial share in the National Finance Commission (NFC) from being reduced?",
                    options: ["Article 153(2)", "Article 160(3B)", "Article 175A(4)", "Article 240(b)"],
                    correct: 1,
                    exp: "Article 160(3B) stipulates that the share of the Provinces in each subsequent NFC recommendation shall not be less than the share given in the previous Award."
                },
                {
                    q: "Under the 26th Constitutional Amendment Act, 2024, how is the Chief Justice of Pakistan nominated?",
                    options: [
                        "Strictly the senior-most judge of Supreme Court",
                        "By a 12-member Special Parliamentary Committee from the 3 most senior SC judges",
                        "By the Judicial Commission of Pakistan directly",
                        "By the President on advice of the Law Minister alone"
                    ],
                    correct: 1,
                    exp: "Article 175A as amended provides that a 12-member Special Parliamentary Committee nominates the CJP from among the three most senior judges for a 3-year term."
                },
                {
                    q: "Under Article 153 of the Constitution, who serves as the Chairman of the Council of Common Interests (CCI)?",
                    options: ["President of Pakistan", "Chief Justice of Pakistan", "Prime Minister of Pakistan", "Chairman Senate"],
                    correct: 2,
                    exp: "Article 153(2) designates the Prime Minister as the Chairman of the Council of Common Interests."
                }
            ]
        };

        const activePool = pools[topicKey] || pools.fia_act;
        const selected = activePool.slice(0, count);

        // If custom document is active and selected, generate dynamic question
        if (topicKey === 'custom_upload' && customUploadedDocument) {
            return generateCustomDocMCQs(count);
        }

        return selected;
    }

    function generateCustomDocMCQs(count) {
        const doc = customUploadedDocument;
        const questions = [];
        const paras = doc.paragraphs;

        for (let i = 0; i < Math.min(count, paras.length); i++) {
            const p = paras[i];
            const words = p.split(/\\s+/);
            const keyTerm = words.find(w => w.length > 6) || 'key concept';

            questions.push({
                q: \`Based on your uploaded document "\${doc.title}", which of the following statements accurately reflects Paragraph \${i + 1}?\`,
                options: [
                    p.substring(0, 95) + '...',
                    \`The author completely refutes the necessity of \${keyTerm} in civil governance.\`,
                    \`All statutory proceedings regarding \${keyTerm} are void ab initio.\`,
                    \`None of the above statements are supported by the text.\`
                ],
                correct: 0,
                exp: \`Directly grounded in the uploaded notes: "\${p.substring(0, 160)}..."\`
            });
        }

        return questions;
    }

    function generateShortQuestions(topicKey, count, diff) {
        const shortQuestions = [
            {
                q: "Distinguish between the legal scope of Section 5(1) and Section 5A of the FIA Act, 1974.",
                answer: "**Model Answer (5 Marks):**\\n" +
                    "- **Section 5(1):** Confers general police powers under the Code of Criminal Procedure 1898 (search, arrest, seizure of property) upon all members of the Agency throughout Pakistan.\\n" +
                    "- **Section 5A:** A specialized statutory mechanism empowering the Director General or an authorized officer (not below Assistant Director) to issue a written order directly to any bank freezing funds or property without an initial court order.\\n" +
                    "- **Critical Distinction:** Sec 5(1) governs physical custody and evidence, whereas Sec 5A prevents financial dissipation and cross-border flight of illicit assets."
            },
            {
                q: "Explain the constitutional significance of Article 160(3B) for inter-provincial fiscal stability in Pakistan.",
                answer: "**Model Answer (5 Marks):**\\n" +
                    "- **Origin:** Inserted via the 18th Constitutional Amendment in 2010.\\n" +
                    "- **Core Provision:** Provides that the provincial share in any subsequent NFC Award cannot fall below the share granted in the preceding award (57.5% under the 7th NFC Award).\\n" +
                    "- **Fiscal Dilemma:** While it guarantees provincial autonomy and predictable revenues for education and health, it places immense fiscal pressure on the federal treasury, which must shoulder 100% of defense and sovereign debt servicing from its remaining 42.5% share."
            },
            {
                q: "What are the structural exclusions from the definition of 'Civil Servant' under Section 2(1)(b) of the Civil Servants Act, 1973?",
                answer: "**Model Answer (5 Marks):**\\n" +
                    "- **Contract Employees:** Persons appointed on a temporary contractual basis with fixed tenures.\\n" +
                    "- **Deputationists:** Employees on deputation from provinces or statutory corporations who retain liens in their parent cadres.\\n" +
                    "- **Contingent Laborers:** Daily-wage workers paid from contingent funds rather than the regular pay budget.\\n" +
                    "- **Industrial Workers:** 'Workmen' covered under the Factories Act 1934 or Workmen's Compensation Act 1923, who seek redress through labor courts rather than the Service Tribunal."
            }
        ];

        return shortQuestions.slice(0, count);
    }

    function generateDescriptiveOutlines(topicKey, count, diff) {
        return [
            {
                title: "Fiscal Federalism & The 18th Constitutional Amendment: Decentralization Success vs. Federal Solvency Dilemmas",
                marks: 20,
                exam: "CSS Pakistan Affairs / Public Administration",
                thesis: "While the 18th Constitutional Amendment successfully devolved legislative and administrative sovereignty to provinces, the accompanying fiscal architecture under Article 160(3B) has generated a vertical fiscal asymmetry that imperils federal sovereign solvency without generating commensurate provincial tax mobilization.",
                outline: [
                    "I. Introduction: Historic trajectory of provincial autonomy from 1973 Constitution to the 18th Amendment.",
                    "II. Institutional Mechanics of Devolution: Abolition of Concurrent List & Empowerment of Council of Common Interests (Art 153/154).",
                    "III. The Fiscal Anchor: 7th NFC Award formula and Article 160(3B) non-reduction ratchet clause.",
                    "IV. The Federal Solvency Dilemma: Centre bears 100% of sovereign defense and debt servicing with only 42.5% divisible revenue.",
                    "V. The Provincial Revenue Gap: Agriculture income tax and urban property tax under-collection (<1% of GDP).",
                    "VI. Strategic Policy Recommendations: Harmonizing provincial tax slabs, strengthening the CCI Secretariat, and performance-based transfers.",
                    "VII. Conclusion: Functional federalism requires shared fiscal responsibility, not centralizing rollback."
                ],
                examinerTip: "Never call for the repeal of the 18th Amendment. Top scorers advocate for 'Functional Fiscal Federalism'—demanding provinces mobilize internal agriculture and service taxes while sharing joint pension and debt liabilities."
            }
        ];
    }

    return {
        answerQuestion,
        generateQuestions,
        ingestDocument,
        getCustomDocument,
        clearCustomDocument
    };
})();
`;

fs.writeFileSync(targetPath, jsContent, 'utf8');
console.log('Successfully generated frontend/js/ai_study_assistant.js!');
