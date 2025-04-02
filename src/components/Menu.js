import React from 'react'
import Home from './Home';
import Stimulation from './Stimulation';
import Recommandation from './Recommandation';
import CalculAide from './CalculAide';
import Conseils from './Conseils';
import Question from './Question';
import NavBar from './NavBar';
import Bas from './Bas';


function Menu() {
  return (
    <div>
        <NavBar></NavBar>
        <Home></Home>
        <Stimulation></Stimulation>
        <Recommandation></Recommandation>
        <CalculAide></CalculAide>
        <Conseils></Conseils>
        <Question></Question>
        <Bas></Bas>
        

        
    </div>
  )
}

export default Menu;