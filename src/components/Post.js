import {Alert} from 'reactstrap';
import React from 'react';



const Post = ({ pokemon, pokemonChosen }) => {
  //This is still returning the opposite. Figure out why its reversed.
    if(pokemonChosen){
      return (
        <div className="position-relative">
          <Alert color='info' className='d-none d-lg-block'>
            <strong>Choose your pokemon.</strong>
          </Alert>
         
          <article
            className="pt-5 text-secondary text-justify"
            style={{ fontSize: "0.9rem", whiteSpace: "pre-line" }}>
            
          </article>
        </div>
        ); 
    }else if(!pokemonChosen){
      return (
        <div className="position-relative">
          
          <Alert color='info' className='d-none d-lg-block'>
            <strong>It's {pokemon.name}!</strong>
          </Alert>
          <article
            className="pt-5 text-secondary text-justify"
            style={{ fontSize: "0.9rem", whiteSpace: "pre-line" }}>
            
          </article>
        </div>
      )
    };
     
  }


export default Post;