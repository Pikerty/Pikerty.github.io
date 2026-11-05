// Language toggle (zh / en) + category filter
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

  // Category filter
  var chips = document.querySelectorAll('#filters .chip');
  var cards = document.querySelectorAll('[data-cat]');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      var f = chip.getAttribute('data-filter');
      cards.forEach(function (card) {
        card.style.display = (f === 'all' || card.getAttribute('data-cat') === f) ? '' : 'none';
      });
    });
  });
})();
