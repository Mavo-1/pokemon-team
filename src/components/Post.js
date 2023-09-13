import React,{ useState} from 'react';
import {Alert, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, Button, Badge} from 'reactstrap';


const capitalName = (name) =>{
  return name.charAt(0).toUpperCase()+ name.slice(1);
}


const Post = ({ pokemon, pokemonChosen }) => {
  const [showAllMovesModal, setShowAllMovesModal] = useState(false);

  const toggleShowAllMovesModal = () => {
    setShowAllMovesModal(!showAllMovesModal);
  };



  return (
    <div className="position-relative">
      {!pokemonChosen ? (
        <div>
        <h1>Welcome to the Pokémon Squad!</h1>
        <p>Are you ready to embark on a journey through the fascinating world of Pokémon? Use our search feature to discover detailed information about your favorite Pokémon, including their abilities, moves, and more. Catch 'em all, learn about their strengths and weaknesses, and become a Pokémon Master! Start your adventure now by entering a Pokémon's name and hitting the "Search" button above.</p>

        <Alert color="danger" className="d-none d-lg-block">
          <strong>Choose Your Pokemon!</strong>
        </Alert>
        </div>
      ) : (
        <Alert color="info" className="d-none d-lg-block">
          <strong>You Caught {capitalName(pokemon.name)}! </strong>
        </Alert>
      )}
      {pokemonChosen && (
        <div>
          <div>
            <h2 className="h4 text-dark mt-5 mb-3">Type</h2>
            <h4><Badge color="secondary">{pokemon.type.toUpperCase()} </Badge></h4>

          </div>
          <h2 className="h4 text-dark mt-5 mb-3">Abilities</h2>
          <div className="list-horizontal-wrap">
            <ListGroup horizontal className="list-unstyled">
              {pokemon.abilities.map((ability, index) => (
                <ListGroupItem key={index}>{ability}</ListGroupItem>
              ))}
            </ListGroup>
          </div>

          <h2 className="h4 text-dark mt-5 mb-3">Moves</h2>
          <div className="list-horizontal-wrap">
            <ListGroup horizontal className="list-unstyled">
              {pokemon.moves.slice(0, 10).map((moves, index) => (
                <ListGroupItem key={index}>{moves}</ListGroupItem>
              ))}
            </ListGroup>
          </div>
          {pokemon.moves.length > 10 && (
            <Button color="primary" onClick={toggleShowAllMovesModal} className="mt-3">
              View All Moves
            </Button>
          )}
          <Modal isOpen={showAllMovesModal} toggle={toggleShowAllMovesModal}>
            <ModalHeader toggle={toggleShowAllMovesModal}>All Moves</ModalHeader>
            <ModalBody>
              <ListGroup>
                {pokemon.moves.map((move, index) => (
                  <ListGroupItem key={index}>{move}</ListGroupItem>
                ))}
              </ListGroup>
            </ModalBody>
          </Modal>

          <div>
            <h2 className="h4 text-dark mt-5 mb-3">Strong Against</h2>
          </div>

          <div>
            <h2 className="h4 text-dark mt-5 mb-3">Where to Find</h2>
          </div>

          

          <div>
            <h2 className="h4 text-dark mt-5 mb-3">Weight</h2>
          </div>
        </div>
        
      )}
      
      <article className="pt-5 text-secondary text-justify" style={{ fontSize: "0.9rem", whiteSpace: "pre-line" }}></article>
    </div>
  );
};

export default Post;