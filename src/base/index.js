import React, {Fragment} from 'react';
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:300,400,700');
`

export const Base = ({ children }) => (
  <Fragment>
    <GlobalStyles />
    { children }
  </Fragment>
);
