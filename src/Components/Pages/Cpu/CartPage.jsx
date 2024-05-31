import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import img1 from "../../../assets/Pages/price1.webp";

const CartPage = () => {
  return (
    <>
      <Box sx={{ padding: "2rem 5%", bgcolor: "#F7FAFF" }}>
        <Box >
          <Typography
            sx={{
              fontSize: {xs:"22px",sm:"25px",md:"40px"},
              fontWeight: 500,
              letterSpacing: 2,
              textAlign: "center",
            }}
          >
            Maximize Computing Power
          </Typography>
        </Box>
        <Box
          padding={{xs:"0.5rem",md:"2rem"}}
          sx={{ display: "flex",gap:{xs:3,md:0}, justifyContent: {xs:"center",sm:"center",md:"space-evenly"},flexWrap:{xs:"wrap",md:"nowrap"} }}
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
              height={{xs:"100px",md:"200"}}
              image={img1}
              alt="Paella dish"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                letterSpacing={{xs:0,md:1.5}}
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
              height={{xs:"100px",md:"200"}}
              image={img1}
              alt="Paella dish"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                letterSpacing={{xs:0,md:1.5}}
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
    </>
  );
};

export default CartPage;
