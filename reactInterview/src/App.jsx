import React, { useEffect, useState } from 'react'
import { PostComponent } from './Post'
import Counter from './Counter'
import Interval from './Interval'

function App() {
  let [countVisible,setCountVisible]=useState(true)
  useEffect(()=>{
  setInterval(()=>{
    setCountVisible(countVisible=>!countVisible)
  },5000)

  },[])
  return (
    <div>
      {countVisible ?<Interval/>: <h1>Nothing is here</h1>}
      {/* <Counter/> */}
      {/* <Interval/> */}

    </div>
  )
}

export default App