import React from 'react';

export const Item = () => {
  return (
    <div className='item__container'>
      <div className={`item__image`}>
        {tag && <div className='item__tag'>{tag}</div>}
      </div>

      <span className="item__name">{name}</span>

      <div className="item__info-line">
        {priceComparation && 
          <span className="item__price-comparation">
            ${priceComparation}
          </span>}
        
        <span className="item__price">
          ${price}
        </span>
        <a href={`/product/${id}`}>
          <div className="item__more">Comprar</div>
        </a>
      </div>
    </div>
  );
};
