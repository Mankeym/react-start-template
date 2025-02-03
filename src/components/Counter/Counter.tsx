import React from 'react';
import { ICounter } from './interfaces';
import './Counter.sass';

export const Counter = ({ counter }: ICounter): React.ReactElement => (
  <div className="counter">
    <button className="counter__button">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4.16675 10H14.1667" stroke="#5C5F6A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
    {counter}
    <button className="counter__button">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 5V15" stroke="#5C5F6A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10H15" stroke="#5C5F6A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  </div>
);
