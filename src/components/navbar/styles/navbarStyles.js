import { makeStyles, createStyles } from "@material-ui/core";

export const Styles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      alignContent: "flex-end",
      bottom: "0",
      position: "fixed",
    },
    navContainer: {
      background: "#212121ff",
      height: "100%",
      width: "100vw",
      display: "flex",
      justifyContent: "flex-start",
    },
    selected: {
      color: "#6d9886ff",
    },
    noSelected: {
      color: "#f6f6f6ff",
    },
  })
);
