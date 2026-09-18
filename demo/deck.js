(function () {
  var slides = Array.prototype.slice.call(document.querySelectorAll('.kova-deck-slide'));
  var frame = document.querySelector('.kova-deck-frame');
  var counter = document.getElementById('kova-counter');
  var deck = document.getElementById('kova-deck');
  var slideW = 960;
  var slideH = 540;
  var slideSteps = [[],[1,2,3,4],[],[],[],[],[],[],[],[],[],[],[],[]];
  var i = 0;
  var step = 0;
  function fit() {
    if (!frame) return;
    var pad = 24;
    var sx = (window.innerWidth - pad) / slideW;
    var sy = (window.innerHeight - pad) / slideH;
    var s = Math.max(0.05, Math.min(sx, sy));
    var frames = document.querySelectorAll('.kova-deck-frame');
    for (var f = 0; f < frames.length; f++) {
      frames[f].style.transform = 'scale(' + s + ')';
    }
  }
  // Mirrors usePresentationNav's step-before-slide logic exactly. Slide HTML
  // is always cloned fully revealed (see slideSteps' doc comment above) — this
  // just toggles the same sl-step-item--pending class the live app uses,
  // driven by each element's own data-step attribute.
  function applyStep() {
    var values = slideSteps[i] || [];
    var threshold = step > 0 ? values[step - 1] : -Infinity;
    var current = slides[i];
    if (!current) return;
    var stepped = current.querySelectorAll('[data-step]');
    for (var k = 0; k < stepped.length; k++) {
      var v = Number(stepped[k].getAttribute('data-step'));
      stepped[k].classList.toggle('sl-step-item--pending', v > threshold);
    }
  }
  function show(n, s) {
    if (!slides.length) return;
    i = Math.max(0, Math.min(slides.length - 1, n));
    step = s || 0;
    for (var j = 0; j < slides.length; j++) {
      var on = j === i;
      slides[j].classList.toggle('is-active', on);
      slides[j].setAttribute('aria-hidden', on ? 'false' : 'true');
    }
    if (counter) counter.textContent = (i + 1) + ' / ' + slides.length;
    applyStep();
  }
  function next() {
    var count = (slideSteps[i] || []).length;
    if (step < count) { step++; applyStep(); return; }
    show(i + 1, 0);
  }
  function prev() {
    if (step > 0) { step--; applyStep(); return; }
    show(i - 1, (slideSteps[i - 1] || []).length);
  }
  document.addEventListener('keydown', function (e) {
    var t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault(); next();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'Backspace') {
      e.preventDefault(); prev();
    } else if (e.key === 'Home') {
      e.preventDefault(); show(0, 0);
    } else if (e.key === 'End') {
      e.preventDefault(); show(slides.length - 1, 0);
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      if (!document.fullscreenElement) {
        (document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen || function () {}).call(document.documentElement);
      } else {
        (document.exitFullscreen || document.webkitExitFullscreen || function () {}).call(document);
      }
    }
  });
  if (deck) {
    deck.addEventListener('click', function (e) {
      if (e.target.closest('a, button, video, audio, input, textarea, select, label')) return;
      if (e.clientX >= window.innerWidth / 2) next();
      else prev();
    });
  }
  window.addEventListener('resize', fit);
  fit();
  show(0);
})();
