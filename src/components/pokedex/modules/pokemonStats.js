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
              <TableCells
                name={`HGT: ${selection.height}`}
                data={selection.height}
                max="100"
              />
              <TableCells
                name={`WGT: ${selection.weight}`}
                data={selection.weight}
                max="9999"
              />
              <TableCells
                name={`HP: ${selection.hp}`}
                data={selection.hp}
                max="255"
              />
              <TableCells
                name={`SPD: ${selection.spd}`}
                data={selection.spd}
                max="255"
              />
            </TableRow>
            <TableRow>
              <TableCells
                name={`ATK: ${selection.atk}`}
                data={selection.atk}
                max="255"
              />
              <TableCells
                name={`DEF: ${selection.def}`}
                data={selection.def}
                max="255"
              />
              <TableCells
                name={`S_ATK: ${selection.spc_atk}`}
                data={selection.spc_atk}
                max="255"
              />
              <TableCells
                name={`S_DEF: ${selection.spc_def}`}
                data={selection.spc_def}
                max="255"
              />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
