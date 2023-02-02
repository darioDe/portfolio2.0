import React, { useEffect, useState } from 'react'
import { FaCode, FaEnvelope, FaTools, FaUser } from 'react-icons/fa'
import Anchor from './Anchor';

const Modal = ({ modalMenu }) => {

   const [openModal, setOpenModal] = useState(false);
   
   useEffect(() => {
     if (modalMenu) {
         setTimeout(() => {
            setOpenModal(true)
         }, 300);
     } else {
      setTimeout(() => {
         setOpenModal(false)
      }, 300);
     }

   }, [modalMenu])
   
  return (
      <div className={`modal ${openModal ? 'modal-enter' : 'modal-exit'}`}
      
      >
        <ul className='modal-ul'>
          
          <li className={openModal ? 'li-1' : '' }>
            <FaUser className="light-icon"/>
            <Anchor href='#about-title' > ABOUT </Anchor>
          </li>
          
          <li className={openModal ? 'li-2' : '' }>
            <FaCode className="light-icon"/>
            <Anchor href="#project-title">  PROJECTS  </Anchor>  
          </li>
           
          <li className={openModal ? 'li-3' : '' }>
            <FaTools className="light-icon"/>
            <Anchor href="#skills-title">  SKILLS  </Anchor> 
          </li>

          <li className={openModal ? 'li-4' : '' }> 
            <FaEnvelope className="light-icon"/>
            <Anchor href="#contact-title">  CONTACT  </Anchor>
          </li>
        </ul>
      </div>
  )
}

export default Modal