import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Button from './atoms/Button';

const navlinks = [
  {
    url: "/",
    name: "home"
  },
  {
    url: "/donations",
    name: "donations"
  },
  {
    url: "our-team",
    name: "our team"
  }
]
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="p-4 flex justify-between bg-white dark:bg-darkColor md:bg-inherit items-center w-full md:justify-start md:gap-10 md:shadow-md">
      <div className="logo bg-transparent">
        <img
          src="https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-foxy-logo-template-animal-animals-png-image_5611651.png"
          alt="logo"
          className="w-12 h-12 bg-transparent"
        />
      </div>
      <div className="navlinks flex items-center gap-12 md:w-full">
        <div className={"burger p-2 rounded-sm z-50 md:hidden"} onClick={()=>setNavOpen(!navOpen)}>
            <div className="line w-6 h-1 bg-slate-100 m-1"></div>
            <div className="line w-6 h-1 bg-slate-100 m-1"></div>
            <div className="line w-6 h-1 bg-slate-100 m-1"></div>
        </div>
        <div className={navOpen? "h-fit p-5 shadow-md absolute top-0 left-0 w-full" : "hidden md:flex md:w-full md:justify-between"}>
          <ul className='h-fit md:flex md:gap-4'>
            {
              navlinks.map((item, index) => (
              <li key={index} className='mb-2 pt-2 pb-2 uppercase hover:text-slate-300' >
                < Link to={item.url}>{ item.name.charAt(0).toUpperCase() + item.name.toLowerCase().slice(1)}</Link>
              </li>
              ))
            }
          </ul>
          <Button name={"Donate Now"}/>
        </div>
      </div>
    </div>
  );
}

export default Navbar