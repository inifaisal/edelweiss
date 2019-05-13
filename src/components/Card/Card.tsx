import React from 'react';
import Classnames from 'classnames';

interface ICard {
  elevation: number;
  children: any;
}

const Card = ({ elevation, children }: ICard) => {
  const cardCls = Classnames('card', elevation && `elevation-${elevation}`);

  return <div className={cardCls}>{children}</div>;
};

export default Card;
