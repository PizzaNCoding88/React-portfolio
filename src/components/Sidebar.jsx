import React from 'react'

const Sidebar = () => {
    
  return (
    <>
    <div className='h-screen w-screen bg-primary opacity-90 absolute top-0 left-0 bottom-0 z-30'></div>
    <div className='w-4/5 h-screen absolute flex justify-center items-center top-0 right-0 z-30 bg-primary shadow-lg'>
        <ul className=''>
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </div>
    </>
  )
}

export default Sidebar