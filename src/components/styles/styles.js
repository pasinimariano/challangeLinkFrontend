import { makeStyles, createStyles } from "@material-ui/core";

export const Styles = makeStyles(() =>
  createStyles({
    root: {
      height: "100vh",
    },
    layout: {
      width: "100vw",
      height: "90vh",
      backgroundColor: "rgba(0,0,0,0)",
    },
    navigation: {
      width: "100vw",
      height: "10vh",
    },
  })
);
