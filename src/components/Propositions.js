import React, { useState } from "react";
import plus from "../images/plus.png"

function Propositions() {

    const [valeur, setValeur] = useState (false);
    const [two, setTwo] = useState (false);
    const [three, setThree] = useState (false);
    const [four, setFour] = useState (false);
    

    const myValeurO = valeur ? (<p className="text-start text-md lg:text-lg font-light pb-2">Nous vous apportons des conseils personnalisés grâce à nos newsletters que vous recevez régulièrement
         dans votre boîte mail, grâce à des routines personnalisées que nous vous adressons à la demande.
         <br/> <br/>Nous répondons par email aux questions que vous vous posez sur l'entretien de vos cheveux.
         <br/><br/>Sur notre site vous pouvez :
         <br/> <ul className="list-disc pl-10 pt-2">
            <li>Vous inscrire à notre newsletter pour recevoir des conseils sur l'entretien de vos cheveux.</li>
            <li>Télécharger nos Ebook gratuits pour cheveux bouclés au naturel ou pour cheveux crépus au naturel, qui contiennent des conseils, des astuces et des routines adaptés aux cheveux texturés (bouclés, frisés et crépus).</li>
            <li>Sélectionnez une routine spécifique adaptée à votre type de cheveu, pour un atteindre un objectif capillaire.</li>
            </ul>
         </p>):('');

    const myValeurT = two ? (<p className="text-start text-md lg:text-lg font-light pb-2">Les conseils capillaires que nous vous apportons sont adaptés aux cheveux texturés (bouclés, frisés et crépus). Pour aider à en prendre soin en toute sérénité, pour les coiffer et les entretenir.</p>):('');
    const myValeurY = three ? (<p className="text-start text-md lg:text-lg font-light pb-2">Bigoodee privilégie une approche au plus près de vous. Nous pensons que vous adressez une newsletter hebdomadaire, permet de vous accompagnez progressivement dans votre quête de naturel et dans votre besoin de prendre soin de vos cheveux.</p>):('');
    const myValeurF = four ? (<p className="text-start text-md lg:text-lg font-light pb-2">Adressez-nous vos questions à <span className="text-PinkR"><a href="/">hello@bigodee.fr</a></span> ou sur nos réseaux sociaux Instagram @my_bigoodee et Facebook My Bigoodee.</p>):('');
    return(
        <div className='mt-28' >
            <p className="text-3xl text-center mb-10">FAQ</p>
            <div className='flex flex-col gap-3 max-w-[1300px] mx-4 lg:mx-auto p-5 lg:p-5 bg-gray-100 rounded-lg'>
                <button className=" font-serif p-2 text-start" onClick={() => setValeur(!valeur)}>
                    <div className="flex flex-row justify-between items-center">
                        <p className="pb-5 text-xl lg:text-2xl">Qu'est-ce que Bigoodee propose exactement ?</p>
                        <img src={plus} alt="plus" className="w-5"/>
                    </div>
                    {myValeurO}
                    <hr/>
                </button>

                <button className=" font-serif p-2 text-start" onClick={() => setTwo(!two)}>
                    <div className="flex flex-row justify-between items-center">
                        <p className="pb-5 text-xl lg:text-2xl">Est-ce que les conseils de Bigoodee conviennent à tous les types de cheveux ?</p>
                        <img src={plus} alt="plus" className="w-5"/>
                    </div>
                    {myValeurT}
                    <hr/>
                </button>

                <button className=" font-serif p-2 text-start" onClick={() => setThree(!three)}>
                    <div className="flex flex-row justify-between items-center">
                        <p className="pb-5 text-xl lg:text-2xl">Qu'est-ce qui différencie Bigoodee des autres sources d'information capillaire ?</p>
                        <img src={plus} alt="plus" className="w-5"/>
                    </div>
                   {myValeurY}
                   <hr/>
                </button>

                <button className=" font-serif p-2 text-start" onClick={() => setFour(!four)}>
                    <div className="flex flex-row justify-between items-center">
                        <p className="pb-5 text-xl lg:text-2xl">Comment puis-je poser des questions ou demander des conseils personnalisés ?</p>
                        <img src={plus} alt="plus" className="w-5"/>
                    </div>
                   {myValeurF}
                   <hr/>
                </button>
               


                <div>
                    
                </div>
        
                
            </div>
        </div>
    )
}
export default Propositions;