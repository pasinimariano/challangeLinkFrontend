import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import { LinkNavigation } from "./modules/linkNavigation";
import { Styles } from "./styles/navbarStyles";

export const NavBar = () => {
  const navigate = useLocation();
  const [route, setRoute] = useState("/");
  const classes = Styles();

  useEffect(() => {
    setRoute(navigate.pathname);
  }, [navigate]);

  return (
    <Grid container className={classes.root}>
      <BottomNavigation className={classes.navContainer}>
        <LinkNavigation
          to="/"
          label="Home"
          icon={<HomeIcon />}
          route={route}
          classes={classes}
        />
        <LinkNavigation
          to="/pokedex"
          label="Pokedex"
          icon={<AppsIcon />}
          route={route}
          classes={classes}
        />
        <LinkNavigation
          to="/contact"
          label="Contact"
          icon={<EmojiPeopleIcon />}
          route={route}
          classes={classes}
        />
      </BottomNavigation>
    </Grid>
  );
};
