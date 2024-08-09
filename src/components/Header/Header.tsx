import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isProjectsPage = location.pathname.includes('/projects');
  const isMiniBlogPage = location.pathname.includes('/miniblog');
  const isContactPage = location.pathname.includes('/contact');

  return (
    <header className={`Header ${isProjectsPage ? 'projects-page' : ''} ${isMiniBlogPage ? 'miniblog-page' : ''} ${isContactPage ? 'contact-page' : ''}`}>
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />
      <nav className={`nav-container ${isOpen ? 'open' : ''}`}>
        <button className="close-menu" onClick={closeMenu}>
          Retour
        </button>
        <ul>
          <li><Link to="/" onClick={closeMenu}>ACCUEIL</Link></li>
          <li><Link to="/projects/meetly" onClick={closeMenu}>PROJETS</Link></li>
          <li><Link to="/miniblog" onClick={closeMenu}>MINI BLOG</Link></li> 
          <li><Link to="/contact" onClick={closeMenu}>VOUS ME RECRUTEZ ?</Link></li> 
        </ul>
      </nav>
      <div className="contact">| MEAS PINYA</div>
      <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Header;
