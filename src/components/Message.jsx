import React from 'react'

const Message = ({msg, bgColor}) => {
  return (
    <div className='msg'>
      <p>{msg}</p>
    </div>
  )
}

export default Message