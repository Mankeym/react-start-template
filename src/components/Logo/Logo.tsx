import React from 'react';
import { ILogo } from './interfaces';

export const Logo = ({ text, logo }: ILogo): React.ReactElement => {

  return (
    <div className="flex items-center gap-3">
      <img src={`${logo}`} alt="" width={30} height={20} />
      <span className="font-manrope font-extrabold text-xl tracking-tighter">
        {text}
      </span>
    </div>
  );
};
