import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import img from "../../../../assets/Pages/DataBase/ManageDatabase/leaf.svg";
import img1 from "../../../../assets/Pages/DataBase/ManageDatabase/dolphin.svg";
import img2 from "../../../../assets/Pages/DataBase/ManageDatabase/image3.svg";
import CardContent from "@mui/material/CardContent";

const ManageCard = () => {
  return (
    <Box bgcolor={"#F7FAFF"} sx={{ padding: "2rem 3rem"}}>
      <Typography sx={{ textAlign: "Center", fontSize: "35px" }}>
      Fully-Managed Databases
      </Typography>
      <Box
        padding={"2rem"}
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Card
          sx={{
            maxWidth: 340,

            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <CardContent>
            <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
            <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
          
            <img src={img} alt="access" width={214} height={214}/>
          </Box>
            </Box>
           
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 340,

            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <CardContent>
            <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
            <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
           
            <img src={img1} alt="access" width={214} height={214}/>
          </Box>
            </Box>
          
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 340,

            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <CardContent>
            <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
            <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
           
            <img src={img2} alt="access" width={214} height={214}/>
          </Box>
            </Box>
          
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ManageCard;
