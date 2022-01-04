import React from "react";
import Paper from "@material-ui/core/Paper";
import { TableContainer, Table, TableBody, TableRow } from "@material-ui/core";
import { TableCells } from "./tableCell";

export const PokemonStats = ({ selection, classes }) => {
  return (
    <Paper elevation={0}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            <TableRow>
              <TableCells data={`Height: ${selection.height}`} />
              <TableCells data={`Weight: ${selection.weight}`} />
              <TableCells data={`Hp: ${selection.hp}`} />
              <TableCells data={`Spd: ${selection.spd}`} />
            </TableRow>
            <TableRow>
              <TableCells data={`Atk: ${selection.atk}`} />
              <TableCells data={`Def: ${selection.def}`} />
              <TableCells data={`Spc-Atk: ${selection.spc_atk}`} />
              <TableCells data={`Spc-Def: ${selection.spc_def}`} />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
