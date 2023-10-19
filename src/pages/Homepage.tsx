import { useState } from 'react';
import Header from '../components/Header';
import StarBackground from '../components/StarBackground';
import '../assets/Homepage.css'
import { Link } from 'react-router-dom';
import ProfilePicture from '../assets/images/Profilbilde.png'
import ArrowRight from '../assets/images/arrow-right.png'

const Homepage = () => {
    const [showArrow1, setShowArrow1] = useState(false);
    const [showArrow2, setShowArrow2] = useState(false);
    const [showArrow3, setShowArrow3] = useState(false);


    const showArrow = (number: number, bool: boolean) => {
        switch (number) {
            case 1:
                setShowArrow1(bool)
                break
            case 2:
                setShowArrow2(bool)
                break
            case 3:
                setShowArrow3(bool)
                break
        }
    }

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
                            <div style={{position: 'relative'}}>
                                <article className="grid-box-1" onMouseOver={() => showArrow(1, true)} onMouseOut={() => showArrow(1, false)}>
                                    <img src={ProfilePicture}></img>
                                    <p>Mitt navn er Andreas Tande, jeg er 22 år og studerer Datateknologi ved NTNU. For øyeblikket går jeg mitt tredje år på dette studiet.</p>
                                    <p id="additional-text-1">Klikk for å lese mer!</p>
                                </article>
                                {showArrow1 && (
                                    <div className="showMore" style={{position: 'absolute', left: '-40px', bottom: '-60px', display: 'flex', flexDirection: 'column'}}>
                                        <img src={ArrowRight} width="60px"></img>
                                        <p style={{margin: '0'}}>Klikk for mer info</p>
                                    </div>
                                )}
                            </div>
                        </Link>
                        <Link to="/projects" className="grid-row-span-1">
                            <article className="grid-box-2" onMouseOver={() => showArrow(2)}>
                            
                            </article>
                        </Link>
                        <Link to="/expertise" className="grid-row-span-1" onMouseOver={() => showArrow(3)}>
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