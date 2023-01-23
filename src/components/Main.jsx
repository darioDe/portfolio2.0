import { useState, useEffect } from 'react'
import About from './About'
import Contact from './Contact';
import Projects from './Projects'
import Skills from './Skills';


const Main = ( {isVisible}) => {

  const [visbleComponets, setVisbleComponets] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisbleComponets(true);
    }, 5000); // 5000 milisegundos = 5 segundos
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