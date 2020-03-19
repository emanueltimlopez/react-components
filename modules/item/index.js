import React from 'react';
import { Tag } from './internal/tag';
import { Price } from './internal/price';
import { Image } from './internal/image';
import { LastPrice } from './internal/last-price';
import { Button } from './internal/button';
import { Name } from './internal/name';
import  './styles.css';

const CLASS_ID = 'item';

export const Item = ({ tag, price, button, name, image }) => {
  return (
    <div className={`${CLASS_ID}__container rounded overflow-hidden shadow-lg`}>
      <Image {...image}>
        {tag && <Tag {...tag}/>}
      </Image>

      <div className={`${CLASS_ID}__info-line`}>
        <Name {...name} />
        <Price {...price}/>
        {price.lastAmount && <LastPrice {...price} />}

        <Button {...button} />
      </div>
    </div>
  );
};
