import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer> 
      <p> @ Created by Ruben Duarte</p>
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