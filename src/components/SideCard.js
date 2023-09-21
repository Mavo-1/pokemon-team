import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

const banner =
  "https://cdn2.tfx.company/images/clickwallpapers-pokemon-4k-img2.jpg";

const capitalName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const SideCard = ({ pokemon, pokemonChosen, onAddToTeam, team}) => {
  const [imageUrl, setImageUrl] = useState(pokemon.img);
  useEffect(() => {
    // Update imageUrl when pokemon.img changes
    setImageUrl(pokemon.img);
  }, [pokemon.img]);
  const toggleShiny = () => {
    if (pokemon.shiny) {
      setImageUrl((prevImageUrl) =>
        prevImageUrl === pokemon.img ? pokemon.shiny : pokemon.img
      );
    } else {
      console.error("Shiny image not available for this Pokémon.");
    }
  };

  const handleAddToTeam= ()=> {
    //Check for dupes
    const isDupe= team.some((p)=> p.id=== pokemon.id)
    if(team.length < 6 && !isDupe){
      onAddToTeam(pokemon);
    }else if(isDupe){
      alert(`You already have ${capitalName(pokemon.name)} in your squad!`);
    }else{
      alert("You can't add more than 6 Pokemon to your squad.")
    }
  }
  // Check if a Pokemon is chosen before rendering
  if (!pokemonChosen) {
    return (
      <div>
        <Card
          className="my-2"
          color="success"
          outlinestyle={{ width: "18rem" }}
        >
          <CardImg
            top
            width="100%"
            src={banner}
            alt={pokemon.name || "Pokemon"}
          />
          <CardBody></CardBody>
        </Card>
      </div>
    );
  } else{
    return (
      <Card className="my-2" color="success" outline style={{ width: "25rem" }}>
        <Button
          className="shinyBtn"
          color="primary"
          onClick={toggleShiny}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 2,
          }}
        >
          {imageUrl === pokemon.img ? "Show Shiny" : "Show Normal"}
        </Button>
        <CardImg
          className="pokemonImg"
          top
          width="100%"
          src={imageUrl}
          alt={pokemon.name}
        />

        <CardBody color="success" inline style={{ width: "18rem" }}>
          <CardTitle className="h1 mb-2 pt-2 font-weight-bold text-dark">
            {capitalName(pokemon.name)} #{pokemon.id}
          </CardTitle>
          <CardSubtitle
            className="text-dark mb-3 font-weight-light text-uppercase"
            style={{ fontSize: "0.8rem" }}
          ></CardSubtitle>
          <CardText className="text-dark mb-4" style={{ fontSize: "0.75rem" }}>
            {/* Display some relevant info */}
            {pokemonChosen ? (
              <div>
                <ListGroup flush>
                  <ListGroupItem>
                    {pokemon.type.toUpperCase() || "Pokemon Type"}
                  </ListGroupItem>
                  <ListGroupItem>HP: {pokemon.hp || "Unknown"}</ListGroupItem>
                  <ListGroupItem>
                    Attack: {pokemon.attack || "Unknown"}
                  </ListGroupItem>
                  <ListGroupItem>
                    Defense: {pokemon.defense || "Unknown"}
                  </ListGroupItem>
                </ListGroup>
              </div>
            ) : (
              "Small Pokemon Bio"
            )}
          </CardText>

          
            <Button
              onClick={handleAddToTeam}
              color="danger"
              className="font-weight-bold"
              style={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                zIndex: 2,
              }}
            >
              Add to Team
            </Button>
          
        </CardBody>
      </Card>
    );
  }
};

export default SideCard;
