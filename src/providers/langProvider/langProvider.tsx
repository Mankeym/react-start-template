import React, { useEffect, useState, createContext, useContext, FC } from 'react';
import type { LanguageContextType, LanguageProviderProps, LanguageVariants } from './langProvider.types';
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';

const LangContext = createContext<LanguageContextType | undefined>(undefined);
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          Welcome: 'Hello',
        },
      },
      ru: {
        translation: {
          Welcome: 'Привет',
        },
      },
    },
  });
const LangProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<LanguageVariants>('ru');
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);
  function toggleLang() {
    setLang(lang === 'ru' ? 'en' : 'ru');
  }
  return <LangContext.Provider value={{ lang, toggleLang }}>{children}</LangContext.Provider>;
};
const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLangugae must be used within a LangugaeProvider');
  }
  return context;
};
export { LangProvider, useLang };
