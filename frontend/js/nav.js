/**
 * Shared Categorized Navigation Controller
 * Handles mega-menu dropdowns, mobile accordion drawer,
 * homepage #tools-hub filtering, and ?cat= deep-linking.
 */
(function () {
  if (window.__mcqsNavInitialized) return;
  window.__mcqsNavInitialized = true;

  function closeAllMenus() {
    document.querySelectorAll('.nav-dropdown-btn').forEach(function (btn) {
      btn.setAttribute('aria-expanded', 'false');
      var menu = btn.parentElement ? btn.parentElement.querySelector('.mega-menu') : null;
      if (menu) menu.style.display = '';
    });
  }

  // 1. Mega-menu hover (desktop) & click (mobile/keyboard)
  document.querySelectorAll('.nav-dropdown').forEach(function (dd) {
    var btn = dd.querySelector('.nav-dropdown-btn');
    var menu = dd.querySelector('.mega-menu');
    if (!btn || !menu) return;

    dd.addEventListener('mouseenter', function () {
      if (window.innerWidth <= 768) return;
      closeAllMenus();
      btn.setAttribute('aria-expanded', 'true');
      menu.style.display = 'grid';
    });

    dd.addEventListener('mouseleave', function () {
      if (window.innerWidth <= 768) return;
      btn.setAttribute('aria-expanded', 'false');
      menu.style.display = '';
    });

    btn.addEventListener('click', function (e) {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      closeAllMenus();
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        menu.style.display = 'grid';
      }
      e.stopPropagation();
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest || !e.target.closest('.nav-dropdown')) {
      closeAllMenus();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAllMenus();
  });

  // 2. Mobile drawer toggle (safe if page also has its own toggle listener)
  var mobileBtn = document.querySelector('.mobile-menu');
  var navLinks = document.getElementById('mainNav') || document.querySelector('.nav-links');
  if (mobileBtn && navLinks && !mobileBtn.dataset.navBound) {
    mobileBtn.dataset.navBound = 'true';
    mobileBtn.addEventListener('click', function (e) {
      // Avoid double-toggling if app.js already handles .mobile-menu
      if (typeof window.__appMobileMenuBound === 'undefined') {
        navLinks.classList.toggle('nav-open');
        mobileBtn.classList.toggle('active');
      }
      setTimeout(function () {
        var open = navLinks.classList.contains('nav-open');
        navLinks.querySelectorAll('.nav-dropdown').forEach(function (dd) {
          dd.style.display = open ? 'block' : '';
        });
      }, 0);
      e.stopPropagation();
    });
  }

  // 3. Homepage #tools-hub filter pills
  var pills = document.querySelectorAll('.hub-pill');
  var cards = document.querySelectorAll('.hub-category-card');
  if (pills.length && cards.length) {
    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        var filter = pill.getAttribute('data-filter');
        pills.forEach(function (p) { p.classList.remove('active'); });
        pill.classList.add('active');
        cards.forEach(function (card) {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // 4. Category Quick-Nav Strip active highlight
  document.querySelectorAll('.cat-strip-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.cat-strip-btn').forEach(function (b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
    });
  });

  // 5. Global helper called by category strip on index.html
  window.filterCategorySection = function (cat) {
    var map = {
      all: 'all', maps: 'maps', science: 'science', law: 'law',
      economy: 'economy', history: 'history', intl: 'intl',
      games: 'games', essays: 'essays', exam: 'exam', career: 'career'
    };
    var filter = map[cat] || 'all';
    var matchedPill = document.querySelector('.hub-pill[data-filter="' + filter + '"]');
    if (matchedPill) {
      matchedPill.click();
      var hub = document.getElementById('tools-hub');
      if (hub) {
        setTimeout(function () { hub.scrollIntoView({ behavior: 'smooth' }); }, 50);
      }
    } else {
      window.location.href = 'index.html?cat=' + encodeURIComponent(filter) + '#tools-hub';
    }
  };

  // 6. Auto-apply ?cat= query param on index.html
  try {
    var params = new URLSearchParams(window.location.search);
    var initialCat = params.get('cat');
    if (initialCat && document.querySelector('.hub-pill[data-filter="' + initialCat + '"]')) {
      window.filterCategorySection(initialCat);
    }
  } catch (err) {
    // ignore URLSearchParams errors on older browsers
  }
})();
