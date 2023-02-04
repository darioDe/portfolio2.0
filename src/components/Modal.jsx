import React, { useEffect, useState } from 'react'
import { FaCode, FaEnvelope, FaTools, FaUser } from 'react-icons/fa'
import Anchor from './Anchor';

const Modal = ({ modalMenu, setModalMenu }) => {
   // STATE TO CONTROL THE OPENING AND CLOSING OF THE MODAL
   const [openModal, setOpenModal] = useState(false);
   
   // HOOK TO UPDATE THE STATE OF THE MODAL
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
            <Anchor href='#about-title' setModalMenu={setModalMenu}> ABOUT </Anchor>
          </li>
          
          <li className={openModal ? 'li-2' : '' }>
            <FaCode className="light-icon"/>
            <Anchor href="#project-title" setModalMenu={setModalMenu}>  PROJECTS  </Anchor>  
          </li>
           
          <li className={openModal ? 'li-3' : '' }>
            <FaTools className="light-icon"/>
            <Anchor href="#skills-title" setModalMenu={setModalMenu}>  SKILLS  </Anchor> 
          </li>

          <li className={openModal ? 'li-4' : '' }> 
            <FaEnvelope className="light-icon"/>
            <Anchor href="#contact-title" setModalMenu={setModalMenu}>  CONTACT  </Anchor>
          </li>
        </ul>
      </div>
  )
}

export default Modal