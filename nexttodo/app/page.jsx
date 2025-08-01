'use Client'
import React, { useState } from 'react'

const page = () => {
  const [task, setTask]=useState('')
  const handelAddButton=()=>{
    
  }
  return (
    <div>
      <input type="text" placeholder='Enter the task'/>
      <button onClick={()=>handelAddButton}>ADD</button>
    </div>
  )
}

export default page