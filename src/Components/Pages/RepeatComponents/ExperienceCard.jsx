import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import { FaShield } from "react-icons/fa6";
import CardContent from "@mui/material/CardContent";

const ExperienceCard = ({ ExpenceData }) => {

  
  return (
    <Box sx={{ padding: "2rem 3rem"}}>
      <Typography sx={{ textAlign: "Center", fontSize: "40px" }}>
       {ExpenceData[0]?.title}
      </Typography>
      <Box
        padding={"2rem"}
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        {ExpenceData?.slice(1).map((data, index) => (
          <Card
          key={index}
            sx={{
              maxWidth: 340,
              padding: 2.2,
              borderRadius: 3,
              boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <CardContent>
              <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
                {data.image}
              </Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "600",
                  textAlign: "Center",
                }}
              >
                {data.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  textAlign: "Center",
                  lineHeight: "23px",
                  letterSpacing: 1,
                  mt: "0.4rem",
                  color: "#677788",
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

export default ExperienceCard;
