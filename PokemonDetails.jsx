// // src/PokemonDetail.jsx
// import React from 'react';
// import { useParams } from 'react-router-dom';

// const PokemonDetails = () => {
//   const { id } = useParams(); // Get the Pokémon ID from the URL
  
//   return (
//     <div>
//       <h1>Pokémon Detail Page</h1>
//       <p>Pokémon ID: {id}</p>
      
      
//       {/* You can add more details here */}
//     </div>
//   );
// };

// export default PokemonDetails;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonDetails.css';
const PokemonDetails = () => {
  const { id } = useParams(); 
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

 
  const fetchPokemonData = async () => {
    setLoading(true); 
    setError(null); 

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setPokemonData(data); 
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      setError(error); 
    } finally {
      setLoading(false); 
    }
  };

//   useEffect(() => {
//     fetchPokemonData(); 
//   }, [id]); 
useEffect(() => {
    if (id) {  
      fetchPokemonData();
    }
  }, [id]);

  if (loading) {
    return <div className='loading'><h1>Loading...</h1></div>; 
  }

  if (error) {
    return <div className='error'><h1>{error.message}</h1></div>; 
  }

  return (
    <div className='new'>
      <h1>Pokémon Detail Page</h1>
      <h2>{pokemonData.name}</h2> 
      <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} />
      <p>Height: {pokemonData.height}</p>
      <p>Weight: {pokemonData.weight}</p>
      <p>Base Experience: {pokemonData.base_experience}</p>
      <p>Types: {pokemonData.types.map(type => type.type.name).join(', ')}</p>
      <p>Abilities: {pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</p>
      {/* You can add more details here */}
    </div>
  );
};

export default PokemonDetails;