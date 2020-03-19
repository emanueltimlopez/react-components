import React from 'react';

export const Price = ({ currency, amount }) => (
  <span className="price">
    {currency}{amount}
  </span>
);