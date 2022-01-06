import { makeStyles, createStyles } from "@material-ui/core";
import PokedexBg from "../../../../assets/pokedex.png";

export const Styles = makeStyles(() =>
  createStyles({
    root: {
      width: "100vw",
      backgroundImage: `url(${PokedexBg})`,
      backgroundRepeat: "repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
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
    pikachuContainer: {
      height: "75vh",
      display: "flex",
      alignItems: "center",
    },
    pikachu: {
      height: "50%",
    },
    gridTable: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      height: "55%",
    },
    tableContainer: {
      backgroundColor: "rgba(0,0,0,0)",
      width: "70%",
      display: "flex",
      alignItems: "center",
      marginTop: "20px",
      marginBottom: "10px",
    },
    pokedexContainer: {
      maxHeight: 400,
      width: "100%",
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
    dataContainer: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: "15px",
    },
    statsContainer: {
      backgroundColor: "#d8d8d8ff",
      transform: "skew(-21deg, 0deg)",
      width: "98vh",
      marginLeft: "30%",
    },
  })
);
