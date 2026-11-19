const fs = require('fs');

console.log('--- 1. Updating quiz.html ---');
let quizHtml = fs.readFileSync('frontend/quiz.html', 'utf8');
if (!quizHtml.includes('js/data_world_org.js')) {
  quizHtml = quizHtml.replace(
    '<script src="js/data_ai.js"></script>',
    '<script src="js/data_ai.js"></script>\n    <script src="js/data_world_org.js"></script>'
  );
  fs.writeFileSync('frontend/quiz.html', quizHtml, 'utf8');
  console.log('quiz.html updated successfully.');
} else {
  console.log('quiz.html already contains data_world_org.js');
}

console.log('--- 2. Updating index.html ---');
let indexHtml = fs.readFileSync('frontend/index.html', 'utf8');
if (!indexHtml.includes('js/data_world_org.js')) {
  indexHtml = indexHtml.replace(
    '<script src="js/data_ai.js"></script>',
    '<script src="js/data_ai.js"></script>\n    <script src="js/data_world_org.js"></script>'
  );
}

// Add secondary navbar link if not present
if (!indexHtml.includes("launchCategoryByName('World Organizations')")) {
  const targetNav = '<li><a href="#categories" onclick="launchCategoryByName(\'Artificial Intelligence\'); return false;" style="font-weight: 600; color: #38bdf8;"><i class="fa-solid fa-microchip"></i> Artificial Intelligence</a></li>';
  const newNav = `${targetNav}\n                <li><a href="#categories" onclick="launchCategoryByName('World Organizations'); return false;" style="font-weight: 600; color: #10b981;"><i class="fa-solid fa-earth-americas"></i> World Organizations</a></li>`;
  indexHtml = indexHtml.replace(targetNav, newNav);
}

// Add search chip if not present
if (!indexHtml.includes("quickSearch('World Organizations')")) {
  const targetChip = '<button type="button" class="search-chip" onclick="quickSearch(\'Artificial Intelligence\')" style="font-weight:600; border-color:#38bdf8; color:#38bdf8;"><i class="fa-solid fa-microchip"></i> Artificial Intelligence</button>';
  const newChip = `${targetChip}\n                    <button type="button" class="search-chip" onclick="quickSearch('World Organizations')" style="font-weight:600; border-color:#10b981; color:#10b981;"><i class="fa-solid fa-earth-americas"></i> World Organizations</button>`;
  indexHtml = indexHtml.replace(targetChip, newChip);
}

fs.writeFileSync('frontend/index.html', indexHtml, 'utf8');
console.log('index.html updated successfully.');

console.log('--- 3. Updating app.js ---');
let appJs = fs.readFileSync('frontend/js/app.js', 'utf8');

// Add category to FALLBACK_CATEGORIES in app.js
if (!appJs.includes("id: 'cat_world_org'") && !appJs.includes("_id: 'cat_world_org'")) {
  const targetCat = "const FALLBACK_CATEGORIES = [\n  { _id: 'cat_ai', name: 'Artificial Intelligence', description: 'Recent breakthroughs in AI: Foundation Models, LLMs, GenAI, Neural Scaling, AI Hardware, Nobel Prizes & Safety.', icon: 'fa-microchip', questionCount: 200, subcategoriesCount: 5 },";
  const newCat = `const FALLBACK_CATEGORIES = [\n  { _id: 'cat_world_org', name: 'World Organizations', description: 'United Nations, Specialized Agencies, Regional Blocs (NATO, EU, SCO, BRICS, SAARC, OIC, ASEAN), Financial Institutions (IMF, World Bank, WTO) & Global Treaties.', icon: 'fa-earth-americas', questionCount: 100, subcategoriesCount: 4 },\n  { _id: 'cat_ai', name: 'Artificial Intelligence', description: 'Recent breakthroughs in AI: Foundation Models, LLMs, GenAI, Neural Scaling, AI Hardware, Nobel Prizes & Safety.', icon: 'fa-microchip', questionCount: 200, subcategoriesCount: 5 },`;
  appJs = appJs.replace(targetCat, newCat);
}

// Add to KNOWN_SUBCATEGORIES in app.js
if (!appJs.includes('"World Organizations": [')) {
  const targetKS = 'const KNOWN_SUBCATEGORIES = {\n';
  const newKS = `const KNOWN_SUBCATEGORIES = {\n  "World Organizations": [\n    "United Nations & Specialized Agencies",\n    "Regional Alliances & Political Blocs",\n    "International Financial & Trade Institutions",\n    "Global Treaties, Judicial, Security & Humanitarian Bodies"\n  ],\n`;
  appJs = appJs.replace(targetKS, newKS);
}

// Add worldOrgMcqs definition in app.js
if (!appJs.includes('window.WORLD_ORG_MCQS')) {
  appJs = appJs.replace(
    "const aiMcqs = (typeof window !== 'undefined' && Array.isArray(window.AI_MCQS)) ? window.AI_MCQS : [];",
    "const aiMcqs = (typeof window !== 'undefined' && Array.isArray(window.AI_MCQS)) ? window.AI_MCQS : [];\n  const worldOrgMcqs = (typeof window !== 'undefined' && Array.isArray(window.WORLD_ORG_MCQS)) ? window.WORLD_ORG_MCQS : [];"
  );
}

