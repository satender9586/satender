import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import Automated from "../../../assets/Pages/Backup/Automated.svg";
import Disaster from "../../../assets/Pages/Backup/Disaster.svg";
import CardContent from "@mui/material/CardContent";

const BackupCard = () => {
  return (
    <Box sx={{ padding: "0rem 3rem", paddingBottom: "2.5rem" }}>
      <Typography sx={{ textAlign: "Center", fontSize: "35px" }}>
      Experience Value-Added Features
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
          
            <img src={Automated} alt="access" width={50} height={50}/>
          </Box>
            </Box>
            <Typography sx={{fontSize:"20px",textAlign:"Center"} }>Automated Backup</Typography>
            <Typography  sx={{fontSize:"14px",textAlign:"Center",lineHeight:"23px",letterSpacing:1,mt:"0.4rem",color:"#677788"} }>
            Say goodbye to manual backup hassles! With 
Automated Backup feature, let the system 
safeguard your data. Focus on your work, we've 
got your backup!
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
           
            <img src={Disaster} alt="access" width={50} height={50}/>
          </Box>
            </Box>
            <Typography sx={{fontSize:"20px",textAlign:"Center"} }>Disaster Recovery</Typography>
            <Typography  sx={{fontSize:"14px",textAlign:"Center",lineHeight:"23px",letterSpacing:1,mt:"0.4rem",color:"#677788"} }>
            Disasters can happen at any time. DR 
Backup ensures your critical data is safe 
and easy to recover, even after an earthquake 
or flood.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default BackupCard;
