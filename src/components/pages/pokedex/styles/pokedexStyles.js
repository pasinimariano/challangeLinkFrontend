import { makeStyles, createStyles, FormHelperText } from "@material-ui/core";
import PokedexBg from "../../../../assets/pokedex.png";

export const Styles = makeStyles(() =>
  createStyles({
    root: {
      height: "90vh",
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
    seekerContainer: {
      display: "flex",
      justifyContent: "center",
    },
    seeker: {
      transform: "skew(-21deg, 0deg)",
    },
    pokemonName: {
      transform: "skew(-21deg, 0deg)",
    },
    tableContainer: {
      backgroundColor: "rgba(0,0,0,0)",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      marginTop: "20px",
      marginBottom: "10px",
    },
    pokedexContainer: {
      maxHeight: 450,
      width: "80%",
      backgroundColor: "#d8d8d8ff",
      transform: "skew(-21deg, 0deg)",
    },
    gridCount: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    count: {
      fontWeight: "bolder",
    },
    pagination: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
  })
);
