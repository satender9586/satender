import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import monitor from "../../../assets/Pages/monitor.png";
import { CardActionArea } from "@mui/material";
import { Box, Typography, Grid } from "@mui/material";
import distrubution1 from "../../../assets/Pages/Distribution/1.png"
import distrubution2 from "../../../assets/Pages/Distribution/2.png"
import distrubution3 from "../../../assets/Pages/Distribution/3.png"
import distrubution4 from "../../../assets/Pages/Distribution/4.png"
import distrubution5 from "../../../assets/Pages/Distribution/5.png"
import distrubution6 from "../../../assets/Pages/Distribution/6.png"
import distrubution7 from "../../../assets/Pages/Distribution/7.png"
import distrubution8 from "../../../assets/Pages/Distribution/8.png"
import distrubution9 from "../../../assets/Pages/Distribution/9.png"
import App1 from "../../../assets/Pages/App/1.png"
import App2 from "../../../assets/Pages/App/2.png"
import App3 from "../../../assets/Pages/App/3.png"
import App4 from "../../../assets/Pages/App/4.png"
import App5 from "../../../assets/Pages/App/5.png"
import App6 from "../../../assets/Pages/App/6.png"
import App7 from "../../../assets/Pages/App/7.png"
import App8 from "../../../assets/Pages/App/8.png"
import App9 from "../../../assets/Pages/App/9.png"
import custom1 from "../../../assets/Pages/custom/1.png"
import custom2 from "../../../assets/Pages/custom/2.png"
import custom3 from "../../../assets/Pages/custom/3.png"
import custom4 from "../../../assets/Pages/custom/4.png"
import custom5 from "../../../assets/Pages/custom/5.png"
import custom6 from "../../../assets/Pages/custom/6.png"


import { useState } from "react";

const Parteners = () => {
  const [index, setIndex] = useState(0);
  const [isActive, setIsActive] = useState(0);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    if (index === 0) {4
      setArr([{image:distrubution1,name:"Ubuntu"}, {image:distrubution2,name:"Fedora"}, {image: distrubution3,name:"Debian"}, {image: distrubution4,name:"Windows"}, {image:distrubution5,name:"jenkins"}, {image:distrubution6,name:"Centos"}, {image:distrubution7,name:"Red Hat"}, {image:distrubution8,name:"Alima Linux"}, {image:distrubution9,name:"Plesk"}]);
    }
    if (index === 1) {
      setArr([{image:App1,name:"Wordpress"}, {image:App2,name:"Node JS"}, {image: App3,name:"Cpanel"}, {image: App4,name:"Docker"}, {image:App5,name:"Django"}, {image:App6,name:"MySQL"}, {image:App7,name:"MongoDB"}, {image:App8,name:"Postgre SQL"}, {image:App9,name:"GitLab"}]);
    }
    if (index === 2) {
      setArr([{image:custom1,name:"Docker"}, {image:custom2,name:"Django"}, {image: custom3,name:"MySQL"}, {image: custom4,name:"MongoDB"}, {image:custom5,name:"Postgre SQL"}, {image:custom6,name:"GitLab"}]);
    }
  }, [index]);

  return (
    <Box  sx={{ padding: {xs:"2rem 2rem",md:"2rem 3rem 3rem 3rem"} }}>
      <Typography
        sx={{
          fontSize: {xs:"22px",sm:"25px",md:"40px"},
          fontWeight: 500,
          letterSpacing: 2,
          textAlign: "center",
        }}
      >
        Easily Deploy & Scale,
      </Typography>
      <Typography
        sx={{
          fontSize: {xs:"22px",sm:"25px",md:"40px"},
          fontWeight: 500,
          letterSpacing: 2,
          textAlign: "center",
        }}
      >
        Customize with Confidence
      </Typography>
      <Box>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "grid",
                gap: 3,
                gridTemplateColumns: "repeat(1, 3fr)",
                my: "1rem",
              }}
            >
              {[
                {
                  name: "Distribution",
                  Img: "",
                  desc: "Deploy your preferred operation system.",
                },
                {
                  name: "Marketplace Apps",
                  Img: "",
                  desc: "Quick Solution Deployments with Flexible tools you need.",
                },
                {
                  name: "Custom Images",
                  Img: "",
                  desc: "Simplify cloud migration and scalibility with custom OS Uploads",
                },
              ].map((data, indexs) => (
                <Box key={indexs}>
                  <Card
                    sx={{
                      maxWidth: "100%",
                      borderRadius: 3,
                      border: isActive == indexs ? "none" : "2px solid #244A71",
                      boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                      bgcolor: isActive == indexs ? "#D4E4FF" : "none",
                    }}
                  >
                    <CardActionArea
                      onClick={() => {
                        setIndex(indexs), setIsActive(indexs);
                      }}
                    >
                      <CardContent>
                        <Grid container>
                          <Grid item xs={3}>
                            <Box
                              display={"flex"}
                              justifyContent={"start"}
                              alignItems={"center"}
                              height={"100%"}
                              paddingLeft={"0.5rem"}
                            >
                              <img width={50} src={monitor} alt="img" />
                            </Box>
                          </Grid>
                          <Grid item xs={9}>
                            <Box>
                              <Typography fontSize={"24px"}>
                                {data.name}
                              </Typography>
                              <Typography fontSize={"16px"} color={"#6F7F8F"}>
                                {data.desc}
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Box
              sx={{
                display: "grid",
                gap: {xs:3,sm:1,md:3},
                gridTemplateColumns: {Xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 3fr)"},
                my: "1rem",
              }}
            >
              {arr?.map((data,index) => (
                <Box key={index}>
                  <Card
                    sx={{
                      maxWidth: "100%",
                      borderRadius: 2,
                      boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"center"}
                          mt={"0.3rem"}
                        >
                          <img width={40} src={data.image} alt="img" />
                          <Typography
                            textAlign={"center"}
                            fontSize={"17px"}
                            fontWeight={"600"}
                            mt={"1.2rem"}
                          >
                            {data.name}
                          </Typography>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
              ))}
            </Box>
          </Grid>
         
        </Grid>
      </Box>
    </Box>
  );
};

export default Parteners;
