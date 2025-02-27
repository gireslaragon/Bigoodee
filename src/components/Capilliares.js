import React from "react";

function Capillaire() {

    const choix =  [
        {id: 0, contenu: "GARDER LES CHEVEUX NOURRIS ET HYDRATES MEME AVEC LA COIFFURE POUR LES RETROUVER EN BONNE SANTE"},
        {id: 1, contenu: "RESSERER, HYDRATER ET RENFORCER LES BOUCLES"},
        {id: 2, contenu: "RESSERER, HYDRATER ET RENFORCER LES BOUCLES"},
        {id: 3, contenu: "ASSAINNIR ET PURIFIER LE CUIR CHEVELU POUR ELIMINER LES PELLICULES"},
        {id: 4, contenu: "MAINTENIR L'HYDRATATION DE VOS CHEVEUX, LES RENDRE MALEABLES ET EVITER LA CASSE"},
        {id: 5, contenu: "RECONSTRUIRE LA FIBRE ET RETROUVER DES CHEVEUX SAINS"},
        {id: 6, contenu: "REFERMER LES ECAILLES DES CHEVEUX ET MAINTENIR L'HYDRATATION"},
        {id: 7, contenu: "RENFORCER LE CHEVEU ET EVITER LA CASSE"},
        {id: 8, contenu: "LIMITER AU MAXIMUM LA CHALEUR, PROTEGER LES CHEVEUX ET LES GARDER EN BONNE SANTE"},
        {id: 9, contenu: "STIMULER LA POUSSE"},
        {id: 10, contenu: "100% NATUREL"},
    ];

    const myChoix = choix.map((map) => {
        return(<option key={map.id}>{map.contenu}</option>
        )
    })
    return (
        <div className='mt-10'>
            <div className='flex flex-col items-center gap-10 max-w-[1300px] mx-4 lg:mx-auto p-5 lg:p-10 bg-PinkR rounded-lg'>
                <div>
                    <p className='text-white text-2xl md:text-3xl font-serif text-center '>Recevez une routine exclusive et personnalisée,<br/> en fonction de votre objectif capillaire</p>
                </div>
                <div className="w-full">
                    <select name="" id="" class="flex-1 ml-1 flex focus:outline-none cursor-pointer w-full p-2 rounded-md text-md font-serif border-2 focus:border-2 focus:border-red-500 text-gray-700">
                        <option value="select" class="text-gray-500" selected disabled>Quel est votre objectif Capillaire</option>

                        {myChoix} 

                    </select>
                </div>
        
                <div className="w-full">
                    <input type='email' placeholder='Votre adresse e-mail' className='w-full border-2 rounded-md p-2 text-lg font-serif focus:outline-none focus:border-pink-500'/>
                </div>
        
                <div>
                    <button type='submit' className='bg-PinkB hover:bg-PinkC rounded-md font-medium text-md p-2 text-gray-800'>RECEVOIR MA ROUTINE</button>
                </div>
            </div>
        </div>
    );
}
export default Capillaire;