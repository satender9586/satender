import { Box, Typography } from "@mui/material";
import React from "react";
import stepImg from "../../../assets/Pages/step.png";

const HowWork = () => {
  const processsData = [
    {
      step: "step:1",
      name: "Detection",
      desc: "Detect suspicious traffic flow that might be the signature of potential DDoS cyberattacks.",
    },
    {
      step: " step:2",
      name: "Diversion",
      desc: "Redirect traffic using BGP/DNS routing to maintain uninterrupted service for legitimate users. ",
    },
    {
      step: "step:3",
      name: "Filtering",
      desc: "DDoS protection filters out malicious traffic while allowing clean traffic to pass through.",
    },
    {
      step: "step:4",
      name: "Analysis",
      desc: "Examine your security logs to  ensure you're always protected from DDoS attacks.",
    },
  ];
  return (
    <Box
      sx={{ padding: { xs: "1rem 4%", md: "3rem 5%  3rem 5%" } }}
      bgcolor={"#F7FAFF"}
    >
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "26px", md: "30px", lg: "40px" },
            fontWeight: 500,
            letterSpacing: { XS: 3, md: 2, lg: 2 },
            textAlign: "center",
          }}
        >
          How does it work?
        </Typography>
      </Box>
      <Box mt={"2rem"} display={"Flex"} justifyContent={"center"}>
        <Box
          component={"img"}
          style={{ width: "94%", objectFit: "cover" }}
          src={stepImg}
          alt="step"
        ></Box>
      </Box>
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(4,1fr)"}
        gap={5}
        mt={"2rem"}
        paddingBottom={"1rem"}
      >
        {processsData?.map((data, index) => (
          <Box key={index}>
            <Typography sx={{ textAlign: "center", fontSize: "20px" }}>
              {data.step}
            </Typography>
            <Typography
              sx={{ textAlign: "center", fontSize: "17px", fontWeight: "600" }}
            >
              {data.name}
            </Typography>
            <Typography
              sx={{ textAlign: "center", fontSize: "16px", color: "#677788" }}
            >
              {data.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HowWork;
