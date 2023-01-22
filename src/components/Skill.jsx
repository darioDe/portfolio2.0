import React from 'react'

const Skill = ({ children, name }) => {
  return (
    <div className='skill'>
      {children}
      <div className='tool-box'>
         <p className='tool-p'> {name} </p>
         <div className='progress-bar'>
            <div className='percent'></div>
            <p className='percent-p'></p>
         </div>
      </div>
    </div>
  )
}

export default Skill