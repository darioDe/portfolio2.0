import { useState, useEffect, useRef } from 'react';
import Project from './Project';
import { works } from './data';
import { idGenerator } from './helpers';
import { FaCode } from 'react-icons/fa';

const Projects = () => {

  //STATE TO CONTROL VISIBILITY
  const [isVisible, setIsVisible] = useState(false);
  // REF FOR SECTION
  const proj = useRef(null);

  // FUNCTION FOR SCROLL EVENT
  useEffect(() => {
    
    window.addEventListener('scroll', () => {

      const element = proj.current;
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const viewportHeight = window.innerHeight;

      if ( window.scrollY >= elementTop + (elementHeight * 1/4) - viewportHeight ) {
        setIsVisible(true)
      }
    });
  }, []);

  return (
    <section 
      className={`proj-container ${isVisible ? 'proj-border-animated' : ''}`}
      ref={proj}
    >

      <h3 className='proj-h3' id='project-title'> <FaCode className='icon-h3' /> PROJECTS </h3>
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