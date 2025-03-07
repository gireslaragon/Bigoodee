import React from "react";
import argent from "../images/argent.png";
import clim from "../images/clim.png";
import ampoule from "../images/ampoule.png";
import voiture from "../images/voiture.png";

function Conseils() {
    return(
        <div className="my-16 lg:my-28" >
            <div className='max-w-[1400px] mx-auto px-10' >

                <h1 className="text-xl lg:text-3xl text-center font-semibold" > <span className=" text-transparent bg-clip-text bg-gradient-to-r from-Three via-One to-Four">Conseils pratiques pour économiser l'énergie</span></h1>
                
                <div className="flex felx-row items-center justify-center gap-5 lggap-10 pt-3">
                    <div className="h-[1px] bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90% w-[20%]"></div>
                    <img src={argent} alt="argent" className="w-6 lg:w-10"/>
                    <div className="h-[1px] bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90% w-[20%]"></div>
                </div>

                <p className="text-lg lg:text-xl  text-center pt-10 pb-14 lg:pb-24">Réduire votre consommation d'énergie ne signifie pas forcément changer radicalement votre mode de vie. Avec quelques ajustements simples, vous pouvez faire des économies tout en préservant l'environnement.</p>
            
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-0 lg:mx-0 lg:pl-28 text-white text-center ">
                    <div className="w-full lg:w-[80%] relative" >
                        <img src={clim} alt="Climatiseur" className="w-[100%]"/>
                        <div className="bg-Secondary py-6 w-[100%] rounded-b-2xl absolute bottom-0 px-5">
                            <p>Comment choisir un chauffage performant et économe en énergie ?</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-[80%] relative" >
                        <img src={voiture} alt="Climatiseur" className="w-[100%]"/>
                        <div className="bg-Secondary py-3 w-[100%] rounded-b-2xl absolute bottom-0 px-5">
                            <p>Carport solaire : Produisez votre électricité tout en protégeant votre véhicule</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-[80%] relative" >
                        <img src={ampoule} alt="Climatiseur" className="w-[100%]"/>
                        <div className="bg-Secondary py-6 w-[100%] rounded-b-2xl absolute bottom-0 px-5">
                            <p>Ampoules LED : Pourquoi et comment bien les choisir ?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Conseils;