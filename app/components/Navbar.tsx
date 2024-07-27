"use client";

import { FaUserNurse } from "react-icons/fa";
import {signIn, signOut} from "next-auth/react";


function Navbar() {
  return (
    <div className="flex justify-between text-xl border-slate-400 bg-emerald-400 ">
            <button className='ml-4 underline underline-offset-2 font-pacifico'>
                onesaporji.com
            </button>
            <div className="flex items-center justify-around gap-2">
            <button 
              onClick={() => signIn()}
              className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring-1 focus:ring-teal-200 transition duration-300">
                Signup
              </button>
              <button 
              onClick={() => signIn()}
              className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring-1 focus:ring-teal-200 transition duration-300">
                Sign In
              </button>
              <button 
              onClick={() => signOut()}
              className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring-1 focus:ring-teal-300 transition duration-300">
                Logout
              </button>
              <div className='flex items-center mr-4 cursor-pointer'><FaUserNurse /></div>
            </div>
    </div>
  )
}

export default Navbar