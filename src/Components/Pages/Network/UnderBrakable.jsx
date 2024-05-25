import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { GrNotes } from "react-icons/gr";

const UnderBrakable = () => {
  return (
    <Box sx={{ padding: { xs: "1rem 4%", md: "2rem 5%" }}}>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "26px", md: "30px", lg: "40px" },
            fontWeight: 500,
            letterSpacing: { XS: 3, md: 2, lg: 2 },
            textAlign: "center",
          }}
        >
          Unbreakable Cloud Protection
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: 20,
          gridTemplateColumns: "repeat(2, 1fr)",
          mt: "1rem",
        }}
      >
        <Box >
          <Box>
            <Box display={"flex"} justifyContent={"center"} padding={"1.5rem"}>
              <GrNotes size={"45px"}/>
            </Box>
            <Typography  sx={{
                fontSize: { xs: "16px", md: "26px" },
                letterSpacing: 0,
                textAlign: "center",
              
              }}>Security rules</Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "16px" },
                letterSpacing: 0,
                textAlign: "center",  color:"#6F7F8F"
               
              }}
            >
              Monitor and filter incoming and outgoing traffic based on a set of
              predefined security rules and policies to protect your business
              from hackers.
            </Typography>
          </Box>
        </Box>
        <Box>
        <Box>
            <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
              <GrNotes size={"45px"}/>
            </Box>
            <Typography  sx={{
                fontSize: { xs: "16px", md: "26px" },
                letterSpacing: 0,
                textAlign: "center",
              
              }}>User-friendly cloud platform</Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "16px" },
                letterSpacing: 0,
                textAlign: "center",
                color:"#6F7F8F"
              }}
            >
              Monitor and filter incoming and outgoing traffic based on a set of
              predefined security rules and policies to protect your business
              from hackers.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UnderBrakable;
