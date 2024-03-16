import React from 'react'
import { FaPencilAlt } from "react-icons/fa";
import { IoEnter } from "react-icons/io5";
import { IoExit } from "react-icons/io5";
function UserMenu() {
  return (
    <div className='z-20 flex flex-col w-[9rem] px-4 bg-slate-100/80 rounded-lg py-4'>
        <div className='cursor-pointer hover:opacity-65 flex items-center gap-2 pb-2'>
            <IoEnter size={20} />
            <h3>SignIn</h3>
        </div>
        <hr />
        <div className='cursor-pointer hover:opacity-65 flex items-center gap-2 pt-2'>
            <FaPencilAlt size={20} />
            <h3>Register</h3>
        </div>
    </div>
  )
}

export default UserMenu
