import { site } from '../site.config';

type Choice = 'granted' | 'denied';

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

const STORAGE_KEY = 'cookie-consent';
const GA_SCRIPT_BASE = 'https://www.googletagmanager.com/gtag/js';

let gaLoaded = false;

function readChoice(): Choice | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

function writeChoice(choice: Choice): void {
  try {
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Storage unavailable: the choice applies to this page only.
  }
}

function gtag(..._args: unknown[]): void {
  // gtag.js reads the arguments object itself, so it must be pushed as-is.
  window.dataLayer.push(arguments);
}

function loadAnalytics(id: string): void {
  if (!id || gaLoaded) return;
  gaLoaded = true;

  window.dataLayer = window.dataLayer || [];
  // Consent Mode v2: analytics is granted only because the visitor accepted;
  // advertising storage stays denied because the site runs no ads.
  gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  gtag('js', new Date());
  gtag('config', id);

  const script = document.createElement('script');
  script.async = true;
  script.src = `${GA_SCRIPT_BASE}?id=${encodeURIComponent(id)}`;
  document.head.append(script);
}

function applyChoice(choice: Choice): void {
  const id = site.analytics.gaMeasurementId;
  if (choice === 'granted') {
    if (gaLoaded) {
      gtag('consent', 'update', { analytics_storage: 'granted' });
    } else {
      loadAnalytics(id);
    }
    return;
  }
  if (gaLoaded) {
    gtag('consent', 'update', { analytics_storage: 'denied' });
  }
}

// The banner is fixed to the viewport bottom, so reserve its height at the end
// of the page; otherwise it covers the content there, including the manage button.
function reserveBannerSpace(banner: HTMLElement): void {
  document.body.style.paddingBlockEnd = banner.hidden ? '' : `${banner.offsetHeight}px`;
}

export function initConsent(): void {
  const banner = document.querySelector<HTMLElement>('[data-cookie-banner]');
  if (!banner) return;

  const accept = banner.querySelector<HTMLButtonElement>('[data-cookie-accept]');
  const reject = banner.querySelector<HTMLButtonElement>('[data-cookie-reject]');
  const manage = document.querySelector<HTMLButtonElement>('[data-cookie-manage]');

  new ResizeObserver(() => reserveBannerSpace(banner)).observe(banner);

  const saved = readChoice();
  if (saved) {
    applyChoice(saved);
  } else {
    banner.hidden = false;
  }

  const decide = (choice: Choice): void => {
    writeChoice(choice);
    applyChoice(choice);
    const hadFocus = banner.contains(document.activeElement);
    banner.hidden = true;
    if (hadFocus) manage?.focus();
  };

  accept?.addEventListener('click', () => decide('granted'));
  reject?.addEventListener('click', () => decide('denied'));

  manage?.addEventListener('click', () => {
    banner.hidden = false;
    accept?.focus();
  });
}
