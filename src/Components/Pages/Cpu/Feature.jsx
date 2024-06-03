import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import monitor from "../../../assets/Pages/monitor.png";
import CardContent from "@mui/material/CardContent";

const Feature = (featuredata) => {
  return (
    <>
      <Box bgcolor={"#F7FAFF"} sx={{ padding: {xs:"2rem 2rem",md:"2rem 5% 3.2rem 5%"} }}>
        <Typography
          sx={{
            fontSize: {xs:"22px",sm:"25px",md:"40px"},
            fontWeight: 500,
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          {featuredata?.featuredata?.title}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: {xs:2,sm:2,md:3,lg:4},
            gridTemplateColumns: {xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 2fr)"},
            my: "1rem",
          }}
        >
          {featuredata?.featuredata?.data?.map((data) => (
            <Box key={data}>
              <Card
                sx={{
                  maxWidth: "100%",
                  borderRadius: 2,
                  boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <CardContent>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    {data.image}
                    <Typography
                      textAlign={"center"}
                      fontSize={"17px"}
                      fontWeight={"600"}
                      paddingY={"0.4rem"}
                    >
                      {data.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign={"center"}
                    fontSize={"16px"}
                    lineHeight={1.5}
                  >
                    {data.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "Center", mt: {xs:"1rem",sm:"2rem",md:"2.5rem"} }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "10px",
              bgcolor: "#0094FF",
              textTransform: "capitalize",
              padding: {xs:"0.3rem 1.5rem",md:"0.6rem 2.3rem"},
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            See all products
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Feature;
