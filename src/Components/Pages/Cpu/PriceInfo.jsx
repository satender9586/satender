import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import graph1 from "../../../assets/Pages/graph1.png";
import TabCart from "./TabCart";

const PriceInfo = () => {
  return (
    <Box sx={{ padding: "2rem 3rem",paddingBottom:"3.5rem" }}>
      <Box>
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: 500,
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          4X Computing Power for Critical Workloads
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            letterSpacing: 0,
            textAlign: "center",
          }}
        >
          Dedicated compute solutions designed with your business needs in mind,
          ensuring critical workloads perform efficiently.
        </Typography>
      </Box>
      <Box
        padding={"2.5rem"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        gap={6}
      >
        {[1, 2, 3, 4].map((data, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 450,
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
                  <img src={graph1} alt="img" />
                </Grid>
                <Grid item xs={9}>
                  <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                    Reliable Performance Guarantee
                  </Typography>
                  <Typography sx={{ fontSize: "15px", color: "#6F7F8F" }}>
                    Dedicated CPU instances ensure predictable performance for
                    latency-sensitive apps.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box>
        <TabCart />
      </Box>
    </Box>
  );
};

export default PriceInfo;
