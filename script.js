(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function label(theme) {
    return theme === 'dark' ? '◑ dark' : '◐ light';
  }

  function sync() {
    var current = root.getAttribute('data-theme') || 'light';
    btn.querySelector('.glyph').textContent = current === 'dark' ? '◑' : '◐';
    btn.querySelector('.txt').textContent = current;
  }

  sync();

  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    sync();
  });
})();

(function () {
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('nav.top a[href^="#"]'));
  if (!navLinks.length || !('IntersectionObserver' in window)) return;

  var linkFor = new Map();
  var sections = navLinks.map(function (a) {
    var s = document.querySelector(a.getAttribute('href'));
    if (s) linkFor.set(s, a);
    return s;
  }).filter(Boolean);

  var visible = new Set();

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) visible.add(entry.target);
      else visible.delete(entry.target);
    });

    var current = null;
    visible.forEach(function (s) {
      if (!current || s.getBoundingClientRect().top < current.getBoundingClientRect().top) current = s;
    });
    if (!current) return;

    navLinks.forEach(function (l) { l.classList.remove('active'); });
    linkFor.get(current).classList.add('active');
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(function (s) { observer.observe(s); });
})();
