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

  function setActive(section) {
    navLinks.forEach(function (l) { l.classList.remove('active'); });
    var link = linkFor.get(section);
    if (link) link.classList.add('active');
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) visible.add(entry.target);
      else visible.delete(entry.target);
    });

    var current = null;
    visible.forEach(function (s) {
      if (!current || s.getBoundingClientRect().top < current.getBoundingClientRect().top) current = s;
    });
    if (current) setActive(current);
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(function (s) { observer.observe(s); });

  // #contact dropped its own forced full-viewport height so it shares one scroll
  // stop with the footer — it's often too short to ever cross the observer's
  // center band, so the last nav link never gets marked active at the bottom
  // of the page without this explicit check.
  var lastSection = sections[sections.length - 1];
  var ticking = false;
  function checkBottom() {
    ticking = false;
    var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom && lastSection) setActive(lastSection);
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(checkBottom); }
  }, { passive: true });
})();
