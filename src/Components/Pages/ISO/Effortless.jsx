import { Box, Typography } from "@mui/material";
import React from "react";

import Data from "../../../assets/Pages/ISO/Swift.svg";
import Risk from "../../../assets/Pages/ISO/Consistent.svg";

const Effortless = () => {
  return (
    <Box
      sx={{
        padding: "0rem 3rem",
        paddingBottom: "3.5rem",
        paddingTop: "2rem",
      }}
    >
      <Typography sx={{ fontSize: "45px", textAlign: "center" }}>
      Effortless OS Deployment
      </Typography>
      <Typography sx={{ fontSize: "24px", textAlign: "center", color:"#677788" }}>
      Effortless OS Deployment
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
            Swift Deployment
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            Easily deploy operating systems across devices or 
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            servers with identical ISO storage images.
            </Typography>
          </Box>
         
        </Box>
        <Box gap={2}>
          <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
            <img src={Risk} alt="access" width={50} height={50} />
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"31px"} padding={"0px"}>
            Consistent Environments
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            Ensure standardized software and configurations 
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            for improved compatibility and efficiency.
            </Typography>
          </Box>
         
        </Box>
      </Box>
    </Box>
  );
};

export default Effortless;
