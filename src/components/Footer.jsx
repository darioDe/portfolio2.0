import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer> 
      <div>
        <p> All roght reserved</p>
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
  )
}

export default Footer