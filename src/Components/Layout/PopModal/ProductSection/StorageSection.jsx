import React from "react";
import { Box, Typography } from "@mui/material";
import img from "../../../../assets/Home/Vector.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

export default function StorageSection() {
  const navigate = useNavigate()
  const StorageData = [
    {
      color: "#0066FF",
      fontSize: "20px",
      title: "Block Storage",
      path:"/BlockStorage",
      description:<Typography fontSize={14}> Run CPU-intensive workloads with ease</Typography>,
    },
    // {
    //   color: "#0066FF",
    //   fontSize: "20px",
    //   title: "Operating System",
    //   path:"",
    //   description:<Typography fontSize={14}> Lighting fast parallel processing capabilities</Typography>,
    // },
    {
      color: "#0066FF",
      fontSize: "20px",
      title: "Backup",
      path:"/Backup",
      description:<Typography fontSize={14}> Seamlesly immtegrate with rest API</Typography>,
    },
    {
      color: "#0066FF",
      fontSize: "20px",
      path:"/ObjectStorage",
      title: "Object Storage",
      description:<Typography fontSize={14}> Balanced Performanc with any work load</Typography>,
    },
    {
      color: "#0066FF",
      fontSize: "20px",
      path:"/Snapshot",
      title: "Snapshots",
      description:<Typography fontSize={14}> Dedicated Physical Server Acess</Typography>,
    },
    {
      color: "#0066FF",
      fontSize: "20px",
      path:"/RemoteBackup",
      title: "Remote Backup",
      description:<Typography fontSize={14}> Hassle-free cloud management </Typography>,
    },
    // {
    //   color: "#0066FF",
    //   fontSize: "20px",
    //   path:"",
    //   title: "Archive Storage",
    //   description:<Typography fontSize={14}> High Memory instances to boost performance</Typography>,
    // },
    {
      color: "#0066FF",
      fontSize: "20px",
      title: "ISO",
      path:"/Iso",
      description: <Typography fontSize={14}>Scale Quickly and Confidently </Typography>,
    },
  ];

 


  return (
    <>
      <Box
      display={"flex"}
        gridTemplateColumns={"repeat(3,1fr)"}
 
      >
        <Box  height={"100%"}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
            padding:"1rem 1rem"
          }}>
          {StorageData.map((data, index) => (
            <Box key={data}>
            <Card sx={{maxHeight:"180px"}}>
            <CardActions onClick={()=> navigate(`${data.path}`)}>
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
                      color={StorageData[index].color}
                      fontSize={StorageData[index].fontSize}
                    >
                      {StorageData[index].title}
                    </Typography>

                    <Typography color={"#677797"}>
                      {StorageData[index].description}
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
