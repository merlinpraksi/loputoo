import React from 'react'
import './Footer.css';
import fb from '../../assets/facebook.png';
import email from '../../assets/gmail.png';
import ig from '../../assets/instagram.png';

const Footer = () => {
  return (

    <div className='footer'>
        <div className='sb__footer section__padding'>
 <div className='sb__footer-links'>
<div className='sb__footer-links-div'>




        </div>
        <div className='sb__footer-links-div'>


        </div>
        <div className='sb__footer-links-div'>

        </div>
        <div className='sb__footer-links-div'>

        </div>
        <div className='sb__footer-links-div'>

<div className='socialmedia'>
<p><img src={fb} alt="fb" /></p>
<p><img src={email} alt="email" /></p>
<p><img src={ig} alt="ig" /></p>
</div>
        </div>
        </div>
        <hr></hr>
        <div className='sb__footer-below'>
            <div className="sb__footer-copyright">

                <p>
                    @{new Date().getFullYear()} Merlin Fitness. All rights reserved.
                </p>
            </div>
            <div className="sb__footer-below-links">
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                <a href="/privacy"><div><p>Privacy</p></div></a>
                <a href="/security"><div><p>Security</p></div></a>
                <a href="/cookie"><div><p>Cookie Declaration</p></div></a>

            </div>
        </div>
        </div>
        </div>

  )
}

export default Footer
