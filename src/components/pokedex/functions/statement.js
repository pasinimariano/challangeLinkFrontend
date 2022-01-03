import { useState } from "react";

export const Statements = () => {
  const [indexFirstPokemon, setindexFirstPokemon] = useState(0);
  const [indexLastPokemon, setindexLastPokemon] = useState(50);
  const pokemonXpage = 50;

  const nextPage = (pokemons) => {
    if (indexLastPokemon < pokemons.length) {
      setindexFirstPokemon(indexFirstPokemon + pokemonXpage);
      setindexLastPokemon(indexLastPokemon + pokemonXpage);
    }
  };

  const prevPage = () => {
    if (indexFirstPokemon > 0) {
      setindexFirstPokemon(indexFirstPokemon - pokemonXpage);
      setindexLastPokemon(indexLastPokemon - pokemonXpage);
    }
  };

  return {
    indexFirstPokemon,
    setindexFirstPokemon,
    indexLastPokemon,
    setindexLastPokemon,
    nextPage,
    prevPage,
    pokemonXpage,
  };
};
