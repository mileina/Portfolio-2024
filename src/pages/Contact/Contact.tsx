import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="Contact">
      <div className="contact-container">
        <h1>Hello <span role="img" aria-label="smiley">😊</span></h1>
        <p>
          Je m'appelle Meas Pinya, étudiante chez Cloud Campus en +4
          en développement web full stack, avec des compétences en web design
          basé en région Parisienne !
        </p>
        <p>
          <a href="mailto:meas.pinya@gmail.com">Me joindre</a>
          <br />
          <span className="email">meas.pinya@gmail.com</span>
        </p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/pinya-meas/" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="LinkedIn" className="social-logo" />
          </a>
          <a href="https://github.com/mileina" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/github.png`} alt="GitHub" className="social-logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
