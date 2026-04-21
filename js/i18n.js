/* ═══════════════════════════════════════════════════════════════════════
   Medos Hotel — i18n.js  (core)
   Translation strings live in i18n.tr.js / i18n.en.js (loaded on demand).
   Language detection: localStorage → browser lang → IP (background, next visit)
   ═══════════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var LANG_KEY = 'medos_lang';
  var T = {};   /* filled after language file loads */

  /* ── Sync detection (fast path) ─────────────────────────────────────── */
  function detectLangSync() {
    var stored = localStorage.getItem(LANG_KEY);
    if (stored === 'tr' || stored === 'en') return stored;
    var bl = (navigator.language || navigator.userLanguage || 'tr').toLowerCase();
    return bl.startsWith('tr') ? 'tr' : 'en';
  }

  /* ── Background IP refinement (first-time visitors only) ────────────── */
  function refineWithIP(currentLang) {
    var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    var timer = setTimeout(function () { if (controller) controller.abort(); }, 3000);
    fetch('https://ipapi.co/json/', controller ? { signal: controller.signal } : {})
      .then(function (res) { return res.json(); })
      .then(function (data) {
        clearTimeout(timer);
        var lang = data.country_code === 'TR' ? 'tr' : 'en';
        localStorage.setItem(LANG_KEY, lang);
        if (lang !== currentLang) window.MEDOS.setLang(lang);
      })
      .catch(function () { clearTimeout(timer); });
  }

  /* ── Load language file ──────────────────────────────────────────────── */
  function loadLang(lang, cb) {
    if (T[lang]) { cb(); return; }
    var s = document.createElement('script');
    s.src = 'js/i18n.' + lang + '.min.js';
    s.onload = function () {
      T[lang] = window['_T_' + lang] || {};
      cb();
    };
    s.onerror = function () {
      T[lang] = {};
      cb();
    };
    document.head.appendChild(s);
  }

  /* ── Core i18n functions ─────────────────────────────────────────────── */

  function t(key) {
    var lang = (window.MEDOS && window.MEDOS.lang) || 'tr';
    return (T[lang] && T[lang][key]) || (T['tr'] && T['tr'][key]) || key;
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = (T[lang] && T[lang][el.dataset.i18n]) || (T['tr'] && T['tr'][el.dataset.i18n]);
      if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = (T[lang] && T[lang][el.dataset.i18nHtml]) || (T['tr'] && T['tr'][el.dataset.i18nHtml]);
      if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var val = (T[lang] && T[lang][el.dataset.i18nPlaceholder]) || (T['tr'] && T['tr'][el.dataset.i18nPlaceholder]);
      if (val !== undefined) el.placeholder = val;
    });

    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.hidden = (el.dataset.lang !== lang);
    });

    var titleKey = document.documentElement.dataset.titleI18n;
    if (titleKey) {
      var pageTitle = (T[lang] && T[lang][titleKey]) || (T['tr'] && T['tr'][titleKey]) || '';
      var siteTitle = (T[lang] && T[lang]['site.name']) || 'Medos Hotel';
      if (pageTitle) document.title = pageTitle + ' | ' + siteTitle;
    }

    document.querySelectorAll('.lang-label').forEach(function (el) {
      el.textContent = lang.toUpperCase();
    });

    document.querySelectorAll('[data-set-lang]').forEach(function (el) {
      el.setAttribute('aria-current', el.dataset.setLang === lang ? 'true' : 'false');
    });
  }

  function setLang(lang) {
    if (lang !== 'tr' && lang !== 'en') return;
    loadLang(lang, function () {
      localStorage.setItem(LANG_KEY, lang);
      window.MEDOS.lang = lang;
      applyLang(lang);
    });
  }

  /* ── Expose global API ───────────────────────────────────────────────── */

  window.MEDOS = { lang: 'tr', t: t, setLang: setLang, applyLang: applyLang, T: T };

  /* ── Bootstrap ───────────────────────────────────────────────────────── */

  var initialLang = detectLangSync();
  window.MEDOS.lang = initialLang;

  /* Store preference if not already saved (first visit) */
  var hadStored = !!localStorage.getItem(LANG_KEY);
  if (!hadStored) localStorage.setItem(LANG_KEY, initialLang);

  loadLang(initialLang, function () {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { applyLang(initialLang); });
    } else {
      applyLang(initialLang);
    }
    /* Refine with IP for first-time visitors (updates localStorage for next visit) */
    if (!hadStored) refineWithIP(initialLang);
  });

})();
