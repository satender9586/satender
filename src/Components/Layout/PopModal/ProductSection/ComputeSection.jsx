import React from "react";
import { Box, Typography } from "@mui/material";
import img from "../../../../assets/Home/Vector.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

export default function ComputeSection() {
  const navigate = useNavigate()
  const ComputeData = [
    {
      color: "#0066FF",
      fontSize: "19px",
      title: "Dedicated CPU",
      path: "/cpu",
      description: (
        <Typography fontSize={14}>
          Run CPU-intensive workloads with ease
        </Typography>
      ),
     
    },
    {
      color: "#0066FF",
      fontSize: "19px",
      title: "GPU",
      description: (
        <Typography fontSize={14}>
          {" "}
          Lighting fast parallel processing capabilities
        </Typography>
      ),
      path: "/sharedcpu",
    },
    // {
    //   color: "#0066FF",
    //   fontSize: "19px",
    //   title: "API",
    //   description: (
    //     <Typography fontSize={14}>
    //       {" "}
    //       Seamlesly immtegrate with rest API{" "}
    //     </Typography>
    //   ),
    //   path: "/",
    // },
    // {
    //   color: "#0066FF",
    //   fontSize: "19px",
    //   title: "Monitoring",
    //   description: (
    //     <Typography fontSize={14}>
    //       {" "}
    //       proacting monitoring of peace of mind{" "}
    //     </Typography>
    //   ),
    //   path: "/",
    // },
    // {
    //   color: "#0066FF",
    //   fontSize: "19px",
    //   title: "Virtual Desktop",
    //   description: (
    //     <Typography fontSize={14}>
    //       {" "}
    //       Secure remote desktop from anywhere
    //     </Typography>
    //   ),
    //   path: "/",
    // },
    {
      color: "#0066FF",
      fontSize: "19px",
      title: "High Memory",
      description: (
        <Typography fontSize={14}>
          {" "}
          High Memory instances to boost performance
        </Typography>
      ),
      path: "/highmemory",
    },
    {
      color: "#0066FF",
      fontSize: "19px",
      title: "Kubernetes",
      path: "/kurbo",
      description: (
        <Typography fontSize={14}>
          Scale Quickly with kubernetes
        </Typography>
      ),
      
    },
    // {
    //   color: "#0066FF",
    //   fontSize: "19px",
    //   title: "Cloud Migration",
    //   description: (
    //     <Typography fontSize={14}>
    //       Migration with the Zero time Downtime{" "}
    //     </Typography>
    //   ),
    //   path: "/",
    // },
    // {
    //   color: "#0066FF",
    //   fontSize: "19px",
    //   title: "SSH Keys",
    //   description: (
    //     <Typography fontSize={14}>
    //       {" "}
    //       Secure way to ensure the confidentialy
    //     </Typography>
    //   ),
    //   path: "/",
    // },
    {
      color: "#0066FF",
      fontSize: "19px",
      title: "Shared CPU",
      path:"/sharedcpu",
      description: (
        <Typography fontSize={14}>
          {" "}
          Balanced Performanc with any work load
        </Typography>
      ),
     
    },
    {
      color: "#0066FF",
      fontSize: "19px",
      title: "Bare Metal",
      description: (
        <Typography fontSize={14}> Dedicated Physical Server Acess</Typography>
      ),
      path: "/",
    },
    // {
    //   color: "#0066FF",
    //   fontSize: "19px",
    //   title: "Cloud Manager",
    //   description: (
    //     <Typography fontSize={14}> Hassle-free cloud management </Typography>
    //   ),
    //   path: "/",
    // },
    // {
    //   color: "#0066FF",
    //   fontSize: "19px",
    //   title: "SSL Certificate",
    //   description: (
    //     <Typography fontSize={14}>
    //       {" "}
    //       Secure your website with the SSL encryption
    //     </Typography>
    //   ),
    //   path: "/",
    // },
  ];

  return (
    <>
      <Box
        display={"flex"}
        gridTemplateColumns={"repeat(3,1fr)"}
        
      >
        <Box
          height={"100%"}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
            padding:"1rem 1rem"
          }}
        >
          {ComputeData.map((data, index) => (
            <Box key={data}>
              <Card sx={{maxHeight:"180px"}}>
              <CardActions onClick={()=>navigate(`${data?.path}`)}>
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
                        color={ComputeData[index].color}
                        fontSize={ComputeData[index].fontSize}
                      >
                        {ComputeData[index].title}
                      </Typography>

                      <Typography color={"#677797"}>
                        {ComputeData[index].description}
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
