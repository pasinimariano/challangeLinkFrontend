import React from "react";
import Grid from "@material-ui/core/Grid";

export const SearchBar = ({ classes }) => {
  return (
    <Grid container className={classes.title}>
      <Grid item lg={6} className={classes.pokemonName}>
        POKEMON NAME
      </Grid>
      <Grid item lg={6} className={classes.pokemonName}>
        SEARCHER
      </Grid>
    </Grid>
  );
};
