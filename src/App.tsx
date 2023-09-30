import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Projectspage from './pages/Projectspage'
import Expertisepage from './pages/Expertisepage'
import Contactpage from './pages/Contactpage'

function App() {
  return (
    <>
      <div>
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/projects" element={<Projectspage />} />
            <Route path="/expertise" element={<Expertisepage />} />
            <Route path="/contact" element={<Contactpage/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
