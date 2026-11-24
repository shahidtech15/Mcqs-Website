/**
 * On-Demand Question Bank Lazy Loader
 * Dynamically loads large MCQ dataset scripts only when a user selects a category,
 * runs a search, or starts a quiz — cutting initial homepage & quiz page payload by ~99%.
 */
(function (global) {
  'use strict';

  const loadedScripts = new Map();

  function loadScript(src) {
    if (loadedScripts.has(src)) {
      return loadedScripts.get(src);
    }
    // Check if script tag already exists in DOM
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing && existing.dataset.loaded === 'true') {
      const p = Promise.resolve();
      loadedScripts.set(src, p);
      return p;
    }

    const promise = new Promise((resolve) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.onload = () => {
        s.dataset.loaded = 'true';
        resolve();
      };
      s.onerror = () => {
        console.warn('[data_loader] Failed to load script:', src);
        resolve(); // Resolve gracefully so fallback still proceeds
      };
      document.head.appendChild(s);
    });

    loadedScripts.set(src, promise);
    return promise;
  }

  function ensureScripts(srcList) {
    const unique = [...new Set((srcList || []).filter(Boolean))];
    return Promise.all(unique.map(loadScript));
  }

  function getScriptsForCategory(categoryName, subCategory, mode) {
    if (mode === 'search' || mode === 'bookmarks') {
      return [
        'js/data_core_fallback.js',
        'js/data_2200.js',
        'js/data_current_affairs_200.js',
        'js/data_current_affairs_sts_200.js',
        'js/data_ai.js',
        'js/data_world_org.js',
        'js/data_aao.js',
        'js/data_islamiat_1000.js',
        'js/data_pedagogy_500.js'
      ];
    }

    if (mode === 'latest-more') {
      return ['js/data_core_fallback.js', 'js/data_2200.js'];
    }

    const norm = (categoryName || '').toLowerCase();
    const normSub = (subCategory || '').toLowerCase();

    if (norm.includes('mistake') || norm.includes('cat_mistakes')) {
      return ['js/data_2200.js'];
    }
    if (norm.includes('css mpt') || norm.includes('cat_css_mpt') || norm.includes('mpt 200')) {
      return [
        'js/data_core_fallback.js',
        'js/data_2200.js',
        'js/data_islamiat_1000.js',
        'js/data_current_affairs_200.js'
      ];
    }
    if (norm.includes('synonym') || norm.includes('antonym')) {
      return ['js/data_synonyms_antonyms.js'];
    }
    if (norm.includes('sample paper') || norm.includes('fia_ad_sample') || norm.includes('fia sample')) {
      return ['js/data_fia_sample_papers.js', 'js/data_fia_past_paper_2021_batch1.js'];
    }
    if (
      norm.includes('world organization') ||
      norm.includes('international organization') ||
      norm.includes('world_org') ||
      norm.includes('united nations') ||
      norm.includes('european union') ||
      norm.includes('nato')
    ) {
      return ['js/data_world_org.js', 'js/data_topic_un.js', 'js/data_topic_eu.js', 'js/data_topic_nato.js'];
    }
    if (norm.includes('artificial intelligence') || norm === 'ai' || norm.includes('cat_ai')) {
      return ['js/data_ai.js'];
    }
    if (norm.includes('audit') || norm.includes('aao')) {
      return ['js/data_aao.js'];
    }
    if (norm.includes('current affairs') || norm.includes('cat_ca')) {
      return [
        'js/data_core_fallback.js',
        'js/data_2200.js',
        'js/data_current_affairs_200.js',
        'js/data_current_affairs_sts_200.js'
      ];
    }
    if (norm.includes('islam')) {
      return ['js/data_islamiat_1000.js', 'js/data_2200.js'];
    }
    if (norm.includes('pedagog') || norm.includes('cat_pedagogy')) {
      return ['js/data_pedagogy_500.js'];
    }
    if (norm.includes('chemistry') || norm.includes('cat_chem') || norm.includes('metallurg') || norm.includes('cat_meta')) {
      return ['js/data_extra_categories.js', 'js/data_2200.js'];
    }
    if (norm.includes('css past') || norm.includes('cat_css')) {
      return ['js/data_extra_categories.js', 'js/data_2200.js', 'js/data_islamiat_1000.js', 'js/data_current_affairs_200.js'];
    }
    if (norm.includes('everyday science') || (norm.includes('science') && !norm.includes('computer'))) {
      return [
        'js/data_2200.js',
        'js/data_science_instruments.js',
        'js/data_science_capsule.js',
        'js/data_facts_mcqs.js',
        'js/data_examveda.js'
      ];
    }
    if (norm.includes('english') || norm.includes('cat_eng')) {
      if (normSub.includes('synonym') || normSub.includes('antonym')) {
        return ['js/data_synonyms_antonyms.js'];
      }
      return ['js/data_2200.js', 'js/data_examveda.js'];
    }
    if (norm.includes('computer') || norm.includes('cat_cs')) {
      return ['js/data_2200.js', 'js/data_examveda.js'];
    }
    if (norm.includes('general knowledge') || norm === 'gk' || norm.includes('cat_gk')) {
      return ['js/data_2200.js', 'js/data_examveda.js', 'js/data_facts_mcqs.js'];
    }
    if (
      norm.includes('math') ||
      norm.includes('geography') ||
      norm.includes('civil servant') ||
      norm.includes('csa') ||
      norm.includes('fia') ||
      norm.includes('investigation') ||
      norm.includes('legal')
    ) {
      return ['js/data_core_fallback.js', 'js/data_2200.js'];
    }
    if (norm.includes('pakistan') || norm.includes('sindh') || norm.includes('iq') || norm.includes('reasoning')) {
      return ['js/data_2200.js'];
    }

    // Default fallback
    return ['js/data_core_fallback.js', 'js/data_2200.js'];
  }

  function ensureCategoryScripts(categoryName, subCategory, mode) {
    const scripts = getScriptsForCategory(categoryName, subCategory, mode);
    return ensureScripts(scripts);
  }

  global.ensureDataScripts = ensureScripts;
  global.ensureCategoryScripts = ensureCategoryScripts;
})(window);
