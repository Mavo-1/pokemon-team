import React, { useState } from 'react';
import {
    Button,
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
} from "reactstrap";


const Team = ({ team }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
  };
  

  return (

    <div>
      {team.length> 0 && (
      <div className="open-team-button-container">
      <Button color="primary" onClick={toggleOffCanvas} className="font-weight-bold open-team-button">
        Open Team
      </Button>
      </div>
      )}
    
      <Offcanvas
        direction="bottom"
        isOpen={isOpen}
        toggle={toggleOffCanvas}
        style={{ maxHeight: "80%" }}
      >
        <OffcanvasHeader>Your Team</OffcanvasHeader>
        <OffcanvasBody
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {team.map((pokemon) => (
            <div key={pokemon.id} style={{ maxWidth: "25%", margin: "10px" }}>
              <img
                src={pokemon.img}
                alt={pokemon.name}
                style={{ width: "100%", height: "auto" }}
              ></img>
            </div>
          ))}
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};


export default Team