import React from 'react';
import './MainContent.css';

const MainContent: React.FC = () => {
  return (
    <main className="MainContent">
      <div className="intro">
        <h1>Développeur Web</h1>
        <h2>Designer Web</h2>
        <div className="underline"></div>
        <p>Salut ! Je suis Mil, j'aime créer des trucs sur Internet. ❤️</p>
        <a href={`${process.env.PUBLIC_URL}/CV MEAS PINYA 2024.pdf`} download="CV MEAS PINYA 2024.pdf">
          <button>Télécharger CV</button>
        </a>
      </div>
      <div className="image-container">
        <picture>
          <source media="(max-width: 768px)" srcSet={`${process.env.PUBLIC_URL}/Portable.png`} />
          <img src={`${process.env.PUBLIC_URL}/Laptop.png`} alt="Laptop with CV" />
        </picture>
      </div>
      <div className="linkedin-logo">
        <a href="https://www.linkedin.com/in/pinya-meas/" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="LinkedIn" />
        </a>
      </div>
    </main>
  );
}

export default MainContent;
