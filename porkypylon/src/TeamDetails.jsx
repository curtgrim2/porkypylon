import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TeamsAPI from "./TeamsAPI";



export default function TeamDetails(){
    const { selectteam } = useParams();
    //const [team, setTeam] = useState(null);
    const displayteam = TeamsAPI.find(x=> x.name===selectteam);

   /* useEffect (() => {
        fetch(`http://localhost:5173/teams/${id}`)
        .then(res=> res.json())
        .then(data => setBook(data));
    }, [selectteam]
);*/


if(!displayteam) return <p>ERROR</p>;

return(
<div>
    <h2>{displayteam.name}</h2>
</div>
);
}