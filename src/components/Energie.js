import React, { useState } from "react";
import ReactDOM from 'react-dom';
import appartement from '../images/appartement.png';
import maison from '../images/maison.png';

function Energie(props) {

    const [choix, setChoix] = useState('');
    const [estimationConcerne, setEstimationConcerne] = useState('');
    const [codePostal, setCodePostal] = useState('');
    const [anneeConstruction, setAnneConstruction] = useState('');
    const [formeMaison, setFormeMaison] = useState('');
    const [mitoyenne, setMitoyenne] = useState('');
    const [nombreEtage, setNombreEtage] = useState('');
    const [surfaceHabitable, setSurfaceHabitable] = useState('');
    const [toitureIsole, settoitureIsole] = useState('');
    const [murIsole, setmurIsole] = useState('');
    const [solIsole, setsolIsole] = useState('');    
    const [typeVitrage, setTypeVitrage] = useState('');   
    const [modeChauffage, setmodeChauffage] = useState(''); 
    const [chauffageSecondaire, setChauffageSecondaire] = useState(''); 
    const [typeChauffageSecondaire, setTypeChauffageSecondaire] = useState(''); 
    const [typeChauffeEau, setTypeChauffeEau] = useState('');
    const [systemeClimatisation, setSystemeClimatisation] = useState('');
    const [systemeVentilation, setSystemeVentilation] = useState('');

    const [typeGaz, setTypeGaz] = useState(''); 
    const [typePompe, setTypePompe] = useState('');
    const [typeFioul, setTypeFioul] = useState('');



    const mesReponses = {
        choix: choix,
        estimationConcerne: estimationConcerne,
        codePostal: codePostal,
        anneeConstruction: anneeConstruction,
        formeMaison: formeMaison,
        mitoyenne: mitoyenne,
        nombreEtage: nombreEtage,
        surfaceHabitable: surfaceHabitable,
        toitureIsole: toitureIsole,
        murIsole: murIsole,
        solIsole: solIsole,
        typeVitrage: typeVitrage,
        modeChauffage: modeChauffage,

        typeGaz: typeGaz,
        typePompe: typePompe,
        typeFioul: typeFioul,

        chauffageSecondaire: chauffageSecondaire,
        typeChauffageSecondaire: typeChauffageSecondaire,
        typeChauffeEau: typeChauffeEau,
        systemeClimatisation: systemeClimatisation,
        systemeVentilation: systemeVentilation,
       
        
    }
    console.log(mesReponses);

    const style = 'border-green-300 bg-green-50';

    const handleChange = (e) => {
        setCodePostal(e.target.value)  
    }


    const gaz = modeChauffage === 'chauffage au gaz' ? (
        <div>
             <p className="font-medium text-md pt-8 pb-3">Quel type de chauffage au gaz ?</p>
            <div className=" grid grid-cols-2 gap-5">
                <button type="button" onClick={() => {setTypeGaz('Chaudière à condensation'); setTypeFioul(''); setTypePompe('')}} value={typeGaz} className={`flex flex-row justify-start items-center w-full py-2 pl-1 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${typeGaz === 'Chaudière à condensation' ? (style):null}`}>
                    
                    <p className="text-black font-semibold text-md">Chaudière à condensation</p>
                </button>
                <button type="button" onClick={() => {setTypeGaz('Chaudière classique'); setTypeFioul(''); setTypePompe('')}} value={typeGaz} className={`flex flex-row justify-start items-center w-full py-2 pl-1 md:pl-5 gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${typeGaz === 'Chaudière classique' ? (style):null}`}>
                    
                    <p className="text-black font-semibold text-md">Chaudière classique</p>
                </button>
                <button type="button" onClick={() => {setTypeGaz('Radiateur au gaz'); setTypeFioul(''); setTypePompe('')}} value={typeGaz} className={`flex flex-row justify-start items-center w-full py-2 pl-1 md:pl-5 gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${typeGaz === 'Radiateur au gaz' ? (style):null}`}>
                    
                    <p className="text-black font-semibold text-md">Radiateur au gaz</p>
                </button>
                <button type="button" onClick={() => {setTypeGaz('Poêle au gaz'); setTypeFioul(''); setTypePompe('')}} value={typeGaz} className={`flex flex-row justify-start items-center w-full py-2 pl-1 md:pl-5 gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${typeGaz === 'Poêle au gaz' ? (style):null}`}>
                    
                    <p className="text-black font-semibold text-md">Poêle au gaz</p>
                </button>
            </div>
        </div>
    ):null

    const pompe = modeChauffage === 'pompe à chaleur' ? (
        <div>
             <p className="font-medium text-md pt-8 pb-3">Quel type de pompe à chaleur ?</p>
            <div className=" grid grid-cols-2 gap-5">
                <button type="button" onClick={() => {setTypePompe('pompe air-air'); setTypeFioul(''); setTypeGaz('')}} value={typePompe} className={`flex flex-row justify-start items-center w-full py-2 pl-1 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${typePompe === 'pompe air-air' ? (style):null}`}>
                    
                    <p className="text-black font-semibold text-md">Pompe à chaleur air-air (clim réversible)</p>
                </button>
                <button type="button" onClick={() => {setTypePompe('pompe air-eau'); setTypeFioul(''); setTypeGaz('')}} value={typePompe} className={`flex flex-row justify-start items-center w-full py-2 pl-1 md:pl-5 gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${typePompe === 'pompe air-eau' ? (style):null}`}>
                    
                    <p className="text-black font-semibold text-md">Pompe à chaleur air-eau</p>
                </button>
                <button type="button" onClick={() => {setTypePompe('pompe eau-eau'); setTypeFioul(''); setTypeGaz('')}} value={typePompe} className={`flex flex-row justify-start items-center w-full py-2 pl-1 md:pl-5 gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${typePompe === 'pompe eau-eau' ? (style):null}`}>
                    
                    <p className="text-black font-semibold text-md">Pompe à chaleur eau-eau</p>
                </button>
            </div>
        </div>
    ):null

    const fioul = modeChauffage === 'chaufage  au fioul' ? (
        <div>
             <p className="font-medium text-md pt-8 pb-3">Quel type de chauffage au fioul ?</p>
            <div className=" grid grid-cols-2 gap-5">
                <button type="button" onClick={() => {setTypeFioul('condensation'); setTypeGaz(''); setTypePompe('')}} value={typeFioul} className={`flex flex-row justify-start items-center w-full py-2 pl-1 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${typeFioul === 'condensation' ? (style):null}`}>
                    
                    <p className="text-black font-semibold text-md w-full text-start">Chaudière à condensation</p>
                </button>
                <button type="button" onClick={() => {setTypeFioul('classique'); setTypeGaz(''); setTypePompe('')}} value={typeFioul} className={`flex flex-row justify-start items-center w-full py-2 pl-1 md:pl-5 gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${typeFioul === 'classique' ? (style):null}`}>
                    
                    <p className="text-black font-semibold text-md">Chaudière classique</p>
                </button>
                <button type="button" onClick={() => {setTypeFioul('poêle'); setTypeGaz(''); setTypePompe('')}} value={typeFioul} className={`flex flex-row justify-start items-center w-full py-2 pl-1 md:pl-5 gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${typeFioul === 'poêle' ? (style):null}`}>
                    
                    <p className="text-black font-semibold text-md">Poêle</p>
                </button>
            </div>
        </div>
    ):null

    const monChauffageSecondaire = chauffageSecondaire === 'oui' ?(
        <div>
            <p className="font-medium text-md pt-8 pb-3">Lequel ?</p>
            <div className=" grid grid-cols-2 gap-5">
                <button type="button" onClick={() => setTypeChauffageSecondaire('électrique')} value={typeChauffageSecondaire} className={`flex flex-row justify-start items-center w-full py-2 pl-1 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${typeChauffageSecondaire === 'électrique' ? (style):null}`}>
                    
                    <p className="text-black font-semibold text-md">Chauffage électrique</p>
                </button>
                <button type="button" onClick={() => setTypeChauffageSecondaire('bois')} value={typeChauffageSecondaire} className={`flex flex-row justify-start items-center w-full py-2 pl-1 md:pl-5 gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${typeChauffageSecondaire === 'bois' ? (style):null}`}>
                    
                    <p className="text-black font-semibold text-md">Insert bois</p>
                </button>
                <button type="button" onClick={() => setTypeChauffageSecondaire('poêle à bûches')} value={typeChauffageSecondaire} className={`flex flex-row justify-start items-center w-full py-2 pl-1 md:pl-5 gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${typeChauffageSecondaire === 'poêle à bûches' ? (style):null}`}>
                    
                    <p className="text-black font-semibold text-md">Poêle à bûches</p>
                </button>
                <button type="button" onClick={() => setTypeChauffageSecondaire('poêle à granulés')} value={typeChauffageSecondaire} className={`flex flex-row justify-start items-center w-full py-2 pl-1 md:pl-5 gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${typeChauffageSecondaire === 'poêle à granulés' ? (style):null}`}>
                    
                    <p className="text-black font-semibold text-md">Poêle à granulés</p>
                </button>
            </div>
        </div>
    ):null

    

    return ReactDOM.createPortal(
        <div className="fixed bg-fixed top-0 z-50 h-full w-full bg-black bg-opacity-80 flex items-center justify-center overflow-hidden">
            <div className="w-[90%] h-[90%] xl:w-[50%] bg-white overflow-y-scroll min-h-52 rounded-lg">
                <div className="flex flex-row justify-between items-center sticky top-0 py-2 md:py-4 bg-white shadow-md px-2 md:px-4 xl:px-6 ">
                    <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl p-1 text-transparent bg-clip-text bg-gradient-to-r from-Three via-One to-Four">Votre bilan énergétique gratuit</h1>
                    <button onClick={props.close} className="text-sm bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90% p-1 xl:p-2 text-white rounded-md">Fermer</button>
                </div>

                <form className={`p-2 md:p-4 xl:p-6`}>
                    <p className="font-medium text-md pt-5 pb-3">Pourquoi faites-vous un bilan énergétique ?</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
                        <button type="button" onClick={() => setChoix("réduire ma facture d'énergie")} value={choix}   className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${choix === "réduire ma facture d'énergie" ? (style):null}`}>
                            <p className="text-black font-semibold text-md">Je veux réduire ma facture d'énergie</p>
                        </button>
                        <button type="button" onClick={() => setChoix("vendre mon logement")} value={choix} className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${choix === "vendre mon logement" ? (style):null}`}>
                            <p  className="text-black font-semibold text-md">Je vends prochainement mon logement</p>
                        </button>
                        <button type="button" onClick={() => setChoix("gagner en confort")} value={choix} className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${choix === "gagner en confort" ? (style):null}`}>
                            <p  className="text-black font-semibold text-md">Je veux gagner en confort</p>
                        </button>
                        <button type="button" onClick={() => setChoix("simple curiosité")} value={choix} className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${choix === "simple curiosité" ? (style):null}`}>
                            <p  className="text-black font-semibold text-md">Par simple curiosité</p>
                        </button>
                        <button type="button" onClick={() => setChoix("réduire mes émissions")} value={choix} className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${choix === "réduire mes émissions" ? (style):null}`}>
                            <p  className="text-black font-semibold text-md text-start">Je veux réduire mes émissions de gaz à effet de serre</p>
                        </button>
                    </div>

                    <p className="font-medium text-md pt-8 pb-3">L'estimation concerne-t-elle un appartement ou une maison ?</p>
                    <div className=" flex flex-row gap-2 md:gap-10">
                        <button type="button" onClick={() => setEstimationConcerne('maison')} value={estimationConcerne} className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${estimationConcerne === 'maison' ? (style):null}`}>
                            <img src={maison} alt="tourne-vis" className="w-5 h-5"/>
                            <p className="text-black font-semibold text-md">Une maison</p>
                        </button>
                        <button type="button" onClick={() => setEstimationConcerne('appartement')} value={estimationConcerne} className={`flex flex-row justify-start items-center w-full pl-1 md:pl-5 gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${estimationConcerne === 'appartement' ? (style):null}`}>
                            <img src={appartement} alt="tourne-vis" className="w-5 h-5"/>
                            <p className="text-black font-semibold text-md">Un appartement</p>
                        </button>
                    </div>


                    <label htmlFor="code"><p className="font-medium text-md pb-2 pt-8">Quel est le code postal de votre logement ?</p></label>
                    <input type="number" placeholder="12345" value={codePostal} onChange={handleChange} className="border-2 rounded-md p-2 outline-green-300 font-semibold w-full md:w-[47%]"/>

                    <label htmlFor="annee"><p className="font-medium text-md pb-2 pt-8">Quelle est l'année de construction de votre logement ?</p></label>
                    <input type="number" placeholder="2010" value={anneeConstruction} onChange={(e) => setAnneConstruction(e.target.value)} id="annee" className="border-2 rounded-md p-2 outline-green-300 font-semibold w-full md:w-[47%]"/>
                
                    
                    
                    <p className="font-medium text-md pt-8 pb-3">Quelle est la forme de votre maison ?</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
                        <button type="button" onClick={() => setFormeMaison("Carrée ou Rectangulaire")} value={formeMaison}   className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${formeMaison === "Carrée ou Rectangulaire" ? (style):null}`}>
                            <p className="text-black font-semibold text-md">Carrée ou Rectangulaire</p>
                        </button>
                        <button type="button" onClick={() => setFormeMaison("Allongée ou en L")} value={formeMaison} className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${formeMaison === "Allongée ou en L" ? (style):null}`}>
                            <p  className="text-black font-semibold text-md">Allongée ou en L</p>
                        </button>
                        <button type="button" onClick={() => setFormeMaison("autre")} value={formeMaison} className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${formeMaison === "autre" ? (style):null}`}>
                            <p  className="text-black font-semibold text-md">Autre</p>
                        </button>
                    </div>

                    <p className="font-medium text-md pt-8 pb-3">Est-elle mitoyenne ?</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
                        <button type="button" onClick={() => setMitoyenne("non")} value={mitoyenne}   className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${mitoyenne === "non" ? (style):null}`}>
                            <p className="text-black font-semibold text-md">Non mitoyenne</p>
                        </button>
                        <button type="button" onClick={() => setMitoyenne("sur 1 coté")} value={mitoyenne} className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${mitoyenne === "sur 1 coté" ? (style):null}`}>
                            <p  className="text-black font-semibold text-md">Mitoyenne sur 1 coté</p>
                        </button>
                        <button type="button" onClick={() => setMitoyenne("sur 2 cotés")} value={mitoyenne} className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${mitoyenne === "sur 2 cotés" ? (style):null}`}>
                            <p  className="text-black font-semibold text-md">Mitoyenne sur 2 cotés</p>
                        </button>
                    </div>

                    <p className="font-medium text-md pt-8 pb-3">Combien d'étages possède-t-elle ?</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
                        <button type="button" onClick={() => setNombreEtage("Plain-pied")} value={nombreEtage}   className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${nombreEtage === "Plain-pied" ? (style):null}`}>
                            <p className="text-black font-semibold text-md">Plain-pied</p>
                        </button>
                        <button type="button" onClick={() => setNombreEtage("1")} value={nombreEtage} className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${nombreEtage === "1" ? (style):null}`}>
                            <p  className="text-black font-semibold text-md">1 étage</p>
                        </button>
                        <button type="button" onClick={() => setNombreEtage("2")} value={nombreEtage} className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${nombreEtage === "2" ? (style):null}`}>
                            <p  className="text-black font-semibold text-md">2 étages ou plus</p>
                        </button>
                    </div>

                    <label htmlFor="habit"><p className="font-medium text-md pb-2 pt-8">Quelle est sa surface habitable ?</p></label>
                    <input type="number" placeholder="120" value={surfaceHabitable} onChange={(e) => setSurfaceHabitable(e.target.value)} id="annee" className="border-2 rounded-md p-2 outline-green-300 font-semibold w-[90%] md:w-[47%]"/> <span className="font-semibold text-lg">  m²</span>

                    <div className="w-[70%] md:w-[60%] mx-auto flex flex-col gap-5 pt-8">
                        <div>
                            <p>Vos combles ou votre toiture sont-ils isolés ?</p>
                            <div className=" flex flex-col md:flex-row gap-5 md:gap-10 pt-3">
                                <button type="button" onClick={() => settoitureIsole('oui')} value={toitureIsole}   className={` w-full py-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 font-semibold text-md ${toitureIsole === 'oui' ? (style):null}`}>Oui</button>
                                <button type="button" onClick={() => settoitureIsole('non')} value={toitureIsole}   className={` w-full py-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 font-semibold text-md ${toitureIsole === 'non' ? (style):null}`}>Non</button>
                                <button type="button" onClick={() => settoitureIsole('je ne sais pas')} value={toitureIsole}   className={` w-full py-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 font-semibold text-md ${toitureIsole === 'je ne sais pas' ? (style):null}`}>Je ne sais pas</button>
                            </div>
                        </div>
                        <div>
                            <p>Vos murs sont-ils isolés ?</p>
                            <div className=" flex flex-col md:flex-row gap-5 md:gap-10 pt-3">
                                <button type="button" onClick={() => setmurIsole('oui')} value={murIsole}   className={` w-full py-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 font-semibold text-md ${murIsole === 'oui' ? (style):null}`}>Oui</button>
                                <button type="button" onClick={() => setmurIsole('non')} value={murIsole}   className={` w-full py-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 font-semibold text-md ${murIsole === 'non' ? (style):null}`}>Non</button>
                                <button type="button" onClick={() => setmurIsole('je ne sais pas')} value={murIsole}   className={` w-full py-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 font-semibold text-md ${murIsole === 'je ne sais pas' ? (style):null}`}>Je ne sais pas</button>
                            </div>
                        </div>
                        <div>
                            <p>Votre sol/sous-sol  (cave, vide sanitaires...) est-il isolé ?</p>
                            <div className=" flex flex-col md:flex-row gap-5 md:gap-10 pt-3">
                            <button type="button" onClick={() => setsolIsole('oui')} value={solIsole}   className={` w-full py-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 font-semibold text-md ${solIsole === 'oui' ? (style):null}`}>Oui</button>
                                <button type="button" onClick={() => setsolIsole('non')} value={solIsole}   className={` w-full py-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 font-semibold text-md ${solIsole === 'non' ? (style):null}`}>Non</button>
                                <button type="button" onClick={() => setsolIsole('je ne sais pas')} value={solIsole}   className={` w-full py-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 font-semibold text-md ${solIsole === 'je ne sais pas' ? (style):null}`}>Je ne sais pas</button>
                            </div>
                        </div>
                    </div>

                    <p className="font-medium text-md pt-8 pb-3">Quel est le type de vitrage principal ?</p>
                    <div className=" flex flex-row gap-2 md:gap-10">
                        <button type="button" onClick={() => setTypeVitrage('simple/survitrage')} value={typeVitrage} className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${typeVitrage === 'simple/survitrage' ? (style):null}`}>
                            
                            <p className="text-black font-semibold text-md">Simple vitrage ou survitrage</p>
                        </button>
                        <button type="button" onClick={() => setTypeVitrage('double/triple')} value={typeVitrage} className={`flex flex-row justify-start items-center w-full pl-1 md:pl-5 gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${typeVitrage === 'double/triple' ? (style):null}`}>
                            
                            <p className="text-black font-semibold text-md">Double ou triple vitrage</p>
                        </button>
                    </div>

                    <p className="font-medium text-md pt-8 pb-3">Quelle est l'énergie de chauffage actuelle de votre logement ? </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        <button type="button" onClick={() => setmodeChauffage('chaufage  au fioul')} value={modeChauffage}   className={`flex flex-row justify-start items-center w-full py-2 pl-5 gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${modeChauffage === 'chaufage  au fioul' ? (style):null}`}>
                            <p className="text-black font-semibold text-md">Chaufage  au fioul</p>
                        </button>

                        <button type="button" onClick={() => {setmodeChauffage("chauffage à l'électricité"); setTypeFioul(''); setTypeGaz(''); setTypePompe('')}} value={modeChauffage}   className={`flex flex-row justify-start items-center w-full py-2 pl-5 gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${modeChauffage === "chauffage à l'électricité" ? (style):null}`}>
                            <p className="text-black font-semibold text-md">Chauffage à l'électricité</p>
                        </button>

                        <button type="button" onClick={() => setmodeChauffage('chauffage au gaz')} value={modeChauffage}   className={`flex flex-row justify-start items-center w-full py-2 pl-5 gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${modeChauffage === 'chauffage au gaz' ? (style):null}`}>
                            <p className="text-black font-semibold text-md">Chauffage au gaz</p>
                        </button>

                        <button type="button" onClick={() => {setmodeChauffage('chauffage au bois'); setTypeFioul(''); setTypeGaz(''); setTypePompe('')}} value={modeChauffage}   className={`flex flex-row justify-start items-center w-full py-2 pl-5 gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${modeChauffage === 'chauffage au bois' ? (style):null}`}>
                            <p className="text-black font-semibold text-md">Chauffage au bois</p>
                        </button>

                        <button type="button" onClick={() => setmodeChauffage('pompe à chaleur')} value={modeChauffage}   className={`flex flex-row justify-start items-center w-full py-2 pl-5 gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${modeChauffage === 'pompe à chaleur' ? (style):null}`}>
                            <p className="text-black font-semibold text-md">Pompe à chaleur</p>
                        </button>

                        <button type="button" onClick={() => {setmodeChauffage('chauffage au charbon'); setTypeFioul(''); setTypeGaz(''); setTypePompe('')}} value={modeChauffage}   className={`flex flex-row justify-start items-center w-full py-2 pl-5 gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${modeChauffage === 'chauffage au charbon' ? (style):null}`}>
                            <p className="text-black font-semibold text-md">Chauffage au charbon</p>
                        </button>
                    </div>

                    {gaz}
                    {pompe}
                    {fioul}


                    <p className="font-medium text-md pt-8 pb-3">Un chauffage secondaire est-il utilisé dans la maison ?</p>
                    <div className="grid grid-cols-2 gap-5 w-[70%] md:w-[60%] mx-auto">
                        <button type="button" onClick={() => setChauffageSecondaire('oui')} value={chauffageSecondaire} className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${chauffageSecondaire === 'oui' ? (style):null}`}>
                            <p className="text-black font-semibold text-md w-full text-center">Oui</p>
                        </button>
                        <button type="button" onClick={() => {setChauffageSecondaire('non'); setTypeChauffageSecondaire('')}} value={chauffageSecondaire} className={`flex flex-row justify-start items-center w-full pl-1 md:pl-5 gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${chauffageSecondaire === 'non' ? (style):null}`}>
                            <p className="text-black font-semibold text-md w-full text-center">Non</p>
                        </button>
                    </div>

                    {monChauffageSecondaire}

                    <p className="font-medium text-md pt-8 pb-3">Quel appareil utilisez-vous pour chauffer de l'eau ?</p>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                        <button type="button" onClick={() => setTypeChauffeEau('système de chauffage')} value={typeChauffeEau} className={`flex flex-row justify-start items-center w-full py-2 pl-1 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${typeChauffeEau === 'système de chauffage' ? (style):null}`}>
                            
                            <p className="text-black font-semibold text-md">Le système de chauffage</p>
                        </button>
                        <button type="button" onClick={() => setTypeChauffeEau('chauffe-eau thermodynamique')} value={typeChauffeEau} className={`flex flex-row justify-start items-center w-full py-2 pl-1 md:pl-5 gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${typeChauffeEau === 'chauffe-eau thermodynamique' ? (style):null}`}>
                            
                            <p className="text-black font-semibold text-md">Chauffe-eau thermodynamique</p>
                        </button>
                        <button type="button" onClick={() => setTypeChauffeEau('chauffe-eau électrique')} value={typeChauffeEau} className={`flex flex-row justify-start items-center w-full py-2 pl-1 md:pl-5 gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${typeChauffeEau === 'chauffe-eau électrique' ? (style):null}`}>
                            
                            <p className="text-black font-semibold text-md">Chauffe-eau électrique</p>
                        </button>
                        <button type="button" onClick={() => setTypeChauffeEau('chauffe-eau solaire')} value={typeChauffeEau} className={`flex flex-row justify-start items-center w-full py-2 pl-1 md:pl-5 gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${typeChauffeEau === 'chauffe-eau solaire' ? (style):null}`}>
                            
                            <p className="text-black font-semibold text-md">Chauffe-eau solaire</p>
                        </button>
                    </div>

                    <p className="font-medium text-md pt-8 pb-3">Votre logement est-il équipé d'un système de climatisation (pompe à chaleur air-air ou autre) ?</p>
                    <div className="grid grid-cols-2 gap-5 w-[70%] md:w-[60%] mx-auto">
                        <button type="button" onClick={() => setSystemeClimatisation('oui')} value={systemeClimatisation} className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${systemeClimatisation === 'oui' ? (style):null}`}>
                            <p className="text-black font-semibold text-md w-full text-center">Oui</p>
                        </button>
                        <button type="button" onClick={() => setSystemeClimatisation('non')} value={systemeClimatisation} className={`flex flex-row justify-start items-center w-full pl-1 md:pl-5 gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${systemeClimatisation === 'non' ? (style):null}`}>
                            <p className="text-black font-semibold text-md w-full text-center">Non</p>
                        </button>
                    </div>

                    <p className="font-medium text-md pt-8 pb-3">Dispose-t-il d'un système de ventilation ?</p>
                    <div className="grid grid-cols-3 gap-5">
                        <button type="button" onClick={() => setSystemeVentilation('pas de VMC')} value={systemeVentilation} className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${systemeVentilation === 'pas de VMC' ? (style):null}`}>
                            <p className="text-black font-semibold text-md w-full text-center">Pas de VMC</p>
                        </button>
                        <button type="button" onClick={() => setSystemeVentilation('VMC simple flux')} value={systemeVentilation} className={`flex flex-row justify-start items-center w-full pl-1 md:pl-5 gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${systemeVentilation === 'VMC simple flux' ? (style):null}`}>
                            <p className="text-black font-semibold text-md w-full text-center">VMC simple flux</p>
                        </button>
                        <button type="button" onClick={() => setSystemeVentilation('VMC double flux')} value={systemeVentilation} className={`flex flex-row justify-start items-center w-full pl-1 md:pl-5 gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${systemeVentilation === 'VMC double flux' ? (style):null}`}>
                            <p className="text-black font-semibold text-md w-full text-center">VMC double flux</p>
                        </button>
                    </div>

                  
        
                
                
                
                
                
                
                
                
                
                
                
                
                
                </form>






            </div>
        </div>,
        document.getElementById('second-root')
    )
}
export default Energie;