import { Box, Typography } from "@mui/material";
import React from "react";
import EffectImg from "../../../../assets/Pages/Solutionpage/Effect/Effect.png";

const Image = () => {
  return (
    <Box sx={{ padding: "2rem 5%" }}>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "22px", sm: "25px", md: "40px" },

            letterSpacing: 2,
            textAlign: "center",
          }}
        >
         Effortless Cloud Management
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "18px", md: "18px" },
            color: "#677788",

            textAlign: "center",
          }}
        >
         Focus on your business while we take care of your applications with our streamlined and managed platform
        </Typography>
       
      </Box>
      <Box padding={"2rem 0"}>
        <Box component={"img"} height={"450px"} width={"100%"} src={EffectImg} alt="Effect"/>
      </Box>
    </Box>
  );
};

export default Image;
