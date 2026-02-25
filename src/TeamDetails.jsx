import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TeamsAPI from "./TeamsAPI";



export default function TeamDetails(){

    const { selectteam } = useParams();
    const [team,setTeam]=useState([]);
    const displayteam = TeamsAPI.find(x=> x.name===selectteam);

    useEffect(() =>{
        fetch(`http://localhost:5000/teams/${selectteam}`)
        .then((res)=> res.json())
        .then((data) => setTeam(data));
    },[]);

   /* useEffect (() => {
        fetch(`http://localhost:5173/teams/${id}`)
        .then(res=> res.json())
        .then(data => setBook(data));
    }, [selectteam]
);*/


if(!displayteam) return <p>ERROR</p>;

return(
<div className="teamdetailsdiv" style={{backgroundColor:displayteam.primaryColor, color:displayteam.secondaryColor}}>
    <h2 style={{backgroundColor:"white",textAlign:"center"}}>{displayteam.name}</h2>
    {/*<img className="displaylogo2"src={displayteam.logo} />*/}
    <div>Players (Or Position Groups)</div>


    <div className="databaseinfo" style={{display:"inline-block"}}>
        <h3>Coaches</h3>
<div className="valueborders" style={{borderColor:displayteam.secondaryColor}}>{team.HeadCoach}</div>
</div>


<div className="databaseinfo" style={{display:"inline-block"}}>
        <h3>Offensive Cordinator</h3>
<div className="valueborders" style={{borderColor:displayteam.secondaryColor}}>{team.OffCord}</div>
</div>

<div className="databaseinfo" style={{display:"inline-block"}}>
        <h3>Defensive Cordinator</h3>
<div className="valueborders" style={{borderColor:displayteam.secondaryColor}}>{team.DefCord}</div>
</div>


    <div>Play Style</div>


<div className="databaseinfo" style={{display:"inline-block"}}>
        <h3>Offensive Scheme</h3>
<div className="valueborders" style={{borderColor:displayteam.secondaryColor}}>{team.OffScheme}</div>
</div>

<div className="databaseinfo" style={{display:"inline-block"}}>
        <h3>Defensive Scheme</h3>
<div className="valueborders" style={{borderColor:displayteam.secondaryColor}}>{team.DefScheme}</div>
</div>
    <div>Key Concepts</div>
    <div>Notes on Recent Game</div>
    <div>Key Comments</div>
    <div></div>
</div>
);
}