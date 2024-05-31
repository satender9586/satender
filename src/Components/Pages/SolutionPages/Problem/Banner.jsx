import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ProblemSolvingImg from "../../../../assets/Pages/Solutionpage/Problem/ProblemsolveImg.png";
import phoneVersionImg from "../../../../assets/Pages/Solutionpage/SecuritySolution/phoneVersion.png";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


const Banner = () => {
  return (
    <Box sx={{ padding: "2rem 5%" }}>
      <Box>
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: 500,
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          Get Your Problems Solved
        </Typography>
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: 500,
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          in Minutes
        </Typography>
        <Typography
          sx={{ fontSize: "18px", textAlign: "center", color: "#677788" }}
        >
          Say goodbye to managing your cloud infrastructure alone and let us
          take{" "}
        </Typography>
        <Typography
          sx={{ fontSize: "18px", textAlign: "center", color: "#677788" }}
        >
          care of it with our expert Managed Support services!{" "}
        </Typography>
      </Box>

      <Box mt={"2rem"}>
        <Box
          component={"img"}
          alt="banner-img"
          sx={{ width: "100%", height: "450px" }}
          src={ProblemSolvingImg}
        />
      </Box>

      <Box
        sx={{
          padding: "4rem 0%",
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "22px", sm: "25px", md: "40px" },
                fontWeight: 600,
                letterSpacing: 2,
              }}
            >
              Support Ticket
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "22px", sm: "25px", md: "40px" },
                fontWeight: 600,
                letterSpacing: 2,
              }}
            >
              Made Easy
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "18px", sm: "18px", md: "18px" },
                color: "#677788",
                letterSpacing: 1,
                lineHeight: "35px",
              }}
            >
              Are you tired of losing track of customer support requests across
              different channels? Our ticket portal offers a streamlined
              solution to manage and track all your support tickets in one
              place.
            </Typography>
          </Box>
          <Box padding={"0.8rem 0"}>
            <Button variant="contained">Get Started</Button>
          </Box>
        </Box>
        <Box>
          <Box display={"flex"} alignItems={"center"}>
            <Box
              component={"img"}
              src={phoneVersionImg}
              alt="phoneversion-img"
              height={"60%"}
              width={"100%"}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ textAlign: "center", fontSize: "40px" }}>
          Efficiently manage and resolve support requests
        </Typography>
        <Box>
          <Box
            sx={{
              mt: "2rem",
              display: "grid",
              columnGap: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
              rowGap: { xs: 3, sm: 3, md: 3, lg: 4, xl: 5 },
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
              },
            }}
          >
            <Card
              sx={{
                maxWidth: "100%",
                borderRadius: 3,
                padding: 1,
                boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: "20px", textAlign: "Center", mt: "15px" }}
                >
                  Easy ticket submission
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    textAlign: "Center",
                    letterSpacing: 1,
                    mt: "0.4rem",
                    color: "#677788",
                    lineHeight: 1.7,
                  }}
                >
                  Submit support tickets via email or a web portal.
                </Typography>
              </CardContent>
            </Card>

            <Card
              sx={{
                maxWidth: "100%",
                borderRadius: 3,
                padding: 1,
                boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: "20px", textAlign: "Center", mt: "15px" }}
                >
                  Ticket tracking
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    textAlign: "Center",
                    letterSpacing: 1,
                    mt: "0.4rem",
                    color: "#677788",
                    lineHeight: 1.7,
                  }}
                >
                  Keep track of the status and history of all support requests
                  in one place.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
      <Box>

      </Box>
    </Box>
  );
};

export default Banner;
