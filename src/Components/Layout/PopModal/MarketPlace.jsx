import React from "react";
import { Box, Typography } from "@mui/material";
import MaketImg from "../../../assets/Home/marketplace.png"
import Navbaar from "../Navbaar";
import TopBaarNavbaar from "../TopBaarNavbaar";
import Footer from "../Footer";

const MarketPlace = () => {
  return (
    <>
    <TopBaarNavbaar/>
       <Navbaar/>
        <Box
          padding={"7rem 5.5rem"}
          sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}
          bgcolor={"#F3FAFB"}
        >
          <Box>
            <Typography
              sx={{ fontSize: "40px", color: "#123978", fontWeight: "600" }}
            >
              Marketplace’s
            </Typography>
            <Typography
              sx={{ fontSize: "40px", color: "#123978", fontWeight: "600" }}
            >
              One-Click App
            </Typography>
            <Typography
              sx={{ fontSize: "40px", color: "#123978", fontWeight: "600" }}
            >
              for instant launch!
            </Typography>

            <Typography sx={{ fontSize: "19px", color: "#0066FF" }}>
              Utilize cloude Data Streamlined and Accelerated Solution{" "}
            </Typography>

            <Typography
              sx={{ fontSize: "19px", color: "#0066FF", mt: "0.5rem" }}
            >
              Deployments for Unmatched Flexibility and Cutting Edge Tools
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Box>
              <img src={MaketImg} width={"340px"} alt="market" />
            </Box>
          </Box>
        </Box>
    <Footer/>
    </>
  );
};

export default MarketPlace;
