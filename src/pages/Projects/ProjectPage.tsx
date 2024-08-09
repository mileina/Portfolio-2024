import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectPage.css';

type ProjectData = {
  mainImage: string;
  mobileImage?: string;
  icon?: string;
  description: string | JSX.Element;
};

const projectData: Record<string, ProjectData> = {
  meetly: {
    mainImage: `${process.env.PUBLIC_URL}/meetly.png`,
    mobileImage: `${process.env.PUBLIC_URL}/meetlyportable.png`,
    icon: `${process.env.PUBLIC_URL}/heart.png`,
    description: `J'avais envie d'apprendre React Native avec un projet innovant que je souhaite terminer ! Et si nous changions les codes des applications de rencontre ? Arrêtez de swiper et rencontrez des gens en fonction des activités et des disponibilités de chacun.`,
  },
  peugeot: {
    mainImage: `${process.env.PUBLIC_URL}/peugeot.png`,
    mobileImage: `${process.env.PUBLIC_URL}/peugeotportable.png`,
    icon: `${process.env.PUBLIC_URL}/car.png`,
    description: (
      <>
        Peugeot est un site web que j'ai travaillé pour pouvoir passer mon premier diplôme en développement web ! J'ai refait le site à ma façon.
        <a href="https://www.linkedin.com/posts/pinya-meas_petit-rendu-sur-le-dernier-projet-perso-activity-7167294887636156416-dIze" target="_blank" rel="noopener noreferrer">Découvrez le projet sur LinkedIn</a>
      </>
    ),
  },
  crushme: {
    mainImage: `${process.env.PUBLIC_URL}/crushme.png`,
    mobileImage: `${process.env.PUBLIC_URL}/crushmeportable.png`,
    icon: `${process.env.PUBLIC_URL}/xo.png`,
    description: (
      <>
        Crush Me est une mini-application que j'ai réalisée en direct sur Twitch, et qui a rencontré du succès sur TikTok pour montrer qu'on peut également s'amuser tout en développant !
        <a href="https://www.tiktok.com/@mileinya/video/7316990986154986784" target="_blank" rel="noopener noreferrer">Découvrez la vidéo sur TikTok</a>.
        C'est mon premier projet personnel en back-end.
      </>
    ),
  },
  bouton: {
    mainImage: `${process.env.PUBLIC_URL}/bouton.png`,
    description: (
      <>
        Un bouton simple avec un effet visuel surprenant. <a href="https://www.linkedin.com/posts/pinya-meas_build-a-button-design-petit-dev-en-soir%C3%A9e-activity-7169681509396762624-4g6L" target="_blank" rel="noopener noreferrer">Découvrez-le</a>
      </>
    ),
  },
  voyage: {
    mainImage: `${process.env.PUBLIC_URL}/voyage.png`,
    mobileImage: `${process.env.PUBLIC_URL}/voyageportable.png`,
    icon: `${process.env.PUBLIC_URL}/avion.png`,
    description: (
      <>
        J'ai voulu travailler les superpositions des backgrounds pour créer un effet visuel 3D et améliorer mes compétences en React. <a href="https://www.linkedin.com/posts/pinya-meas_build-site-and-design-voyager-dans-mon-activity-7171945415011995648-5IyE" target="_blank" rel="noopener noreferrer">Découvrez le projet</a>
      </>
    ),
  },
  hotel: {
    mainImage: `${process.env.PUBLIC_URL}/hotel.png`,
    mobileImage: `${process.env.PUBLIC_URL}/hotelportable.png`,
    icon: `${process.env.PUBLIC_URL}/house.png`,
    description: (
      <>
        Pour ce projet, je ne l'ai pas développé, mais j'ai travaillé les animations directement sur Figma, permettant ainsi d'apporter un visuel direct sans pour autant le coder. Je trouve aussi le projet intéressant car cela pourrait être innovant pour les hôtels. <a href="https://www.linkedin.com/posts/pinya-meas_et-si-on-avait-ce-genre-de-visuel-dans-les-activity-7172900622206246913-zjH1" target="_blank" rel="noopener noreferrer">Découvrez-le</a>
      </>
    ),
  },
};

const ProjectPage: React.FC = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const project = projectData[projectName as keyof typeof projectData];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="projects-content">
      <img src={project.mainImage} alt="Main project" className="main-image" />
      {project.mobileImage && (
        <img src={project.mobileImage} alt="Mobile project" className="mobile-image" />
      )}
      {project.icon && (
        <div className="heart-icon">
          <img src={project.icon} alt="Project icon" />
        </div>
      )}
      <div className="project-description">
        {typeof project.description === 'string' ? (
          <p>{project.description}</p>
        ) : (
          project.description
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
