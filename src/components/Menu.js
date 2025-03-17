import React from 'react'
//import NavBar from './NavBar';
import Home from './Home';
import Stimulation from './Stimulation';
import Recommandation from './Recommandation';
import CalculAide from './CalculAide';
import Conseils from './Conseils';
//import Projet from './Projet';
import Question from './Question';
//import Bas from './Bas';


function Menu() {
  return (
    <div>
        
        <Home></Home>
        <Stimulation></Stimulation>
        <Recommandation></Recommandation>
        <CalculAide></CalculAide>
        <Conseils></Conseils>
        
        <Question></Question>
        

        
    </div>
  )
}

export default Menu;