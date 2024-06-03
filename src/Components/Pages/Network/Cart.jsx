import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import cartImg1 from "../../../assets/Pages/cartImg2.webp";
import cartImg2 from "../../../assets/Pages/bus.png";
import cartImg3 from "../../../assets/Pages/task.png";

const Cart = () => {
  const cardData = [
    {
      image:cartImg2,
      name:"Support Multiple Servers",
      desc:"Supports multiple servers in one group."
    },
    {
      image:cartImg3,
      name:"All Rules At Same Screen",
      desc:"Manage all firewall rules from a single screen."
    },
    {
      image:cartImg1,
      name:"Grows With You",
      desc:"Add rules or servers in group   or create new."
    }
  ]
  return (
    <Box sx={{ padding: { xs: "2rem 4%", md: "3rem  5%" } }} bgcolor={"#F7FAFF"}>
      <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"} gap={10}>
        {cardData.map((data) => (
          <Card key={data}  sx={{
            maxWidth: "100%",
            borderRadius: 3,
            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}>
            <Box display={"flex"} justifyContent={"center"} paddingTop={"2rem"}>
              <img height="170" width={200} src={data.image} alt="Paella dish" />
            </Box>
            <CardContent>
              <Typography
                sx={{
                  fontSize: { xs: "18px", md: "18px", lg: "18px" },
                  fontWeight: 500,
                  letterSpacing: { XS: 3, md: 2, lg: 2 },
                  textAlign: "center",
                }}
              >
               {data.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "18px", md: "18px", lg: "16px" },
                  fontWeight: 500,
                  letterSpacing: { XS: 3, md: 2, lg: 1 },
                  textAlign: "center",
                  mt:"0.2rem",
                  color:"#677788"
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

export default Cart;
