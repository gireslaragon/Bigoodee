import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Stimulation from './components/Stimulation';
//import { BrowserRouter} from 'react-router-dom';
//import { HashLink } from 'react-router-hash-link';



import './App.css';

function App() {

  //<div className="bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90% h-10"> Bonjour Monsieur</div>
  return (
    <div className='text-Secondary'>
      <NavBar ></NavBar>
      <Home></Home>
      <Stimulation></Stimulation>
    </div>
  );
}


export default App;
 