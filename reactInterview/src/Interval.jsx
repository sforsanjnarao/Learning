import React, { useEffect, useState } from 'react'

function Interval() {
    const [count, setCount] = useState(0)
useEffect(function(){
    setInterval(() => {
        setCount(count=>count+1)
    }, 1000);
},[])

  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default Interval