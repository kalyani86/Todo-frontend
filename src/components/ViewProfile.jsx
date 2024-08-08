import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { UserContext } from '../Context/UserContext';
import { useContext } from 'react';

export const ViewProfile = ({username}) => {
  const navigate=useNavigate();
  const logout=async()=>
    {
        try{
          
          const res=await axios.get("http://localhost:8000/users/logout",{withCredentials:true});
          if(!res)
          {
            toast.error("unothorized error");
            return;
          }
          return navigate('/login');
        }catch(err)
        {
          console.log("error in logout");
        }
    }
  return (
    <>
    <ToastContainer/>
    <div className="w-20 md:w-40 bg-white rounded-lg shadow-md p-5 absolute md:right-8 right-1">
    <img className="w-12 rounded-full mx-auto" src="https://imgs.search.brave.com/I8-5s0_lmEVnNLbUyELxYGo_cDnNefsRSdNeNPXkpsk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zMC0z/MDc0MTZfcHJvZmls/ZS1pY29uLXBuZy1p/bWFnZS1mcmVlLWRv/d25sb2FkLXNlYXJj/aHBuZy1lbXBsb3ll/ZS5wbmc" alt="Profile picture"/>
    <h2 className="text-center md:text-2xl font-semibold mt-3 text-sm">{username}</h2>
    <div className="flex justify-center ">
      
    </div>
    <div className="md:mt-5 flex flex-col items-center mt-2">
      <Link to={'/ViewProfile'}  className='text-blue-500 text-sm  underline text-center'>View Profile</Link>
      <button onClick={logout} className='bg-blue-500  text-sm  mt-2 md:mt-4 md:text-md md:font-medium text-white px-2'>Logout</button>  
    </div>
  </div>
  </>
  )
}
