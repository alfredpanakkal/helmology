// Helmology theme picker — light / dark / night watch.
// Mirrors the Helm.Warning behaviour: stored in localStorage, defaults to system preference.
(function () {
  var KEY = 'helmology-theme';
  var root = document.documentElement;

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    document.querySelectorAll('[data-theme-set]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-theme-set') === theme));
    });
  }

  function init() {
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) { /* private mode */ }
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    apply(saved === 'light' || saved === 'dark' || saved === 'night' ? saved : (prefersDark ? 'dark' : 'light'));

    document.querySelectorAll('[data-theme-set]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var theme = btn.getAttribute('data-theme-set');
        apply(theme);
        try { localStorage.setItem(KEY, theme); } catch (e) { /* private mode */ }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
