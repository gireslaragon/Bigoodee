import React from "react";
import argent from "../images/argent.png";
import led from "../images/led.png";
import panneau from "../images/panneau.png";
import carpot from "../images/carport.png";
import chauffage from "../images/chauffage.png";
import mur from "../images/mur.png";
import isolation from "../images/isolation.png";

function Recommandation() {
    return(
        <div className="my-20 lg:my-28">
            <div className='max-w-[1400px] mx-auto px-10'>

                <h2 className="text-xl lg:text-3xl text-center font-semibold"> <span className=" text-transparent bg-clip-text bg-gradient-to-r from-Three via-One to-Four">Nos recommandations pour une maison plus économique</span></h2>
                <div className="flex felx-row items-center justify-center gap-2 lg:gap-10 pt-3">
                    <div className="h-[1px] bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90% w-[30%] lg:w-[20%]"></div>
                    <img src={argent} alt="argent" className="w-6 lg:w-10"/>
                    <div className="h-[1px] bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90% w-[30%] lg:w-[20%]"></div>
                </div>
                <p className="text-lg lg:text-xl  text-center pt-10 pb-16 lg:pb-24"> Adopter des solutions durables, c'est réduire sa consommation d'énergie tout en améliorant son confort au quotidien. Découvrez nos recommandations pour une maison plus intelligente et économe.</p>
                

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 lg:pl-28">
                    <div className="flex flex-col items-center gap-3 lg:gap-5 w-full lg:w-[80%]">
                        <img src={led} alt="led" className="w-12" />
                        <h3 className="text-xl font-medium">Ampoules LED</h3>
                        <p className="text-center">Réduisez votre consommation en optant pour des éclairages longue durée et basse consommation.</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 lg:gap-5 w-full lg:w-[80%]">
                        <img src={panneau} alt="panneau" className="w-[100px]" />
                        <h3 className="text-xl font-medium">Panneaux solaires</h3>
                        <p className="text-center">Faites des économies d'énergie tout en utilisant une source renouvelable et durable.</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 lg:gap-5 w-full lg:w-[80%]">
                        <img src={carpot} alt="carpot" className="w-20" />
                        <h3 className="text-xl font-medium">Carports solaires</h3>
                        <p className="text-center">Produisez votre propre électricité et rechargez votre véhicule avec un abri solaire.</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 lg:gap-5 w-full lg:w-[80%]">
                        <img src={chauffage} alt="chauffage" className="w-16" />
                        <h3 className="text-xl font-medium">Chauffage</h3>
                        <p className="text-center">Optez pour des radiateurs à inertie ou des pompes à chaleur, plus économes que les chauffages classiques.</p>
                    </div>

                    <div className="flex flex-col  items-center gap-3 lg:gap-5 w-full lg:w-[80%]">
                        <img src={mur} alt="mur" className="w-20" />
                        <h3 className="text-xl font-medium">Isolation des murs</h3>
                        <p className="text-center">Réduisez les pertes thermiques en isolant vos murs avec des matériaux performants.</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 lg:gap-5 w-full lg:w-[80%]">
                        <img src={isolation} alt="isolation" className="w-[90px]" />
                        <h3 className="text-xl font-medium">Isolation des combles</h3>
                        <p className="text-center" id="aide">Jusqu'à 30% des pertes de chaleur proviennent du toit. Une bonne isolation des combles permet de réduire considérablement votre consommation énergétique.</p>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default Recommandation;