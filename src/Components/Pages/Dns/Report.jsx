import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import reportImg from "../../../assets/Pages/report.webp"


const Report = () => {
  return (
   <Box  sx={{ padding: { xs: "1rem 4%", md: "2rem 5% 2rem 5%" } }} bgcolor={"#F7FAFF"}>
     <Box>
        <Typography
          sx={{
            fontSize: { xs: "26px", md: "30px", lg: "40px" },
            fontWeight: 500,
            letterSpacing: { XS: 3, md: 2, lg: 2 },
            textAlign: "center",
          }}
        >
          Experience Value-Added Features
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Box component={"img"} src={reportImg} width={"90%"} alt="imgs" ></Box>
      </Box>
   </Box>
  )
}

export default Report