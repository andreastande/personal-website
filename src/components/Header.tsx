import { Link } from 'react-router-dom';
import A_logo from '../assets/A_logo.png'
import '../assets/Header.css'
import { useState, useEffect } from 'react';


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