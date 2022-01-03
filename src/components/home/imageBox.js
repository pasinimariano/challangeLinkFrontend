import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

export const ImageBox = ({ classes, pokemon }) => {
  return (
    <>
      {!pokemon.name ? (
        <CircularProgress />
      ) : (
        <Grid container className={classes.main}>
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
