import CircleLoader from "../components/loaders/CircleLoader";
import { Loader } from "../components/loaders/Loader";


export default function Loading(){
    return <div className="flex justify-center mt-6">
        <CircleLoader />
    </div>
}