import { useState } from 'react';
import { Icon } from 'react-icon-kit';
// import { progressBar } from 'react-icons-kit/fa/progressBarr';
import { useInView } from 'react-intersection-observer'

const Skills = () => {

  // STATE FOR PROGRESS BAR
  const [progress, setProgress] = useState(0);
  
  // REF FOR CONTAINER
  const [ref, inView] = useInView({ threshold: 0});
  
  // USEEFFECT FOR FULL PROGRESS
  useEffect(() => {

    let intervalid = null;

    if (inView) {

      intervalid = setInterval(() => {
        
        if (progress >= 100) {
          clearInterval(intervalid);
        
        } else {
          
          setProgress(progress + 1);

        }
      }, 50);

    }

    return () => clearInterval(intervalid);
  }, [inView, progress]);

  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window
  }

  return (
    <div 
      className='skills-container'
      ref={ref}
    >
      <h3> My Skills </h3>

      <div className='skills-icon-container'>
        
        <div className='icon-progress-container'>
          <Icon
            icon={html5}
            size={32}
          />
          <div 
            className='progress-bar'
            style={{width: `${progress}%`}}
          >
          </div>
        </div>

        <div className='icon-progress-container'>
          <Icon
            icon={css3}
            size={32}
          />
          <div 
            className='progress-bar'
            style={{width: `${progress}%`}}
          >
          </div>
        </div>

        <div className='icon-progress-container'>
          <Icon
            icon={javascript}
            size={32}
          />
          <div 
            className='progress-bar'
            style={{width: `${progress}%`}}
          >
          </div>
        </div>

        <div className='icon-progress-container'>
          <Icon
            icon={react}
            size={32}
          />
          <div 
            className='progress-bar'
            style={{width: `${progress}%`}}
          >
          </div>
        </div>

        <div className='icon-progress-container'>
          <Icon
            icon={next}
            size={32}
          />
          <div 
            className='progress-bar'
            style={{width: `${progress}%`}}
          >
          </div>
        </div>

        <div className='icon-progress-container'>
          <Icon
            icon={sass}
            size={32}
          />
          <div 
            className='progress-bar'
            style={{width: `${progress}%`}}
          >
          </div>
        </div>

        <div className='icon-progress-container'>
          <Icon
            icon={bootstrap}
            size={32}
          />
          <div 
            className='progress-bar'
            style={{width: `${progress}%`}}
          >
          </div>
        </div>

        <div className='icon-progress-container'>
          <Icon
            icon={tailwind}
            size={32}
          />
          <div 
            className='progress-bar'
            style={{width: `${progress}%`}}
          >
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Skills