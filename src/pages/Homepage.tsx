import Header from '../components/Header';
import StarBackground from '../components/StarBackground';
import '../assets/Homepage.css'
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <Header />
            <main className="mainContent">
                <div className="landing-section">
                    <h1 className="page-title">Velkommen til min nettside!</h1>
                    <p className="subheading">
                        Her kan du få vite mer om meg, og oppdage prosjekter jeg har bidratt i eller utviklet selv. 
                    </p>
                    <section className="grid-container">
                        <Link to="/about" className="grid-row-span-2">
                            <article className="grid-box-1">
                                <h1></h1>
                            </article>
                        </Link>
                        <Link to="/projects" className="grid-row-span-1">
                            <article className="grid-box-2">
                            
                            </article>
                        </Link>
                        <Link to="/expertise" className="grid-row-span-1">
                            <article className="grid-box-3">
                            
                            </article>
                        </Link>
                    </section>
                </div>
                <StarBackground />
            </main>
        </div>
    );
};
  
export default Homepage;