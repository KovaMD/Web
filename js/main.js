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
