import React from 'react'
import './hero.css'
import profile from '../../assets/varshaalate.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt="Profile" className='profile'/>
        <h1><span>I'm Varsha Sanjay Alate </span>, Full Stack Developer</h1>
        <p>Enthusiastic and motivated professional in the IT industry, eager to contribute to a dynamic organization. Ready to apply my skills and embrace challenges to kickstart a successful career. Seeking an opportunity to grow and make a meaningful impact.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume"><a href="/varsha.pdf" download="Varsha Alate Resume.pdf" className='download-link'>My Resume</a>
            </div>
            {/* <a  href="/Varsha_Alate_Resume.pdf" download="Varsha_Alate_Resume.pdf" className='download-link'>My Resume</a> */}

        </div>
    </div>
  )
}

export default hero