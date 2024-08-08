import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { ViewProfile } from "./ViewProfile";
export const Navbar = ({username}) => {
  const [showProfile, setShowprofile] = useState(false);

  const onShowProfile = () => {
    if (showProfile) {
      setShowprofile(false);
    } else {
      setShowprofile(true);
    }
    //console.log(showProfile);
  };

  return (
    <>
      <div className="">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-blue-600 text-white ">
            <div className="p-2 flex w-full items-center">
              <Link className="text-3xl font-bold font-heading">
                <img src="/todo-high-resolution-logo.png" width={50}></img>
              </Link>

              <ul className="text-sm flex px-4 mx-auto justify-between sm:font-heading space-x-2 font-semibold  sm:space-x-12 sm:text-xl">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `hover:text-gray-200  ${
                        isActive ? "underline" : ""
                      }`
                    }
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                        `hover:text-gray-200  ${
                          isActive ? "underline" : ""
                        }`
                      }
                    to={`/${username}`}
                  >
                    Todos
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                        `hover:text-gray-200  ${
                          isActive ? "underline" : ""
                        }`
                      }
                    to={"/contactUs"}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="">
              <Link onClick={onShowProfile}>
                <CgProfile size={32} className="mr-4 mt-4 mb-4  md:mr-20" />
              </Link>
            </div>
          </nav>
          {showProfile ? <ViewProfile username={username} /> : <></>}
        </section>
      </div>
    </>
  );
};
