import React, { useEffect, useState } from 'react'
import { FaCode, FaEnvelope, FaTools, FaUser } from 'react-icons/fa'

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
            <a href=""> ABOUT  </a> 
          </li>
          
          <li className={openModal ? 'li-2' : '' }>
            <FaCode className="light-icon"/>
            <a href="">  PROJECTS  </a>  
          </li>
           
          <li className={openModal ? 'li-3' : '' }>
            <FaTools className="light-icon"/>
            <a href="">  SKILLS  </a> 
          </li>

          <li className={openModal ? 'li-4' : '' }> 
            <FaEnvelope className="light-icon"/>
            <a href="">  CONTACT  </a>
          </li>
        </ul>
      </div>
  )
}

export default Modal