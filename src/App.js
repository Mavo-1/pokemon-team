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
    <>
      {/* Pass handleSearch to the Header component */}
      <Header onSearch={handleSearch} />

      <main className="my-5 py-5">
        <Container className="px-0">
          <Row
            noGutters
            className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative"
          >
            <Col
              xs={{ order: 2 }}
              md={{ size: 4, order: 1 }}
              tag="aside"
              className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
            >
              <SideCard pokemon={pokemon} pokemonChosen={pokemon.name !== ""} onAddToTeam={addToTeam} team={team} />
              <Team team={team}></Team>
            </Col>

            <Col
              xs={{ order: 1 }}
              md={{ size: 7, offset: 1 }}
              tag="section"
              className="py-5 mb-5 py-md-0 mb-md-0"
            >
              <Post pokemon={pokemon} pokemonChosen={pokemon.name !== ""} />
            </Col>

            
          </Row>
        </Container>
      </main>
      <Footer/>
    </>
  );
};

export default App;
