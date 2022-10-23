import React from 'react'
import starbucklogo from '../../assets/images/logo.png'
import './Logo.scss'
const Logo = () => {
  return (
   <>
    <a href="#" className='logo'><img src={starbucklogo} alt='logo'/></a>
   </>
  )
}

export default Logo