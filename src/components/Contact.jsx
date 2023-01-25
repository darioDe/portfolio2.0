import React from 'react'
import { useForm } from '../hooks/useForm'
;

const initialForm = {
  name : '',
  email : '',
  subject : '',
  comments : '',
};

const validationsForm = (form) => {
  let errors = {
  };

  if (!form.name.trim()) {
    errors.name = 'Name is required';
    
  }

  return errors;
};

const Contact = () => {
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
   <section className='contact-container'>
      <h3 className='contact-h3'> CONTACT ME </h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name='name' 
          placeholder='Name' 
          onBlur={handleBlur} 
          onChange={handleChange} 
          value={form.name} 
          required 
        />
        {errors.name && <p>{errors.name}</p>}

        <input 
          type="email" 
          name='email' 
          placeholder='E-mail' 
          onBlur={handleBlur} 
          onChange={handleChange} 
          value={form.email} 
          required 
        />
        {errors.email && <p>{errors.email}</p>}

        <input 
          type="text" 
          name='subject' 
          placeholder='About' 
          onBlur={handleBlur} 
          onChange={handleChange} 
          value={form.subject} 
          required 
        />
        {errors.subject && <p>{errors.subject}</p>}

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
        {errors.comments && <p>{errors.comments}</p>}

        <input type="submit" value="Send" />

      </form>
      
   </section>
  )
}

export default Contact