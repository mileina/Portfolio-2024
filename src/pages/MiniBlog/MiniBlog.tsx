import React, { useState } from 'react';
import './MiniBlog.css';

const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrevClick}>‹</button>
      <img src={`${process.env.PUBLIC_URL}/${images[currentIndex]}`} alt="Brouillon" className="carousel-image" />
      <button className="carousel-button next" onClick={handleNextClick}>›</button>
    </div>
  );
};

const MiniBlog: React.FC = () => {
  const [highlightedItem, setHighlightedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setHighlightedItem(item);
  };

  return (
    <section className="MiniBlog">
      <div className="blog-grid">
        <div 
          className={`blog-item competence-item ${highlightedItem === 'competence' ? 'highlight' : ''}`} 
          onClick={() => handleItemClick('competence')}
        >
          <div className="overlay"></div>
          <img src={`${process.env.PUBLIC_URL}/competence.png`} alt="Mes Compétences" />
          {highlightedItem === 'competence' && (
            <div className="skills-list">
              {[
                'HTML', 'CSS', 'JS', 'PHP', 'SQL', 'JQUERY', 
                'REACT', 'REACT NATIVE', 'BOOTSTRAP', 'GITHUB', 
                'AWS', 'NODE.JS', 'API', 'MARIADB', 'PHOTOSHOP', 
                'FIGMA', 'MAQUETTE', 'ILLUSTRATION', '3D'
              ].map((skill, index) => (
                <span key={index} style={{ '--i': index + 1 } as React.CSSProperties}>{skill}</span>
              ))}
            </div>
          )}
          <h3>MES COMPETENCES</h3>
        </div>

        <div 
          className={`blog-item devweb-item ${highlightedItem === 'devweb' ? 'highlight' : ''}`} 
          onClick={() => handleItemClick('devweb')}
        >
          <div className="overlay"></div>
          <img src={`${process.env.PUBLIC_URL}/devweb.png`} alt="Dev Web" />
          {highlightedItem === 'devweb' && (
            <div className="devweb-text">
              <span>
                Passionné par le développement web, j'ai suivi une première formation avec un stage en PHP et WordPress, ce qui m'a permis d'obtenir une alternance aujourd'hui avec les technologies suivantes : React, TypeScript, Node.js, et le web design.
              </span>
            </div>
          )}
          <h3>DEV WEB</h3>
        </div>

        <div 
          className={`blog-item webdesign-item ${highlightedItem === 'webdesign' ? 'highlight' : ''}`} 
          onClick={() => handleItemClick('webdesign')}
        >
          <div className="overlay"></div>
          <img src={`${process.env.PUBLIC_URL}/webdesign.png`} alt="Web Design" />
          {highlightedItem === 'webdesign' && (
            <div className="webdesign-text">
              <span>
                J'ai toujours appris grâce à YouTube, des tutoriels et beaucoup de pratique ! J'ai toujours été passionné par le design et par l'évolution au fil du temps !
              </span>
            </div>
          )}
          <h3>WEB DESIGN</h3>
        </div>

        <div 
          className={`blog-item competence-item ${highlightedItem === 'monEcole' ? 'highlight' : ''}`} 
          onClick={() => handleItemClick('monEcole')}
        >
          <div className="overlay"></div>
          <img src={`${process.env.PUBLIC_URL}/mon-ecole.png`} alt="Mon École" />
          {highlightedItem === 'monEcole' && (
            <div className="skills-list">
              {[
                'Cloud Campus:', 
                '1 semaine de cours', 
                '3 semaines en entreprise', 
                'Formation Full Stack'
              ].map((info, index) => (
                <span key={index} style={{ '--i': index + 1 } as React.CSSProperties}>{info}</span>
              ))}
            </div>
          )}
          <h3>MON ÉCOLE</h3>
        </div>

        <div 
          className={`blog-item brouillon-item ${highlightedItem === 'brouillon' ? 'highlight' : ''}`} 
          onClick={() => handleItemClick('brouillon')}
        >
          <div className="overlay"></div>
          <img src={`${process.env.PUBLIC_URL}/brouillon.png`} alt="Brouillon" />
          {highlightedItem === 'brouillon' && (
            <ImageCarousel images={['b1.png', 'b2.png', 'b3.png', 'b4.png', 'b5.png']} />
          )}
          <h3>BROUILLON</h3>
        </div>

        <div 
          className={`blog-item twitch-item ${highlightedItem === 'twitch' ? 'highlight' : ''}`} 
          onClick={() => handleItemClick('twitch')}
        >
          <div className="overlay"></div>
          <img src={`${process.env.PUBLIC_URL}/twitch.png`} alt="Twitch" />
          {highlightedItem === 'twitch' && (
            <div className="twitch-text">
              <span>
              Je suis passionné par les jeux vidéo depuis toujours et j'ai su créer une communauté que j'ai parfois emmenée en direct en faisant du développement ou du web design ! N'hésitez pas à faire un tour sur ma chaîne Twitch : Mileina.
              </span>
            </div>
          )}
          <h3>TWITCH</h3>
        </div>

        <div 
          className={`blog-item cuisine-item ${highlightedItem === 'cuisine' ? 'highlight' : ''}`} 
          onClick={() => handleItemClick('cuisine')}
        >
          <div className="overlay"></div>
          <img src={`${process.env.PUBLIC_URL}/cuisine.png`} alt="Cuisine" />
          {highlightedItem === 'cuisine' && (
            <div className="cuisine-text">
              <span>
                Anciennement chef d'un restaurant, j'ai également travaillé dans l'hôtellerie en tant que serveuse, réceptionniste et pâtissière, ce qui m'a permis de traverser le monde ! Et je me suis reconverti pour une autre passion ! Je n'ai pas peur d'être à fond dans ce que j'aime.
              </span>
            </div>
          )}
          <h3>CUISINE</h3>
        </div>

        <div 
          className={`blog-item voyage-item ${highlightedItem === 'voyage' ? 'highlight' : ''}`} 
          onClick={() => handleItemClick('voyage')}
        >
          <div className="overlay"></div>
          <img src={`${process.env.PUBLIC_URL}/mesvoyage.png`} alt="Voyage" />
          {highlightedItem === 'voyage' && (
            <div className="voyage-text">
              <span>
                Mon plus beau voyage a été mon tour d'Asie du Sud en sac à dos, ce qui m'a permis de voir le monde d'un autre point de vue ! J'aime savoir que mon métier me permet aussi de parcourir le monde !
              </span>
            </div>
          )}
          <h3>VOYAGE</h3>
        </div>
      </div>
    </section>
  );
}

export default MiniBlog;
