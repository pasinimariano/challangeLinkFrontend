import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export const SearchBar = ({ setSeeker, selection, classes }) => {
  return (
    <Grid container className={classes.title}>
      <Grid item xs={12} sm={6} className={classes.pokemonName}>
        {selection ? (
          <Typography className={classes.name}>
            {selection.name.toUpperCase()}
          </Typography>
        ) : (
          <Typography>Selecciona algún pokemon</Typography>
        )}
      </Grid>
      <Grid item xs={12} sm={6} className={classes.seekerContainer}>
        <TextField
          InputProps={{
            className: classes.input,
          }}
          className={classes.seeker}
          onChange={(e) => setSeeker(e.target.value)}
          label="Buscar pokemon"
          variant="filled"
        />
      </Grid>
    </Grid>
  );
};
