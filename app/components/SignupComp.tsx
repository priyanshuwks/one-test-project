"use client";
import axios from "axios";
import { useState } from "react";
import { Loader } from "./Loader";
import { SiTicktick } from "react-icons/si";

function SignupComp(){
    const [inputs, setInputs] = useState({});
    const [loader, setLoader] = useState(false);
    const [signupSuccess, setSignupSuccess] = useState(false);
    
    async function handleSignUp(){
        try {
            if(Object.keys(inputs).length <= 1){
                alert('Input fields should not empty');
            }else{
                setLoader(true);
                const signupRes = await axios.post(`http://localhost:3000/api/test`, inputs);
                if(signupRes.data.success){
                    setSignupSuccess(true);
                    console.log('user created');
                    setLoader(false);
                    setTimeout(() => {
                        setSignupSuccess(false);
                    },3000);
                }
            }
        } catch (err) {
            console.log('error occured');
            setLoader(false);
        }
        
    }
    return (
        <div className="w-8/12 h-4/6 border rounded-lg shadow-2xl flexjustify-center items-center">
            <div className="p-4">
                <div className="text-center mb-4 font-pacifico font-semibold text-2xl text-gray-400">
                    OneSaporji.com
                </div>
                <div>
                    <div>
                        <input
                        onChange={(e) => setInputs({...inputs, username : e.target.value})}
                        type="text" 
                        className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter your username..."></input>
                    </div>
                    <div>
                        <input 
                        onChange={(e) => setInputs({...inputs, password : e.target.value})}
                        type="password"
                        className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter your password..."></input>
                    </div>
                    <div className="flex justify-center m-1">
                        <button 
                        onClick={handleSignUp}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded">Sign Up</button>
                        <div className="flex items-center ml-[1px]">
                            {signupSuccess ? <SiTicktick /> : null}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {loader ? <Loader /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupComp;