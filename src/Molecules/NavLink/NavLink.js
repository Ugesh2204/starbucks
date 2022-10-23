import React from 'react'
import {Link} from 'react-router-dom'

const NavLink = () => {
  return (
    <ul className='ul-items'>
        <li className='li-items'>
            <Link to='/women'>Women</Link>
            <Link to='/men'>Men</Link>
            <Link to='/denim'>Denim</Link>
            <Link to='/shop' className='orange'>The gift Shop</Link>
            <Link to='/about'>About</Link>
        </li>
    </ul>
  )
}

export default NavLink