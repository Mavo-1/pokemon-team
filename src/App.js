import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.css"
import Header from "./components/Header";
import Post from "./components/Post";
import SideCard from "./components/SideCard";
import Team from "./components/Team"
import Footer from "./components/Footer"

const App = () => {
  const [pokemon, setPokemon] = useState({
    name: "",
    id: "",
    species: "",
    img: "",
    shiny: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
    abilities: [],
    moves: [],
  });

  const [team, setTeam]= useState([]); //Defining team state

  

  const addToTeam = (pokemon)=> { //Function to add pokemon to team
    console.log('Adding to team:', pokemon)
    setTeam([...team,pokemon])

  }

  const handleSearch = (pokemonData) => {
    setPokemon(pokemonData);
  };

  return (
    <div className="page"> 
      {/* Pass handleSearch to the Header component */}
      <Header onSearch={handleSearch} className="w-100"/>

      <main className="my-3 py-5"> 
      <Team className="open-team-button" team={team}/>
        <Container fluid className="max-width-container">
          <Row
            
          >
             <Col
              xs={12}
              md={12}
              lg={5}
              className="pb-5 pb-md-0 custom-center"
            >
              <SideCard pokemon={pokemon} pokemonChosen={pokemon.name !== ""} onAddToTeam={addToTeam} team={team} />
            
              
            </Col>

            <Col
              xs={12}
              md={5}
              lg={6}
              className="pb-5 pb-md-0 custom-center"
            >
              <Post pokemon={pokemon} pokemonChosen={pokemon.name !== ""} />
              
            </Col>

            
          </Row>
        </Container>
        
      </main>
      <Footer className="w-100"/>
    </div>
  );
};

export default App;
