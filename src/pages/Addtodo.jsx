import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
 import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
export const Addtodo = () => {
  const {username}=useParams();
  const [todoid,setTodoId]=useState();
  const [title,setTitle]=useState();
  const [description,setDescription]=useState();
  const [endDate,setEnddate]=useState();

  const handleSubmit=async()=>
  {
    try
    {
        if(!todoid || !title || !description || !endDate)
        {
            toast.error("All field are required");
            return;
        }

        const data=await axios.post("http://localhost:8000/todo/addTodo",{todoId:todoid,title,description,startDate:new Date().toLocaleDateString(),endDate,username});
        console.log(data);
        toast.success("Todo added successfully");
    }
    catch(err)
    {
      console.log(err);
      toast.error("Todo cannot added");
      if(err.response.data==="todo already exist")
      {
        toast.error("Todo with this Id already exist");
        return;
      }
      else
      {
        toast.error("Todo cannot added");
      }
      
    }
  }
  return (
    <>
    <ToastContainer/>
    <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
    <div className="container mx-auto ">
      <div className="max-w-md mx-auto my-20 py-5 shadow-2xl shadow-blue-500">
        <div className="text-center">
          <h1 className="my-3 text-2xl font-semibold text-blue-700 dark:text-gray-200">
            Add Your Todo Here
          </h1>
         
        </div>
        <div className="m-7">
          <form action="">
          <div className="mb-6">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                ID
              </label>
              <input
                type="text"
                name="todoId"
                id="todoID"
                placeholder="set your todo Id here"
                value={todoid}
                onChange={(e)=>setTodoId(e.target.value)}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  Description
                </label>

              </div>
              <input
                type="text"
                name="Description"
                id="Description"
                placeholder="Description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  Expected End Date
                </label>

              </div>
              <input
                type="Date"
                name="Date"
                id="Date"
                placeholder="Date"
                value={endDate}
                onChange={(e)=>setEnddate(e.target.value)}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            
            <div className="mb-6">
              <Link >
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
              >
                Add Todo
              </button>
              </Link>
            </div>
           
          </form>
        </div>
      </div>
    </div>
  </div>
   </>
  )
}
