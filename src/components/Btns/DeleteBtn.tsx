import React from 'react';
import { IBtnDefault } from './interfaces';

export const DeleteBtn = ({ isDisabled }: IBtnDefault): React.ReactElement => (
  <button
    disabled={isDisabled}
  >
    <img
      src="https://raw.githubusercontent.com/furtivite/cdn.furtivite.github.io/refs/heads/main/images/close.svg"
      alt=""
      width={20}
      height={20}
    />
    <span className="sr-only">Delete item</span>
  </button>
);
