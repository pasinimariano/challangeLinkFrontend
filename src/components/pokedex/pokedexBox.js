import React from "react";
import Grid from "@material-ui/core/Grid";
import { PokemonTable } from "./modules/pokemonTable";
import { Pagination } from "./modules/pagination";
import { PokemonData } from "./pokemonData";

export const PokedexBox = ({
  pokemons,
  allPokemons,
  nextPage,
  prevPage,
  classes,
  indexFirstPokemon,
  indexLastPokemon,
  selection,
  setSelection,
}) => {
  return (
    <Grid container>
      <Grid item lg={6}>
        <PokemonData selection={selection} classes={classes} />
      </Grid>
      <Grid item lg={6}>
        <PokemonTable
          pokemons={pokemons}
          classes={classes}
          setSelection={setSelection}
        />
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          classes={classes}
          indexFirstPokemon={indexFirstPokemon}
          indexLastPokemon={indexLastPokemon}
          allPokemons={allPokemons}
        />
      </Grid>
    </Grid>
  );
};
