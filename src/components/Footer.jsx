import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = ({ isVisible }) => {
  // STATE TO TRACK VISIBILITY OF FOOTER COMPONENT
  const [visbleComponets, setVisbleComponets] = useState(false);

  // USE EFFECT HOOK TO SET TIMEOUT AND DISPLAY FOOTER COMPONENT
  useEffect(() => {
    setTimeout(() => {
      setVisbleComponets(true);
    }, 5000);
  }, [isVisible]);

  return (
    <>
      { visbleComponets && 
        <footer>
          <div>
            <p> All right reserved</p>
            <p> @2023 Created by Ruben Duarte</p>
          </div>
          <div className='footer-icon'>
            <a href='https://www.linkedin.com/in/rubenduarte1811/'>
                <FaLinkedin />
            </a>
            <a href='https://github.com/darioDe'>
                <FaGithub />
            </a>
          </div>
        </footer>
      }
    </>
  )
}

export default Footer