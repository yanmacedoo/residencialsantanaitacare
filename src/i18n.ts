import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptLocale from './i18n/locales/pt.json';
import enLocale from './i18n/locales/en.json';

i18n
    // Detecta a linguagem do browser ou do local storage
    .use(LanguageDetector)
    // Passa as instâncias para o react-i18next
    .use(initReactI18next)
    .init({
        resources: {
            pt: {
                translation: ptLocale
            },
            en: {
                translation: enLocale
            }
        },
        fallbackLng: 'pt', // fallback for when the current language is not available
        debug: false,

        interpolation: {
            escapeValue: false, // React already safe from xss
        }
    });

export default i18n;
