import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

export const ImageBox = ({ classes, pokemon }) => {
  return (
    <>
      {!pokemon.name ? null : (
        <Grid container xs={12} lg={12} className={classes.main}>
          <Grid
            item
            xs={8}
            sm={6}
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
            xs={4}
            sm={5}
            md={5}
            lg={6}
            className={classes.cardContainer}
          >
            <Card className={classes.welcomeCard}>
              <CardContent>
                <br></br>
                <Typography>Ey! que alegría encontrarte nuevamente.</Typography>
                <div className={classes.welcome}>
                  <Typography>Soy</Typography>
                  <Typography className={classes.pokemonwlc}>
                    {pokemon.name.toUpperCase()}
                  </Typography>
                </div>
                <Typography>Y hoy seré tu asistente.</Typography>
                <br></br>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  );
};
