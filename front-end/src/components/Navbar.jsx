import React, { useState } from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);


  return (
    <div className="p-4 flex justify-between items-center relative md:justify-start md:gap-10 md:shadow-md">
      <div className="logo">
        <img
          src="https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-foxy-logo-template-animal-animals-png-image_5611651.png"
          alt="logo"
          className="w-12 h-12"
        />
      </div>
      <div className="navlinks flex items-center gap-12 md:w-full">
        <div className={"burger z-50 md:hidden"} onClick={()=>setNavOpen(!navOpen)}>
            <div className="line w-6 h-1 bg-slate-100 m-1"></div>
            <div className="line w-6 h-1 bg-slate-100 m-1"></div>
            <div className="line w-6 h-1 bg-slate-100 m-1"></div>
        </div>
        <div className={navOpen? "h-fit p-5 shadow-md absolute top-0 left-0 w-full" : "hidden md:flex md:w-full md:justify-between"}>
          <ul className='h-fit md:flex md:gap-4'>
            <li className='mb-2 pt-2 pb-2 uppercase hover:text-slate-300' >
              <a href="">About the company</a>
            </li>
            <li className='mb-2 pt-2 pb-2 uppercase hover:text-slate-300'>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li className='mb-2 pt-2 pb-2 uppercase hover:text-slate-300'>
              <a href="">Analytics</a>
            </li>
          </ul>
          <div className="buttons flex gap-4 bg-inherit">
            <button className="bg-gray-700 pl-4 pr-4 rounded-sm h-10 hover:bg-gray-800">
              Sign in
            </button>
            <button className="bg-blue-400 pl-4 pr-4 rounded-sm h-10 hover:bg-blue-300">
              Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar