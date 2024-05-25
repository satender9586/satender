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
        <Box>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 500,
              letterSpacing: 2,
              textAlign: "center",
            }}
          >
            Maximize Computing Power
          </Typography>
        </Box>
        <Box
          padding={"2rem"}
          sx={{ display: "flex", justifyContent: "space-evenly" }}
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
                letterSpacing={1.5}
                lineHeight={2.3}
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
                letterSpacing={1.5}
                lineHeight={2.3}
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
