import { Link } from 'react-router-dom';
import Header from '../components/Header';
import StarBackground from '../components/StarBackground';
import '../assets/Homepage.css'

const Homepage = () => {
    return (
        <div>
            <Header />
            <main className="mainContent">
                <div className="landing-section">
                    <h1 className="page-title">Velkommen til min hjemside</h1>
                </div>
                <p>This is a basic homepage component.</p>
                <StarBackground />
            </main>
        </div>
    );
};
  
export default Homepage;