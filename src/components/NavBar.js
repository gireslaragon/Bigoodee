import React, { Component } from "react";
import Logo from "../images/LogoCouleur.png";
//import { Link } from "react-scroll";
//import { BrowserRouter} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
//import { NavLink } from 'react-router-dom';
import Energie from "./Energie";

class NavBar extends Component {

    
    constructor(props) {
      super (props)

      this.state = {
          showModal: false,
          isOpen: false
      }
  }

    toggleMenu = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }

    handleShow = () => {
      this.setState({
          showModal: true
      });
      
    }

    handleHide = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
      const energie = this.state.showModal && (<Energie close={this.handleHide} />);
      return(
      
        <nav className='sticky top-0 bg-white shadow-xl z-30'>
        <div className='flex flex-row justify-between items-center max-w-[1400px] mx-auto px-5 py-5 text-lg'>
          <div>
            <HashLink to="/#" smooth={true} duration={1000}><img src={Logo} alt="Logo M&E" className="w-16 lg:w-28"/></HashLink>
          </div>
          <div className='md:hidden'>
            <button className='rounded-full p-1 border-2' onClick={this.toggleMenu} >
              {
                this.state.isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                ):(
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-black font-bold">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )
              }
            </button>
          </div>
          <ul  className="hidden md:flex space-x-8 items-center text-Secondary" id="apropos">
            <li>
                  <HashLink to="/#NosConseils" smooth={true} duration={1000} className='hover:text-Two cursor-pointer'>Nos conseils</HashLink>
            </li>
            <li>
                <HashLink to="/#aide" smooth={true} duration={1000} className='hover:text-Two  cursor-pointer'>Aides et primes</HashLink>
            </li>
            <li>
              <button onClick={this.handleShow} className="hover:text-Two bg-Secondary py-2 px-5 rounded-md text-white text-md lg:text-xl" >Bilan énergétique gratuit</button>    
              {energie}   
            </li>
          </ul>
        </div>
        {this.state.isOpen ? (
          <ul  className="flex flex-col justify-center items-center gap-5 pb-5 md:hidden" id="apropos">
             <li>
                <HashLink to="/#NosConseils" smooth={true} duration={1000} className='hover:text-Two cursor-pointer'>Nos conseils</HashLink>
            </li>
            <li>
                <HashLink to="/#aide" smooth={true} duration={1000} className='hover:text-Two cursor-pointer'>Aides et primes</HashLink>
            </li>
            <li>
              <button onClick={this.handleShow} className="hover:text-Two bg-Secondary py-2 px-5 rounded-md text-white text-md lg:text-xl" >Bilan énergétique gratuit</button>    
              {energie}   
            </li>
        </ul>
        ):null}
      </nav>
      
    );
    }
    
}
export default NavBar; 