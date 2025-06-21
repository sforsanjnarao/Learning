'use client'
import axios from 'axios'
import React, { useState } from 'react'

function LoginPage() {
  const [username, setUsername]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const emptyForm=()=>{
    setUsername('')
    setemail('')
    setpassword('')
  }


  return (
    <div>
      <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
      <input type="text" placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)}  />
      <input type="text" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}  />
      <button type='submit' onClick={()=>{
        axios.post('http://localhost:3000/api/user/login',{
          username,
          email,
          password,
          emptyForm
        })
      }}>Login</button>
    </div>
  )
}

export default LoginPage