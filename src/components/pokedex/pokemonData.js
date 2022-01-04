import React from "react";
import Grid from "@material-ui/core/Grid";
import { PokemonStats } from "./modules/pokemonStats";

export const PokemonData = ({ selection, classes }) => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {!selection ? (
        <h2>Aca</h2>
      ) : (
        <div>
          <div className={classes.imageContainer}>
            <img
              alt={`${selection.name} sprite`}
              src={`${selection.image}`}
              className={classes.image}
            />
          </div>
          <div>
            <PokemonStats selection={selection} classes={classes} />
          </div>
        </div>
      )}
    </div>
  );
};
