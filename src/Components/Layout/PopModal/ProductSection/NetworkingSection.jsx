import React from "react";
import { Box, Typography } from "@mui/material";
import img from "../../../../assets/Home/Vector.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

export default function NetworkingSection() {
  const navigate = useNavigate();
  const NetworkData = [
    {
      color: "#0066FF",
      fontSize: "20px",
      title: "Network",
      path: "/network",
      description: (
        <Typography fontSize={14}>
          {" "}
          Run CPU-intensive workloads with ease
        </Typography>
      ),
    },
    // {
    //   color: "#0066FF",
    //   fontSize: "20px",
    //   title: "Load balancer",
    //   path:"",
    //   description: <Typography fontSize={14}>Lighting fast parallel processing   capabilities </Typography>,
    // },
    {
      color: "#0066FF",
      fontSize: "20px",
      title: " IP",
      path: "/Ip",
      description: (
        <Typography fontSize={14}>
          {" "}
          Run CPU-intensive workloads with ease
        </Typography>
      ),
    },
    {
      color: "#0066FF",
      fontSize: "20px",
      title: "Virtual Router",
      path:"/virtual",
      description:<Typography fontSize={14}> Lighting fast parallel processing capabilities </Typography>,
    },
    {
      color: "#0066FF",
      fontSize: "20px",
      title: "DDos Protection",
      path: "/protection",
      description: (
        <Typography fontSize={14}>
          {" "}
          Balanced Performanc with any work load{" "}
        </Typography>
      ),
    },
    {
      color: "#0066FF",
      fontSize: "20px",
      title: "VPC",
      path: "/VPC",
      description: (
        <Typography fontSize={14}> Dedicated Physical Server Acess</Typography>
      ),
    },
    {
      color: "#0066FF",
      fontSize: "20px",
      title: "IPv4",
      path: "/Ipv4",
      description: (
        <Typography fontSize={14}>
          {" "}
          Balanced Performanc with any work load{" "}
        </Typography>
      ),
    },
    {
      color: "#0066FF",
      fontSize: "20px",
      title: "Gateway",
      path:"/gateway",
      description:<Typography fontSize={14}> Dedicated Physical Server Acess </Typography>,
    },
    {
      color: "#0066FF",
      fontSize: "20px",
      title: "DNS Manager",
      path: "/dns",
      description: (
        <Typography fontSize={14}>
          {" "}
          High Memory instances to boost performance
        </Typography>
      ),
    },
    {
      color: "#0066FF",
      fontSize: "20px",
      title: "VPN",
      path: "/Vpn",
      description: (
        <Typography fontSize={14}> Scale Quickly and Confidently</Typography>
      ),
    },
    {
      color: "#0066FF",
      fontSize: "20px",
      title: "IPv6",
      path: "/Ip6",
      description: (
        <Typography fontSize={14}>
          High Memory instances to boost performance
        </Typography>
      ),
    },
    {
      color: "#0066FF",
      fontSize: "20px",
      title: "IPSEC Tunnel",
      path:"/ipsec",
      description: <Typography fontSize={14}>Scale Quickly and Confidently</Typography>,
    },
  ];

  return (
    <>
      <Box
        display={"flex"}
        gridTemplateColumns={"repeat(3,1fr)"}
        overflow={"hidden"}
      >
        <Box
          height={"100%"}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
            padding: "1rem 1rem",
          }}
        >
          {NetworkData.map((data, index) => (
            <Box key={data}>
              <Card sx={{ maxHeight: "180px" }}>
                <CardActions onClick={() => navigate(`${data.path}`)}>
                  <CardContent>
                    <Box
                      padding={"0.5rem"}
                      display={"flex"}
                      gap={"20px"}
                      bgcolor={"white"}
                    >
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <img src={img} width={40} alt="logo" />
                      </Box>
                      <Box>
                        <Typography
                          color={NetworkData[index].color}
                          fontSize={NetworkData[index].fontSize}
                        >
                          {NetworkData[index].title}
                        </Typography>

                        <Typography color={"#677797"}>
                          {NetworkData[index].description}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
