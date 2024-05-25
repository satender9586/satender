import { Box, Typography } from "@mui/material";
import React from "react";
import Img3 from "../../../assets/Pages/KurbernImg3.webp";

const Deploy = () => {
  return (
    <Box sx={{ padding: "0rem 3rem", paddingBottom: "2.5rem" }}>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Box flex={3} sx={{display:"flex"}} justifyContent={"center"} alignItems={"center"}>
          <Box>
            <Typography sx={{fontSize:"24px",textAlign:"Center"}}>Deploy in Seconds</Typography>
            <Typography sx={{fontSize:"14px",color:"#6F7F8F",textAlign:"center",lineHeight:"24px",letterSpacing:1,mt:"7px"}}>
              No more waiting, no more unnecessary delays. With easy to use and
              simple cloud platform, deploy your applications effortlessly in
              seconds.
            </Typography>
          </Box>
        </Box>
        <Box flex={7}>
          <img
            src={Img3}
            alt="kurbonatesimg3"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Deploy;
