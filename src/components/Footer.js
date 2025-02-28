import React from "react";
import logoBas from "../images/logobas.png"

function Footer() {
    return(
        <div className="bg-PinkR mt-20" id="contact">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto px-10 py-20'>
            <div className="flex flex-col gap-5">
                <img src={logoBas} alt="logo du bas" className="w-32"/>
                <p className="text-white sm:text-lg lg:text-xl">Bigoodee accompagne les femmes aux cheveux texturés dans leur quête de naturel, dans leur besoin de prendre soin de leurs cheveux afin de leur permettre de s’épanouir au quotidien.</p>
            </div>
            <form className='flex flex-col items-start gap-2 justify-start'>
                <input type='email' placeholder='Votre adresse e-mail' className='w-full border-2 rounded-md p-2 text-md font-serif focus:outline-PinkR '/>
                <button type='submit' className='bg-white hover:bg-PinkC  opacity-85 text-black font-medium rounded-md sm:text-sm md:text-md p-2'> M'INSCRIRE</button>
            </form>
          </div>
        </div>
    );
}
export default Footer;