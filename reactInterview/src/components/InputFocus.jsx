import React, { useRef } from 'react'

const InputFocus = () => {

    const weRef=useRef()

    const handelSubmit=()=>{
        weRef.current.focus()
    }
  return (
    <div>
        <label htmlFor="UserName">Name</label>
        <input ref={weRef}  id="UserName" type="text" placeholder='enter your name'/>
        
        <label htmlFor='Email'>Email:</label>
        <input type="text" placeholder='Enter your email' id='Email' />

        <button onClick={handelSubmit}>Submit</button>
    </div>
  )
}

export default InputFocus