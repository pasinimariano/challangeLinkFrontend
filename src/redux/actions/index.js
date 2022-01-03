import axios from "axios";
import { GET_POKEMONS, PAGINATION } from "./actionsCreators";

const getUrls = () => {
  const response = axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=809")
    .then((json) => json.data.results);

  return response;
};

const getData = async () => {
  const pokemonUrls = await getUrls();
  const pokemonData = pokemonUrls.map((pokemon) =>
    axios.get(pokemon.url).then(async (json) => await json.data)
  );

  return Promise.all(pokemonData);
};

export const getPokemons = () => {
  return async (dispatch) => {
    const pokemon = await getData();

    dispatch({ type: GET_POKEMONS, payload: await pokemon });
  };
};

export const pagination = (pokemons, page, offset) => {
  const pokemonPagination = pokemons.slice(page, offset);

  const formatedData = pokemonPagination.map((pokemon) => {
    let id;
    if (pokemon.id.toString().length === 1) id = `00${pokemon.id}`;
    else if (pokemon.id.toString().length === 2) id = `0${pokemon.id}`;
    else id = pokemon.id;
    return {
      id: id,
      sprite: pokemon.sprites.versions["generation-vii"].icons.front_default,
      image: pokemon.sprites["other"]["official-artwork"].front_default,
      name: pokemon.name,
    };
  });

  return { type: PAGINATION, payload: formatedData };
};
