import { makeStyles, createStyles } from "@material-ui/core";

export const Styles = makeStyles(() =>
  createStyles({
    root: {
      height: "100%",
    },
    layout: {
      width: "100vw",
      backgroundColor: "rgba(0,0,0,0)",
    },
    navigation: {
      width: "100vw",
      backgroundColor: "rgba(0,0,0,0)",
    },
  })
);
