import { useState, useEffect, useRef } from 'react';
import Project from './Project';
import { works } from './data';
import { idGenerator } from './helpers';

const Projects = () => {

  //STATE TO CONTROL VISIBILITY
  const [isVisible, setIsVisible] = useState(false);

  // FUNCTION FOR SCROLL EVENT
  useEffect(() => {
    
    window.addEventListener('scroll', () => {
      // HAVE THE DISTANCE OF VIEWPORT BORDER TOP TO ELEMENT BORDER TOP
      const elementTop = proj.current.offsetTop;

      // CHECK IF VIEWPORT BORDER BOTTOM IS ON HALF OF P ELEMENTS
      if (window.innerHeight + window.scrollY >= proj.current.offsetHeight / 2)  {
        setIsVisible(true);
      }
    });
  }, []);

  const proj = useRef(null);

  return (
    <section 
      className={`proj-container ${isVisible ? 'proj-border-animated' : ''}`}
      ref={proj}
    >

      <h2 className='proj-h2'> PROJECTS </h2>
      {works.map( work => 
         <Project 
            work={work}
            id={work.id}
            key={idGenerator()}
         />   
      )}

    </section>
  )
}

export default Projects