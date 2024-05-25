import React from "react";
import { Box, Typography } from "@mui/material";
import img from "../../../../assets/Home/Vector.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

export default function DataBaseSection() {
  const navigate=  useNavigate()
  const DataBaseData = [
    {
      color: "#0066FF",
      fontSize: "20px",
      title: "ManageDataBase",
      path: "/ManageDatabase",
      description:<Typography fontSize={14}> Run CPU-intensive workloads with ease</Typography>,
    },
    {
      color: "#0066FF",
      fontSize: "20px",
      title: "PostgreSQL",
      path: "/PostgreSQL",
      description:<Typography fontSize={14}> Lighting fast parallel processing capabilities</Typography>,
    },
    {
      color: "#0066FF",
      fontSize: "20px",
      title: "MongoDB",
      path: "/MongoDb",
      description:<Typography fontSize={14}> Balanced Performanc with any work load</Typography>,
    },
    {
      
      color: "#0066FF",
      fontSize: "20px",
      title: "MYSQL",
      path: "/Sql",
      description:<Typography fontSize={14}> High Memory instances to boost performance       </Typography>,
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
            padding:"1rem 1rem"
          }}
        >
          {DataBaseData.map((data, index) => (
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
                        color={DataBaseData[index].color}
                        fontSize={DataBaseData[index].fontSize}
                      >
                        {DataBaseData[index].title}
                      </Typography>

                      <Typography color={"#677797"}>
                        {DataBaseData[index].description}
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
