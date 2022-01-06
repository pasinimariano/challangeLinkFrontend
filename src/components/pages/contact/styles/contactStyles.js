import { makeStyles, createStyles } from "@material-ui/core";
import Cv from "../../../../assets/MarianoPasiniCv.png";

export const Styles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      width: "98vw",
      height: "200vh",
      backgroundImage: `url(${Cv})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
      marginTop: "2%",
      marginBottom: "7%",
    },
  })
);
