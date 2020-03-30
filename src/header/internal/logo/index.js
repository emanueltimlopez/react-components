import React, {Fragment} from 'react';
import { Container } from './styles';

const logo = ({ mini = false, image }) => (
  <Container>
    <img src={image}/>
  </Container>
)

export default logo