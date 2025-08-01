// import React, { useEffect, useState } from 'react'
import React from 'react'

import { PostComponent } from './Post'
import Counter from './Counter'
import Interval from './Interval'
import { BrowserRouter } from 'react-router-dom'
import Routeing from './components/Routeing'
import InputFocus from './components/InputFocus'

function App() {
  // let [countVisible,setCountVisible]=useState(true)
  // useEffect(()=>{
  // setInterval(()=>{
  //   setCountVisible(countVisible=>!countVisible)
  // },5000)

  // },[])
  return (
    // <div>
    //   {countVisible ?<Interval/>: <h1>Nothing is here</h1>}
    //   {/* <Counter/> */}
    //   {/* <Interval/> */}

    // </div>
    // <BrowserRouter>
    //   <Routeing/>
    // </BrowserRouter>
    <InputFocus/>
  )
}

export default App