import { useState, useEffect, useRef } from 'react';

const Skill = ({ children, name }) => {

   //STATE TO CONTROL VISIBILITY OF CHILD
  const [isVisibleChild, setIsVisibleChild] = useState(false);
  // REF FOR CHILD
  const child = useRef(null);
  //STATE TO CONTROL VISIBILITY OF CHILD
  const [isVisibleBar, setIsVisibleBar] = useState(false);
  // REF FOR BAR
  const bar = useRef(null);


  // FUNCTION FOR SCROLL EVENT OF CHILD

  useEffect(() => {
    
   window.addEventListener('scroll', () => {

     const element = child.current;
     const elementTop = element.offsetTop;
     const elementHeight = element.offsetHeight;
     const viewportHeight = window.innerHeight;

     if ( window.scrollY >= elementTop + (elementHeight * 1/4) - viewportHeight ) {
      setIsVisibleChild(true)
     }
   });
 }, []);

  // FUNCTION FOR SCROLL EVENT OF CHILD

  useEffect(() => {
    
   window.addEventListener('scroll', () => {

     const element = bar.current;
     const elementTop = element.offsetTop;
     const elementHeight = element.offsetHeight;
     const viewportHeight = window.innerHeight;

     if ( window.scrollY >= elementTop + (elementHeight * 1/4) - viewportHeight ) {
      setIsVisibleBar(true)
     }
   });
 }, []);

  return (
    <div className='skill'>
      <div 
         className={`container-children ${isVisibleChild ? 'visible-child' : ''}`}
         ref={child}
      >

         {children}

      </div>
      
      <div 
         className={`tool-box ${isVisibleBar ? 'visible-bar' : ''}`}
         ref={bar}
      >

         <p className='tool-p'> {name} </p>
         <div className='progress-bar'>
            <div className='percent'></div>
            <p className='percent-p'></p>
         </div>

      </div>

    </div>
  )
}

export default Skill