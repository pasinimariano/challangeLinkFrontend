import { makeStyles, createStyles } from "@material-ui/core";

export const Styles = makeStyles(() =>
  createStyles({
    root: {
      height: "98vh",
    },
    layout: {
      width: "100vw",
      height: "80vh",
      backgroundColor: "rgba(0,0,0,0)",
    },
    navigation: {
      width: "100vw",
      height: "16vh",
      backgroundColor: "rgba(0,0,0,0)",
    },
  })
);
