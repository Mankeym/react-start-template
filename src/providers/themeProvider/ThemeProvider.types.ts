import { ReactNode} from 'react';

export type ThemeProviderProps = {
  children?: ReactNode;
};

export type ThemeContextType = {
  theme: ThemeVariables;
  toggleTheme: () => void;
};

export type ThemeVariables = 'light-theme' | 'dark-theme';
