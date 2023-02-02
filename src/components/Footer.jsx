import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = ({ isVisible }) => {

  const [visbleComponets, setVisbleComponets] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisbleComponets(true);
    }, 5000); // 5000 milisegundos = 5 segundos
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