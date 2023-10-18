import { Link } from 'react-router-dom';
import A_logo from '../assets/images/A_logo.png'
import '../assets/Header.css'
import { useState, useEffect, useRef } from 'react';
import Hamburger_icon from '../assets/images/Hamburger_icon.png'
import Close_Hamburger_icon from '../assets/images/Close_Hamburger_icon.png'


function Header() {

    const [fadeIn, setFadeIn] = useState(false);
    const [isHomepage] = useState(window.location.pathname === '/');
    const [menuOpen, setMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const hasScrolledRef = useRef(false);

    useEffect(() => {
        setFadeIn(true);
        
        function handleScroll() {
            if (window.scrollY > 0) {
                hasScrolledRef.current = true;
                setHasScrolled(true);
            } else {
                hasScrolledRef.current = false;
                setHasScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return ( 
        <>
            <div className={`header ${menuOpen || hasScrolled ? 'menu-open' : ''}`}>
                <div className="logo">
                    <Link to="/"><img src={A_logo} width="70vw"></img></Link>
                </div>
                <div className={`sections ${menuOpen ? 'menu-open' : ''}`}>
                    <div className="child-section">
                        <Link to="/about">
                            <h1>Om meg</h1>
                        </Link>
                    </div>
                    <div className="child-section">
                        <Link to="/projects">
                            <h1>Prosjekter</h1>
                        </Link>
                    </div>
                    <div className="child-section">
                        <Link to="/expertise">
                            <h1>Ekspertise</h1>
                        </Link>
                    </div>
                </div>
                <div className={`getintouchWrapper ${menuOpen ? 'menu-open' : ''}`}>
                    <div className="child-button">
                        <Link to="/contact">
                            <button className={`getintouch ${menuOpen ? 'menu-open' : ''}`}>Ta kontakt</button>
                        </Link>
                    </div>
                </div>
                <div className="burger-menu" onClick={toggleMenu}>
                    <img className="burger-icon" src={!menuOpen ? Hamburger_icon : Close_Hamburger_icon} width="50vw"></img>
                </div>
            </div>
            {menuOpen && (
                <div className="backdrop-blur header-and-menu"></div>
            )}
            {!menuOpen && hasScrolled && (
                <div className="backdrop-blur header"></div>
            )}
            <div className="backgroundContainer">
                <div className="backgroundGrid" tabIndex={0} style={{display: 'contents'}}>
                    <div className={`backgroundHeader ${isHomepage ? 'homepage' : 'otherpage'} ${fadeIn && !isHomepage  ? 'active' : ''}`}></div>
                </div>
            </div>
        </>
    )
}

export default Header