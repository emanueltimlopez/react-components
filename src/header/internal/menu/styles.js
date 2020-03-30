import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: center;
  {prop.mini ? (
    width: auto;
  ): ''}
`

export const MenuItem = styled.li`
  display: inline-block;
  margin: 1rem;
`

export const MenuItemLink = styled.a`
  font-family: ClementePDae-Light;
  font-size: 0.9em;
  text-transform: uppercase;
  cursor: pointer;
  color: #000000;
  text-decoration: none;
  :hover {
    border-bottom: 2px solid #000;
  }
`