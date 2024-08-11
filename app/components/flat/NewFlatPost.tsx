'use client';
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { SiTicktick } from "react-icons/si";
import { Loader } from "../loaders/Loader";

function NewFlatPost(){
    const session = useSession()
    const [flatDetails, setFlatDetails] = useState({});
    const [saveFlat, setSaveFlat] = useState(false);
    const [loader, setLoader] = useState(false);
    console.log(flatDetails);
    async function handleSaveFlat(){
        console.log(session);
        try {
            setLoader(true);
            //@ts-ignore
            const body = {...flatDetails, publisherId : session.data.user._id}
            console.log('printing body')
            console.log(body)
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/flat/create`, body);
            console.log(res)
            if(res.data.success){
                setSaveFlat(true);
                setLoader(false);
                setTimeout(() => {
                    setSaveFlat(false);
                    window.location.reload();
                },3000)
            }else{
                setTimeout(() => {
                    setLoader(false);
                })
            }
        } catch (error) {
            setSaveFlat(false);
            console.log(error)
            setLoader(false);
        }
    }
    return (
        <div className="border rounded-lg m-10 flex-col justify-center items-center shadow-2xl">
            <div className="mt-7">
                <h1 className="font-edu text-2xl flex justify-center">Advertise a Flat!</h1>
            </div>
            <div className="w-[280px] h-[500px] md:w-[400px]">
                <div className="flex justify-center gap-3 mt-5">
                    <button onClick={() => window.location.reload()}
                    className="bg-teal-500 hover:bg-teal-400 text-white font-basker font-bold py-2 px-4 rounded">Reset</button>
                    <button className="bg-teal-500 hover:bg-teal-400 text-white font-basker font-bold py-2 px-4 rounded">Cancel</button>
                </div>
                <div className="m-8">
                    <div className="flex gap-2 m-1">
                        <h3>Flat Size:</h3>
                        <div className="">
                            <select className="px-2 py-1 rounded-md" onChange={(e) => setFlatDetails({...flatDetails, flatSize : e.target.value})}>
                                <option value=""></option>
                                <option value="1 BHK">1 BHK</option>
                                <option value="2 BHK">2 BHK</option>
                                <option value="3 BHK">3 BHK</option>
                            </select>
                        </div>
                    </div>
                    <div className="m-1 flex gap-2">
                        <h3>Furnish:</h3>
                        <div className="">
                            <select className="px-2 py-1 rounded-md" onChange={(e) => setFlatDetails({...flatDetails, furnished : e.target.value})}>
                                <option value=""></option>
                                <option value="Full">Full</option>
                                <option value="Semi">Semi</option>
                                <option value="Un">Un</option>
                            </select>
                        </div>
                    </div>
                    <div className="m-1 flex gap-2">
                        <h3>Required For:</h3>
                        <div className="">
                            <select className="px-2 py-1 rounded-md" onChange={(e) => setFlatDetails({...flatDetails, requiredFor : e.target.value})}>
                                <option value=""></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="m-1 flex gap-2">
                        <h3>Flat Facing:</h3>
                        <div className="">
                            <select className="px-2 py-1 rounded-md" onChange={(e) => setFlatDetails({...flatDetails, balconyFacing : e.target.value})}>
                                <option value=""></option>
                                <option value="North">North</option>
                                <option value="South">South</option>
                                <option value="East">East</option>
                                <option value="West">West</option>
                            </select>
                        </div>
                    </div>
                    <div className="m-1 flex gap-2 items-center">
                        <h3>Price:</h3>
                        <div>
                        <input onChange={(e) => setFlatDetails({...flatDetails, price : e.target.value}) } 
                        className="m-1 appearance-none block w-9/12 h-[30px] px-3 py-2 border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="enter price..."></input>
                        </div>
                    </div>
                    <div className="m-1 flex-col gap-2 items-center">
                        <h3>Description:</h3>
                        <div>
                        <textarea rows={3} onChange={(e) => setFlatDetails({...flatDetails, description : e.target.value})} 
                        className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="More details here like block, apartment..."></textarea>
                        </div>
                    </div>
                    <div className="flex justify-center m-4">
                        <div>
                            <button onClick={handleSaveFlat}
                            className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded">
                                <h1 className="font-edu text-xl">Save</h1>
                            </button>
                            <div className="mt-[2px] flex justify-center">{loader ? <Loader /> : null}</div>
                        </div>
                        <div className="flex items-center ml-[2px]">
                            {saveFlat ? <SiTicktick /> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewFlatPost;