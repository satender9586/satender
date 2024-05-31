import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import { SiCodestream } from "react-icons/si";
import { IoPeople } from "react-icons/io5";

const Advanceuser = () => {
    const data = [
        {name:"Cloud Transfer",icon:<BsFillCloudArrowDownFill size={40}/>,desc:"Our user management solutions make it  easy to transfer your cloud server to another account with just a few clicks, providing you with the flexibility and control you need."},
        {name:"Role Distribution",icon:<SiCodestream size={40}/>,desc:"Assign different roles and permissions to your subusers to ensure secure and efficient management of your cloud resources. Our role distribution feature allows you to easily manage access and ensure that each team member has the appropriate level of permissions."},
        {name:"Multiple Subusers",icon:<IoPeople size={40}/>,desc:"With our user management solutions, you can add multiple subusers to your account and assign them different roles and permissions. This makes it easy to manage your cloud resources and collaborate with your team, while ensuring that your data is secure and protected."},
    ]

    
  return (
    <Box sx={{ padding: "0 5% 2rem 5%" }}>
      <Box>
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: 500,
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          Advanced user-management for
        </Typography>
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: 500,
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          seamless cloud resource control.
        </Typography>
      </Box>
      <Box
        sx={{
          mt: "2rem",
          display: "grid",
          columnGap: {xs:1,sm:2,md:3,lg:4,xl:5},
          rowGap:{xs:3,sm:3,md:3,lg:4,xl:5},
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          
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
                sx={{ fontSize: "20px", textAlign: "Center", mt: "15px",fontWeight:600 }}
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

export default Advanceuser;
