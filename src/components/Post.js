import React from 'react';
import { Alert } from 'reactstrap';



const Post = ({ pokemon, pokemonChosen }) => {
  console.log("Post props:", pokemon);
  return (
    <div className="position-relative">
      <Alert color='info' className='d-none d-lg-block'>
        {pokemonChosen ? (
          <strong> No Pokemon Chosen Yet. </strong>) : (<strong>IT'S {pokemon.name}!</strong>)
        }

      </Alert>
      <article
        className="pt-5 text-secondary text-justify"
        style={{ fontSize: "0.9rem", whiteSpace: "pre-line" }}>
        
      </article>
    </div>
    );    
  }
  // return (
  //   <div>
  //     <Alert color="info" className="d-none d-lg-block">
  //       {pokemonChosen ? (
  //         <strong>IT'S {pokemon.name.toUpperCase()}!</strong>
  //       ) : (
  //         <strong>No Pokemon chosen yet.</strong>
  //       )}
  //     </Alert>
  //     <article>
  //     {pokemon && (
  //         <>
  //           <p>Bio:{/* Add your custom bio here */} </p> 
  //         </>
  //       )}
  //     </article>
  //   </div>
  // )
//};


export default Post;