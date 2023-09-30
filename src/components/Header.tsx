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
                <Link to="/">About</Link>
                <Link to="/">Projects</Link>
                <Link to="/">Expertise</Link>
            </div>
            <div className="getintouchWrapper">
                <button className="getintouch">Get in touch</button>   
            </div>
        </div>
    )
}

export default Header