import React, { useState } from "react";

function Question() {

    const [one, setONe] = useState(false);
    const [two, setTwo] = useState (false);
    const [three, setThree] = useState (false);
    const [four, setFour] = useState (false);
    const [five, setFive] = useState (false);
    

    const myValeurOne = one ? (
    <div className="flex flex-col gap-5">
            <p className="text-start text-md lg:text-lg pb-2 ">Réduire votre consommation d'électricité à la maison est non seulement bénéfique pour l'environnement, mais aussi pour votre portefeuille. Voici quelques conseils pratiques pour y parvenir :</p>
            <ol className="list-decimal flex flex-col gap-6 pl-5">
                <div className="flex flex-col gap-1">
                    <li>Éteignez les appareils inutilisés</li>
                        <ul className="list-disc pl-5">
                            <li>Éteignez les lumières : Assurez-vous d'éteindre les lumières lorsque vous quittez une pièce.</li>
                            <li>Débranchez les appareils : Les appareils en veille consomment de l'énergie. Débranchez-les ou utilisez des multiprises avec interrupteur.</li>
                        </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <li>Utilisez des ampoules économes en énergie</li>
                    <ul className="list-disc pl-5">
                        <li>Ampoules LED : Remplacez vos ampoules traditionnelles par des ampoules LED, qui consomment jusqu'à 80% moins d'énergie et durent beaucoup plus longtemps.</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <li>Optimisez l'utilisation des appareils électroménagers</li>
                    <ul className="list-disc pl-5">
                        <li>Réfrigérateur : Ne le placez pas près d'une source de chaleur et dégivrez-le régulièrement.</li>
                        <li>Lave-linge et lave-vaisselle : Utilisez-les à pleine charge et privilégiez les programmes économiques.</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <li>Gérez votre chauffage et votre climatisation</li>
                    <ul className="list-disc pl-5">
                        <li>Thermostat programmable : Installez un thermostat programmable pour réguler la température en fonction de vos habitudes.</li>
                        <li>Isolation : Améliorez l'isolation de votre maison pour réduire les pertes de chaleur en hiver et garder la fraîcheur en été.</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <li>Utilisez des prises intelligentes</li>
                    <ul className="list-disc pl-5">
                        <li>Prises connectées : Elles permettent de contrôler à distance l'alimentation de vos appareils et de programmer leur extinction.</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1">
                    <li>Réduisez l'utilisation des appareils énergivores</li>
                    <ul className="list-disc pl-5">
                        <li>Four et plaques de cuisson : Privilégiez les modes de cuisson moins énergivores comme le micro-ondes ou la cuisson à la vapeur.</li>
                        <li>Sèche-linge : Utilisez-le le moins possible et préférez le séchage à l'air libre.</li>
                    </ul>
                </div>
                
                <div className="flex flex-col gap-1">
                    <li>Adoptez des habitudes économes</li>
                    <ul className="list-disc pl-5">
                        <li>Douches courtes : Réduisez la durée de vos douches pour économiser l'eau chaude.</li>
                        <li>Éclairage naturel : Profitez au maximum de la lumière naturelle pendant la journée.</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1 pb-8">
                    <li>Entretenez vos appareils</li>
                    <ul className="list-disc pl-5">
                        <li>Nettoyage régulier : Un appareil bien entretenu consomme moins d'énergie. Par exemple, nettoyez les filtres de votre climatiseur ou de votre hotte aspirante.</li>
                    </ul>
                </div>
            </ol>
        </div>):('');
    
    const myValeurTwo = two ? (
    <div className="flex flex-col gap-5">
        <p className="text-start text-md lg:text-lg pb-2 "> Identifier les équipements qui consomment le plus d'énergie dans votre maison est essentiel pour optimiser votre consommation et réduire vos factures. Voici les principaux coupables :</p>
        <ol className="list-decimal flex flex-col gap-6 pl-5">
            <div className="flex flex-col gap-1">
                <li>Chauffage et Climatisation</li>
                    <ul className="list-disc pl-5">
                        <li>Chauffage : Le chauffage représente souvent la plus grande part de la consommation énergétique d'un foyer, surtout en hiver. Les systèmes de chauffage central, les radiateurs électriques et les pompes à chaleur sont particulièrement énergivores.</li>
                        <li>Climatisation : En été, la climatisation peut également consommer beaucoup d'énergie. Les climatiseurs et les ventilateurs de plafond sont souvent utilisés de manière intensive.</li>
                    </ul>
            </div>

            <div className="flex flex-col gap-1">
                <li>Eau Chaude</li>
                <ul className="list-disc pl-5">
                    <li>Chauffe-eau : Le chauffe-eau, qu'il soit électrique ou à gaz, consomme beaucoup d'énergie pour maintenir l'eau à une température constante. Les douches et les bains chauds contribuent largement à cette consommation.</li>
                </ul>
            </div>

            <div className="flex flex-col gap-1">
                <li>Réfrigérateur et Congélateur</li>
                <ul className="list-disc pl-5">
                    <li>Réfrigérateur : Cet appareil fonctionne en continu et peut représenter jusqu'à 15% de la consommation énergétique totale d'un foyer.</li>
                    <li>Congélateur : Comme le réfrigérateur, le congélateur doit maintenir une température basse en permanence, ce qui consomme beaucoup d'énergie.</li>
                </ul>
            </div>

            <div className="flex flex-col gap-1">
                <li>Lave-linge et Sèche-linge</li>
                <ul className="list-disc pl-5">
                    <li>Lave-linge : Les cycles de lavage, surtout à haute température, consomment beaucoup d'énergie.</li>
                    <li>Sèche-linge : C'est l'un des appareils les plus énergivores de la maison. Le séchage des vêtements peut représenter une part importante de votre consommation électrique.</li>
                </ul>
            </div>

            <div className="flex flex-col gap-1">
                <li>Lave-vaisselle</li>
                <ul className="list-disc pl-5">
                    <li>Lave-vaisselle : Bien que plus économe en eau que la vaisselle à la main, le lave-vaisselle consomme de l'énergie pour chauffer l'eau et fonctionner.</li>
                </ul>
            </div>

            <div className="flex flex-col gap-1">
                <li>Électronique et Appareils Multimédias</li>
                <ul className="list-disc pl-5">
                    <li>Téléviseurs : Les grands écrans et les téléviseurs modernes consomment beaucoup d'énergie, surtout s'ils sont utilisés plusieurs heures par jour.</li>
                    <li>Ordinateurs et Consoles de Jeux : Ces appareils consomment de l'énergie même en veille. Les ordinateurs de bureau, en particulier, peuvent être très énergivores.</li>
                </ul>
            </div>
            
            <div className="flex flex-col gap-1">
                <li>Éclairage</li>
                <ul className="list-disc pl-5">
                    <li>Ampoules traditionnelles : Les ampoules à incandescence consomment beaucoup plus d'énergie que les ampoules LED ou fluocompactes.</li>
                </ul>
            </div>

            <div className="flex flex-col gap-1 pb-8">
                <li>Petits Appareils Électroménagers</li>
                <ul className="list-disc pl-5">
                    <li>Four et Plaques de Cuisson : Utilisés fréquemment, ils consomment beaucoup d'énergie.</li>
                    <li>Bouilloires et Grille-pains : Bien que leur consommation soit ponctuelle, leur utilisation fréquente peut s'additionner.</li>
                </ul>
            </div>
        </ol>
    </div>):('');
    
    const myValeurThree = three ? (
    <div className="flex flex-col gap-5">
        <p className="text-start text-md lg:text-lg pb-2 "> Les ampoules LED sont souvent présentées comme une solution économique et écologique pour l'éclairage domestique. Mais sont-elles vraiment plus économiques que les autres types d'ampoules ? Voici quelques éléments de réponse :</p>
        <div className="flex flex-col gap-6 pl-5">
            <div className="flex flex-col gap-1">
                <p className="font-bold">Consommation d'énergie</p>
                    <p>
                        Les ampoules LED consomment beaucoup moins d'électricité que les ampoules traditionnelles. Par exemple, une ampoule LED de 6 W peut produire la même quantité de lumière qu'une ampoule à incandescence de 60 W ou une halogène de 46 W. Cela signifie que les LED consomment environ 10 fois moins d'électricité qu'une ampoule à incandescence et 6 à 8 fois moins qu'une halogène.
                    </p>
            </div>

            <div className="flex flex-col gap-1">
                <p className="font-bold">Durée de vie</p>
                    <p>
                        La durée de vie des ampoules LED est également bien supérieure à celle des autres types d'ampoules. Une ampoule LED peut durer jusqu'à 40 000 ou 50 000 heures, contre 2 000 à 5 000 heures pour une halogène et 8 000 heures pour une fluocompacte. Cette longévité réduit considérablement les coûts de remplacement et les déchets.
                    </p>
            </div>

            <div className="flex flex-col gap-1">
                <p className="font-bold">Efficacité lumineuse</p>
                    <p>
                        Les ampoules LED sont très efficaces en termes de production de lumière. Elles peuvent produire environ 90 à 112 lumens par watt, contre 40 à 70 lumens pour les fluocompactes et seulement 10 à 17 lumens pour les ampoules à incandescence. Cela signifie que les LED produisent plus de lumière pour la même quantité d'énergie consommée.
                    </p>
            </div>

            <div className="flex flex-col gap-1">
                <p className="font-bold">Coût initial et économies à long terme</p>
                    <p>
                        Bien que le coût initial des ampoules LED soit généralement plus élevé que celui des autres types d'ampoules, les économies réalisées sur la consommation d'énergie et la durée de vie compensent largement cet investissement. Par exemple, le coût d'achat de 10 ampoules LED peut être estimé à 100 €, mais les économies annuelles peuvent atteindre 50 € la première année et 150 € les années suivantes.
                    </p>
            </div>

            <div className="flex flex-col gap-1 pb-8">
                <p className="font-bold"> Impact environnemental</p>
                    <p>
                        En plus des économies financières, les ampoules LED ont un impact environnemental positif. Elles ne contiennent pas de mercure ou de plomb, contrairement aux fluocompactes, et leur faible consommation d'énergie contribue à réduire les émissions de CO2.
                    </p>
            </div>

            

           
        </div>
    </div>):('');

    const myValeurFour = four ? (
    <div className="flex flex-col gap-5">
        <p className="text-start text-md lg:text-lg pb-2 "> L'installation de panneaux solaires chez soi présente de nombreux avantages, tant sur le plan économique qu'écologique. Voici les principaux bénéfices à considérer:</p>
        <div className="flex flex-col gap-6 pl-5">
            <div className="flex flex-col gap-1">
                <p className="font-bold">Réduction des dépenses énergétiques</p>
                    <p>
                        L'un des avantages les plus significatifs des panneaux solaires est leur capacité à réduire considérablement vos factures d'électricité. En produisant votre propre énergie, vous diminuez votre dépendance au réseau électrique traditionnel et économisez sur vos dépenses énergétiques.
                    </p>
            </div>

            <div className="flex flex-col gap-1">
                <p className="font-bold">Autonomie énergétique</p>
                    <p>
                    Les panneaux solaires vous offrent une autonomie énergétique partielle ou totale, selon la taille de votre installation. Vous pouvez ainsi produire et consommer votre propre électricité, ce qui est particulièrement avantageux en période de hausse des prix de l'énergie.
                    </p>
            </div>

            <div className="flex flex-col gap-1">
                <p className="font-bold"> Revente de l'électricité</p>
                    <p>
                     En France, les particuliers peuvent vendre le surplus d'électricité produit par leurs panneaux solaires. Grâce au système d'obligation d'achat, vous pouvez injecter l'électricité non consommée dans le réseau et la vendre à un prix fixé par la loi.
                    </p>
            </div>

            <div className="flex flex-col gap-1">
                <p className="font-bold"> Valorisation de votre bien immobilier</p>
                    <p>
                     L'installation de panneaux solaires peut augmenter la valeur de votre propriété. Les acheteurs sont de plus en plus sensibles à l'efficacité énergétique, et une maison équipée de panneaux solaires est souvent perçue comme un atout sur le marché immobilier.
                    </p>
            </div>

            <div className="flex flex-col gap-1">
                <p className="font-bold"> Impact environnemental positif</p>
                    <p>
                     Les panneaux solaires produisent une énergie propre et renouvelable, contribuant ainsi à la réduction des émissions de gaz à effet de serre. En utilisant l'énergie solaire, vous participez activement à la transition énergétique et à la lutte contre le changement climatique.
                    </p>
            </div>

            <div className="flex flex-col gap-1">
                <p className="font-bold"> Aides et subventions</p>
                    <p>
                        Plusieurs dispositifs d'aides financières sont disponibles pour encourager l'installation de panneaux solaires. Ces aides peuvent prendre la forme de crédits d'impôt, de subventions ou de tarifs d'achat avantageux pour l'électricité solaire.
                    </p>
            </div>

            <div className="flex flex-col gap-1 pb-8">
                <p className="font-bold"> Durabilité et fiabilité</p>
                    <p>
                        Les panneaux solaires sont conçus pour durer plusieurs décennies avec un entretien minimal. Leur durée de vie moyenne est d'environ 25 à 30 ans, ce qui en fait un investissement durable et fiable.
                    </p>
            </div>

            

           
        </div>
    </div>):('');
    
    const myValeurFive = five ? (
    <div className="flex flex-col gap-5">
                <p className="text-start text-md lg:text-lg pb-2 ">La rénovation énergétique de votre logement peut être un projet coûteux, mais plusieurs aides financières sont disponibles pour vous aider à le réaliser. Voici les principales étapes et les dispositifs auxquels vous pouvez prétendre :</p>
                <ol className="list-decimal flex flex-col gap-6 pl-5">
                    <div className="flex flex-col gap-1">
                        <li className="font-bold">Évaluez votre projet</li>
                            <div>
                                <p>Avant de commencer, il est important de définir clairement vos besoins en matière de rénovation énergétique. Cela peut inclure l'isolation, le remplacement de votre système de chauffage, ou l'installation de panneaux solaires.</p>
                            </div>
                    </div>
    
                    <div className="flex flex-col gap-1">
                        <li className="font-bold">Identifiez les aides disponibles</li>
                        <p>Plusieurs aides financières sont accessibles pour les particuliers :</p>
                        <ul className="list-disc pl-5">
                            <li><span className="font-bold">MaPrimeRénov' :</span> Cette aide de l'État est destinée à tous les propriétaires, qu'ils soient occupants ou bailleurs, pour améliorer la performance énergétique de leur logement. Le montant de l'aide est ajusté en fonction de vos revenus.</li>
                            <li><span className="font-bold">Crédit d'Impôt pour la Transition Énergétique (CITE) :</span> Ce dispositif permet de déduire une partie des dépenses liées à la rénovation énergétique de votre impôt sur le revenu.</li>
                            <li><span className="font-bold">Éco-Prêt à Taux Zéro (Éco-PTZ) :</span> Ce prêt sans intérêt est destiné à financer des travaux de rénovation énergétique. Il est accessible sans condition de ressources et peut être cumulé avec d'autres aides.</li>
                            <li><span className="font-bold">Certificats d'Économies d'Énergie (CEE) :</span> Les fournisseurs d'énergie proposent des primes pour financer vos travaux de rénovation énergétique. Ces primes sont souvent appelées "Coup de Pouce" et peuvent être cumulées avec d'autres aides.</li>
                            <li><span className="font-bold">Aides locales :</span> Certaines collectivités proposent des subventions spécifiques pour la rénovation énergétique. Renseignez-vous auprès de votre mairie ou de votre région pour connaître les dispositifs disponibles.</li>
                        </ul>
                    </div>
    
                    <div className="flex flex-col gap-1">
                        <li className="font-bold">Faites appel à un professionnel RGE</li>
                        <div>
                            <p> Pour bénéficier de la plupart des aides, vos travaux doivent être réalisés par un professionnel Reconnu Garant de l'Environnement (RGE). Ce label garantit la qualité et la conformité des travaux effectués.</p>
                        </div>
                    </div>
    
                    <div className="flex flex-col gap-1">
                        <li className="font-bold">Montez votre dossier de demande</li>
                        <p> Chaque aide a ses propres critères et démarches administratives. Voici les étapes générales à suivre :</p>
                        <ul className="list-disc pl-5">
                            <li><span className="font-bold">MaPrimeRénov' :</span> Créez un compte sur le site maprimerenov.gouv.fr, remplissez le formulaire en ligne et soumettez votre demande avant de commencer les travaux.</li>
                            <li><span className="font-bold">CITE et Éco-PTZ :</span> Contactez votre centre des impôts ou votre banque pour obtenir les formulaires nécessaires et soumettre votre demande.</li>
                            <li><span className="font-bold">CEE :</span> Rendez-vous sur les sites des fournisseurs d'énergie ou des plateformes dédiées pour simuler le montant de votre prime et soumettre votre demande.</li>
                        </ul>
                    </div>
    
                    <div className="flex flex-col gap-1">
                        <li className="font-bold">Réalisez les travaux</li>
                        <div>
                            <p>Une fois votre demande acceptée, vous pouvez commencer les travaux. Assurez-vous de conserver toutes les factures et les justificatifs, car ils vous seront demandés pour le versement des aides.</p>
                        </div>
                    </div>
    
                    <div className="flex flex-col gap-1 pb-8">
                        <li className="font-bold">Recevez les aides</li>
                        <div>
                            <p>Après la réalisation des travaux, soumettez les justificatifs demandés pour recevoir le versement des aides. Le délai de paiement peut varier en fonction de l'aide et de l'organisme gestionnaire.</p>
                            <p>En suivant ces étapes et en vous informant sur les dispositifs disponibles, vous pouvez significativement réduire le coût de votre rénovation énergétique et améliorer la performance énergétique de votre logement.</p>
                        </div>
                    </div>
                </ol>
    </div>):('');
    
   
    
    return (
        <div className="mt-28 lg:mt-28 bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90%">
            <div className='flex flex-col gap-10 max-w-[1400px] mx-auto px-10 py-14 text-white'>
                <h2 className="text-white text-2xl lg:text-4xl font-medium">Vous avez des questions ?</h2>

                <div>
                <button className=" font-sans p-2 text-start w-full " onClick={() => {setONe(!one); setTwo(false); setThree(false); setFour(false); setFive(false)}}> 
                        <div className="flex flex-row justify-between items-center ease-in-out duration-500" >
                            <p className="pb-5 text-lg lg:text-xl font-semibold"> Comment puis-je réduire ma consommation d'électricité à la maison ?</p>
                            <span className={`${one ?"rotate-180":""} ease-in-out duration-500`}>{
                              
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 md:w-8">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                
                            }</span>


                        </div>
                        {myValeurOne}
                        <hr/>
                    </button>


                    <button className=" font-sans p-2 text-start w-full " onClick={() => {setTwo(!two); setONe(false); setThree(false); setFour(false); setFive(false)}}> 
                        <div className="flex flex-row justify-between items-center ease-in-out duration-500" >
                            <p className="pb-5 text-lg lg:text-xl font-semibold"> Quels équipements consomment le plus d'énergie chez moi ?</p>
                            <span className={`${two ?"rotate-180":""} ease-in-out duration-500`}>{
                              
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 md:w-8">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                
                            }</span>


                        </div>
                        {myValeurTwo}
                        <hr/>
                    </button>

                    <button className=" font-sans p-2 text-start w-full" onClick={() => {setThree(!three); setONe(false); setTwo(false); setFour(false); setFive(false)}}>
                        <div className="flex flex-row justify-between items-center">
                            <p className="pb-5 text-lg lg:text-xl font-semibold">Les ampoules LED sont-elles vraiment plus économiques ?</p>
                            <span className={`${three ?"rotate-180":""} ease-in-out duration-500`}>{
                              
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 md:w-8">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                              </svg>
                          
                            }</span>


                        </div>
                    {myValeurThree}
                    <hr/>
                    </button>

                    <button className=" font-sans p-2 text-start w-full" onClick={() => {setFour(!four); setONe(false); setTwo(false); setThree(false); setFive(false)}}>
                        <div className="flex flex-row justify-between items-center">
                            <p className="pb-5 text-lg lg:text-xl font-semibold">Quels sont les avantages des panneaux solaires pour un particulier ?</p>
                            <span className={`${four ?"rotate-180":""} ease-in-out duration-500`}>{
                              
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 md:w-8">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                              </svg>
                          
                            }</span>

                        </div>
                    {myValeurFour}
                    <hr/>
                    </button>

                    <button className=" font-sans p-2 text-start w-full" onClick={() => {setFive(!five); setONe(false); setTwo(false); setThree(false); setFour(false)}}>
                        <div className="flex flex-row justify-between items-center">
                            <p className="pb-5 text-lg lg:text-xl font-semibold">Comment puis-je bénéficier des aides financières pour la rénovation énergétique ?</p>
                            <span className={`${five ?"rotate-180":""} ease-in-out duration-500`}>{
                              
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 md:w-8">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                              </svg>
                          
                            }</span>

                        </div>
                    {myValeurFive}
                    </button>
                </div>
                
            </div>
        </div>
    );
}
export default Question;