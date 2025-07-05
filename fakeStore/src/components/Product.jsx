import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Product = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
            async function fetchData(){
            try {
                const res= await axios.get('https://fakestoreapi.com/products')  
                let ALLdata=res.data 
                setData(ALLdata)
            }catch (error) {
                console.error("Error:",error)
            }
        } 

        fetchData()

        
    },[])
    return (
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((e) => (
              <div key={e.id} className="border rounded-md p-4 shadow hover:shadow-lg transition">
                <img src={e.image} alt={e.title} className="h-40 object-contain mx-auto mb-4" />
                <h2 className="text-lg font-semibold mb-2">{e.title}</h2>
                <p className="text-sm text-gray-600 mb-2 line-clamp-3">{e.description}</p>
                <h1 className="text-xl font-bold text-green-600">${e.price}</h1>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Product