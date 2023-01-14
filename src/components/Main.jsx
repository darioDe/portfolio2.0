import React from 'react'
import About from './About'

const Main = ( {isVisible}) => {
  return (
   <main>
      {isVisible && 
        <About isVisible={isVisible} />
      }
   </main>


  )
}

export default Main