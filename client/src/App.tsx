import Button from './components/Button'
import './App.css'
import { Route,Routes, useNavigate } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Profile from './pages/Profile'
import Payment from './pages/Payment'
import Home from './pages/Home'
import { useEffect } from 'react'
function App() {
  
  
  return (
    <div>
       
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
         <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  )
}
function NotFound(){
  const navigate = useNavigate();
  const clickHandler=()=>{
      navigate("/")
  }
  useEffect(()=>{
    document.body.style.overflow="hidden"
    return()=>(
      document.body.style.overflow="auto"
    )
  },[])
  return (
    <div className='bg-black w-screen h-screen absolute top-0 left-0'>

      <span className='flex items-center justify-center text-white pt-60 font-bold text-4xl' > 404 | Page not found </span>
      <div className='pt-10'> 
      <Button label={'Return to Home'} onClick={clickHandler} className='relative bg-white text-black font-medium px-2 py-2 hover:bg-gray-200 '></Button>
      </div>
    </div>
  )
}

export default App
