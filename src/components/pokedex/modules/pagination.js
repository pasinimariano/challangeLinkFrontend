import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";

export const Pagination = ({
  nextPage,
  prevPage,
  allPokemons,
  indexFirstPokemon,
  indexLastPokemon,
  classes,
}) => {
  return (
    <Grid container>
      <Grid item xs={6} sm={4} className={classes.gridCount}>
        <Typography className={classes.count}>
          {indexFirstPokemon + 1} - {indexLastPokemon + 1} of{" "}
          {allPokemons.length}
        </Typography>
      </Grid>
      <Grid item xs={4} sm={4} className={classes.pagination}>
        <Button onClick={prevPage} variant="outlined">
          <ArrowBackIosIcon />
        </Button>
        <Button onClick={nextPage} variant="outlined">
          <ArrowForwardIos />
        </Button>
      </Grid>
    </Grid>
  );
};
