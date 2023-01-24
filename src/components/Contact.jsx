import React from 'react'
import { useForm } from '../hooks/useForm'
;

const initialForm = {};

const validationsForm = (form) => {};

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
        <input 
          type="email" 
          name='email' 
          placeholder='E-mail' 
          onBlur={handleBlur} 
          onChange={handleChange} 
          value={form.email} 
          required 
        />
        <input 
          type="text" 
          name='subject' 
          placeholder='About' 
          onBlur={handleBlur} 
          onChange={handleChange} 
          value={form.subject} 
          required 
        />
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
        <input type="submit" value="Send" />

      </form>
      
   </section>
  )
}

export default Contact