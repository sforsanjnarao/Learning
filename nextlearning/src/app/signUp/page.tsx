"use client"
import React, {useState} from 'react'
import Link from 'next/link'
// import { useRouter } from 'next/router'
// import axios from 'axios'

function SignupPage() {
    const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    })

  return (
    <div>
        <h1>SingUp</h1>
        <label htmlFor="username">Username:</label>
        <input type="text"  id="username" value={formData.username} onChange={(e)=>setFormData({...formData,username: e.target.value})} placeholder='Enter the username'/>
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={formData.email} onChange={(e)=>setFormData({...formData,email: e.target.value})} placeholder='Enter the email'/>
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={formData.password} onChange={(e)=>setFormData({...formData,password: e.target.value})} placeholder='Enter the password'/>
        <br />
        <button>SingUp Here</button>
        <Link href='/login'>visit login page</Link>
    </div>
  )
}

export default SignupPage