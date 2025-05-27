import React, { useState } from 'react'

function Counter() {
  return (
    <div>
        <Counting/>
    </div>
  )
}

export default Counter


function Counting(){
    const [count, setCount]=useState(0)
    // setInterval(()=>{
    //     setCount(count+1)
    // },1000)
    return(
        <div>
            <div>
                <h1>{count}</h1>
                <button onClick={()=>setCount(count +1)} >increse</button>
            </div>
            <div>
                <button onClick={()=>setCount(count-1)}>decrese</button>
            </div>
            <div>
                <button onClick={()=>setCount(0)}>reset</button>
            </div>
        </div>

    )
}