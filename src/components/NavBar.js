import React, { useState } from "react";
import Logo from "../images/LogoCouleur.png";

function NavBar() {

    const [isOpen, setIsOPen] = useState(false);

    const toggleMenu = () => {
      setIsOPen(!isOpen)
    }
    return(
        <nav className='sticky top-0 bg-white shadow-xl z-10'>
        <div className='flex flex-row justify-between items-center max-w-[1400px] mx-auto px-5 py-5 text-lg'>
          <div>
            <img src={Logo} alt="Logo M&E" className="w-16 lg:w-28"/>
          </div>
          <div className='md:hidden'>
            <button className='rounded-full p-1 border-2' onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-black font-bold">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <ul  className="hidden md:flex space-x-8 text-Secondary font-semibold">
            <li>
                <a href='#acceuil' className='hover:text-Two hover:font-semibold'>Nos conseils</a>
            </li>
            <li>
                <a href='#contact' className='hover:text-Two hover:font-semibold'>Nos solutions</a>
            </li>
            <li>
                <a href='#contact' className='hover:text-Two hover:font-semibold bg-Secondary hover:bg-Primary px-2 py-3 text-white rounded-lg'>Simuler ma consomation d'énergie</a>
            </li>
          </ul>
        </div>
        {isOpen ? (
          <ul  className="flex flex-col justify-center items-center gap-5 pb-5 md:hidden">
            <li>
                <a href='#nos conseils' className='hover:text-PinkR'>Nos conseils</a>
            </li>
            <li>
                <a href='#nos solutions' className='hover:text-PinkR'>Nos solutions</a>
            </li>
            <li>
                <a href='#ma consomation' className='hover:text-Two hover:font-semibold bg-Primary p-2 text-white rounded-lg'>Simuler ma consomation d'énergie</a>
            </li>
        </ul>
        ):null}
      </nav>
    );
}
export default NavBar; 