import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from "./images/logo.png";
import imgOne from "./images/Frame 49.png";
import imageTwo from "./images/Frame 43.png";
import imageThree from "./images/Frame 44.png";
import imageFour from "./images/Frame 45.png";
import etoile from "./images/etoiles.png";
import femme from "./images/plein-coup-femme-tenant-smartphone 1.png";
import Capillaire from './components/Capilliares';
import Propositions from './components/Propositions';

//import { FaBars, FaTimes } from 'react-icons/fa';



import './App.css';

function App() {

  
    return (
      <div>
      <BrowserRouter> 
        <nav className=' shadow-xl text-gray-500 text-lg font-semibold sticky top-0 bg-white'>
          <ul  className="flex flex-col md:flex-row justify-start items-center gap-10 py-8 max-w-[1400px] mx-auto text-primary px-10">
            <li>
              <img src={logo} alt="logo" className="w-24"/>
            </li>
            <li>
                <HashLink to='#acceuil' className='hover:text-PinkR'>Acceuil</HashLink>
            </li>
            <li>
                <HashLink to='#contact' className='hover:text-PinkR'>Contact</HashLink>
            </li>
            <li>
                <HashLink to='#faq' className='hover:text-PinkR'>FAQ</HashLink>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
        
  
        <div className='bg-PinkB' id="acceuil">
          <div className="flex flex-col-reverse lg:flex-row gap-10 py-32 max-w-[1400px] mx-auto px-10">
              <div>
                <div className='flex flex-col justify-center items-start gap-14'>
                  <div>
                    <h1 className='text-2xl md:text-4xl font-medium font-serif'>Avec Bigoodee, <span className='text-PinkR'>prendre<br/> soin de vos cheveux</span> n'aura<br/> jamais été aussi simple.</h1>
                  </div>

                  <div>
                    <p className='text-lg md:text-xl text-gray-500 font-serif'>Bigoodee accompagne les femmes aux cheveux texturés dans leur quête de naturel, dans leur besoin de prendre soin de leurs cheveux afin<br/> de leur permettre de s'épanouir au quotidien</p>
                  </div>
                </div>                
              </div>

              <div>
                  <img src={imgOne} alt="filles" className="w-[100%] h-full object-contain"/>
              </div>

          </div>
        </div>


        <div className="bg-PinkR" id="contact">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto px-10 py-20'>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-row'>
                <img src={etoile} alt="etoiles"/>
                <img src={etoile} alt="etoiles"/>
                <img src={etoile} alt="etoiles"/>
                <img src={etoile} alt="etoiles"/>
                <img src={etoile} alt="etoiles"/>
              </div>
              <div>
                <p className='text-white text-xl'>Les conseils de Bigoodee ont transformé ma relation avec mes boucles ! Grâce à leurs astuces simples mais efficaces, j'ai appris à apprécier la beauté naturelle de mes cheveux texturés.<br/><br/><br/><br/><span className='text-sm text-gray-200'>Caroline</span></p>
              </div>
            </div>

            <div className='flex flex-col gap-5'>
              <div className='flex flex-row'>
                <img src={etoile} alt="etoiles"/>
                <img src={etoile} alt="etoiles"/>
                <img src={etoile} alt="etoiles"/>
                <img src={etoile} alt="etoiles"/>
                <img src={etoile} alt="etoiles"/>
              </div>
              <div>
                <p className='text-white text-xl'>La transition vers des cheveux naturels était intimidante, mais Bigoodee a rendu ce processus tellement plus facile ! Leurs conseils sur la détox capillaire et la création d'une nouvelle routine capillaire ont été une révélation pour moi.<br/><br/><br/><span className='text-sm text-gray-200'>Sarah</span></p>
              </div>
            </div>

            <div className='flex flex-col gap-5'>
              <div className='flex flex-row'>
                <img src={etoile} alt="etoiles"/>
                <img src={etoile} alt="etoiles"/>
                <img src={etoile} alt="etoiles"/>
                <img src={etoile} alt="etoiles"/>
                <img src={etoile} alt="etoiles"/>
              </div>
              <div>
                <p className='text-white text-xl'>J'avais du mal à trouver des conseils capillaires adaptés à mes cheveux texturés jusqu'à ce que je découvre Bigoodee. Leurs recommandations sur les produits naturels et les techniques de coiffage ont vraiment changé la donne pour moi.<br/><br/><br/><span className='text-sm text-gray-200'>Léa</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full mt-16 mb-8'>
          <p className='text-xl lg:text-3xl font-medium font-serif text-center w-[350px] md:w-[600px] lg:w-[500px] mx-auto'>Notre newsletter vous donne des conseils et astuces pour en <span className='text-PinkR'>apprendre plus sur l'entretien de vos cheveux</span>.</p>
        </div>


        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto px-10'>
            <div className='flex flex-col gap-5'>
              <div className='py-10 flex flex-col gap-10 bg-PinkB rounded-md'>
                <img src={imageTwo} alt='enveloppe'  className='w-[50%] mx-auto'/>
                <p className=' font-serif text-xl text-center'>Sur mesure</p>
              </div>
              <div>
                <p className='font-serif text-lg text-gray-700'>Des conseils adaptés à votre type de cheveux et à vos besoins spécifiques, pour une expérience capillaire sur mesure.</p>
              </div>
            </div>

            <div className='flex flex-col gap-5'>
              <div className='py-10 flex flex-col gap-10 bg-PinkB rounded-md'>
                <img src={imageThree} alt='enveloppe'  className='w-[51%] mx-auto'/>
                <p className=' font-serif text-xl text-center'>Approche naturelle</p>
              </div>
              <div>
                <p className='font-serif text-lg text-gray-700'>Des conseils adaptés à votre type de cheveux et à vos besoins spécifiques, pour une expérience capillaire sur mesure.</p>
              </div>
            </div>

            <div className='flex flex-col gap-5'>
              <div className='py-10 flex flex-col gap-10 bg-PinkB rounded-md'>
                <img src={imageFour} alt='enveloppe'  className='w-[47%] mx-auto'/>
                <p className=' font-serif text-xl text-center'>Simple et pratique</p>
              </div>
              <div>
                <p className='font-serif text-lg text-gray-700'>Des conseils adaptés à votre type de cheveux et à vos besoins spécifiques, pour une expérience capillaire sur mesure.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='my-20'>
          <div className='max-w-[1400px] mx-auto'>
            <form className='flex flex-col gap-5 lg:gap-0 lg:flex-row justify-center items-center'>
              <input type='email' placeholder='Votre adresse e-mail' className='w-[90%] lg:w-[60%] border-2 rounded-md lg:rounded-e-none p-2 text-lg font-serif focus:outline-none focus:border-PinkR'/>
              <button type='submit' className='bg-PinkR border-2 border-PinkR hover:bg-pink-700 text-white rounded-md lg:rounded-s-none  text-lg p-2 w-[90%] lg:w-[10%]'> M'INSCRIRE</button>
            </form>
          </div>
        </div>


        <div>
          <div className='flex flex-col lg:flex-row justify-center items-start gap-10 max-w-[1300px] mx-4 lg:mx-auto p-5 lg:p-10 bg-PinkB rounded-lg'>
            
              <img src={femme} alt='femme'  className=' lg:w-[30%] object-contain'/>
            

            <div className='flex flex-col gap-10'>
              <h1 className='font-medium font-serif text-xl lg:text-3xl'>Pourquoi vous inscrire à <span className='text-PinkR'>notre newsletter ?</span></h1>
              
              <div className='text-lg lg:text-xl font-serif'>
                <h2>Conseils Experts</h2>
                <p className='text-gray-500 pt-3'>Bénéficiez de conseils avisés et personnalisés de nos experts en cheveux texturés, adaptés à vos besoins spécifiques. De la transition vers des cheveux naturels aux techniques de coiffage innovantes, nos conseils vous guident vers des cheveux épanouis.</p>
              </div>

              <div className='text-lg lg:text-xl font-serif'>
                <h2>Échange et Partage</h2>
                <p className='text-gray-500 pt-3'>Rejoignez une communauté bienveillante où le partage d'expériences et d'astuces est encouragé, vous offrant ainsi un soutien précieux dans votre parcours capillaire.</p>
              </div>

              <div className='text-lg lg:text-xl font-serif'>
                <h2>Actualités Capillaires Naturelles</h2>
                <p className='text-gray-500 pt-3'>Restez informée sur les dernières tendances et découvertes en matière de soins capillaires naturels. Découvrez de nouveaux produits, des astuces de coiffage créatives et des méthodes innovantes pour sublimer vos cheveux.</p>
              </div>
            </div>

          </div>
        </div>

        <Capillaire></Capillaire>
        <Propositions></Propositions>

        <div className='w-full mt-16 mb-8'>
          <p className='text-xl lg:text-3xl font-medium font-serif text-center w-[350px] md:w-[600px] lg:w-[500px] mx-auto'>Découvrez des conseils et astuces exclusifs pour prendre soin de vos cheveux grâce à nos <span className='text-PinkR'>guides complets</span>.</p>
        </div>

        <div className='mt-10'>
            <div className='flex flex-col items-center gap-10 max-w-[1300px] mx-4 lg:mx-auto p-5 lg:p-10 bg-PinkB rounded-lg'>
              <select>
                <option type='radio'>GUIDE CHEVEUX BOUCLÉS AU NATUREL</option>
                <option type="radio">GUIDE CHEVEUX CRÉPUS AU NATUREL</option>
              </select>
              <form className='flex flex-col gap-5 lg:gap-0 lg:flex-row justify-center items-center w-full lg:px-40'>
                <input type='email' placeholder='Votre adresse e-mail' className='w-full lg:w-[70%] border-2 rounded-md lg:rounded-e-none p-2 text-lg font-serif focus:outline-none focus:border-PinkR'/>
                <button type='submit' className='bg-PinkR border-2 border-PinkR hover:bg-pink-700 text-white rounded-md lg:rounded-s-none  text-md p-2 w-full lg:w-[25%]'>RECEVOIR MON E-BOOK</button>
              </form>
            </div>
        </div>

        <div className='mt-28'>
            <div className='flex flex-col gap-3 max-w-[1300px] mx-4 lg:mx-auto p-5 lg:p-5 bg-gray-100 rounded-lg'>
              <div className='w-full mt-16 mb-8'>
                <p className='text-xl lg:text-2xl font-medium font-serif text-center w-full lg:w-[50%]'>Besoin de conseils ou d'informations sur Bigoodee ? Veuillez nous adresser vos messages à <span className='text-PinkR'><a href='/'>hello@bigoodee.fr</a></span>.</p>
              </div>
            </div>
        </div>


       














          <div className="h-[800px] bg-red-400" id="faq">
            <h1 className="">Where To Get Support</h1>
          </div>
        










        
        </div>

      
    );
  
  
}

export default App;
 