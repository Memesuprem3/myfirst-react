import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/pages.css'; // Se till att denna sökväg stämmer med din projektmapp

const NavBar = () => {
  return (
    <nav className="Nav-bar">
      <ul>
      <li id="home"><Link to="/home">Home</Link></li>
      <li id="about"><Link to="/about">About</Link></li>
      <li id="cv"><Link to="/cv">CV</Link></li>
      <li id="projects"><Link to="/projects">Projects</Link></li>
      <li id="contact"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;