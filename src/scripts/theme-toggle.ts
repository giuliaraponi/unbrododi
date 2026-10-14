type Theme = 'light' | 'dark';

const root = document.documentElement;
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

function activeTheme(): Theme {
  const explicit = root.dataset.theme;
  if (explicit === 'light' || explicit === 'dark') return explicit;
  return systemDark.matches ? 'dark' : 'light';
}

function sync(button: HTMLButtonElement): void {
  const theme = activeTheme();
  root.dataset.activeTheme = theme;
  const label = theme === 'dark' ? button.dataset.labelLight : button.dataset.labelDark;
  if (label) button.setAttribute('aria-label', label);
}

export function initThemeToggle(): void {
  const button = document.querySelector<HTMLButtonElement>('.theme-toggle');
  if (!button) return;

  sync(button);
  button.hidden = false;

  button.addEventListener('click', () => {
    const next: Theme = activeTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage unavailable: the choice applies to this page only.
    }
    sync(button);
  });

  systemDark.addEventListener('change', () => sync(button));
}
