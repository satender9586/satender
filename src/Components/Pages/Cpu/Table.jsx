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
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: {xs:"100%",md:500}}}>
          <TableBody >
            {data?.map((row, index) => (
              <TableRow key={index} sx={{ borderTop: "none" }}>
                <TableCell component="th" sx={{ paddingY: "8px" }} scope="row">
                  <Box component={"img"} width={{xs:30,sm:30,md:50}} src={row.img} />
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
                  <Box fontWeight={"600"} color={row?.color} fontSize={{xs:"15px",sm:"16px",md:"20px"}}>
                    {row.price}
                  </Box>
                  <Box color={"#6F7F8F"} display={{xs:"none",md:"block"}}> {row.name}</Box>
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
