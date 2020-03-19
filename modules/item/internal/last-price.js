import React from 'react';

export const LastPrice = ({ currency, lastAmount }) => (
  <span className="last-price">
    {currency}{lastAmount}
  </span>
);