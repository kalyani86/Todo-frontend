import React from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
    <div className="container mx-auto ">
      <div className="max-w-md mx-auto py-5 shadow-2xl shadow-blue-500">
        <div className="text-center">
          <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
            Sign up
          </h1>
        </div>
        <div className="m-7">
          <form action="">
          <div className="mb-6">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                username
              </label>
              <input
                type="username"
                name="username"
                id="username"
                placeholder="username"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
               fullName
              </label>
              <input
                type="fullName"
                name="fullName"
                id="fullName"
                placeholder="fullName"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
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
              <button
                type="button"
                className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
              >
                Signup
              </button>
            </div>
            <p className="text-sm text-center text-gray-400">
              Already Register?
              <Link
                to={'/login'}
                className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
              >
                Login
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
