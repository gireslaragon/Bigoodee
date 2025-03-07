import React, { useState } from "react";

function Question() {

    const [two, setTwo] = useState (false);
    const [three, setThree] = useState (false);
    const [four, setFour] = useState (false);
    

    const myValeurT = two ? (<p className="text-start text-md lg:text-lg pb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>):('');
    const myValeurY = three ? (<p className="text-start text-md lg:text-lg pb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>):('');
    const myValeurF = four ? (<p className="text-start text-md lg:text-lg pb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>):('');
    return (
        <div className="mt-28 lg:mt-28 bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90%">
            <div className='flex flex-col gap-10 max-w-[1400px] mx-auto px-10 py-14 text-white'>
                <p className="text-white text-2xl lg:text-4xl font-medium">Vous avez des questions ?</p>

                <div>
                    <button className=" font-sans p-2 text-start w-full" onClick={() => setTwo(!two)}>
                        <div className="flex flex-row justify-between items-center">
                            <p className="pb-5 text-lg lg:text-xl font-semibold">Comment savoir si je peux bénéficier d'aides énergétiques ?</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 md:w-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>


                        </div>
                        {myValeurT}
                        <hr/>
                    </button>

                    <button className=" font-sans p-2 text-start w-full" onClick={() => setThree(!three)}>
                        <div className="flex flex-row justify-between items-center">
                            <p className="pb-5 text-lg lg:text-xl font-semibold">Les ampoules LED consomment-elles vraiment moins d'énergie ?</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 md:w-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>


                        </div>
                    {myValeurY}
                    <hr/>
                    </button>

                    <button className=" font-sans p-2 text-start w-full" onClick={() => setFour(!four)}>
                        <div className="flex flex-row justify-between items-center">
                            <p className="pb-5 text-lg lg:text-xl font-semibold">Comment savoir si je peux bénéficier d'aides énergétiques ?</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 md:w-8">
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