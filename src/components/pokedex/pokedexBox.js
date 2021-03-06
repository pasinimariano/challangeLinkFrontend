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
      <Grid item xs={12} sm={12} md={6}>
        <PokemonData selection={selection} classes={classes} />
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={classes.gridTable}>
        {pokemons.length === 0 ? (
          <h4>No se encontrĂ³ ningun pokemon</h4>
        ) : (
          <>
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
          </>
        )}
      </Grid>
    </Grid>
  );
};
