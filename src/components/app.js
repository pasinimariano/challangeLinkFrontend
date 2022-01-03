import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { NavBar } from "./navbar";
import { RoutesWeb } from "./routesWeb";
import { Styles } from "./styles/mainStyles";
import "./styles/app.css";

export const App = () => {
  const classes = Styles();
  return (
    <Grid container className={classes.root}>
      <Paper className={classes.layout}>
        <RoutesWeb />
      </Paper>
      <Paper className={classes.navigation}>
        <NavBar />
      </Paper>
    </Grid>
  );
};
