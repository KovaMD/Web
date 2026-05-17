/* ─── Theme ───────────────────────────────────────────── */
const STORAGE_KEY = 'kova-theme';

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  if (theme) {
    document.documentElement.setAttribute('data-theme', theme);
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

document.getElementById('theme-toggle').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || getSystemTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  if (next === getSystemTheme()) {
    localStorage.removeItem(STORAGE_KEY);
    applyTheme(null);
  } else {
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }
});

/* ─── Nav scroll state ────────────────────────────────── */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ─── OS-targeted downloads ───────────────────────────── */
const RELEASES_PAGE = 'https://github.com/KovaMD/Kova/releases/latest';
const RELEASES_API  = 'https://api.github.com/repos/KovaMD/Kova/releases/latest';

const OS_ASSET = {
  mac:   { ext: '.dmg',      label: 'Download for macOS'   },
  win:   { ext: '.msi',      label: 'Download for Windows' },
  linux: { ext: '.AppImage', label: 'Download for Linux'   },
};

function detectOS() {
  const p  = (navigator.userAgentData?.platform || navigator.platform || '').toLowerCase();
  const ua = navigator.userAgent;
  if (/mac/.test(p)   || /macintosh/i.test(ua)) return 'mac';
  if (/win/.test(p)   || /windows/i.test(ua))   return 'win';
  if (/linux/.test(p) || /linux/i.test(ua))      return 'linux';
  return null;
}

function applyDownloadButtons(url, label) {
  document.querySelectorAll('a.btn-primary[href*="releases"]').forEach(btn => {
    btn.href = url;

    // Update the visible label — skip the compact nav "Download" button
    btn.childNodes.forEach(node => {
      if (node.nodeType !== Node.TEXT_NODE) return;
      const text = node.textContent.trim();
      if (!text || text === 'Download') return;
      const leadingWhitespace = node.textContent.match(/^\s*/)[0];
      node.textContent = leadingWhitespace + label;
    });
  });
}

(async function initDownloads() {
  const os = detectOS();
  if (!os) return;

  const { ext, label } = OS_ASSET[os];

  try {
    const res  = await fetch(RELEASES_API);
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    const asset = data.assets?.find(a => a.name.endsWith(ext));
    applyDownloadButtons(asset?.browser_download_url ?? RELEASES_PAGE, label);
  } catch {
    applyDownloadButtons(RELEASES_PAGE, label);
  }
})();

/* ─── Lightbox ────────────────────────────────────────── */
(function initLightbox() {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Image preview');

  const prevBtn = document.createElement('button');
  prevBtn.className = 'lightbox-nav lightbox-prev';
  prevBtn.setAttribute('aria-label', 'Previous image');
  prevBtn.innerHTML = '&#8249;';

  const img = document.createElement('img');
  img.alt = '';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'lightbox-nav lightbox-next';
  nextBtn.setAttribute('aria-label', 'Next image');
  nextBtn.innerHTML = '&#8250;';

  const counter = document.createElement('span');
  counter.className = 'lightbox-counter';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'lightbox-close';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.innerHTML = '&#215;';
  closeBtn.addEventListener('click', close);

  overlay.append(prevBtn, img, nextBtn, counter, closeBtn);
  document.body.appendChild(overlay);

  let gallery = [];
  let current = 0;

  function visibleImgs(scope) {
    return Array.from(scope.querySelectorAll('.showcase-shot img, .hero-screenshot img'))
      .filter(el => el.offsetParent !== null);
  }

  function show(index) {
    current = (index + gallery.length) % gallery.length;
    img.src = gallery[current].src;
    img.alt = gallery[current].alt || '';
    const multi = gallery.length > 1;
    counter.textContent = multi ? `${current + 1} / ${gallery.length}` : '';
    prevBtn.style.visibility = multi ? 'visible' : 'hidden';
    nextBtn.style.visibility = multi ? 'visible' : 'hidden';
  }

  function open(el) {
    const section = el.closest('section') || document;
    gallery = visibleImgs(section);
    show(gallery.indexOf(el));
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  prevBtn.addEventListener('click', () => show(current - 1));
  nextBtn.addEventListener('click', () => show(current + 1));

  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('is-open')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });

  document.querySelectorAll('.showcase-shot img, .hero-screenshot img').forEach(el => {
    el.addEventListener('click', () => open(el));
  });
})();
