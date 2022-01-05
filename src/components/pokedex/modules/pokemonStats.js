import React from "react";
import Paper from "@material-ui/core/Paper";
import { TableContainer, Table, TableBody, TableRow } from "@material-ui/core";
import { TableCells } from "./tableCell";

export const PokemonStats = ({ selection, classes }) => {
  return (
    <Paper className={classes.tableContainer} elevation={0}>
      <TableContainer className={classes.statsContainer}>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            <TableRow>
              <TableCells name="HGT" data={selection.height} max="150" />
              <TableCells name="WGT" data={selection.weight} max="9999" />
              <TableCells name="HP" data={selection.hp} max="255" />
              <TableCells name="SPD" data={selection.spd} max="255" />
            </TableRow>
            <TableRow>
              <TableCells name="ATK" data={selection.atk} max="255" />
              <TableCells name="DEF" data={selection.def} max="255" />
              <TableCells name="SPC_ATK" data={selection.spc_atk} max="255" />
              <TableCells name="SPC_DEF" data={selection.spc_def} max="255" />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
