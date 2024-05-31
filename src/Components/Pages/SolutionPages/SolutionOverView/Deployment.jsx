import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { MdOutlineWebAsset } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";
import { LuDatabaseBackup } from "react-icons/lu";
import { SiOpencontainersinitiative } from "react-icons/si";
import { MdOutlineComputer } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr";
import { MdDeveloperMode } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";
import { SiAirtable } from "react-icons/si";
import { FaInternetExplorer } from "react-icons/fa";
import { MdOutlineBackup } from "react-icons/md";


const Deployment = () => {

    const data = [
        {name:"Website",icon:<MdOutlineWebAsset size={40}/>,desc:"Create the best website for you and your clients with lightning fast speed"},
        {name:"Mobile Apps",icon:<FaMobileAlt size={40}/>,desc:"Get more reachable by building a mobile application."},
        {name:"Hosted Services",icon:<GrHostMaintenance size={40}/>,desc:"Deploy your mission critical Saas, aas o DBaaa on high performing servers with ease of scalability."},
        {name:"Big Data",icon:<LuDatabaseBackup size={40}/>,desc:"Process any size or complex data for your application"},
        {name:"Containers",icon:<SiOpencontainersinitiative size={40}/>,desc:"Deploy faster,scalable and reliable cluster automatically with container orchestration"},
        {name:"E-Commerce",icon:<MdOutlineComputer size={40}/>,desc:"Deploy scalable and secure environment for your shoppers."},
        {name:"Analytics",icon:<GrAnalytics size={40}/>,desc:"Get insight of your data in a very simple and cost effective way."},
        {name:"Development & Testing",icon:<MdDeveloperMode size={40}/>,desc:"Test your application across multiple platforms in a simple way."},
        {name:"Databases",icon:<FaDatabase size={40}/>,desc:"Deploy your intense data and database applications on a powerful and scalable cloud platform."},
        {name:"Artificial Intelligence",icon:<SiAirtable size={40}/>,desc:"Learn, implement and improve services by getting insights of data."},
        {name:"Internet of Things",icon:<FaInternetExplorer size={40}/>,desc:"Deploy servers which help you to connect with your online device which collect, share data with you."},
        {name:"Backup & Archive",icon:<MdOutlineBackup size={40}/>,desc:"Protect your very critical data by taking very important thing which is backup, restore in case of failure."},
    
    ]

  return (
    <Box sx={{ padding: "3rem 5%" }}>
      <Typography
        sx={{
          textAlign: "Center",
          fontSize: { xs: "22px", sm: "25px", md: "40px" },
        }}
      >
        Your Gateway to Flexibility and Quick
      </Typography>
      <Typography
        sx={{
          textAlign: "Center",
          fontSize: { xs: "22px", sm: "25px", md: "40px" },
        }}
      >
        Solution Deployments
      </Typography>

      <Box
        sx={{
          mt: "2rem",
          display: "grid",
          columnGap: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
          rowGap: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
        }}
      >
        {data.map((data,index) => (
          <Card
          key={index}
            sx={{
              maxWidth: "100%",
              borderRadius: 3,
              padding: 1,
              boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {data.icon}
              </Box>
              <Typography
                sx={{ fontSize: "20px", textAlign: "Center", mt: "15px" }}
              >
                {data.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  textAlign: "Center",
                  letterSpacing: 1,
                  mt: "0.4rem",
                  color: "#677788",
                  lineHeight: 1.7,
                }}
              >
                {data.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Deployment;
