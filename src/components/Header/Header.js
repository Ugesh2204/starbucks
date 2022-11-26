import React, { useState } from 'react'
import Logo from '../../Atoms/Logo/Logo.js';
import NavLink from '../../Molecules/NavLink/NavLink';
import './Header.scss';
import hamburger from '../../assets/images/menu-svgrepo-com.svg'


const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
   <header>
      <nav>
        <Logo/>
        <button className="hamburger"
          onClick ={()=> {
            setIsNavExpanded(!isNavExpanded);
          }}>
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="19.6923" height="3.69231" fill="#ffffff"/>
          <rect y="6.15381" width="19.6923" height="3.69231" fill="#ffffff"/>
          <rect y="12.3077" width="19.6923" height="3.69231" fill="#ffffff"/>
        </svg>

        </button>
        <NavLink isNavExpand={isNavExpanded} setIsNavExpanded={setIsNavExpanded} />
      </nav>
   </header>
  )
}

export default Header