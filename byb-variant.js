// Which "Build your box" a visitor lands on, chosen from the gear panel in
// the bottom-right corner. Two drafts of the same job:
//
//   classic      -> build-your-box.html            step-by-step configurator
//   construction -> build-your-construction.html   listing of die-cut blanks
//
// The choice is a page-customization setting, not navigation, so it does not
// live in the URL. It rewrites every link that points at either draft, which
// means a page only has to link to build-your-box.html and this redirects it.
// Shared rather than copied per page, same reasoning as nav-header.js.
(function () {
  'use strict';

  var KEY = 'bybVariant';
  var HREF = {
    classic: 'build-your-box.html',
    construction: 'build-your-construction.html'
  };

  function current() {
    return localStorage.getItem(KEY) === 'construction' ? 'construction' : 'classic';
  }

  function here() {
    return location.pathname.split('/').pop();
  }

  // On a marketing page a link to build-your-box.html means "the entry point
  // to Build your box", and the setting decides which draft that is. Inside a
  // draft it means something else entirely -- a construction card linking to
  // build-your-box.html means "open the editor on this construction" -- so the
  // drafts are left alone. Rewriting there sent all 64 cards back to the
  // listing they were already on.
  function isDraft() {
    var p = here();
    return p === HREF.classic || p === HREF.construction;
  }

  function retarget(variant) {
    if (isDraft()) return;
    var links = document.querySelectorAll('a[href="' + HREF.classic + '"], a[href="' + HREF.construction + '"]');
    Array.prototype.forEach.call(links, function (a) {
      a.setAttribute('href', HREF[variant]);
    });
  }

  function mount() {
    retarget(current());

    var sw = document.getElementById('bybVariantSwitch');
    if (!sw) return;

    var indicator = document.getElementById('bybVariantIndicator');
    var options = sw.querySelectorAll('.toggle-option');

    function move(el) {
      if (!indicator) return;
      indicator.style.width = el.offsetWidth + 'px';
      /* offsetLeft already counts .toggle-switch's own 4px of tray
         padding, and .toggle-indicator sits at left: 0 -- subtracting it
         again pulled the pill 4px left of its tab, so the gap on the left
         of the strip looked tighter than the one on the right. Every other
         switch in the repo passes offsetLeft straight through. */
      indicator.style.transform = 'translateX(' + el.offsetLeft + 'px)';
    }

    function select(variant, navigate) {
      Array.prototype.forEach.call(options, function (o) {
        var on = o.dataset.variant === variant;
        o.classList.toggle('active', on);
        if (on) move(o);
      });
      localStorage.setItem(KEY, variant);
      retarget(variant);

      // On the two drafts themselves the switch IS the navigation -- staying
      // put would leave the panel claiming a variant the page isn't.
      if (navigate && isDraft() && here() !== HREF[variant]) {
        location.href = HREF[variant];
      }
    }

    sw.addEventListener('click', function (e) {
      var btn = e.target.closest('.toggle-option');
      if (btn) select(btn.dataset.variant, true);
    });

    // A page that IS one of the drafts reports itself, so opening
    // build-your-box.html directly doesn't show "Constructions" selected.
    var page = here();
    var shown = page === HREF.construction ? 'construction' : page === HREF.classic ? 'classic' : current();
    select(shown, false);

    // Measured geometry, so it has to wait for ABC Favorit to swap in.
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        var active = sw.querySelector('.toggle-option.active');
        if (active) move(active);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
