import { Box, Typography } from "@mui/material";
import React from "react";
import stepImg from "../../../assets/Pages/step.png";

const HowWork = () => {
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
      <Box display={"grid"} gridTemplateColumns={"repeat(4,1fr)"} gap={5} mt={"2rem"} paddingBottom={"1rem"}>
        {[1, 2, 3, 4].map((data) => (
          <Box >
            <Typography sx={{textAlign:"center",fontSize:"28px"}}>step:1</Typography>
            <Typography sx={{textAlign:"center",fontSize:"17px"}}>Detection</Typography>
            <Typography sx={{textAlign:"center",fontSize:"16px",color:"#677788"}}>
              Detect suspicious traffic flow that might be the signature of
              potential DDoS cyberattacks.
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HowWork;
