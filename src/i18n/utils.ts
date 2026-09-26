import { ui, defaultLang } from './ui';

type Lang = keyof typeof ui;

export function useTranslations(lang: string) {
  const safeLang = (lang in ui ? lang : defaultLang) as Lang;
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[safeLang][key] ?? ui[defaultLang][key];
  };
}