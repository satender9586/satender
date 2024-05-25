import { Box, Typography } from "@mui/material";
import React from "react";

import Data from "../../../assets/Pages/Snapshots/Data.svg";
import Risk from "../../../assets/Pages/Snapshots/Risk.svg";

const ProSnap = () => {
  return (
    <Box
      sx={{
        padding: "0rem 3rem",
        paddingBottom: "3.5rem",
        paddingTop: "3.5rem",
      }}
    >
      <Typography sx={{ fontSize: "45px", textAlign: "center" }}>
        Pro-Level Snapshot
      </Typography>

      <Box
        sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(2, 1fr)" }}
        mt={"2rem"}
      >
        <Box gap={2}>
          <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
            <img src={Data} alt="access" width={50} height={50} />
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"31px"} padding={"0px"}>
              Never Lose Your Data Again
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              Snapshots are your digital time machine! They
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              protect your work by saving your data at specific{" "}
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              moments, ready to restore in case of any mishaps.{" "}
            </Typography>
          </Box>
        </Box>
        <Box gap={2}>
          <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
            <img src={Risk} alt="access" width={50} height={50} />
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"31px"} padding={"0px"}>
              Risk-Free Innovation
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              Test new features or updates on a copy of your
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              real data and roll back if needed. Innovate without{" "}
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              a worry, we've got your safety net.{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProSnap;
