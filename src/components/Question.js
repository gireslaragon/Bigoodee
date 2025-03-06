import React, { useState } from "react";

function Question() {

    const [two, setTwo] = useState (false);
    const [three, setThree] = useState (false);
    const [four, setFour] = useState (false);
    

    const myValeurT = two ? (<p className="text-start text-lg pb-2">Les conseils capillaires que nous vous apportons sont adaptés aux cheveux texturés (bouclés, frisés et crépus). Pour aider à en prendre soin en toute sérénité, pour les coiffer et les entretenir.</p>):('');
    const myValeurY = three ? (<p className="text-start text-lg pb-2">Bigoodee privilégie une approche au plus près de vous. Nous pensons que vous adressez une newsletter hebdomadaire, permet de vous accompagnez progressivement dans votre quête de naturel et dans votre besoin de prendre soin de vos cheveux.</p>):('');
    const myValeurF = four ? (<p className="text-start text-lg pb-2">Adressez-nous vos questions à <span className="text-PinkR"><a href="/">hello@bigodee.fr</a></span> ou sur nos réseaux sociaux Instagram @my_bigoodee et Facebook My Bigoodee.</p>):('');
    return (
        <div className="my-28 lg:my-28 bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90%">
            <div className='flex flex-col gap-10 max-w-[1400px] mx-auto p-10 text-white'>
                <p className="text-white text-4xl font-medium">Vous avez des questions ?</p>

                <div>
                    <button className=" font-serif p-2 text-start w-full" onClick={() => setTwo(!two)}>
                        <div className="flex flex-row justify-between items-center">
                            <p className="pb-5 text-xl">Comment savoir si je peux bénéficier d'aides énergétiques ?</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>


                        </div>
                        {myValeurT}
                        <hr/>
                    </button>

                    <button className=" font-serif p-2 text-start w-full" onClick={() => setThree(!three)}>
                        <div className="flex flex-row justify-between items-center">
                            <p className="pb-5 text-xl">Les ampoules LED consomment-elles vraiment moins d'énergie ?</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>


                        </div>
                    {myValeurY}
                    <hr/>
                    </button>

                    <button className=" font-serif p-2 text-start w-full" onClick={() => setFour(!four)}>
                        <div className="flex flex-row justify-between items-center">
                            <p className="pb-5 text-xl">Comment savoir si je peux bénéficier d’aides énergétiques ?</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </div>
                    {myValeurF}
                    <hr/>
                    </button>
                </div>
                
            </div>
        </div>
    );
}
export default Question;