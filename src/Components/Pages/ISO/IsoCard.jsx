import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import Efficiency from "../../../assets/Pages/ISO/Efficiency.svg";
import Custom from "../../../assets/Pages/ISO/Intergrity.svg";
import CardContent from "@mui/material/CardContent";

const IsoCard = () => {
  return (
    <Box sx={{ padding: "0rem 3rem", paddingBottom: "2.5rem" }}>
      <Typography sx={{ textAlign: "Center", fontSize: "35px" }}>
      Key Benefits of ISO
      </Typography>
      <Box
        padding={"2rem"}
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Card
          sx={{
            maxWidth: 340,

            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <CardContent>
            <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
            <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
          
            <img src={Efficiency} alt="access" width={50} height={50}/>
          </Box>
            </Box>
            <Typography sx={{fontSize:"20px",textAlign:"Center"} }>Enhanced Efficiency</Typography>
            <Typography  sx={{fontSize:"14px",textAlign:"Center",lineHeight:"23px",letterSpacing:1,mt:"0.4rem",color:"#677788"} }>
            Leverage ISO for faster, efficient deployments. 
Identical storage images eliminate repetitive 
installations, ensuring quick and consistent 
setup across devices or servers.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 340,

            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <CardContent>
            <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
            <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
           
            <img src={Custom} alt="access" width={50} height={50}/>
          </Box>
            </Box>
            <Typography sx={{fontSize:"20px",textAlign:"Center"} }>Data Integrity and Security</Typography>
            <Typography  sx={{fontSize:"14px",textAlign:"Center",lineHeight:"23px",letterSpacing:1,mt:"0.4rem",color:"#677788"} }>
            ISO preserves original media integrity, ensuring 
software security and authenticity. Protect 
against data corruption, providing a reliable 
deployment source for enhanced data security.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default IsoCard;
