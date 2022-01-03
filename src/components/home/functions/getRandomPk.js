import axios from "axios";

export const getRandomPk = async () => {
  const number = (await Math.floor(Math.random() * 659)) + 1;
  const pokemon = axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`);

  return pokemon;
};
