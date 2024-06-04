import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import { FaShield } from "react-icons/fa6";
import CardContent from "@mui/material/CardContent";

const TwoCardWithTitle = ({TwoCardWithTitleData}) => {
  return (
    <Box sx={{ padding: { xs: "0rem 4%", md: "3rem  5% 3.5rem  5%" } }}>
      <Typography
        sx={{
          fontSize: { xs: "26px", md: "30px", lg: "40px" },
          fontWeight: 500,
          letterSpacing: { XS: 3, md: 2, lg: 2 },
          textAlign: "center",
          lineHeight: 1,
        }}
      >
        {TwoCardWithTitleData[0]?.title1}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "17px", md: "20px" },
          letterSpacing: 0,
          textAlign: "center",
          color: "#677788",
          mt: "1.2rem",
        }}
      >
        {TwoCardWithTitleData[0]?.desc1}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "17px", md: "20px" },
          letterSpacing: 0,
          textAlign: "center",
          color: "#677788",
        }}
      >
        {TwoCardWithTitleData[0]?.desc2}
      </Typography>
      <Box sx={{ mt: "3rem",display:"flex",justifyContent:"space-between" }}>
        {TwoCardWithTitleData?.slice(1).map((data) => (
          <Card
          key={data}
            sx={{
              maxWidth: 440,
              padding: "1rem 2rem",
              borderRadius: 2,
              boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "600",
                  textAlign: "Center",
                }}
              >
               {data.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  textAlign: "Center",
                 letterSpacing: 1,
                  mt: "0.4rem",
                  color: "#677788",
                  lineHeight: 1.8,
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

export default TwoCardWithTitle;
