import React from 'react';

export const Button = ({ url, id, text }) => (
  <a className="button__link" href={`${url}${id}`}>
    <div className="button__text text-gray-700">{text}</div>
  </a>
);
