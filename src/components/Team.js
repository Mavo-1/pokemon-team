import React, { useState } from 'react';
import {
    Button,
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    List,
    ListInlineItem,
} from "reactstrap";


const Team = ({ team }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button color="primary" onClick={toggleOffCanvas}>Open Team</Button>
      <Offcanvas direction="bottom" isOpen={isOpen} toggle={toggleOffCanvas}>
        <OffcanvasHeader>Your Team</OffcanvasHeader>
        <OffcanvasBody>
          <List type="inline">
            {team.map((pokemon) => (
              <ListInlineItem key={pokemon.id}>
                <img src={pokemon.img} alt={pokemon.name}></img>
              </ListInlineItem>
            ))}
          </List>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};


export default Team