
import {BiClipboard, BiHomeAlt, BiUser} from "react-icons/bi"

import { BsChatSquare, BsBriefcase} from 'react-icons/bs';

import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
   
          <div className='container mx-auto'>
            
            <div className='w-full bg-orange-600 h-[96] p-2 backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50'>
                <Link to='home' activeClass=' active' smooth={true} spy={true} className=' cursor-pointer w-[50px] h-[50px]  flex items-center justify-center'>
                      <BiHomeAlt/>
                </Link>
                <Link to='about' activeClass=' active' smooth={true} spy={true} className=' cursor-pointer w-[50px] h-[50px]  flex items-center justify-center'>
                      <BiUser/>
                </Link>
                <Link to='services' activeClass=' active' smooth={true} spy={true} className=' cursor-pointer w-[50px] h-[50px]  flex items-center justify-center'>
                      <BiClipboard/>
                </Link >
                <Link to='work' activeClass=' active' smooth={true} spy={true} className=' cursor-pointer w-[50px] h-[50px]  flex items-center justify-center'>
                      <BsBriefcase/>
                </Link>
                <Link to='contact' activeClass=' active' smooth={true} spy={true} className=' cursor-pointer w-[50px] h-[50px]  flex items-center justify-center'>
                      <BsChatSquare/>
                </Link>
            </div>
            </div>
    </nav>
    )
};

export default Nav;
