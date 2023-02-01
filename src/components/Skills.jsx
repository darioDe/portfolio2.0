import React from 'react';
import { FaBootstrap, FaCss3Alt, FaGit, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact, FaSass } from 'react-icons/fa';
import Skill from './Skill';



const Skills = () => {
  return (
    <section className='skill-container'>
      <h3 className='skill-h3'> TOOLS & SKILLS </h3>

      <p className='skill-p'> These are some of the skills and tools that I have learned to use. I also have experience with <span>Tailwind and other libraries</span>. Over time, I will continue to add many more!</p>

      <div className='skill-box'>
        <Skill name={'HTML5'}>
          <FaHtml5 className='tool' />
        </ Skill>
        
        <Skill name={'CSS3'}>
          <FaCss3Alt className='tool' />
        </ Skill>
        
        <Skill name={'JavaScript'}>
          <FaJs className='tool' />
        </ Skill>
        
        <Skill name={'React Js'}>
          <FaReact className='tool' />
        </ Skill>
        
        <Skill name={'Bootstrap'}>
          <FaBootstrap className='tool' />
        </ Skill>
        
        <Skill name={'Sass'}>
          <FaSass className='tool' />
        </ Skill>
        
        <Skill name={'Git'}>
          <FaGit className='tool' />
        </ Skill>
        
        <Skill name={'Github'}>
          <FaGithub className='tool' />
        </ Skill>
        
        <Skill name={'Node Js'}>
          <FaNodeJs className='tool' />
        </ Skill>
      </div > 
      
    </section>
  )
}

export default Skills