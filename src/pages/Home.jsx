import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";

export const Home = () => {
  const [accessToken, setaccessToken] = useState('');
const navigate=useNavigate();
  useEffect(() => {
    const token = Cookies.get('accessToken'); // assuming the backend sets a 'username' cookie
    if (token) {
      setaccessToken(token);
    }
  }, []);
  //console.log(accessToken);

  const [username,setUsername]=useState('');
  const isAuth=async()=>
  {
    try{
       const res=await axios.get('http://localhost:8000/users/isAuth',{withCredentials:true});
       if(!res)
       {
          toast.error("unothorized request");
          return;
       }
       console.log(res.data.user.username);
       setUsername(res?.data?.user?.username);
       
       return navigate(`/${res.data.user.username}`);
    }catch(err)
    {
      console.log(err);
    }
  }
  const logout=async()=>
  {
    try{
        const res=await axios.get('http://localhost:8000/users/logout',{withCredentials:true});
        console.log(res);
    }catch(err)
    {
      console.log(err);
    }
  }
  const images = [
    "https://imgs.search.brave.com/xGIzlpAZklcUGfiT6V5eJkqRwlv6xqfYusgXCZZA5jM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzI1/NTEvNjEzNi9maWxl/cy9wbGFubmluZy1x/dW90ZXMtMl8yOWM0/NmE5ZS1mODM5LTQx/YzMtOTZjOC05NGJh/ODU2MTAwZGJfNDgw/eDQ4MC5wbmc_dj0x/NjU4MzkzMjU3",
    "https://imgs.search.brave.com/6sBjYInreLHzDNfFnJX92pRBsopyA_1BQuXbFZKv9hk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzI1/NTEvNjEzNi9maWxl/cy9wbGFubmluZy1x/dW90ZXMtNF9hMGVi/ZTIzZC1jMTcxLTRk/YzctYjk5OS05YzVh/NmQxZjE2Y2NfNDgw/eDQ4MC5wbmc_dj0x/NjU4MzkzMzU1",
    "https://imgs.search.brave.com/uZkeFUj1elEGqk08kkyYxXfYu7eWOuEAHL5wcDwvplo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzI1/NTEvNjEzNi9maWxl/cy9wbGFubmluZy1x/dW90ZXMtM19kMzUy/NzgwYS0xODRhLTQ5/YTktOGNmOS1iYWJh/ODY1Zjk5ZjNfNDgw/eDQ4MC5wbmc_dj0x/NjU4MzkzMzIy",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  return (
    <>
      <div className=" bg-gradient-to-r from-blue-100 via-purple-50 to-blue-50 ...">
        <div className="">
          <section className="relative mx-auto ">
            <nav className="flex justify-between bg-blue-600 text-white font-serif">
              <div className="p-2 flex w-full items-center">
                <Link className="text-3xl font-bold font-heading">
                  <img src="/todo-high-resolution-logo.png" width={50}></img>
                </Link>

                <ul className="text-sm flex px-4 mx-auto justify-between sm:font-heading space-x-2 font-semibold  sm:space-x-12 sm:text-xl">
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `hover:text-gray-200  ${isActive ? "underline" : ""}`
                      }
                      to={"/"}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `hover:text-gray-200  ${isActive ? "underline" : ""}`
                      }
                      to={"/AboutUS"}
                    >
                      About US
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `hover:text-gray-200  ${isActive ? "underline" : ""}`
                      }
                      to={"/contactUs"}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="">
                {accessToken?  (
                  <button
                    className="bg-white m-2 text-blue-500 px-4 py-2 rounded-lg shadow-md"
                    onClick={logout}
                  >
                    LogOut
                  </button>
                ): (
                  <Link to={"/login"}>
                    <button className="bg-white m-2 text-blue-500 px-4 py-2 rounded-lg shadow-md">
                      LogIn
                    </button>
                  </Link>
                )}
              </div>
            </nav>
          </section>
        </div>
        <div className="lg:mt-24 mt-10 lg:flex ">
          <div className="lg:w-1/2 ">
            <div className="relative flex  m-auto justify-center">
              <div className="overflow-hidden m-auto ">
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex}`}
                  className=""
                />
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -2"
              >
                &#10094;
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2  p-2"
              >
                &#10095;
              </button>
            </div>
            <div className="flex justify-center mt-4">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 mx-1 rounded-full ${
                    idx === currentIndex ? "bg-gray-800" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center text-center items-center">
            <div className="">
              <p className="indent-10 m-10">
                Lorem x! Incidun reiciendis perferendis eius sed qui voluptates
                assumenda laudantium praesentium.
              </p>
              {
                accessToken? (<button  onClick={isAuth} className="mt-10 bg-gradient-to-r from-blue-300 to-slate-100 p-2 rounded-md">
                Get Started {`->`}
              </button>):(<Link to={'/login'}><button className="mt-10 bg-gradient-to-r from-blue-300 to-slate-100 p-2 rounded-md">
                Get Started {`->`}
              </button></Link>)
              }
             
            </div>
          </div>
        </div>
        <footer className="bg-blue-600 mt-12 text-white text-center p-4">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
          <ul className="flex justify-center space-x-4 mt-2">
            <li>
              <NavLink to="/privacy" className="hover:underline">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms" className="hover:underline">
                Terms of Service
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:underline">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};
