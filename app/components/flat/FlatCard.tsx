import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { PiLineVerticalLight } from "react-icons/pi";

function FlatCard(){
    
    const image1 = "https://shorturl.at/Pzl7y";
    const [flats, setFlats] = useState([]);

    const date = '2024-08-06 06:26:24.223';

    
    const flat = {
        imageUrl : image1,
        flatSize : "2 BHK",
        description : "good flat with excellet ambiance",
        furnished : "semi",
        price : "10000",
        requiredFor : "Male",
        balconyFacing : "South",
        publisherId : "1fda4bcf-18af-4002-bc1d-3e05cd7cd979"
    }
    useEffect(() => {
        fetchFlats();
    },[])

    async function fetchFlats(){
        console.log('inside fetch Flats fn')
        const res = await axios.get(`http://localhost:3000/api/flat/get`);
        const resData = res.data; //object hai
        if(res.data){
            setFlats(resData.data);
            console.log('res ok')
            console.log(res.data)
        }
    }
    if(flats.length == 0){
        console.log('rendering without res')
    }else{
        console.log('rendering with')
        console.log(flats)
    }
    return (
        <div className="flex justify-center items-center">
            <div className="grid md:grid-cols-2 gap-1 lg:grid-cols-3">
                {/* {flats.length == 0 ? <h2>No Flats available to render...</h2> : 
                    (flats.map((flat, index) => {
                        return <div>
                        <RenderFlat oneFlat={flat}/>
                    </div>
                    }))
                } */}

                {flats.map((flat, index) => {
                    return <div key={index} className="">
                        <RenderFlat oneFlat={flat}/>
                    </div>
                })}

                {/* <RenderFlat oneFlat={flat} /> */}
            </div>
        </div>
    )
}

function RenderFlat({oneFlat} : any){
    return (
        <div className="border rounded-lg shadow-2xl w-[350px] h-[330px]">
            <div className="flex justify-center">
                <Image src={oneFlat.imageUrl} width={350} height={250} alt="flat-image"/>
            </div>
            <div className="flex justify-between items-center mx-2">
                <div>
                    <h2 className="font-semibold">{oneFlat.flatSize}</h2>
                </div>
                <div>
                    <PiLineVerticalLight />
                </div>
                <div>
                    <h2 className="font-semibold">{oneFlat.furnished}-furnished</h2>
                </div>
                <div>
                    <PiLineVerticalLight />
                </div>
                <div>
                    <h2 className="font-semibold">Flat-Facing - {oneFlat.balconyFacing}</h2>
                </div>
            </div>
            <div className="flex justify-around items-center">
                <div className="font-semibold">
                    Preferred - {oneFlat.requiredFor}
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="font-semibold flex items-center">
                    Price -  <span className="inline-block ml-2"><FaIndianRupeeSign /></span> <span className="font-normal">{oneFlat.price}</span>
                </div>
            </div>
            <div>
                <div className="flex justify-center">
                    <h2 className="font-pacifico font-light text-gray-400">Posted on - {oneFlat.createdAt.substring(0,10)}</h2>
                </div>
            </div>
        </div>
    )
}

export default FlatCard;