import React from 'react'

function Input({handleChange}) {
  return (
    <div>
      <input type="text" onChange={(e)=>handleChange(e)}/>
      
    </div>
  )
}

export default Input