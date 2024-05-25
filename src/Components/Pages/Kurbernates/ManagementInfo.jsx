import { Box, Typography } from "@mui/material";
import React from "react";
import { RiComputerFill } from "react-icons/ri";

const ManagementInfo = () => {
  return (
    <Box sx={{ padding: "0rem 3rem" ,paddingBottom:"2.5rem"}}>
      <Typography sx={{ fontSize: "35px", textAlign: "center" }}>
        Efficient and Flexible Kubernetes Management
      </Typography>
      <Typography
        sx={{ fontSize: "17px", textAlign: "center", color: "#6F7F8F" }}
      >
        Simplify your Kubernetes management with a user-friendly platform for
        optimal efficiency.
      </Typography>

      <Box
        sx={{ display: "grid", gap: 3, gridTemplateColumns: "repeat(2, 1fr)" }}
        mt={"2rem"}
      >
        <Box display={"flex"} alignItems={"start"} gap={2}>
          <Box mt={"5px"}>
            <RiComputerFill fontSize={25} />
          </Box>
          <Box>
            <Typography fontSize={"20px"} padding={"0px"}>
              Optimal Resource Utilization
            </Typography>
            <Typography fontSize={"14px"} lineHeight={"29px"} letterSpacing={1} color={"#6F7F8F"}>
              Seamlessly distribute containers across your cluster to maximize
              resource efficiency.
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"start"} gap={2}>
          <Box mt={"5px"}>
            <RiComputerFill fontSize={25} />
          </Box>
          <Box>
            <Typography fontSize={"20px"} padding={"0px"}>
              Automatic Cluster Scaling
            </Typography>
            <Typography fontSize={"14px"} lineHeight={"29px"} letterSpacing={1} color={"#6F7F8F"}>
              Easily create and destroy resources in real-time with Horizontal
              Cluster Autoscaling, resulting in highly available and stable
              applications.Managing data storage doesn't have to be complicated.
              Cloude Data makes it easy for you to store, organize and manage
              your data.
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"start"} gap={2}>
          <Box mt={"5px"}>
            <RiComputerFill fontSize={25} />
          </Box>
          <Box>
            <Typography fontSize={"20px"} padding={"0px"}>
              Developer-Friendly and Portable
            </Typography>
            <Typography fontSize={"14px"} lineHeight={"29px"} letterSpacing={1} color={"#6F7F8F"}>
              Easily manage your UKE cluster through our API and integrate
              Kubernetes management with your infrastructure. Move your existing
              applications and workloads quickly.
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"start"} gap={2}>
          <Box mt={"5px"}>
            <RiComputerFill fontSize={25} />
          </Box>
          <Box>
            <Typography fontSize={"20px"} padding={"0px"}>
              Easy App Deployment
            </Typography>
            <Typography fontSize={"14px"} lineHeight={"29px"} letterSpacing={1} color={"#6F7F8F"}>
              Easily deploy apps with the Kubernetes tooling ecosystem. UKE
              (Cloude Data Kubernetes Engine) supports integration with popular
              K8S-related tools.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ManagementInfo;
