import { Link } from 'react-router-dom';
import Header from '../components/Header';
import StarBackground from '../components/StarBackground';

const Homepage = () => {
    return (
        <div>
            <Header />
            <main className="mainContent">
                <h1>Hello from homepage</h1>
                <p>This is a basic homepage component.</p>
                <button>
                    <Link to="/about">Go to Aboutpage</Link>
                </button>
                <StarBackground />
            </main>
        </div>
    );
};
  
export default Homepage;