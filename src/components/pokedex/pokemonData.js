import React from "react";
import Avatar from "@material-ui/core/Avatar";

export const PokemonData = ({ selection, classes }) => {
  return <>{!selection ? <h2>Aca</h2> : <h2>{selection.name}</h2>}</>;
};
