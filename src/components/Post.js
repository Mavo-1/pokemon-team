import React, { useState } from "react";
import {
  Alert,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Badge,
} from "reactstrap";

// const capitalName = (name) => {
//   return name.charAt(0).toUpperCase() + name.slice(1);
// };

const pokemonType = (pokemon) => {
  switch (pokemon.type) {
    case "water":
      return "primary";

    case "fire":
      return "danger";

    case "fighting":
      return "danger";

    case "electric":
      return "warning";

    case "grass":
    case "bug":
      return "success";

    case "ice":
      return "info";

    case "ghost":
      return "dark";

    case "dark":
      return "dark";

    default:
      return "secondary";
  }
};

const Post = ({ pokemon, pokemonChosen }) => {
  const [showAllMovesModal, setShowAllMovesModal] = useState(false);
  

  const toggleShowAllMovesModal = () => {
    setShowAllMovesModal(!showAllMovesModal);
  };

 const sortedMoves= pokemon.moves.sort()
 const sortedAbilities= pokemon.abilities.sort()
 

  return (
    <div className="position-relative">
      {!pokemonChosen && (
        <div>
          <h1>Welcome to the Pokémon Squad!</h1>
          <p className="intro">
            Are you ready to embark on a journey through the fascinating world
            of Pokémon? Use our search feature to discover detailed information
            about your favorite Pokémon, including their abilities, moves, and
            more. Catch 'em all, learn about their strengths and weaknesses, and
            become a Pokémon Master! Start your adventure now by entering a
            Pokémon's name and hitting the "Search" button above.
          </p>

          <Alert color="danger" className="d-none d-lg-block">
            <strong>Choose Your Pokemon</strong>
          </Alert>
        </div>
      )}
    
      {pokemonChosen && (
        <div className="post-content">
          
          
            <h2 className="h4 text-dark mt-5 mb-3">Type</h2>
            <h4>
              <Badge color={pokemonType(pokemon)}>
                {pokemon.type.toUpperCase()}{" "}
              </Badge>
            </h4>
          
          <h2 className="h4 text-dark mt-5 mb-3">Abilities</h2>
          <div className="list-horizontal-wrap">
            <ListGroup horizontal className="list-unstyled">
              {sortedAbilities.map((ability, index) => (
                <ListGroupItem key={index}>{ability}</ListGroupItem>
              ))}
            </ListGroup>
          </div>

          <h2 className="h4 text-dark mt-5 mb-3">Moves</h2>
          <div className="list-horizontal-wrap">
            <ListGroup horizontal className="list-unstyled">
              {sortedMoves.slice(0, 9).map((moves, index) => (
                <ListGroupItem key={index}>{moves}</ListGroupItem>
              ))}
            </ListGroup>
          </div>
          {pokemon.moves.length > 10 && (
            <Button
              color="primary"
              onClick={toggleShowAllMovesModal}
              className="mt-3"
            >
              View All Moves
            </Button>
          )}
          <Modal isOpen={showAllMovesModal} toggle={toggleShowAllMovesModal}>
            <ModalHeader toggle={toggleShowAllMovesModal}>
              All Moves
            </ModalHeader>
            <ModalBody>
              <ListGroup>
                {sortedMoves.map((move, index) => (
                  <ListGroupItem key={index}>{move}</ListGroupItem>
                ))}
              </ListGroup>
            </ModalBody>
          </Modal>

        </div>
      )}
    </div>
  );
};

export default Post;
