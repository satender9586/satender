import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import img from "../../../../assets/Pages/DataBase/PostgreSQL/ecommerce.svg";
import img1 from "../../../../assets/Pages/DataBase/PostgreSQL/finance.svg";
import img2 from "../../../../assets/Pages/DataBase/PostgreSQL/social.svg";
import img3 from "../../../../assets/Pages/DataBase/PostgreSQL/health.svg";
import img4 from "../../../../assets/Pages/DataBase/PostgreSQL/comm.svg";
import img5 from "../../../../assets/Pages/DataBase/PostgreSQL/Scalable.svg";
import img6 from "../../../../assets/Pages/DataBase/PostgreSQL/platform.svg";
import img7 from "../../../../assets/Pages/DataBase/PostgreSQL/media.svg";


const PostSqlCard = () => {
  return (
    <Box bgcolor={"#F7FAFF"} sx={{ padding: "0rem 1rem", paddingBottom: "2.5rem", paddingTop: "2.5rem"}}>
      <Typography sx={{ textAlign: "Center", fontSize: "35px" }}>
      Ultimate Database Management System
      </Typography>
      <Typography
        sx={{ fontSize: "22px", textAlign: "center", color: "#677788" }}
      >
   Perfect choice for businesses across industries with its robust 
      </Typography>
      <Typography
        sx={{ fontSize: "22px", textAlign: "center", color: "#677788" }}
      >
   features and unmatched flexibility 
      </Typography>
      <Box
        padding={"2rem"}
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Card
          sx={{
              maxWidth: 220,
            borderRadius:7,

            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <CardContent>
            <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
            <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
          
            <img src={img} alt="access" width={50} height={50}/>
          </Box>
            </Box>
            <Typography sx={{fontSize:"20px",textAlign:"Center"} }>E-commerce 
</Typography>
<Typography sx={{fontSize:"20px",textAlign:"Center"} }>
Business</Typography>
            <Typography  sx={{fontSize:"14px",textAlign:"Center",lineHeight:"23px",letterSpacing:1,mt:"0.4rem",color:"#677788"} }>
            Reliable, scalable 
transactions for seamless 
online stores.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
              maxWidth: 220,
            borderRadius:7,

            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <CardContent>
            <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
            <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
           
            <img src={img1} alt="access" width={50} height={50}/>
          </Box>
            </Box>
            <Typography sx={{fontSize:"20px",textAlign:"Center"} }>Financial Data </Typography>
            <Typography sx={{fontSize:"20px",textAlign:"Center"} }>Integrity </Typography>
            <Typography  sx={{fontSize:"14px",textAlign:"Center",lineHeight:"23px",letterSpacing:1,mt:"0.4rem",color:"#677788"} }>
            Robust security and 
compliance for financial 
services.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
              maxWidth: 220,
            borderRadius:7,

            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <CardContent>
            <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
            <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
          
            <img src={img2} alt="access" width={50} height={50}/>
          </Box>
            </Box>
            <Typography sx={{fontSize:"20px",textAlign:"Center"} }>Social Network  
</Typography>
<Typography sx={{fontSize:"20px",textAlign:"Center"} }>
Optimization</Typography>
            <Typography  sx={{fontSize:"14px",textAlign:"Center",lineHeight:"23px",letterSpacing:1,mt:"0.4rem",color:"#677788"} }>
            Real-time interactions, 
optimized querying for 
social networks.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
              maxWidth: 220,
            borderRadius:7,

            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <CardContent>
            <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
            <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
          
            <img src={img3} alt="access" width={50} height={50}/>
          </Box>
            </Box>
            <Typography sx={{fontSize:"20px",textAlign:"Center"} }>Secure Healthcare 
</Typography>
<Typography sx={{fontSize:"20px",textAlign:"Center"} }>
Systems</Typography>
            <Typography  sx={{fontSize:"14px",textAlign:"Center",lineHeight:"23px",letterSpacing:1,mt:"0.4rem",color:"#677788"} }>
            Safeguard patient data, 
ensure compliance in 
healthcare.
            </Typography>
          </CardContent>
        </Card>
        
      </Box>
      <Box
        padding={"2rem"}
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Card
          sx={{
              maxWidth: 220,
            borderRadius:7,
           

            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <CardContent>
            <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
            <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
          
            <img src={img4} alt="access" width={50} height={50}/>
          </Box>
            </Box>
            <Typography sx={{fontSize:"20px",textAlign:"Center"} }>IoT Device 
</Typography>
<Typography sx={{fontSize:"20px",textAlign:"Center"} }>
Communication</Typography>
            <Typography  sx={{fontSize:"14px",textAlign:"Center",lineHeight:"23px",letterSpacing:1,mt:"0.4rem",color:"#677788"} }>
            Multi-tenant, extensible 
SaaS applications with 
PostgreSQL.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
              maxWidth: 220,
            borderRadius:7,

            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <CardContent>
            <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
            <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
           
            <img src={img5} alt="access" width={50} height={50}/>
          </Box>
            </Box>
            <Typography sx={{fontSize:"20px",textAlign:"Center"} }>Scalable SaaS  </Typography>
            <Typography sx={{fontSize:"20px",textAlign:"Center"} }>Solutions </Typography>
            <Typography  sx={{fontSize:"14px",textAlign:"Center",lineHeight:"23px",letterSpacing:1,mt:"0.4rem",color:"#677788"} }>
            Secure, high-volume data 
management for 
government agencies.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
              maxWidth: 220,
            borderRadius:7,

            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <CardContent>
            <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
            <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
          
            <img src={img6} alt="access" width={50} height={50}/>
          </Box>
            </Box>
            <Typography sx={{fontSize:"20px",textAlign:"Center"} }>IoT Analytics 
</Typography>
<Typography sx={{fontSize:"20px",textAlign:"Center"} }>
Platform</Typography>
            <Typography  sx={{fontSize:"14px",textAlign:"Center",lineHeight:"23px",letterSpacing:1,mt:"0.4rem",color:"#677788"} }>
            Real-time analytics, IoT 
data processing with 
PostgreSQL.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
              maxWidth: 220,
            borderRadius:7,

            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <CardContent>
            <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
            <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
          
            <img src={img7} alt="access" width={50} height={50}/>
          </Box>
            </Box>
            <Typography sx={{fontSize:"20px",textAlign:"Center"} }>Media Management 
</Typography>
<Typography sx={{fontSize:"20px",textAlign:"Center"} }>
Excellence</Typography>
            <Typography  sx={{fontSize:"14px",textAlign:"Center",lineHeight:"23px",letterSpacing:1,mt:"0.4rem",color:"#677788"} }>
            Scalable content storage, 
full-text search for 
media assets.
            </Typography>
          </CardContent>
        </Card>
        
      </Box>
    </Box>
  );
};

export default PostSqlCard;
