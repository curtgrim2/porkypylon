import { Link } from "react-router-dom";
import {useState,useEffect} from "react";
import TeamsAPI from "./TeamsAPI";




export default function AllTeams(){
    const [backInfo,setBackInfo]=useState();

      const newBackground = (logo) =>{
        setBackInfo(logo);
         console.log(backInfo);
         var fadedback=document.getElementById("fadedback");
         fadedback.style.backgroundImage=`url(${backInfo})`;
            fadedback.style.backgroundSize="cover";
            fadedback.style.backgroundPosition="center";
            fadedback.style.backgroundRepeat="no-repeat";
      };

      useEffect(() => {
  if (backInfo) {
    newBackground();
  }
}, [backInfo]);
    
    return (
<div>
    <div id="fadedback"></div>
    <div id="allteamspage">

     {TeamsAPI.map((team)=> 
     <Link className="clicktheteam" 
     key={team.name}
     to={`/teams/${team.name}`} 
     id={team.name}   
     onMouseEnter={()=>{newBackground(team.logo);}} 
     style={{cursor:"pointer",backgroundColor:team.primaryColor,color:team.secondaryColor}}>
      {team.name}
      <img src={team.logo} alt={team.name} className="teamlogo"/>
      </Link>)}
    

    </div>
    </div>
    );
}


