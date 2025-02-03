import React from 'react';
import { ICounter, IGoodsItem } from '../interfaces';
import { Counter, DeleteBtn } from '../../components';

export const Basket = ({ counter, title, price, imageListing }: ICounter & IGoodsItem): React.ReactElement => (
  <article>
    <div>
      <div>
        <img src={imageListing} alt="" />
      </div>
      <h1>{title}</h1>
    </div>
    <div>
      <p>${price}</p>
      <div>
        <Counter counter={counter} />
        <DeleteBtn />
      </div>
    </div>
  </article>
);