// Add isWorldOrg condition in app.js
if (!appJs.includes('const isWorldOrg =')) {
  const targetCheck = "const isAI = categoryName.toLowerCase().includes('artificial intelligence') ||";
  const newCheck = `const isWorldOrg = categoryName.toLowerCase().includes('world organization') || \n               categoryName.toLowerCase().includes('international organization') || \n               catId.toLowerCase().includes('cat_world_org') || \n               catId === 'World Organizations';\n  const isAI = categoryName.toLowerCase().includes('artificial intelligence') ||`;
  appJs = appJs.replace(targetCheck, newCheck);
}

// Add isWorldOrg handling in pool assignment in app.js
if (!appJs.includes('if (isWorldOrg) {')) {
  const targetPoolIf = 'if (isAI) {\n    pool = [...aiMcqs];';
  const newPoolIf = `if (isWorldOrg) {\n    pool = [...worldOrgMcqs];\n    if (subCategory) {\n      const filtered = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCategory.toLowerCase());\n      if (filtered.length > 0) pool = filtered;\n    }\n  } else if (isAI) {\n    pool = [...aiMcqs];`;
  appJs = appJs.replace(targetPoolIf, newPoolIf);
}

// Add to combined search pool in app.js
if (!appJs.includes('...worldOrgMcqs,')) {
  appJs = appJs.replace(
    '...aiMcqs,',
    '...aiMcqs,\n      ...worldOrgMcqs,'
  );
}

fs.writeFileSync('frontend/js/app.js', appJs, 'utf8');
console.log('app.js updated successfully.');

console.log('--- 4. Updating quiz.js ---');
let quizJs = fs.readFileSync('frontend/js/quiz.js', 'utf8');

// Add category to FALLBACK_CATEGORIES in quiz.js
if (!quizJs.includes("id: 'cat_world_org'") && !quizJs.includes("_id: 'cat_world_org'")) {
  const targetCatQ = "const FALLBACK_CATEGORIES = [\n  { _id: 'cat_ai', name: 'Artificial Intelligence', description: 'Recent breakthroughs in AI: Foundation Models, LLMs, GenAI, Neural Scaling, AI Hardware, Nobel Prizes & Safety.', icon: 'fa-microchip', questionCount: 200, subcategoriesCount: 5 },";
  const newCatQ = `const FALLBACK_CATEGORIES = [\n  { _id: 'cat_world_org', name: 'World Organizations', description: 'United Nations, Specialized Agencies, Regional Blocs (NATO, EU, SCO, BRICS, SAARC, OIC, ASEAN), Financial Institutions (IMF, World Bank, WTO) & Global Treaties.', icon: 'fa-earth-americas', questionCount: 100, subcategoriesCount: 4 },\n  { _id: 'cat_ai', name: 'Artificial Intelligence', description: 'Recent breakthroughs in AI: Foundation Models, LLMs, GenAI, Neural Scaling, AI Hardware, Nobel Prizes & Safety.', icon: 'fa-microchip', questionCount: 200, subcategoriesCount: 5 },`;
  quizJs = quizJs.replace(targetCatQ, newCatQ);
}

// Add to KNOWN_SUBCATEGORIES in quiz.js
if (!quizJs.includes('"World Organizations": [')) {
  const targetKSQ = 'const KNOWN_SUBCATEGORIES = {\n';
  const newKSQ = `const KNOWN_SUBCATEGORIES = {\n  "World Organizations": [\n    "United Nations & Specialized Agencies",\n    "Regional Alliances & Political Blocs",\n    "International Financial & Trade Institutions",\n    "Global Treaties, Judicial, Security & Humanitarian Bodies"\n  ],\n`;
  quizJs = quizJs.replace(targetKSQ, newKSQ);
}

// Add worldOrgMcqs in quiz.js
if (!quizJs.includes('window.WORLD_ORG_MCQS')) {
  quizJs = quizJs.replace(
    "const aiMcqs = (typeof window !== 'undefined' && Array.isArray(window.AI_MCQS)) ? window.AI_MCQS : [];",
    "const aiMcqs = (typeof window !== 'undefined' && Array.isArray(window.AI_MCQS)) ? window.AI_MCQS : [];\n    const worldOrgMcqs = (typeof window !== 'undefined' && Array.isArray(window.WORLD_ORG_MCQS)) ? window.WORLD_ORG_MCQS : [];"
  );
}

// Add handling in generateFallbackQuiz in quiz.js
if (!quizJs.includes("normCat.includes('world organization')")) {
  const targetGen = "if (normCat.includes('artificial intelligence') || normCat === 'ai' || normCat.includes('ai &') || normCat.includes('ai development')) {";
  const newGen = `if (normCat.includes('world organization') || normCat.includes('international organization') || normCat.includes('cat_world_org') || normCat === 'world organizations') {\n        pool = [...worldOrgMcqs];\n        if (subCat) pool = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCat.toLowerCase());\n    } else if (normCat.includes('artificial intelligence') || normCat === 'ai' || normCat.includes('ai &') || normCat.includes('ai development')) {`;
  quizJs = quizJs.replace(targetGen, newGen);
}

fs.writeFileSync('frontend/js/quiz.js', quizJs, 'utf8');
console.log('quiz.js updated successfully.');
