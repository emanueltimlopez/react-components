import React from 'react';
import { Container, MenuItem, MenuItemLink } from './styles';

const buildMenu = items => (
  items.map( item => <MenuItem key={item.name}>
    <MenuItemLink href={item.link}>{item.name}</MenuItemLink>
  </MenuItem> )
)

const menu = ({ data, mini = false }) => (
  <Container>
    {buildMenu(data)}
  </Container>
)

export default menu