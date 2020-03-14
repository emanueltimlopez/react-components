import React from 'react';
import { action } from '@storybook/addon-actions';
import { Item } from './';

export default {
  title: 'Item',
  component: Item,
};

export const Text = () => <Item onClick={action('clicked')}>Hello Button</Item>;

export const Emoji = () => (
  <Item onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Item>
);
