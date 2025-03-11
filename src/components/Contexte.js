import React from "react";
import BigHouse from "../images/BigHouse.png";

function Contexte() {
    return(
        <div className="bg-cover h-full md:h-screen bg-center lg:bg-bottom" style={{backgroundImage: `url(${BigHouse})`}}>
                <div className='flex flex-col items-start gap-10 md:gap-14 lg:gap-20 max-w-[1400px] mx-auto py-10 md:py-14 lg:py-20 px-5 md:px-10'>
                    <h1 className="text-white text-2xl lg:text-4xl text-center w-full font-serif">A propos.</h1>
                    <div className="flex flex-col justify-start gap-5 text-white text-md md:text-xl lg:text-2xl font-serif">
                        <p>Dans un contexte où la transition énergétique est devenue une priorité pour le futur de notre planète, il est plus important que jamais de prendre des mesures pour réduire notre consommation d'énergie et minimiser notre impact environnemental.</p>
                        <p> C'est pourquoi nous avons créé maison et économies, un site de conseils et d'accompagnement dédié à l'économie d'énergie. </p>
                        <p>Nous sommes convaincus que chaque individu peut faire une différence et que les petits gestes quotidiens peuvent avoir un impact significatif sur l'avenir de notre planète.</p>
                        <p>Notre site vous propose des conseils pratiques et des astuces pour réduire votre consommation d'énergie, ainsi que des outils et des ressources pour vous aider à prendre des décisions éclairées. </p>
                        <p>Nous couvrons tous les aspects de l'économie d'énergie, de la rénovation énergétique à la gestion de votre consommation électrique, en passant par les bonnes pratiques pour réduire vos factures d'énergie.</p>
                        <p>Nous sommes également là pour vous accompagner tout au long de votre parcours d'économie d'énergie. Nous proposons des conseils personnalisés, des simulations de coûts et des plans d'action pour vous aider à atteindre vos objectifs.</p>
                        <p> Notre équipe est composée d'experts en énergie et en environnement, qui sont déterminés à vous aider à faire des choix éclairés pour votre avenir et pour le futur de notre planète.</p>
                    </div>
                </div>
        </div>
    );
}
export default Contexte;