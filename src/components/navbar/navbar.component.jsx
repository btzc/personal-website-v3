import React from 'react';

import './navbar.styles.scss';

const Navbar = () => (
  <div className='navbar'>
    <div className='navbar-items-container'>
      <a className='navbar-item' href='#about'>About</a>
      <a className='navbar-item' href='#work'>Work</a>
      <a className='navbar-item' href='#projects'>Projects</a>
      <a className='navbar-item' href='#contact'>Contact</a>
    </div>
  </div>
);

export default Navbar;
