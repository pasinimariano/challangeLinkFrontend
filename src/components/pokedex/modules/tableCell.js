import React from "react";
import TableCell from "@material-ui/core/TableCell";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

export const TableCells = ({ name, data, max }) => {
  const value = (data * 100) / max;
  return (
    <TableCell style={{ width: "60px" }}>
      <Typography
        style={{
          position: "absolute",
          fontSize: 12,
        }}
      >
        {name}
      </Typography>
      <LinearProgress variant="determinate" value={value} />
    </TableCell>
  );
};
