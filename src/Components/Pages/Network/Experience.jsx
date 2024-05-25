import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import cartImg1 from "../../../assets/Pages/cartImg2.webp";
import { AiOutlineGlobal } from "react-icons/ai";

const Experience = () => {
  return (
    <Box sx={{ padding: { xs: "1rem 4%", md: "2rem 10%" } }}>
      <Typography
        sx={{
          fontSize: { xs: "26px", md: "30px", lg: "40px" },
          fontWeight: 500,
          letterSpacing: { XS: 3, md: 2, lg: 2 },
          textAlign: "center",
          lineHeight: 1,
          padding: "0px",
        }}
      >
        Experience Value-Added Features
      </Typography>

      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(2,1fr)"}
        gap={25}
        mt={"2rem"}
        paddingBottom={"1rem"}
      >
        {[1, 2].map((data) => (
          <Card key={data}  sx={{
            maxWidth: "100%",
            borderRadius: 3,
            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}>
            <Box display={"flex"} justifyContent={"center"} paddingTop={"2rem"}>
              <AiOutlineGlobal size={50} />
            </Box>
            <CardContent>
              <Typography
                sx={{
                  fontSize: { xs: "18px", md: "18px", lg: "18px" },
                  fontWeight: 500,
                  letterSpacing: { XS: 3, md: 2, lg: 2 },
                  textAlign: "center",
                  paddingX:"1rem"
                }}
              >
                Accessible Anywhere
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "18px", md: "18px", lg: "15px" },
                  fontWeight: 500,
                  letterSpacing: { XS: 3, md: 2, lg: 1 },
                  textAlign: "center",
                  mt: "0.2rem",
                  color: "#677788",
                }}
              >
                Access your data from anywhere, at any time. Whether you're
                working remotely, on the go, or in the office, you can rest
                assured that your data is always within reach.
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
