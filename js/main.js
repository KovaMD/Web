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
const RELEASE_TAG  = 'v0.1.2-alpha.1';
const RELEASE_BASE = `https://github.com/KovaMD/Kova/releases/download/${RELEASE_TAG}`;

const DOWNLOAD = {
  mac:   { url: `${RELEASE_BASE}/Kova_0.1.2_universal.dmg`,  label: 'Download for macOS'   },
  win:   { url: `${RELEASE_BASE}/Kova_0.1.2_x64_en-US.msi`,  label: 'Download for Windows' },
  linux: { url: `${RELEASE_BASE}/Kova_0.1.2_amd64.AppImage`, label: 'Download for Linux'   },
};

function detectOS() {
  const p  = (navigator.userAgentData?.platform || navigator.platform || '').toLowerCase();
  const ua = navigator.userAgent;
  if (/mac/.test(p)   || /macintosh/i.test(ua)) return 'mac';
  if (/win/.test(p)   || /windows/i.test(ua))   return 'win';
  if (/linux/.test(p) || /linux/i.test(ua))      return 'linux';
  return null;
}

(function initDownloads() {
  const os    = detectOS();
  const asset = os ? DOWNLOAD[os] : null;
  if (!asset) return;

  document.querySelectorAll('a.btn-primary[href*="releases"]').forEach(btn => {
    btn.href = asset.url;

    // Update the visible label — skip the compact nav "Download" button
    btn.childNodes.forEach(node => {
      if (node.nodeType !== Node.TEXT_NODE) return;
      const text = node.textContent.trim();
      if (!text || text === 'Download') return;
      const leadingWhitespace = node.textContent.match(/^\s*/)[0];
      node.textContent = leadingWhitespace + asset.label;
    });
  });
})();
