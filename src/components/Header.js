import React, { useState } from "react";
import Axios from "axios";
import {
  Container,
  Row,
  Col,
  Input,
  Button,
  Navbar,
  Nav,
  NavbarBrand,
  NavLink,
  NavItem,
  Alert,
} from "reactstrap";

const LOGO =
  "https://p7.hiclipart.com/preview/391/852/862/pokemon-go-computer-icons-poke-ball-pokemon-go.jpg";

const Header = ({ onSearch }) => {
  const [pokemonName, setPokemonName] = useState("");

  const handleSearch = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        const pokemonData = {
          name: response.data.name,
          id: response.data.id,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          shiny: response.data.sprites.front_shiny, //front_shiny
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
          abilities: response.data.abilities.map(
            (ability) => ability.ability.name
          ),
          moves: response.data.moves.map((move) => move.move.name),
        };
        onSearch(pokemonData);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon data:", error);
        onSearch(null);
      });
  };

 return (
    <div className="container-fluid">
      <Alert>
        PokemonName = null ?
        {<strong>Make sure Pokemon name is spelled correctly. </strong>}
      </Alert>
      <Navbar fixed="top" color="danger" light expand="sm" className="border-bottom border-grey">
        <Container>
          <Row className="align-items-center">
            <Col>
              <Nav className="mr-auto" navbar>
                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-bold" href="/">
                    <img src={LOGO} alt="Logo" className="img-fluid rounded-circle App-logo" style={{ width: 36 }} />
                  </NavLink>
                </NavItem>
                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-bold" href="/">
                    Home
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col className="d-flex justify-content-lg-center">
              <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}></NavbarBrand>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Input
                    id="searchInput"
                    type="text"
                    className="m-1"
                    placeholder=""
                    value={pokemonName}
                    onChange={(e) => setPokemonName(e.target.value)}
                  />
                </Col>
                <Col>
                  <Button onClick={handleSearch} className="m-1" type="submit" color="primary">
                    Search
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};


export default Header;
