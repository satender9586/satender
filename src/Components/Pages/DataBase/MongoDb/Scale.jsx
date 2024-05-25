import { Box, Typography } from "@mui/material";
import React from "react";



const Scale= () => {
  return (
    <Box
      sx={{
        padding: "0rem 3rem",
        paddingBottom: "3.5rem",
        paddingTop: "3.5rem",
      }}
    >
      <Typography sx={{ fontSize: "45px", textAlign: "center" }}>
      Scale Effortlessly with MongoDB
      </Typography>
      

      <Box
        sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(2, 1fr)" }}
        mt={"2rem"}
      >
        <Box gap={2}>
         
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"31px"} padding={"0px"}>
            Scale seamlessly
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            Simplify data management and scale 
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            seamlessly. Unlock new insights, streamline 
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            workflows, and achieve your goals
            </Typography>
          </Box>
          
         
        </Box>
        <Box gap={2}>
          
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"31px"} padding={"0px"}>
            Flexible data management
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            Flexible, lightning-fast, and perfect for e-
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            commerce, social media, and mobile app 
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            development.
            </Typography>
          </Box>
         
         
        </Box>
      </Box>
    </Box>
  );
};

export default Scale;
