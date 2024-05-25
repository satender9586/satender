import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import { FaShield } from "react-icons/fa6";
import CardContent from "@mui/material/CardContent";

const ExperienceCard = () => {
  return (
    <Box sx={{ padding: "0rem 3rem", paddingBottom: "2.5rem" }}>
      <Typography sx={{ textAlign: "Center", fontSize: "35px" }}>
        Experience Value-Added Features
      </Typography>
      <Box
        padding={"2rem"}
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Card
          sx={{
            maxWidth: 340,
            padding:3,
            borderRadius:3,
            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <CardContent>
            <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
              <FaShield fontSize={"35px"} />
            </Box>
            <Typography sx={{ fontSize: "22px",fontWeight:"600", textAlign: "Center" }}>
              Simplified Management
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                textAlign: "Center",
                lineHeight: "23px",
                letterSpacing: 1,
                mt: "0.4rem",
                color: "#677788",
              }}
            >
              Easily create and manage Kubernetes clusters directly through our
              user-friendly interface or API, saving you time and effort.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 340,
            padding:3,
            borderRadius:3,
            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <CardContent>
            <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
              <FaShield fontSize={"35px"} />
            </Box>
            <Typography sx={{ fontSize: "22px",fontWeight:"600", textAlign: "Center" }}>
              Simplified Management
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                textAlign: "Center",
                lineHeight: "23px",
                letterSpacing: 1,
                mt: "0.4rem",
                color: "#677788",
              }}
            >
              Easily create and manage Kubernetes clusters directly through our
              user-friendly interface or API, saving you time and effort.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ExperienceCard;
