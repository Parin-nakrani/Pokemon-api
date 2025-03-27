


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Pokemon } from './Pokemon'; // Your main Pokémon component
//import PokemonDetail from './PokemonDetail'; // Your detail component
import PokemonDetails from './PokemonDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pokemon />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
};

export default App;