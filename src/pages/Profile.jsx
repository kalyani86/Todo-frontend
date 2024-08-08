import React, { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Profile = () => {
  const {username}=useParams();
console.log(username);

const [fullname,setFullname]=useState("");
const [email,setEmail]=useState("");
const [photo,setPhoto]=useState();
const [path,setPath]=useState();
useEffect(()=>{
  const getData=async()=>
    {
      try{
          const {data}=await axios.post("http://localhost:8000/users/getData",{username});
          setFullname(data.data.fullname);
          setEmail(data.data.email);
          if(data.data.ProfilePhoto)
          {
            setPhoto(data.data.ProfilePhoto);
          }
      }
      catch(err)
      {
        toast.error("unable to show profile");
      }
    }
    getData();
},[])

const handleSubmit=async(e)=>
{
  e.preventDefault();
  const formData=new FormData();
  formData.append('email',email);
  formData.append('ProfilePhoto',path)
  try
  {
      
      const res=await axios.post("http://localhost:8000/users/uploadPhoto",formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(res);

      toast.success("Profile photo uploaded successfully");
      return;
  }catch(err)
  {
    toast.error("Profile photo cannot be uploaded");
    return;
  }
}
  return (
    <>
    <ToastContainer/>
     <Layout username={username}/>
    <div className=" xl:ml-80">
    <div className='h-screen bg-slate-100 flex flex-col items-center justify-center'>
    <div className="flex flex-col bg-white justify-center items-center font-semibold text-center rounded-3xl border shadow-lg shadow-blue-500 p-10 w-9/12 md:w-1/3 ">
    <img className={photo?"h-40 w-40 mb-4 rounded-full":"w-32 rounded-full mx-auto"} src={photo?photo:"https://imgs.search.brave.com/I8-5s0_lmEVnNLbUyELxYGo_cDnNefsRSdNeNPXkpsk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zMC0z/MDc0MTZfcHJvZmls/ZS1pY29uLXBuZy1p/bWFnZS1mcmVlLWRv/d25sb2FkLXNlYXJj/aHBuZy1lbXBsb3ll/ZS5wbmc"} alt="Profile picture"/>
    
    <input className='text-xs mb-4 ' type='file'  onChange={(e)=>setPath(e.target.files[0])}></input>
    <button className='bg-indigo-600 px-8 py-1 rounded-3xl text-gray-100 text-xs uppercase tracking-wide' onClick={handleSubmit}>upload profile photo</button>
   
    <div className='mt-6'>
    <label className=''>Username</label>
    <h2 className=" text-gray-400 "> {username} </h2>
    </div>
    <div className='mt-6'>
    <label className=''>fullname</label>
    <h2 className=" text-gray-400 "> {fullname} </h2>
    </div>
    <div className='mt-6'>
    <label className=''>Email</label>
    <h2 className=" text-gray-400 "> {email} </h2>
    </div>

    <Link
    to={`/${username}/editProfile`}>
   <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Edit Profile</button>
   </Link>
   
  </div>
  </div>
  </div>
 
  </>
  )
}
