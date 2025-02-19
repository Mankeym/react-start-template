import React from 'react';
import { Header } from '../Header/Header';
import { ILayout } from './interfaces';
import './Layout.sass';

export const Layout = ({ children }: ILayout): React.ReactElement => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__content">{children}</main>
    </div>
  );
};
