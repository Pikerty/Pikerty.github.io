// Language toggle (zh / en) + category filter + smooth motion
// No external libraries: all of this file lives in the GitHub repo.
(function () {
  var btn = document.getElementById('langBtn');
  var current = localStorage.getItem('pikerty-lang') || 'zh';
  function apply(lang) {
    current = lang;
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    document.querySelectorAll('[data-zh]').forEach(function (el) {
      el.textContent = el.getAttribute(lang === 'en' ? 'data-en' : 'data-zh');
    });
    if (btn) btn.textContent = lang === 'en' ? '中文 / EN' : 'EN / 中文';
    localStorage.setItem('pikerty-lang', lang);
  }
  if (btn) btn.addEventListener('click', function () {
    apply(current === 'zh' ? 'en' : 'zh');
  });
  apply(current);

  // Category filter (homepage only)
  var chips = document.querySelectorAll('#filters .chip');
  var cards = document.querySelectorAll('[data-cat]');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      var f = chip.getAttribute('data-filter');
      cards.forEach(function (card) {
        var show = f === 'all' || card.getAttribute('data-cat') === f;
        card.style.display = show ? '' : 'none';
        if (show) {
          card.classList.remove('in');
          requestAnimationFrame(function () { card.classList.add('in'); });
        }
      });
    });
  });

  // Scroll reveal: fade + rise as sections enter the viewport
  var revealEls = document.querySelectorAll('.featured, .card, .about, .section-title, .section-sub, .article h2, .article p, .article ul, .article .note');
  revealEls.forEach(function (el, i) {
    el.classList.add('reveal');
    el.setAttribute('data-delay', String(i % 4));
  });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // Page transition: fade out gently, then navigate (internal links only)
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
