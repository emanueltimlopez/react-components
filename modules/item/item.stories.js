import React from 'react';
import { action } from '@storybook/addon-actions';
import { Item } from './';
import { mockDefault, mockTag, mockLastAmount } from './mocks';
import { Base } from '../base';

export default {
  title: 'Item',
  component: Item,
};

export const Default = () => (
  <Base>
    <Item {...mockDefault} />
  </Base>
);

export const Tag = () => (
  <Base>
    <Item {...mockTag} />
  </Base>
);

export const ReducedPrice = () => (
  <Base>
    <Item {...mockLastAmount} />
  </Base>
);