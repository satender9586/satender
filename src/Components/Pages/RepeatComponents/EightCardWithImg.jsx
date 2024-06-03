import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const EightCardWithImg = ({eightcartWithImgdata}) => {
  return (
    <Box sx={{ padding: "3rem 5%" }}>
      <Typography sx={{ textAlign: "Center", fontSize: "35px" }}>
        {eightcartWithImgdata[0]?.title1}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "17px", md: "20px" },
          letterSpacing: 0,
          textAlign: "center",
          color: "#677788",
        }}
      >
         {eightcartWithImgdata[0]?.desc1}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "17px", md: "20px" },
          letterSpacing: 0,
          textAlign: "center",
          color: "#677788",
        }}
      >
         {eightcartWithImgdata[0]?.desc2}
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
        {eightcartWithImgdata.slice(1)?.map((data,index) => (
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
              <Box sx={{ display: "flex", justifyContent: "center",mt:"1.5rem" }}>
                {data.image}
              </Box>
              
              <Typography
                sx={{
                  fontSize: "14px",
                  textAlign: "Center",
                  letterSpacing: 1,
                  mt: "0.4rem",
                  color: "#677788",
                  lineHeight: 1.7,
                  fontWeight:600,
                  padding:"1.9rem 0"
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

export default EightCardWithImg;
