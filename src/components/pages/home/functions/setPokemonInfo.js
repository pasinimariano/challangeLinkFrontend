export const SetInfo = (pokemon) => {
  let id = "";
  let sprite = pokemon.sprites.versions["generation-vii"].icons.front_default;
  let name = pokemon.name;
  let image =
    pokemon.sprites.versions["generation-v"]["black-white"].animated
      .front_default;

  if (pokemon.id.toString().length === 1) id = `00${pokemon.id}`;
  else if (pokemon.id.toString().length === 2) id = `0${pokemon.id}`;
  else id = pokemon.id;

  return { id, sprite, name, image };
};
