import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

const Tables = ({ data }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }}>
          <TableBody>
            {data?.map((row, index) => (
              <TableRow key={index} sx={{ borderTop: "none" }}>
                <TableCell component="th" sx={{ paddingY: "8px" }} scope="row">
                  <img width={50} src={row.img} />
                </TableCell>
                <TableCell
                  style={{ width: 160 }}
                  sx={{ paddingY: "8px" }}
                  align="right"
                ></TableCell>
                <TableCell
                  style={{ width: 160 }}
                  sx={{ paddingY: "8px" }}
                  align="right"
                >
                  <Box fontWeight={"600"} color={row?.color} fontSize={"20px"}>
                    {row.price}
                  </Box>
                  <Box color={"#6F7F8F"}> {row.name}</Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Tables;
