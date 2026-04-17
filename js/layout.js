/* ═══════════════════════════════════════════════════════════════════════
   Medos Hotel — layout.js
   Renders shared <header> and <footer> on every page.
   Depends on i18n.js (window.MEDOS.t)
   ═══════════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* Helper: translate or return fallback */
  function t(key) {
    return (window.MEDOS && window.MEDOS.t(key)) || key;
  }

  /* ──────────────────── Header HTML ──────────────────────────────────── */
  function buildHeader() {
    return `
<header class="site-header" id="site-header">
  <nav class="nav-container" aria-label="Ana Navigasyon">

    <a href="index.html" class="nav-logo" aria-label="Medos Hotel Ana Sayfa">
      <img src="img/logo.png" alt="Medos Hotel" width="130" height="44" fetchpriority="high">
    </a>

    <ul class="nav-links" id="nav-links" role="list">

      <li>
        <a href="index.html" class="nav-link" data-i18n="nav.home">${t('nav.home')}</a>
      </li>

      <!-- Odalar dropdown -->
      <li class="nav-item has-dropdown">
        <button class="nav-link nav-drop-toggle" aria-haspopup="true" aria-expanded="false" data-i18n="nav.rooms">
          ${t('nav.rooms')}
          <svg class="drop-chevron" width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <ul class="nav-dropdown" role="menu">
          <li role="none"><a href="standart_oda.html" role="menuitem" data-i18n="nav.rooms.standard">${t('nav.rooms.standard')}</a></li>
          <li role="none"><a href="aile_oda.html"     role="menuitem" data-i18n="nav.rooms.family">${t('nav.rooms.family')}</a></li>
          <li role="none"><a href="junior_suit.html"  role="menuitem" data-i18n="nav.rooms.suite">${t('nav.rooms.suite')}</a></li>
        </ul>
      </li>

      <!-- Gezilecek Yerler dropdown -->
      <li class="nav-item has-dropdown">
        <button class="nav-link nav-drop-toggle" aria-haspopup="true" aria-expanded="false" data-i18n="nav.places">
          ${t('nav.places')}
          <svg class="drop-chevron" width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <ul class="nav-dropdown" role="menu">
          <li role="none"><a href="efes_antik_kenti.html"            role="menuitem" data-i18n="nav.places.ephesus">${t('nav.places.ephesus')}</a></li>
          <li role="none"><a href="meryem_ana_evi.html"              role="menuitem" data-i18n="nav.places.virgin_mary">${t('nav.places.virgin_mary')}</a></li>
          <li role="none"><a href="sirince_koyu.html"                role="menuitem" data-i18n="nav.places.sirince">${t('nav.places.sirince')}</a></li>
          <li role="none"><a href="dilek_yarim_adasi_milli_park.html" role="menuitem" data-i18n="nav.places.dilek">${t('nav.places.dilek')}</a></li>
          <li role="none"><a href="zeus_magarasi.html"               role="menuitem" data-i18n="nav.places.zeus">${t('nav.places.zeus')}</a></li>
          <li role="none"><a href="guvercin_ada_kalesi.html"         role="menuitem" data-i18n="nav.places.pigeon">${t('nav.places.pigeon')}</a></li>
        </ul>
      </li>

      <li>
        <a href="sanal_gezinti.html" class="nav-link" data-i18n="nav.virtual_tour">${t('nav.virtual_tour')}</a>
      </li>

      <li>
        <a href="hakkimizda.html" class="nav-link" data-i18n="nav.about">${t('nav.about')}</a>
      </li>

      <li>
        <a href="ulasim.html" class="nav-link" data-i18n="nav.transport">${t('nav.transport')}</a>
      </li>

      <li>
        <a href="iletisim.html" class="nav-link" data-i18n="nav.contact">${t('nav.contact')}</a>
      </li>

    </ul><!-- /.nav-links -->

    <div class="nav-right">

      <!-- Language switcher -->
      <div class="lang-switcher">
        <button class="lang-btn" aria-haspopup="listbox" aria-expanded="false" aria-label="Dil seçimi / Language">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          <span class="lang-label">${(window.MEDOS && window.MEDOS.lang || 'TR').toUpperCase()}</span>
          <svg class="chevron" width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <ul class="lang-dropdown" role="listbox" aria-label="Dil / Language">
          <li role="option"><a href="#" data-set-lang="tr" aria-current="${(window.MEDOS && window.MEDOS.lang) === 'tr' ? 'true' : 'false'}">🇹🇷 Türkçe</a></li>
          <li role="option"><a href="#" data-set-lang="en" aria-current="${(window.MEDOS && window.MEDOS.lang) === 'en' ? 'true' : 'false'}">🇬🇧 English</a></li>
        </ul>
      </div>

      <!-- Hamburger -->
      <button class="hamburger" id="hamburger" aria-label="Menüyü aç" aria-expanded="false" aria-controls="nav-links">
        <span class="top-bun"></span>
        <span class="patty"></span>
        <span class="bottom-bun"></span>
      </button>

    </div><!-- /.nav-right -->

  </nav>
</header>`;
  }

  /* ──────────────────── Footer HTML ──────────────────────────────────── */
  function buildFooter() {
    const docIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`;
    return `
<footer class="site-footer">
  <div class="footer-inner">

    <!-- Col 1: Contact -->
    <div class="footer-contact">
      <a href="index.html" aria-label="Ana Sayfa" class="footer-logo-link">
        <img src="img/logo-white.png" alt="Medos Hotel" width="100" height="34" loading="lazy">
      </a>
      <address class="footer-address">
        <a href="https://maps.google.com/maps?q=Medos+Hotel+Güzelçamlı+Kuşadası" target="_blank" rel="noopener noreferrer">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span data-i18n="footer.address">${t('footer.address')}</span>
        </a>
        <a href="tel:+902566450740">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 7 7l.78-.78a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17.5z"/></svg>
          0256 645 07 40
        </a>
        <a href="mailto:info@medoshotel.com">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          info@medoshotel.com
        </a>
      </address>
      <div class="footer-social">
        <a href="https://www.facebook.com/MedosHotel" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
        <a href="https://www.instagram.com/medos.hotel" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="https://www.youtube.com/@MedosHotel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="#fff" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
        </a>
      </div>
    </div>

    <!-- Col 2: Documents 1–4 -->
    <div class="footer-docs">
      <h5 class="footer-col-title" data-i18n="footer.documents">${t('footer.documents')}</h5>
      <ul class="footer-docs-list" role="list">
        <li>${docIcon}<a href="docs/Medos_Hotel_Cerez_Politikasi.pdf" target="_blank" rel="noopener noreferrer" data-i18n="footer.cookie_policy">${t('footer.cookie_policy')}</a></li>
        <li>${docIcon}<a href="docs/Medos_Hotel_Aydinlatma_Metni.pdf" target="_blank" rel="noopener noreferrer" data-i18n="footer.privacy_notice">${t('footer.privacy_notice')}</a></li>
        <li>${docIcon}<a href="docs/Medos_Hotel_Kisisel_Verilerin_Korunmasi.pdf" target="_blank" rel="noopener noreferrer" data-i18n="footer.kvkk_text">${t('footer.kvkk_text')}</a></li>
        <li>${docIcon}<a href="docs/Medos_Hotel_Veri_Sahibi_Basvuru_Formu.pdf" target="_blank" rel="noopener noreferrer" data-i18n="footer.data_request">${t('footer.data_request')}</a></li>
      </ul>
    </div>

    <!-- Col 3: Documents 5–7 -->
    <div class="footer-docs footer-docs--right">
      <h5 class="footer-col-title">&nbsp;</h5>
      <ul class="footer-docs-list" role="list">
        <li>${docIcon}<a href="docs/Medos_Hotel_Surdurulebilirlik_Raporu_2025.pdf" target="_blank" rel="noopener noreferrer" data-i18n="footer.sustainability_report">${t('footer.sustainability_report')}</a></li>
        <li>${docIcon}<a href="docs/Medos_Hotel_Surdurulelebilirlik_K%C3%B6sesi.pdf" target="_blank" rel="noopener noreferrer" data-i18n="footer.sustainability_corner">${t('footer.sustainability_corner')}</a></li>
        <li>${docIcon}<a href="docs/Ayd%C4%B1n_ili_Tur_Eylem_Plan.pdf" target="_blank" rel="noopener noreferrer" data-i18n="footer.species_action_plan">${t('footer.species_action_plan')}</a></li>
        <li>${docIcon}<a href="docs/Medos_Hotel_Surdurulebilirlik_Belgesi.pdf" target="_blank" rel="noopener noreferrer" data-i18n="footer.sustainability_cert">${t('footer.sustainability_cert')}</a></li>
      </ul>
    </div>

  </div><!-- /.footer-inner -->

  <!-- Bottom bar -->
  <div class="footer-bottom">
    <div class="footer-bottom-inner">
      <p class="footer-copy">&copy; <span id="footer-year"></span> Medos Hotel. <span data-i18n="footer.copyright">${t('footer.copyright')}</span></p>
      <p class="footer-dev"><span data-i18n="footer.developed_by">${t('footer.developed_by')}</span> <a href="https://decigent.com" target="_blank" rel="noopener noreferrer">Decigent</a></p>
    </div>
  </div>

</footer>

<!-- Fixed bottom CTAs -->
<div class="alt_butonlar" role="complementary" aria-label="Hızlı işlemler">
  <button type="button" class="alt-btn alt-btn--chat" aria-label="Asistan ile sohbet et" onclick="if(window.MedosChat)window.MedosChat.toggle()">
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    <span data-i18n="cta.chat">${t('cta.chat')}</span>
  </button>
  <a href="tel:+902566450740" class="alt-btn alt-btn--call" aria-label="Otel ile telefonda iletişime geç">
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 7 7l.78-.78a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17.5z"/></svg>
    <span>0256 645 07 40</span>
  </a>
  <a href="booking.html" class="alt-btn alt-btn--booking" aria-label="Çevrimiçi rezervasyon yap">
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    <span data-i18n="cta.book">${t('cta.book')}</span>
  </a>
</div>`;
  }

  /* ──────────────────── Cookie Banner HTML ───────────────────────────── */
  function buildCookieBanner() {
    return `
<div class="cookie-banner" id="cookieBanner" role="dialog" aria-live="polite" aria-label="Çerez bildirimi" hidden>
  <div class="cookie-banner-inner">
    <div class="cookie-banner-text">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" class="cookie-icon"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <p>
        <span data-lang="tr">Bu web sitesi, size daha iyi bir deneyim sunmak için çerezler kullanmaktadır. Çerezler hakkında daha fazla bilgi almak için</span>
        <span data-lang="en" hidden>This website uses cookies to provide you with a better experience. For more information about cookies, please read our</span>
        <a href="docs/Medos_Hotel_%C3%87erez_Politikas%C4%B1.pdf" target="_blank" rel="noopener noreferrer">
          <span data-lang="tr">Çerez Politikamızı</span>
          <span data-lang="en" hidden>Cookie Policy</span>
        </a>
        <span data-lang="tr">inceleyebilirsiniz.</span>
        <span data-lang="en" hidden>.</span>
      </p>
    </div>
    <div class="cookie-banner-actions">
      <button type="button" class="cookie-btn cookie-btn--accept" id="cookieAccept">
        <span data-lang="tr">Kabul Et</span>
        <span data-lang="en" hidden>Accept</span>
      </button>
      <button type="button" class="cookie-btn cookie-btn--reject" id="cookieReject">
        <span data-lang="tr">Reddet</span>
        <span data-lang="en" hidden>Reject</span>
      </button>
    </div>
  </div>
</div>`;
  }

  /* ──────────────────── Inject into DOM ──────────────────────────────── */

  function inject() {
    /* Header: prepend to <body> */
    document.body.insertAdjacentHTML('afterbegin', buildHeader());

    /* Footer + cookie banner: append to <body> */
    document.body.insertAdjacentHTML('beforeend', buildFooter());
    document.body.insertAdjacentHTML('beforeend', buildCookieBanner());

    /* Set footer year */
    var yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* Set hero background images from data-bg attribute */
    document.querySelectorAll('[data-bg]').forEach(function(el) {
      el.style.backgroundImage = 'url(' + el.getAttribute('data-bg') + ')';
    });

    /* Init all nav behaviors */
    initNav();

    /* Init cookie banner */
    initCookieBanner();

    /* Load chatbot widget */
    var chatbotScript = document.createElement('script');
    chatbotScript.src = 'js/chatbot.js';
    document.body.appendChild(chatbotScript);
  }

  /* ──────────────────── Cookie Banner Logic ───────────────────────────── */

  function initCookieBanner() {
    var banner  = document.getElementById('cookieBanner');
    var accept  = document.getElementById('cookieAccept');
    var reject  = document.getElementById('cookieReject');
    if (!banner) return;

    var consent = localStorage.getItem('medos_cookie_consent');
    if (!consent) {
      /* Show after short delay so page paint finishes first */
      setTimeout(function() {
        banner.hidden = false;
        banner.classList.add('cookie-banner--visible');
      }, 800);
    }

    function dismiss(value) {
      localStorage.setItem('medos_cookie_consent', value);
      banner.classList.remove('cookie-banner--visible');
      banner.classList.add('cookie-banner--hiding');
      setTimeout(function() { banner.hidden = true; }, 400);
    }

    if (accept) accept.addEventListener('click', function() { dismiss('accepted'); });
    if (reject) reject.addEventListener('click', function() { dismiss('rejected'); });
  }

  /* ──────────────────── Nav behaviors ────────────────────────────────── */

  function initNav() {
    var header    = document.getElementById('site-header');
    var hamburger = document.getElementById('hamburger');
    var navLinks  = document.getElementById('nav-links');

    /* ── Scroll: glassmorphism toggle ── */
    function onScroll() {
      if (!header) return;
      header.classList.toggle('scrolled', window.scrollY > 60);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ── Hamburger ── */
    function openMenu() {
      navLinks.classList.add('open');
      hamburger.classList.add('active');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', function () {
        navLinks.classList.contains('open') ? closeMenu() : openMenu();
      });

      document.addEventListener('click', function (e) {
        if (navLinks.classList.contains('open') &&
            !navLinks.contains(e.target) &&
            e.target !== hamburger &&
            !hamburger.contains(e.target)) {
          closeMenu();
        }
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { closeMenu(); closeAllDropdowns(); }
      });

      navLinks.querySelectorAll('.nav-link:not(.nav-drop-toggle)').forEach(function (l) {
        l.addEventListener('click', closeMenu);
      });
    }

    /* ── Dropdown menus ── */
    var dropToggles = document.querySelectorAll('.nav-drop-toggle');

    function closeAllDropdowns() {
      dropToggles.forEach(function (btn) {
        btn.setAttribute('aria-expanded', 'false');
        var menu = btn.nextElementSibling;
        if (menu) menu.classList.remove('open');
        btn.closest('.nav-item').classList.remove('active');
      });
    }

    dropToggles.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = btn.getAttribute('aria-expanded') === 'true';
        closeAllDropdowns();
        if (!isOpen) {
          btn.setAttribute('aria-expanded', 'true');
          var menu = btn.nextElementSibling;
          if (menu) menu.classList.add('open');
          btn.closest('.nav-item').classList.add('active');
        }
      });
    });

    /* Close dropdowns on outside click */
    document.addEventListener('click', closeAllDropdowns);

    /* Desktop: hover to open dropdowns */
    document.querySelectorAll('.nav-item.has-dropdown').forEach(function (item) {
      var leaveTimer;

      item.addEventListener('mouseenter', function () {
        if (window.innerWidth < 1150) return;
        clearTimeout(leaveTimer);
        closeAllDropdowns();
        var btn  = item.querySelector('.nav-drop-toggle');
        var menu = item.querySelector('.nav-dropdown');
        if (btn)  btn.setAttribute('aria-expanded', 'true');
        if (menu) menu.classList.add('open');
        item.classList.add('active');
      });

      item.addEventListener('mouseleave', function () {
        if (window.innerWidth < 1150) return;
        leaveTimer = setTimeout(function () {
          var btn  = item.querySelector('.nav-drop-toggle');
          var menu = item.querySelector('.nav-dropdown');
          if (btn)  btn.setAttribute('aria-expanded', 'false');
          if (menu) menu.classList.remove('open');
          item.classList.remove('active');
        }, 150);
      });
    });

    /* ── Active nav link: mark current page ── */
    var page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .nav-dropdown a').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      var base = href.split('/').pop();
      if (base === page || (page === '' && base === 'index.html')) {
        a.classList.add('active');
      }
    });

    /* ── Lang switcher ── */
    var langBtn      = document.querySelector('.lang-btn');
    var langDropdown = document.querySelector('.lang-dropdown');

    if (langBtn && langDropdown) {
      langBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = langDropdown.classList.toggle('open');
        langBtn.setAttribute('aria-expanded', String(open));
      });

      document.addEventListener('click', function () {
        langDropdown.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
      });

      langDropdown.querySelectorAll('[data-set-lang]').forEach(function (a) {
        a.addEventListener('click', function (e) {
          e.preventDefault();
          var lang = a.dataset.setLang;
          if (window.MEDOS) window.MEDOS.setLang(lang);
          langDropdown.classList.remove('open');
          langBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    /* ── Smooth scroll for hash links ── */
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = link.getAttribute('href');
        if (href === '#') return;
        var target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        var hH = header ? header.offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.scrollY - hH - 12;
        window.scrollTo({ top: top, behavior: 'smooth' });
        closeMenu();
      });
    });
  }

  /* ──────────────────── Run on DOMContentLoaded ──────────────────────── */

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();
