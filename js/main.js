/* ═══════════════════════════════════════════════════════════════════════
   Medos Hotel — main.js
   Vanilla JS — no dependencies, no jQuery
   Modules: photo slider (touch+mouse+keyboard), scroll reveal
   Note: header, footer year, hamburger, lang switcher, smooth scroll → layout.js
   ═══════════════════════════════════════════════════════════════════════ */

'use strict';

/* ──────────────────── Helpers ──────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ──────────────────── 1. Photo slider ──────────────────────────────── */
(function initSlider() {
  const wrap     = $('.slider-wrap');
  const track    = $('#sliderTrack');
  const prevBtn  = $('#sliderPrev');
  const nextBtn  = $('#sliderNext');
  const dotsWrap = $('#sliderDots');
  if (!track || !prevBtn || !nextBtn) return;

  const items = $$('.slider-item', track);
  const total = items.length;
  if (total === 0) return;

  let current   = 0;
  let autoTimer = null;

  /* Build dot indicators */
  if (dotsWrap) {
    items.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `${i + 1}. fotoğrafa git`);
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
  }

  function updateDots() {
    if (!dotsWrap) return;
    $$('.slider-dot', dotsWrap).forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  const fillEl    = document.getElementById('sliderProgressFill');
  const counterEl = document.getElementById('sliderCounter');

  function goTo(index) {
    current = ((index % total) + total) % total; // wrap around
    track.style.transform = `translateX(-${current * 100}%)`;
    updateDots();

    if (fillEl)    fillEl.style.width = ((current + 1) / total * 100) + '%';
    if (counterEl) counterEl.textContent = (current + 1) + ' / ' + total;

    items.forEach((item, i) => {
      item.setAttribute('aria-hidden', i !== current ? 'true' : 'false');
    });
  }

  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 4500);
  }

  function stopAuto() {
    clearInterval(autoTimer);
  }

  prevBtn.addEventListener('click', () => { goTo(current - 1); startAuto(); });
  nextBtn.addEventListener('click', () => { goTo(current + 1); startAuto(); });

  if (wrap) {
    wrap.addEventListener('mouseenter', stopAuto);
    wrap.addEventListener('mouseleave', startAuto);
    wrap.addEventListener('focusin',    stopAuto);
    wrap.addEventListener('focusout',   startAuto);
  }

  /* ── Touch / swipe support ── */
  let touchStartX = 0;
  let touchStartY = 0;
  let isDragging  = false;

  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isDragging  = false;
  }, { passive: true });

  track.addEventListener('touchmove', e => {
    const dX = Math.abs(e.touches[0].clientX - touchStartX);
    const dY = Math.abs(e.touches[0].clientY - touchStartY);
    if (dX > dY && dX > 8) isDragging = true;
  }, { passive: true });

  track.addEventListener('touchend', e => {
    if (!isDragging) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      goTo(current + (diff > 0 ? 1 : -1));
      startAuto();
    }
  });

  /* ── Keyboard navigation ── */
  if (wrap) {
    wrap.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft')  { goTo(current - 1); startAuto(); }
      if (e.key === 'ArrowRight') { goTo(current + 1); startAuto(); }
    });
  }

  goTo(0);
  startAuto();

  document.addEventListener('visibilitychange', () => {
    document.hidden ? stopAuto() : startAuto();
  });
})();

