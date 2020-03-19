import React from 'react';

export const Price = ({ currency, amount }) => (
  <span className="price text-gray-700 text-base">
    {currency}{amount}
  </span>
);