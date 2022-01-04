import React from "react";
import Grid from "@material-ui/core/Grid";
import { PokemonTable } from "./modules/pokemonTable";
import { Pagination } from "./modules/pagination";

export const PokedexBox = ({
  pokemons,
  allPokemons,
  nextPage,
  prevPage,
  classes,
  indexFirstPokemon,
  indexLastPokemon,
}) => {
  return (
    <Grid container>
      <Grid item lg={6}>
        HOLA
      </Grid>
      <Grid item lg={6}>
        <PokemonTable pokemons={pokemons} classes={classes} />
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
