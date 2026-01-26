import { Link } from "react-router-dom"
import TeamsAPI from "./TeamsAPI";

export default function AllTeams(){
    return (
    <div id="homepage">

      <div style ={{display:"hidden"}}></div>
     
     {TeamsAPI.map((team)=> 
     <Link className="clicktheteam" 
     key={team.name}
     to={`/teamsapi/${team.name}`}     
     style={{cursor:"pointer"}}>
      {team.name}
      </Link>)}
    

    </div>
    );
}