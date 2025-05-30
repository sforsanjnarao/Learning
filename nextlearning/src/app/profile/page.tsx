import React from 'react'

function profilePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to Your Profile
          </h1>
          <p className="text-lg text-gray-600">
            This is your personal profile page.
          </p>
        </div>
      )
}

export default profilePage