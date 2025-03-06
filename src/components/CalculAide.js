import React from "react";
import home from "../images/house.png";
//import corde from "../images/corde.png";

function CalculAide() {
    //<img src={corde} alt="corde" className="h-[500px] absolute right-0 "/>
    return (
        <div className="my-24 lg:my-28">

            <div className='flex flex-row justify-center gap-32 max-w-[1400px] mx-auto px-10 '>
                
                <div className="flex flex-col justify-start gap-16 w-[60%]">
                    <h1 className="text-xl lg:text-3xl font-semibold"> <span className=" text-transparent bg-clip-text bg-gradient-to-r from-Three via-One to-Four">Découvrez et calculez vos aides  énergetiques</span></h1>
                    <div className="font-medium text-xl">
                        <p>Saviez-vous que vous pouvez bénéficier d'aides financières pour vos travaux d'amélioration énergétique ?</p><br/>
                        <p>Que ce soit pour l'isolation, le chauffage ou l'installation de panneaux solaires, de nombreuses subventions et primes existent pour alléger vos dépenses</p>
                    </div>
            
                    <a href="/" className="hover:text-Two hover:font-semibold bg-Secondary hover:bg-Primary py-2 px-5 rounded-md text-white text-md w-fit">Je calcule mes aides</a>
                    
                </div>

                <div className="w-[30%]">
                    <img src={home} alt="Maison" className=""/>
                </div>
                
            </div>
        </div>
    );
}
export default CalculAide;