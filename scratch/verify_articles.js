const fs = require('fs');
const path = require('path');

console.log('=== STARTING SEO ARTICLES & STUDY GUIDES VERIFICATION ===\n');

const frontendDir = path.join(__dirname, '../frontend');
let passCount = 0;
let totalChecks = 0;

function check(desc, condition) {
    totalChecks++;
    if (condition) {
        console.log(`[PASS] ${desc}`);
        passCount++;
    } else {
        console.error(`[FAIL] ${desc}`);
    }
}

// 1. Check data_seo_articles.js
const dataPath = path.join(frontendDir, 'js/data_seo_articles.js');
check('js/data_seo_articles.js exists', fs.existsSync(dataPath));

if (fs.existsSync(dataPath)) {
    const dataContent = fs.readFileSync(dataPath, 'utf8');
    check('Exports window.SEO_ARTICLES_DATA', dataContent.includes('window.SEO_ARTICLES_DATA'));
    check('Contains getAllArticles API', dataContent.includes('getAllArticles'));
    check('Contains getArticleById API', dataContent.includes('getArticleById'));
    check('Contains getArticlesByCategory API', dataContent.includes('getArticlesByCategory'));
    check('Contains searchArticles API', dataContent.includes('searchArticles'));

    // Check all 9 specific articles
    const requiredArticles = [
        'constitutional-articles-pakistan',
        'fia-recruitment-laws',
        'international-straits-canals',
        'international-organizations-headquarters',
        'top-100-pakistan-affairs-mcqs',
        'english-vocabulary-fpsc-css',
        'history-of-united-nations',
        'top-200-everyday-science-mcqs',
        'geography-facts-css-pms'
    ];

    let allArticlesPresent = true;
    requiredArticles.forEach(slug => {
        if (!dataContent.includes(slug)) {
            console.error(`Missing required article slug: ${slug}`);
            allArticlesPresent = false;
        }
    });
    check('All 9 requested SEO articles are present in dataset', allArticlesPresent);
    check('Articles include official statutory & treaty sources', dataContent.includes('sources') && dataContent.includes('Constitution') && dataContent.includes('UNCLOS'));
    check('Articles include practice MCQs with explanations', dataContent.includes('examMcqs') && dataContent.includes('exp'));
}

// 2. Check articles.html
const artPath = path.join(frontendDir, 'articles.html');
check('articles.html exists', fs.existsSync(artPath));

if (fs.existsSync(artPath)) {
    const artContent = fs.readFileSync(artPath, 'utf8');
    check('Contains Hero header with study guides scope', artContent.includes('Civil Services Study Guides') && artContent.includes('art-hero'));
    check('Contains Category filter tabs', artContent.includes('art-category-tabs') && artContent.includes('filterArticlesByCategory'));
    check('Contains Real-time search bar', artContent.includes('articleSearchInput') && artContent.includes('handleArticleSearch'));
    check('Contains Articles catalog grid', artContent.includes('articles-grid') && artContent.includes('art-card'));
    check('Contains Full Reader View with sticky ToC', artContent.includes('articleReaderView') && artContent.includes('reader-toc-sidebar'));
    check('Contains interactive MCQ checking logic', artContent.includes('checkArticleMcq') && artContent.includes('reader-exp-box'));
    check('Loads data_seo_articles.js script', artContent.includes('js/data_seo_articles.js'));
    check('Includes Dark mode & mobile menu support', artContent.includes('themeToggle') && artContent.includes('mobile-menu'));
}

// 3. Check All 18 HTML files link to articles.html
const htmlFiles = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));
check('18 HTML files present in frontend', htmlFiles.length === 18);

let allLinked = true;
htmlFiles.forEach(f => {
    const content = fs.readFileSync(path.join(frontendDir, f), 'utf8');
    if (!content.includes('articles.html')) {
        console.warn(`File ${f} is missing link to articles.html`);
        allLinked = false;
    }
});
check('All 18 HTML pages include links to articles.html', allLinked);

// 4. Check index.html hero chip and resources card
const indexPath = path.join(frontendDir, 'index.html');
if (fs.existsSync(indexPath)) {
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    check('index.html contains hero search chip for articles.html', indexContent.includes("window.location.href='articles.html'"));
    check('index.html contains feature card in resources-grid', indexContent.includes('📚 In-Depth Civil Services Study Guides &amp; SEO Articles'));
}

console.log(`\n=== RESULTS: ${passCount} / ${totalChecks} CHECKS PASSED ===`);
