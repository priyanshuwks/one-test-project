import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/authOption";


async function SearchFlat(){
    const session = await getServerSession(NEXT_AUTH);
    return (
        <div>
            Search flat...
            {JSON.stringify(session)}
        </div>
    )
}
export default SearchFlat;