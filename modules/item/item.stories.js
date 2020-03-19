import React from 'react';
import { action } from '@storybook/addon-actions';
import { Item } from './';
import { mockDefault, mockTag, mockLastAmount } from './mocks';

export default {
  title: 'Item',
  component: Item,
};

export const Default = () => (
  <Item {...mockDefault} />
);

export const Tag = () => (
  <Item {...mockTag} />
);

export const ReducedPrice = () => (
  <Item {...mockLastAmount} />
);