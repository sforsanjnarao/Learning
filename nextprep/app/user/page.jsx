'use client'
import { useState,useEffect } from "react"
import axios from 'axios'
function page() {
    const [userData, setUserData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const res=axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
      .then(res=>{
        setUserData(res.data)
        setLoading(false)
      })
    }, [])
    
    if(loading) return<div>Loading...</div>
  return (
    <div>
         <h5>name: {userData?.name}</h5>
         <h5>email {userData?.email}</h5>
    </div>
  )
}

export default page