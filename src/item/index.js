import React from 'react';

import { Tag } from './internal/tag';
import { Price } from './internal/price';
import { Image } from './internal/image';
import { LastPrice } from './internal/last-price';
import { Button } from './internal/button';
import { Name } from './internal/name';
import { Sub } from './internal/sub';
import { Container, ContainerInfo, ContainerPrice } from './styles';

const Item = ({ tag, price, button, name, image, sub }) => {
  return (
    <Container>
      <Image {...image}>
        {tag && <Tag {...tag} />}
      </Image>

      <ContainerInfo>
        <Sub {...sub} />
        <Name {...name} />

        <ContainerPrice>
          <Price {...price}/>
          {price.lastAmount && <LastPrice {...price} />}
        </ContainerPrice>

        <Button {...button} />
      </ContainerInfo>
    </Container>
  );
};

export default Item;
