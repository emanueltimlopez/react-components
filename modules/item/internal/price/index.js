import React from 'react';

import { Element } from './styles';

export const Price = ({ currency, amount }) => (
  <Element>
    {currency}{amount}
  </Element>
);