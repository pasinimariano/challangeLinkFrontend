import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export const SearchBar = ({ seeker, setSeeker, classes }) => {
  return (
    <Grid container className={classes.title}>
      <Grid item lg={6} className={classes.pokemonName}>
        POKEMON NAME
      </Grid>
      <Grid item lg={6} className={classes.seekerContainer}>
        <TextField
          className={classes.seeker}
          onChange={(e) => setSeeker(e.target.value)}
          label="Buscar pokemon"
          variant="filled"
        />
      </Grid>
    </Grid>
  );
};
