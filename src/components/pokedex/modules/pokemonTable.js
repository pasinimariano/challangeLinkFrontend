import React from "react";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import Pokeball from "../../../assets/Pokeball.png";

export const PokemonTable = ({ pokemons, setSelection, classes }) => {
  return (
    <Paper className={classes.tableContainer} elevation={0}>
      <TableContainer className={classes.pokedexContainer}>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            {pokemons.map((pokemon) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={pokemon.id}
                  onClick={() => setSelection(pokemon)}
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
  );
};
