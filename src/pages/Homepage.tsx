import Header from '../components/Header';
import StarBackground from '../components/StarBackground';
import '../assets/Homepage.css'

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
                </div>
                <StarBackground />
            </main>
        </div>
    );
};
  
export default Homepage;