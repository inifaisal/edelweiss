import React from 'react';
import Classname from 'classnames';

interface INavbarItemProps {
  title: string;
  active?: boolean;
}

export default ({ title, active, ...otherProps }: INavbarItemProps) => {
  const navItemCls = Classname('navbar-item', active && 'active');

  return (
    <li>
      <a href='https://google.com' className={navItemCls} {...otherProps}>
        {title}
      </a>
    </li>
  );
};
