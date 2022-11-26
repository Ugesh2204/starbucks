import React from 'react'
import {Link} from 'react-router-dom'
import './Navlink.scss'

const NavLink = ({ isNavExpand,setIsNavExpanded }) => {
 /*close mobile Menu */
 const closeMobileMenu = () => {
  if(isNavExpand === true) {
    setIsNavExpanded(false)
  }
 }
  return (
    <ul className={`ul-items ${isNavExpand === true ? 'active':''}`}>
        <li className='li-items'>
            <Link to='/' onClick={closeMobileMenu}>Home</Link>
            <Link to='/menu' onClick={closeMobileMenu}>Menu</Link>
            <Link to='/whatsnew' onClick={closeMobileMenu}>What's New</Link>
            <Link to='/contact' onClick={closeMobileMenu}>contact</Link>
        </li>
    </ul>
  )
}

export default NavLink