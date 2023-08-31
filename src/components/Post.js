import React,{ useState} from 'react';
import {Alert, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, Button} from 'reactstrap';




const Post = ({pokemon,pokemonChosen}) => {

      return (
        <div className="position-relative">
          {!pokemonChosen ? 
          (<Alert color='info' className='d-none d-lg-block'>
            <strong>Choose Your Pokemon!</strong>
          </Alert>) : (<Alert color='info' className='d-none d-lg-block'>
            <strong>You caught {pokemon.name.toUpperCase()}! </strong>
          </Alert>)
          }
          {pokemonChosen && (
            <div>
              <h2 className="h4 text-dark mt-5 mb-3">Abilities:</h2>
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
                
                {pokemon.moves.map((moves,index)=> (
                  <ListGroupItem key={index}>{moves}</ListGroupItem>
                ))}
              </ListGroup>
              </div>
            </div>
          )}
          <article
            className="pt-5 text-secondary text-justify"
            style={{ fontSize: "0.9rem", whiteSpace: "pre-line" }}>
            
          </article> 
        </div>
        ); 

    }
     
  


export default Post;