import React, { useState } from 'react';
import {
    Button,
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody
} from "reactstrap";

const Team = ({ team }) => {
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