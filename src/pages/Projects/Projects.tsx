import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProjectPage from './ProjectPage';
import './Projects.css';

const Projects: React.FC = () => {
  const location = useLocation();
  const currentProject = location.pathname.split('/')[2] || 'meetly';

  return (
    <section className="Projects">
      <div className="projects-menu">
        <ul>
          <li className={currentProject === 'meetly' ? 'active' : ''}><Link to="/projects/meetly">MEETLY</Link></li>
          <li className={currentProject === 'crushme' ? 'active' : ''}><Link to="/projects/crushme">CRUSHME</Link></li>
          <li className={currentProject === 'peugeot' ? 'active' : ''}><Link to="/projects/peugeot">PEUGEOT</Link></li>
          <li className={currentProject === 'bouton' ? 'active' : ''}><Link to="/projects/bouton">BOUTON</Link></li>
          <li className={currentProject === 'voyage' ? 'active' : ''}><Link to="/projects/voyage">VOYAGE</Link></li>
          <li className={currentProject === 'hotel' ? 'active' : ''}><Link to="/projects/hotel">HOTEL</Link></li>
        </ul>
      </div>
      <ProjectPage />
    </section>
  );
};

export default Projects;
