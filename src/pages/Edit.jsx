import React from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Layout } from '../components/Layout';

export const Edit = () => {
  return (
    <>
    <Layout/>
    <div className="flex items-center min-h-screen bg-white dark:bg-gray-900 lg:ml-40">
      <ToastContainer/>
      <div className="container mx-auto ">
        <div className="max-w-md mx-auto my-20 py-5 shadow-2xl shadow-blue-500">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Edit Your Profile
            </h1>
          </div>
          <div className="m-7">
            <form action="">
              <div className="mb-6">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  
                  placeholder="you@company.com"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-gray-600 dark:text-gray-400">
                    Password
                  </label>
                  <a
                    href="#!"
                    className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                 
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <Link>
                  <button
                    type="button"
                   
                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Login
                  </button>
                </Link>
              </div>
              <p className="text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?{" "}
                <Link
                  to={"/signup"}
                  className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                >
                  Sign up
                </Link>
                .
              </p>
            </form>
            {/* <hr className="mt-4 border border-gray-200 "></hr>
            <div className="flex flex-row justify-center mt-4">
                  
                  <button className="flex border text-blue-700 bg-gray-100 p-1"><img className="w-10" src="https://imgs.search.brave.com/onyfE4YI-_6mLjQmAl6h9emCYimLf4dZ4zj2O9adlVs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZ29vZ2xlLXMt/bG9nby8xNTAvR29v/Z2xlX0ljb25zLTA5/LTEyOC5wbmc" alt="Google logo" /><h1 className="mt-2">continue With Google</h1></button>
          </div> */}
          </div>
          
        </div>
       
      </div>
    </div>
    </>
  )
}
