export const SetInfo = (pokemon) => {
  let id = "";
  let sprite = pokemon.sprites.versions["generation-vii"].icons.front_default;
  let name = pokemon.name;
  let image = pokemon.sprites["other"]["official-artwork"].front_default;

  if (pokemon.id.toString().length === 1) id = `00${pokemon.id}`;
  else if (pokemon.id.toString().length === 2) id = `0${pokemon.id}`;
  else id = pokemon.id;

  const response = {
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

  return response;
};
