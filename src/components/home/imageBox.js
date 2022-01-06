import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { PokemonStats } from "../pokedex/modules/pokemonStats";

export const ImageBox = ({ classes, pokemon }) => {
  return (
    <>
      {!pokemon.name ? (
        <Grid container className={classes.main}>
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container className={classes.main}>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            lg={6}
            className={classes.imageContainer}
          >
            <img
              alt={`${pokemon.name} sprite`}
              src={`${pokemon.image}`}
              className={classes.image}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={6}
            className={classes.cardContainer}
          >
            <PokemonStats selection={pokemon} classes={classes} />
          </Grid>
        </Grid>
      )}
    </>
  );
};
