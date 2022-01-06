import axios from "axios";
import { GET_POKEMONS, PAGINATION, SELECTION } from "./actionsCreators";

const getUrls = () => {
  const response = axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
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

const formatedData = (pokemons) => {
  const response = pokemons.map((pokemon) => {
    let id;
    if (pokemon.id.toString().length === 1) id = `00${pokemon.id}`;
    else if (pokemon.id.toString().length === 2) id = `0${pokemon.id}`;
    else id = pokemon.id;
    return {
      id: id,
      sprite: pokemon.sprites.versions["generation-vii"].icons.front_default,
      image: pokemon.sprites["other"]["official-artwork"].front_default,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      hp: pokemon.stats[0]["base_stat"],
      atk: pokemon.stats[1]["base_stat"],
      def: pokemon.stats[2]["base_stat"],
      spc_atk: pokemon.stats[3]["base_stat"],
      spc_def: pokemon.stats[4]["base_stat"],
      spd: pokemon.stats[5]["base_stat"],
    };
  });
  return response;
};

export const getPokemons = () => {
  return async (dispatch) => {
    const pokemon = await getData();

    dispatch({ type: GET_POKEMONS, payload: await pokemon });
  };
};

export const pagination = (pokemons, page, offset, seeker) => {
  let response;
  if (!seeker) {
    const pokemonPagination = pokemons.slice(page, offset);

    response = formatedData(pokemonPagination);
  } else {
    const pokemonSearched = pokemons.filter((pokemon) =>
      pokemon["name"].toLowerCase().includes(seeker.toLowerCase())
    );
    const pokemonPagination = pokemonSearched.slice(page, offset);

    response = formatedData(pokemonPagination);
  }

  return { type: PAGINATION, payload: response };
};

export const selectedPokemon = (pokemonSelected) => {
  if (pokemonSelected !== undefined) {
    return { type: SELECTION, payload: pokemonSelected };
  } else {
    return { type: SELECTION, payload: false };
  }
};
