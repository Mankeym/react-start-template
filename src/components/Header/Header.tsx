import React from 'react';
import './Header.sass';
import { Logo } from '../Logo/Logo';

export const Header = () => {
  return (
    <div className="header">
      <span>header</span>
      <Logo text={'logo'} />
    </div>
  );
};
