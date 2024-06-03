import React from "react";
import picc from "../../../assets/Pages/Balanced.svg";
import { Box, Typography, Button, Stack } from "@mui/material";

import right from "../../../assets/Pages/Right.svg";

const Experience = () => {
  return (
    <>
      <Box sx={{ padding: "2rem 0 2rem 0rem" }} bgcolor={"#F7FAFF"}>
        <Box display={"grid"} justifyContent={"center"} alignItems={"center"}>
          <Box>
            <Typography textAlign={"center"} fontSize={{xs:"25px",sm:"25px",md:"30px",lg:"35px"}}>
              Experience Lightning-Fast Performance
            </Typography>
          </Box>
          <Box

            component="section"
            bgcolor={"#F7FAFF"}
            display={{xs:"none",sm:"none",md:"flex"}}
            justifyContent={"center"}
            alignItems={"center"}
            gap={3}
          >
            <Box display={"flex"}>
              <Box>
                <img src={right} height={40} width={16.76} alt="right" />
              </Box>
              <Box marginLeft={1}>
                <Typography fontSize={23} color={"#6F7F8F"}>
                  4x Speed
                </Typography>
              </Box>
            </Box>

            <Box display={"flex"}>
              <Box>
                <img src={right} height={40} width={16.76} alt="right" />
              </Box>
              <Box marginLeft={1}>
                <Typography fontSize={23} color={"#6F7F8F"}>
                  Unbreakable Security
                </Typography>
              </Box>
            </Box>

            <Box display={"flex"}>
              <Box>
                <img src={right} height={40} width={16.76} alt="right" />
              </Box>
              <Box marginLeft={1}>
                <Typography fontSize={23} color={"#6F7F8F"}>
                  99.99% Uptime
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          bgcolor={"#F7FAFF"}
          gridTemplateColumns={"repeat(2,1fr)"}
          sx={{ padding: "2rem 3rem" }}
          height={420}
        >
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Box width={800} height={520}>
              <img src={picc} width={785} height={501} alt="logo" />
            </Box>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            height={350}
            width={800}
          >
            <Box display={"grid"} justifyContent={"flex-start"} gap={2}>
              <Box display={"flex"} gap={1}>
                <Box
                  display={"flex"}
                  justifyContent={"start"}
                  alignItems={"start"}
                  alignContent={"start"}
                >
                  <img src={right} height={25} width={16.76} alt="right" />
                </Box>
                <Typography
                  sx={{
                    fontSize: "19px",
                    textAlign: "left",
                    color: "#6F7F8F",
                  }}
                >
                  High Memory Instances designed to meet the needs of
                  memory-intensive workloads that require large amounts of RAM
                  to run applications.
                </Typography>
              </Box>
              <Box display={"flex"} gap={1}>
                <Box
                  display={"flex"}
                  justifyContent={"start"}
                  alignItems={"start"}
                  alignContent={"start"}
                >
                  <img src={right} height={25} width={16.76} alt="right" />
                </Box>
                <Typography
                  sx={{
                    fontSize: "19px",
                    textAlign: "left",
                    color: "#6F7F8F",
                  }}
                >
                  Ideal for a variety of use cases, such as high- performance
                  databases, big data and analytics, machine learning, and
                  high-performance computing.
                </Typography>
              </Box>
              <Box display={"flex"} gap={1}>
                <Box
                  display={"flex"}
                  justifyContent={"start"}
                  alignItems={"start"}
                  alignContent={"start"}
                >
                  <img src={right} height={25} width={16.76} alt="right" />
                </Box>
                <Typography
                  sx={{
                    fontSize: "19px",
                    textAlign: "left",
                    color: "#6F7F8F",
                  }}
                >
                  Experience uninterrupted performance with High Memory,
                  ensuring 99.99% uptime for your critical applications.
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{ width: "143px", height: "51", borderRadius: "10" }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Box>
       
      </Box>
    </>
  );
};

export default Experience;
