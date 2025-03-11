import React from "react";
import logoBas from "../images/logoBas.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
//import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";


function Bas() {
    const monteHaut = () => {
        window.scrollTo({top: 0, behavior: 'auto'});
    };
    return(
        <div className=" bg-Primary"> 
            <div className='max-w-[1400px] mx-auto px-10 py-5 lg:py-10 text-white'>
                <div className="flex flex-col lg:flex-row justify-between items-start gap-5 lg:gap-0">
                    <img src={logoBas} alt="logo" className="w-[20%] lg:w-[10%]"/>
                    <ul className="flex flex-col gap-2 lg:gap-5">
                        <li>
                            <HashLink to="/#NosConseils" smooth={true} duration={1000} className='hover:text-Two cursor-pointer'>Nos conseils</HashLink>
                        </li>
                        <li className="hover:text-Two">
                            <HashLink to="/#aide" smooth={true} duration={1000}>Aide financière</HashLink>
                        </li>
                        <li className="hover:text-Two">
                            <NavLink to="/apropos" onClick={monteHaut}>À propos</NavLink>
                        </li>
                    </ul>
                    <div>
                        <p className="text-lg lg:text-xl">Inscrivez vous à notre newsletter pour recevoir nos actualités</p>

                        
                        <form className="flex flex-row gap-1 mt-4 lg:mt-8">
                            <input type="email" placeholder='Entrez votre adresse mail' className='text-black p-2 text-sm w-[70%]' required/>
                            <button type="submit" className="p-2 bg-Secondary w-[30%] text-md hover:text-Three">S'inscrire</button>
                        </form>
                        

                        <div className="mt-5 lg:mt-10">
                            <p className="text-lg lg:text-xl font-semibold">Suivez-nous</p>
                            <div className="flex flex-row gap-3 mt-3">
                                <a href="https://www.facebook.com/share/1AhsZYXtAj/"><FaFacebook className="text-2xl lg:text-4xl"></FaFacebook></a>
                                <a href="https://www.instagram.com/maisoneteconomies?igsh=eHo4eWFkM2ltNW16"><FaInstagram className=" text-2xl lg:text-4xl"></FaInstagram></a>
                            </div>
                        </div>
                    </div>
                </div>

                
                
            </div>
            <p className="text-white text-center py-3 text-sm lg:text-md">© 2025 Maison & Economie</p>
        </div>
    );
}
export default Bas;