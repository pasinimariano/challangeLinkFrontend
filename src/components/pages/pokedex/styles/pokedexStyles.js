import { makeStyles, createStyles } from "@material-ui/core";
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
    input: {
      color: "#f6f6f6ff",
    },
    seekerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#212121ff",
      transform: "skew(-21deg, 0deg)",
    },
    pokemonName: {
      transform: "skew(-21deg, 0deg)",
      backgroundColor: "#d8d8d8ff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    name: {
      color: "#212121ff",
      fontWeight: "bolder",
      fontSize: 25,
    },
    imageContainer: {
      width: "100%",
      height: "55%",
      display: "flex",
      justifyContent: "center",
      marginTop: "20px",
    },
    image: {
      height: "100%",
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
