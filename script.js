document.addEventListener('DOMContentLoaded', function () {
  var candles = document.querySelector('.candles');
  if (!candles) return;

  var flame1 = document.querySelector('.flame');
  var flame2 = document.querySelector('.flame2');
  var flame3 = document.querySelector('.flame3');
  var text = document.querySelector('.text');

  var alreadyBlown = false;

  function blowCandles() {
    if (alreadyBlown) return;
    alreadyBlown = true;

    if (flame1) flame1.style.opacity = '0';
    if (flame2) flame2.style.opacity = '0';
    if (flame3) flame3.style.opacity = '0';

    if (text) {
      text.classList.add('visible');
      var link = document.getElementById('sorpresaLink');
      if (link) {
        link.focus();
      }
    }
  }

  candles.addEventListener('click', blowCandles);

  candles.tabIndex = 0;
  candles.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      blowCandles();
    }
  });
});