import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@material-ui/core";
import Pokeball from "../../assets/Pokeball.png";

export const PokedexBox = ({
  pokemons,
  pokemonXpage,
  allPokemons,
  nextPage,
  classes,
}) => {
  return (
    <Grid container>
      <Grid item lg={6} style={{ background: "red" }}>
        HOLA
      </Grid>
      <Grid item lg={6} style={{ background: "purple" }}>
        <Paper>
          <TableContainer style={{ maxHeight: 450 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableBody>
                {pokemons.map((pokemon) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={pokemon.id}
                    >
                      <TableCell>
                        <Avatar
                          alt={`${pokemon.name} sprite`}
                          src={`${pokemon.sprite}`}
                          className={classes.avatar}
                        />
                      </TableCell>
                      <TableCell>No.{pokemon.id}</TableCell>
                      <TableCell>{pokemon.name.toUpperCase()}</TableCell>
                      <TableCell>
                        <Avatar
                          alt="pokeball"
                          src={Pokeball}
                          className={classes.avatar}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};
