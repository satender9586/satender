import { Box, CardActionArea, Grid, Typography } from "@mui/material";
import React from "react";
import pvc1Img from "../../../assets/Pages/pvc2.webp";
import pvc2Img from "../../../assets/Pages/pvc3.webp";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { MdOutlineCropFree } from "react-icons/md";
import { useState } from "react";

const ExperienceSecure = () => {
          const [value, setValue]=useState(0) 
    
  return (
    <Box sx={{ padding: "2rem 5%" }}>
      <Box>
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: 500,
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          Experience Secure Networking
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "17px", md: "20px" },
            letterSpacing: 0,
            textAlign: "center",
            color: "#677788",
            mt: "0.5rem",
          }}
        >
          Build complex network architectures, connect on-premises
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "17px", md: "20px" },
            letterSpacing: 0,
            textAlign: "center",
            color: "#677788",
          }}
        >
          networks to the cloud, and create secure, isolated environments
        </Typography>
      </Box>
      <Box padding={"2rem"} display={"flex"} gap={8}>
        <Box flex={3} sx={{display:"flex",flexDirection:"column",justifyContent:"center",gap:5}}>
         {
            [{name:"User-Friendly List View",desc:"Seamless VPC exploration"},{name:"Effortless Management",desc:"Simplified interface for easyVPC Management"}].map((data,index)=>(
                <Card key={data} sx={{ maxWidth: "100%",bgcolor: index===value ? "#D4D4D4": "",boxShadow:index===value&& "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} >
                <CardActionArea onClick={()=> setValue(index)}>
                  <CardContent>
                    <Grid container spacing={1}>
                       <Grid item xs={2}><MdOutlineCropFree size={"100%"}/></Grid>
                       <Grid item xs={10}>
                        <Typography sx={{fontSize:"18px",fontWeight:"600"}}>{data.name}</Typography>
                        <Typography sx={{fontSize:"18px",mt:"0.2rem"}}>{data.desc}</Typography>
                       </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
         }
        </Box>
        <Box flex={7}  height={"350px"}>
          <Box
            component={"img"}
            sx={{ width: "100%", height: "350px" }}
            src={value==0 ? pvc1Img: value==1? pvc2Img: pvc1Img}
            alt="pvc1"
            borderRadius={4}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ExperienceSecure;
