import { Link } from 'react-router-dom';
import A_logo from '../assets/images/A_logo.png'
import '../assets/Header.css'
import { useState, useEffect } from 'react';
import Hamburger_icon from '../assets/images/Hamburger_icon.png'


function Header() {

    const [fadeIn, setFadeIn] = useState(false);
    const [isHomepage] = useState(window.location.pathname === '/');

    useEffect(() => {
        setFadeIn(true);
      }, []);

    return ( 
        <>
            <div className="header">
                <div className="logo">
                    <Link to="/"><img src={A_logo} width="70vw"></img></Link>
                </div>
                <div className="sections">
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/expertise">Expertise</Link>
                </div>
                <div className="getintouchWrapper">
                    <Link to="/contact"><button className="getintouch">Get in touch</button></Link>
                </div>
                <div className="burger-menu">
                    <img className="burger-icon" src={Hamburger_icon} width="50vw"></img>
                </div>
            </div>
            <div className="backgroundContainer">
                <div className="backgroundGrid" tabIndex={0} style={{display: 'contents'}}>
                    <div className={`backgroundHeader ${isHomepage ? 'homepage' : 'otherpage'} ${fadeIn && !isHomepage  ? 'active' : ''}`}></div>
                </div>
            </div>
        </>
    )
}

export default Header