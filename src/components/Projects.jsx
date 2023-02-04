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
    // ADD A FUNCTION FOR THE SCROLL EVENT
    window.addEventListener('scroll', () => {

      const element = proj.current;
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // CHECK IF THE SCROLL POSITION IS GREATER THAN OR EQUAL TO THE ELEMENT'S TOP
      // PLUS A PORTION OF THE ELEMENT'S HEIGHT MINUS THE VIEWPORT HEIGHT
      if ( window.scrollY >= elementTop + (elementHeight * 1/8) - viewportHeight ) {
        // SET THE VISIBILITY TO TRUE
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

      <p className='proj-p'> I did these projects to <span>learn and practice</span> different technologies and <span>improve my stack</span>. I belive that the best way to learn something is to <span>apply it in practice</span>. </p>

      <div className='work-box'> 
        {works.map( work => 
          <Project 
              work={work}
              id={work.id}
              key={idGenerator()}
          />   
        )}
      </div>
    </section>
  )
}

export default Projects