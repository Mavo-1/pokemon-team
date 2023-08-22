import { Button, Alert, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import React from 'react';




const BANNER = "https://cdn2.tfx.company/images/clickwallpapers-pokemon-4k-img2.jpg";


const SideCard = ({pokemon, pokemonChosen}) => {
  console.log("SideCard props:", pokemon, pokemonChosen);
  // Check if a Pokemon is chosen before rendering
  if (!pokemonChosen) {
    return (
      <div>
        
      </div>
    );
  }
  return (
    <div>
      {/* <Alert color="info" className="d-none d-lg-block">
        {pokemonChosen ? (
          <strong>IT'S {pokemon.name.toUpperCase()}!</strong>
        ) : (
          <strong>No Pokemon chosen yet.</strong>
        )}
      </Alert> */}
      <Card>
        <CardImg top width="100%" src={pokemon.img || BANNER} alt={pokemon.name || "Pokemon"} />
        <CardBody>
          <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">
            {pokemon.name.toUpperCase()}
          </CardTitle>
          <CardSubtitle
            className="text-secondary mb-3 font-weight-light text-uppercase"
            style={{ fontSize: "0.8rem" }}
          >
            {pokemon.type || "Pokemon Type"}
          </CardSubtitle>
          <CardText
            className="text-secondary mb-4"
            style={{ fontSize: "0.75rem" }}
          >
            {/* Display some relevant info */}
            {pokemonChosen ? (
              <div>
              <p> HP: {pokemon.hp || "Unknown"}</p> 
               <p>Attack: {pokemon.attack || "Unknown"}</p>
               <p>Defense: {pokemon.defense || "Unknown"}</p>
              </div>
            ) : (
              "Small Pokemon Bio"
            )}
          </CardText>
          <Button color="success" className="font-weight-bold">
            View Profile
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default SideCard;