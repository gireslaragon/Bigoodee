import React, { Component } from "react";
import BigHouse from "../images/BigHouse.png";
import Energie from "./Energie";

//bg-cover bg-repeat bg-bottom w-full h-screen
class Home extends Component {

    constructor(props) {
        super (props)

        this.state = {
            showModal: false
        }
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
            <div className="bg-cover h-full bg-center lg:bg-bottom" style={{backgroundImage: `url(${BigHouse})`}}>
                <div className='flex flex-col items-start gap-16 lg:gap-20 max-w-[1400px] mx-auto pt-32 pb-32 lg:pb-60 px-5'>
                    <h1 className="text-white font-medium text-2xl lg:text-4xl text-center">Votre guide pour faire des économies d'énergie !</h1>
                    <p className="text-white text-xl lg:text-2xl text-center">Ici vous trouverez des conseils, de l'actualité, un accompagnement personnalisé au besoin de la part de nos conseillers, pour vous aidez à faire des économies d'énergie.</p>
                    <button onClick={this.handleShow} className="hover:text-Two bg-Secondary py-2 px-5 rounded-md text-white text-md lg:text-xl" id="simulation">Bilan énergétique gratuit</button>    
                    {energie}        
                </div>
    
            </div>
        );
    }
    
}
export default Home;