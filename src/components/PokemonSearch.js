import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import Header from './Header';
import Post from './Post';
import SideCard from './SideCard';

const PokemonSearch = () => {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonChosen, setPokemonChosen]= useState(false);
    const [pokemon, setPokemon] = useState({
      name: "",
      species: "",
      img: "",
      hp: "",
      attack: "",
      defense: "",
      type: "",
    });
  
    
    const handleSearch = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
          .then((response) => {
            console.log("API Response Data:", response.data);  
            
            const pokemonData = {
              name: pokemonName,
              species: response.data.species.name,
              img: response.data.sprites.front_default,
              hp: response.data.stats[0].base_stat,
              attack: response.data.stats[1].base_stat,
              defense: response.data.stats[2].base_stat,
              type: response.data.types[0].type.name,
            };
            console.log("Extracted Pokemon Data:", pokemonData);
            setPokemon(pokemonData);
            setPokemonChosen(true);
          })
          .catch((error) => {
            console.error("Error fetching Pokemon data:", error);
            setPokemon(null);
            setPokemonChosen(false);
          });
      };
    

      return (
        <div>
          <Header onSearch={handleSearch} />
          {/* Pass pokemonChosen and pokemon to other components */}
          <SideCard pokemon={pokemon} pokemonChosen={pokemonChosen} />
          <Post pokemon={pokemon} />
        </div>
      );
    };

export default PokemonSearch;