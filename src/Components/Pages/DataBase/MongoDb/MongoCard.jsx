import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
// import Efficiency from "../../../assets/Pages/ISO/Efficiency.svg";
// import Custom from "../../../assets/Pages/ISO/Intergrity.svg";
import CardContent from "@mui/material/CardContent";
import img from "../../../../assets/Pages/DataBase/Mongodb/default.svg";
import img1 from "../../../../assets/Pages/DataBase/Mongodb/Scale.svg";

const MongoCard = () => {
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
          
            <img src={img} alt="access" width={50} height={50}/>
          </Box>
            </Box>
            <Typography sx={{fontSize:"20px",textAlign:"Center"} }>Secure by Default</Typography>
            <Typography  sx={{fontSize:"14px",textAlign:"Center",lineHeight:"23px",letterSpacing:1,mt:"0.4rem",color:"#677788"} }>
            MongoDB's secure by default architecture 
ensures data's safety and confidentiality, 
giving you peace of mind and allowing you 
to focus on business goals without worrying 
about security breaches.
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
           
            <img src={img1} alt="access" width={50} height={50}/>
          </Box>
            </Box>
            <Typography sx={{fontSize:"20px",textAlign:"Center"} }>Scale with Confidence</Typography>
            <Typography  sx={{fontSize:"14px",textAlign:"Center",lineHeight:"23px",letterSpacing:1,mt:"0.4rem",color:"#677788"} }>
            Run and scale production apps with ease and 
confidence, handling data needs without issues. 
With automatic failover and high availability, be 
sure your applications will always be up and 
running, even during peak traffic.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default MongoCard;
