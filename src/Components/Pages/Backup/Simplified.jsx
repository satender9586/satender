import { Box, Typography } from "@mui/material";
import React from "react";

import img from "../../../assets/Pages/Backup/Swift.svg";
import img1 from "../../../assets/Pages/Backup/Backup1.svg";

const Simplified = () => {
  return (
    <Box
      sx={{
        padding: "0rem 3rem",
        paddingBottom: "3.5rem",
        paddingTop: "3.5rem",
      }}
    >
      <Typography sx={{ fontSize: "45px", textAlign: "center" }}>
        Backup Simplified
      </Typography>

      <Box
        sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(2, 1fr)" }}
        mt={"2rem"}
      >
        <Box gap={2}>
          <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
            <img src={img} alt="access" width={50} height={50} />
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"31px"} padding={"0px"}>
              Swift Deployment
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              Protect data against unexpected data loss
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              due to system failures, hardware malfunctions,
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              or cyber-attacks.
            </Typography>
          </Box>
        </Box>
        <Box gap={2}>
          <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
            <img src={img1} alt="access" width={50} height={50} />
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"31px"} padding={"0px"}>
              Data backup
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              Data backup solutions ensure continuity of
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              operations, protect critical information, and
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              minimize data loss risk.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Simplified;
