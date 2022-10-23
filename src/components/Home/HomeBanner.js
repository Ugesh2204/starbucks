import React from 'react'
import './HomeBanner.scss'
import imgtest from '../../assets/images/img1.png'
import imgthumbone  from '../../assets/images/thumb1.png'
import imgthumbtwo  from '../../assets/images/thumb2.png'
import imgthumbthree  from '../../assets/images/thumb3.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.png'



const HomeBanner = () => {
  return (
    <section>
        <div className='circle'></div>
       <div className='block-text'>
        <h2> It's not just Coffee <br></br> It's  <span className='starbucks-txt'>Starbucks</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <a href="#">Learn More</a>
       </div>
       <div className='block-img'>
        <img src={imgtest} alt=""/>
       </div>
       <ul className='thumb'>
        <li><img src={imgthumbone} alt=""/></li>
        <li><img src={imgthumbtwo} alt=""/></li>
        <li><img src={imgthumbthree} alt=""/></li>
       </ul>
       <ul className='social'>
        <li><a href="#"><img src={facebook}/></a></li>
        <li><a href="#"><img src={twitter}/></a></li>
        <li><a href="#"><img src={instagram}/></a></li>
       </ul>
    </section>
  )
}

export default HomeBanner