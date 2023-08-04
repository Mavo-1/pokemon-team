import { useState} from "react";
import Axios from "axios";
import {
  Container, Row, Col, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem,} from 'reactstrap';




const LOGO = 'https://p7.hiclipart.com/preview/391/852/862/pokemon-go-computer-icons-poke-ball-pokemon-go.jpg';



const Header = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen]= useState(false)
  const [pokemon, setPokemon]= useState({
        name: "", 
        species: "", 
        img: "", 
        hp: "", 
        attack: "",
        defense: "",
        type: "",
  })

  const searchPokemon = ()=> {
    Axios.get(`http://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response)=> {
      setPokemon({
        name: pokemonName, 
        species: response.data.species.name, 
        img: response.data.sprites.front_default, 
        hp: response.data.stats[0].base_stat, 
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        type: response.data.types[0].type.name,
      })
        setPokemonChosen(true)
    })
  };
  return (
     
    <>
    <Navbar fixed="top" color="danger" dark expand="xs" className="border-bottom border-grey" style={{ height: 80 }}>

      <Container>
        <Row  className="position-relative w-100 align-items-center">

          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">
                  <img src={LOGO} alt="Logo" className="img-fluid rounded-circle" style={{ width: 36 }} />
                </NavLink>
              </NavItem>

              <NavItem  className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Home</NavLink>
              </NavItem>

            </Nav>
          </Col>

          <Col className="d-flex justify-content-xs-start justify-content-lg-center">
            <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}>
              
            </NavbarBrand>
          </Col>

          <Col className=" d-none d-lg-flex justify-content-end">
            
              <Input onChange={(event)=> {
                setPokemonName(event.target.value)
              }} type="search" 
               className=" m-1" placeholder="Who's that Pokemon?!" />
              <Button onClick={searchPokemon} className="m-1" type="submit"  color="primary" >Search</Button>
            
          </Col>

        </Row>
      </Container>

    </Navbar>
 </>
  )
}


export default Header;
