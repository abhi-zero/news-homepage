import React, { useState } from 'react'
import { NavLink } from 'react-router'
import logo from '../../assets/images/logo.svg'
import {navLinks} from '../../content/index'
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className='w-full'>
        <nav className='max-w-[1440px]  m-auto bg-[#FFFDFA] dark:bg-[#00001A]'>
           <div className='flex justify-between items-center px-[30px] py-[40px]'>
             <div className='logo'>
                <NavLink to='/'
                className='w-[40px] h-[40px]'
                >
                    <img src={logo} alt="Logo" />
                </NavLink>
            </div>
            <div className='link sm:flex gap-10 hidden '>
              {navLinks.map((nl)=> (
                <NavLink key={nl.name} to={nl.link} 
                className='text-[#5D5F79] hover:text-[#00001A] dark:text-[#FFFDFA] dark:hover:text-[#C5C6CE] transition-colors duration-300 ease-in-out'>
                  
                  {nl.name}
                </NavLink>
              ))}
            </div>
            <button className='text-2xl cursor-pointer overflow-hidden sm:hidden'
              onClick={() => {setOpen(prev => !prev)}}
            >
              <RxHamburgerMenu />
            </button>
           </div>
             
             <div className={` ${open ? 'flex' : 'hidden'} link flex-col gap-[20px] items-end sm:hidden py-[30px] px-[50px] bg-[#00001A] dark:bg-[#FFFDFA] text-white dark:text-[#00001A]`}>
              {navLinks.map((nl)=> (
                <NavLink key={nl.name} to={nl.link} >
                  {nl.name}
                </NavLink>
              ))}
            </div>
        </nav>
    </div>
  )
}
