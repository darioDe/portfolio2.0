import { useState, useEffect } from 'react'
import About from './About'
import Contact from './Contact';
import Projects from './Projects'
import Skills from './Skills';


const Main = ( {isVisible}) => {

  // STATE TO HANDLE VISIBILITY OF COMPONENTS
  const [visbleComponets, setVisbleComponets] = useState(false);
  // USE EFFECT TO SET THE COMPONENTS TO BE VISIBLE AFTER 5 SECONDS
  useEffect(() => {
    setTimeout(() => {
      setVisbleComponets(true);
    }, 5000);
  }, [isVisible]);

  return (
   <main>
      {visbleComponets &&
        <>
          <About  />
          <div className='midle-main'>

            <Projects />
            <Skills />
            
          </div>
          <Contact />
        </>
      }
   </main>


  )
}

export default Main