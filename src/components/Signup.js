import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineEye } from 'react-icons/ai'; 
import { AiOutlineEyeInvisible } from 'react-icons/ai'; 

function Signup() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPasword, setConfirmPassword] = useState('');

    const [erreurEmail, setErreurEmail] = useState(null);
    const [erreurPassword, setErreurPassword] = useState(null);

    const [valueOne, setValueOne] = useState('');

    //const [hash, setHash] = useState('');

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }

    const data = {
        user: user,
        email: email,
        password: password,
        confirmPasword: confirmPasword
    }
    console.log(data);
     
    
    const handleCheckOne = () => {
        if(erreurEmail !== "" && erreurPassword !== "" && user !== "" && password === confirmPasword ){
            return setValueOne('oui');
        } else{
            return setValueOne('non');
        }
    }
    const myVerificationOne = valueOne === 'non' ? (<p className="text-red-500 text-center text-sm">Veuillez remplir tout les champs</p>):null;

   

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regexEmail.test(event.target.value)) {
          setErreurEmail('Adresse e-mail non valide');
        } else {
          setErreurEmail(null);
        }
      };

      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        const regexMdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regexMdp.test(event.target.value)) {
          setErreurPassword('Mot de passe non valide. Il doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.');
        } else {
          setErreurPassword(null);
        }
      };

      const navigate = useNavigate();

      const handleSubmit = async(e) => {
        e.preventDefault()
        const personnel = { user, email, password };
        axios.post('http://localhost:3001/signup', personnel)
        .then(res => 
            {
                console.log(res);
                navigate('/login')
            })
        .catch(err => console.log(err));
      }

    /*.then((personnel) => {
        console.log(personnel.data);
    })
    .catch((error) => {
        console.log(error);
    });
    }*/

    return(
        <div className="w-full h-screen bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90%">
            <div className='flex flex-col justify-center xl:justify-start xl:pt-10 items-center gap-7 max-w-[1400px] h-full mx-auto px-10'>

                <h2 className="text-2xl lg:text-4xl text-center font-semibold text-white w-[85%] md:w-[70%] xl:w-[40%]">Sign-Up</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-7  bg-white p-5 rounded-md w-[85%] md:w-[70%] xl:w-[40%] text-md md:text-lg">
                    <div className=" flex flex-col gap-3">
                        <label htmlFor="user" className="font-semibold">Username: </label>
                        <input type="text" onChange={(e) => setUser(e.target.value)} value={user} placeholder="Username" className="border-2 p-1 md:p-2 outline-green-300" autoComplete="off" required/>
                    </div>

                    <div className=" flex flex-col gap-3">
                        <label htmlFor="email" className="font-semibold">Email: </label>
                        <div>
                            <input type="email" onChange={handleEmailChange} value={email} placeholder="email" className="w-full border-2 p-1 md:p-2 outline-green-300" autoComplete="off" required/>
                            {erreurEmail && <p className="text-red-500 text-xs lg:text-sm">{erreurEmail}</p>}
                        </div>
                    </div>

                    <div className=" flex flex-col justify-cente gap-3">
                        <label htmlFor="password" className="font-semibold">Password: </label>
                        <div className="flex flex-row items-center">
                            <input type={show ? "text":"password"} onChange={handlePasswordChange} value={password} className="w-full border-2 p-1 md:p-2 outline-green-300" autoComplete="off" required/>
                            <p onClick={handleClick} className="ml-[-4vh] text-lg md:text-xl xl:text-2xl cursor-pointer">{show ? <AiOutlineEye></AiOutlineEye>:<AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</p>
                        </div>
                        {erreurPassword && <p className="text-red-500 text-xs lg:text-sm">{erreurPassword}</p>}
                    </div>

                    <div className=" flex flex-col gap-3 mb-5">
                        <label htmlFor="confirmPasword" className="font-semibold">Confirmer Password: </label>
                        <div className="flex flex-row">
                            <input type="password" onM onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPasword} id="confirmPasword" className="w-full border-2 p-1 md:p-2 outline-green-300" autoComplete="off" required/>
                         
                        </div>  
                        {password !== confirmPasword ? (<p className="text-red-500 text-xs lg:text-sm">Les mots de passe ne correspondent pas</p>):null}               
                    </div>
                    
                    {myVerificationOne}
                    <button type="button" onClick={valueOne === 'oui' ? (handleSubmit):(handleCheckOne)} className="bg-gradient-to-r from-Three from-20% via-Two via-30% to-Four to-90% text-white text-lg md:text-xl p-1 md:p-2 text-center mx-auto rounded-md w-full">Enregistrer</button>
                </form>
            </div>
        </div>
    )
}
export default Signup;