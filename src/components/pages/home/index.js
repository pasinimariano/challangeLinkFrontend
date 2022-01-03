import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPokemons } from "../../../redux/actions";
import { Grid } from "@material-ui/core";
import { TitleBox } from "../../home/titleBox";
import { ImageBox } from "../../home/imageBox";
import { getRandomPk } from "../../home/functions/getRandomPk";
import { SetInfo } from "../../home/functions/setPokemonInfo";
import { Styles } from "./styles/homeStyles";

const HomePage = ({ allPokemons, getPokemons }) => {
  const [randomPk, setRandomPk] = useState([]);
  const classes = Styles();

  useEffect(async () => {
    const pokemon = await getRandomPk();
    const pokemonData = SetInfo(pokemon.data);

    setRandomPk(pokemonData);

    allPokemons.length === 0 ? getPokemons() : null;
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

const mapStateToProps = (state) => {
  return {
    allPokemons: state.AllPokemons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: () => dispatch(getPokemons()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
