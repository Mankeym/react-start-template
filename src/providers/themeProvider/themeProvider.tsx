import React, { useState, createContext, useContext, FC } from 'react';
import type { ThemeProviderProps, ThemeContextType, ThemeVariables } from './ThemeProvider.types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeVariables>('light-theme');
  function toggleTheme() {
    setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme');
  }
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
export { ThemeProvider, useTheme };
