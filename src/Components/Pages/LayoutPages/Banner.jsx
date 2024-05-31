import React from "react";
import bannerImg from "../../../assets/Pages/banner.webp";
import { Box, Button, Typography } from "@mui/material";

const Banner = ({ data }) => {
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: { XS: "100%", sm: "100%", md: "60%" },
            maxHeight: "520px",
            background: {
              xs: "none",
              md: [
                "linear-gradient(90deg, hsla(0, 0%, 0%, 1) 59%, hsla(0, 0%, 100%, 1) 100%)",
                "-moz-linear-gradient(90deg, hsla(0, 0%, 0%, 1) 59%, hsla(0, 0%, 100%, 1) 100%)",
                "-webkit-linear-gradient(360deg, hsl(0deg 44.44% -45.1% / 101%) 83%, hsl(40deg 120% 106% / -30%) 101%)",
              ],
            },
            filter:
              'progid: DXImageTransform.Microsoft.gradient(startColorstr="#000000", endColorstr="#FFFFFF", GradientType=1)',
          }}
        >
          <Box
           
            color={"white"}
            sx={{
              position: {xs:"relative",md:"absolute"},
              top: { xs: "0%", sm: "0rem", md: "8%",lg:"18%" },
              left: {xs:"0rem",sm:"0rem",md:"2rem"},
              padding:{xs:"3rem 1rem", sm:"3rem",md:"0rem"}
            }}
          >
            <Box width={"100%"}>
              <Typography
                sx={{
                  fontSize: { xs: "28px", sm: "35px", md: "40px", lg: "40px" },
                  fontWeight: 600,
                  letterSpacing: 2,
                }}
              >
                {data.title.first}
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "28px", sm: "35px", md: "40px", lg: "40px" }, fontWeight: 600, letterSpacing: 2 }}
              >
                {data.title.second}
              </Typography>
              <Typography
                sx={{  fontSize: { xs: "28px", sm: "35px", md: "40px", lg: "40px" },fontWeight: 600, letterSpacing: 2 }}
              >
                {data.title.third}
              </Typography>
              <Typography sx={{ fontSize: { xs: "16px",sm:"23px", md: "19px" }, letterSpacing: 2 }}>
                {data.desc.first}
              </Typography>
              <Typography sx={{ fontSize: { xs: "16px",sm:"23px", md: "19px" }, letterSpacing: 2 }}>
                {data.desc.second}
              </Typography>
              <Box sx={{ display: "flex", gap: {xs:2,md:4}, my: "1rem",flexWrap:{xs:"wrap",md:"nowrap"} }}>
                <Button
                  variant="contained"
                  sx={{ textTransform: "capitalize" ,width:{xs:"100%",sm:"auto",md:"auto"},padding:{xs:"0.5rem",md:"auto"},fontSize:{xs:"18px",md:"16px"}}}
                 
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  sx={{ bgcolor: "#ffff", color: "#545454",textTransform: "capitalize" ,width:{xs:"100%",sm:"auto",md:"auto"},padding:{xs:"0.5rem",md:"auto"},fontSize:{xs:"18px",md:"16px"}}}
                >
                  Contact Experts
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        >
          <Box></Box>

          <Box height={"520px"}>
            <img
              style={{
                height: "520px",
                width: "100%",
                maxWidth: "100%",
                maxHeight: "520px",
                backgroundPosition:"center",
                backgroundAttachment:"fixed"
              }}
              // style={{ objectFit: "cover" }}
              src={data.img}
              alt="banner"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
