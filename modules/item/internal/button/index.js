import React from 'react';
import { Link, TextLink } from './styles';

export const Button = ({ url, id, text }) => (
  <Link href={`${url}${id}`}>
    <TextLink>{text}</TextLink>
  </Link>
);
