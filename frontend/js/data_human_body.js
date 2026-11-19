/**
 * CSS PREP CENTRAL - HUMAN BODY EXPLORER DATASET
 * Authoritative Human Anatomy, Physiology & Organ Systems Repository
 * Curated specifically for CSS/PMS General Science & Ability (Biological Sciences).
 */

(function (global) {
  'use strict';

  // 12 Major Vital Organs
  const ORGANS = [
    {
      id: "brain",
      name: "Brain",
      latinRoot: "Encephalon / Cerebro-",
      systemId: "nervous",
      systemName: "Nervous System",
      icon: "fa-brain",
      color: "#8b5cf6",
      svgCoords: { cx: 200, cy: 68, r: 24 },
      
      // Physical Metrics
      averageWeight: "1.3 – 1.4 kg (approx. 2% of total body weight)",
      location: "Enclosed and protected within the cranial cavity (cranium / skull)",
      bloodSupply: "Consumes 20% of the body's total oxygen and glucose supply despite being only 2% of body mass (supplied by internal carotid and vertebral arteries via Circle of Willis)",
      
      // Primary Functions
      primaryFunctions: [
        "Cerebrum: Seat of intelligence, conscious thought, memory, reasoning, voluntary motor control, and sensory perception.",
        "Cerebellum: Coordinates voluntary muscle movements, maintains posture, balance, and motor learning (e.g., cycling, writing).",
        "Medulla Oblongata: Autonomic cardiac, respiratory, and vasomotor reflex center controlling heart rate, breathing rhythm, blood pressure, swallowing, and vomiting.",
        "Hypothalamus: Master thermostat regulating body temperature, hunger, thirst, sleep-wake circadian rhythm, and links nervous system to endocrine system via pituitary gland."
      ],
      
      // Key Secretions & Neurotransmitters
      secretions: "Dopamine (reward/motor), Serotonin (mood/sleep), Acetylcholine (memory/muscle contraction), GABA (primary inhibitory neurotransmitter), Norepinephrine.",
      
      // Common Pathologies & Diseases
      pathologies: [
        "Stroke (Cerebrovascular Accident - Ischemic or Hemorrhagic): Loss of brain function due to blood supply interruption.",
        "Meningitis: Inflammation of the protective meninges membranes (Dura, Arachnoid, Pia mater).",
        "Alzheimer's Disease: Progressive neurodegenerative disorder characterized by amyloid plaques and neurofibrillary tau tangles causing dementia.",
        "Parkinson's Disease: Degeneration of dopamine-producing neurons in the Substantia Nigra leading to tremors and rigidity."
      ],
      
      examRelevance: "Classic CSS General Science question: 'Describe the structural parts of the human brain (Forebrain, Midbrain, Hindbrain) and explain their physiological functions'."
    },
    {
      id: "heart",
      name: "Heart",
      latinRoot: "Cardia / Cardio-",
      systemId: "circulatory",
      systemName: "Circulatory System",
      icon: "fa-heart-pulse",
      color: "#ef4444",
      svgCoords: { cx: 215, cy: 195, r: 20 },
      
      averageWeight: "250 – 350 grams (roughly the size of a closed human fist)",
      location: "Thoracic cavity in the mediastinum, tilted to the left between the lungs and above the diaphragm",
      bloodSupply: "Coronary arteries branch from the base of the ascending aorta; consumes 7% of body oxygen",
      
      primaryFunctions: [
        "Four-Chambered Muscular Pump: Right Atrium, Right Ventricle, Left Atrium, Left Ventricle.",
        "Double Circulation: Pulmonary circulation (pumps deoxygenated blood to lungs via Pulmonary Artery) and Systemic circulation (pumps oxygenated blood to body via Aorta).",
        "Cardiac Pacemaker: Sinoatrial (SA) Node in the right atrium initiates electrical action potentials (~70-80 bpm), propagated via AV Node, Bundle of His, and Purkinje fibers.",
        "One-Way Valves: Tricuspid and Bicuspid (Mitral) atrioventricular valves, and Aortic and Pulmonary semilunar valves prevent backflow, creating the 'Lub-Dub' heart sounds."
      ],
      
      secretions: "Atrial Natriuretic Peptide (ANP) — lowers blood pressure by promoting sodium and water excretion in kidneys.",
      
      pathologies: [
        "Atherosclerosis & Coronary Artery Disease (CAD): Plaque buildup in coronary arteries reducing myocardial perfusion.",
        "Myocardial Infarction (Heart Attack): Ischemic necrosis of heart muscle due to complete coronary blockage.",
        "Hypertension: Chronic resting blood pressure above 130/80 mmHg, increasing afterload and risk of stroke.",
        "Arrhythmias: Irregular heartbeat (e.g., Atrial Fibrillation, Ventricular Tachycardia)."
      ],
      
      examRelevance: "FPSC/CSS syllabus staple: Mechanism of double circulation, difference between arteries and veins, cardiac cycle, and why the Left Ventricle has the thickest muscular wall."
    },
    {
      id: "lungs",
      name: "Lungs",
      latinRoot: "Pulmo / Pulmono-",
      systemId: "respiratory",
      systemName: "Respiratory System",
      icon: "fa-lungs",
      color: "#38bdf8",
      svgCoords: { cx: 175, cy: 190, r: 24 },
      
      averageWeight: "1.0 – 1.3 kg (Right lung is slightly larger with 3 lobes; Left lung has 2 lobes to accommodate the cardiac notch)",
      location: "Thoracic cavity on either side of the heart, enclosed by the ribcage and resting on the diaphragm",
      bloodSupply: "Pulmonary arteries deliver deoxygenated blood; bronchial arteries provide oxygenated blood for lung tissue nourishment",
      
      primaryFunctions: [
        "Gas Exchange: Takes in Atmospheric Oxygen ($O_2$) and expels metabolic Carbon Dioxide ($CO_2$) across the alveolar-capillary membrane via passive diffusion.",
        "Microscopic Alveoli: Over 300 to 500 million tiny air sacs in both lungs providing an immense surface area of 70 to 100 square meters (the size of a tennis court!).",
        "Pulmonary Surfactant: Secreted by Type II alveolar cells to reduce alveolar surface tension, preventing lung collapse during exhalation.",
        "Acid-Base Homeostasis: Regulates blood pH (normal 7.35–7.45) by controlling the rate of $CO_2$ exhalation ($CO_2 + H_2O \rightleftharpoons H_2CO_3 \rightleftharpoons H^+ + HCO_3^-$)."
      ],
      
      secretions: "Surfactant (dipalmitoylphosphatidylcholine), Angiotensin-Converting Enzyme (ACE, converts Angiotensin I to II).",
      
      pathologies: [
        "Asthma: Chronic inflammatory bronchoconstriction with hyper-responsive airways and excess mucus.",
        "Pneumonia: Acute infectious alveolar consolidation and fluid buildup caused by bacteria (*Streptococcus pneumoniae*), viruses, or fungi.",
        "Tuberculosis (TB): Bacterial infection by *Mycobacterium tuberculosis* forming granulomatous tubercles.",
        "Emphysema (COPD): Destruction of alveolar walls leading to loss of elasticity and impaired expiration."
      ],
      
      examRelevance: "CSS General Science: The mechanism of breathing (inhalation vs exhalation, diaphragm role), structure of alveoli, transport of gases ($O_2$ by hemoglobin, $CO_2$ as bicarbonate)."
    },
    {
      id: "liver",
      name: "Liver",
      latinRoot: "Hepar / Hepato-",
      systemId: "digestive",
      systemName: "Digestive & Metabolic System",
      icon: "fa-disease",
      color: "#b45309",
      svgCoords: { cx: 175, cy: 260, r: 22 },
      
      averageWeight: "1.4 – 1.6 kg (Largest internal organ and largest gland in the human body)",
      location: "Right Upper Quadrant (RUQ) of the abdominal cavity, directly beneath the diaphragm",
      bloodSupply: "Unique dual blood supply: 75% deoxygenated nutrient-rich blood from intestines via Hepatic Portal Vein, 25% oxygenated blood via Hepatic Artery",
      
      primaryFunctions: [
        "Bile Synthesis: Produces 800–1,000 mL of bile salts daily, essential for the emulsification and absorption of dietary lipids in the duodenum.",
        "Carbohydrate Metabolism: Stores glucose as glycogen (Glycogenesis), breaks glycogen down (Glycogenolysis), and synthesizes new glucose from amino acids/glycerol (Gluconeogenesis).",
        "Detoxification: Converts toxic ammonia into urea (via the Urea Cycle/Ornithine Cycle) and metabolizes alcohol, drugs, and steroid hormones.",
        "Plasma Protein Synthesis: Synthesizes albumin (maintains oncotic pressure), prothrombin, and fibrinogen (essential blood clotting factors).",
        "Storage Reservoir: Stores glycogen, iron (as ferritin), copper, and fat-soluble vitamins (A, D, E, K) and Vitamin B12."
      ],
      
      secretions: "Bile, Albumin, Clotting Factors (I, II, VII, IX, X), Heparin (anticoagulant), Angiotensinogen, IGF-1 (Insulin-like growth factor).",
      
      pathologies: [
        "Jaundice: Yellow discoloration of skin and sclera due to hyperbilirubinemia (excess bilirubin).",
        "Hepatitis (A, B, C, D, E): Viral or toxic inflammation of liver parenchyma.",
        "Cirrhosis: End-stage irreversible fibrosis and scarring of liver tissue, often resulting from chronic hepatitis or alcoholism.",
        "Fatty Liver Disease (NAFLD / MASH): Accumulation of triglycerides in hepatocytes."
      ],
      
      examRelevance: "High-yield CSS topic: Liver functions (detoxification, glycogen storage, bile synthesis, urea cycle), the hepatic portal system, and jaundice etiology."
    },
    {
      id: "stomach",
      name: "Stomach",
      latinRoot: "Gaster / Gastro-",
      systemId: "digestive",
      systemName: "Digestive System",
      icon: "fa-utensils",
      color: "#f59e0b",
      svgCoords: { cx: 225, cy: 265, r: 18 },
      
      averageWeight: "Emptied volume ~50 mL; expands to accommodate 1.0 to 1.5 liters of food and liquid",
      location: "Left Upper Quadrant of the abdominal cavity, between the esophagus and the duodenum",
      bloodSupply: "Celiac trunk branches (Left and Right gastric, gastroepiploic arteries)",
      
      primaryFunctions: [
        "Mechanical Digestion: Three layers of smooth muscle (longitudinal, circular, oblique) churn and liquefy food into an acidic paste called 'Chyme'.",
        "Chemical Protein Digestion: Chief cells secrete inactive Pepsinogen, which is activated by hydrochloric acid (HCl) into active Pepsin, cleaving proteins into peptides.",
        "Antimicrobial Defense: Parietal cells secrete Hydrochloric Acid (HCl), creating a powerful acidic environment (pH 1.5–2.0) that kills swallowed bacteria.",
        "Intrinsic Factor Secretion: Parietal cells secrete Intrinsic Factor, an indispensable glycoprotein required for the absorption of Vitamin B12 in the terminal ileum.",
        "Temporary Storage: Regulates chyme release into the duodenum via the muscular Pyloric Sphincter."
      ],
      
      secretions: "Hydrochloric Acid (HCl), Pepsinogen, Gastric Lipase, Intrinsic Factor, Gastrin hormone (G cells), Mucus & Bicarbonate (mucous neck cells).",
      
      pathologies: [
        "Peptic Ulcer Disease (PUD): Mucosal erosion caused by *Helicobacter pylori* bacterial infection or prolonged NSAID use.",
        "GERD (Gastroesophageal Reflux Disease): Acid reflux through a weakened lower esophageal sphincter.",
        "Gastritis: Acute or chronic inflammation of the protective gastric mucosal lining.",
        "Pernicious Anemia: Autoimmune destruction of parietal cells preventing Vitamin B12 absorption."
      ],
      
      examRelevance: "CSS General Science syllabus: The role of stomach enzymes (Pepsin), gastric acid pH, mechanical churning, and prevention of auto-digestion by the mucous barrier."
    },
    {
      id: "pancreas",
      name: "Pancreas",
      latinRoot: "Pancreas / Pancreato-",
      systemId: "endocrine",
      systemName: "Endocrine & Exocrine Digestive System",
      icon: "fa-pills",
      color: "#e11d48",
      svgCoords: { cx: 200, cy: 290, r: 16 },
      
      averageWeight: "70 – 100 grams, elongated retroperitoneal gland (~15 cm long)",
      location: "Posterior to the stomach, nestled within the C-shaped curve of the duodenum",
      bloodSupply: "Splenic artery and superior/inferior pancreaticoduodenal arteries",
      
      primaryFunctions: [
        "Dual Gland Function (Heterocrine Gland): 99% Exocrine (digestive enzymes) and 1% Endocrine (hormones directly into bloodstream).",
        "Endocrine Control (Islets of Langerhans): Beta cells secrete Insulin (lowers blood glucose by promoting cellular uptake and glycogen synthesis); Alpha cells secrete Glucagon (raises blood glucose via glycogenolysis); Delta cells secrete Somatostatin.",
        "Exocrine Digestive Juices: Acinar cells produce alkaline pancreatic juice containing bicarbonate ($HCO_3^-$) to neutralize acidic gastric chyme in the duodenum.",
        "Key Digestive Enzymes: Pancreatic Amylase (starch to maltose), Pancreatic Lipase (fats to fatty acids and glycerol), Trypsinogen & Chymotrypsinogen (protein breakdown)."
      ],
      
      secretions: "Insulin, Glucagon, Somatostatin, Pancreatic Polypeptide, Trypsinogen, Chymotrypsinogen, Pancreatic Lipase, Pancreatic Amylase, Bicarbonate ions.",
      
      pathologies: [
        "Diabetes Mellitus Type 1: Autoimmune destruction of pancreatic beta cells leading to absolute insulin deficiency.",
        "Diabetes Mellitus Type 2: Peripheral insulin resistance combined with progressive secretional defect.",
        "Acute & Chronic Pancreatitis: Autodigestion of pancreatic tissue caused by premature enzyme activation, gallstones, or alcohol.",
        "Pancreatic Adenocarcinoma: Highly aggressive malignant neoplasm."
      ],
      
      examRelevance: "Very frequent CSS/PMS exam question: Dual endocrine/exocrine nature of pancreas, difference between insulin and glucagon, and diabetes pathophysiology."
    },
    {
      id: "kidneys",
      name: "Kidneys",
      latinRoot: "Renes / Nephro-",
      systemId: "excretory",
      systemName: "Urinary / Excretory System",
      icon: "fa-filter",
      color: "#059669",
      svgCoords: { cx: 160, cy: 305, r: 16 },
      
      averageWeight: "130 – 150 grams each (Bean-shaped organs, right kidney is slightly lower due to liver)",
      location: "Retroperitoneal space on posterior abdominal wall, on either side of the vertebral column (T12 to L3)",
      bloodSupply: "Receive 20–25% of total cardiac output (~1.2 L/min) via Renal Arteries branching directly from the abdominal aorta",
      
      primaryFunctions: [
        "Blood Filtration: Filters approximately 180 liters of blood plasma daily through over 1 million functional units called 'Nephrons' in each kidney, producing ~1.5 L of urine.",
        "Three-Step Urine Formation: Ultrafiltration in the Glomerulus & Bowman's capsule; Selective Reabsorption in Proximal Convoluted Tubule & Loop of Henle; Tubular Secretion in Distal Tubule.",
        "Osmoregulation & Fluid Balance: Responds to Antidiuretic Hormone (ADH / Vasopressin) from pituitary to conserve water and concentrate urine.",
        "Blood Pressure Regulation (RAAS): Secretes Renin enzyme when renal perfusion drops, triggering the Renin-Angiotensin-Aldosterone System to elevate blood pressure.",
        "Erythropoiesis Stimulation: Secretes Erythropoietin (EPO) hormone in response to hypoxia, stimulating bone marrow red blood cell production."
      ],
      
      secretions: "Renin, Erythropoietin (EPO), Calcitriol (active Vitamin D3: 1,25-dihydroxycholecalciferol).",
      
      pathologies: [
        "Chronic Kidney Disease (CKD) & End-Stage Renal Disease (ESRD): Progressive loss of filtration function requiring dialysis or transplant.",
        "Kidney Stones (Nephrolithiasis): Crystalline mineral deposits (mostly calcium oxalate, uric acid).",
        "Glomerulonephritis: Immune-mediated inflammation of glomeruli.",
        "Uremia: Toxic accumulation of nitrogenous waste (urea, creatinine) in blood."
      ],
      
      examRelevance: "Classic CSS General Science question: Structure of a Nephron, the three stages of urine formation (Ultrafiltration, Reabsorption, Secretion), and dialysis principles."
    },
    {
      id: "small_intestine",
      name: "Small Intestine",
      latinRoot: "Enteron / Entero-",
      systemId: "digestive",
      systemName: "Digestive System",
      icon: "fa-bacon",
      color: "#ea580c",
      svgCoords: { cx: 200, cy: 345, r: 20 },
      
      averageWeight: "Length is approx. 6.0 meters (20 feet) in adults; diameter ~2.5 cm",
      location: "Central and lower abdominal cavity, framed by the large intestine",
      bloodSupply: "Superior Mesenteric Artery; venous drainage through Superior Mesenteric Vein to the Hepatic Portal Vein",
      
      primaryFunctions: [
        "Primary Site of Nutrient Digestion & Absorption: Over 90% of all dietary digestion and absorption takes place in the small intestine.",
        "Three Anatomical Segments: Duodenum (first 25 cm, receives bile and pancreatic juice), Jejunum (middle 2.5 m, main nutrient absorption), Ileum (distal 3.5 m, absorbs B12 and bile salts).",
        "Villi & Microvilli: Millions of finger-like projections and microscopic brush-borders increase the luminal surface area by 600-fold (~250-300 square meters!).",
        "Lacteal Lymphatic Absorption: Fats (chylomicrons) are absorbed into central lacteals of villi, while amino acids and monosaccharides enter blood capillaries directly."
      ],
      
      secretions: "Intestinal juice (Succus entericus): Maltase, Sucrase, Lactase, Peptidases, Enterokinase, Secretin, Cholecystokinin (CCK).",
      
      pathologies: [
        "Celiac Disease: Autoimmune villous atrophy triggered by dietary gluten, resulting in malabsorption.",
        "Crohn's Disease: Chronic inflammatory bowel disease that can affect any part of the GI tract, especially terminal ileum.",
        "Lactose Intolerance: Deficiency of the brush-border enzyme lactase.",
        "Paralytic Ileus: Disruption of normal propulsive neuromuscular peristalsis."
      ],
      
      examRelevance: "CSS General Science: The three divisions of the small intestine (Duodenum, Jejunum, Ileum), villi structure, and role of lacteals in lipid absorption."
    },
    {
      id: "large_intestine",
      name: "Large Intestine (Colon)",
      latinRoot: "Colon / Colo-",
      systemId: "digestive",
      systemName: "Digestive System",
      icon: "fa-shield-virus",
      color: "#ca8a04",
      svgCoords: { cx: 200, cy: 380, r: 24 },
      
      averageWeight: "Length ~1.5 meters (5 feet); diameter ~6.5 cm",
      location: "Surrounds the perimeter of the abdominal cavity from the right iliac fossa to the rectum",
      bloodSupply: "Superior and Inferior Mesenteric Arteries",
      
      primaryFunctions: [
        "Water & Electrolyte Reabsorption: Absorbs ~1.0 to 1.5 liters of water and sodium chloride from indigestible food residue, compacting it into semi-solid feces.",
        "Anatomical Framework: Cecum (with Appendix attached), Ascending Colon, Transverse Colon, Descending Colon, Sigmoid Colon, Rectum, and Anal Canal.",
        "Symbiotic Gut Microbiome: Trillions of gut bacteria synthesize essential vitamins, notably Vitamin K (vital for blood clotting) and Biotin (Vitamin B7).",
        "Fecal Elimination: Mass peristaltic movements propel feces into the rectum, triggering the defecation reflex."
      ],
      
      secretions: "Copious alkaline mucus (protects intestinal wall and lubricates feces); no digestive enzymes produced.",
      
      pathologies: [
        "Appendicitis: Acute inflammation of the vestigial vermiform appendix, requiring appendectomy.",
        "Colorectal Cancer: Malignant transformation of adenomatous polyps in colon epithelium.",
        "Ulcerative Colitis: Chronic inflammatory disease confined to the mucosa of the colon and rectum.",
        "Irritable Bowel Syndrome (IBS): Functional gastrointestinal motility disorder."
      ],
      
      examRelevance: "CSS Biology questions: Water reabsorption, role of gut microbiota in Vitamin K synthesis, and appendicitis pathophysiology."
    },
    {
      id: "spleen",
      name: "Spleen",
      latinRoot: "Lien / Spleno-",
      systemId: "immune",
      systemName: "Lymphatic & Immune System",
      icon: "fa-shield",
      color: "#9333ea",
      svgCoords: { cx: 240, cy: 250, r: 14 },
      
      averageWeight: "150 – 200 grams (soft, highly vascular, purplish organ roughly the size of a fist)",
      location: "Left Upper Quadrant of the abdomen, tucked beneath the diaphragm and protected by the 9th, 10th, and 11th ribs",
      bloodSupply: "Splenic Artery (largest branch of celiac trunk); drains via Splenic Vein into hepatic portal system",
      
      primaryFunctions: [
        "'Graveyard of Red Blood Cells': Macrophages in the splenic red pulp phagocytose aged, damaged, or abnormal erythrocytes (which have reached their ~120-day lifespan), salvaging iron.",
        "Immunological Surveillance (White Pulp): Contains rich clusters of T-cells and B-cells that detect blood-borne pathogens, initiating antibody-mediated and cellular immune responses.",
        "Blood Reservoir: Stores platelets (up to 30% of body platelets) and erythrocytes that can be mobilized during acute hemorrhagic shock.",
        "Extramedullary Hematopoiesis: Capable of producing blood cells during fetal development or in severe bone marrow failure."
      ],
      
      secretions: "Immunoglobulins (antibodies produced by plasma cells), Splenopentin, Tuftsin (immunomodulatory peptides).",
      
      pathologies: [
        "Splenomegaly: Enlargement of the spleen due to malaria, portal hypertension, or leukemia.",
        "Splenic Rupture: Life-threatening internal hemorrhage following blunt abdominal trauma (e.g. car crash), requiring urgent splenectomy.",
        "Asplenia / Post-Splenectomy Sepsis: Greatly heightened vulnerability to encapsulated bacteria (*Streptococcus pneumoniae, Neisseria meningitidis*)."
      ],
      
      examRelevance: "General Science questions: Why the spleen is called the 'graveyard of RBCs', functions of red vs white pulp, and platelet storage."
    },
    {
      id: "thyroid",
      name: "Thyroid Gland",
      latinRoot: "Glandula Thyroidea / Thyro-",
      systemId: "endocrine",
      systemName: "Endocrine System",
      icon: "fa-ribbon",
      color: "#d946ef",
      svgCoords: { cx: 200, cy: 115, r: 12 },
      
      averageWeight: "15 – 25 grams (Butterfly-shaped bi-lobed gland connected by a central isthmus)",
      location: "Anterior base of the neck, directly below the thyroid cartilage ('Adam's apple') and wrapped around the trachea",
      bloodSupply: "Superior and Inferior Thyroid Arteries (one of the highest blood flow rates per gram of tissue in the body)",
      
      primaryFunctions: [
        "Basal Metabolic Rate (BMR) Regulation: Secretes Triiodothyronine (T3) and Thyroxine (T4), which stimulate cellular oxygen consumption, ATP production, and protein synthesis throughout the body.",
        "Growth & Neurological Development: Crucial for skeletal growth, protein turnover, and brain development in infants.",
        "Calcium Homeostasis (Calcitonin): Parafollicular (C-cells) secrete Calcitonin, which lowers blood calcium levels by inhibiting osteoclasts in bone and encouraging renal calcium excretion.",
        "Negative Feedback Loop: Regulated by Thyroid-Stimulating Hormone (TSH) from anterior pituitary and TRH from hypothalamus."
      ],
      
      secretions: "Thyroxine (T4), Triiodothyronine (T3), Calcitonin.",
      
      pathologies: [
        "Goiter: Abnormal enlargement of thyroid gland, historically caused by dietary Iodine deficiency.",
        "Hypothyroidism (Hashimoto's Thyroiditis): Low metabolic rate, weight gain, fatigue, cold intolerance, and myxedema.",
        "Hyperthyroidism (Graves' Disease): Autoimmune overstimulation of TSH receptors causing tachycardia, heat intolerance, weight loss, and exophthalmos (bulging eyes).",
        "Cretinism: Congenital untreated hypothyroidism causing severe stunted physical growth and intellectual disability."
      ],
      
      examRelevance: "CSS General Science Paper: Role of Iodine in thyroid hormone synthesis, difference between T3 and T4, Calcitonin vs Parathyroid hormone, and Goiter."
    },
    {
      id: "skin",
      name: "Skin (Integument)",
      latinRoot: "Cutis / Derma-",
      systemId: "integumentary",
      systemName: "Integumentary System",
      icon: "fa-hand-dots",
      color: "#f97316",
      svgCoords: { cx: 120, cy: 220, r: 18 },
      
      averageWeight: "3.5 – 5.0 kg (Accounts for approximately 16% of total adult body weight — the largest organ of the human body!)",
      location: "External protective envelope covering the entire human body (surface area ~1.5 to 2.0 square meters)",
      bloodSupply: "Extensive cutaneous vascular plexuses in the dermis regulating core temperature through vasodilation and vasoconstriction",
      
      primaryFunctions: [
        "Mechanical & Microbial Barrier: Keratinized stratified squamous epithelium blocks entry of pathogens, toxins, and prevents lethal dehydration.",
        "Thermoregulation: Sweating (eccrine sweat glands dissipate heat via evaporative cooling) and dermal vasomotor responses (vasodilation cools, vasoconstriction conserves heat).",
        "Vitamin D Endogenous Synthesis: Ultraviolet B (UVB) light converts 7-dehydrocholesterol in the epidermis into Cholecalciferol (Vitamin D3).",
        "Sensory Reception: Houses specialized mechanoreceptors: Meissner's corpuscles (light touch), Pacinian corpuscles (vibration/pressure), Merkel discs, and free nerve endings (pain/temperature)."
      ],
      
      secretions: "Sweat (water, electrolytes, urea, dermcidin), Sebum (lipid-rich sebaceous secretion that waterproofs skin and hair).",
      
      pathologies: [
        "Melanoma & Non-Melanoma Skin Cancers: Malignant transformation of melanocytes from cumulative UV radiation damage.",
        "Burns (Rule of Nines): First, Second, and Third-degree burns leading to loss of fluid barrier and shock.",
        "Psoriasis: Autoimmune accelerated epidermal cell turnover producing silvery scaly plaques.",
        "Eczema (Atopic Dermatitis): Chronic pruriginous skin barrier disruption."
      ],
      
      examRelevance: "CSS General Science: The three histological layers of skin (Epidermis, Dermis, Hypodermis), thermoregulation mechanisms (sweating, shivering, vasodilation), and Vitamin D synthesis."
    }
  ];

  // 8 Core Physiological Body Systems
  const BODY_SYSTEMS = [
    {
      id: "circulatory",
      name: "Circulatory / Cardiovascular System",
      icon: "fa-heart-pulse",
      color: "#ef4444",
      organsIncluded: ["Heart", "Arteries", "Veins", "Capillaries", "Blood"],
      summary: "Pumps approximately 7,500 liters of blood daily through a 100,000-kilometer closed network of blood vessels to deliver oxygen, nutrients, hormones, and immune cells to every living cell.",
      keyConcepts: [
        { title: "Double Circulation", desc: "Humans possess two separate closed loops: Pulmonary Circulation (Right ventricle → Pulmonary artery → Lungs → Pulmonary veins → Left atrium) and Systemic Circulation (Left ventricle → Aorta → Body tissues → Vena Cava → Right atrium)." },
        { title: "Blood Composition", desc: "Plasma (55% of volume: water, albumin, fibrinogen) and Formed Elements (45%: Red Blood Cells/Erythrocytes, White Blood Cells/Leukocytes, and Platelets/Thrombocytes)." },
        { title: "ABO & Rh Blood Groups", desc: "Discovered by Karl Landsteiner in 1900. O-negative is the Universal Red Cell Donor (no A, B, or Rh antigens); AB-positive is the Universal Red Cell Recipient." },
        { title: "Blood Pressure", desc: "Measured in mmHg. Normal resting BP is 120/80 mmHg (120 Systolic during ventricular contraction, 80 Diastolic during ventricular relaxation)." }
      ],
      examRelevance: "CSS General Science: Functions of blood, heart chambers and valves, double circulation pathway, and blood groups."
    },
    {
      id: "respiratory",
      name: "Respiratory System",
      icon: "fa-lungs",
      color: "#38bdf8",
      organsIncluded: ["Nose", "Pharynx", "Larynx", "Trachea", "Bronchi", "Lungs", "Alveoli", "Diaphragm"],
      summary: "Conducts vital gas exchange by taking in atmospheric oxygen required for cellular ATP production and exhaling carbon dioxide, while maintaining physiological blood acid-base balance.",
      keyConcepts: [
        { title: "Inspiration vs Expiration", desc: "Inspiration is active: Diaphragm contracts and moves downward, external intercostals pull ribs upward/outward, increasing thoracic volume and decreasing pulmonary pressure, drawing air in. Expiration is passive at rest as muscles relax." },
        { title: "Alveoli & Gas Diffusion", desc: "Over 300 million microscopic alveoli with 1-cell thick walls wrapped in capillaries facilitate rapid passive diffusion of gases following partial pressure gradients ($pO_2$ and $pCO_2$)." },
        { title: "Oxygen & CO₂ Transport", desc: "98.5% of oxygen is transported bound to Hemoglobin as Oxyhemoglobin. 70% of carbon dioxide is transported as Bicarbonate ions ($HCO_3^-$), 23% bound to hemoglobin (carbaminohemoglobin), and 7% dissolved in plasma." }
      ],
      examRelevance: "CSS General Science: Gas exchange mechanism, hemoglobin oxygen dissociation, and the role of the diaphragm."
    },
    {
      id: "digestive",
      name: "Digestive System",
      icon: "fa-utensils",
      color: "#f59e0b",
      organsIncluded: ["Mouth", "Esophagus", "Stomach", "Small Intestine", "Large Intestine", "Liver", "Gallbladder", "Pancreas"],
      summary: "Breaks down complex macromolecules (carbohydrates, proteins, fats) into absorbable monomers (glucose, amino acids, fatty acids) to fuel cellular metabolism and build body tissues.",
      keyConcepts: [
        { title: "Peristalsis", desc: "Rhythmic waves of involuntary smooth muscle contractions that propel food boluses down the esophagus and chyme through the gastrointestinal tract." },
        { title: "Chemical Digestion & Enzymes", desc: "Salivary Amylase (starch in mouth), Pepsin (proteins in acidic stomach), Pancreatic Lipase (fats in alkaline duodenum), Trypsin (proteins), and Brush-border disaccharidases (maltase, sucrase, lactase)." },
        { title: "Bile & Emulsification", desc: "Synthesized in liver and stored/concentrated in Gallbladder. Does not contain enzymes; bile salts mechanically emulsify large fat globules into tiny droplets for lipase action." },
        { title: "Villi Absorption", desc: "Microvilli in the small intestine absorb water-soluble nutrients into mesenteric capillaries, while lipids enter the lymphatic lacteals." }
      ],
      examRelevance: "FPSC/CSS exam questions: Digestive enzymes and their sites of action, the role of liver and bile, and small intestine absorption."
    },
    {
      id: "nervous",
      name: "Nervous System",
      icon: "fa-brain",
      color: "#8b5cf6",
      organsIncluded: ["Brain", "Spinal Cord", "Cranial Nerves", "Peripheral Nerves", "Sense Organs"],
      summary: "The master communication, computation, and regulatory network of the body, transmitting electrical action potentials and chemical neurotransmitters at speeds up to 120 meters per second.",
      keyConcepts: [
        { title: "Central vs Peripheral", desc: "Central Nervous System (CNS: Brain & Spinal Cord) integrates sensory inputs and formulates decisions. Peripheral Nervous System (PNS) conducts signals between CNS and limbs/organs." },
        { title: "Autonomic Nervous System (ANS)", desc: "Sympathetic Division ('Fight-or-Flight', increases heart rate, dilates bronchi, inhibits digestion) vs Parasympathetic Division ('Rest-and-Digest', slows heart rate, stimulates digestion)." },
        { title: "The Neuron", desc: "Fundamental unit consisting of Dendrites (receive signals), Soma/Cell Body, Axon (transmits impulse), and Myelin Sheath (Schwann cells, enables rapid saltatory conduction across Nodes of Ranvier)." },
        { title: "Synapse & Neurotransmitters", desc: "The microscopic junction where electrical action potentials trigger calcium influx, releasing neurotransmitters across the synaptic cleft to bind post-synaptic receptors." }
      ],
      examRelevance: "CSS General Science: Neuron structure, reflex arc, sympathetic vs parasympathetic nervous system, and brain divisions."
    },
    {
      id: "excretory",
      name: "Excretory / Urinary System",
      icon: "fa-filter",
      color: "#059669",
      organsIncluded: ["Kidneys", "Ureters", "Urinary Bladder", "Urethra"],
      summary: "Maintains chemical homeostasis by filtering toxic nitrogenous metabolic wastes (urea, uric acid, creatinine) from the blood while strictly regulating water, electrolyte, and acid-base balance.",
      keyConcepts: [
        { title: "Nephron Architecture", desc: "Functional unit composed of Renal Corpuscle (Glomerulus + Bowman's Capsule) and Renal Tubule (Proximal Convoluted Tubule, Loop of Henle, Distal Convoluted Tubule, Collecting Duct)." },
        { title: "Urine Formation", desc: "1) Glomerular Ultrafiltration (hydrostatic pressure pushes water and small solutes into Bowman's capsule); 2) Tubular Reabsorption (99% of water, all glucose and amino acids reclaimed); 3) Tubular Secretion ($H^+, K^+$, drugs excreted)." },
        { title: "Hormonal Regulation", desc: "Antidiuretic Hormone (ADH) from posterior pituitary increases water reabsorption in collecting ducts; Aldosterone from adrenal cortex promotes sodium reabsorption and potassium excretion." }
      ],
      examRelevance: "CSS General Science syllabus: Nephron diagram and function, urine formation stages, osmoregulation, and artificial dialysis."
    },
    {
      id: "endocrine",
      name: "Endocrine System",
      icon: "fa-ribbon",
      color: "#d946ef",
      organsIncluded: ["Pituitary Gland", "Hypothalamus", "Thyroid", "Parathyroid", "Adrenal Glands", "Pancreas", "Gonads"],
      summary: "Ductless glandular system that secretes chemical messengers (hormones) directly into the circulatory bloodstream to orchestrate metabolism, growth, stress response, reproduction, and mood.",
      keyConcepts: [
        { title: "Master Gland: Pituitary", desc: "Pea-sized gland controlled by hypothalamus. Anterior pituitary secretes Growth Hormone (GH), TSH, ACTH, FSH, LH, and Prolactin. Posterior pituitary stores and releases Oxytocin and ADH." },
        { title: "Thyroid & Parathyroid", desc: "Thyroid secretes T3/T4 (metabolic rate) and Calcitonin (lowers blood calcium). Parathyroid glands secrete Parathyroid Hormone (PTH), which raises blood calcium by mobilizing it from bone." },
        { title: "Adrenal Glands", desc: "Adrenal Cortex secretes Cortisol (glucocorticoid for stress/inflammation) and Aldosterone (mineralocorticoid). Adrenal Medulla secretes Epinephrine (Adrenaline) and Norepinephrine for acute fight-or-flight." }
      ],
      examRelevance: "Frequent CSS questions: Pituitary hormones, Insulin vs Glucagon mechanism, Thyroid disorders (Goiter, Cretinism), and Adrenaline action."
    },
    {
      id: "skeletal_muscular",
      name: "Skeletal & Muscular System",
      icon: "fa-bone",
      color: "#64748b",
      organsIncluded: ["206 Bones", "Cartilage", "Ligaments", "Tendons", "Over 600 Muscles"],
      summary: "Provides structural framework, locomotion, mineral storage (99% of body calcium), protection of vital thoracic and cranial organs, and hematopoiesis (blood cell production in red bone marrow).",
      keyConcepts: [
        { title: "206 Adult Bones", desc: "Axial Skeleton (80 bones: Skull, vertebral column, ribs, sternum) and Appendicular Skeleton (126 bones: Pectoral girdle, upper limbs, pelvic girdle, lower limbs). Longest bone is Femur; smallest bone is Stapes in middle ear." },
        { title: "Joints Classification", desc: "Synovial movable joints: Ball-and-socket (shoulder, hip), Hinge (elbow, knee), Pivot (atlas-axis in neck), Saddle (thumb). Cartilaginous joints (intervertebral discs) and Fibrous sutures (skull bones)." },
        { title: "Tendons vs Ligaments", desc: "Tendons connect Muscle to Bone (e.g. Achilles tendon); Ligaments connect Bone to Bone across joints, stabilizing articulation." },
        { title: "Three Muscle Types", desc: "Skeletal (striated, voluntary, multinucleated), Cardiac (striated, involuntary, intercalated discs, heart only), and Smooth (non-striated, involuntary, walls of blood vessels and gut)." }
      ],
      examRelevance: "CSS General Science questions: Classification of bones and joints, differences between muscle types, tendons vs ligaments, and bone marrow function."
    },
    {
      id: "immune",
      name: "Immune & Lymphatic System",
      icon: "fa-shield-virus",
      color: "#10b981",
      organsIncluded: ["Spleen", "Thymus", "Lymph Nodes", "Bone Marrow", "Tonsils", "White Blood Cells"],
      summary: "A multi-layered defense shield distinguishing 'self' from 'non-self' to neutralize viruses, bacteria, parasites, and malignant cancer cells while draining interstitial fluid.",
      keyConcepts: [
        { title: "Innate vs Adaptive Immunity", desc: "Innate Immunity: Immediate, non-specific barrier defense (skin, tears/lysozyme, gastric acid, phagocytic neutrophils, natural killer cells). Adaptive Immunity: Delayed, antigen-specific defense with immunological memory." },
        { title: "T-Cells & B-Cells", desc: "T-lymphocytes mature in Thymus (Helper T-cells $CD4^+$ orchestrate immunity, Cytotoxic T-cells $CD8^+$ destroy infected cells). B-lymphocytes mature in Bone Marrow and differentiate into Plasma cells that secrete Antibodies (Immunoglobulins IgG, IgM, IgA, IgE, IgD)." },
        { title: "Vaccination & Immunization", desc: "Exposes the immune system to weakened (attenuated), inactivated, or mRNA antigens to induce long-lived memory B and T cells without causing full disease." }
      ],
      examRelevance: "CSS General Science topics: Innate vs adaptive immunity, types of antibodies, role of T-cells and B-cells, and how vaccines work."
    }
  ];

  // Human Body World Records & Vital Measurements
  const BODY_VITAL_RECORDS = [
    { label: "Largest Organ", value: "Skin (Integument)", detail: "Covers 1.5–2.0 m² and weighs approx. 3.5–5 kg (16% of body mass)" },
    { label: "Largest Internal Organ", value: "Liver", detail: "Weighs approx. 1.4–1.6 kg, carrying out over 500 vital metabolic functions" },
    { label: "Longest & Strongest Bone", value: "Femur (Thigh bone)", detail: "Supports up to 30 times an adult's body weight during running" },
    { label: "Smallest Bone", value: "Stapes (Stirrup)", detail: "Located in the middle ear, measures only 3 × 2.5 millimeters" },
    { label: "Hardest Substance", value: "Tooth Enamel", detail: "96% mineralized Hydroxyapatite (calcium phosphate crystals)" },
    { label: "Strongest Muscle by Weight", value: "Masseter (Jaw muscle)", detail: "Can exert a biting force of over 90 kg (200 lbs) on the molars" },
    { label: "Fastest Muscle", value: "Orbicularis Oculi", detail: "Blinks the eye in under 100 milliseconds (up to 5 blinks/second)" },
    { label: "Total Adult Bones", value: "206 Bones", detail: "Babies are born with ~270 to 300 soft bones that fuse during growth" },
    { label: "Total Blood Volume", value: "5.0 – 5.5 Liters", detail: "Circulates through the entire body in approximately 60 seconds at rest" },
    { label: "Normal Blood Pressure", value: "120 / 80 mmHg", detail: "120 mmHg Systolic (contraction) / 80 mmHg Diastolic (relaxation)" },
    { label: "Normal Resting Heart Rate", value: "60 – 100 bpm", detail: "Beats ~100,000 times per day (~35 million times per year)" },
    { label: "Normal Body Temperature", value: "37.0°C (98.6°F)", detail: "Tightly regulated by the hypothalamus thermostat within 36.5–37.5°C" }
  ];

  // 12 High-Yield Exam MCQs
  const BODY_QUIZ_MCQS = [
    {
      id: 1,
      systemId: "circulatory",
      question: "Why does the Left Ventricle of the human heart possess a significantly thicker muscular wall (myocardium) than the Right Ventricle?",
      options: [
        "Because it receives deoxygenated blood under high pressure",
        "Because it must pump blood against high systemic vascular resistance throughout the entire body",
        "Because it houses the Sinoatrial (SA) pacemaker node",
        "Because it stores blood longer during ventricular diastole"
      ],
      answer: 1,
      explanation: "The Right Ventricle only pumps blood a short distance to the nearby lungs under low pulmonary pressure (~25/10 mmHg), whereas the Left Ventricle must pump blood through the aorta across the entire systemic circulation against high resistance (~120/80 mmHg)."
    },
    {
      id: 2,
      systemId: "digestive",
      question: "Which organ produces Bile, and where is it stored and concentrated before being released into the duodenum?",
      options: [
        "Produced by Gallbladder; Stored in Liver",
        "Produced by Pancreas; Stored in Stomach",
        "Produced by Liver; Stored in Gallbladder",
        "Produced by Spleen; Stored in Duodenum"
      ],
      answer: 2,
      explanation: "Bile is continuously synthesized by hepatocytes in the Liver and conveyed via hepatic ducts to the Gallbladder, where it is stored and concentrated up to 10-fold until fatty chyme triggers its release."
    },
    {
      id: 3,
      systemId: "excretory",
      question: "In the microscopic nephron of the human kidney, what is the primary function of the Glomerulus encased within Bowman's capsule?",
      options: [
        "Selective reabsorption of glucose and amino acids",
        "Non-selective ultrafiltration of blood plasma under hydrostatic pressure",
        "Secretion of concentrated bile salts",
        "Direct production of antidiuretic hormone"
      ],
      answer: 1,
      explanation: "Glomerular filtration is an ultrafiltration process where high renal blood capillary pressure forces water, ions, glucose, amino acids, and nitrogenous wastes across the fenestrated podocyte membrane into Bowman's capsule, while blood cells and large proteins are retained."
    },
    {
      id: 4,
      systemId: "nervous",
      question: "Which region of the human brain houses the vital autonomic reflex centers that control heart rate, breathing rhythm, blood pressure, and swallowing?",
      options: [
        "Cerebrum",
        "Cerebellum",
        "Medulla Oblongata",
        "Corpus Callosum"
      ],
      answer: 2,
      explanation: "The Medulla Oblongata, situated in the brainstem, contains the cardiac center (heart rate), vasomotor center (blood vessel diameter), and medullary respiratory rhythmicity center (breathing)."
    },
    {
      id: 5,
      systemId: "endocrine",
      question: "Which cells in the Pancreas are responsible for synthesizing and secreting Insulin directly into the bloodstream?",
      options: [
        "Alpha cells of Islets of Langerhans",
        "Beta cells of Islets of Langerhans",
        "Acinar cells",
        "Parietal cells"
      ],
      answer: 1,
      explanation: "Beta cells (accounting for ~70% of the endocrine Islets of Langerhans) synthesize Insulin to lower blood glucose, while Alpha cells produce Glucagon to elevate blood glucose."
    },
    {
      id: 6,
      systemId: "respiratory",
      question: "How is the majority (~70%) of Carbon Dioxide ($CO_2$) transported in human blood from body tissues to the lungs?",
      options: [
        "Dissolved directly as gas bubbles in plasma",
        "Bound to hemoglobin as carbaminohemoglobin",
        "As Bicarbonate ions ($HCO_3^-$) in plasma",
        "Trapped inside white blood cells"
      ],
      answer: 2,
      explanation: "Inside red blood cells, the enzyme Carbonic Anhydrase catalyzes: $CO_2 + H_2O \rightleftharpoons H_2CO_3 \rightleftharpoons H^+ + HCO_3^-$. The bicarbonate ($HCO_3^-$) ions are then pumped into the plasma via the chloride shift."
    },
    {
      id: 7,
      systemId: "skeletal_muscular",
      question: "What is the structural and physiological difference between a Tendon and a Ligament?",
      options: [
        "Tendons connect bone to bone; Ligaments connect muscle to bone",
        "Tendons connect muscle to bone; Ligaments connect bone to bone",
        "Tendons are made of cartilage; Ligaments are made of bone marrow",
        "Tendons are found only in the skull; Ligaments are found only in the legs"
      ],
      answer: 1,
      explanation: "Tendons are tough, inelastic fibrous cords of dense collagen that transmit muscular pull to bone (Muscle to Bone). Ligaments are slightly elastic fibrous bands that bind Bone to Bone across synovial joints."
    },
    {
      id: 8,
      systemId: "digestive",
      question: "What essential substance is secreted by gastric parietal cells that is strictly required for the intestinal absorption of Vitamin B12 in the ileum?",
      options: [
        "Hydrochloric Acid (HCl)",
        "Pepsinogen",
        "Intrinsic Factor",
        "Gastrin"
      ],
      answer: 2,
      explanation: "Intrinsic Factor is a glycoprotein secreted by stomach parietal cells. It binds dietary Vitamin B12, protecting it from digestion until it binds specific cubam receptors in the terminal ileum. Lack of intrinsic factor causes Pernicious Anemia."
    },
    {
      id: 9,
      systemId: "immune",
      question: "Where do T-lymphocytes (T-cells) complete their physiological maturation and immunocompetence training before migrating to lymph nodes?",
      options: [
        "Bone Marrow",
        "Thymus Gland",
        "Spleen",
        "Thyroid Gland"
      ],
      answer: 1,
      explanation: "All lymphocytes originate from hematopoietic stem cells in the red bone marrow. B-cells mature in the bone marrow (hence 'B'), whereas T-cells migrate to the Thymus gland in the chest to mature (hence 'T')."
    },
    {
      id: 10,
      systemId: "circulatory",
      question: "Which blood type is scientifically designated as the 'Universal Donor' for red blood cell transfusions, and why?",
      options: [
        "Type AB-positive, because it has all antigens",
        "Type O-negative, because its erythrocytes lack A, B, and Rh surface antigens",
        "Type A-positive, because it has no antibodies",
        "Type B-negative, because it does not clot"
      ],
      answer: 1,
      explanation: "O-negative red blood cells express neither A nor B antigens, nor the Rh (D) surface factor. Consequently, recipient immune antibodies cannot bind to them, making O-negative the universal emergency packed RBC donor."
    },
    {
      id: 11,
      systemId: "endocrine",
      question: "Which hormone is secreted by the Parafollicular (C-cells) of the thyroid gland to lower elevated blood calcium levels?",
      options: [
        "Thyroxine (T4)",
        "Parathyroid Hormone (PTH)",
        "Calcitonin",
        "Aldosterone"
      ],
      answer: 2,
      explanation: "Calcitonin acts to reduce hypercalcemia by inhibiting bone-resorbing osteoclasts and increasing renal calcium excretion. It acts antagonistically to Parathyroid Hormone (PTH), which increases blood calcium."
    },
    {
      id: 12,
      systemId: "nervous",
      question: "Which part of the human brain acts as the body's primary thermostat, regulating body temperature, hunger, thirst, and linking the nervous and endocrine systems?",
      options: [
        "Thalamus",
        "Hypothalamus",
        "Hippocampus",
        "Pons"
      ],
      answer: 1,
      explanation: "The Hypothalamus maintains homeostatic equilibrium: regulating body temperature via thermoreceptors, controlling hunger and satiety, regulating water balance via thirst/ADH, and governing the pituitary gland via releasing hormones (TRH, CRH, GnRH)."
    }
  ];

  // Clinical Symptom & Organ Riddles ("Diagnose the Organ")
  const ORGAN_DIAGNOSTICS = [
    {
      id: "diag_liver",
      targetOrganId: "liver",
      title: "Clinical Case 1",
      scenario: "A 45-year-old patient presents with yellowing of the sclera (jaundice), abdominal swelling, impaired blood clotting (prolonged prothrombin time), and elevated blood ammonia levels.",
      question: "Which vital metabolic organ is dysfunctional?",
      hint: "Largest internal gland that synthesizes albumin, bile, and runs the urea cycle."
    },
    {
      id: "diag_kidney",
      targetOrganId: "kidneys",
      title: "Clinical Case 2",
      scenario: "A patient develops severe hypertension, peripheral edema in the ankles, protein in the urine (proteinuria), and dangerously elevated serum creatinine and blood urea nitrogen (BUN).",
      question: "Which filtering organs are failing to filter blood plasma?",
      hint: "Retroperitoneal bean-shaped organs containing over 1 million nephrons each."
    },
    {
      id: "diag_pancreas",
      targetOrganId: "pancreas",
      title: "Clinical Case 3",
      scenario: "A 12-year-old child suffers from excessive thirst (polydipsia), frequent urination (polyuria), weight loss, and blood sugar exceeding 350 mg/dL due to an autoimmune destruction of specific islet cells.",
      question: "Which dual endocrine-exocrine gland is affected?",
      hint: "Located behind the stomach; its beta cells produce insulin."
    },
    {
      id: "diag_heart",
      targetOrganId: "heart",
      title: "Clinical Case 4",
      scenario: "A 60-year-old patient experiences sudden crushing substernal chest pain radiating to the left arm and jaw. An ECG reveals ST-elevation resulting from an acute thrombotic occlusion of a coronary artery.",
      question: "Which muscular pumping organ is experiencing ischemic myocardial infarction?",
      hint: "Four-chambered muscular pump located in the mediastinum."
    },
    {
      id: "diag_lungs",
      targetOrganId: "lungs",
      title: "Clinical Case 5",
      scenario: "A long-time smoker complains of severe shortness of breath upon exertion. A chest CT scan reveals widespread breakdown of alveolar septa, loss of elastic recoil, and air trapping.",
      question: "Which respiratory organs have suffered irreversible alveolar damage?",
      hint: "Paired spongy thoracic organs where external respiration and gas exchange occur."
    }
  ];

  const HUMAN_BODY_API = {
    getAllOrgans: function () {
      return JSON.parse(JSON.stringify(ORGANS));
    },
    getOrganById: function (id) {
      return ORGANS.find(o => o.id === id) || null;
    },
    getAllSystems: function () {
      return JSON.parse(JSON.stringify(BODY_SYSTEMS));
    },
    getSystemById: function (id) {
      return BODY_SYSTEMS.find(s => s.id === id) || null;
    },
    getRecords: function () {
      return JSON.parse(JSON.stringify(BODY_VITAL_RECORDS));
    },
    getQuizMCQs: function (systemFilter) {
      const all = JSON.parse(JSON.stringify(BODY_QUIZ_MCQS));
      if (!systemFilter || systemFilter === 'all') return all;
      return all.filter(q => q.systemId === systemFilter);
    },
    getDiagnostics: function () {
      return JSON.parse(JSON.stringify(ORGAN_DIAGNOSTICS));
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = HUMAN_BODY_API;
  }
  if (typeof window !== 'undefined') {
    window.HUMAN_BODY_DATA = HUMAN_BODY_API;
  }

})(typeof window !== 'undefined' ? window : this);