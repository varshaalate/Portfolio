import React, { useState, useRef, useEffect } from 'react';
import './Newnavbar.css';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Newnavbar = () => {
    const [menu, setMenu] = useState("home");
    const menuref = useRef();

    const openMenu = () => {
        menuref.current.style.right = '0';
    };

    const closeMenu = () => {
        menuref.current.style.right = '-350px';
    };

    // Scroll detection logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: "home", offset: 0 },
                { id: "aboutme", offset: 100 },
                { id: "services", offset: 100 },
                { id: "mywork", offset: 100 },
                { id: "contact", offset: 100 }
            ];

            for (let section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= section.offset && rect.bottom >= section.offset) {
                        setMenu(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='navbar'>
            <div className="contact-title">
                <h1
                    style={{
                        background: "linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.06%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}
                >
                    VARSHA
                </h1>
            </div>

            <img src={menu_open} onClick={openMenu} className='nav-mob-open' alt="menuopen" />

            <ul ref={menuref} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="menuclose" className="nav-mob-close" />

                <li>
                    <AnchorLink className='anchor-link' href='#home'>
                        <p onClick={() => setMenu("home")}>Home</p>
                    </AnchorLink>
                    {menu === "home" && <img src={underline} alt="Underline" />}
                </li>

                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#aboutme'>
                        <p onClick={() => setMenu("aboutme")}>About Me</p>
                    </AnchorLink>
                    {menu === "aboutme" && <img src={underline} alt="Underline" />}
                </li>

                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#services'>
                        <p onClick={() => setMenu("services")}>Career</p>
                    </AnchorLink>
                    {menu === "services" && <img src={underline} alt="Underline" />}
                </li>

                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#mywork'>
                        <p onClick={() => setMenu("mywork")}>Portfolio</p>
                    </AnchorLink>
                    {menu === "mywork" && <img src={underline} alt="Underline" />}
                </li>

                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        <p onClick={() => setMenu("contact")}>Contact</p>
                    </AnchorLink>
                    {menu === "contact" && <img src={underline} alt="Underline" />}
                </li>
            </ul>

            <div className="nav-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'>
                    Connect With Me
                </AnchorLink>
            </div>
        </div>
    );
};

export default Newnavbar;
