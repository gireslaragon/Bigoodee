import React from "react";
import NavBar from './components/NavBar';
//import Home from './components/Home';
//import Stimulation from './components/Stimulation';
//import Recommandation from './components/Recommandation';
//import CalculAide from './components/CalculAide';
//import Conseils from './components/Conseils';
//import Question from './components/Question';
//import Projet from './components/Projet';
import Bas from './components/Bas';
//import { BrowserRouter} from 'react-router-dom';
//import { HashLink } from 'react-router-hash-link';
//import logoBas from "./images/logoBas.png"
import Menu from './components/Menu';
import Apropos from './components/Apropos';
//import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
//import { HashLink } from 'react-router-hash-link';
//import Logo from "./images/LogoCouleur.png";



import './App.css';

function App() {

  //<div className="bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90% h-10  bg-clip-text text-transparent"> Bonjour Monsieur</div>
 
     
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
      
        
        
          <Routes>
              <Route index path="/" element={<Menu />} />
              <Route strict path='/apropos'  element={<Apropos />}/>
          </Routes>
          <Bas></Bas>
      </BrowserRouter>

                   
    </div>
  );
}


export default App;
 