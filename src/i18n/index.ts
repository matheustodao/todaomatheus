import enLanguage from '@public/locales/en.json';
import ptBRLanguage from '@public/locales/pt-br.json';
import { ITranslation } from '@type/translation';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

interface IResources {
  [key: string]: {
    translation: ITranslation
  },
}

export const resources: IResources = {
  en: {
    translation: enLanguage,
  },

  pt: {
    translation: ptBRLanguage,
  },
};

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: { loadPath: `${process.env.NEXT_PUBLIC_URL}/locales/{{ns}}.json` },
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
  });

export const currentLanguage = i18n.resolvedLanguage;
