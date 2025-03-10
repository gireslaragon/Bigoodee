import React from "react";
import chargeur from "../images/chargeur.png"

function Projet() {
    return (
        <div className="my-14 lg:my-28 relative">
            <div className='max-w-[1400px] mx-auto px-10'>
                <div className="flex flex-col items-center gap-10">
                    <h2 className="text-xl lg:text-3xl text-center font-semibold"> <span className=" text-transparent bg-clip-text bg-gradient-to-r from-Three via-One to-Four">Un projet ?</span></h2>
                    <a href="/" className="hover:text-Two hover:font-semibold bg-Secondary hover:bg-Primary py-2 px-5 rounded-md text-white text-md hover:text-lg w-fit">Demander un devis</a>
                </div>
                <div className="absolute left-0 -bottom-20 invisible md:visible">
                    <img src={chargeur} alt="chargeur" className="w-[70%]"/>
                </div>
            </div>
        </div>
    );
}
export default Projet;