import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Stimulation from './components/Stimulation';
import Recommandation from './components/Recommandation';
import CalculAide from './components/CalculAide';
import Conseils from './components/Conseils';
import Question from './components/Question';
import Projet from './components/Projet';
//import { BrowserRouter} from 'react-router-dom';
//import { HashLink } from 'react-router-hash-link';



import './App.css';

function App() {

  //<div className="bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90% h-10  bg-clip-text text-transparent"> Bonjour Monsieur</div>
  return (
    <div className='text-Secondary'>
      <NavBar ></NavBar>
      <Home></Home>
      <Stimulation></Stimulation>
      <Recommandation></Recommandation>
      <CalculAide></CalculAide>
      <Conseils></Conseils>
      <Projet></Projet>
      <Question></Question>
    </div>
  );
}


export default App;
 