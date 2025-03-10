import React from "react";
import BigHouse from "../images/BigHouse.png";

function Home() {
    return(
        <div className="bg-cover h-full bg-center lg:bg-bottom" style={{backgroundImage: `url(${BigHouse})`}}>
            <div className='flex flex-col items-start gap-16 lg:gap-20 max-w-[1400px] mx-auto pt-32 pb-32 lg:pb-60 px-5'>
                <h1 className="text-white font-medium text-2xl lg:text-4xl text-center">Votre guide pour faire des économies d'énergie !</h1>
                <p className="text-white text-xl lg:text-2xl text-center">Ici vous trouverez des conseils, de l'actualité, un accompagnement personnalisé au besoin de la part de nos conseillers, pour vous aidez à faire des économies d'énergie.</p>
                <a href="/" className="hover:text-Two hover:font-semibold bg-Secondary hover:bg-Primary py-2 px-5 rounded-md text-white text-md lg:text-xl" id="simulation">Nous rejoindre</a>            
            </div>

        </div>
    );
}
export default Home;