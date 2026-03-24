import { ui } from './ui';

export const defaultLang = 'it' as const;
export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const segments = url.pathname.split('/');
  if (segments.includes('en')) return 'en';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui.it): string {
    const value = ui[lang][key];
    if (value !== undefined) return value;

    if (import.meta.env.DEV) {
      console.warn(`[i18n] Missing translation for key "${key}" in locale "${lang}", falling back to "${defaultLang}"`);
    }

    const fallback = ui[defaultLang][key];
    if (fallback !== undefined) return fallback;

    if (import.meta.env.DEV) {
      console.error(`[i18n] Translation key "${key}" not found in any locale`);
    }

    return key;
  };
}

export function getLocalePath(lang: Lang): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (lang === 'en') return `${base}/en/`;
  return `${base}/`;
}
