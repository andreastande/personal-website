import { useState, useMemo } from 'react';
import Header from '../components/Header';
import StarBackground from '../components/StarBackground';
import '../assets/Homepage.css'
import { Link } from 'react-router-dom';
import ProfilePicture from '../assets/images/Profilbilde.png'
import ArrowRight from '../assets/images/arrow-right.png'
import PointerRight from '../assets/images/cursor-pointer-right.png'
import PointerLeft from '../assets/images/cursor-pointer-left.png'


const Homepage = () => {

    const [showArrow1, setShowArrow1] = useState(false);
    const [showArrow2, setShowArrow2] = useState(false);
    const [showArrow3, setShowArrow3] = useState(false);

    const backgroundComponent = useMemo(() => <StarBackground />, [])
    
    return (
        <div>
            <Header />
            <main className="mainContent">
                <div className="landing-section">
                    <div className="titleWrapper" style={{display: 'flex', alignItems: 'center'}}>
                        <h1 className="page-title">Velkommen til min nettside!</h1>
                    </div>
                    
                    <p className="subheading">
                        Her kan du få vite mer om meg, og oppdage prosjekter jeg har bidratt i eller utviklet selv. 
                    </p>
                    <div className="grid-container-wrapper">
                        <section className="grid-container">
            
                            <Link to="/about" className="grid-row-span-2">
                                <div style={{position: 'relative'}}>
                                    <article className="grid-box-1" onMouseOver={() => setShowArrow1(true)} onMouseOut={() => setShowArrow1(false)}>
                                        <img src={ProfilePicture}></img>
                                        <p>Mitt navn er Andreas Tande, jeg er 22 år og studerer Datateknologi ved NTNU. For øyeblikket er jeg på mitt tredje år.</p>
                                        <p id="additional-text-1">Klikk for å lese mer!</p>
                                    </article>
                                    {showArrow1 && (
                                        <div className="showMore" style={{position: 'absolute', left: '-40px', bottom: '-40px'}}>
                                            <img src={PointerRight} width="60px"></img>
                                        </div>
                                    )}
                                    
                                </div>
                            </Link>

                            <Link to="/projects" className="grid-row-span-1">
                                <div style={{position: 'relative'}}>
                                    <article className="grid-box-2" onMouseOver={() => setShowArrow2(true)} onMouseOut={() => setShowArrow2(false)}>
                                    
                                    </article>
                                    {showArrow2 && (
                                        <div className="showMore" style={{position: 'absolute'}}>
                                            <img src={PointerLeft} width="60px"></img>
                                        </div>
                                    )}
                                </div>
                            </Link>

                            <Link to="/expertise" className="grid-row-span-1">
                                <div style={{position: 'relative'}}>
                                    <article className="grid-box-3" onMouseOver={() => setShowArrow3(true)} onMouseOut={() => setShowArrow3(false)}>
                                        
                                    </article>
                                    {showArrow3 && (
                                        <div className="showMore" style={{position: 'absolute'}}>
                                            <img src={PointerLeft} width="60px"></img>
                                        </div>
                                    )}
                                </div>
                            </Link>

                        </section>
                    </div>
                </div>
                {backgroundComponent}
            </main>
        </div>
    );
};
  
export default Homepage;