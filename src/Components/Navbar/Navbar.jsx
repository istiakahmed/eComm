import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router'
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";



const Navbar = () => {

   // ================= dark mood apply=========

   const [toggleValue, setToggleValue] = useState(false);
   // ========== saving the mode when user  visitor
   useEffect(() => {
     const savedMode = localStorage.getItem("mode") || "light";
     localStorage.setItem("mode", savedMode);
     document
       .querySelector("html")
       .classList.toggle("dark", savedMode === "dark");
   }, []);
   // ========== changing the mode on toggle
   const handelMode = () => {
     if (localStorage.getItem("mode") == "light") {
       localStorage.setItem("mode", "dark");
       document.querySelector("html").classList.add("dark");
       setToggleValue(!toggleValue);
     } else {
       localStorage.setItem("mode", "light");
       document.querySelector("html").classList.remove("dark");
       setToggleValue(!toggleValue);
     }
   };
   // ========== dark mood end


  return (
    <>
    <div className='bg-[#ffc107] md:py-[10px] md:px-[10px] py-[20px] transition-all duration-[.4s] dark:bg-black'>
      <div className='container'>
        <div className=''>
          <div className='mainNav flex justify-between items-center'>
            <div className='navLogo'>
                 <img className='logo' src="images/logo.png" alt="logo" />
            </div>

            <div className="menus">
                    <ul>
                      <li><Link to='/'> Home </Link></li>
                      <li><Link to='/product'> Menz </Link></li>
                      <li><Link to='/ladies'> Ladies </Link></li>
                      <li><Link to=''> Subscription </Link></li>
                    
                    </ul>
                </div>
                <div className='icons flex items-center gap-3 text-white text-2xl'>
                  <FaRegUser />
                  <IoCartOutline />

                  {/* =============== dark mood  */}
                  {localStorage.getItem("mode") == "light" ? (
                    <button
                      className="p-1 bg-black text-xl text-white rounded-lg"
                      onClick={handelMode}
                    >
                      <MdDarkMode />

                    </button>
                  ) : (
                    <button
                      className='p-1 bg-purple-500 text-white rounded-lg text-xl'
                      onClick={handelMode}
                    >
                      <MdOutlineLightMode />
                    </button>
                  )}

                </div>

          </div>

        </div>

      </div>
    </div>
    </>
  )
}

export default Navbar
