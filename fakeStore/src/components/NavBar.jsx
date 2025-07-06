import React from 'react'

const NavBar = ({...data}) => {
  return (
    <div>
        <div>
            <h1>STORE</h1>
            <div>
                <p>Price Low to High</p>
                {data.sort((a,b)=>(
                    a-b
                ))}
                <p>Price High to low</p>
                {data.sort((a,b)=>(
                    b-a
                ))}
            </div>
        </div>

    </div>
  )
}

export default NavBar