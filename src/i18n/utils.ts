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
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLocalePath(lang: Lang): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (lang === 'en') return `${base}/en/`;
  return `${base}/`;
}
