import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import cartImg1 from "../../../assets/Pages/cartImg2.webp";

const Cart = () => {
  return (
    <Box sx={{ padding: { xs: "1rem 4%", md: "3rem  5%" } }} bgcolor={"#F7FAFF"}>
      <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"} gap={10}>
        {[1, 2, 3].map((data) => (
          <Card key={data}  sx={{
            maxWidth: "100%",
            borderRadius: 3,
            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}>
            <Box display={"flex"} justifyContent={"center"} paddingTop={"2rem"}>
              <img height="170" width={200} src={cartImg1} alt="Paella dish" />
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
                Secure Your Business
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
                Supports multiple servers in one group.
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Cart;
