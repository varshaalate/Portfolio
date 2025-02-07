import React from 'react'
import './footer.css'
import footerimg from '../../assets/name1.png'
import user from '../../assets/user_icon.svg'

const footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-topleft">
                <img src={footerimg} alt="Footer" />
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero maiores voluptates asperiores veniam.</p> */}
            </div>
            <div className="footer-topright">
                <div className="footer-email-input">
                    <img src={user} alt="User" />
                    <input type="email" placeholder='Enter Your Email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2024 Varsha alate. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>
    </div>
  )
}

export default footer