import { ReactNode } from 'react';

export type LanguageProviderProps = {
  children?: ReactNode;
};

export type LanguageContextType = {
  lang: LanguageVariants;
  toggleLang: () => void;
};

export type LanguageVariants = 'ru' | 'en';
