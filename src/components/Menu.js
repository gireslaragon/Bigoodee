import React from 'react'
import Home from './Home';
import Stimulation from './Stimulation';
import Recommandation from './Recommandation';
import CalculAide from './CalculAide';
import Conseils from './Conseils';
import Question from './Question';


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