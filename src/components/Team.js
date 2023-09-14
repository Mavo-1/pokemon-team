import React, { useState } from 'react';


const Team = ()=> {
    const [team,setTeam]= useState([]);

    //Adds pokemon to team
    const addToTeam=(pokemon)=>{
            setTeam([...team,pokemon])
    }
    return (
        <div>
            <h2>Your Team</h2>
            <ul>
                {team.map((pokemon)=> (
                   <li key={pokemon.id}>{pokemon.img}</li> 
                ))}
            </ul>
        </div>
    );
};


export default Team