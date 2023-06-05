import { RxCaretDown} from "react-icons/rx";

const HeroSection = () => {
  return(
    <>
    <div className='h-[calc(100vh-5.25rem)] flex justify-center items-center bg-gradient-to-r from-primary to-[#222222] font-Ubuntu relative' id='home'>
        <div className='before:content-["UN"] before:text-[15rem] before:text-additional before:absolute before:top-[50%] before:left-[50%] before:-translate-x-1/2 before:-translate-y-1/2 before:font-bold before:z-0 before:drop-shadow-xl before:blur-[1px] before:[text-shadow:_0_0_40px_rgb(235,89,57)]'></div>
        <div className='w-4/5 z-20'>
            <p className='text-left mb-5 text-secondary font-bold text-xl'>Frontend</p>
            <h1 className='text-center text-5xl uppercase leading-10 font-bold text-secondary drop-shadow-2xl'>Umberto</h1>
            <p className='text-right mt-5 text-secondary font-bold text-xl'>Web Dev</p>
        </div>
        <p className="text-secondary text-center absolute bottom-4 left-1/2 -translate-x-1/2 uppercase text-sm">Projects</p>
        <RxCaretDown className=" absolute bottom-0 text-secondary animate-bounce" />
      
    </div>
    </>
  )
}

export default HeroSection