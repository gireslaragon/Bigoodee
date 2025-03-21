import React, { useState } from "react";
import Logo from "../images/LogoCouleur.png";
//import { Link } from "react-scroll";
//import { BrowserRouter} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
//import { NavLink } from 'react-router-dom';

function NavBar() {

    const [isOpen, setIsOPen] = useState(false);

    const toggleMenu = () => {
      setIsOPen(!isOpen)
    }
    return(
      
        <nav className='sticky top-0 bg-white shadow-xl z-30'>
        <div className='flex flex-row justify-between items-center max-w-[1400px] mx-auto px-5 py-5 text-lg'>
          <div>
            <HashLink to="/"><img src={Logo} alt="Logo M&E" className="w-16 lg:w-28"/></HashLink>
          </div>
          <div className='md:hidden'>
            <button className='rounded-full p-1 border-2' onClick={toggleMenu}>
              {
                isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                ):(
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-black font-bold">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )
              }
            </button>
          </div>
          <ul  className="hidden md:flex space-x-8 text-Secondary font-semibold" id="apropos">
            <li>
                  <HashLink to="/#NosConseils" smooth={true} duration={1000} className='hover:text-Two hover:font-semibold cursor-pointer'>Nos conseils</HashLink>
            </li>
            <li>
                <HashLink to="/#solution" smooth={true} duration={1000} className='hover:text-Two hover:font-semibold cursor-pointer'>Aides et primes</HashLink>
            </li>
            <li>
                <HashLink to="/#simulation" smooth={true} duration={1000} className="hover:text-Two hover:font-semibold bg-Secondary hover:bg-Primary px-2 py-3 text-white rounded-lg cursor-pointer">Bilan énergétique gratuit</HashLink>
            </li>
          </ul>
        </div>
        {isOpen ? (
          <ul  className="flex flex-col justify-center items-center gap-5 pb-5 md:hidden" id="apropos">
             <li>
                <HashLink to="/#NosConseils" smooth={true} duration={1000} className='hover:text-Two hover:font-semibold cursor-pointer'>Nos conseils</HashLink>
            </li>
            <li>
                <HashLink to="/#solution" smooth={true} duration={1000} className='hover:text-Two hover:font-semibold cursor-pointer'>Aides et primes</HashLink>
            </li>
            <li>
                <HashLink to="/#simulation" smooth={true} duration={1000} className="hover:text-Two hover:font-semibold bg-Secondary hover:bg-Primary px-2 py-3 text-white rounded-lg cursor-pointer">Bilan &nergétique gratuit</HashLink>
            </li>
        </ul>
        ):null}
      </nav>
      
    );
}
export default NavBar; 