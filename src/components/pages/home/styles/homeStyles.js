import { makeStyles, createStyles, FormHelperText } from "@material-ui/core";
import HomeBg from "../../../../assets/home.png";

export const Styles = makeStyles(() =>
  createStyles({
    root: {
      width: "100vw",
      backgroundImage: `url(${HomeBg})`,
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
    titleMidle: {
      backgroundColor: "#f6f6f6ff",
      transform: "skew(-17deg, 0deg)",
      display: "flex",
      alignItems: "flex-end",
    },
    avatar: {
      marginLeft: "15%",
      marginRight: "5%",
    },
    titleRight: {
      backgroundColor: "#212121ff",
      transform: "skew(-17deg, 0deg)",
      display: "flex",
      alignItems: "flex-end",
    },
    name: {
      marginLeft: "10%",
      color: "#f6f6f6ff",
    },
    main: {
      height: "80vh",
      marginTop: "5px",
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "60%",
    },
    cardContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    welcomeCard: {
      background: "#f6f6f6ff",
    },
    welcome: {
      display: "flex",
      flexDirection: "columns",
    },
    pokemonwlc: {
      color: "#d9cab3ff",
      marginLeft: "4%",
      fontWeight: "bolder",
    },
    tableContainer: {
      backgroundColor: "rgba(0,0,0,0)",
      width: "80%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      marginTop: "20px",
      marginBottom: "20%",
    },
    statsContainer: {
      backgroundColor: "#d8d8d8ff",
      transform: "skew(-21deg, 0deg)",
    },
  })
);
