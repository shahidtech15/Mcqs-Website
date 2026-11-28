/**
 * CSS Prep Central - Portal Utilities:
 * 1. Cookie & Privacy Consent Banner (GDPR, CCPA, AdSense UCP compliant)
 * 2. Universal Smooth Back-to-Top Floating Navigation
 */
(function() {
    'use strict';
    
    // ==========================================
    // 1. COOKIE CONSENT BANNER (GA4 + AdSense)
    // ==========================================
    var STORAGE_KEY = 'cssprep_cookie_consent_v1';

    function applyConsentChoice(choice) {
        try {
            localStorage.setItem(STORAGE_KEY, choice);
        } catch(e) {}
        if (typeof window.setGa4Consent === 'function') {
            window.setGa4Consent(choice === 'accepted');
        }
    }

    window.setPortalCookieConsent = function(choice) {
        applyConsentChoice(choice);
        var statusEl = document.getElementById('ga4-consent-status-badge');
        if (statusEl) {
            statusEl.textContent = choice === 'accepted'
                ? 'Current Status: Analytics Enabled (Accepted)'
                : 'Current Status: Analytics Disabled (Opted Out)';
            statusEl.style.color = choice === 'accepted' ? '#059669' : '#dc2626';
        }
    };
    
    function initCookieBanner() {
        var existingChoice = null;
        try {
            existingChoice = localStorage.getItem(STORAGE_KEY);
        } catch(e) {}

        if (existingChoice === 'accepted' || existingChoice === 'declined') {
            if (typeof window.setGa4Consent === 'function') {
                window.setGa4Consent(existingChoice === 'accepted');
            }
            return;
        }

        if (document.getElementById('cookie-consent-banner')) return;
        
        var banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.setAttribute('role', 'region');
        banner.setAttribute('aria-label', 'Cookie Consent Notice');
        
        banner.innerHTML = `
            <div class="cc-banner-container">
                <div class="cc-banner-content">
                    <div class="cc-banner-icon">
                        <i class="fa-solid fa-cookie-bite"></i>
                    </div>
                    <div class="cc-banner-text">
                        <strong>Privacy &amp; Cookie Consent</strong>
                        <p>
                            CSS Prep Central uses essential cookies, local preferences, <strong>Google Analytics 4 (GA4)</strong> for anonymous traffic measurement, and <strong>Google AdSense</strong> partner technologies to improve study resources. No personally identifiable information (PII) is sent to Google Analytics. Read our 
                            <a href="privacy.html" class="cc-link">Privacy Policy</a> and <a href="terms.html" class="cc-link">Terms of Service</a>.
                        </p>
                    </div>
                </div>
                <div class="cc-banner-actions">
                    <a href="privacy.html#google-analytics-disclosure" class="cc-btn-secondary">Manage / Privacy</a>
                    <button type="button" class="cc-btn-secondary" id="cc-btn-decline" style="cursor:pointer;">Essential Only</button>
                    <button type="button" class="cc-btn-primary" id="cc-btn-accept">Accept All</button>
                </div>
            </div>
        `;
        
        var style = document.createElement('style');
        style.id = 'cookie-consent-styles';
        style.textContent = `
            #cookie-consent-banner {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 999999;
                background: rgba(15, 23, 42, 0.96);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                border-top: 1px solid rgba(59, 130, 246, 0.3);
                box-shadow: 0 -10px 35px rgba(0, 0, 0, 0.5);
                padding: 16px 20px;
                color: #e2e8f0;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                animation: ccSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            @keyframes ccSlideUp {
                from { transform: translateY(100%); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @keyframes ccSlideDown {
                from { transform: translateY(0); opacity: 1; }
                to { transform: translateY(100%); opacity: 0; }
            }
            .cc-banner-container {
                max-width: 1200px;
                margin: 0 auto;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                gap: 16px;
            }
            .cc-banner-content {
                display: flex;
                align-items: center;
                gap: 16px;
                flex: 1 1 580px;
            }
            .cc-banner-icon {
                font-size: 1.8rem;
                color: #f59e0b;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }
            .cc-banner-text strong {
                display: block;
                font-size: 0.95rem;
                color: #ffffff;
                margin-bottom: 4px;
                font-weight: 700;
            }
            .cc-banner-text p {
                margin: 0;
                font-size: 0.84rem;
                line-height: 1.5;
                color: #94a3b8;
            }
            .cc-link {
                color: #38bdf8;
                text-decoration: underline;
                font-weight: 600;
                transition: color 0.2s;
            }
            .cc-link:hover {
                color: #7dd3fc;
            }
            .cc-banner-actions {
                display: flex;
                align-items: center;
                gap: 10px;
                flex-wrap: wrap;
            }
            .cc-btn-primary {
                background: linear-gradient(135deg, #2563eb, #1d4ed8);
                color: #ffffff;
                border: none;
                border-radius: 8px;
                padding: 10px 22px;
                font-size: 0.88rem;
                font-weight: 700;
                cursor: pointer;
                box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
                transition: all 0.2s ease;
            }
            .cc-btn-primary:hover {
                background: linear-gradient(135deg, #1d4ed8, #1e40af);
                transform: translateY(-1px);
            }
            .cc-btn-secondary {
                background: rgba(255, 255, 255, 0.08);
                color: #cbd5e1;
                border: 1px solid rgba(255, 255, 255, 0.18);
                border-radius: 8px;
                padding: 9px 18px;
                font-size: 0.85rem;
                font-weight: 600;
                text-decoration: none;
                transition: all 0.2s ease;
            }
            .cc-btn-secondary:hover {
                background: rgba(255, 255, 255, 0.15);
                color: #ffffff;
            }
            @media (max-width: 768px) {
                #cookie-consent-banner { padding: 14px 16px; }
                .cc-banner-container { flex-direction: column; align-items: stretch; }
                .cc-banner-actions { justify-content: flex-end; width: 100%; }
                .cc-btn-primary, .cc-btn-secondary { flex: 1; text-align: center; }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(banner);
        
        function dismissBanner(choice) {
            applyConsentChoice(choice);
            banner.style.animation = 'ccSlideDown 0.3s forwards';
            setTimeout(function() {
                if (banner.parentNode) {
                    banner.parentNode.removeChild(banner);
                }
            }, 300);
        }

        var acceptBtn = document.getElementById('cc-btn-accept');
        if (acceptBtn) {
            acceptBtn.addEventListener('click', function() {
                dismissBanner('accepted');
            });
        }

        var declineBtn = document.getElementById('cc-btn-decline');
        if (declineBtn) {
            declineBtn.addEventListener('click', function() {
                dismissBanner('declined');
            });
        }
    }

    // Track dynamic History API / SPA query transitions without duplicate page_view events
    function initSpaRouteTracking() {
        window.addEventListener('popstate', function() {
            if (typeof window.trackGa4PageView === 'function') {
                window.trackGa4PageView(window.location.href);
            }
        });
    }

    // ==========================================
    // 2. UNIVERSAL BACK-TO-TOP BUTTON
    // ==========================================
    function initBackToTop() {
        if (document.getElementById('portal-back-to-top')) return;

        var btt = document.createElement('button');
        btt.id = 'portal-back-to-top';
        btt.type = 'button';
        btt.setAttribute('aria-label', 'Back to top of page');
        btt.setAttribute('title', 'Back to Top');
        btt.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

        var bttStyle = document.createElement('style');
        bttStyle.id = 'portal-btt-styles';
        bttStyle.textContent = `
            #portal-back-to-top {
                position: fixed;
                bottom: 24px;
                right: 24px;
                z-index: 99999;
                width: 44px;
                height: 44px;
                border-radius: 50%;
                background: #1e293b;
                color: #f8fafc;
                border: 1px solid rgba(255, 255, 255, 0.2);
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
                opacity: 0;
                visibility: hidden;
                transform: translateY(12px);
                transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            }
            #portal-back-to-top.btt-visible {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
            #portal-back-to-top:hover {
                background: #2563eb;
                border-color: #3b82f6;
                color: #ffffff;
                box-shadow: 0 6px 20px rgba(37, 99, 235, 0.5);
                transform: translateY(-3px);
            }
            @media (max-width: 640px) {
                #portal-back-to-top {
                    bottom: 18px;
                    right: 18px;
                    width: 40px;
                    height: 40px;
                    font-size: 0.9rem;
                }
            }
        `;
        document.head.appendChild(bttStyle);
        document.body.appendChild(btt);

        window.addEventListener('scroll', function() {
            if (window.scrollY > 350) {
                btt.classList.add('btt-visible');
            } else {
                btt.classList.remove('btt-visible');
            }
        }, { passive: true });

        btt.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    function ensureNavController() {
        if (window.__mcqsNavInitialized || document.querySelector('script[src*="js/nav.js"]')) return;
        var s = document.createElement('script');
        s.src = 'js/nav.js';
        s.async = true;
        document.head.appendChild(s);
    }

    function init() {
        initCookieBanner();
        initBackToTop();
        initSpaRouteTracking();
        ensureNavController();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
