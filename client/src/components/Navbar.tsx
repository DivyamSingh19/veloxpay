import { ChevronLeft, Menu } from 'lucide-react';
import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Link,NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Navbar = () => {
  const [visible,setVisible] = useState(false);
  const authStatus = useSelector((state)=>state.auth.status)
  const navigate = useNavigate();
  const navItems = [
    {name:"Home" , slug:"/",active:true},
    {name:"Profile" , slug:"/profile",active:true},
    {name:"Pay" , slug:"/pay",active:true},
    {name:"About us" , slug:"/about",active:true},
    {name:"Login" , slug:"/login",active:true},
    {name:"Signup" , slug:"/signup",active:true},
  ] 
  useEffect(()=>{
     document.body.style.overflowX="hidden"

     return ()=>(
      document.body.style.overflowX="auto"
     )
  },[])
  return (
    <div>
      <div className='flex items-center justify-between py-2 font-medium w-full pt-4 absolute top-0 left-0 md:left-40 px-2 '>
        <Link to={"/"} className='text-lg md:text-xl font-medium'>
          VeloxPay.
        </Link>
        <div className='hidden md:block'>
          <ul className='flex gap-2'>
            {navItems.map((item) => item.active ?(
                <li key={item.name}>
                  <button onClick={()=>navigate(item.slug)}
                    className='inline-block px-6 py-2 duration-200 hover:bg-white hover:text-black rounded-full cursor-pointer'
                    >
                      {item.name}
                  </button>

                </li>

            ):null 
            
            )}

          </ul>
          {/* Logout Button */}
        </div>
      </div>
      <div className='flex items-center gap-4 md:gap-6'>
        <Menu onClick={()=>setVisible(true)}
          className='w-6 h-6 cursor-pointer text-white hover:text-white md:hidden'/>

      </div>
      <div className={`fixed top-0 right-0 h-screen w-full bg-white transition-transform ${visible ? "translate-x-0":"translate-x-full"} z-50`}>
          <div className='flex flex-col text-black h-full'>
              <div onClick={()=>setVisible(false)}
                className='flex items-center gap-4 p-4 cursor-pointer'
                >
                  <ChevronLeft className='w6 h-6 text-gray-500'/>
                  <p>Back</p>
              </div>
              <div className='flex flex-col justify-between h-full'>
                <div className='overflow-y-auto'>
                  {navItems.map(
                    (item) => item.active &&(
                      <NavLink key={item.name} onClick={()=>setVisible(false)} className="py-4 pl-6 " to={item.slug}>{item.name}</NavLink>
                    )
                  )}
                </div>
                {/* {Logout Button} */}
              </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar
