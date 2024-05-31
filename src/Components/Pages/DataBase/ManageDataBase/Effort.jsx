import { Box, Typography } from "@mui/material";
import React from "react";

const Effort = () => {
  return (
    <Box
      sx={{
        padding: "2rem 3rem 3rem 3rem",
      }}
    >
      <Typography sx={{ fontSize: "45px", textAlign: "center" }}>
        Effortlessly Manage Your Databases
      </Typography>

      <Box
        sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(2, 1fr)" }}
        mt={"1rem"}
      >
        <Box gap={2}>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"31px"} padding={"0px"}>
              Effortless Database Management
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              Let us take care of your databases so you can
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              focus on your business. Ensure automated backups,
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              high availability, and scalable performance to keep
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              your databases running smoothly.
            </Typography>
          </Box>
        </Box>
        <Box gap={2}>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"31px"} padding={"0px"}>
              Unleash Data Potential
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              Store and analyze customer data, power your
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              website or app, or run complex analytics. Experience
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              the latest technologies and expert support to achieve
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
              your goals.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Effort;
