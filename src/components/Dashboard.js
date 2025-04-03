import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logoBas from "../images/logoBas.png";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Dashboard() {
    const [data, setData] = useState([]);
    const [datas, setDatas] = useState([]);
    const [name, setName] = useState('');
    const [active, setActive] = useState('oui');
    //const [show, setShow] = useState('');
    //const [numero, setNumero] = useState('');
    const [search, setSearch] = useState('');
    const [recherche, setrecherche] = useState('');
    const [identifiantOne, setIdentifiantOne] = useState('');
    const [identifiantTwo, setIdentifiantTwo] = useState('');
    const [detailsOne, setDetailsOne] = useState('');
    const [detailsTwo, setDetailsTwo] = useState('');
    //const [pageOne, setPageOne] = useState('');

    const block = 'hidden';
    //const deblock = 'flex';
    const blocks = 'bg-Secondary shadow-xl';
   
    axios.defaults.withCredentials = true;




    //.then(data => console.log(data)) ONE
    useEffect(()=> {
        fetch(`${process.env.REACT_APP_API_URL}/la-reponse-bilan/reponseBilan`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
    }, [])

    //recuperer les infos pour details personne page one
    useEffect(() => {
        if (identifiantOne !== '') {
            //console.log(identifiantOne);
            const idOne = {identifiantOne}
          axios.post(`${process.env.REACT_APP_API_URL}/user-responses/detailsPersonne`, idOne)
            .then(res => {
              setDetailsOne(res.data);
            })
            .catch(error => {
              console.error(error);
            });
        }
      }, [identifiantOne]);



    //.then(data => console.log(data)) TWO
    useEffect(()=> {
        fetch(`${process.env.REACT_APP_API_URL}/le-calcul-aide/calculAide`)
        .then(res => res.json())
        .then(data => setDatas(data))
        .catch(err => console.log(err));
    }, [])


    //recuperer les infos pour details personne page TWO
    useEffect(() => {
        if (identifiantTwo !== '') {
            //console.log(identifiantTwo);
            const idtWO = {identifiantTwo}
          axios.post(`${process.env.REACT_APP_API_URL}/user-responsesTwo/detailsAide`, idtWO)
            .then(res => {
              setDetailsTwo(res.data);
            })
            .catch(error => {
              console.error(error);
            });
        }
      }, [identifiantTwo]);




    //pour les session
    const navigate = useNavigate();

    useEffect( () => {
        axios.get(`${process.env.REACT_APP_API_URL}/le-dashboard/dashboard`)
        .then(res => {
            if(res.data.valid) {
                setName(res.data.username);
            } else {
                navigate('/login');
            }
        })
        .catch(err => console.log(err))
    }, [navigate])

    


    return (
        <div className="flex flex-row h-screen">

            <div className="flex flex-col gap-28 items-center bg-Third rounded-r-3xl text-white w-[18%] ">
                <img src={logoBas} alt="Logo M&E" className="w-16 lg:w-28 pt-10"/>
                <div className="flex flex-col gap-20 items-center">
                    <button className={`hover:text-Two border-2 border-Secondary w-full p-2 rounded-md text-white text-lg ${active === 'oui' ? (blocks):null}`} onClick={() => {setActive('oui'); setIdentifiantOne('')}}>Réponses Bilan énergétique</button>
                    <button className={`hover:text-Two border-2 border-Secondary w-full p-2 rounded-md text-white text-lg ${active === 'non' ? (blocks):null}`} onClick={() => {setActive('non'); setIdentifiantTwo('')}}>Réponses calcul aides</button>
                </div>
                <p className="text-transparent">{name}</p>
            </div>

            {/* ONE */}
            <div className={`flex flex-col gap-16 overflow-x-auto w-[82%] px-5 ${active === 'non' ? (block):null} ${active === 'oui' && identifiantOne !== '' ? (block):null}`}>

                <h1 className="text-3xl pt-10 font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-Three via-One to-Four">Dashboard Maison&Economie</h1>
                <p className="text-center text-2xl font-semibold">Bilan énergétique.</p>
                <div className="flex flex-row justify-between items-end">
                    <div className="flex flex-row justify-between bg-Verte w-[350px] p-4 rounded-lg">
                        <p className="text-2xl font-semibold">Enregistrement</p>
                        <p className="mt-8">({data.length} personnes)</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <p className={`mr-[-4vh] z-10 text-xl ${search !== '' ? "text-green-500":"text-gray-500"}`}><AiOutlineSearch></AiOutlineSearch></p>
                        <input type="test" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher un nom" className="border-2 pl-12 py-2 text-lg w-[400px] outline-green-300"/>
                    </div>
                </div>
                
            
                <table className={`text-center  `}>
                    <thead className=" px-5 text-xl bg-Verte bg-opacity-60 border-b-2 border-gray-400 ">
                        <th className=" px-10 ">Numéro</th>
                        <th className=" px-10 ">Noms et prénoms</th>
                        <th className=" px-10 ">Code Postal</th>
                        <th className=" px-10 ">E-mail</th>
                        <th className=" px-10 ">Type logement</th>
                        <th className=" px-10 ">Type chauffage</th>
                        <th className=" px-10 ">Téléphone</th>
                    </thead>
                    <tbody className="text-lg">
                        {data.map((map, i) => (
                            <tr key={i} onClick={() => setIdentifiantOne(map.email)}  className={`bg-Verte cursor-pointer hover:bg-opacity-50 ${i % 2 === 0 ? "bg-opacity-10":"bg-opacity-30"}`}>
                                <td className=" ">{i + 1}</td>
                                <td className=" px-5 py-3 ">{map.nom} {map.prenom}</td>
                                <td className=" px-5 ">{map.codePostal}</td>
                                <td className=" px-5 ">{map.email}</td>
                                <td className=" px-5 ">{map.estimationConcerne}</td>
                                <td className=" px-5 ">{map.modeChauffage}</td>
                                <td className=" px-5 ">{map.tel}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {/* TWO */}
            <div className={`flex flex-col gap-16 overflow-x-auto w-[82%] px-5 ${active === 'oui' ? (block):null} ${active === 'non' && identifiantTwo !== '' ? (block):null}`}>
                <h1 className="text-3xl pt-10 font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-Three via-One to-Four">Dashboard Maison&Economie</h1>
                <p className="text-center text-2xl font-semibold">Calcul des aides.</p>
                <div className="flex flex-row justify-between items-end">
                    <div className="flex flex-row justify-between bg-Verte w-[350px] p-4 rounded-lg">
                        <p className="text-2xl font-semibold">Enregistrement</p>
                        <p className="mt-8">({datas.length} personnes)</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <p className={`mr-[-4vh] z-10 text-xl ${recherche !== '' ? "text-green-500":"text-gray-500"}`}><AiOutlineSearch></AiOutlineSearch></p>
                        <input type="test" value={recherche} onChange={(e) => setrecherche(e.target.value)} placeholder="Rechercher un nom" className="border-2 pl-12 py-2 text-lg w-[400px] outline-green-300"/>
                    </div>
                </div>

                <table className={`text-center  `}>
                    <thead className=" px-5 text-xl bg-Verte bg-opacity-60 border-b-2 border-gray-400 ">
                        <th className=" px-10 ">Numéro</th>
                        <th className=" px-10 ">Noms et prénoms</th>
                        
                        <th className=" px-10 ">E-mail</th>
                        <th className=" px-10 ">Type logement</th>
                        <th className=" px-10 ">Type chauffage</th>
                        <th className=" px-10 ">Téléphone</th>
                    </thead>
                    <tbody className="text-lg">
                        {datas.map((map, i) => (
                            <tr key={i} onClick={() => setIdentifiantTwo(map.email)}  className={`bg-Verte cursor-pointer hover:bg-opacity-50 ${i % 2 === 0 ? "bg-opacity-10":"bg-opacity-30"}`}>
                                <td className=" ">{i + 1}</td>
                                <td className=" px-5 py-3 ">{map.nom} {map.prenom}</td>
                            
                                <td className=" px-5 ">{map.email}</td>
                                <td className=" px-5 ">{map.choix}</td>
                                <td className=" px-5 ">{map.modeChauffage}</td>
                                <td className=" px-5 ">{map.tel}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            
                
            </div>

            <div className={`px-5 w-[82%] overflow-y-auto ${active === 'non' && identifiantTwo !== '' ? (null):(block)}`}>
                <div className="flex flex-row gap-5 py-5 bg-white sticky top-0 z-30">
                    <div className="flex flex-row justify-center items-center gap-2 p-1 rounded-md cursor-pointer w-fit" onClick={() => setIdentifiantTwo('')}>
                        <p className="text-green-500 text-md"><AiOutlineArrowLeft></AiOutlineArrowLeft></p>
                        <p  className="text-lg">retour</p>
                    </div>
                    <h1 className="text-2xl font-semibold">Détails de {detailsTwo.nom} { detailsTwo.prenom} </h1>
                </div>
                
                <div className={` flex flex-col text-lg py-5`}>
                    <p className="text-xl font-semibold py-2">Informations Personnelles</p>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30 rounded-t-xl">
                        <th className=" w-[50%] text-start">Noms et prénoms</th>
                        <td className="w-[50%] text-start">{detailsTwo.nom } { detailsTwo.prenom}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-10">
                        <th className=" w-[50%] text-start">Sexe</th>
                        <td className="w-[50%] text-start">{detailsTwo.sexe}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30">
                        <th className=" w-[50%] text-start">Email</th>
                        <td className="w-[50%] text-start">{detailsTwo.email}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-10 rounded-b-xl">
                        <th className="w-[50%] text-start">Téléphone</th>
                        <td className="w-[50%] text-start">{detailsTwo.tel}</td>
                    </div>
                </div>

                <div className={` flex flex-col text-lg pt-5`}>
                    <p className="text-xl font-semibold py-2">Logement</p>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30 rounded-t-xl">
                        <th className="w-[50%] text-start">Vous êtes ?</th>
                        <td className="w-[50%] text-start">{detailsTwo.choix}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-10">
                        <th className=" w-[50%] text-start">Type logement ?</th>
                        <td className="w-[50%] text-start">{detailsTwo.logement}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30">
                        <th className=" w-[50%] text-start">Quelle est la surface de votre logement ?</th>
                        <td className="w-[50%] text-start">{detailsTwo.surface}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-10 rounded-b-xl">
                        <th className=" w-[50%] text-start">A quand date la construction de ce logement ?</th>
                        <td className="w-[50%] text-start">{detailsTwo.date}</td>
                    </div>
                    {detailsTwo.niveauProjet !== 'Je réfléchis à mes travaux' ? (
                        <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30 rounded-b-xl">
                            <th className="w-[50%] text-start">Où se situe le logement concerné par votre projet ?</th>
                            <td className="w-[50%] text-start">{detailsTwo.adresseLogement}</td>
                        </div>
                    ):null}
                </div>

                <div className={` flex flex-col text-lg py-5`}>
                    <p className="text-xl font-semibold py-2">Questions</p>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30 rounded-t-xl">
                        <th className="w-[50%] text-start">Quels travaux envisagez-vous de réaliser ?</th>
                        <td className="w-[50%] text-start">{detailsTwo.typeTravaux}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-10">
                        <th className="w-[50%] text-start">Aujourd'hui quel est votre mode de chauffage principal pour ce logement ?</th>
                        <td className="w-[50%] text-start">{detailsTwo.modeChauffage}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30">
                        <th className="w-[50%] text-start">Vos combles ou votre toiture sont-ils isolés ?</th>
                        <td className="w-[50%] text-start">{detailsTwo.toitureIsole}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-10">
                        <th className="w-[50%] text-start">Vos murs sont-ils isolés ?</th>
                        <td className="w-[50%] text-start">{detailsTwo.murIsole}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30">
                        <th className="w-[50%] text-start">Votre sol/sous-sol (cave, vide sanitaires...) est-il isolé ?</th>
                        <td className="w-[50%] text-start">{detailsTwo.solIsole}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-10">
                        <th className="w-[50%] text-start">Où en êtes-vous dans votre projet ?</th>
                        <td className="w-[50%] text-start">{detailsTwo.niveauProjet}</td>
                    </div>
                    

                    {detailsTwo.niveauProjet === 'Je réfléchis à mes travaux' ? (
                        <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30">
                            <th className="w-[50%] text-start">Quand souhaiterez-vous démarer vos travaux ?</th>
                            <td className="w-[50%] text-start">{detailsTwo.quandCommencer}</td>
                        </div>
                    ):null}
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-10">
                        <th className="w-[50%] text-start">Combien de personnes votre foyer, y compris vous-même ?</th>
                        <td className="w-[50%] text-start">{detailsTwo.personne}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30 rounded-b-xl">
                        <th className="w-[50%] text-start">Quel est le revenu approximatif de votre foyer fiscal ?</th>
                        <td className="w-[50%] text-start">{detailsTwo.revenu}</td>
                    </div>
                </div>
            </div>

            




            <div className={`px-5 w-[82%] overflow-y-auto ${active === 'oui' && identifiantOne !== '' ? (null):(block)}`}>
                <div className="flex flex-row gap-5 py-5 bg-white sticky top-0 z-30">
                    <div className="flex flex-row justify-center items-center gap-2 p-1 rounded-md cursor-pointer w-fit" onClick={() => setIdentifiantOne('')}>
                        <p className="text-green-500 text-md"><AiOutlineArrowLeft></AiOutlineArrowLeft></p>
                        <p  className="text-lg">retour</p>
                    </div>
                    <h1 className="text-2xl font-semibold">Détails de {detailsOne.nom} { detailsOne.prenom} </h1>
                </div>
                
                <div className={` flex flex-col text-lg py-5`}>
                    <p className="text-xl font-semibold py-2">Informations Personnelles</p>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30 rounded-t-xl">
                        <th className=" w-[50%] text-start">Noms et prénoms</th>
                        <td className="w-[50%] text-start">{detailsOne.nom } { detailsOne.prenom}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-10">
                        <th className="w-[50%] text-start">Code postal</th>
                        <td className="w-[50%] text-start">{detailsOne.codePostal}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30">
                        <th className=" w-[50%] text-start">Email</th>
                        <td className="w-[50%] text-start">{detailsOne.email}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-10 rounded-b-xl">
                        <th className="w-[50%] text-start">Téléphone</th>
                        <td className="w-[50%] text-start">{detailsOne.tel}</td>
                    </div>
                </div>

                <div className={` flex flex-col text-lg pt-5`}>
                    <p className="text-xl font-semibold py-2">Logement</p>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30 rounded-t-xl">
                        <th className="w-[50%] text-start">Type logement ?</th>
                        <td className="w-[50%] text-start">{detailsOne.estimationConcerne}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-10">
                        <th className=" w-[50%] text-start">Quelle est l'année de construction ?</th>
                        <td className="w-[50%] text-start">{detailsOne.anneeConstruction}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30">
                        <th className=" w-[50%] text-start">Quelle est la surface habitable ?</th>
                        <td className="w-[50%] text-start">{detailsOne.surfaceHabitable}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-10">
                        <th className=" w-[50%] text-start">Quelle est la forme de votre maison ?</th>
                        <td className="w-[50%] text-start">{detailsOne.formeMaison}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30">
                        <th className=" w-[50%] text-start">Est-elle mitoyenne ?</th>
                        <td className="w-[50%] text-start">{detailsOne.mitoyenne}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-10 rounded-b-xl">
                        <th className=" w-[50%] text-start">Combien d'étages possède-t-elle ?</th>
                        <td className="w-[50%] text-start">{detailsOne.nombreEtage}</td>
                    </div>
                </div>

                <div className={` flex flex-col text-lg py-5`}>
                    <p className="text-xl font-semibold py-2">Questions</p>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30 rounded-t-xl">
                        <th className="w-[50%] text-start">Pourquoi faites-vous un bilan énergétique ?</th>
                        <td className="w-[50%] text-start">{detailsOne.choix}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-10">
                        <th className="w-[50%] text-start">Vos combles ou votre toiture sont-ils isolés ?</th>
                        <td className="w-[50%] text-start">{detailsOne.toitureIsole}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30">
                        <th className="w-[50%] text-start">Vos murs sont-ils isolés ?</th>
                        <td className="w-[50%] text-start">{detailsOne.murIsole}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-10">
                        <th className="w-[50%] text-start">Votre sol/sous-sol (cave, vide sanitaires...) est-il isolé ?</th>
                        <td className="w-[50%] text-start">{detailsOne.solIsole}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30">
                        <th className="w-[50%] text-start">Quel est le type de vitrage principal ?</th>
                        <td className="w-[50%] text-start">{detailsOne.typeVitrage}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-10">
                        <th className="w-[50%] text-start">Quelle est l'énergie de chauffage actuelle de votre logement ?</th>
                        <td className="w-[50%] text-start">{detailsOne.modeChauffage}</td>
                    </div>
                    {detailsOne.modeChauffage === 'chauffage au gaz' || detailsOne.modeChauffage === 'pompe à chaleur' || detailsOne.modeChauffage === 'chaufage  au fioul' ? (
                        <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30">
                            <th className="w-[50%] text-start">Quel est le type de {detailsOne.modeChauffage}</th>
                            <td className="w-[50%] text-start">{detailsOne.modeChauffage === 'chauffage au gaz' && (detailsOne.typeGaz)} {detailsOne.modeChauffage === 'pompe à chaleur' && (detailsOne.typePompe)} {detailsOne.modeChauffage === 'chaufage  au fioul' && (detailsOne.typeFioul)}</td>
                        </div>
                    ):null}
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-10">
                        <th className="w-[50%] text-start">Un chauffage secondaire est-il utilisé dans la maison ?</th>
                        <td className="w-[50%] text-start">{detailsOne.chauffageSecondaire}</td>
                    </div>
                    {detailsOne.chauffageSecondaire === 'oui'  && (
                        <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30">
                            <th className="w-[50%] text-start">Lequel ?</th>
                            <td className="w-[50%] text-start">{detailsOne.typeChauffageSecondaire}</td>
                        </div>
                    )}
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-10">
                        <th className="w-[50%] text-start">Quel appareil utilisez-vous pour chauffer de l'eau ?</th>
                        <td className="w-[50%] text-start">{detailsOne.typeChauffeEau}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-30">
                        <th className="w-[50%] text-start">Votre logement est-il équipé d'un système de climatisation<br/> (pompe à chaleur air-air ou autre) ?</th>
                        <td className="w-[50%] text-start">{detailsOne.systemeClimatisation}</td>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-10 bg-Verte bg-opacity-10 rounded-b-xl">
                        <th className="w-[50%] text-start">Dispose-t-il d'un système de ventilation ?</th>
                        <td className="w-[50%] text-start">{detailsOne.systemeVentilation}</td>
                    </div>
                </div>
            </div>
           
        
        </div>
    )
}
export default Dashboard;