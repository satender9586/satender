import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import monitor from "../../../assets/Pages/monitor.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import cloude1 from "../../../assets/Pages/cloude/1.png"
import cloude2 from "../../../assets/Pages/cloude/2.png"
import cloude3 from "../../../assets/Pages/cloude/3.png"
import cloude4 from "../../../assets/Pages/cloude/4.png"

const ComputeFamily = () => {
  const data = [{image: cloude1, name:"Shared CPU", desc:"Balance power & performance"},{image: cloude2, name:"Dedicated CPU", desc:"For CPU-intensive applications"},{image: cloude3, name:"High Memory", desc:"Maximum RAM Configuration"},{image: cloude4, name:"GPU", desc:"Speed up complex Workload"}]
  return (
    <Box bgcolor={"#F7FAFF"}  sx={{ padding: {xs:"2rem 2rem",md:"2rem 3rem 2.3rem 3rem"} }}>
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
            {data.slice(0,1).map((data) => (
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
                      <img width={60} src={data.image} alt="img" />
                      <Typography
                        textAlign={"center"}
                        fontSize={"17px"}
                        fontWeight={"600"}
                        mt={"1.5rem"}
                      >
                       {data.name}
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
                      {data.desc}
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
            {data.slice(1).map((data,index) => (
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
                      <img width={60} src={data.image} alt="img" />{" "}
                      <Typography
                        textAlign={"center"}
                        fontSize={"17px"}
                        fontWeight={"600"}
                        mt={"1.5rem"}
                      >
                        {data.name}
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
                      {data.desc}
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
