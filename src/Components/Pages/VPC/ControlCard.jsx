import React from "react";
import Vpc1img from "../../../assets/Pages/Vpc1.png";
import { Box, Typography } from "@mui/material";

const ControlCard = () => {
  return (
    <Box sx={{ padding: "2rem 5%", bgcolor: "#F7FAFF" }}>
      <Box>
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: 500,
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          Control Your Cloud Resources
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 15, mt: "3rem", mb: "1rem" }}>
        <Box
          flex={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: "24px", letterSpacing: 2 }}>
            Optimal Performance
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              letterSpacing: 0.5,
              lineHeight: "30px",
              mt: "0.5rem",
            }}
          >
            Building a Secure, Scalable, and Customized Cloud Environment that
            provides ultimate control over your resources, improving performance
            and efficiency.
          </Typography>
        </Box>
        <Box flex={5} display={"flex"} justifyContent={"flex-end"}>
          <img
            width={"100%"}
            style={{ objectFit: "cover", borderRadius: 10 }}
            height={"250px"}
            src={Vpc1img}
            alt="Vpc-img"
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: 15, mt: "3rem", mb: "2rem" }}>
        <Box flex={5} display={"flex"} justifyContent={"start"}>
          <img
            width={"100%"}
            style={{ objectFit: "cover", borderRadius: 10 }}
            height={"250px"}
            src={Vpc1img}
            alt="Vpc-img"
          />
        </Box>
        <Box
          flex={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "24px", letterSpacing: 2 }}>
            Optimal Performance
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              letterSpacing: 0.5,
              lineHeight: "30px",
              mt: "0.5rem",
            }}
          >
            Building a Secure, Scalable, and Customized Cloud Environment that
            provides ultimate control over your resources, improving performance
            and efficiency.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ControlCard;
