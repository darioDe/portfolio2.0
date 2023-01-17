import { useState, useEffect } from 'react'
import About from './About'
import Projects from './Projects'

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
          <Projects />
        </>
      }
   </main>


  )
}

export default Main