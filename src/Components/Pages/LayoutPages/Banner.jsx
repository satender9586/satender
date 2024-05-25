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
            width: "60%",
            maxHeight: "520px",
            background: [
              "linear-gradient(90deg, hsla(0, 0%, 0%, 1) 59%, hsla(0, 0%, 100%, 1) 100%)",
              "-moz-linear-gradient(90deg, hsla(0, 0%, 0%, 1) 59%, hsla(0, 0%, 100%, 1) 100%)",
              "-webkit-linear-gradient(360deg, hsl(0deg 44.44% -45.1% / 101%) 83%, hsl(40deg 120% 106% / -30%) 101%)",
            ],
            filter:
              'progid: DXImageTransform.Microsoft.gradient(startColorstr="#000000", endColorstr="#FFFFFF", GradientType=1)',
          }}
        >
          <Box
            color={"white"}
            sx={{ position: "absolute", top: "18%", left: "2rem" }}
          >
            <Box>
              <Typography
                sx={{ fontSize: "40px", fontWeight: 600, letterSpacing: 2 }}
              >
                {data.title.first}
              </Typography>
              <Typography
                sx={{ fontSize: "40px", fontWeight: 600, letterSpacing: 2 }}
              >
                {data.title.second}
              </Typography>
              <Typography
                sx={{ fontSize: "40px", fontWeight: 600, letterSpacing: 2 }}
              >
                {data.title.third}
              </Typography>
              <Typography sx={{ fontSize: "17px", letterSpacing: 2 }}>
                {data.desc.first}
              </Typography>
              <Typography sx={{ fontSize: "17px", letterSpacing: 2 }}>
                {data.desc.second}
              </Typography>
              <Box sx={{ display: "flex", gap: 4, my: "1rem" }}>
                <Button
                  variant="contained"
                  sx={{ textTransform: "capitalize" }}
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  sx={{
                    textTransform: "capitalize",
                    color: "#545454",
                    bgcolor: "#ffff",
                  }}
                >
                  Contact Experts
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)">
          <Box></Box>

          <Box height={"520px"}>
            <img
              style={{
                height: "520px",
                width: "100%",
                maxWidth: "100%",
                maxHeight: "520px",
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
