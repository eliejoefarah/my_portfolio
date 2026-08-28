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
