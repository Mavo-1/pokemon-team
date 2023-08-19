import React from 'react';



const Post = ({ pokemon }) => {
  console.log("Post props:", pokemon);
  return (
    <div className="position-relative">
      <span className="d-block pb-4 h2 text-dark border-bottom border-gray">
        Choose Your Pokemon!
      </span>
      <article
        className="pt-5 text-secondary text-justify"
        style={{ fontSize: "0.9rem", whiteSpace: "pre-line" }}
      >
        {pokemon && (
          <>
            <p>Name: {pokemon.name}</p>
            <p>Type: {pokemon.type}</p>
            <p>HP: {pokemon.hp}</p>
            <p>Attack: {pokemon.attack}</p>
            <p>Defense: {pokemon.defense}</p>
            <p>Bio:{/* Add your custom bio here */} </p> 
          </>
        )}
      </article>
    </div>
  );
};


export default Post;