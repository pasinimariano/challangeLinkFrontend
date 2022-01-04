import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { getPokemons, pagination } from "../../../redux/actions";
import { Statements } from "../../pokedex/functions/statement";
import { SearchBar } from "../../pokedex/searchBar";
import { PokedexBox } from "../../pokedex/pokedexBox";
import { Styles } from "./styles/pokedexStyles";

const PokedexPage = ({ allPokemons, PaginationPokemon, pagination }) => {
  const classes = Styles();

  const {
    indexFirstPokemon,
    indexLastPokemon,
    nextPage,
    prevPage,
    pokemonXpage,
    seeker,
    setSeeker,
  } = Statements();

  useEffect(() => {
    pagination(allPokemons, indexFirstPokemon, indexLastPokemon, seeker);
  }, [indexFirstPokemon, indexLastPokemon, seeker]);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item className={classes.separator} xs={12} lg={12} />
        <SearchBar seeker={seeker} setSeeker={setSeeker} classes={classes} />
        <PokedexBox
          pokemons={PaginationPokemon}
          classes={classes}
          pokemonXpage={pokemonXpage}
          allPokemons={allPokemons}
          nextPage={() => nextPage(allPokemons)}
          prevPage={prevPage}
          indexFirstPokemon={indexFirstPokemon}
          indexLastPokemon={indexLastPokemon}
        />
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allPokemons: state.AllPokemons,
    PaginationPokemon: state.PaginationPokemon,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: () => dispatch(getPokemons()),
    pagination: (pokemons, page, offset, seeker) =>
      dispatch(pagination(pokemons, page, offset, seeker)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokedexPage);
