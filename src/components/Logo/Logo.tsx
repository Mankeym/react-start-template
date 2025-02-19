import React from 'react';
import { ILogo } from './interfaces';

export const Logo = ({ text, logo }: ILogo): React.ReactElement => {
  return (
    <div className="logo">
      <img src={`${logo}`} alt="" width={30} height={20} />
      <span className="logo-text">{text}</span>
    </div>
  );
};
