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

  /* ---------- 5. FAQ accordion --------------------------------------------
     One line of state; the open/closed height is animated in CSS by moving
     grid-template-rows from 0fr to 1fr, so nothing has to be measured here. */
  (function faq() {
    document.querySelectorAll('.faq-item').forEach(function (item) {
      var q = item.querySelector('.faq-question');
      if (!q) return;
      q.addEventListener('click', function () { item.classList.toggle('open'); });
    });
  })();

  /* ---------- 6. Table of contents: timeline rail -------------------------
     The rail fills as the article is read: the fill travels from the current
     section's dot to the next one in step with how far through that section
     the reader is, and every dot it passes stays lit. Deliberately not an
     IntersectionObserver — with long sections nothing intersects a "current"
     band for most of the scroll. */
  (function tocTimeline() {
    var list = document.querySelector('.art-toc-list');
    if (!list) return;

    var links = list.querySelectorAll('a[href^="#"]');
    if (!links.length) return;

    var items = [];
    links.forEach(function (link) {
      var target = document.getElementById(link.getAttribute('href').slice(1));
      if (target) items.push({ link: link, target: target, y: 0 });
    });
    if (!items.length) return;

    var fill = document.createElement('div');
    fill.className = 'art-toc-progress';
    list.appendChild(fill);

    var main = document.querySelector('.art-main');
    var dotCenter = 0;

    /* Dot centres, measured from the list's top. The dot is 8px, centred on
       the link's first line box, which is what the CSS `top` does too. */
    function measure() {
      var listTop = list.getBoundingClientRect().top;
      items.forEach(function (item) {
        var r = item.link.getBoundingClientRect();
        var lh = parseFloat(getComputedStyle(item.link).lineHeight) || 18;
        item.y = (r.top - listTop) + lh / 2;
      });
      dotCenter = items[0].y;
      list.style.setProperty('--art-toc-dot-center', dotCenter + 'px');
    }

    function onScroll() {
      var line = window.innerHeight * 0.3;
      var current = -1;

      for (var i = 0; i < items.length; i++) {
        if (items[i].target.getBoundingClientRect().top <= line) current = i;
      }

      var height;
      if (current < 0) {
        height = 0;
      } else {
        var start = items[current].target.getBoundingClientRect().top;
        var next = items[current + 1];
        var end = next
          ? next.target.getBoundingClientRect().top
          : (main ? main.getBoundingClientRect().bottom : start + window.innerHeight);
        var span = end - start;
        var progress = span > 0 ? Math.min(Math.max((line - start) / span, 0), 1) : 1;
        var from = items[current].y;
        var to = next ? next.y : from;
        height = from + (to - from) * progress;
      }

      fill.style.height = Math.max(0, height - dotCenter) + 'px';

      items.forEach(function (item, i) {
        item.link.classList.toggle('is-active', height >= item.y - 1);
        item.link.classList.toggle('is-current', i === current);
      });
    }

    function refresh() { measure(); onScroll(); }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', refresh);
    if (window.ResizeObserver && main) new ResizeObserver(refresh).observe(main);
    refresh();
  })();
})();
