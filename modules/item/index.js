import React from 'react';
import { Tag } from './internal/tag';
import { Price } from './internal/price';
import { Image } from './internal/image';
import { LastPrice } from './internal/last-price';
import { Button } from './internal/button';
import { Name } from './internal/name';
import  './styles.scss';

const CLASS_ID = 'item';

export const Item = ({ tag, price, button, name, image }) => {
  return (
    <div className={`${CLASS_ID}__container`}>
      <Image {...image}>
        {tag && <Tag {...tag}/>}
      </Image>

      <Name {...name} />

      <div className={`${CLASS_ID}__info-line`}>
        {price.lastAmount && <LastPrice {...price} />}
        <Price {...price}/>

        <Button {...button} />
      </div>
    </div>
  );
};
