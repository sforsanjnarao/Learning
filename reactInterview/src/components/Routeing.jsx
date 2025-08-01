import React from 'react'
import {Link, Outlet, Route, Routes} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Routeing = () => {

  return (
    <Routes>
      <Route path='/page' element={<Layout/>}>
        <Route path='/page/page1' element={<Page1/>}/>
        <Route path='/page/page2' element={<Page2/>}/>
        <Route path='/page/page3' element={<Page3/>}/>
      </Route>
    </Routes>
  )
}

export default Routeing

function Layout(){
  const navigate=useNavigate()

  const navToPage1=()=>{
    navigate('/page/page1')
  }

  const navToPage2=()=>{
    navigate('/page/page2')
  }

  const navToPage3=()=>{
    navigate('/page/page3')
  }
  return (
    <>
    <button onClick={navToPage1}>page1</button>
    <button onClick={navToPage2}>page2</button>
    <button onClick={navToPage3}>page3</button>
    {/* <Link to={'/page/page1'}>page1</Link><br/>
    <Link to={'/page/page2'}>page2</Link><br/>
    <Link to={'/page/page3'}>page3</Link><br/> */}

    <Outlet/>
    <h2>Fotter</h2>
    </>

  )
}

function Page1(){
  return (
    <>
      <h1>you are in first page(1)</h1>
    </>
  )
}


function Page2(){
  return (
    <>
      <h1>you are in second page(1)</h1>
    </>
  )
}


function Page3(){
  return (
    <>
      <h1>you are in third page(1)</h1>
    </>
  )
}