/* ──────────────────── 2. Google Reviews (Places API) ───────────────── */
(function initReviews() {
  /* ─── CONFIG ─────────────────────────────────────────────────────────
   * Google Cloud Console → Maps JavaScript API + Places API etkinleştir
   * API key kısıtı: https://www.medoshotel.com/*
   * ─────────────────────────────────────────────────────────────────── */
  const MAPS_API_KEY = 'AIzaSyBPkO5RZGZ6EpwtHUIAe7NmGlJdX1Va5gY';
  const PLACE_ID     = 'ChIJpWBoswKhvhQRN3fgRTWgu_s';
  /* ─────────────────────────────────────────────────────────────────── */

  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;

  const lang = (window.MEDOS && window.MEDOS.lang) || 'tr';

  function fetchDetails(svc, placeId) {
    svc.getDetails(
      { placeId: placeId, fields: ['reviews', 'rating', 'user_ratings_total', 'url'], language: lang },
      function (place, status) {
        if (status !== google.maps.places.PlacesServiceStatus.OK || !place.reviews) return;

        const reviews = place.reviews
          .filter(r => r.rating >= 4)
          .sort((a, b) => b.time - a.time)
          .slice(0, 5);

        if (!reviews.length) return;

        /* Overall score */
        const overall = document.getElementById('reviewsOverall');
        if (overall) {
          const countLabel = (window.MEDOS && window.MEDOS.t('reviews.count')) || 'Google yorumu';
          overall.hidden = false;
          overall.innerHTML =
            '<span class="review-stars">' + '★'.repeat(Math.round(place.rating)) + '</span>' +
            '<strong class="reviews-score">' + place.rating.toFixed(1) + '</strong>' +
            '<span class="reviews-count">(' + place.user_ratings_total.toLocaleString('tr-TR') + ' ' + countLabel + ')</span>';
        }

        /* "Tüm Yorumlar" link */
        const link = document.getElementById('reviewsAllLink');
        if (link && place.url) link.href = place.url;
        const cta = document.getElementById('reviewsCta');
        if (cta) cta.hidden = false;

        /* Google icon (G harfi temsili) */
        const gIcon = '<svg class="review-google-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">' +
          '<path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>' +
          '<path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>' +
          '<path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>' +
          '<path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>' +
          '</svg>';

        /* Sanitize helper — XSS koruması */
        function esc(str) {
          return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
        }

        /* Cards */
        grid.innerHTML = reviews.map(function (r) {
          const rawText = r.text.length > 240 ? r.text.slice(0, 240).trimEnd() + '…' : r.text;
          const text    = esc(rawText);
          const name    = esc(r.author_name);
          const date    = esc(r.relative_time_description);
          const stars   = '★'.repeat(r.rating) + '<span class="review-stars-empty">' + '★'.repeat(5 - r.rating) + '</span>';
          const avatar  = r.profile_photo_url
            ? '<img class="review-avatar" src="' + esc(r.profile_photo_url) + '" alt="' + name + '" width="40" height="40" loading="lazy">'
            : '<div class="review-avatar review-avatar--fallback">' + esc(r.author_name.charAt(0)) + '</div>';
          return '<article class="review-card">' +
            '<header class="review-header">' +
              avatar +
              '<div class="review-meta"><div class="review-author">' + name + '</div>' +
              '<div class="review-date">' + date + '</div></div>' +
              gIcon +
            '</header>' +
            '<div class="review-stars">' + stars + '</div>' +
            '<p class="review-text">' + text + '</p>' +
            '</article>';
        }).join('');
      }
    );
  }

  window._medosReviewsCb = function () {
    const svc = new google.maps.places.PlacesService(document.createElement('div'));
    fetchDetails(svc, PLACE_ID);
  };

  const s = document.createElement('script');
  s.src = 'https://maps.googleapis.com/maps/api/js?key=' + MAPS_API_KEY + '&libraries=places&callback=_medosReviewsCb';
  s.async = true;
  s.defer = true;
  document.head.appendChild(s);
})();

/* ──────────────────── 3. Reveal on scroll (IntersectionObserver) ────── */
(function initReveal() {
  if (!('IntersectionObserver' in window)) return;

  const elements = $$('.room-card, .service-card, .attraction-card, .about-img, .stat');

  elements.forEach((el, i) => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.55s ease ${(i % 4) * 80}ms, transform 0.55s ease ${(i % 4) * 80}ms`;
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
})();
