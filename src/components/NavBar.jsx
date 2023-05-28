import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react'
import Sidebar from './Sidebar';


const NavBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarOpen =() =>{setSidebarOpen(true)};
    const handleSidebarClose =() =>{setSidebarOpen(false)};
  return (
    <div className='bg-primary'>
        <div className='flex justify-between items-center w-4/5 py-6 mx-auto'>
            <div className=' font-NotoSerif font-semibold text-secondary text-3xl'>UN</div>
            <div className=' cursor-pointer'>
                <RxHamburgerMenu className='text-3xl text-secondary' onClick={handleSidebarOpen}/>
                {sidebarOpen && <Sidebar /> }
            </div>
        </div>
    </div>
  )
}

export default NavBar