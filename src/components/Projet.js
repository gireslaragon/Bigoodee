import React from "react";

function Projet() {
    return (
        <div className="my-28 lg:my-28">
            <div className='max-w-[1400px] mx-auto px-10'>
                <div className="flex flex-col items-center gap-10">
                    <h1 className="text-xl lg:text-3xl text-center font-semibold"> <span className=" text-transparent bg-clip-text bg-gradient-to-r from-Three via-One to-Four">Un projet ?</span></h1>
                    <a href="/" className="hover:text-Two hover:font-semibold bg-Secondary hover:bg-Primary py-2 px-5 rounded-md text-white text-md w-fit">Demander un devis</a>
                </div>
            </div>
        </div>
    );
}
export default Projet;