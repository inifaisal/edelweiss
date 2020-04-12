import React from 'react';
import Classnames from 'classnames';

export type CardProps = {
  elevation?: number;
  children: any;
};

const Card = ({ elevation, children }: CardProps) => {
  const cardCls = Classnames('card', elevation && `elevation-${elevation}`);

  return <div className={cardCls}>{children}</div>;
};

export default Card;
