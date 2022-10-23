import React from 'react';

import Logo from '../../Atoms/Logo/Logo.js';
import NavLink from '../../Molecules/NavLink/NavLink';
import './Header.scss';


const Header = () => {
  return (
   <header>
      <nav>
        <Logo/>
        <NavLink/>
      </nav>
   </header>
  )
}

export default Header