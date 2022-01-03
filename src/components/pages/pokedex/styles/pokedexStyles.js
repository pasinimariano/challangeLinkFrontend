import { makeStyles, createStyles, FormHelperText } from "@material-ui/core";
import PokedexBg from "../../../../assets/pokedex.png";

export const Styles = makeStyles(() =>
  createStyles({
    root: {
      backgroundImage: `url(${PokedexBg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    separator: {
      height: "7vh",
    },
    title: {
      height: "7vh",
    },
    pokemonName: {
      backgroundColor: "red",
      transform: "skew(-21deg, 0deg)",
    },
  })
);
