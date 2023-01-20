import { useState, useEffect, useRef } from 'react';
import Project from './Project';
import { works } from './data';
import { idGenerator } from './helpers';

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
    // window.addEventListener('scroll', () => {
    //   // HAVE THE DISTANCE OF VIEWPORT BORDER TOP TO ELEMENT BORDER TOP
    //   const elementTop = proj.current.offsetTop;

    //   // CHECK IF VIEWPORT BORDER BOTTOM IS ON HALF OF P ELEMENTS
    //   if (window.innerHeight + window.scrollY >= proj.current.offsetHeight / 2)  {
    //     setIsVisible(true);
    //   }
    // });
  }, []);


  return (
    <section 
      className={`proj-container ${isVisible ? 'proj-border-animated' : ''}`}
      ref={proj}
    >

      <h3 className='proj-h3'> PROJECTS </h3>
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