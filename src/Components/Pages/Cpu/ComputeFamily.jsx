import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import monitor from "../../../assets/Pages/monitor.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const ComputeFamily = () => {
  return (
    <Box bgcolor={"#F7FAFF"}  sx={{ padding: {xs:"2rem 2rem",md:"2rem 3rem"} }}>
      <Typography
        sx={{
          fontSize: {xs:"22px",sm:"25px",md:"40px"},
          fontWeight: 500,
          letterSpacing: 2,
          textAlign: "center",
        }}
      >
        Cloude Data compute family
      </Typography>
      <Typography
        sx={{
          fontSize: {xs:"16px",sm:"18px",md:"20px"},
          textAlign: "center",
        }}
      >
        Match your application use case with the right compute resource.
      </Typography>
      <Box display={"flex"} flexWrap={{xs:"wrap",md:"nowrap"}} gap={4} my={"1.5rem"} mt={"2rem"}>
        <Box width={{xs:"100%",md:"23%"}}>
          <Box bgcolor={"#06439C"} padding={"0.8rem 1rem"} borderRadius={"7px"}>
            <Typography color={"#ffff"} textAlign={"center"} fontSize={"20px"}>
              Dedicated CPU Cores
            </Typography>
          </Box>
          <Box mt={"2.5rem"}>
            {[1].map((data) => (
              <Box key={data}>
                <Card
                  sx={{
                    minWidth: "100%",
                    borderRadius: 2,
                    py: "0.5rem",
                    boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  <CardContent>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                    >
                      <img width={60} src={monitor} alt="img" />
                      <Typography
                        textAlign={"center"}
                        fontSize={"17px"}
                        fontWeight={"600"}
                        mt={"1.5rem"}
                      >
                        Dedicated CPU
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign={"center"}
                      fontSize={"16px"}
                      lineHeight={1.5}
                      mt={"0.3rem"}
                    >
                      Automated, reliable data protection and quick recovery.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
        <Box width={{xs:"100%",md:"77%"}}>
          <Box bgcolor={"#06439C"} padding={"0.8rem 1rem"} borderRadius={"7px"}>
            <Typography color={"#ffff"} textAlign={"center"} fontSize={"20px"}>
              Dedicated CPU Cores
            </Typography>
          </Box>
          <Box
            mt={"2.5rem"}
            sx={{
              display: "grid",
              gap: {xs:3,md:4},
              gridTemplateColumns: {xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 2fr)"},
            }}
          >
            {[1, 2, 3].map((data) => (
              <Box key={data}>
                <Card
                  sx={{
                    minWidth: "100%",
                    borderRadius: 2,
                    py: "0.5rem",
                    boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  <CardContent>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                    >
                      <img width={60} src={monitor} alt="img" />{" "}
                      <Typography
                        textAlign={"center"}
                        fontSize={"17px"}
                        fontWeight={"600"}
                        mt={"1.5rem"}
                      >
                        Dedicated CPU
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign={"center"}
                      fontSize={"16px"}
                      lineHeight={1.5}
                      mt={"0.3rem"}
                    >
                      Automated, reliable data protection and quick recovery.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ComputeFamily;
