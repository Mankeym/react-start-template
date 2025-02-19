import React from 'react';
import { useLang } from '../../providers/langProvider';

const LangSwitcher = () => {
  const { lang, toggleLang } = useLang();
  return (
    <div>
      {lang}
      <button onClick={toggleLang}>changeLanguage</button>
    </div>
  );
};

export { LangSwitcher };
