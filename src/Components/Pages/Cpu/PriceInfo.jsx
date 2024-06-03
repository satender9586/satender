import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import graph1 from "../../../assets/Pages/graph1.png";
import TabCart from "./TabCart";

const PriceInfo = (priceData) => {



  return (
    <Box sx={{ padding: {xs:"2rem 1rem",md:"2rem 3rem"},paddingBottom:"3.5rem" }}>
      <Box >
        <Typography
          sx={{
            fontSize: {xs:"22px",sm:"25px",md:"40px"},
            fontWeight: 500,
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          {priceData?.priceData?.title}
        </Typography>
        <Typography
          sx={{
            fontSize: {xs:"18px",sm:"18px",md:"22px"},
            letterSpacing: 0,
            textAlign: "center",
          }}
        >
           {priceData?.priceData?.subtitle}
        </Typography>
      </Box>
      <Box
        padding={{xs:"1rem",md:"2.5rem"}}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        gap={{xs:3,md:6}}
      >
        {priceData?.priceData?.data?.map((data, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: {xs:"100%",sm:450},
              borderRadius: 3,
              boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <CardContent>
              <Grid container>
                <Grid
                  item
                  xs={3}
                  display={"flex"}
                  alignItems={"Center"}
                  justifyContent={"center"}
                >
                  {data.image}
                </Grid>
                <Grid item xs={9}>
                  <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                    {data.title}
                  </Typography>
                  <Typography sx={{ fontSize: "15px", color: "#6F7F8F" }}>
                  {data.desc}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box sx={{paddingBottom:"1.5rem"}}>
        <TabCart />
      </Box>
    </Box>
  );
};

export default PriceInfo;
