import React from "react";
import { PokemonStats } from "./modules/pokemonStats";
import Pikachu from "../../assets/pikachu.png";

export const PokemonData = ({ selection, classes }) => {
  return (
    <div className={classes.dataContainer}>
      {!selection ? (
        <div className={classes.pikachuContainer}>
          <img
            alt={"Pikachu sprite"}
            src={Pikachu}
            className={classes.pikachu}
          />
        </div>
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
