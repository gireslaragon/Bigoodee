import React from "react";
import telephone from "../images/Telephone.png"

function Stimulation() {
    return (
        <div className="my-20 lg:my-28" >
            <div className='max-w-[1400px] mx-auto px-10'>
    
                <div className="flex flex-col items-center gap-5">
                    <h2 className="text-xl lg:text-3xl text-center font-semibold"> <span className=" text-transparent bg-clip-text bg-gradient-to-r from-Three via-One to-Four">Le guide ultime pour économiser l'énergie et réduire vos factures !</span></h2>
                    <img src={telephone} alt="telephone"  className="w-10 pb-5"/>
                </div>
               
               <div className="flex flex-col gap-5 text-lg lg:text-xl">
                    <p>Vous souhaitez réduire votre consommation d'énergie tout en faisant des économies ?</p>
                    <p> <span className="font-bold">Maison et économies</span> est votre allié pour adopter les bons gestes et optimiser votre consommation !</p>
                    <ul className="list-disc flex flex-col gap-2 ml-5 md:ml-10">
                        <li><span className="font-bold">Conseils pratiques</span> pour économiser sur l'électricité, le chauffage et l'eau</li>
                        <li><span className="font-bold">Guides et astuces</span> pour une maison plus éco-responsable</li>
                        <li><span className="font-bold">Comparatifs et tests</span> des meilleures solutions énergétiques</li>
                        <li><span className="font-bold">Aides et subventions</span> pour financer vos projets</li>
                    </ul>
                    <p>Que vous soyez locataire ou propriétaire, notre guide vous aide à mieux comprendre votre consommation et à adopter des solutions durables et efficaces. </p>
                    <p>Rejoignez-nous dès maintenant en vous inscrivant à notre newsletter et commencez à économiser sur votre facture énergétique !</p>
               </div>
               
                
                
            </div>
        </div>
    );
}
export default Stimulation;