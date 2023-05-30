import { RxHamburgerMenu, RxCross2} from "react-icons/rx";
import { useState } from 'react'



const NavBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarOpen =() =>{setSidebarOpen(true)};
    const handleSidebarClose =() =>{setSidebarOpen(false)};

  return (
    <div className='bg-primary'>
        <div className='flex justify-between items-center w-4/5 py-6 mx-auto'>
            <div className=' font-NotoSerif font-semibold text-secondary text-3xl'>UN</div>
            <div className=''>
                <RxHamburgerMenu className='text-3xl text-secondary' onClick={handleSidebarOpen}/>
                {sidebarOpen && (
                <><div className='h-screen w-screen bg-primary opacity-90 absolute top-0 left-0 bottom-0 z-30' onClick={handleSidebarClose}></div> 
        
                <div className='w-4/5 h-screen absolute flex justify-center items-center top-0 right-0 z-40 bg-primary shadow-lg'>
                    <RxCross2 className='absolute top-4 left-4 text-secondary text-xl cursor-pointer' onClick={handleSidebarClose}
                    />
                    <ul className=''>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
                </>)
                

                 }
            </div>
        </div>
    </div>
  )
}

export default NavBar