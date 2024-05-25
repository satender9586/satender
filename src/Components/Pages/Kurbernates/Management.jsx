import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Img1 from "../../../assets/Pages/KuImg1.webp";
import Img2 from "../../../assets/Pages/KuImg1.webp";

const Management = () => {
  return (
    <Box sx={{ bgcolor: "#ffff", padding: "2rem 3rem" }}>
      <Box>
        <Typography
          sx={{
            textAlign: "Center",
            fontSize: "35px",
          }}
        >
          Scale Up Fast With No Limit
        </Typography>
      </Box>
      <Box display={"flex"} mt={"2rem"}>
        <Box flex={4.5}>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "23px",
            }}
          >
            Automate Container Management
          </Typography>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "17px",
              color: "#6F7F8F",
              py: "0.3rem",
              width: "90%",
              lineHeight: "27px",
            }}
          >
            Open-source container orchestration system to automate the
            deployment, scaling, and management of containerized applications.
          </Typography>
        </Box>
        <Box
          flex={5.5}
          position={"relative"}
          boxSizing={"border-box"}
          height={"153px"}
        >
          <Box>
            <Box position={"absolute"} top={"5px"} left={"30px"} zIndex={5}>
              <img
                src={Img1}
                style={{ width: "100%", height: "120px" }}
                alt="kot"
              />
            </Box>
            <Box
              position={"absolute"}
              top={"33px"}
              height="120px"
              zIndex={3}
              bgcolor={"#EFF5FF"}
              width={"94%"}
              borderRadius={"5px"}
            ></Box>
          </Box>
        </Box>
      </Box>

      <Box display={"flex"} mt={"3.5rem"}>
        <Box
          flex={5.5}
          position={"relative"}
          boxSizing={"border-box"}
          height={"153px"}
        >
          <Box>
            <Box position={"absolute"} top={"5px"} zIndex={5}>
              <img
                src={Img1}
                style={{ width: "94%", height: "120px" }}
                alt="kot"
              />
            </Box>
            <Box
              position={"absolute"}
              top={"33px"}
              left={"30px"}
              height="120px"
              zIndex={3}
              bgcolor={"#EFF5FF"}
              width={"94%"}
              borderRadius={"5px"}
            ></Box>
          </Box>
        </Box>

        <Box flex={4.5} paddingLeft={"3rem"}>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "23px",
            }}
          >
            Scale App Effortlessly
          </Typography>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "17px",
              color: "#6F7F8F",
              py: "0.3rem",

              lineHeight: "27px",
            }}
          >
            Easily manage and scale your applications, reduce infrastructure
            costs, and improve your team's productivity.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Management;
