import { useState, useEffect, useRef } from 'react';
import Loader from './Loader';
import Message from './Message';
import { useForm } from '../hooks/useForm'
;
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const initialForm = {
  name : '',
  email : '',
  subject : '',
  comments : '',
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,525}$/;

  if (!form.name.trim()) {
    errors.name = 'Name is required';
  } else if (!regexName.test(form.name.trim())) {
    errors.name = 'Name only accepts letters and whitespace';
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required';
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = 'Email is invalid';
  }

  if (!form.subject.trim()) {
    errors.subject = 'About is required';
  }

  if (!form.comments.trim()) {
    errors.comments = 'Comments are required';
  } else if (!regexComments.test(form.name.trim())) {
    errors.comments = 'Comments must not exceed 525 characters';
  }

  return errors;
};

const Contact = () => {

  //STATE TO CONTROL VISIBILITY
  const [visible, setVisible] = useState(false);

  // REF FOR SECTION
  const element = useRef(null);

   // FUNCTION FOR SCROLL EVENT
  useEffect(() => {
    
   window.addEventListener('scroll', () => {
     // HAVE THE DISTANCE OF VIEWPORT BORDER TOP TO ELEMENT BORDER TOP
     const elementTop = element.current.offsetTop;

     // CHECK IF VIEWPORT BORDER BOTTOM IS ON HALF OF P ELEMENTS
     if (window.innerHeight + window.scrollY >= elementTop + element.current.offsetHeight / 2) {
       setVisible(true);
     }
   });
 }, []);

  // FORM CONTROLLER HOOK
  const  {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <section 
      ref={element} 
      className='contact-container'
    >
      <h3 className='contact-h3'> CONTACT ME </h3>

      <p className='contact-p'> If you want to contact whit me, you can do it in :</p>
      <ul 
        className={`${visible ? 'visible' : ""}`}
        style={{ transition: 'opacity 1s' }}
      >
        <li className='contact-li'> <FaGithub className='contact-icon' /> <a href='https://github.com/darioDe'> My Github Profile </a> </li>
        <li className='contact-li'> <FaEnvelope className='contact-icon' /> <p href=''> rdduarte1811@gmail.com </p> </li>
        <li className='contact-li'> <FaLinkedin className='contact-icon' /> <a href='https://www.linkedin.com/in/rubenduarte1811/'> My Linkedin Profile </a> </li>
      </ul>

      <form 
        action="https://formsubmit.co/rdduarte1811@gmail.com"
        method='POST' 
        onSubmit={handleSubmit}
        className={`${visible ? 'visible' : ""}`}
        style={{ transition: 'opacity 2s' }}
      >
        <input 
          type="text" 
          name='name' 
          placeholder='Name' 
          onBlur={handleBlur} 
          onChange={handleChange} 
          value={form.name} 
          required 
        />
        {errors.name && <p className='error'>{errors.name}</p>}

        <input 
          type="email" 
          name='email' 
          placeholder='E-mail Adress' 
          onBlur={handleBlur} 
          onChange={handleChange} 
          value={form.email} 
          required 
        />
        {errors.email && <p className='error'>{errors.email}</p>}

        <input 
          type="text" 
          name='subject' 
          placeholder='About' 
          onBlur={handleBlur} 
          onChange={handleChange} 
          value={form.subject} 
          required 
        />
        {errors.subject && <p className='error'>{errors.subject}</p>}

        <textarea 
          name="comments" 
          cols="50" 
          rows="5" 
          placeholder='Read here!'
          onBlur={handleBlur} 
          onChange={handleChange} 
          value={form.comments} 
          required  
        > </textarea>
        {errors.comments && <p className='error'>{errors.comments}</p>}

        <input type="submit" value="SUBMIT" />

      </form>

      {loading && <Loader /> }
      {response && <Message msg='The data has been send correctly' /> }
       
      
    </section>
  )
}

export default Contact