import { makeStyles, createStyles } from "@material-ui/core";

export const Styles = makeStyles(() =>
  createStyles({
    root: {
      height: "100%",
      display: "flex",
      alignContent: "flex-end",
    },
    navContainer: {
      background: "#212121ff",
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
