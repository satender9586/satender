import React from "react";
import picc from "../../../assets/Home/6272278-01 1.svg";
import { Box, Typography } from "@mui/material";
import img from "../../../assets/Home/Vector.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

const Soution = () => {
 
  const data = [
    { name: "Solution Overview", desc: "Maximize Computing Potential",path:"/solutionoverview"},
    { name: "Security Solution", desc: "Unbrekable security for your bussiness" ,path:"/securitysolution"},
    { name: "User Management  ", desc: "Manage your cloud users easily" ,path:"/management"},
    { name: "Managed Support ", desc: "Let us Handle Everything for you",path:"/problem" },
  ];

  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}> 
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            padding: "1rem",
            gap: 2,
          }}
        >
          {data.map((data, index) => (
            <Box key={index}>
              <Card sx={{ maxHeight: "180px" }}>
                <CardActions onClick={() => navigate(data.path)}>
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
                        <Typography color="blue" fontSize={"20px"}>
                          {data.name}
                        </Typography>

                        <Typography color={"#677797"}>
                          {data.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
        <Box>
          <img
            src={picc}
            style={{ width: "100%", objectFit: "cover" }}
            alt="logo"
          />
        </Box>
      </Box>
    </>
  );
};

export default Soution;
