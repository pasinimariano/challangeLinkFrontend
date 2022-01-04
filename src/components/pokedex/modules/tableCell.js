import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";

export const TableCells = ({ data }) => {
  return (
    <TableCell>
      <Typography> {data} </Typography>
    </TableCell>
  );
};
