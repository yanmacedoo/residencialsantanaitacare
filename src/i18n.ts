import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptLocale from './i18n/locales/pt.json';
import enLocale from './i18n/locales/en.json';

i18n
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
        lng: 'pt', // Idioma padrão sempre português
        fallbackLng: 'pt',
        debug: false,
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;
