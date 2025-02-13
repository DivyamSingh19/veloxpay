import { useEffect } from "react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { FcGoogle } from "react-icons/fc";
import Button from "../../components/Button";

const Login = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-white w-full sm:w-2/3 md:w-1/3 text-center rounded-xl shadow-2xl p-6 sm:p-8">
        <h1 className="text-black text-2xl sm:text-3xl font-bold mb-2">Welcome to VeloxPay</h1>
        <p className="text-black font-medium pt-3 sm:pt-5">Login to Pay!</p>

        <form action="#" className="bg-white flex flex-col pt-5 sm:pt-7">
           
          <div className="relative w-full">
            <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-black" />
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="p-3 pl-12 w-full rounded-md bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

           
          <div className="relative w-full mt-4">
            <LockClosedIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-black" />
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              className="p-3 pl-12 w-full rounded-md bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

           
          <div className="relative mt-6">
            <Button  label="Login"className="bg-black text-white px-6 sm:px-10 py-2 font-medium w-full sm:w-1/2 mx-auto">
              
            </Button>
          </div>
        </form>
        <div> 
        <div className="pt-4">
          <span>Not on Velox?</span> <a href="/signup" className="px-6 text-blue-500">Signup now </a>
        </div>
        </div>
         
        <div className="relative pt-6 pb-8">
          <button className="w-full sm:w-1/2 shadow-md bg-blue-200 text-black rounded-2xl cursor-pointer flex items-center justify-center gap-3 px-4 py-2 sm:px-6 sm:py-3 mx-auto">
            <FcGoogle className="w-5 h-5" />
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
