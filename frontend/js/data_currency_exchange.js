/**
 * Currency & Exchange Rate Explorer Database
 * Comprehensive database covering 30+ major world currencies, 10 premier central banks,
 * 8 exchange-rate regimes & theoretical concepts, monetary history timeline, and 20 exam MCQs.
 * Sources: IMF COFER, BIS, World Bank, Central Banks.
 */

const CURRENCY_EXCHANGE_DATA = {
  "metadata": {
    "title": "Currency & Exchange Rate Explorer Database",
    "version": "2026.1",
    "totalCurrencies": 30,
    "totalCentralBanks": 10,
    "totalConcepts": 8,
    "totalTimelineMilestones": 8,
    "totalQuizQuestions": 20,
    "sources": "IMF COFER, Bank for International Settlements (BIS Triennial Survey), World Bank, Central Bank Official Bulletins."
  },
  "currencies": [
    {
      "code": "USD",
      "name": "United States Dollar",
      "symbol": "$",
      "minorUnit": "Cent (1/100)",
      "country": "United States",
      "flag": "🇺🇸",
      "centralBank": "Federal Reserve (The Fed)",
      "centralBankId": "fed",
      "regime": "Free Floating",
      "rateToUsd": 1,
      "nickname": "Greenback, Buck",
      "yearIntroduced": "1792 (Coinage Act)",
      "shareGlobalFxReserves": "58.4%",
      "swiftShare": "47.8%",
      "trivia": "The world's undisputed primary reserve currency and invoicing currency for global commodities, oil, and sovereign debt."
    },
    {
      "code": "EUR",
      "name": "Euro",
      "symbol": "€",
      "minorUnit": "Cent (1/100)",
      "country": "Eurozone (20 EU Member States)",
      "flag": "🇪🇺",
      "centralBank": "European Central Bank (ECB)",
      "centralBankId": "ecb",
      "regime": "Free Floating",
      "rateToUsd": 1.08,
      "nickname": "Single Currency",
      "yearIntroduced": "1999 (Accounting), 2002 (Physical)",
      "shareGlobalFxReserves": "19.8%",
      "swiftShare": "22.6%",
      "trivia": "Second largest reserve currency globally; shared by over 350 million Europeans across 20 countries."
    },
    {
      "code": "GBP",
      "name": "British Pound Sterling",
      "symbol": "£",
      "minorUnit": "Penny (1/100)",
      "country": "United Kingdom",
      "flag": "🇬🇧",
      "centralBank": "Bank of England (BoE)",
      "centralBankId": "boe",
      "regime": "Free Floating",
      "rateToUsd": 1.29,
      "nickname": "Cable, Quid, Sterling",
      "yearIntroduced": "c. 775 AD (King Offa)",
      "shareGlobalFxReserves": "4.9%",
      "swiftShare": "6.8%",
      "trivia": "The world's oldest currency still in continuous use, dating back over 1,200 years to Anglo-Saxon times."
    },
    {
      "code": "JPY",
      "name": "Japanese Yen",
      "symbol": "¥",
      "minorUnit": "Sen (historical)",
      "country": "Japan",
      "flag": "🇯🇵",
      "centralBank": "Bank of Japan (BoJ)",
      "centralBankId": "boj",
      "regime": "Free Floating",
      "rateToUsd": 0.0065,
      "nickname": "En",
      "yearIntroduced": "1871 (Meiji Restoration)",
      "shareGlobalFxReserves": "5.5%",
      "swiftShare": "3.9%",
      "trivia": "Classic global safe-haven currency and foundation of the multi-decade global 'Yen Carry Trade'."
    },
    {
      "code": "CNY",
      "name": "Chinese Yuan (Renminbi)",
      "symbol": "¥",
      "minorUnit": "Fen (1/100), Jiao (1/10)",
      "country": "China",
      "flag": "🇨🇳",
      "centralBank": "People's Bank of China (PBoC)",
      "centralBankId": "pboc",
      "regime": "Managed Float (Crawling Peg against basket)",
      "rateToUsd": 0.138,
      "nickname": "Redback, Renminbi ('People's Currency')",
      "yearIntroduced": "1948",
      "shareGlobalFxReserves": "2.3%",
      "swiftShare": "4.7%",
      "trivia": "Dual exchange rate structure: onshore CNY (regulated by PBoC daily fix) and offshore CNH (freely traded in Hong Kong)."
    },
    {
      "code": "PKR",
      "name": "Pakistani Rupee",
      "symbol": "Rs.",
      "minorUnit": "Paisa (historical)",
      "country": "Pakistan",
      "flag": "🇵🇰",
      "centralBank": "State Bank of Pakistan (SBP)",
      "centralBankId": "sbp",
      "regime": "Market-Determined Floating (Managed)",
      "rateToUsd": 0.0036,
      "nickname": "Rupee",
      "yearIntroduced": "1948 (Post-Partition)",
      "shareGlobalFxReserves": "<0.01%",
      "swiftShare": "<0.1%",
      "trivia": "Initially replaced the British Indian rupee with 'Government of Pakistan' stamps; managed under SBP Act 1956."
    },
    {
      "code": "INR",
      "name": "Indian Rupee",
      "symbol": "₹",
      "minorUnit": "Paisa (1/100)",
      "country": "India",
      "flag": "🇮🇳",
      "centralBank": "Reserve Bank of India (RBI)",
      "centralBankId": "rbi",
      "regime": "Managed Float",
      "rateToUsd": 0.0118,
      "nickname": "Rupee",
      "yearIntroduced": "1540 (Sher Shah Suri 'Rupiya')",
      "shareGlobalFxReserves": "0.2%",
      "swiftShare": "0.2%",
      "trivia": "Derived from Sanskrit 'Rupya' meaning wrought silver; current symbol ₹ designed by D. Udaya Kumar adopted in 2010."
    },
    {
      "code": "CHF",
      "name": "Swiss Franc",
      "symbol": "CHF",
      "minorUnit": "Rappen / Centime (1/100)",
      "country": "Switzerland & Liechtenstein",
      "flag": "🇨🇭",
      "centralBank": "Swiss National Bank (SNB)",
      "centralBankId": "snb",
      "regime": "Free Floating",
      "rateToUsd": 1.13,
      "nickname": "Swissie",
      "yearIntroduced": "1850",
      "shareGlobalFxReserves": "0.2%",
      "swiftShare": "1.0%",
      "trivia": "Premier global geopolitical safe-haven asset, historically backed by Swiss banking neutrality and gold reserves."
    },
    {
      "code": "CAD",
      "name": "Canadian Dollar",
      "symbol": "C$",
      "minorUnit": "Cent (1/100)",
      "country": "Canada",
      "flag": "🇨🇦",
      "centralBank": "Bank of Canada (BoC)",
      "centralBankId": "boc",
      "regime": "Free Floating",
      "rateToUsd": 0.71,
      "nickname": "Loonie (named after the loon bird on the coin)",
      "yearIntroduced": "1858",
      "shareGlobalFxReserves": "2.4%",
      "swiftShare": "1.8%",
      "trivia": "Major commodity currency closely correlated with global crude oil prices."
    },
    {
      "code": "AUD",
      "name": "Australian Dollar",
      "symbol": "A$",
      "minorUnit": "Cent (1/100)",
      "country": "Australia",
      "flag": "🇦🇺",
      "centralBank": "Reserve Bank of Australia (RBA)",
      "centralBankId": "rba",
      "regime": "Free Floating",
      "rateToUsd": 0.65,
      "nickname": "Aussie",
      "yearIntroduced": "1966 (Decimilasation replacing Pound)",
      "shareGlobalFxReserves": "2.1%",
      "swiftShare": "1.6%",
      "trivia": "World's 5th most traded currency, heavily tied to iron ore and coal export demand from China."
    },
    {
      "code": "SAR",
      "name": "Saudi Riyal",
      "symbol": "SR / ﷼",
      "minorUnit": "Halala (1/100)",
      "country": "Saudi Arabia",
      "flag": "🇸🇦",
      "centralBank": "Saudi Central Bank (SAMA)",
      "centralBankId": "sama",
      "regime": "Conventional Peg to USD (3.75 SAR = 1 USD)",
      "rateToUsd": 0.2667,
      "nickname": "Riyal",
      "yearIntroduced": "1925",
      "shareGlobalFxReserves": "0.1%",
      "swiftShare": "0.4%",
      "trivia": "Hard-pegged to the US Dollar at exactly 3.75 since June 1986, backed by massive hydrocarbon revenues."
    },
    {
      "code": "AED",
      "name": "United Arab Emirates Dirham",
      "symbol": "AED / د.إ",
      "minorUnit": "Fils (1/100)",
      "country": "United Arab Emirates",
      "flag": "🇦🇪",
      "centralBank": "Central Bank of the UAE (CBUAE)",
      "centralBankId": "cbuae",
      "regime": "Conventional Peg to USD (3.6725 AED = 1 USD)",
      "rateToUsd": 0.2723,
      "nickname": "Dirham",
      "yearIntroduced": "1973",
      "shareGlobalFxReserves": "0.1%",
      "swiftShare": "0.4%",
      "trivia": "Pegged to the US Dollar at 3.6725 since 1997, providing absolute exchange rate stability for global trade and finance in Dubai."
    },
    {
      "code": "TRY",
      "name": "Turkish Lira",
      "symbol": "₺",
      "minorUnit": "Kurus (1/100)",
      "country": "Turkey",
      "flag": "🇹🇷",
      "centralBank": "Central Bank of the Republic of Turkey (TCMB)",
      "centralBankId": "tcmb",
      "regime": "Free Floating",
      "rateToUsd": 0.029,
      "nickname": "Lira",
      "yearIntroduced": "1844 (Ottoman Lira), 2005 (New Lira)",
      "shareGlobalFxReserves": "<0.05%",
      "swiftShare": "0.2%",
      "trivia": "Dropped six zeros in 2005 redenomination; recently underwent transition from un-orthodox rate cuts to 50% orthodox policy rate."
    },
    {
      "code": "RUB",
      "name": "Russian Ruble",
      "symbol": "₽",
      "minorUnit": "Kopek (1/100)",
      "country": "Russia",
      "flag": "🇷🇺",
      "centralBank": "Bank of Russia",
      "centralBankId": "cbr",
      "regime": "Managed Float (Capital controls applied)",
      "rateToUsd": 0.01,
      "nickname": "Derevyanny (Wooden)",
      "yearIntroduced": "13th Century / 1998 (Post-Soviet)",
      "shareGlobalFxReserves": "<0.1%",
      "swiftShare": "<0.1%",
      "trivia": "Shifted away from SWIFT and Western currencies following 2022 sanctions; now predominantly settled in Yuan and Rubles."
    },
    {
      "code": "BRL",
      "name": "Brazilian Real",
      "symbol": "R$",
      "minorUnit": "Centavo (1/100)",
      "country": "Brazil",
      "flag": "🇧🇷",
      "centralBank": "Central Bank of Brazil (BCB)",
      "centralBankId": "bcb",
      "regime": "Free Floating",
      "rateToUsd": 0.173,
      "nickname": "Real",
      "yearIntroduced": "1994 (Plano Real)",
      "shareGlobalFxReserves": "0.1%",
      "swiftShare": "0.3%",
      "trivia": "Introduced under the 'Plano Real' to conquer hyperinflation that reached over 2,000% annually in the early 1990s."
    },
    {
      "code": "ZAR",
      "name": "South African Rand",
      "symbol": "R",
      "minorUnit": "Cent (1/100)",
      "country": "South Africa",
      "flag": "🇿🇦",
      "centralBank": "South African Reserve Bank (SARB)",
      "centralBankId": "sarb",
      "regime": "Free Floating",
      "rateToUsd": 0.055,
      "nickname": "Rand (from Witwatersrand gold reef)",
      "yearIntroduced": "1961 (Republic establishment)",
      "shareGlobalFxReserves": "0.1%",
      "swiftShare": "0.3%",
      "trivia": "Also legal tender in the Common Monetary Area (Namibia, Lesotho, and Eswatini)."
    },
    {
      "code": "BDT",
      "name": "Bangladeshi Taka",
      "symbol": "৳",
      "minorUnit": "Poisha (historical)",
      "country": "Bangladesh",
      "flag": "🇧🇩",
      "centralBank": "Bangladesh Bank",
      "centralBankId": "bb",
      "regime": "Crawling Peg",
      "rateToUsd": 0.0084,
      "nickname": "Taka",
      "yearIntroduced": "1972",
      "shareGlobalFxReserves": "<0.01%",
      "swiftShare": "<0.05%",
      "trivia": "Transitioned from a de facto fixed band to an IMF-backed crawling peg band in 2024 to curb FX reserve drainage."
    },
    {
      "code": "SGD",
      "name": "Singapore Dollar",
      "symbol": "S$",
      "minorUnit": "Cent (1/100)",
      "country": "Singapore & Brunei",
      "flag": "🇸🇬",
      "centralBank": "Monetary Authority of Singapore (MAS)",
      "centralBankId": "mas",
      "regime": "Exchange Rate Centered Monetary Policy (S$NEER Band)",
      "rateToUsd": 0.75,
      "nickname": "Sing",
      "yearIntroduced": "1967",
      "shareGlobalFxReserves": "0.3%",
      "swiftShare": "1.2%",
      "trivia": "Unique central bank: MAS uses the trade-weighted exchange rate (S$NEER) rather than domestic interest rates as its primary policy tool!"
    },
    {
      "code": "MYR",
      "name": "Malaysian Ringgit",
      "symbol": "RM",
      "minorUnit": "Sen (1/100)",
      "country": "Malaysia",
      "flag": "🇲🇾",
      "centralBank": "Bank Negara Malaysia (BNM)",
      "centralBankId": "bnm",
      "regime": "Free Floating",
      "rateToUsd": 0.224,
      "nickname": "Ringgit ('Jagged' in Malay)",
      "yearIntroduced": "1967",
      "shareGlobalFxReserves": "0.1%",
      "swiftShare": "0.2%",
      "trivia": "Famously pegged to the USD at 3.80 during the 1997-98 Asian Financial Crisis by Mahathir Mohamad before de-pegging in 2005."
    },
    {
      "code": "KRW",
      "name": "South Korean Won",
      "symbol": "₩",
      "minorUnit": "Jeon (historical)",
      "country": "South Korea",
      "flag": "🇰🇷",
      "centralBank": "Bank of Korea (BoK)",
      "centralBankId": "bok",
      "regime": "Free Floating",
      "rateToUsd": 0.00072,
      "nickname": "Won",
      "yearIntroduced": "1962",
      "shareGlobalFxReserves": "0.2%",
      "swiftShare": "0.3%",
      "trivia": "Highly liquid Asian currency closely tracking global semiconductor tech demand and Chinese export cycles."
    },
    {
      "code": "QAR",
      "name": "Qatari Riyal",
      "symbol": "QR / ر.ق",
      "minorUnit": "Dirham (1/100)",
      "country": "Qatar",
      "flag": "🇶🇦",
      "centralBank": "Qatar Central Bank (QCB)",
      "centralBankId": "qcb",
      "regime": "Conventional Peg to USD (3.64 QAR = 1 USD)",
      "rateToUsd": 0.2747,
      "nickname": "Riyal",
      "yearIntroduced": "1973",
      "shareGlobalFxReserves": "0.05%",
      "swiftShare": "0.1%",
      "trivia": "Pegged to the USD at 3.64 by Royal Decree in 2001, anchored by the world's most lucrative LNG gas export revenues."
    },
    {
      "code": "KWD",
      "name": "Kuwaiti Dinar",
      "symbol": "KD / د.ك",
      "minorUnit": "Fils (1/1000)",
      "country": "Kuwait",
      "flag": "🇰🇼",
      "centralBank": "Central Bank of Kuwait (CBK)",
      "centralBankId": "cbk",
      "regime": "Pegged to an Undisclosed Currency Basket",
      "rateToUsd": 3.25,
      "nickname": "Dinar",
      "yearIntroduced": "1960",
      "shareGlobalFxReserves": "0.05%",
      "swiftShare": "0.1%",
      "trivia": "The world's highest-valued currency unit (1 KWD = $3.25+ USD), divided into 1,000 fils and pegged to a trade-weighted basket."
    },
    {
      "code": "OMR",
      "name": "Omani Rial",
      "symbol": "RO / ر.ع.",
      "minorUnit": "Baisa (1/1000)",
      "country": "Oman",
      "flag": "🇴🇲",
      "centralBank": "Central Bank of Oman (CBO)",
      "centralBankId": "cbo",
      "regime": "Conventional Peg to USD (1 OMR = 2.60 USD)",
      "rateToUsd": 2.6,
      "nickname": "Rial",
      "yearIntroduced": "1970",
      "shareGlobalFxReserves": "0.02%",
      "swiftShare": "0.05%",
      "trivia": "Second most valuable currency unit globally, divided into 1,000 baisa and pegged to the US Dollar."
    },
    {
      "code": "NOK",
      "name": "Norwegian Krone",
      "symbol": "kr",
      "minorUnit": "Ore (historical)",
      "country": "Norway",
      "flag": "🇳🇴",
      "centralBank": "Norges Bank",
      "centralBankId": "norges",
      "regime": "Free Floating",
      "rateToUsd": 0.091,
      "nickname": "Krone ('Crown')",
      "yearIntroduced": "1875 (Scandinavian Monetary Union)",
      "shareGlobalFxReserves": "0.1%",
      "swiftShare": "0.5%",
      "trivia": "Nordic oil currency; government sterilizes hydrocarbon export proceeds into the $1.7T Government Pension Fund Global."
    },
    {
      "code": "SEK",
      "name": "Swedish Krona",
      "symbol": "kr",
      "minorUnit": "Ore (historical)",
      "country": "Sweden",
      "flag": "🇸🇪",
      "centralBank": "Sveriges Riksbank (World's Oldest Central Bank)",
      "centralBankId": "riksbank",
      "regime": "Free Floating",
      "rateToUsd": 0.092,
      "nickname": "Krona",
      "yearIntroduced": "1873",
      "shareGlobalFxReserves": "0.1%",
      "swiftShare": "0.6%",
      "trivia": "Issued by the world's oldest central bank (founded 1668); Sweden is currently one of the nearest fully cashless societies."
    },
    {
      "code": "ARS",
      "name": "Argentine Peso",
      "symbol": "$",
      "minorUnit": "Centavo (1/100)",
      "country": "Argentina",
      "flag": "🇦🇷",
      "centralBank": "Central Bank of the Argentine Republic (BCRA)",
      "centralBankId": "bcra",
      "regime": "Crawling Peg / Multiple FX Restrictions (Blue Dollar)",
      "rateToUsd": 0.001,
      "nickname": "Peso",
      "yearIntroduced": "1992 (Convertibility Plan)",
      "shareGlobalFxReserves": "<0.01%",
      "swiftShare": "<0.05%",
      "trivia": "Historically experienced several currency overhauls; currently undergoing major stabilization under President Javier Milei."
    },
    {
      "code": "EGP",
      "name": "Egyptian Pound",
      "symbol": "E£ / ج.م",
      "minorUnit": "Piastre (1/100)",
      "country": "Egypt",
      "flag": "🇪🇬",
      "centralBank": "Central Bank of Egypt (CBE)",
      "centralBankId": "cbe",
      "regime": "Free Floating (Devalued in March 2024)",
      "rateToUsd": 0.02,
      "nickname": "Geneih",
      "yearIntroduced": "1834 (Khedival Decree)",
      "shareGlobalFxReserves": "<0.01%",
      "swiftShare": "<0.05%",
      "trivia": "Underwent a major 60% devaluation in March 2024 to float the pound and unlock an expanded $8B IMF facility."
    },
    {
      "code": "NGN",
      "name": "Nigerian Naira",
      "symbol": "₦",
      "minorUnit": "Kobo (1/100)",
      "country": "Nigeria",
      "flag": "🇳🇬",
      "centralBank": "Central Bank of Nigeria (CBN)",
      "centralBankId": "cbn",
      "regime": "Managed Float (Unified market 2023)",
      "rateToUsd": 0.0006,
      "nickname": "Naira",
      "yearIntroduced": "1973 (Replaced Nigerian Pound)",
      "shareGlobalFxReserves": "<0.01%",
      "swiftShare": "<0.05%",
      "trivia": "Africa's most populous currency; unified official and parallel exchange windows in June 2023."
    },
    {
      "code": "IDR",
      "name": "Indonesian Rupiah",
      "symbol": "Rp",
      "minorUnit": "Sen (historical)",
      "country": "Indonesia",
      "flag": "🇮🇩",
      "centralBank": "Bank Indonesia (BI)",
      "centralBankId": "bi",
      "regime": "Free Floating (Intervention Band)",
      "rateToUsd": 0.000063,
      "nickname": "Perak ('Silver')",
      "yearIntroduced": "1946",
      "shareGlobalFxReserves": "0.05%",
      "swiftShare": "0.1%",
      "trivia": "Large nominal numbers (e.g. 100,000 Rupiah note); currently exploring long-planned redenomination projects."
    },
    {
      "code": "THB",
      "name": "Thai Baht",
      "symbol": "฿",
      "minorUnit": "Satang (1/100)",
      "country": "Thailand",
      "flag": "🇹🇭",
      "centralBank": "Bank of Thailand (BoT)",
      "centralBankId": "bot",
      "regime": "Managed Float",
      "rateToUsd": 0.029,
      "nickname": "Baht",
      "yearIntroduced": "1897 (Modern Decimal System)",
      "shareGlobalFxReserves": "0.1%",
      "swiftShare": "0.4%",
      "trivia": "The collapse of the Baht peg on July 2, 1997 famously triggered the catastrophic 1997 Asian Financial Crisis (Tom Yam Kung crisis)."
    }
  ],
  "centralBanks": [
    {
      "id": "fed",
      "name": "Federal Reserve System (The Fed)",
      "country": "United States",
      "flag": "🇺🇸",
      "headquarters": "Eccles Building, Washington, D.C.",
      "establishedYear": 1913,
      "chairperson": "Jerome Powell",
      "currentPolicyRate": "4.75% – 5.00%",
      "mandateType": "Dual Mandate",
      "statutoryMandate": "Maximum sustainable employment, stable prices (2% inflation target), and moderate long-term interest rates.",
      "fxGoldReserves": "8,133 tonnes of Gold (World's largest sovereign gold holding)",
      "keyInstruments": "Federal Funds Rate, Quantitative Easing / Tightening (QE/QT), Open Market Operations (FOMC), Reverse Repo Facility.",
      "historicalMilestone": "Established under Federal Reserve Act signed by Woodrow Wilson following the Panic of 1907."
    },
    {
      "id": "ecb",
      "name": "European Central Bank (ECB)",
      "country": "Eurozone (20 Member States)",
      "flag": "🇪🇺",
      "headquarters": "Frankfurt am Main, Germany",
      "establishedYear": 1998,
      "chairperson": "Christine Lagarde",
      "currentPolicyRate": "3.25% (Deposit Facility Rate)",
      "mandateType": "Hierarchical / Single Mandate",
      "statutoryMandate": "Primary objective: Maintain price stability (2% medium-term inflation target). Without prejudice to price stability, support the general economic policies in the EU.",
      "fxGoldReserves": "Over 500 tonnes Gold + National Central Bank holdings (e.g. Bundesbank 3,350t, Banca d'Italia 2,450t).",
      "keyInstruments": "Main Refinancing Rate, Marginal Lending Facility, Deposit Facility Rate, Targeted Longer-Term Refinancing Operations (TLTRO).",
      "historicalMilestone": "Created under Treaty of Amsterdam; replaced the European Monetary Institute to manage the Euro from 1999."
    },
    {
      "id": "boe",
      "name": "Bank of England (The Old Lady of Threadneedle Street)",
      "country": "United Kingdom",
      "flag": "🇬🇧",
      "headquarters": "Threadneedle Street, London",
      "establishedYear": 1694,
      "chairperson": "Andrew Bailey",
      "currentPolicyRate": "4.75%",
      "mandateType": "Inflation Targeting",
      "statutoryMandate": "Maintain price stability (2% CPI target set by Chancellor of the Exchequer) and support the economic policy of the government.",
      "fxGoldReserves": "Stores over 400,000 gold bars in subterranean vaults (second largest gold custodian in the world).",
      "keyInstruments": "Bank Rate (set by 9-member Monetary Policy Committee - MPC), Asset Purchase Facility.",
      "historicalMilestone": "Founded in 1694 to act as the English Government's banker and fund the war against France; nationalized in 1946; granted operational independence in 1997."
    },
    {
      "id": "boj",
      "name": "Bank of Japan (Nippon Ginko)",
      "country": "Japan",
      "flag": "🇯🇵",
      "headquarters": "Nihonbashi, Chuo, Tokyo",
      "establishedYear": 1882,
      "chairperson": "Kazuo Ueda",
      "currentPolicyRate": "0.25%",
      "mandateType": "Price Stability & Financial System Stability",
      "statutoryMandate": "Issuing bank notes and carrying out currency and monetary control aimed at achieving price stability (2% target).",
      "fxGoldReserves": "846 tonnes of Gold; massive $1.23 Trillion FX Reserves portfolio.",
      "keyInstruments": "Uncollateralized Overnight Call Rate, Yield Curve Control (YCC - abandoned 2024), ETF/J-REIT purchases.",
      "historicalMilestone": "Pioneered Quantitative Easing (QE) in 2001 and negative interest rates (-0.1%) for 8 years until historical March 2024 rate hike."
    },
    {
      "id": "pboc",
      "name": "People's Bank of China (PBoC)",
      "country": "China",
      "flag": "🇨🇳",
      "headquarters": "Xicheng District, Beijing",
      "establishedYear": 1948,
      "chairperson": "Pan Gongsheng",
      "currentPolicyRate": "3.10% (1-Year Loan Prime Rate)",
      "mandateType": "Multi-Objective Government Arm",
      "statutoryMandate": "Maintain the stability of the value of the currency and thereby promote economic growth, under the guidance of the State Council.",
      "fxGoldReserves": "2,260 tonnes of Gold; world's largest FX reserves portfolio ($3.25 Trillion).",
      "keyInstruments": "Reserve Requirement Ratio (RRR), Medium-term Lending Facility (MLF), Loan Prime Rate (LPR), Daily Yuan Fixing Rate.",
      "historicalMilestone": "Created in 1948; launched the e-CNY (Digital Yuan), leading the world in sovereign Central Bank Digital Currency (CBDC) rollouts."
    },
    {
      "id": "sbp",
      "name": "State Bank of Pakistan (SBP)",
      "country": "Pakistan",
      "flag": "🇵🇰",
      "headquarters": "I.I. Chundrigar Road, Karachi",
      "establishedYear": 1948,
      "chairperson": "Jameel Ahmad",
      "currentPolicyRate": "15.00%",
      "mandateType": "Price Stability & Economic Growth",
      "statutoryMandate": "Primary objective: Domestic price stability (medium-term inflation target 5-7%). Without prejudice to price stability, support financial stability and government growth objectives.",
      "fxGoldReserves": "64.7 tonnes of Gold; $11.2 Billion Liquid FX Reserves.",
      "keyInstruments": "SBP Policy (Target) Rate, Reverse Repo (Ceiling) Rate, Overnight Repo (Floor) Rate, Cash Reserve Requirement (CRR), Statutory Liquidity Reserve (SLR).",
      "historicalMilestone": "Inaugurated by Quaid-e-Azam Muhammad Ali Jinnah on July 1, 1948; landmark SBP Amendment Act 2022 granted statutory operational and functional autonomy."
    },
    {
      "id": "rbi",
      "name": "Reserve Bank of India (RBI)",
      "country": "India",
      "flag": "🇮🇳",
      "headquarters": "Shahid Bhagat Singh Road, Mumbai",
      "establishedYear": 1935,
      "chairperson": "Shaktikanta Das",
      "currentPolicyRate": "6.50%",
      "mandateType": "Flexible Inflation Targeting (FIT)",
      "statutoryMandate": "Maintain price stability (4% CPI target with +/- 2% tolerance band: 2% to 6%) while keeping in mind the objective of growth.",
      "fxGoldReserves": "854 tonnes of Gold; $675 Billion Foreign Exchange Reserves.",
      "keyInstruments": "Repo Rate, Reverse Repo Rate, Standing Deposit Facility (SDF), Marginal Standing Facility (MSF), CRR.",
      "historicalMilestone": "Established under RBI Act 1934 based on the Hilton Young Commission recommendations; nationalized in 1949."
    },
    {
      "id": "snb",
      "name": "Swiss National Bank (SNB)",
      "country": "Switzerland",
      "flag": "🇨🇭",
      "headquarters": "Bern and Zurich, Switzerland",
      "establishedYear": 1907,
      "chairperson": "Martin Schlegel",
      "currentPolicyRate": "1.00%",
      "mandateType": "Price Stability with National Interest",
      "statutoryMandate": "Ensure price stability (defined as annual CPI inflation under 2%). In doing so, it takes due account of economic developments.",
      "fxGoldReserves": "1,040 tonnes of Gold; massive $885 Billion Foreign Exchange portfolio.",
      "keyInstruments": "SNB Policy Rate, FX market interventions (buying/selling foreign currency to counter CHF appreciation).",
      "historicalMilestone": "Famously abandoned the 1.20 CHF per EUR currency floor in January 2015, causing a historic 30% instant surge in the Swiss Franc."
    },
    {
      "id": "sama",
      "name": "Saudi Central Bank (SAMA)",
      "country": "Saudi Arabia",
      "flag": "🇸🇦",
      "headquarters": "Riyadh, Saudi Arabia",
      "establishedYear": 1952,
      "chairperson": "Ayman Al-Sayari",
      "currentPolicyRate": "5.00% (Repo Rate)",
      "mandateType": "Exchange Rate Stability & Financial Sector Health",
      "statutoryMandate": "Maintain the fixed peg of the Saudi Riyal against the US Dollar (3.75 SAR = 1 USD), maintain price stability, and supervise banking system.",
      "fxGoldReserves": "323 tonnes of Gold; $460 Billion FX Reserves.",
      "keyInstruments": "Repo Rate and Reverse Repo Rate (mechanically tracking the US Federal Reserve's federal funds rate).",
      "historicalMilestone": "Established as the Saudi Arabian Monetary Authority (SAMA) in 1952; renamed Saudi Central Bank under Royal Decree in 2020."
    },
    {
      "id": "boc",
      "name": "Bank of Canada (Banque du Canada)",
      "country": "Canada",
      "flag": "🇨🇦",
      "headquarters": "Wellington Street, Ottawa",
      "establishedYear": 1934,
      "chairperson": "Tiff Macklem",
      "currentPolicyRate": "3.75%",
      "mandateType": "Inflation-Control Target",
      "statutoryMandate": "Maintain inflation at the 2% midpoint of a 1% to 3% target range; promote economic and financial welfare of Canada.",
      "fxGoldReserves": "Zero tonnes (Canada sold all of its sovereign gold reserves in 2016 to favor interest-earning liquid sovereign debt).",
      "keyInstruments": "Target for the Overnight Rate, Operating Band for the Overnight Rate.",
      "historicalMilestone": "First central bank after New Zealand to pioneer explicit Inflation Targeting in 1991."
    }
  ],
  "exchangeConcepts": [
    {
      "id": "concept-regimes",
      "title": "Exchange Rate Regimes: The Spectrum of Monetary Systems",
      "icon": "fa-sliders",
      "summary": "How governments and central banks choose to govern the external price of their national currency.",
      "details": [
        {
          "heading": "1. Hard Pegs & Currency Boards",
          "text": "The domestic currency is backed 100% by foreign currency reserves and exchanged at an immutable statutory rate (e.g. Hong Kong Dollar pegged to USD, Bulgarian Lev pegged to EUR). Dollarization/Euroization occurs when a nation abolishes its local currency entirely (e.g. Ecuador, El Salvador using USD)."
        },
        {
          "heading": "2. Conventional Fixed Pegs",
          "text": "The currency is legally pegged to a major anchor currency or a weighted currency basket with very narrow fluctuation bands (+/- 1%) (e.g. Saudi Riyal SAR at 3.75 and UAE Dirham AED at 3.6725 to USD). Central banks must maintain massive reserves to buy/sell foreign currency."
        },
        {
          "heading": "3. Crawling Pegs & Target Bands",
          "text": "The currency is periodically adjusted in small increments in response to inflation differentials or predetermined schedules (e.g. Bangladesh Taka BDT, Vietnam Dong VND, Singapore S$NEER band)."
        },
        {
          "heading": "4. Managed Floating ('Dirty Float')",
          "text": "The exchange rate is largely determined by market supply and demand, but the central bank actively intervenes intermittently to prevent disorderly fluctuations (e.g. Pakistan PKR, India INR, China CNY)."
        },
        {
          "heading": "5. Free Floating (Independent Float)",
          "text": "The exchange rate is determined purely by private market forces, trade flows, and capital movements without central bank intervention targets (e.g. USD, EUR, JPY, GBP, AUD, CAD, CHF)."
        }
      ],
      "examNote": "FPSC & CSS Tip: Remember that pegged systems sacrifice monetary independence, while floating systems allow independent interest rates but expose businesses to foreign exchange volatility."
    },
    {
      "id": "concept-trilemma",
      "title": "The Mundell-Fleming Trilemma (The Impossible Trinity)",
      "icon": "fa-triangle-exclamation",
      "summary": "A fundamental theorem of international economics: A country cannot simultaneously achieve all three monetary goals.",
      "details": [
        {
          "heading": "The Three Incompatible Goals",
          "text": "1. Fixed Foreign Exchange Rate (stable currency for trade)\n2. Free Capital Mobility (open financial markets without capital controls)\n3. Independent Monetary Policy (setting domestic interest rates for local inflation/growth)"
        },
        {
          "heading": "Option A: Floating Exchange Rate (US, UK, Japan, Eurozone)",
          "text": "Maintains Free Capital Mobility and Independent Monetary Policy, but must accept a fluctuating, floating exchange rate."
        },
        {
          "heading": "Option B: Fixed Peg (Saudi Arabia, UAE, Hong Kong)",
          "text": "Maintains Fixed Exchange Rate and Free Capital Mobility, but surrenders Monetary Independence (when the US Fed hikes or cuts rates, SAMA and HKMA must match immediately)."
        },
        {
          "heading": "Option C: Capital Controls (China, Malaysia in 1998)",
          "text": "Maintains Fixed/Managed Exchange Rate and Independent Monetary Policy, but must restrict private capital from leaving the country (capital controls)."
        }
      ],
      "examNote": "Robert Mundell won the 1999 Nobel Memorial Prize in Economics for this framework. It proves why small open economies cannot fix their dollar rate while simultaneously cutting interest rates and allowing free dollar outflows."
    },
    {
      "id": "concept-appreciation-depreciation",
      "title": "Appreciation vs. Depreciation & Revaluation vs. Devaluation",
      "icon": "fa-arrow-trend-up",
      "summary": "Crucial terminological distinction tested in CSS, PMS, and banking recruitment exams.",
      "details": [
        {
          "heading": "Market-Driven Terms (Floating Regimes)",
          "text": "• Depreciation: A decrease in the value of a currency relative to another currency caused by market forces of supply and demand (e.g., higher imports or capital outflows).\n• Appreciation: An increase in the value of a currency relative to another caused by market forces (e.g., export boom or high interest rate inflows)."
        },
        {
          "heading": "Government-Mandated Terms (Fixed Peg Regimes)",
          "text": "• Devaluation: A deliberate, official downward adjustment in the value of a country's currency by the government or central bank against its peg.\n• Revaluation: An official upward adjustment of a fixed exchange rate by authorities."
        },
        {
          "heading": "The J-Curve Effect",
          "text": "Following a currency devaluation/depreciation, a country's trade balance typically worsens in the short term (due to existing import contracts being more expensive) before improving in the medium term as export volumes expand."
        }
      ],
      "examNote": "Never write 'the market devalued the rupee'. In floating or market regimes, the currency depreciates. Devaluation is an official policy decree!"
    },
    {
      "id": "concept-reer-neer",
      "title": "NEER vs. REER: Measuring Real Currency Competitiveness",
      "icon": "fa-scale-balanced",
      "summary": "Why looking at just the USD/PKR or USD/INR bilateral rate is misleading for trade competitiveness.",
      "details": [
        {
          "heading": "Nominal Effective Exchange Rate (NEER)",
          "text": "An unadjusted trade-weighted average of a currency relative to a basket of major trading partner currencies. It shows whether the currency is strengthening or weakening against all trading partners combined."
        },
        {
          "heading": "Real Effective Exchange Rate (REER)",
          "text": "The NEER adjusted for inflation differentials between the home country and its trading partners. REER = NEER * (Domestic Price Index / Foreign Price Index)."
        },
        {
          "heading": "Interpretation of REER Index (Baseline = 100)",
          "text": "• REER > 100: The currency is overvalued in real terms. Domestic exports are relatively expensive and uncompetitive; imports are artificially cheap.\n• REER < 100: The currency is undervalued in real terms. Exports are highly competitive in international markets.\n• SBP and IMF closely monitor Pakistan's REER (historically maintained around 95-105)."
        }
      ],
      "examNote": "If domestic inflation is 25% while trading partner inflation is 3%, and the nominal exchange rate stays flat, the REER surges past 120, destroying export competitiveness!"
    },
    {
      "id": "concept-ppp-bigmac",
      "title": "Purchasing Power Parity (PPP) & The Big Mac Index",
      "icon": "fa-burger",
      "summary": "The law of one price applied to global currencies and purchasing power.",
      "details": [
        {
          "heading": "The Law of One Price",
          "text": "Identical goods should sell for the same price across different countries when converted into a common currency, excluding transport costs and tariffs."
        },
        {
          "heading": "Absolute Purchasing Power Parity (PPP)",
          "text": "The exchange rate between two currencies should equal the ratio of price levels: S = P_domestic / P_foreign. If a basket costs Rs. 28,000 in Pakistan and $100 in the US, the implied PPP exchange rate is 280 PKR/USD."
        },
        {
          "heading": "The Economist's Big Mac Index",
          "text": "An informal test of PPP invented in 1986. Because a McDonald's Big Mac is produced to uniform standards in over 100 countries, comparing its local price to the US price reveals whether a currency is fundamentally overvalued or undervalued relative to the USD."
        }
      ],
      "examNote": "In developing nations like Pakistan and India, nominal exchange rates are much weaker than PPP rates because non-tradable services (haircuts, rents, domestic labor) are far cheaper than in advanced economies."
    },
    {
      "id": "concept-interest-rate-parity",
      "title": "Interest Rate Parity (IRP) & The Carry Trade",
      "icon": "fa-money-bill-transfer",
      "summary": "How interest rate differentials between countries dictate forward exchange rates and speculative capital flows.",
      "details": [
        {
          "heading": "Covered Interest Rate Parity (CIRP)",
          "text": "Arbitrage condition: The forward premium or discount on a currency equals the interest rate differential between two countries: (Forward Rate - Spot Rate) / Spot Rate ≈ (i_domestic - i_foreign)."
        },
        {
          "heading": "The Global 'Carry Trade'",
          "text": "Investors borrow money in a currency with ultra-low interest rates (e.g. Japanese Yen at 0.25% or Swiss Franc at 1.0%) and invest the proceeds in high-yielding currencies or sovereign debt (e.g. US Treasuries at 4.75%, Mexican Peso at 10.25%, or Pakistani T-Bills at 15%)."
        },
        {
          "heading": "The Risk: Carry Trade Unwind",
          "text": "If the funding currency appreciates sharply (e.g. Bank of Japan hikes rates), investors rush to dump high-yield assets to repay their Yen loans, sparking global market sell-offs (as witnessed in August 2024)."
        }
      ],
      "examNote": "Hot money in Pakistan's Treasury bills (T-bills) in 2019-2020 was a classic carry trade: foreign hedge funds chased 13% SBP yields before exiting when global interest rate sentiment shifted."
    },
    {
      "id": "concept-forex-reserves",
      "title": "Foreign Exchange Reserves & The 3-Month Import Cover Rule",
      "icon": "fa-vault",
      "summary": "The sovereign war-chest that guarantees international payments and defends exchange rate stability.",
      "details": [
        {
          "heading": "Composition of Foreign Exchange Reserves",
          "text": "1. Foreign Currencies (USD, EUR, GBP, JPY, CNY bank deposits & bonds)\n2. Physical Gold Bullion\n3. Special Drawing Rights (SDRs) issued by the IMF\n4. Reserve Tranche Position in the IMF"
        },
        {
          "heading": "The Critical '3 Months Import Cover' Benchmark",
          "text": "According to the IMF and international rating agencies (Moody's, Fitch, S&P), a sovereign nation must hold liquid FX reserves sufficient to finance at least 3 months (12 weeks) of imports. Falling below 4-6 weeks triggers sovereign rating downgrades and default risk."
        },
        {
          "heading": "Sterilization of Inflows",
          "text": "When a central bank buys foreign currency to prevent currency appreciation, it prints domestic currency, risking inflation. 'Sterilization' involves selling domestic bonds via open market operations to absorb that excess liquidity."
        }
      ],
      "examNote": "Pakistan's economic crises historically coincide with gross SBP FX reserves plunging below $4-5 Billion (less than 3-4 weeks of import cover), forcing an emergency IMF intervention."
    },
    {
      "id": "concept-dedollarization-petrodollar",
      "title": "The Petrodollar Agreement & The De-Dollarization Debate",
      "icon": "fa-oil-well",
      "summary": "How oil created the modern dollar hegemon, and how the rise of multipolar trade is challenging it.",
      "details": [
        {
          "heading": "1. The 1974 US-Saudi Petrodollar Agreement",
          "text": "Following the 1971 Nixon Shock, the US and Saudi Arabia agreed that Saudi Arabia would price and sell its crude oil exclusively in US Dollars and invest its surplus petrodollars into US Treasuries, in exchange for US military protection. This ensured structural global demand for USD."
        },
        {
          "heading": "2. The 'Exorbitant Privilege'",
          "text": "Because every country must acquire dollars to purchase oil, food, and settle international trade, the US can borrow from the world in its own currency at low rates and run continuous trade and fiscal deficits without immediate currency collapse."
        },
        {
          "heading": "3. Weaponization & The De-Dollarization Push",
          "text": "The freezing of $300B of Russian Central Bank assets in 2022 catalyzed BRICS+ nations (China, Russia, India, Brazil, Saudi Arabia, UAE) to establish alternative payment mechanisms, bilateral currency swaps, and gold accumulation to reduce vulnerability to US sanctions."
        }
      ],
      "examNote": "While de-dollarization is accelerating in bilateral trade settlement, the USD still accounts for nearly 59% of global allocated FX reserves and over 85% of foreign exchange transactions due to deep US capital markets and legal protections."
    }
  ],
  "currencyHistoryTimeline": [
    {
      "epoch": "c. 600 BCE",
      "title": "First Standardized Minted Coins",
      "location": "Kingdom of Lydia (Modern Turkey)",
      "desc": "King Alyattes of Lydia minted the first officially stamped coins made from electrum (a natural alloy of gold and silver) bearing a roaring lion stamp, guaranteeing uniform weight and purity."
    },
    {
      "epoch": "c. 960–1000 CE",
      "title": "First Paper Money (Jiaozi)",
      "location": "Song Dynasty China (Sichuan)",
      "desc": "To avoid transporting heavy copper coin strings, Sichuan merchants issued paper deposit certificates ('Jiaozi'), later nationalized by the Song Emperor as the world's first state-backed paper currency."
    },
    {
      "epoch": "1668 CE",
      "title": "World's First Central Bank Founded",
      "location": "Stockholm, Sweden (Sveriges Riksbank)",
      "desc": "Founded as Stockholms Banco in 1656 and chartered as Riksens Ständers Bank in 1668, it became the world's first modern central bank, issuing Europe's first banknotes."
    },
    {
      "epoch": "1870–1914 CE",
      "title": "The Classical Gold Standard Era",
      "location": "Global Economy (Led by Great Britain)",
      "desc": "Major global economies fixed the value of their currencies to a statutory weight in pure gold, creating stable exchange rates, rapid globalization, and automatic price-specie flow adjustments."
    },
    {
      "epoch": "1944 CE",
      "title": "The Bretton Woods Conference",
      "location": "New Hampshire, United States (44 Allied Nations)",
      "desc": "Established the postwar monetary order: the US Dollar was pegged to gold at $35 per ounce, and other currencies were pegged to the dollar. Created the IMF and the World Bank."
    },
    {
      "epoch": "August 15, 1971",
      "title": "The Nixon Shock & The Fiat Currency Era",
      "location": "Washington, D.C., United States",
      "desc": "President Richard Nixon unilaterally cancelled the direct convertibility of the US dollar to gold, collapsing the Bretton Woods fixed exchange rate system and ushering in the global era of unbacked fiat floating currencies."
    },
    {
      "epoch": "1999–2002 CE",
      "title": "Birth of the Euro (€)",
      "location": "European Union",
      "desc": "Eleven European nations surrendered their sovereign currencies (Deutsche Mark, French Franc, Italian Lira) to create the Euro, managed by the European Central Bank (ECB) in Frankfurt."
    },
    {
      "epoch": "2009–Present",
      "title": "Cryptocurrencies & Central Bank Digital Currencies (CBDCs)",
      "location": "Global Financial System",
      "desc": "Satoshi Nakamoto created Bitcoin in 2009 based on decentralized blockchain proof-of-work. In response, central banks launched CBDCs (e.g. China's e-CNY, European Digital Euro, SBP Digital Rupee pilots)."
    }
  ],
  "quiz": [
    {
      "id": 1,
      "question": "According to the Mundell-Fleming Trilemma (Impossible Trinity), a country can simultaneously maintain only TWO of which three policy goals?",
      "options": [
        "Low taxes, high government spending, and zero sovereign debt",
        "Fixed exchange rate, free capital mobility, and independent monetary policy",
        "High inflation, low unemployment, and high interest rates",
        "Bilateral trade surplus, balanced budget, and fixed tariff rates"
      ],
      "correctAnswer": 1,
      "explanation": "The Mundell-Fleming Trilemma proves that an economy can only pick two of three: (1) Fixed exchange rate, (2) Free capital mobility, and (3) Independent monetary policy."
    },
    {
      "id": 2,
      "question": "When a central bank in a floating exchange-rate regime allows the currency value to decrease through market supply and demand, the process is termed:",
      "options": [
        "Devaluation",
        "Depreciation",
        "Deflation",
        "Demonetization"
      ],
      "correctAnswer": 1,
      "explanation": "In floating or market-based regimes, a market-driven loss in currency value is 'Depreciation'. 'Devaluation' is an official government decree adjusting a fixed peg."
    },
    {
      "id": 3,
      "question": "Which central bank has a statutory 'Dual Mandate' requiring it to pursue both price stability and maximum sustainable employment?",
      "options": [
        "European Central Bank (ECB)",
        "Federal Reserve (The Fed)",
        "Bank of England (BoE)",
        "Swiss National Bank (SNB)"
      ],
      "correctAnswer": 1,
      "explanation": "Under the Humphrey-Hawkins Act of 1978, the US Federal Reserve has an explicit dual mandate: maximum employment and stable prices (2% inflation)."
    },
    {
      "id": 4,
      "question": "What is the benchmark minimum foreign exchange reserve adequacy recommended by the IMF for import cover?",
      "options": [
        "1 week of imports",
        "4 weeks of imports",
        "3 months (12 weeks) of imports",
        "12 months of imports"
      ],
      "correctAnswer": 2,
      "explanation": "The international benchmark for a sovereign nation's gross foreign exchange reserves is at least 3 months (12 weeks) of total goods and services imports."
    },
    {
      "id": 5,
      "question": "If a country's Real Effective Exchange Rate (REER) index is 115 (where 100 represents equilibrium), what does this indicate about its currency?",
      "options": [
        "The currency is significantly undervalued, making exports cheap.",
        "The currency is overvalued by approximately 15%, harming export competitiveness.",
        "The country has completely eliminated all inflation.",
        "The country has zero foreign exchange reserves."
      ],
      "correctAnswer": 1,
      "explanation": "A REER above 100 indicates that the currency is overvalued relative to trading partners after adjusting for inflation, which penalizes domestic exporters and subsidizes imports."
    },
    {
      "id": 6,
      "question": "Under the Bretton Woods system established in 1944, the US Dollar was fixed to gold at what statutory rate?",
      "options": [
        "$20.67 per ounce",
        "$35.00 per ounce",
        "$100.00 per ounce",
        "$350.00 per ounce"
      ],
      "correctAnswer": 1,
      "explanation": "The Bretton Woods agreement pegged the US dollar directly to gold at $35 per troy ounce, with all other currencies pegged to the US dollar."
    },
    {
      "id": 7,
      "question": "Which of the following is currently the world's most valuable single currency unit relative to the US Dollar?",
      "options": [
        "British Pound (GBP)",
        "Kuwaiti Dinar (KWD)",
        "Bahraini Dinar (BHD)",
        "Omani Rial (OMR)"
      ],
      "correctAnswer": 1,
      "explanation": "The Kuwaiti Dinar (KWD) is the world's highest-valued currency unit, trading at approximately $3.25+ USD per 1 Dinar."
    },
    {
      "id": 8,
      "question": "What historic event occurred on August 15, 1971, when President Richard Nixon ended the US Dollar's gold convertibility?",
      "options": [
        "The Plaza Accord",
        "The Nixon Shock",
        "The Smithsonian Agreement",
        "The Louvre Accord"
      ],
      "correctAnswer": 1,
      "explanation": "The 'Nixon Shock' was a series of economic measures including the unilateral cancellation of the dollar's gold convertibility, ending the Bretton Woods system."
    },
    {
      "id": 9,
      "question": "What informal economic tool created by The Economist tests Purchasing Power Parity (PPP) using a standardized fast-food item?",
      "options": [
        "The Starbucks Latte Index",
        "The Big Mac Index",
        "The KFC Bucket Ratio",
        "The Coca-Cola Purchasing Model"
      ],
      "correctAnswer": 1,
      "explanation": "The Big Mac Index compares the local price of McDonald's Big Mac burger in various countries converted to USD to determine whether currencies are overvalued or undervalued."
    },
    {
      "id": 10,
      "question": "In currency trading jargon, what is the British Pound Sterling (GBP/USD pair) commonly referred to as?",
      "options": [
        "The Greenback",
        "The Cable",
        "The Loonie",
        "The Kiwi"
      ],
      "correctAnswer": 1,
      "explanation": "The GBP/USD rate is called 'Cable', originating from the 19th-century transatlantic telegraph cable connecting the London and New York exchanges."
    },
    {
      "id": 11,
      "question": "Which institution is the world's oldest central bank still in existence, founded in 1668?",
      "options": [
        "Bank of England",
        "Sveriges Riksbank (Sweden)",
        "Banca Monte dei Paschi di Siena",
        "Bank of France"
      ],
      "correctAnswer": 1,
      "explanation": "Sveriges Riksbank (the central bank of Sweden) was established in 1668, making it the oldest central bank in the world."
    },
    {
      "id": 12,
      "question": "What is an exchange rate regime called where a country abandons its domestic currency and uses the US Dollar as its official legal tender?",
      "options": [
        "Crawling Peg",
        "Dollarization",
        "Managed Float",
        "Currency Board"
      ],
      "correctAnswer": 1,
      "explanation": "Full dollarization (such as in Ecuador, El Salvador, and Panama) occurs when a country completely replaces its national currency with the US Dollar."
    },
    {
      "id": 13,
      "question": "The J-Curve effect in international economics illustrates that after a currency depreciation, the trade balance:",
      "options": [
        "Improves immediately and then permanently deteriorates.",
        "First worsens in the short term before improving in the medium term.",
        "Remains completely unchanged forever.",
        "Immediately causes hyperinflation without any change in exports."
      ],
      "correctAnswer": 1,
      "explanation": "The J-curve shows that import values initially rise because import costs jump immediately while export contracts take time to adjust, before export volumes expand to improve the trade balance."
    },
    {
      "id": 14,
      "question": "Which unique central bank manages monetary policy by targeting the trade-weighted exchange rate (S$NEER band) rather than domestic interest rates?",
      "options": [
        "Hong Kong Monetary Authority (HKMA)",
        "Monetary Authority of Singapore (MAS)",
        "Swiss National Bank (SNB)",
        "Bank of Korea (BoK)"
      ],
      "correctAnswer": 1,
      "explanation": "The Monetary Authority of Singapore (MAS) uses the Singapore Dollar Nominal Effective Exchange Rate (S$NEER) policy band as its primary monetary tool due to Singapore's extreme trade openness."
    },
    {
      "id": 15,
      "question": "Under the State Bank of Pakistan (SBP) Amendment Act 2022, what was established as the primary statutory objective of the SBP?",
      "options": [
        "Financing the federal budget deficit directly through money printing.",
        "Domestic price stability (inflation control).",
        "Pegging the Pakistani Rupee to the US Dollar at a fixed rate.",
        "Providing unlimited commercial loans to state-owned enterprises."
      ],
      "correctAnswer": 1,
      "explanation": "The SBP Amendment Act 2022 codified domestic price stability as the primary objective of the State Bank of Pakistan, while strictly prohibiting government borrowing from the central bank."
    },
    {
      "id": 16,
      "question": "What term describes the investment strategy of borrowing in a low-interest rate currency (like the Japanese Yen) to invest in high-yielding sovereign bonds?",
      "options": [
        "Dutch Disease",
        "Currency Carry Trade",
        "Dollar-Cost Averaging",
        "Arbitrage Pricing Theory"
      ],
      "correctAnswer": 1,
      "explanation": "The 'Carry Trade' involves borrowing funds in low-interest currencies to invest in high-interest yielding currencies, capturing the interest rate differential."
    },
    {
      "id": 17,
      "question": "What percentage of allocated global foreign exchange reserves is currently held in US Dollars?",
      "options": [
        "Around 20%",
        "Around 40%",
        "Around 58% to 59%",
        "Over 95%"
      ],
      "correctAnswer": 2,
      "explanation": "According to IMF COFER (Currency Composition of Official Foreign Exchange Reserves) data, the US Dollar accounts for approximately 58% to 59% of global allocated reserves."
    },
    {
      "id": 18,
      "question": "Which international reserve asset was created by the IMF in 1969 to supplement member countries' official reserves?",
      "options": [
        "Bancor",
        "Special Drawing Rights (SDRs)",
        "Eurodollar",
        "Petrodollar"
      ],
      "correctAnswer": 1,
      "explanation": "Special Drawing Rights (SDRs) were created by the IMF in 1969 as an international reserve asset based on a basket of 5 currencies (USD, EUR, CNY, JPY, GBP)."
    },
    {
      "id": 19,
      "question": "The Saudi Riyal (SAR) has been pegged to the US Dollar at what exact statutory rate since 1986?",
      "options": [
        "1 USD = 2.50 SAR",
        "1 USD = 3.75 SAR",
        "1 USD = 4.20 SAR",
        "1 USD = 5.00 SAR"
      ],
      "correctAnswer": 1,
      "explanation": "The Saudi Riyal has been officially fixed at 3.75 SAR per 1 US Dollar since June 1986, supported by the Saudi Central Bank (SAMA)."
    },
    {
      "id": 20,
      "question": "Which of the following is NOT one of the five currencies that constitute the IMF's Special Drawing Rights (SDR) basket?",
      "options": [
        "Chinese Yuan (Renminbi)",
        "Japanese Yen",
        "Swiss Franc",
        "British Pound Sterling"
      ],
      "correctAnswer": 2,
      "explanation": "The SDR basket consists of the US Dollar, Euro, Chinese Yuan, Japanese Yen, and British Pound Sterling. The Swiss Franc is not in the SDR basket."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.CURRENCY_EXCHANGE_DATA = CURRENCY_EXCHANGE_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CURRENCY_EXCHANGE_DATA;
}
