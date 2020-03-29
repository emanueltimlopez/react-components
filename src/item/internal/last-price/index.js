import React from 'react';
import { Element } from './styles';

export const LastPrice = ({ currency, lastAmount }) => (
  <Element>
    {currency}{lastAmount}
  </Element>
);