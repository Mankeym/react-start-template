import React from 'react';
import { IModal } from './interfaces';
import './Modal.sass';

export const Modal = ({ isVisible, children }: IModal): React.ReactElement => {
  if (isVisible) {
    return (
      <div className="modal">
        <div className="modal__content">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="32" viewBox="0 0 22 32" fill="none">
              <path d="M16 11L6 21" stroke="black" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6 11L16 21" stroke="black" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <div>{children}</div>
        </div>
      </div>
    );
  } else return <></>;
};
