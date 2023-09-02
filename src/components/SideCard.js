import { Button,  Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import React from 'react';




const BANNER = "https://cdn2.tfx.company/images/clickwallpapers-pokemon-4k-img2.jpg";


const SideCard = ({pokemon, pokemonChosen}) => {
  // Check if a Pokemon is chosen before rendering
  if (!pokemonChosen) {
    return (
      <div>
        <Card className="my-2" color="success" outlinestyle={{width: '18rem'}}>
          <CardImg top width="100%" src={pokemon.img || BANNER} alt={pokemon.name || "Pokemon"} />
          <CardBody>
            
          </CardBody>
        </Card>
      </div>
    );
  }else if(pokemonChosen){
    return (
      <Card className="my-2" color="success" outline style = {{width: "25rem"}}>
        <img top width="100%" src={pokemon.img} alt={pokemon.name || "Pokemon"} />
      <CardBody color='success' inline style={{width: "18rem"}}>
            <CardTitle className="h1 mb-2 pt-2 font-weight-bold text-dark">
              {pokemon.name.toUpperCase()}
            </CardTitle>
            <CardSubtitle
              className="text-dark mb-3 font-weight-light text-uppercase"
              style={{ fontSize: "0.8rem" }}
            >
              {pokemon.type || "Pokemon Type"}
            </CardSubtitle>
            <CardText
              className="text-dark mb-4"
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
            <Button color="danger" className="font-weight-bold">
              Add to Team
            </Button>
          </CardBody>
          </Card>
    )
  }
}
  

export default SideCard;