import React, { useState } from "react";
import ReactDOM from 'react-dom';
import tournevis from '../images/tournevis.png';
import locataire from '../images/locataire.png';
import maison from '../images/maison.png';
import moyen from '../images/moyen.png';
import neuve from '../images/neuve.png';
import vieille from '../images/vieille.png';
import reflechir from '../images/reflechir.png';
import architecte from '../images/architecte.png';
import contrat from '../images/contrat.png';
import signe from '../images/signe.png';
import calendrier from '../images/calendar.png';
import appartement from '../images/appartement.png';
import axios from "axios";

//import maison from '../images/maison.png';

function Modal(props) {

    //les states et variables
    const [choix, setChoix] = useState('');
    const [logement, setlogement] = useState('');
    const [date, setDate] = useState('');
    const [surface, setSurface] = useState('');
    const [modeChauffage, setmodeChauffage] = useState('');
    const [toitureIsole, settoitureIsole] = useState('');
    const [murIsole, setmurIsole] = useState('');
    const [solIsole, setsolIsole] = useState('');
    const [typeTravaux, settypeTravaux] = useState('');
    const [niveauProjet, setniveauProjet] = useState('');
    const [quandCommencer, setQuandCommencer] = useState('');
    const [personne, setPersonne] = useState(0);
    const [revenu, setRevenu] = useState('');
    const [adresseLogement, setAdresseLogement] = useState('');

    const [sex, setSex] = useState('');
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');


    
    const [value, setValue] = useState('');
    const [valueOne, setValueOne] = useState('');
    const [valueTwo, setValueTwo] = useState(false);
    const [valueV, setValueV] = useState(false);
    const [emailValid, setEmailValid] = useState();

    const style = 'border-green-300 bg-green-50';
    const block = 'hidden';

    /*const reponse = {
        choix: choix,
        logement: logement,
        date: date,
        surface: surface,
        modeChauffage: modeChauffage,
        toitureIsole: toitureIsole,
        solIsole: solIsole,
        murIsole: murIsole,
        typeTravaux: typeTravaux,
        niveauProjet: niveauProjet,

        quandCommencer: quandCommencer,

        personne: personne,
        revenu: revenu,
        adresseLogement: adresseLogement,
        
    }*/
    //console.log(reponse);



    //les fonctions
    const handleChange = (e) => {
        setSurface(e.target.value)  
    }

    const handlePut = (e) => {
        settypeTravaux(e.target.value)  
    }

    const handleCheck = () => {
        if(choix !== "" && logement !== "" && date !== "" && surface !== "" && modeChauffage !== "" && toitureIsole !== "" && murIsole !== "" && solIsole !== "" && typeTravaux !== "" && niveauProjet !== ""){
            return setValue('oui');
        } else{
            return setValue('non');
        }
    }
    const myVerification = value === 'non' ? (<p className="text-red-500 text-center">Veuillez remplir tout les champs</p>):null;



    //Fonction PageOne
    const handleCheckOne = () => {
        if(quandCommencer !== "" && personne !== "" && revenu !== "" ){
            return setValueOne('oui');
        } else{
            return setValueOne('non');
        }
    }
    const myVerificationTwo = valueTwo === 'non' ? (<p className="text-red-500 text-center">Veuillez remplir tout les champs</p>):null;
    const myValidationTwo = valueTwo === 'oui' && emailValid === false ? (<p className="text-green-500 text-center">Veuillez cliquer une deuxieme fois pour enregistrer</p>):null;



    //Fonction PageTwo
    const handleCheckTwo = () => {
        if(adresseLogement !== "" && personne !== "" && revenu !== "" ){
            return setValueTwo('oui');
        } else{
            return setValueTwo('non');
        }
    }
    const myVerificationOne = valueOne === 'non' ? (<p className="text-red-500 text-center">Veuillez remplir tout les champs</p>):null;
    const myValidationOne = valueOne === 'oui' ? (<p className="text-green-500 text-center">Veuillez cliquer une deuxieme fois pour enregistrer</p>):null;


    const proposition =  [
        {id: 10, contenu: ""},
        {id: 0, contenu: "Isolation des combles"},
        {id: 1, contenu: "Isolation des mûrs"},
        {id: 2, contenu: "Pompe à chaleur Air/Eau"},
        {id: 3, contenu: "Climatisation réversible"},
        {id: 4, contenu: "Chaudière fioul à condensation"},
        {id: 5, contenu: "Chaudière gaz à condensation"},
        {id: 6, contenu: "Radiateur électrique, chauffage au bois"},
        {id: 7, contenu: "Solaire photovoltaique"},
        {id: 8, contenu: "Carport solaire"},
        {id: 9, contenu: "VMC double flux"},
    ];

    const myProposition = proposition.map((map) => {
        return(<option key={map.id} name="" value={map.contenu} className=" ">{map.contenu}</option>
        )
    })


    //PageONe
    const handlePageOne = () => {
        if(value === 'oui' && niveauProjet === "Je réfléchis à mes travaux") {
            return (
                <div className="px-6 pb-6">
                    <p className="font-medium text-md pt-8 pb-3">Quand souhaiterez-vous démarer vos travaux ?</p>
                    <div className="w-[70%] mx-auto md:w-full">
                        <div className=" flex flex-col md:flex-row gap-5 md:gap-8">
                            <button type="button" onClick={() => setQuandCommencer('Le plus tôt possible')} value={quandCommencer}   className={`flex flex-col justify-start items-center w-full gap-2 p-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 ${quandCommencer === 'Le plus tôt possible' ? (style):null}`}>
                                <img src={calendrier} alt="reflechir" className="w-8 h-8"/>
                                <p className="text-black font-semibold text-md">Le plus tôt possible</p>
                            </button>
                            <button type="button" onClick={() => setQuandCommencer('Dans les 6 prochains mois')} value={quandCommencer}   className={`flex flex-col justify-start items-center w-full gap-2 p-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 ${quandCommencer === 'Dans les 6 prochains mois' ? (style):null}`}>
                                <img src={calendrier} alt="reflechir" className="w-8 h-8"/>
                                <p className="text-black font-semibold text-md">Dans les 6 prochains mois</p>
                            </button>
                            <button type="button" onClick={() => setQuandCommencer('Le plus tard possible/ Je ne sais pas')} value={quandCommencer}   className={`flex flex-col justify-start items-center w-full gap-2 p-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 ${quandCommencer === 'Le plus tard possible/ Je ne sais pas' ? (style):null}`}>
                                <img src={calendrier} alt="reflechir" className="w-8 h-8"/>
                                <p className="text-black font-semibold text-md">Le plus tard possible/ Je ne sais pas</p>
                            </button>
                        </div>
                    </div>

                    <p className="font-medium text-md pt-10 pb-7 text-center">Combien de personnes votre foyer, y compris vous-même ?<br/>(pour vous donner une estimation plus précise de vos aides)</p>
                    <div className="flex flex-row justify-center items-center w-[60%] md:w-[50%] mx-auto">
                        <button type="button" onClick={()=> setPersonne(personne - 1)} className="w-full text-lg bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90% p-1 text-white rounded-md">-</button>
                        <p className="w-full text-center text-xl font-semibold">{personne >=1 ? (personne): (setPersonne(1))}</p>
                        <button type="button" onClick={()=> setPersonne(personne + 1)} className="w-full text-lg bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90% p-1 text-white rounded-md">+</button>
                    </div>


                    <p className="font-medium text-md pt-14 pb-3 text-center">Quel est le revenu approximatif de votre foyer fiscal ? <br/>(ces informations sont nécessaire pour vous founir un résultat personnalisé) </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-20">
                        <button type="button" onClick={() => setRevenu('Inférieur à 35 285€')} value={revenu}   className={`p-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 ${revenu === 'Inférieur à 35 285€' ? (style):null}`}>
                            <p className="text-black font-semibold text-md">Inférieur à 35 285€</p>
                        </button>

                        <button type="button" onClick={() => setRevenu("Entre 35 285€ et 45 234€")} value={revenu}   className={`p-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 ${revenu === "Entre 35 285€ et 45 234€" ? (style):null}`}>
                            <p className="text-black font-semibold text-md">Entre 35 285€ et 45 234€</p>
                        </button>

                        <button type="button" onClick={() => setRevenu('Entre 45 234€ et 63 844€')} value={revenu}   className={`p-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 ${revenu === 'Entre 45 234€ et 63 844€' ? (style):null}`}>
                            <p className="text-black font-semibold text-md">Entre 45 234€ et 63 844€</p>
                        </button>

                        <button type="button" onClick={() => setRevenu('Supérieur à 63 844€')} value={revenu}   className={`p-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 ${revenu === 'Supérieur à 63 844€' ? (style):null}`}>
                            <p className="text-black font-semibold text-md">Supérieur à 63 844€</p>
                        </button>
                    </div>

                    

                    {myVerificationOne}
                    {myValidationOne}
                    <div className="w-[60%] md:w-[30%] mx-auto">
                        <button type="button" onClick={valueOne === 'oui' ? (handlePageInformationV):(handleCheckOne)} className="w-full text-lg bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90% p-2 text-white rounded-md">Continuer</button>
                    </div>

                </div>
            )
        }
    }

    
    //pageTwo
    const handlePageTwo = () => {
        if(value === 'oui' && niveauProjet !== "Je réfléchis à mes travaux") {
            return (
                <div className="px-6 pb-6">
                    <div className="flex flex-col">
                        <label className="font-medium text-md pt-8 pb-3">Où se situe le logement concerné par votre projet ?</label>
                        <input type="text" placeholder="adresse" value={adresseLogement} onChange={(e) => setAdresseLogement(e.target.value)} className="border-2 p-2 rounded-md outline-green-300" required/>
                    </div>
                   

                    <p className="font-medium text-md pt-10 pb-7 text-center">Combien de personnes votre foyer, y compris vous-même ?<br/>(pour vous donner une estimation plus précise de vos aides)</p>
                    <div className="flex flex-row justify-center items-center w-[60%] md:w-[50%] mx-auto">
                        <button type="button" onClick={()=> setPersonne(personne - 1)} className="w-full text-lg bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90% p-1 text-white rounded-md">-</button>
                        <p className="w-full text-center text-xl font-semibold">{personne >=1 ? (personne): (setPersonne(1))}</p>
                        <button type="button" onClick={()=> setPersonne(personne + 1)} className="w-full text-lg bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90% p-1 text-white rounded-md">+</button>
                    </div>


                    <p className="font-medium text-md pt-14 pb-3 text-center">Quel est le revenu approximatif de votre foyer fiscal ? <br/>(ces informations sont nécessaire pour vous founir un résultat personnalisé) </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-20">
                        <button type="button" onClick={() => setRevenu('Inférieur à 35 285€')} value={revenu}   className={`p-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 ${revenu === 'Inférieur à 35 285€' ? (style):null}`}>
                            <p className="text-black font-semibold text-md">Inférieur à 35 285€</p>
                        </button>

                        <button type="button" onClick={() => setRevenu("Entre 35 285€ et 45 234€")} value={revenu}   className={`p-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 ${revenu === "Entre 35 285€ et 45 234€" ? (style):null}`}>
                            <p className="text-black font-semibold text-md">Entre 35 285€ et 45 234€</p>
                        </button>

                        <button type="button" onClick={() => setRevenu('Entre 45 234€ et 63 844€')} value={revenu}   className={`p-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 ${revenu === 'Entre 45 234€ et 63 844€' ? (style):null}`}>
                            <p className="text-black font-semibold text-md">Entre 45 234€ et 63 844€</p>
                        </button>

                        <button type="button" onClick={() => setRevenu('Supérieur à 63 844€')} value={revenu}   className={`p-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 ${revenu === 'Supérieur à 63 844€' ? (style):null}`}>
                            <p className="text-black font-semibold text-md">Supérieur à 63 844€</p>
                        </button>
                    </div>

                    

                    {myVerificationTwo}
                    {myValidationTwo}
                    {emailValid && (<p className="text-red-500 text-center">L'email existe déja dans la base de données</p>)}
                    <div className="w-[60%] md:w-[30%] mx-auto">
                        <button type="button" onClick={valueTwo === 'oui' ? (handlePageInformationV):(handleCheckTwo)} className="w-full text-lg bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90% p-2 text-white rounded-md">Continuer</button>
                    </div>
                </div>
            )
        }
    }


    
    const myVerificationV = valueV === 'non' ? (<p className="text-red-500 text-center">Veuillez remplir tout les champs</p>):null;
    const myValidationV = valueV === 'oui' && emailValid === false ? (<p className="text-green-500 text-center">Veuillez cliquer une deuxieme fois pour charger mon bilan énergétique</p>):null;


    const handlePageInformationV = () => {
        if( valueTwo === 'oui' || valueOne === 'oui') {
            return (
                <div className="p-2 md:p-4 xl:p-6">
                    <p className="font-medium text-lg pt-0 md:pt-5 pb-3">Comment vous appelez-vous ?</p>
                    <div className="w-[80%] md:w-[60%] mx-auto pb-10">
                        <p>Nous préparons votre bilan énergétique personnalisé, dites-nous en un peu plus sur vous.</p>
                        <div className="grid grid-cols-2 gap-5 pt-5">
                            <button type="button" onClick={() => setSex('homme')} value={sex} className={`flex flex-row justify-start items-center w-full py-2 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${sex === 'homme' ? (style):null}`}>
                                <p className="text-black font-semibold text-md w-full text-center">Monsieur</p>
                            </button>
                            <button type="button" onClick={() => setSex('femme')} value={sex} className={`flex flex-row justify-start items-center w-full gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${sex === 'femme' ? (style):null}`}>
                                <p className="text-black font-semibold text-md w-full text-center">Madame</p>
                            </button>
                        </div>
                        
                        <div className="flex flex-col pt-5">
                            <label htmlFor="prenom" className="font-medium">Prénom</label>
                            <input type="text" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} className="border-2 p-2 outline-green-300" required/>
                        </div>

                        <div className="flex flex-col pt-5">
                            <label htmlFor="nom" className="font-medium">Nom</label>
                            <input type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} className="border-2 p-2 outline-green-300" required/>
                        </div>

                        <div className="flex flex-col pt-5">
                            <label htmlFor="email" className="font-medium ">Email</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-2 p-2 outline-green-300 focus:border-green-300 invalid:border-red-500 focus:invalid:border-red-500 peer" required/>
                            <p className="text-red-500 text-sm invisible peer-invalid:visible">Invalid email address</p>
                        </div>

                        <div className="flex flex-col pt-5">
                            <label htmlFor="number" className="font-medium">Téléphone</label>
                            <input type="tel" id="tel" value={tel} onChange={(e) => setTel(e.target.value)} className="border-2 p-2 outline-green-300" required/>
                            {tel < 0  ? (<p className="text-red-500 text-sm">Veuillez saisir un numéro de téléphone valide</p>):null}
                        </div>
                    </div>


                    {myVerificationV}
                    {myValidationV}
                    {emailValid && (<p className="text-red-500 text-center">L'email existe déja dans la base de données</p>)}
                    <div className="w-[80%] md:w-[50%] lg:w-[40%] mx-auto">
                        <button type="button" onClick={submitTwo} className="w-full text-lg bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90% p-2 text-white rounded-md">Valider</button>
                    </div>

                
                </div>
            )
        }
    }


    /*const submitTwoT = (e) => {
        if(sex !== "" && prenom !== "" && nom !== "" && email !== "" && tel !== ""){
            setValueV('oui');
            e.preventDefault()
            const reponsesCacul = { choix, logement, date, surface, modeChauffage, toitureIsole, solIsole, murIsole, typeTravaux, niveauProjet, quandCommencer, personne, revenu, adresseLogement, email, sex, prenom, nom, tel };
            axios.post('http://localhost:3001/envoyer-donnees-calcul&aide', reponsesCacul)
            .then((reponsesCacul) => {
                console.log(reponsesCacul.data);
            })
            .catch((error) => {
                console.log(error);
            });
            props.close();
        } else{
            return setValueV('non');
        }
       
    };*/
    
    const submitTwo = async(e) => {
        if(sex !== "" && prenom !== "" && nom !== "" && email !== "" && tel !== ""){
            setValueV('oui');
            e.preventDefault()
            const login = { email };
            axios.post(`${process.env.REACT_APP_API_URL}/verif-email-Modal/emailModal`, login) 
            .then(res => {
                if(res.data.Login) {
                    //console.log(res.data.Login)
                    setEmailValid(true);
                } else {
                    const reponsesCacul = { choix, logement, date, surface, modeChauffage, toitureIsole, solIsole, murIsole, typeTravaux, niveauProjet, quandCommencer, personne, revenu, adresseLogement, email, sex, prenom, nom, tel };
                    axios.post(`${process.env.REACT_APP_API_URL}/donnees-calcul/envoyer-donnees-calcul&aide `, reponsesCacul) 
                    .then((reponsesCacul) => {
                        console.log(reponsesCacul.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                    props.close();
                }
                    //console.log(res); 
            })
            .catch(err => console.log(err)); 
        } else{
            return setValueV('non');
        }
          
    }



    return ReactDOM.createPortal (
        <div className="fixed bg-fixed top-0 z-50 h-full w-full bg-black bg-opacity-80 flex items-center justify-center overflow-hidden">
            <div className="w-[90%] h-[90%] xl:w-[50%] bg-white overflow-y-scroll min-h-52 rounded-lg">
                <div className="flex flex-row justify-between sticky top-0 py-4 bg-white shadow-md px-6 ">
                    <h1 className="text-xl lg:text-2xl xl:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-Three via-One to-Four">Votre Logement</h1>
                    <button onClick={props.close} className="text-sm bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90% p-1 xl:p-2 text-white rounded-md">Fermer</button>
                </div>

                <form>
                <div className={`p-2 xl:p-6 ${value === 'oui' ? (block):null}`}>
                <p className="font-medium text-md pt-5 pb-3">Vous êtes ?</p>
                <div className=" flex flex-row gap-2 md:gap-10">
                    <button type="button" onClick={() => setChoix('proprietaire')} value={choix}   className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${choix === 'proprietaire' ? (style):null}`}>
                        <img src={tournevis} alt="tourne-vis" className="w-5 h-5"/>
                        <p className="text-black font-semibold text-md">Propriétaire</p>
                    </button>
                    <button type="button" onClick={() => setChoix('locataire')} value={choix} className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${choix === 'locataire' ? (style):null}`}>
                        <img src={locataire} alt="tourne-vis" className="w-5 h-5"/>
                        <p  className="text-black font-semibold text-md">Locataire</p>
                    </button>
                </div>

                <p className="font-medium text-md pt-8 pb-3">Votre logement est...</p>
                <div className=" flex flex-row gap-2 md:gap-10">
                    <button type="button" onClick={() => setlogement('une maison')} value={logement} className={`flex flex-row justify-start items-center w-full py-2 pl-2 md:pl-5 gap-3 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${logement === 'une maison' ? (style):null}`}>
                        <img src={maison} alt="tourne-vis" className="w-5 h-5"/>
                        <p className="text-black font-semibold text-md">Une maison</p>
                    </button>
                    <button type="button" onClick={() => setlogement('un appartement')} value={logement} className={`flex flex-row justify-start items-center w-full pl-1 md:pl-5 gap-1 md:gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${logement === 'un appartement' ? (style):null}`}>
                        <img src={appartement} alt="tourne-vis" className="w-5 h-5"/>
                        <p className="text-black font-semibold text-md">Un appartement</p>
                    </button>
                </div>

                <p className="font-medium text-md pt-8 pb-3">La construction de ce logement date de : </p>
                <div className="flex flex-col md:flex-row gap-5 lg:gap-10">
                    <button type="button" onClick={() => setDate('moins de 2 ans')} value={date} className={`flex flex-row justify-start items-center w-full py-2 pl-5 gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${date === 'moins de 2 ans' ? (style):null}`}>
                        <img src={neuve} alt="tourne-vis" className="w-5 h-5"/>
                        <p className="text-black font-semibold text-md">Moins de 2 ans</p>
                    </button>
                    <button type="button" onClick={() => setDate('entre 2 et 15 ans')} value={date} className={`flex flex-row justify-start items-center w-full py-2 pl-5 gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${date === 'entre 2 et 15 ans' ? (style):null}`}>
                        <img src={moyen} alt="tourne-vis" className="w-5 h-5"/>
                        <p className="text-black font-semibold text-md">Entre 2 et 15 ans</p>
                    </button>
                    <button type="button" onClick={() => setDate('plus de 15 ans')} value={date} className={`flex flex-row justify-start items-center w-full py-2 pl-5 gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${date === 'plus de 15 ans' ? (style):null}`}>
                        <img src={vieille} alt="tourne-vis" className="w-5 h-5"/>
                        <p className="text-black font-semibold text-md">Plus de 15 ans</p>
                    </button>
                </div>

                
                    <label htmlFor="surface"><p className="font-medium text-md pb-2 pt-8">Quelle est la surface de votre logement ? </p></label>
                    <input type="number" value={surface} onChange={handleChange} id="surface" className="border-2 rounded-md p-1 outline-green-300 font-semibold" required/><span className="font-semibold text-lg">  m²</span>
                

                <p className="font-medium text-md pt-8 pb-3">Aujourd'hui quel est votre mode de chauffage principal pour ce logement ? </p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    <button type="button" onClick={() => setmodeChauffage('chaufage  au fioul')} value={modeChauffage}   className={`flex flex-row justify-start items-center w-full py-2 pl-5 gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${modeChauffage === 'chaufage  au fioul' ? (style):null}`}>
                        <p className="text-black font-semibold text-md">Chaufage  au fioul</p>
                    </button>

                    <button type="button" onClick={() => setmodeChauffage("chauffage à l'électricité")} value={modeChauffage}   className={`flex flex-row justify-start items-center w-full py-2 pl-5 gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${modeChauffage === "chauffage à l'électricité" ? (style):null}`}>
                        <p className="text-black font-semibold text-md">Chauffage à l'électricité</p>
                    </button>

                    <button type="button" onClick={() => setmodeChauffage('chauffage au gaz')} value={modeChauffage}   className={`flex flex-row justify-start items-center w-full py-2 pl-5 gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${modeChauffage === 'chauffage au gaz' ? (style):null}`}>
                        <p className="text-black font-semibold text-md">Chauffage au gaz</p>
                    </button>

                    <button type="button" onClick={() => setmodeChauffage('chauffage au bois')} value={modeChauffage}   className={`flex flex-row justify-start items-center w-full py-2 pl-5 gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${modeChauffage === 'chauffage au bois' ? (style):null}`}>
                        <p className="text-black font-semibold text-md">Chauffage au bois</p>
                    </button>

                    <button type="button" onClick={() => setmodeChauffage('pompe à chaleur')} value={modeChauffage}   className={`flex flex-row justify-start items-center w-full py-2 pl-5 gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${modeChauffage === 'pompe à chaleur' ? (style):null}`}>
                        <p className="text-black font-semibold text-md">Pompe à chaleur</p>
                    </button>

                    <button type="button" onClick={() => setmodeChauffage('chauffage au charbon')} value={modeChauffage}   className={`flex flex-row justify-start items-center w-full py-2 pl-5 gap-5 rounded-lg border-2 shadow-sm hover:bg-slate-100 bg-gr ${modeChauffage === 'chauffage au charbon' ? (style):null}`}>
                        <p className="text-black font-semibold text-md">Chauffage au charbon</p>
                    </button>
                </div>

                <p className="font-medium text-md pt-8 pb-3">Quelle est l'isolation actuelle de votre logement ? </p>

                <div className="w-[70%] md:w-[60%] mx-auto flex flex-col gap-5">
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

                <div className="flex flex-col gap-5">
                    <p className="font-medium text-md pt-8">Quels travaux envisagez-vous de réaliser ?</p>
                    <select name="" id="" className="border-2 p-2 cursor-pointer font-semibold outline-green-300" onChange={handlePut} required>
                      {myProposition}
                    </select>

                </div>

                <p className="font-medium text-md pt-8 pb-3">Où en êtes-vous dans votre projet ?</p>
                <div className="w-[70%] mx-auto md:w-full mb-20">
                    <div className=" flex flex-col md:flex-row gap-5 md:gap-8">
                        <button type="button" onClick={() => setniveauProjet('Je réfléchis à mes travaux')} value={niveauProjet}   className={`flex flex-col justify-center items-center w-full gap-2 p-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 ${niveauProjet === 'Je réfléchis à mes travaux' ? (style):null}`}>
                            <img src={reflechir} alt="reflechir" className="w-8 h-8"/>
                            <p className="text-black font-semibold text-md">Je réfléchis à mes travaux</p>
                        </button>
                        <button type="button" onClick={() => setniveauProjet('Je recherche un artisan RGE')} value={niveauProjet}   className={`flex flex-col justify-center items-center w-full gap-2 p-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 ${niveauProjet === 'Je recherche un artisan RGE' ? (style):null}`}>
                            <img src={architecte} alt="reflechir" className="w-8 h-8"/>
                            <p className="text-black font-semibold text-md">Je recherche un artisan RGE</p>
                        </button>
                        <button type="button" onClick={() => setniveauProjet('Je vais signer mon dévis')} value={niveauProjet}   className={`flex flex-col justify-center items-center w-full gap-2 p-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 ${niveauProjet === 'Je vais signer mon dévis' ? (style):null}`}>
                            <img src={contrat} alt="reflechir" className="w-8 h-8"/>
                            <p className="text-black font-semibold text-md">Je vais signer mon dévis</p>
                        </button>
                        <button type="button" onClick={() => setniveauProjet("J'ai déjà signé mon dévis")} value={niveauProjet}   className={`flex flex-col justify-center items-center w-full gap-2 p-2 rounded-lg border-2 shadow-sm hover:bg-slate-100 ${niveauProjet === "J'ai déjà signé mon dévis" ? (style):null}`}>
                            <img src={signe} alt="reflechir" className="w-8 h-8"/>
                            <p className="text-black font-semibold text-md">J'ai déjà signé mon dévis</p>
                        </button>
                    </div>
                </div>

                {myVerification}
                <div className="w-[60%] md:w-[30%] mx-auto">
                    <button type="button" onClick={handleCheck} className="w-full text-lg bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90% p-2 text-white rounded-md">Valider</button>
                </div>
                </div>
                <p className={`${valueOne === 'oui' ? (block):null}`}>{handlePageOne()}</p>
                <p className={`${valueTwo === 'oui' ? (block):null}`}>{handlePageTwo()}</p>
                {handlePageInformationV()}
                </form>
            </div>
        </div>,
        document.getElementById('second-root')
    )
    
}
export default Modal;