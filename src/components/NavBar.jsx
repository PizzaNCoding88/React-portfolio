import { RxHamburgerMenu, RxCross2} from "react-icons/rx";
import { useState } from 'react';
import {motion, AnimatePresence} from 'framer-motion';

const NavBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarOpen =() =>{setSidebarOpen(true)};
    const handleSidebarClose =() =>{setSidebarOpen(false)};

  return (
    <div className='bg-gradient-to-r from-primary to-[#222222]'>
        <div className='flex justify-between items-center w-4/5 py-6 mx-auto'>
            <div className=' font-NotoSerif font-semibold text-secondary text-3xl'>UN</div>
            <div className=''>
                <RxHamburgerMenu className='text-3xl text-secondary' onClick={handleSidebarOpen}/>

                <AnimatePresence>

                {sidebarOpen && (
                  <><motion.div className='h-screen w-screen bg-primary opacity-90 absolute top-0 left-0 bottom-0 z-30'
                  key="overlay"
                  initial={{opacity: 0}}
                  animate={{opacity:1}}
                  exit={{opacity: 0, transition:{duration:0.1}}}
                  onClick={handleSidebarClose}></motion.div> 
        
                <motion.div
                key="navbar"
                initial={{x: '200%', opacity: 0, scale: 0}}
                animate={{x:0, opacity:1, scale: 1}}
                exit={{x: '200%', opacity: 0, transition:{duration:0.2}}}
                transition={{
                  type:"spring",
                  bounce: 0.3,
                   duration: 0.5
                }}
                 className='w-4/5 h-screen absolute flex justify-center items-center top-0 right-0 z-40 bg-gradient-to-r from-primary to-[#222222] shadow-nav-shadow shadow-2xl font-NotoSerif'>
                    <RxCross2 className='absolute top-4 left-4 text-secondary text-xl cursor-pointer font-bold' onClick={handleSidebarClose}
                    />
                    <ul className='flex flex-col justify-between items-center gap-16 text-xl font-Ubuntu text-secondary font-bold'>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </motion.div>
                </>)
                 }
                 </AnimatePresence>


            </div>
        </div>
    </div>
  )
}

export default NavBar