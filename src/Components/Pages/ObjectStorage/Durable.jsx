import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { FaCloud } from "react-icons/fa";

// import Optimized from "../../../assets/Pages/Optimized.svg";
// import Backup from "../../../assets/Pages/backup.svg";
// import Performance from "../../../assets/Pages/Performance.svg";
// import Durability from "../../../assets/Pages/Durability.svg";




const Durable = () => {
  return (
    <Box sx={{ padding: { xs: "0rem 4%", md: "0rem  5% 3rem   5%" } }}>
    <Typography
      sx={{
        fontSize: { xs: "26px", md: "30px", lg: "40px" },
        fontWeight: 500,
        letterSpacing: { XS: 3, md: 2, lg: 2 },
        textAlign: "center",
        lineHeight: 1,
      }}
    >
      The Ultimate Cyber Defense to
    </Typography>
    <Typography
      sx={{
        fontSize: { xs: "26px", md: "30px", lg: "40px" },
        fontWeight: 500,
        letterSpacing: { XS: 3, md: 2, lg: 2 },
        textAlign: "center",
      }}
    >
      Secure Your Business
    </Typography>

    <Typography
      sx={{
        fontSize: { xs: "17px", md: "20px" },
        letterSpacing: 0,
        textAlign: "center",
        color: "#677788",
      }}
    >
      Protect Your Business with Advanced Threat Detection and Prevention to
      Stay Ahead of Cybercriminals
    </Typography>
    <Box
      sx={{
        display: "grid",
        gap: 10,
        gridTemplateColumns: "repeat(2, 1fr)",
        mt: "1.5rem",
        
      }}
    >
      {
          [1,2,3,4].map((data)=>(
              <Box>
        <Grid container >
          <Grid item xs={1} >
            <Box>
              <FaCloud size={40} />
            </Box>
          </Grid>
          <Grid item xs={11} paddingLeft={"1.5rem"}>
            <Typography sx={{
              fontSize: { xs: "16px", md: "20px" },
              letterSpacing: 1,
             
            
            }}>Advanced Network Protection</Typography>
            <Typography  sx={{
              fontSize: { xs: "14px", md: "14px" },
              letterSpacing: 1,
             
              color:"#6F7F8F"
            }}>
              Protect your network traffic without accessing the command line
              or learning complicated security protocols. Our User-friendly
              interface makes it easy to secure the network.
            </Typography>
          </Grid>
        </Grid>
      </Box>
          ))
      }
     
    </Box>
  </Box>
  );
};

export default Durable;
