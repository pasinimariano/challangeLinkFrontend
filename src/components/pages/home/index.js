import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { TitleBox } from "./modules/titleBox";
import { ImageBox } from "./modules/imageBox";
import { getRandomPk } from "./functions/getRandomPk";
import { SetInfo } from "./functions/setPokemonInfo";
import { Styles } from "./styles/homeStyles";

export const HomePage = () => {
  const [randomPk, setRandomPk] = useState([]);
  const classes = Styles();

  useEffect(async () => {
    const pokemon = await getRandomPk();
    const pokemonData = SetInfo(pokemon.data);

    setRandomPk(pokemonData);
  }, []);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item className={classes.separator} xs={12} lg={12} />
        <TitleBox classes={classes} pokemon={randomPk} />
        <ImageBox classes={classes} pokemon={randomPk} />
      </Grid>
    </div>
  );
};
