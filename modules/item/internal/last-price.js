import React from 'react';

export const LastPrice = ({ currency, lastAmount }) => (
  <span className="price-comparation">
    {currency}{lastAmount}
  </span>
);