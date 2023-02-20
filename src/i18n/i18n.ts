import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';

import translationEng from '../../public/locales/en/translation.json';
import translationRu from '../../public/locales/ru/translation.json';

i18n
  .use(XHR)
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: __IS_DEV__,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    resources: {
      en: {
        translations: translationEng,
      },
      ru: {
        translations: translationRu,
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
  });

export default i18n;
