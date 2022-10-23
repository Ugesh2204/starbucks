import React from 'react'
import {Link} from 'react-router-dom'
import './Navlink.scss'

const NavLink = () => {
  return (
    <ul className='ul-items'>
        <li className='li-items'>
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/whatsnew'>What's New</Link>
            <Link to='/contact'>contact</Link>
        </li>
    </ul>
  )
}

export default NavLink