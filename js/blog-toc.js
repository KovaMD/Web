(function() {
  var toc = document.querySelector('.post-toc');
  if (!toc) return;

  var links = Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'));
  var headings = links
    .map(function(link) { return document.getElementById(link.getAttribute('href').slice(1)); })
    .filter(Boolean);

  if (!headings.length || !('IntersectionObserver' in window)) return;

  function setActive(id) {
    links.forEach(function(link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + id);
    });
  }

  var observer = new IntersectionObserver(function(entries) {
    var visible = entries.filter(function(e) { return e.isIntersecting; });
    if (!visible.length) return;
    visible.sort(function(a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });
    setActive(visible[0].target.id);
  }, { rootMargin: '-90px 0px -70% 0px', threshold: 0 });

  headings.forEach(function(h) { observer.observe(h); });
})();
