import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <h1>Hello from homepage</h1>
            <p>This is a basic homepage component.</p>
            <button>
                <Link to="/about">Go to Aboutpage</Link>
            </button>
        </div>
    );
};
  
export default Homepage;