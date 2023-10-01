import { Link } from 'react-router-dom';
import A_logo from '../assets/A_logo.png'
import '../assets/Header.css'


function Header() {

    return ( 
        <div className="header">
            <div className="homepage">
                <Link to="/"><img src={A_logo} width="60vh"></img></Link>
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
    )
}

export default Header