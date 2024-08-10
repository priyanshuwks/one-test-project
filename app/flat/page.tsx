"use client";
import { useRouter } from "next/navigation";
import SearchFlat from "../components/SearchFlat";
import FlatCard from "../components/flat/FlatCard";
import NewFlatPost from "../components/flat/NewFlatPost";
import CircleLoader from "../components/loaders/CircleLoader";

function Flat(){
    const router = useRouter();
    return (
        <div>
            <div>
                <div className="flex justify-center mt-4 mb-1">
                    <button 
                        onClick={() => router.push('/flat/new')}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Advertise Vacant Flat
                    </button>
                </div>
            </div>
            
            <div><FlatCard /></div>
            
        </div>
    )
}
export default Flat;