import React from "react";
import picc from "../../../assets/Pages/Balanced.svg";
import { Box, Typography, Button, Stack } from "@mui/material";

import right from "../../../assets/Pages/Right.svg";

const Experience = () => {
  return (
    <>
      <Box
        component="section"
        bgcolor={"#F7FAFF"}
        display={"grid"}
        justifyContent={"center"}
        alignItems={"center"}
       
        sx={{  p: 3 }}
          
      >
        <Box  margin={1} padding={1} >
        <Typography fontSize={40} >
          Experience Lightning-Fast Performance
        </Typography>
        </Box>
        <Box
      
        component="section"
        bgcolor={"#F7FAFF"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        // bgcolor={"violet"}
        height={2}
        
        // sx={{ p: 1 }}
      >
        <Box display={"flex"} margin={1}>
  <Box>
    <img src={right} height={40} width={16.76} alt="right" />
  </Box>
  <Box marginLeft={1}> 
    <Typography fontSize={23} color={"#6F7F8F"}>
      4x Speed
    </Typography>
  </Box>
</Box>


<Box display={"flex"} margin={1}>
  <Box>
    <img src={right} height={40} width={16.76} alt="right" />
  </Box>
  <Box marginLeft={1}> 
    <Typography fontSize={23} color={"#6F7F8F"}>
      Unbreakable Security
    </Typography>
  </Box>
</Box>



<Box display={"flex"} margin={1}>
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

     
      {/* <Box component="section" bgcolor={"#F7FAFF"} display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ p: 1,  }}>
    <img src={Group} width={677} height={36} alt="group" />
    </Box> */}

    


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
          height={400}
          width={800}
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
          
            <Box display={"flex"} gap={1} >
            <Box   display={"flex"} justifyContent={"start"} alignItems={"start"} alignContent={"start"}>
    <img src={right} height={25} width={16.76} alt="right" />
  </Box>
                <Typography
                  sx={{
                    fontSize: "19px",
                    textAlign: "left",
                    color: "#6F7F8F",
                  }}
                >
                  High Memory Instances designed to meet the 
needs of memory-intensive workloads that 
require large amounts of RAM to run applications.
                </Typography>
              </Box>
              <Box display={"flex"} gap={1} >
            <Box   display={"flex"} justifyContent={"start"} alignItems={"start"} alignContent={"start"}>
    <img src={right} height={25} width={16.76} alt="right" />
  </Box>
                <Typography
                  sx={{
                    fontSize: "19px",
                    textAlign: "left",
                    color: "#6F7F8F",
                  }}
                >
                  Ideal for a variety of use cases, such as high-
performance databases, big data and analytics, 
machine learning, and high-performance computing.
                </Typography>
              </Box>
              <Box display={"flex"} gap={1} >
            <Box   display={"flex"} justifyContent={"start"} alignItems={"start"} alignContent={"start"}>
    <img src={right} height={25} width={16.76} alt="right" />
  </Box>
                <Typography
                  sx={{
                    fontSize: "19px",
                    textAlign: "left",
                    color: "#6F7F8F",
                  }}
                >
                 Experience uninterrupted performance with High 
Memory, ensuring 99.99% uptime for your critical 
applications.

                </Typography>
              </Box>
            <Button variant="contained" sx={{ width: "143px", height: "51", borderRadius:"10" }}>
              Get Started
            </Button>
          </Box>
        </Box>

        <Box>
          {/* <Box display={"flex"} gridTemplateColumns={"repeat(2,1fr)"}>
              <Box>
                <Box display={"flex"} alignItems="center">
                  <Box
                    bgcolor={"#D9D9D9"}
                    width={25}
                    height={25}
                    borderRadius={50}
                    textAlign={"center"}
                    sx={{ marginRight: 1 }}
                  >
                    <Typography>2</Typography>
                  </Box>

                  {/* <Typography
                    sx={{
                      fontSize: "22px",
                      justifyContent: "flex-start",
                    }}
                  >
                    Shared CPU technology
                  </Typography> */}
        </Box>
      </Box>
    </>
  );
};

export default Experience;
