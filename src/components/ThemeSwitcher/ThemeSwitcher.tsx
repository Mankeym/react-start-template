import React from 'react';
import { useTheme } from '../../providers/themeProvider/themeProvider';

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};
