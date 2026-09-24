/* ============================================================================
   ARTICLE TEMPLATE — shared page behaviour for blog / inspiration / case study.

   Replaces the inline <script> block those pages used to carry:
     1. sticky-bar pinning (identical copy on every page in the repo)
     2. .reveal scroll-in (identical copy on every page in the repo)
     3. table-of-contents scroll-spy (new, article-only)

   Every part no-ops when its markup is absent, so a page without a TOC just
   gets 1 + 2. Load it after nav-header.js, at the end of <body>.
   ========================================================================= */

(function () {
  'use strict';

  /* ---------- 1. Sticky bar ------------------------------------------------
     The bar is always rendered and positioned over the real .nav-row1, so it
     can fade into a pinned pill on scroll. See CLAUDE.md for the
     pointer-events trap that goes with it. */
  (function stickyBar() {
    var navRow1 = document.querySelector('.nav-row1');
    var bar = document.getElementById('stickyBar');
    if (!navRow1 || !bar) return;

    function onScroll() {
      var rect = navRow1.getBoundingClientRect();
      bar.classList.toggle('is-pinned', rect.bottom <= 0);

      var minTop = 12;
      var naturalTop = rect.top + rect.height / 2 - bar.offsetHeight / 2;
      bar.style.top = Math.max(minTop, naturalTop) + 'px';
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
  })();

  /* ---------- 2. Scroll reveal --------------------------------------------- */
  (function reveal() {
    var targets = document.querySelectorAll('.reveal');
    if (!targets.length) return;

    /* threshold 0, NOT 0.1: a threshold in percent is unreachable once the
       element is taller than 10x the viewport, so a long article body would
       never reveal and stayed at opacity 0 forever (found 2026-09-24 on
       blog-board-game-packaging.html: .art-main was 9961px, 10% of it = 996px
       against a 900px viewport). rootMargin delays it until the element is
       properly on screen, which is what the percentage was there for. */
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -80px 0px' });

    targets.forEach(function (el) { observer.observe(el); });
  })();

  /* ---------- 3. Horizontal card carousels ---------------------------------
     Same behaviour as the marketing pages: arrows appear only when the track
     actually overflows, and each one hides at its end of the scroll. Works on
     any `.scroll-carousel > .nav.prev + <track> + .nav.next`. */
  (function carousels() {
    document.querySelectorAll('.scroll-carousel').forEach(function (carousel) {
      var prevBtn = carousel.querySelector('.scroll-carousel-nav.prev');
      var nextBtn = carousel.querySelector('.scroll-carousel-nav.next');
      var track = null;

      for (var i = 0; i < carousel.children.length; i++) {
        var child = carousel.children[i];
        if (child !== prevBtn && child !== nextBtn) { track = child; break; }
      }
      if (!prevBtn || !nextBtn || !track) return;

      function updateNavState() {
        var maxScroll = track.scrollWidth - track.clientWidth;
        prevBtn.disabled = track.scrollLeft <= 0;
        nextBtn.disabled = track.scrollLeft >= maxScroll - 1;
      }

      function checkOverflow() {
        carousel.classList.toggle('has-overflow', track.scrollWidth > track.clientWidth + 1);
        updateNavState();
      }

      prevBtn.addEventListener('click', function () {
        track.scrollBy({ left: -track.clientWidth * 0.8, behavior: 'smooth' });
      });
      nextBtn.addEventListener('click', function () {
        track.scrollBy({ left: track.clientWidth * 0.8, behavior: 'smooth' });
      });

      track.addEventListener('scroll', updateNavState);
      window.addEventListener('resize', checkOverflow);

      if (window.ResizeObserver) new ResizeObserver(checkOverflow).observe(track);
      else checkOverflow();
    });
  })();

  /* ---------- 4. Editor banner: load the recording only when needed -------
     The mock sits at the very bottom of a long article and its recording is
     ~9 MB, so the <video> ships without a src. It gets one — and starts the
     breathing animation — once the panel is one screen away. */
  (function editorBanner() {
    var banner = document.querySelector('.art-editor-banner');
    if (!banner) return;
    var video = banner.querySelector('video[data-src]');

    function start() {
      if (video && !video.src) {
        video.src = video.getAttribute('data-src');
        var play = video.play();
        if (play && play.catch) play.catch(function () {});
      }
      banner.classList.add('is-settled');
    }

    if (!('IntersectionObserver' in window)) { start(); return; }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { start(); observer.unobserve(banner); }
      });
    }, { threshold: 0, rootMargin: '0px 0px 100% 0px' });

    observer.observe(banner);
  })();

  /* ---------- 5. Table-of-contents scroll-spy ------------------------------
     Marks the TOC link whose section is currently being read. Deliberately
     not an IntersectionObserver: with long sections nothing intersects the
     "current" band for most of the scroll, so we just pick the last heading
     above the reading line. */
  (function tocSpy() {
    var links = document.querySelectorAll('.art-toc-list a[href^="#"]');
    if (!links.length) return;

    var sections = [];
    links.forEach(function (link) {
      var el = document.getElementById(link.getAttribute('href').slice(1));
      if (el) sections.push({ link: link, el: el });
    });
    if (!sections.length) return;

    var current = null;

    function onScroll() {
      var line = window.innerHeight * 0.3;
      var found = sections[0];

      for (var i = 0; i < sections.length; i++) {
        if (sections[i].el.getBoundingClientRect().top <= line) found = sections[i];
      }

      if (found === current) return;
      if (current) current.link.classList.remove('is-active');
      found.link.classList.add('is-active');
      current = found;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
  })();
})();
