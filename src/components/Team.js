import React, { useState } from 'react';


const Team = () => {
  const [team, setTeam] = useState([]);

  //Adds pokemon to team
  const addToTeam = (pokemon) => {
    setTeam([...team, pokemon]);
  };
  return (
    <div>
      <Button color="primary">Open Team</Button>
      <Offcanvas direction="bottom">
        <OffcanvasHeader>Your Team</OffcanvasHeader>
        <OffcanvasBody>
          <ul>
            {team.map((pokemon) => (
              <li key={pokemon.id}>{pokemon.img}</li>
            ))}
          </ul>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};


export default Team