import { useState} from 'react';
import { FaBars } from 'react-icons/fa';
import Modal from './Modal';

const Nav = () => {
   // STATE TO CONTROL MODAL MENU IN MOBILE
   const [modalMenu, setModalMenu] = useState(false);
 
   return (
     <nav className='nav-bar'>
       {/* BUTTON FOR OPEN BURGER MENU */}
       <FaBars className={`nav-faBars ${modalMenu && 'faBars-rotate'}`} onClick={() => setModalMenu(!modalMenu)}/>
       <Modal modalMenu={modalMenu}/>
     </nav>
   );
 };
 
 export default Nav;