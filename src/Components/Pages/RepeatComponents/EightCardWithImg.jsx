import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const EightCardWithImg = () => {
  return (
    <Box sx={{ padding: "3rem 5%" }}>
      <Typography sx={{ textAlign: "Center", fontSize: "35px" }}>
        Harness the Power of IPv4
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "17px", md: "20px" },
          letterSpacing: 0,
          textAlign: "center",
          color: "#677788",
        }}
      >
        Elevate your network with IPv4's widespread compatibility, easy
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "17px", md: "20px" },
          letterSpacing: 0,
          textAlign: "center",
          color: "#677788",
        }}
      >
        implementation, robust security, and efficient routing.
      </Typography>
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
            lg: "repeat(4, 1fr)",
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => (
          <Card
            sx={{
              maxWidth: "100%",
              borderRadius: 3,
              padding: 1,
              boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <IoShieldCheckmarkOutline size={40} />
              </Box>
              <Typography
                sx={{ fontSize: "20px", textAlign: "Center", mt: "15px" }}
              >
                High Performance
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
                Automatically clone your application data three times to ensure
                high availability and data durability.
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default EightCardWithImg;
