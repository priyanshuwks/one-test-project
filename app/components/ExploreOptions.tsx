"use client";
import RentImage from "../next-images/rentImages.jpeg";
import SellProduct from "../next-images/sell-product.jpeg";
import Services from "../next-images/Services.jpeg";
import Connect from "../next-images/connect2.jpeg";
import Image from "next/image";
import { useRouter } from "next/navigation";
function ExploreOptions(){
    const router = useRouter();
    return (
        <div className="grid grid-cols-1 place-items-center p-1 border border-slate-500 md:grid-cols-2 ">
            <div onClick={() => router.push('/flat')} className="border rounded-md p-1 cursor-pointer hover:scale-105">
                <div className="">
                    <Image 
                    src={RentImage}
                    alt="Image"
                    height={170}
                    width={170}
                    />
                </div>
                <div className="text-center text-pink-900 bg-yellow-400 rounded-sm">Search Flat, Rent...</div>
            </div>
            <div className="border rounded-md p-1 cursor-pointer hover:scale-105">
                <div className="">
                    <Image 
                    src={SellProduct}
                    alt="Image"
                    height={170}
                    width={170}
                    />
                </div>
                <div className="text-center text-pink-900 bg-yellow-400 rounded-sm">Sell Products...</div>
            </div>
            <div className="border rounded-md p-1 cursor-pointer hover:scale-105">
                <div className="">
                    <Image 
                    src={Services}
                    alt="Image"
                    height={170}
                    width={170}
                    />
                </div>
                <div className="text-center text-pink-900 bg-yellow-400 rounded-sm">Services...</div>
            </div>
            <div className="border rounded-md p-1 cursor-pointer hover:scale-105">
                <div className="">
                    <Image 
                    src={Connect}
                    alt="Image"
                    height={170}
                    width={170}
                    />
                </div>
                <div className="text-center text-pink-900 bg-yellow-400 rounded-sm">Connect...</div>
            </div>
        </div>
    )
}
export default ExploreOptions;