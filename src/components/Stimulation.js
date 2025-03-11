import React from "react";
import telephone from "../images/Telephone.png"

function Stimulation() {
    return (
        <div className="my-20 lg:my-28" >
            <div className='flex flex-col lg:flex-row justify-evenly gap-20 max-w-[1400px] mx-auto px-10'>

                <div className="flex flex-col items-center lg:items-end gap-3 lg:gap-0 w-full lg:w-[50%] px-3">
                    <h2 className="text-xl lg:text-3xl text-center font-semibold"> <span className=" text-transparent bg-clip-text bg-gradient-to-r from-Three via-One to-Four">Simulez votre consommation d'énergie et optimisez vos économies</span></h2>
                    <img src={telephone} alt="telephone"  className="w-10 pb-10"/>
                    <ul className="list-disc flex flex-col gap-5 font-semibold text-md lg:text-lg">
                        <li>Estimez votre consommation : Sélectionnez vos appareils et obtenez une estimation de votre consommation énergétique.</li>
                        <li>Découvrez des optimisations : Recevez des recommandations personnalisées pour réduire votre facture d'énergie.</li>
                        <li>Comparez votre impact : Visualisez les économies potentielles avec des alternatives plus efficaces.</li>
                    </ul>
                </div>


                <div className="flex flex-col items-center gap-8 w-full lg:w-[50%]">
                    <div className=" bg-white rounded-lg shadow-lg border-2 border-gray-200 w-full h-96"></div>
                    <a href="/" className="hover:text-Two bg-Secondary py-2 px-5 rounded-md text-white text-md" id="solution">Simuler ma consommation</a>
                </div>
                
                
            </div>
        </div>
    );
}
export default Stimulation;