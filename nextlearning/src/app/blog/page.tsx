import axios from 'axios'
import React from 'react'

 const getblogs = async () => {
    const response=await axios.get('https://jsonplaceholder.typicode.com/todos/')
    return response.data
}

async function blogPage() {
    const blogs = await getblogs()

  return (
    <div>
        <h1>This is a blog page and this is the blog</h1>
        <p>Here you can find various articles and posts related to different topics.</p>
        <span>{JSON.stringify(blogs)}</span>
    </div>
  )
}

export default blogPage