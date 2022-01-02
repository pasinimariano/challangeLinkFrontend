import React from "react";
import { Grid, Avatar, Typography } from "@material-ui/core";

export const TitleBox = ({ classes, pokemon }) => {
  return (
    <>
      {!pokemon.sprite ? (
        <h2> loading ...</h2>
      ) : (
        <Grid container xs={12} lg={12} className={classes.title}>
          <Grid item md={5} lg={5} />
          <Grid item xs={6} md={2} lg={2} className={classes.titleMidle}>
            <Avatar
              alt={`${pokemon.name} sprite`}
              src={`${pokemon.sprite}`}
              className={classes.avatar}
            />
            <Typography variant="h6">No. {pokemon.id}</Typography>
          </Grid>
          <Grid item xs={6} md={5} lg={5} className={classes.titleRight}>
            <Typography className={classes.name} variant="h6">
              {pokemon.name.toUpperCase()}
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
};
