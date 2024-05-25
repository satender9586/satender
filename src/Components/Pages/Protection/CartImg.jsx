import React from 'react'
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import img1 from "../../../assets/Pages/price1.webp";

const CartImg = () => {
  return (
    <Box sx={{ padding: {xs:"1rem 4%",md:"2rem 5%"}, }}>
    <Box>
      <Typography
        sx={{
          fontSize: {xs:"26px",md:"30px",lg:"40px"},
          fontWeight: 500,
          letterSpacing: {XS:3,md:2,lg:2},
          textAlign: "center",
        }}
      >
        Defend Your Reputation
      </Typography>
    </Box>
    <Box
      padding={{xs:"1rem",md:"2rem"}}
      sx={{ display: "flex", justifyContent: "space-evenly",flexWrap:{xs:"wrap",md:"nowrap"} ,gap:3}}
    >
      <Card
        sx={{
          maxWidth: 400,
          borderRadius: 3,
          boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={img1}
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            letterSpacing={{xs:1,md:1.5}}
            lineHeight={{xs:1.5,md:2.3}}
          >
            Dedicated CPU provides exclusive access to CPU resources for a
            single user or application. With no resource sharing, ensure
            reliable and consistent performance for CPU-intensive tasks.
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          maxWidth: 400,
          borderRadius: 3,
          boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={img1}
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            letterSpacing={{xs:1,md:1.5}}
            lineHeight={{xs:1.5,md:2.3}}
          >
            Dedicated CPU provides exclusive access to CPU resources for a
            single user or application. With no resource sharing, ensure
            reliable and consistent performance for CPU-intensive tasks.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  </Box>
  )
}

export default CartImg