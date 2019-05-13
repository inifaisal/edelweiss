import React from 'react';

interface INavbarProps {
  children?: any;
  logo?: any;
  actions?: Array<any>;
}

const Navbar = ({ children, actions, logo }: INavbarProps) => (
  <nav className='navbar'>
    <div className='left'>
      {logo && <div className='logo'>{logo}</div>}
      <ul>{children}</ul>
    </div>
    {actions && (
      <ul>
        {actions.map((action, index) => (
          <li key={index}>{action}</li>
        ))}
      </ul>
    )}
  </nav>
);

export default Navbar;
