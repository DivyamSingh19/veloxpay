import React from 'react'
import { useEffect } from 'react'
const Login = () => {
  useEffect(()=>{
      document.body.style.overflow="hidden"
      return()=>(
        document.body.style.overflow="auto"
      )
    },[])
  return (
    <div className='absolute top-0 left-0 w-screen h-screen bg-black flex items-center justify-center'>
      <div className="bg-blur max-w-[800px] text-center rounded-xl shadow-2xl"> 
        <h1 className='text-white text-3xl font-bold mb-2'>Welcome to VeloxPay</h1>
        <p>Login to Pay!</p>
         <form action="#" className='bg-white flex flex-col'>
          <div className='relative'>

          </div>

         </form>
         </div>
    </div>
  )
}

export default Login
