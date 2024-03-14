import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Antag att detta är korrekt filnamn och sökväg
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Cv from './pages/Cv';
import './pages/pages.css';


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Cv" element={<Cv/>} />
      </Routes>
      
    </Router>
  );
}

export default App;