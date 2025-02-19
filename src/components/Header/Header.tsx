import React from 'react';
import header from './Header.sass';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { useTheme } from '../../providers/themeProvider';
import classNames from 'classnames';
import { LangSwitcher } from '../LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(header);

export const Header = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  return (
    <div className={cx('header', theme)}>
      <span>{t('Welcome')}</span>
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  );
};
