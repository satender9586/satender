import { Box, Typography } from "@mui/material";
import React from "react";

import img1 from "../../../assets/Pages/Backup/Backup1.svg";
import Easy from "../../../assets/Pages/RemoteBackup/Easy.svg";

const Offsite = () => {
  return (
    <Box
      sx={{
        padding: "0rem 3rem",
        paddingBottom: "3.5rem",
        paddingTop: "3.5rem",
      }}
    >
      <Typography sx={{ fontSize: "45px", textAlign: "center" }}>
        Save on Offsite Servers
      </Typography>

      <Box
        sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(2, 1fr)" }}
        mt={"2rem"}
      >
        <Box gap={2}>
          <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
            <img src={img1} alt="access" width={50} height={50} />
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"31px"} padding={"0px"}>
              Data Backup Solution{" "}
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              Remote data backup solution helps businesses
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              like yours to safeguard valuable data by replicating{" "}
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              it to offsite servers.{" "}
            </Typography>
          </Box>
        </Box>
        <Box gap={2}>
          <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
            <img src={Easy} alt="access" width={50} height={50} />
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"31px"} padding={"0px"}>
              Easy Recovery
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              Ensure that critical data is protected and easily
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              recoverable in the event of data loss or disaster.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Offsite;
