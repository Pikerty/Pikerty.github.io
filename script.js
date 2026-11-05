// Pikerty Blog — language, theme, search, progress, share
// No external libraries: all of this file lives in the GitHub repo.
(function () {
  // --- Dark mode: saved choice wins, otherwise follow the system ---
  var themeBtn = document.getElementById('themeBtn');
  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('pikerty-theme', t); } catch (e) {}
    if (themeBtn) themeBtn.textContent = t === 'dark' ? '浅色模式' : '夜间模式';
  }
  var savedTheme = null;
  try { savedTheme = localStorage.getItem('pikerty-theme'); } catch (e) {}
  if (!savedTheme) {
    savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
  setTheme(savedTheme);
  if (themeBtn) themeBtn.addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });

  // --- Language toggle (zh / en) ---
  var btn = document.getElementById('langBtn');
  var current = 'zh';
  try { current = localStorage.getItem('pikerty-lang') || 'zh'; } catch (e) {}
  function apply(lang) {
    current = lang;
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    document.querySelectorAll('[data-zh]').forEach(function (el) {
      el.textContent = el.getAttribute(lang === 'en' ? 'data-en' : 'data-zh');
    });
    if (btn) btn.textContent = lang === 'en' ? '中文 / EN' : 'EN / 中文';
    try { localStorage.setItem('pikerty-lang', lang); } catch (e) {}
  }
  if (btn) btn.addEventListener('click', function () {
    apply(current === 'zh' ? 'en' : 'zh');
  });
  apply(current);

  // --- Search + category filter (homepage) ---
  var searchInput = document.getElementById('searchInput');
  var searchEmpty = document.getElementById('searchEmpty');
  var chips = document.querySelectorAll('#filters .chip');
  var cards = document.querySelectorAll('[data-cat]');
  var activeFilter = 'all';
  function applyFilters() {
    var q = searchInput ? searchInput.value.trim().toLowerCase() : '';
    var visible = 0;
    cards.forEach(function (card) {
      var catOk = activeFilter === 'all' || card.getAttribute('data-cat') === activeFilter;
      var textOk = !q || card.textContent.toLowerCase().indexOf(q) !== -1;
      var show = catOk && textOk;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    var featured = document.querySelector('.featured');
    if (featured) {
      var fOk = (activeFilter === 'all' || featured.getAttribute('data-cat') === activeFilter) &&
        (!q || featured.textContent.toLowerCase().indexOf(q) !== -1);
      featured.style.display = fOk ? '' : 'none';
      if (fOk) visible++;
    }
    if (searchEmpty) searchEmpty.hidden = visible !== 0;
  }
  if (searchInput) searchInput.addEventListener('input', applyFilters);
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      activeFilter = chip.getAttribute('data-filter');
      applyFilters();
    });
  });

  // --- Scroll reveal ---
  var revealEls = document.querySelectorAll('.featured, .card, .about, .archive, .section-title, .section-sub, .article h2, .article p, .article ul, .article .note');
  revealEls.forEach(function (el, i) {
    el.classList.add('reveal');
    el.setAttribute('data-delay', String(i % 4));
  });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // --- Reading progress + back to top ---
  var bar = document.getElementById('progressBar');
  var toTop = document.getElementById('toTop');
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    if (bar) bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    if (toTop) toTop.classList.toggle('show', h.scrollTop > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- Share / copy link (article pages) ---
  document.querySelectorAll('[data-copy-link]').forEach(function (b) {
    b.addEventListener('click', function () {
      var done = function () { b.textContent = '已复制 ✓'; setTimeout(function () { b.textContent = '复制链接'; }, 2000); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(location.href).then(done, done);
      } else { done(); }
    });
  });

  // --- Share links: fill in the current page URL ---
  document.querySelectorAll('.share-row a').forEach(function (a) {
    var u = encodeURIComponent(location.href);
    var t = encodeURIComponent(document.title);
    if (a.href.indexOf('x.com/intent/tweet') !== -1) a.href = 'https://x.com/intent/tweet?text=' + t + '&url=' + u;
    if (a.href.indexOf('t.me/share/url') !== -1) a.href = 'https://t.me/share/url?url=' + u + '&text=' + t;
  });

  // --- Page transition: fade out gently, then navigate (internal links only) ---
  document.querySelectorAll('a[href]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#' || a.target === '_blank') return;
      if (a.hostname && a.hostname !== location.hostname) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      e.preventDefault();
      document.body.classList.add('page-leaving');
      setTimeout(function () { location.href = href; }, 240);
    });
  });
})();
