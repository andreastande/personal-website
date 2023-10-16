import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../assets/StarBackground.css";
import { useEffect, useState } from 'react';
import { Engine } from "tsparticles-engine";

const StarBackground = () => {
    const [showParticles, setShowParticles] = useState(false);

    const particlesInit = async (main: Engine) => {
        await loadFull(main);
    };

    useEffect(() => {
        setTimeout(() => {
            setShowParticles(true);
          }, 1500);
    })

    return (
        <div className="star-particles">
            {showParticles && (
                <Particles height="90vh" id="stars" init={particlesInit} options={{
                    "particles": {
                    "number": {
                        "value": 200,
                        "density": {
                        "enable": true,
                        "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                        "width": 0,
                        "color": "#000000"
                        },
                        "polygon": {
                        "nb_sides": 3
                        },
                        "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.8,
                        "random": true,
                        "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                        }
                    },
                    "size": {
                        "value": 1,
                        "random": true,
                        "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": false,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 0.3,
                        "direction": "left",
                        "random": true,
                        "straight": true,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                        }
                    }
                    },
                    "style": {
                        "height": "80vh"
                    },
                    "retina_detect": true
                }} />
            )}
        </div>
    );
};

export default StarBackground;