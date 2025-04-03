import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from 'react-icons/ai'; 
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import axios from "axios";

function Login() {

     const [show, setShow] = useState(false);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erreur, setErreur] = useState(false); 
    //const [erreurs, setErreurs] = useState(''); 
    
    const handleClick = () => {
        setShow(!show);
    }

    const navigate = useNavigate();

    
    /*const handleVerifie = () => {
        if( email === "" || password === "") {
            return setErreurs('oui')
        } else {
            return setErreurs('non')
        }
    }*/

    axios.defaults.withCredentials = true;

    useEffect( () => {
        axios.get(`${process.env.REACT_APP_API_URL}/le-dashboard/dashboard`)
        .then(res => {
            if(res.data.valid) {
                navigate('/dashboard')
            } else {
                navigate('/login');
            }
        })
        .catch(err => console.log(err))
    }, [navigate])

    const handleCheck = async(e) => {
        e.preventDefault()
        const login = { email, password };
        axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, login)
        .then(res => {
                if(res.data.Login) {
                    navigate("/dashboard");
                    console.log("C'est bon !");
                } else {
                    setErreur(true)
                }
                console.log(res); 
        })
        .catch(err => console.log(err));   
    }
    
    return(
        <div className="w-full h-screen bg-slate-100">
                    <div className='flex flex-col justify-center xl:justify-start xl:pt-28 items-center gap-7 max-w-[1400px] h-full mx-auto px-5 md:px-10 '>
                        
                        <form className="flex flex-col gap-5 md:gap-7  bg-white p-5 rounded-md w-[85%] md:w-[70%] xl:w-[40%] text-md md:text-lg bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90%">
                            <h2 className="text-2xl lg:text-4xl text-center font-semibold text-white">Login</h2>
                            <div className=" flex flex-col gap-3">
                                <label htmlFor="email" className="font-semibold text-white">Email: </label>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email" id="email" className="border-2 p-1 md:p-2 outline-green-300" autoComplete="off" required/>
                            </div>
                            <div className=" flex flex-col justify-cente gap-3">
                                <label htmlFor="password" className="font-semibold text-white">Password: </label>
                                <div className="flex flex-row items-center">
                                    <input type={show ? "text":"password"} onChange={(e) => setPassword(e.target.value)} value={password} className="w-full border-2 p-1 md:p-2 outline-green-300" autoComplete="off" required/>
                                    <p onClick={handleClick} className="ml-[-4vh] text-lg md:text-xl xl:text-2xl cursor-pointer">{show ? <AiOutlineEye></AiOutlineEye>:<AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</p>
                                </div>
                            </div>

                            <div className="pt-10">
                                {erreur ? (<p className="text-red-500">email ou mot de passe incorrect</p>):null}
                                {/*erreurs === 'oui' ? (<p className="text-red-500">Veuillez remplir tout les champs</p>):null*/}
                                <button type="button"  onClick={handleCheck} className="bg-green-500 hover:bg-green-600 text-white text-xl p-1 md:p-2 text-center mx-auto rounded-md w-full">Valider</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
    )
}
export default Login;