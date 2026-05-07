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

// Toggle between light/dark; if the result matches the system preference,
// drop the override so the page tracks the system naturally again.
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

// Elevate nav background once user scrolls away from the top
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });
