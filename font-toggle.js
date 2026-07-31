// Shared logic for the "HP" heading-font toggle (Instrument Serif —
// https://fonts.google.com/specimen/Instrument+Serif — applied to headings
// only, never body copy/buttons/nav). No UI of its own: each page wires a
// checkbox inside its existing settings panel (site-settings-panel /
// header-settings-panel, or a minimal one on pages without any other
// toggles) to window.PHFontToggle. State persists across pages via
// localStorage, so the setting survives navigation.
//
// Per-page wiring pattern:
//   var checkbox = document.getElementById('toggleFontSerif');
//   checkbox.checked = window.PHFontToggle.isActive();
//   checkbox.addEventListener('change', function () {
//     window.PHFontToggle.set(checkbox.checked);
//   });

(function () {
  var STORAGE_KEY = 'ph-font-toggle';
  var FONT_HREF = 'https://fonts.googleapis.com/css2?family=Instrument+Serif&display=swap';
  var active = localStorage.getItem(STORAGE_KEY) === '1';

  function loadInstrumentSerif() {
    if (document.getElementById('instrument-serif-font')) return;
    var link = document.createElement('link');
    link.id = 'instrument-serif-font';
    link.rel = 'stylesheet';
    link.href = FONT_HREF;
    document.head.appendChild(link);
  }

  function apply(isActive) {
    document.documentElement.classList.toggle('font-toggle-serif', isActive);
  }

  if (active) {
    loadInstrumentSerif();
    apply(true);
  }

  window.PHFontToggle = {
    isActive: function () {
      return active;
    },
    set: function (nextActive) {
      active = nextActive;
      if (active) loadInstrumentSerif();
      apply(active);
      localStorage.setItem(STORAGE_KEY, active ? '1' : '0');
    }
  };
})();
