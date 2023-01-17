import { useState, useEffect, useRef } from 'react';
import { FaMapMarked } from 'react-icons/fa';

const About = ({ isVisble }) => {

   //STATE TO CONTROL VISIBILITY
  const [visible, setVisible] = useState(false);

  // REF FOR SECTION
  const element = useRef(null);

   // FUNCTION FOR SCROLL EVENT
  useEffect(() => {
    
   window.addEventListener('scroll', () => {
     // HAVE THE DISTANCE OF VIEWPORT BORDER TOP TO ELEMENT BORDER TOP
     const elementTop = element.current.offsetTop;

     // CHECK IF VIEWPORT BORDER BOTTOM IS ON HALF OF P ELEMENTS
     if (window.innerHeight + window.scrollY >= elementTop + element.current.offsetHeight / 2) {
       setVisible(true);
     }
   });
 }, []);
 



  return (
    <section 
      ref={element}
      className='about-container'
   >
      <h3> ABOUT ME </h3>
      <p
        className={`about-p ${visible ? 'p-visible' : ''}`}
        style={{ transition: 'opacity 1s' }}
      >
        Hi, I'm a front-end developer with a passion for creating beautiful and user-friendly websites and applications. I'm always looking for opportunities to learn new skills and technologies. I like to read blogs and tutorials to stay up-to-date with the latest trends in front-end development.
      </p>

      <p
        className={`about-p ${visible ? 'p-visible' : ''}`}
        style={{ transition: 'opacity 2s' }}
      >
        My personal skills stand out for responsibility, ability to work in a team because I am a communicative and positive person. I know how to learn from my mistakes and listen to the advice of others. I also study and practice English and Portuguese constantly although my native language is Spanish.
      </p>
      <div className='about-location'>
        <FaMapMarked className='about-map' />
        <p>Buenos Aires, Argentina</p>
      </div>
    </section>
  )
}

export default About