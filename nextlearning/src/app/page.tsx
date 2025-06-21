'use client'

// import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Page(){
  const router=useRouter()
  return(
    <div>
      <h1>Todo application</h1>
      <div>
        <button onClick={()=>{
          router.push('/auth/login')
        }}>login to todod</button>
        {/* <Link href={'/auth/login'}>
        Login to Todo
        </Link>
        <br />
        <Link href={'/auth/logout'}>
        Logout to Todo
        </Link> */}
      </div>
    </div>
  )
}