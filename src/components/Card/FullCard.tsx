import React from 'react';
import { nanoid } from 'nanoid';
import { IGoodsItem } from './interfaces';
import { Btn, Counter, StockStatus } from '../../components';

export const FullCard = ({ title, price, details, imageFull, isInStock }: IGoodsItem): React.ReactElement => (
  <div>
    <div >
      <img src={imageFull[0]} alt="" />
      <div>
        <h1>{title}</h1>
        <StockStatus isInStock={isInStock} />
        <p>${price}</p>
        <div>
          <p>QUANTITY</p>
          <Counter counter={1} />
        </div>
        <div>
          <Btn isDisabled={!isInStock}>Add to cart</Btn>
          <p>
            &mdash;&nbsp;Free shipping on&nbsp;orders $100+
          </p>
        </div>
      </div>
    </div>
    <h2>Details</h2>
    {typeof details === 'string' ? (
      <p>{details}</p>
    ) : (
      details.map((item) => (
        <p key={nanoid()}>
          {item}
        </p>
      ))
    )}
  </div>
);
