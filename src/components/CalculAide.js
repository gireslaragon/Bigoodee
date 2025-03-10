import React from "react";
import home from "../images/house.png";
import corde from "../images/corde.png";
import argent from "../images/argent.png";

function CalculAide() {
   
    return (
        <div className="my-24 lg:my-28 relative">

            <div className='flex flex-col-reverse lg:flex-row justify-center gap-32 max-w-[1400px] mx-auto px-10'>
                
                <div className="flex flex-col justify-center lg:justify-start gap-10 lg:gap-16 w-full lg:w-[60%]">
                    <div>
                        <h2 className="text-xl lg:text-3xl font-semibold text-center"> <span className=" text-transparent bg-clip-text bg-gradient-to-r from-Three via-One to-Four">Découvrez et calculez vos aides  énergetiques</span></h2>
                        
                        <div className="flex felx-row items-center justify-center gap-5 lg:gap-10 pt-3 lg:hidden">
                            <div className="h-[1px] bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90% w-[30%] lg:w-[20%]"></div>
                            <img src={argent} alt="argent" className="w-6 lg:w-10"/>
                            <div className="h-[1px] bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90% w-[30%] lg:w-[20%]"></div>
                        </div>
                    </div>

                    <div className="w-[80%] mx-auto lg:hidden">
                        <img src={home} alt="Maison" className="w-full"/>
                    </div>

                    <div className="lg:font-medium text-center lg:text-start text-lg lg:text-xl">
                        <p>Saviez-vous que vous pouvez bénéficier d'aides financières pour vos travaux d'amélioration énergétique ?</p><br/>
                        <p>Que ce soit pour l'isolation, le chauffage ou l'installation de panneaux solaires, de nombreuses subventions et primes existent pour alléger vos dépenses</p>
                    </div>
            
                    <a href="/" className="hover:text-Two hover:font-semibold bg-Secondary hover:bg-Primary py-2 px-5 rounded-md text-white text-md w-fit mx-auto" id="NosConseils">Je calcule mes aides</a>
                    
                </div>

                <div className="w-[30%] z-10 hidden lg:flex">
                    <img src={home} alt="Maison" className=""/>
                </div>

                
            </div>
            <div className="absolute right-0 -bottom-32 w-[10%] z-0 invisible lg:visible" >
                <img src={corde} alt="corde" className="w-fit"/>
            </div>
            
        </div>
    );
}
export default CalculAide;