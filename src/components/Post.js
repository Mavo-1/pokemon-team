import React from 'react';
import {Alert} from 'reactstrap';




const Post = ({pokemon,pokemonChosen}) => {
  //This is still returning the opposite. Figure out why its reversed.
    
      return (
        <div className="position-relative">
          {!pokemonChosen ? 
          (<Alert color='info' className='d-none d-lg-block'>
            <strong>Choose Your Pokemon!</strong>
          </Alert>) : (<Alert color='info' className='d-none d-lg-block'>
            <strong>You caught {pokemon.name.toUpperCase()}! </strong>
          </Alert>)
          }
          <article
            className="pt-5 text-secondary text-justify"
            style={{ fontSize: "0.9rem", whiteSpace: "pre-line" }}>
            
          </article> 
        </div>
        ); 

    }
     
  


export default Post;