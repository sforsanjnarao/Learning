import React, { useEffect,useState } from 'react'

const ApiData = () => {
    const [Data,setData] = useState([])

    useEffect(()=>{
        async function getData(){
            let response=await fetch('https://dogapi.dog/api/v2/facts?limit=100')
            const jsonData= await response.json()
            console.log(jsonData)
            setData(jsonData.data)
        }
        getData()
    },[])
  return (
    <div>
        <div>{Data.map((e, id)=>{
            return <p key={id}>
                {e.attributes.body}
            </p>
        })}</div>
    </div>
  )
}

export default ApiData