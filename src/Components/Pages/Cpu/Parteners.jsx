import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import monitor from "../../../assets/Pages/monitor.png";
import { CardActionArea } from "@mui/material";
import { Box, Typography, Grid } from "@mui/material";

import { useState } from "react";

const Parteners = () => {
  const [index, setIndex] = useState(0);
  const [isActive, setIsActive] = useState(0);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    if (index === 0) {
      setArr([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
    if (index === 1) {
      setArr([1, 2, 3, 4, 5, 6, 7]);
    }
    if (index === 2) {
      setArr([1, 2, 3, 4, 5, 6]);
    }
  }, [index]);

  return (
    <Box sx={{ padding: "2rem 3rem" }}>
      <Typography
        sx={{
          fontSize: "40px",
          fontWeight: 500,
          letterSpacing: 2,
          textAlign: "center",
        }}
      >
        Easily Deploy & Scale,
      </Typography>
      <Typography
        sx={{
          fontSize: "40px",
          fontWeight: 500,
          letterSpacing: 2,
          textAlign: "center",
        }}
      >
        Customize with Confidence
      </Typography>
      <Box>
        <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
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
          <Grid item xs={6} md={8}>
            <Box
              sx={{
                display: "grid",
                gap: 3,
                gridTemplateColumns: "repeat(3, 3fr)",
                my: "1rem",
              }}
            >
              {arr?.map((data) => (
                <Box key={data}>
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
                          <img width={40} src={monitor} alt="img" />
                          <Typography
                            textAlign={"center"}
                            fontSize={"17px"}
                            fontWeight={"600"}
                            mt={"1.2rem"}
                          >
                            SSH Keys
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
