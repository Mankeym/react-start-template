import React from 'react';
import { IGoodsItem } from './interfaces';
import { StockStatus } from '../StockStatus/StockStatus';
import { AddToCart } from '../Btns';

export const ShortCard = ({ isInStock, title, price, details, imageListing }: IGoodsItem): React.ReactElement => (
  <article>
    <div>
      <img src={imageListing} alt="" />
    </div>
    <AddToCart counter={0} isDisabled={!isInStock}>
      Add to cart
    </AddToCart>
    <div>
      <h1>{title}</h1>
      <p>{details[0]}</p>
      <div>
        <StockStatus isInStock={isInStock} />
        <p>${price}</p>
      </div>
    </div>
  </article>
);
