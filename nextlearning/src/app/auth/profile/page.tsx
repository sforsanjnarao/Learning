import axios from 'axios'
import React from 'react'




export default async function profilePage() {
  const response=await axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details')
  const data=response.data
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            User Page
          </h1>
          <p className='text-gray-800'>
          {data.name}
          <br />
          {data.email}
          </p>
           
        </div>
      )
}
