import styled from 'styled-components';

export const Link = styled.a`
  text-decoration: none;
`

export const TextLink = styled.span`
  text-transform: uppercase;
  border-bottom: 2px solid #fff;
  margin-top: 0.3rem;
  display: inline-block;
  color: #000000;

  &:hover {
    border-bottom: 2px solid #000;
  }
`