"use client"

import React, { useState } from 'react'
import { RxAvatar } from "react-icons/rx";
import UserMenu from './UserMenu';
function Navbar() {
  const [openMenu, setOpen] = useState(false)
  return (
    <>
    <div className='flex justify-between px-[3rem] py-[2rem] items-center shadow-md'>
      <div>
        <h1 className='font-bold text-3xl'>Blogs</h1>
      </div>


      <div onClick={()=>setOpen(!openMenu)}>
        <RxAvatar size={30}/>
      </div>
    </div>
    {
      openMenu &&(
        <div className='flex justify-end mr-9 mt-4'>
          <UserMenu />
        </div>
      )
    }
    </>
  )
}

export default Navbar
