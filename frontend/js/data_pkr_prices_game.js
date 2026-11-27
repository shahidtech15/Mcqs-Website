/**
 * Guess the Price & Salary in Pakistani Rupees (PKR) — Game Dataset
 * 60 Realistic 2025–2026 Benchmarks across 6 Categories:
 *  1. Salaries & Stipends (Civil Servants, Judges, MNAs, Cricketers, Global Stars)
 *  2. Umrah & Hajj Packages (Economy, Star, Ramadan & Government Hajj)
 *  3. FIFA World Cup, Olympics & Cricket Tickets
 *  4. Everyday Pakistan, Gold, Solar, Bikes & Cars
 *  5. Tech Gadgets, Passports, PTA Taxes & Official Exam Fees
 *  6. Global Mega-Items, Fighter Jets & Nobel Prizes in PKR
 * (USD conversions benchmarked around ~Rs. 278–280 / USD; SAR ~Rs. 74 / SAR)
 */
window.PKR_PRICES_GAME_DATA = [
  // ═══════════════════════════════════════════════════════════════════════════
  // 1. SALARIES & STIPENDS (12 ITEMS)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "sal_css_bs17",
    title: "Freshly Inducted CSS / PMS Officer (BS-17) — Monthly Take-Home Salary",
    category: "salaries",
    categoryLabel: "Salaries & Stipends",
    icon: "fa-user-tie",
    emoji: "🏛️",
    pricePkr: 135000,
    unit: "per month (starting gross/take-home avg)",
    hint: "Includes BS-17 basic pay, house rent, conveyance, medical, and ad-hoc relief allowances before specialized cadre executive allowances.",
    breakdown: "Standard newly appointed BS-17 Assistant Commissioner / Section Officer starts around Rs. 1.20–1.55 Lakh/month (rising higher in FBR/Police/Secretariat with executive allowances)."
  },
  {
    id: "sal_mna_pak",
    title: "Member of the National Assembly (MNA) of Pakistan — Revised Monthly Salary",
    category: "salaries",
    categoryLabel: "Salaries & Stipends",
    icon: "fa-landmark",
    emoji: "🗳️",
    pricePkr: 519000,
    unit: "per month (2025 revised parliamentary package)",
    hint: "Raised in early 2025 from ~Rs. 1.88 Lakh to match a Federal Secretary's pay scale.",
    breakdown: "In January/February 2025, Parliament approved revising MNAs' and Senators' monthly salary and allowances to Rs. 5,19,000 per month (on par with a BPS-22 Federal Secretary)."
  },
  {
    id: "sal_cjp",
    title: "Chief Justice of Pakistan — Monthly Salary & Judicial Allowance",
    category: "salaries",
    categoryLabel: "Salaries & Stipends",
    icon: "fa-scale-balanced",
    emoji: "⚖️",
    pricePkr: 2390000,
    unit: "per month (basic salary + revised judicial/house allowances)",
    hint: "Includes ~Rs. 1.22–1.52 million basic pay plus revised superior judicial and house-rent allowances.",
    breakdown: "Following 2024–2025 Presidential Orders revising superior judiciary allowances, the CJP's total monthly pay & allowances package stands around Rs. 23.9 Lakh/month."
  },
  {
    id: "sal_pcb_cat_a",
    title: "Pakistan Cricket Team 'Category A' Star (Babar Azam / Rizwan) — PCB Monthly Retainer",
    category: "salaries",
    categoryLabel: "Salaries & Stipends",
    icon: "fa-baseball-bat-ball",
    emoji: "🏏",
    pricePkr: 4500000,
    unit: "per month (PCB central contract + ICC revenue share, excl. match fees)",
    hint: "Multi-million rupee monthly PCB retainer before adding match fees and PSL/brand endorsements.",
    breakdown: "Top PCB Category-A centrally contracted players earn roughly Rs. 45 Lakh/month (plus match fees for Tests, ODIs, and T20Is)."
  },
  {
    id: "sal_psl_platinum",
    title: "PSL Top 'Platinum Category' Overseas/Local Player — Full Season Contract",
    category: "salaries",
    categoryLabel: "Salaries & Stipends",
    icon: "fa-trophy",
    emoji: "🏆",
    pricePkr: 47500000,
    unit: "per PSL tournament (~$170,000 USD cap)",
    hint: "Roughly $170,000 USD for a 5-week Pakistan Super League season.",
    breakdown: "Top Platinum-tier picks in the Pakistan Super League earn around $170,000–$200,000 (~Rs. 4.75 Crore) for the month-long tournament."
  },
  {
    id: "sal_house_job",
    title: "Fresh MBBS Doctor (Government Hospital House Officer in Punjab/KP) — Monthly Stipend",
    category: "salaries",
    categoryLabel: "Salaries & Stipends",
    icon: "fa-user-doctor",
    emoji: "🩺",
    pricePkr: 73000,
    unit: "per month",
    hint: "Paid during the mandatory 1-year hospital House Job after MBBS graduation.",
    breakdown: "Public teaching hospital House Officers in Pakistan typically receive a monthly stipend between Rs. 68,000 and Rs. 78,000 (~Rs. 73,000 average)."
  },
  {
    id: "sal_sr_swe",
    title: "Senior Full-Stack / AI Software Engineer in Lahore, Karachi or Islamabad — Monthly Pay",
    category: "salaries",
    categoryLabel: "Salaries & Stipends",
    icon: "fa-laptop-code",
    emoji: "💻",
    pricePkr: 450000,
    unit: "per month (5+ years experience at top export-oriented tech house)",
    hint: "Export-oriented Pakistani software houses link senior tech pay closely to USD revenue.",
    breakdown: "Experienced Senior Software & AI Engineers at top Pakistani IT exporters earn Rs. 3.5 Lakh to Rs. 6.0 Lakh/month (~Rs. 4.5 Lakh average)."
  },
  {
    id: "sal_pia_captain",
    title: "Senior Commercial Airline Captain (Boeing 777 / Airbus A320 in Pakistan) — Monthly Pay",
    category: "salaries",
    categoryLabel: "Salaries & Stipends",
    icon: "fa-plane",
    emoji: "✈️",
    pricePkr: 1650000,
    unit: "per month (including flying-hour allowances)",
    hint: "Wide-body and experienced narrow-body Airline Captains earn well over 1.2 million PKR monthly.",
    breakdown: "Senior Pakistani commercial airline captains earn approximately Rs. 14 Lakh to Rs. 20 Lakh per month including flight-hour allowances."
  },
  {
    id: "sal_min_wage",
    title: "Official Government Minimum Monthly Wage for Unskilled Workers in Pakistan (FY 2024–26)",
    category: "salaries",
    categoryLabel: "Salaries & Stipends",
    icon: "fa-helmet-safety",
    emoji: "👷",
    pricePkr: 37000,
    unit: "per month",
    hint: "Raised in the FY 2024–25 Federal and Provincial budgets from Rs. 32,000.",
    breakdown: "The statutory minimum monthly wage for unskilled workers across Pakistan was set at Rs. 37,000 per month."
  },
  {
    id: "sal_us_pres",
    title: "President of the United States — Official Monthly Salary (Converted to PKR)",
    category: "salaries",
    categoryLabel: "Salaries & Stipends",
    icon: "fa-flag-usa",
    emoji: "🇺🇸",
    pricePkr: 9300000,
    unit: "per month ($400,000/year ÷ 12 at ~Rs. 279/USD)",
    hint: "Fixed by US law at $400,000 per year (~$33,333 per month) since 2001.",
    breakdown: "$33,333 monthly statutory salary equals roughly Rs. 93 Lakh/month in Pakistani Rupees (excluding the $50,000 annual expense account)."
  },
  {
    id: "sal_swiss_phd",
    title: "Fully Funded PhD Researcher Monthly Salary at ETH Zurich (Switzerland) in PKR",
    category: "salaries",
    categoryLabel: "Salaries & Stipends",
    icon: "fa-graduation-cap",
    emoji: "🇨🇭",
    pricePkr: 1350000,
    unit: "per month (~CHF 4,200/month converted to PKR)",
    hint: "Swiss doctoral candidates are salaried university employees earning ~CHF 47,000–52,000/year.",
    breakdown: "At ~Rs. 320 per Swiss Franc, a standard SNF/ETH Zurich PhD salary (~CHF 4,200/month) converts to roughly Rs. 13.5 Lakh per month."
  },
  {
    id: "sal_ronaldo_day",
    title: "Cristiano Ronaldo's ONE-DAY Base Salary at Al-Nassr (Converted to PKR!)",
    category: "salaries",
    categoryLabel: "Salaries & Stipends",
    icon: "fa-futbol",
    emoji: "⚽",
    pricePkr: 168000000,
    unit: "per SINGLE DAY (~€200M/year ÷ 365)",
    hint: "His annual Al-Nassr contract is ~€200 million (~Rs. 61+ Arab per year)—divide that by 365 days!",
    breakdown: "Earning roughly €548,000 (~$600,000) every single day, Cristiano Ronaldo makes ~Rs. 16.8 Crore PER DAY in Pakistani Rupees!"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 2. UMRAH & HAJJ PACKAGES IN PKR (8 ITEMS)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "umrah_econ_15d",
    title: "15-Day Economy Umrah Package from Pakistan (Quad Sharing, Visa, Return Air Ticket & Hotels)",
    category: "umrah_hajj",
    categoryLabel: "Umrah & Hajj Packages",
    icon: "fa-kaaba",
    emoji: "🕋",
    pricePkr: 245000,
    unit: "per person (off-peak 15-day package)",
    hint: "Covers Umrah e-visa, economy return flight from Karachi/Lahore/Islamabad, transport, and shuttle/walkable economy hotels.",
    breakdown: "Airfare (~Rs. 1.35–1.50 Lakh) + Umrah Visa & Insurance (~Rs. 42,000) + 14 nights quad-sharing hotel & transport (~Rs. 55,000) ≈ Rs. 2.45 Lakh."
  },
  {
    id: "umrah_21d_3star",
    title: "21-Day 3-Star Family Umrah Package (Double/Triple Room, Near Haram Shuttle-Free)",
    category: "umrah_hajj",
    categoryLabel: "Umrah & Hajj Packages",
    icon: "fa-kaaba",
    emoji: "🕌",
    pricePkr: 365000,
    unit: "per person",
    hint: "Close walking distance hotels (400–600m) in Makkah & Markazia Madinah plus direct Saudi/PIA flight.",
    breakdown: "Direct flight + closer Markazia Madinah and Ibrahim Khalil Road Makkah 3-star hotels bring a 21-day package to ~Rs. 3.5–3.8 Lakh."
  },
  {
    id: "umrah_5star_7d",
    title: "7-Day Luxury 5-Star Umrah Package (Makkah Clock Tower / Front-Row Haram View + Haramain Train)",
    category: "umrah_hajj",
    categoryLabel: "Umrah & Hajj Packages",
    icon: "fa-hotel",
    emoji: "🌟",
    pricePkr: 620000,
    unit: "per person (double occupancy, breakfast included)",
    hint: "Includes Fairmont/Swissôtel Makkah & 5-star Oberoi/Pullman Madinah right at the Haram courtyard.",
    breakdown: "Five-star Haram-view suites, direct flights, private GMC/sedan transfers, and Haramain High-Speed Rail tickets average ~Rs. 5.8–6.6 Lakh for a week."
  },
  {
    id: "umrah_ramadan_ashra",
    title: "Ramadan Last 10 Days (3rd Ashra + Eid in Makkah) Umrah Package from Pakistan",
    category: "umrah_hajj",
    categoryLabel: "Umrah & Hajj Packages",
    icon: "fa-moon",
    emoji: "🌙",
    pricePkr: 540000,
    unit: "per person (standard hotel during peak Laylat-ul-Qadr nights)",
    hint: "Makkah hotel rates surge 3× to 4× during the final ten nights of Ramadan.",
    breakdown: "Peak Ramadan airfares and Last-Ashra Makkah hotel tariffs push even standard 12–15 day Last Ashra Umrah packages to ~Rs. 5.0–5.8 Lakh."
  },
  {
    id: "umrah_visa_only",
    title: "Standalone Saudi Umrah E-Visa + Mandatory Medical Insurance & Transport Fee (PKR)",
    category: "umrah_hajj",
    categoryLabel: "Umrah & Hajj Packages",
    icon: "fa-passport",
    emoji: "🛂",
    pricePkr: 44000,
    unit: "per applicant (visa + mandatory ground/insurance package)",
    hint: "Around SAR 550–600 equivalent processed through authorized Pakistani travel agents.",
    breakdown: "Saudi Umrah e-visa issuance with mandatory health insurance and Nusuk ground transport authorization costs roughly Rs. 42,000–46,000."
  },
  {
    id: "hajj_govt_long",
    title: "Official Pakistan Government Hajj Scheme (38–42 Days Long Package) — Total Cost",
    category: "umrah_hajj",
    categoryLabel: "Umrah & Hajj Packages",
    icon: "fa-kaaba",
    emoji: "🕋",
    pricePkr: 1075000,
    unit: "per pilgrim (Ministry of Religious Affairs official package)",
    hint: "Collected in three installments under Pakistan's official Government Hajj Policy (around 10.5 to 11.0 Lakh PKR).",
    breakdown: "Pakistan's Ministry of Religious Affairs set the official Government Scheme Hajj package at approximately Rs. 10.75 Lakh (varying slightly between Southern & Northern regions)."
  },
  {
    id: "hajj_govt_short",
    title: "Official Pakistan Government 'Short Hajj' Package (20–25 Days) — Total Cost",
    category: "umrah_hajj",
    categoryLabel: "Umrah & Hajj Packages",
    icon: "fa-plane-departure",
    emoji: "🕋",
    pricePkr: 1150000,
    unit: "per pilgrim",
    hint: "Designed for working professionals needing a shorter 3-week stay with closer hotel arrangements.",
    breakdown: "The official 20–25 day Short Government Hajj package from Pakistan is priced around Rs. 11.50 Lakh per pilgrim."
  },
  {
    id: "hajj_vip_private",
    title: "Private VIP Category-A Luxury Hajj Package (5-Star Aziziyah/Haram Hotels & Upgraded Mina Camp)",
    category: "umrah_hajj",
    categoryLabel: "Umrah & Hajj Packages",
    icon: "fa-gem",
    emoji: "✨",
    pricePkr: 2850000,
    unit: "per pilgrim (14–18 days VIP Maktab A/B)",
    hint: "Private Hajj Group Organizers (HGOs) offering Zone-A Mina tents near Jamarat and 5-star Haram towers.",
    breakdown: "Premium private VIP Hajj packages with upgraded Mina Maktab near Jamarat and 5-star Clock Tower hotels range from Rs. 25 Lakh to Rs. 35+ Lakh."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3. FIFA WORLD CUP, CRICKET & GLOBAL EVENT TICKETS IN PKR (10 ITEMS)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "fifa_group_cat3",
    title: "FIFA World Cup 2026 — Official Group Stage Match Ticket (Category 3 Standard Seat)",
    category: "tickets_events",
    categoryLabel: "FIFA & Event Tickets",
    icon: "fa-futbol",
    emoji: "⚽",
    pricePkr: 29000,
    unit: "per ticket (~$105 USD official face value)",
    hint: "Standard upper-tier international fan ticket (excluding dynamic resale markups) for a Group Stage match in USA/Canada/Mexico.",
    breakdown: "Standard Category-3 international Group Stage World Cup tickets average ~$95–$115 USD face value (~Rs. 29,000)."
  },
  {
    id: "fifa_group_cat1",
    title: "FIFA World Cup 2026 — Prime Lower-Bowl Sideline Ticket (Category 1 Group Stage)",
    category: "tickets_events",
    categoryLabel: "FIFA & Event Tickets",
    icon: "fa-ticket",
    emoji: "🏟️",
    pricePkr: 90000,
    unit: "per ticket (~$325 USD face value)",
    hint: "Best regular stadium seats along the touchline for a World Cup group match.",
    breakdown: "Category-1 prime sideline Group Stage seats at modern North American NFL-sized venues average ~$300–$350 USD (~Rs. 90,000)."
  },
  {
    id: "fifa_semifinal_cat1",
    title: "FIFA World Cup 2026 Semi-Final (Dallas / Atlanta) — Official Category 1 Ticket",
    category: "tickets_events",
    categoryLabel: "FIFA & Event Tickets",
    icon: "fa-trophy",
    emoji: "🥅",
    pricePkr: 310000,
    unit: "per ticket (~$1,100 USD official face value)",
    hint: "Over $1,000 USD at official face value for a top-tier seat in a World Cup Semi-Final.",
    breakdown: "Official FIFA Category-1 Semi-Final face-value tickets sit around $1,000–$1,200 USD (~Rs. 3.10 Lakh)."
  },
  {
    id: "fifa_final_cat1",
    title: "FIFA World Cup 2026 FINAL (MetLife Stadium, New York/NJ) — Official Category 1 Ticket",
    category: "tickets_events",
    categoryLabel: "FIFA & Event Tickets",
    icon: "fa-crown",
    emoji: "🏆",
    pricePkr: 560000,
    unit: "per ticket (~$2,000 USD official FIFA face value)",
    hint: "Qatar 2022 Final Cat-1 was $1,607; 2026 MetLife Final Cat-1 face value is ~$2,000 USD (resale goes 5× higher!).",
    breakdown: "At ~$2,000 USD official face value, a single Category-1 ticket to the FIFA World Cup Final costs ~Rs. 5.60 Lakh (secondary resale often crosses Rs. 20+ Lakh!)."
  },
  {
    id: "fifa_vip_hospitality",
    title: "FIFA World Cup Official 'Venue Series / Final Round' VIP Hospitality Suite Package",
    category: "tickets_events",
    categoryLabel: "FIFA & Event Tickets",
    icon: "fa-champagne-glasses",
    emoji: "🥂",
    pricePkr: 2950000,
    unit: "per person (~$10,500 USD On Location hospitality package)",
    hint: "Includes guaranteed lounge seating, gourmet dining, VIP stadium entry, and multi-match/knockout hospitality.",
    breakdown: "Official FIFA corporate/VIP hospitality packages start around $1,900 for single matches and average ~$10,000+ (~Rs. 29.5 Lakh) for multi-match or Final-round lounges."
  },
  {
    id: "ct25_gen_pak",
    title: "ICC Champions Trophy 2025 (Lahore / Karachi / Rawalpindi) — General Enclosure Ticket",
    category: "tickets_events",
    categoryLabel: "FIFA & Event Tickets",
    icon: "fa-baseball-bat-ball",
    emoji: "🏏",
    pricePkr: 1500,
    unit: "per match ticket (PCB official base tier)",
    hint: "PCB deliberately priced general stands affordably between Rs. 1,000 and Rs. 2,000 so students and families could fill stadiums.",
    breakdown: "Official PCB General Enclosure tickets for ICC Champions Trophy 2025 group matches in Pakistan started at Rs. 1,000–2,000 (~Rs. 1,500 avg)."
  },
  {
    id: "ct25_vip_gallery",
    title: "ICC Champions Trophy 2025 in Pakistan — VVIP Hospitality Gallery Pass",
    category: "tickets_events",
    categoryLabel: "FIFA & Event Tickets",
    icon: "fa-star",
    emoji: "🎟️",
    pricePkr: 25000,
    unit: "per seat (Gaddafi Stadium / National Stadium VVIP Gallery)",
    hint: "Top-tier PCB stadium gallery box ticket for flagship group/semi-final fixtures in Pakistan.",
    breakdown: "VVIP Gallery hospitality seats at renovated Gaddafi Stadium Lahore and National Bank Stadium Karachi ranged from Rs. 18,000 to Rs. 25,000+."
  },
  {
    id: "pak_ind_cricket",
    title: "Pakistan vs India ICC World Cup / Champions Trophy — Prime Pavilion Ticket",
    category: "tickets_events",
    categoryLabel: "FIFA & Event Tickets",
    icon: "fa-fire",
    emoji: "🔥",
    pricePkr: 140000,
    unit: "per ticket (~AED 1,800–2,000 / ~$500 USD platinum tier)",
    hint: "Cricket's biggest rivalry sells out within minutes; official platinum pavilion seats cost ~$500 USD.",
    breakdown: "Official Platinum/Pavilion tickets for India vs Pakistan ICC clashes in Dubai/New York were priced around $400–$600 USD (~Rs. 1.40 Lakh), with resale much higher."
  },
  {
    id: "wimbledon_final",
    title: "Wimbledon Men's Singles Final — Centre Court Official Debenture/Prime Ticket (PKR)",
    category: "tickets_events",
    categoryLabel: "FIFA & Event Tickets",
    icon: "fa-table-tennis-paddle-ball",
    emoji: "🎾",
    pricePkr: 105000,
    unit: "per ballot face-value ticket (~£295 GBP)",
    hint: "Official Wimbledon public ballot face value for Centre Court Finals is roughly £275–£315 GBP.",
    breakdown: "At ~Rs. 355 per British Pound, an official public-ballot Wimbledon Final ticket (£295) costs ~Rs. 1.05 Lakh (while Debenture seats trade above Rs. 25 Lakh!)."
  },
  {
    id: "f1_jeddah_paddock",
    title: "Formula 1 Saudi Arabian / Abu Dhabi Grand Prix — 3-Day Main Grandstand Ticket (PKR)",
    category: "tickets_events",
    categoryLabel: "FIFA & Event Tickets",
    icon: "fa-flag-checkered",
    emoji: "🏎️",
    pricePkr: 195000,
    unit: "3-day race weekend pass (~$700 USD)",
    hint: "Covers Practice, Qualifying, Sprint/Support races, Main Grandstand start-finish view, and concerts.",
    breakdown: "A 3-day Main Grandstand ticket at Jeddah Corniche or Yas Marina Circuit averages ~$650–$750 USD (~Rs. 1.95 Lakh)."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 4. EVERYDAY PAKISTAN, GOLD, SOLAR, BIKES & CARS (12 ITEMS)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "gold_tola_pak",
    title: "1 Tola (11.664 grams) of 24-Karat Pure Gold in Pakistan Bullion Market",
    category: "everyday_auto",
    categoryLabel: "Gold, Cars & Everyday",
    icon: "fa-coins",
    emoji: "🪙",
    pricePkr: 285000,
    unit: "per 1 Tola (24K)",
    hint: "Surged alongside global gold crossing $2,650–$2,750/oz in late 2024–2026.",
    breakdown: "24K Gold per Tola in Karachi Sarafa Market traded around Rs. 2.75 Lakh to Rs. 3.00 Lakh (~Rs. 2,85,000 benchmark)."
  },
  {
    id: "honda_cd70",
    title: "Brand-New Atlas Honda CD 70 Motorcycle (Ex-Factory Showroom Price)",
    category: "everyday_auto",
    categoryLabel: "Gold, Cars & Everyday",
    icon: "fa-motorcycle",
    emoji: "🏍️",
    pricePkr: 157900,
    unit: "ex-factory Pakistan",
    hint: "Pakistan's highest-selling commuter bike—once Rs. 63,500 a decade ago, now well above 1.5 Lakh.",
    breakdown: "Atlas Honda's official ex-factory retail price for the CD 70 stands at Rs. 1,57,900."
  },
  {
    id: "honda_cg125",
    title: "Brand-New Atlas Honda CG 125 Motorcycle (Standard Kick-Start)",
    category: "everyday_auto",
    categoryLabel: "Gold, Cars & Everyday",
    icon: "fa-motorcycle",
    emoji: "🏍️",
    pricePkr: 234900,
    unit: "ex-factory Pakistan",
    hint: "Costs roughly Rs. 77,000 more than the CD 70.",
    breakdown: "The iconic Honda CG 125 standard model retails ex-factory at Rs. 2,34,900 (while the Self-Start Gold Edition is ~Rs. 2.82–2.92 Lakh)."
  },
  {
    id: "suzuki_alto_vxl",
    title: "Brand-New Pak Suzuki Alto VXL AGS (660cc Automatic Hatchback)",
    category: "everyday_auto",
    categoryLabel: "Gold, Cars & Everyday",
    icon: "fa-car-side",
    emoji: "🚗",
    pricePkr: 3045000,
    unit: "ex-factory price",
    hint: "Pakistan's best-selling 660cc automatic city hatchback—right around the 30 Lakh mark.",
    breakdown: "Pak Suzuki's Alto VXL AGS ex-factory price sits at approximately Rs. 30.45 Lakh (plus filer/non-filer withholding tax & registration)."
  },
  {
    id: "corolla_grande",
    title: "Brand-New Toyota Corolla Altis Grande X CVT-i 1.8 (Indus Motor Company)",
    category: "everyday_auto",
    categoryLabel: "Gold, Cars & Everyday",
    icon: "fa-car",
    emoji: "🚘",
    pricePkr: 7549000,
    unit: "ex-factory price",
    hint: "Flagship 1.8L locally assembled sedan in Pakistan—around three-quarters of a Crore.",
    breakdown: "Toyota Corolla Altis 1.8 Grande X CVT-i retails around Rs. 75.5 Lakh ex-factory in Pakistan."
  },
  {
    id: "haval_h6_hev",
    title: "Brand-New Haval H6 HEV (Hybrid Crossover SUV — Sazgar Pakistan)",
    category: "everyday_auto",
    categoryLabel: "Gold, Cars & Everyday",
    icon: "fa-truck-monster",
    emoji: "🚙",
    pricePkr: 11866000,
    unit: "ex-factory price",
    hint: "Popular hybrid SUV in Pakistan priced just under 1.2 Crore PKR.",
    breakdown: "Locally assembled Haval H6 HEV retails around Rs. 1.18 Crore ex-factory."
  },
  {
    id: "fortuner_legender",
    title: "Brand-New Toyota Fortuner Legender (2.8L Diesel 4x4 — Pakistan)",
    category: "everyday_auto",
    categoryLabel: "Gold, Cars & Everyday",
    icon: "fa-truck-pickup",
    emoji: "🚙",
    pricePkr: 18999000,
    unit: "ex-factory price",
    hint: "Nearly 1.9 Crore PKR before registration and luxury taxes.",
    breakdown: "Toyota Fortuner Legender 4x4 Diesel carries an ex-factory tag of ~Rs. 1.90 Crore in Pakistan."
  },
  {
    id: "solar_10kw",
    title: "Complete 10 kW On-Grid / Hybrid Solar System in Pakistan (A-Grade Panels + Inverter + Structure)",
    category: "everyday_auto",
    categoryLabel: "Gold, Cars & Everyday",
    icon: "fa-solar-panel",
    emoji: "☀️",
    pricePkr: 1150000,
    unit: "turnkey installed system (with net metering)",
    hint: "Thanks to plunging Chinese Tier-1 solar panel prices (~Rs. 28–32/watt), 10 kW systems became much cheaper in 2024–2025!",
    breakdown: "A complete 10 kW on-grid net-metered solar installation (18× N-type Bifacial panels, 10kW inverter, wiring, structure & green meter) costs ~Rs. 10.5–12.5 Lakh."
  },
  {
    id: "inverter_ac_15ton",
    title: "1.5-Ton DC Inverter Split Air Conditioner (Gree / Haier / Dawlance — Heat & Cool)",
    category: "everyday_auto",
    categoryLabel: "Gold, Cars & Everyday",
    icon: "fa-wind",
    emoji: "❄️",
    pricePkr: 165000,
    unit: "retail appliance price",
    hint: "Standard 18,000 BTU T3/DC Inverter Heat & Cool split AC in Pakistani electronics markets.",
    breakdown: "1.5-Ton DC Inverter ACs from major brands in Pakistan retail between Rs. 1.48 Lakh and Rs. 1.85 Lakh (~Rs. 1.65 Lakh avg)."
  },
  {
    id: "petrol_liter",
    title: "1 Liter of High-Speed / Super Motor Spirit (Petrol) in Pakistan",
    category: "everyday_auto",
    categoryLabel: "Gold, Cars & Everyday",
    icon: "fa-gas-pump",
    emoji: "⛽",
    pricePkr: 255,
    unit: "per liter (OGRA fortnightly benchmark)",
    hint: "Includes ~Rs. 60–70/liter Petroleum Development Levy (PDL).",
    breakdown: "OGRA-notified retail petrol prices across 2024–2026 have hovered around Rs. 247 to Rs. 265 per liter (~Rs. 255 benchmark)."
  },
  {
    id: "atta_20kg",
    title: "20-Kilogram Bag of Wheat Flour (Atta) in Pakistani Retail Markets",
    category: "everyday_auto",
    categoryLabel: "Gold, Cars & Everyday",
    icon: "fa-wheat-awn",
    emoji: "🌾",
    pricePkr: 1850,
    unit: "per 20-kg bag",
    hint: "Dropped substantially from its 2023 peak (~Rs. 2,800) after bumper 2024 wheat harvests.",
    breakdown: "According to Pakistan Bureau of Statistics (PBS) SPI data, a 20-kg flour bag averaged Rs. 1,700–2,000 across major cities."
  },
  {
    id: "cement_bag",
    title: "50-Kilogram Bag of Ordinary Portland Cement in Pakistan",
    category: "everyday_auto",
    categoryLabel: "Gold, Cars & Everyday",
    icon: "fa-trowel-bricks",
    emoji: "🧱",
    pricePkr: 1420,
    unit: "per 50-kg bag (including Federal Excise Duty)",
    hint: "Includes Rs. 4,000/ton (Rs. 200/bag) Federal Excise Duty imposed in FY25.",
    breakdown: "PBS weekly SPI tracks a 50-kg bag of Grade-53 cement around Rs. 1,380–1,460 across northern and southern Pakistan."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 5. TECH GADGETS, PASSPORTS & OFFICIAL EXAM FEES (10 ITEMS)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "iphone_16_pm_pta",
    title: "Apple iPhone 16 Pro Max (256GB) — Official Mercantile PTA-Approved Price in Pakistan",
    category: "tech_gadgets",
    categoryLabel: "Tech, Passports & Fees",
    icon: "fa-mobile-screen-button",
    emoji: "📱",
    pricePkr: 525000,
    unit: "official PTA-approved box-pack",
    hint: "Includes custom duties, sales tax, and roughly Rs. 1.4–1.7 Lakh in PTA DIRBS tax!",
    breakdown: "Non-PTA grey units cost ~Rs. 3.55 Lakh, while official PTA-duty-paid Mercantile units retail around Rs. 5.15–5.35 Lakh."
  },
  {
    id: "pta_tax_flagship",
    title: "FBR / PTA Mobile Registration Tax Alone (on CNIC) for a Flagship iPhone Pro Max",
    category: "tech_gadgets",
    categoryLabel: "Tech, Passports & Fees",
    icon: "fa-sim-card",
    emoji: "📲",
    pricePkr: 176000,
    unit: "PTA DIRBS tax on CNIC",
    hint: "On Passport it is ~Rs. 1.48 Lakh; on CNIC it is ~Rs. 1.76 Lakh just to unlock local SIMs!",
    breakdown: "Registering a >$500 flagship smartphone under FBR's DIRBS system on CNIC costs roughly Rs. 1.75–1.78 Lakh in taxes alone."
  },
  {
    id: "macbook_air_m3",
    title: "Apple MacBook Air 13-inch (M3 Chip, 16GB RAM, 256GB SSD) in Pakistan",
    category: "tech_gadgets",
    categoryLabel: "Tech, Passports & Fees",
    icon: "fa-laptop",
    emoji: "💻",
    pricePkr: 335000,
    unit: "brand-new retail Pakistan",
    hint: "$1,099 USD international retail + shipping & local distributor margin.",
    breakdown: "A brand-new M3 MacBook Air retails in Pakistani tech plazas (Hafeez Center / Techno City) for around Rs. 3.25–3.45 Lakh."
  },
  {
    id: "ps5_slim",
    title: "Sony PlayStation 5 (PS5 Slim Disc Edition) Console in Pakistan",
    category: "tech_gadgets",
    categoryLabel: "Tech, Passports & Fees",
    icon: "fa-gamepad",
    emoji: "🎮",
    pricePkr: 168000,
    unit: "console with DualSense controller",
    hint: "Around $500 USD overseas plus import duties in Pakistani gaming stores.",
    breakdown: "The PS5 Slim 1TB Disc Edition sells across Pakistani gaming retailers for approximately Rs. 1.62–1.75 Lakh."
  },
  {
    id: "pak_passport_10yr_urgent",
    title: "Pakistani 10-Year Machine Readable Passport (36 Pages — URGENT Category Fee)",
    category: "tech_gadgets",
    categoryLabel: "Tech, Passports & Fees",
    icon: "fa-passport",
    emoji: "🛂",
    pricePkr: 11200,
    unit: "official DGIP urgent fee",
    hint: "10-year Normal 36-page fee is Rs. 6,700; Urgent 10-year 36-page fee was revised in 2024.",
    breakdown: "Directorate General of Immigration & Passports (DGIP) charges Rs. 11,200 for a 36-page 10-year Urgent MRP (and Rs. 27,000 for Fast-Track)."
  },
  {
    id: "ielts_fee_pak",
    title: "IELTS Academic / General Training Official Test Fee in Pakistan (British Council / IDP)",
    category: "tech_gadgets",
    categoryLabel: "Tech, Passports & Fees",
    icon: "fa-language",
    emoji: "📝",
    pricePkr: 62000,
    unit: "per exam registration",
    hint: "Indexed to GBP/AUD exchange rates plus provincial GST on services.",
    breakdown: "Registering for computer-delivered or paper-based IELTS with British Council or IDP in Pakistan costs around Rs. 58,000–66,000 (~Rs. 62,000 avg)."
  },
  {
    id: "css_written_fee",
    title: "FPSC CSS Competitive Examination — Written Exam Application Treasury Fee (after MPT)",
    category: "tech_gadgets",
    categoryLabel: "Tech, Passports & Fees",
    icon: "fa-file-pen",
    emoji: "✒️",
    pricePkr: 2200,
    unit: "FPSC State Bank challan fee (MPT is Rs. 250; Written is Rs. 2,200)",
    hint: "Kept intentionally affordable by FPSC so candidates from every background can sit the 1,200-mark written exam.",
    breakdown: "FPSC charges Rs. 250 for the CSS MPT screening test and Rs. 2,200 as the treasury challan fee for the main CSS Written Examination."
  },
  {
    id: "nadra_smart_cnic_exec",
    title: "NADRA Smart CNIC Renewal / Modification — 'Executive' Fast-Track Fee",
    category: "tech_gadgets",
    categoryLabel: "Tech, Passports & Fees",
    icon: "fa-id-card",
    emoji: "🪪",
    pricePkr: 2500,
    unit: "NADRA Executive category (Normal is Rs. 750; Urgent is Rs. 1,500)",
    hint: "Delivers the chip-based Smart National Identity Card within ~7 days.",
    breakdown: "NADRA's domestic Smart CNIC fee tiers are Rs. 750 (Normal), Rs. 1,500 (Urgent), and Rs. 2,500 (Executive)."
  },
  {
    id: "driving_license_intl",
    title: "5-Year Domestic Car/Jeep Driving License Fee in Punjab (Revised 2024 Tariff)",
    category: "tech_gadgets",
    categoryLabel: "Tech, Passports & Fees",
    icon: "fa-id-badge",
    emoji: "🪪",
    pricePkr: 9000,
    unit: "for 5 years (Rs. 1,800 per year + courier)",
    hint: "Punjab revised learner and regular license fees in 2024 to Rs. 1,800 per year of validity.",
    breakdown: "Under Punjab's revised traffic license schedule, a Car/Motorcycle regular license costs Rs. 1,800 per year (Rs. 9,000 for a full 5-year card)."
  },
  {
    id: "chatgpt_plus_pkr",
    title: "ChatGPT Plus / Claude Pro Monthly Subscription ($20/month + Pakistani Bank Taxes)",
    category: "tech_gadgets",
    categoryLabel: "Tech, Passports & Fees",
    icon: "fa-robot",
    emoji: "🤖",
    pricePkr: 6400,
    unit: "per month billed to a Pakistani debit/credit card (Filer)",
    hint: "$20 USD (~Rs. 5,580) plus international card FX markup, provincial sales tax on digital services, and WHT.",
    breakdown: "$20 USD plus ~12–15% bank cross-border card taxes/FX charges comes out to roughly Rs. 6,300–6,600/month for filers."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 6. GLOBAL MEGA-ITEMS, JETS, PRIZES & TUITION IN PKR (8 ITEMS)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "nobel_prize_pkr",
    title: "Full Nobel Prize Cash Award (11 Million Swedish Kronor) Converted to PKR",
    category: "mega_benchmarks",
    categoryLabel: "Mega-Prizes, Jets & Global",
    icon: "fa-medal",
    emoji: "🏅",
    pricePkr: 290000000,
    unit: "per Nobel Prize category (~$1.05 Million USD / 11M SEK)",
    hint: "Roughly $1.05 Million USD—nearly 29 Crore Pakistani Rupees!",
    breakdown: "The Nobel Foundation awards 11 million SEK (~$1.04M USD), which equals approximately Rs. 29 Crore per full Nobel Prize."
  },
  {
    id: "arshad_govt_rewards",
    title: "Federal + Punjab Government Cash Rewards Announced for Arshad Nadeem (Paris 2024 Gold)",
    category: "mega_benchmarks",
    categoryLabel: "Mega-Prizes, Jets & Global",
    icon: "fa-award",
    emoji: "🥇",
    pricePkr: 250000000,
    unit: "combined Federal (Rs. 15 Cr) + Punjab (Rs. 10 Cr) cash awards",
    hint: "PM Shehbaz Sharif awarded Rs. 15 Crore and CM Maryam Nawaz presented a Rs. 10 Crore cheque (plus civic/private awards!).",
    breakdown: "Combined Federal Government (Rs. 150M) and Punjab Government (Rs. 100M) official cash awards alone totaled Rs. 25 Crore (Rs. 250,000,000)."
  },
  {
    id: "harvard_tuition_yr",
    title: "1 Year Total Cost of Attendance (Tuition + Room + Board) at Harvard / MIT in PKR",
    category: "mega_benchmarks",
    categoryLabel: "Mega-Prizes, Jets & Global",
    icon: "fa-building-columns",
    emoji: "🎓",
    pricePkr: 24000000,
    unit: "per academic year (~$86,000 USD sticker price before financial aid)",
    hint: "Around $85,000–$87,000 USD per year (though need-blind financial aid covers 100% for low/middle-income admits!).",
    breakdown: "At ~$86,000 USD/year sticker cost, one year at an Ivy League university equals ~Rs. 2.40 Crore (Fulbright & need-blind aid cover this fully for selected Pakistani scholars)."
  },
  {
    id: "uk_student_visa_ihs",
    title: "UK Student Visa Fee + 1-Year Immigration Health Surcharge (IHS) in PKR",
    category: "mega_benchmarks",
    categoryLabel: "Mega-Prizes, Jets & Global",
    icon: "fa-plane-arrival",
    emoji: "🇬🇧",
    pricePkr: 450000,
    unit: "£490 visa fee + £776/yr IHS health surcharge",
    hint: "Totals ~£1,266 GBP before university tuition deposit.",
    breakdown: "At ~Rs. 355/GBP, the £490 UK Student Visa fee plus £776 annual NHS Health Surcharge costs roughly Rs. 4.50 Lakh."
  },
  {
    id: "everest_expedition",
    title: "Full Guided Mount Everest Summit Expedition (including $15,000 Nepal Climbing Permit) in PKR",
    category: "mega_benchmarks",
    categoryLabel: "Mega-Prizes, Jets & Global",
    icon: "fa-mountain",
    emoji: "🏔️",
    pricePkr: 15500000,
    unit: "per climber (~$55,000 USD standard guided expedition)",
    hint: "Nepal raised the solo peak royalty permit from $11,000 to $15,000; oxygen, Sherpa support, and base camp add ~$40,000.",
    breakdown: "A standard commercial guided Mount Everest expedition ($50,000–$65,000 USD) costs roughly Rs. 1.55 Crore."
  },
  {
    id: "rolls_royce_phantom",
    title: "Rolls-Royce Phantom Luxury Sedan (International Base Price Before Import Duties) in PKR",
    category: "mega_benchmarks",
    categoryLabel: "Mega-Prizes, Jets & Global",
    icon: "fa-crown",
    emoji: "🚘",
    pricePkr: 142000000,
    unit: "~$510,000 USD base MSRP (exceeds Rs. 45+ Crore if imported with duties!)",
    hint: "Half a million US dollars just at factory MSRP in the UK/US.",
    breakdown: "At ~$510,000 USD overseas MSRP, a Rolls-Royce Phantom starts at ~Rs. 14.2 Crore before customs duties (which more than triple landed cost)."
  },
  {
    id: "jf17_block3",
    title: "1 JF-17 Thunder Block-III Multi-Role Fighter Jet (Estimated Flyaway Unit Cost in PKR)",
    category: "mega_benchmarks",
    categoryLabel: "Mega-Prizes, Jets & Global",
    icon: "fa-jet-fighter",
    emoji: "🛩️",
    pricePkr: 9000000000,
    unit: "per aircraft (~$32 Million USD flyaway unit cost)",
    hint: "Roughly $30–$35 Million USD per jet—making it one of the world's most cost-effective 4.5-gen AESA fighters!",
    breakdown: "At ~$32 million USD flyaway unit price, a single JF-17 Block-III fighter costs roughly Rs. 9 Arab (Rs. 9,000,000,000)—less than half the cost of Western equivalents."
  },
  {
    id: "spacex_falcon9",
    title: "1 Commercial SpaceX Falcon 9 Rocket Launch (Standard Commercial Price in PKR)",
    category: "mega_benchmarks",
    categoryLabel: "Mega-Prizes, Jets & Global",
    icon: "fa-shuttle-space",
    emoji: "🚀",
    pricePkr: 19500000000,
    unit: "per dedicated orbital launch (~$69.75 Million USD)",
    hint: "Just under $70 Million USD (~Rs. 19.5 Arab) thanks to reusable first-stage boosters.",
    breakdown: "SpaceX lists a dedicated Falcon 9 orbital launch at ~$69.75 million USD, equivalent to approximately Rs. 19.5 Arab in Pakistani Rupees."
  }
];
