import React from 'react';
import { IBtn } from './interfaces';

export const Btn = ({ children, isDisabled }: IBtn): React.ReactElement => (
  <button
    disabled={isDisabled}
  >
    {children}
  </button>
);
