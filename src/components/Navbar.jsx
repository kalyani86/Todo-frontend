import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <div className="">
    <section className="relative mx-auto">
      
      <nav className="flex justify-between bg-blue-600 text-white w-screen">
        <div className="p-2 flex w-full items-center">
        <a class="text-3xl font-bold font-heading" href="#">
          <img src='../public/todo-high-resolution-logo.png' width={72}></img>
        </a>
        
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li><a className="hover:text-gray-200" href="#">Home</a></li>
            <li><a className="hover:text-gray-200" href="#">Todos</a></li>
            <li><a className="hover:text-gray-200" href="#">Contact Us</a></li>
          </ul>
          </div>
      </nav>
      
    </section>
  </div>
 
  <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
      <div>
          
      </div>
  </div>
  </>
  )
}
