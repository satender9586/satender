import { Box, Typography } from "@mui/material";
import React from "react";
import img from "../../../../assets/Pages/DataBase/Sql/boost.svg";
import img1 from "../../../../assets/Pages/DataBase/Sql/flexible.svg";



const DataHandling= () => {
  return (
    <Box
      sx={{
        padding: "2rem 3rem 3rem 3rem",
        
      }}
    >
      <Typography sx={{ fontSize: "45px", textAlign: "center" }}>
      Simplify Data Handling
      </Typography>
      

      <Box
        sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(2, 1fr)" }}
        mt={"2rem"}
      >
        <Box gap={2}>
        <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
            <img src={img} alt="access" width={50} height={50} />
          </Box>
         
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"31px"} padding={"0px"}>
            Boost Productivity
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            Store, manage, and retrieve large amounts of  
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            data easily. MySQL streamlines business 
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            operations, makes better decisions, and 
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            increases productivity.
            </Typography>
          </Box>
          
         
        </Box>
        <Box gap={2}>
        <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
            <img src={img1} alt="access" width={50} height={50} />
          </Box>
          
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"31px"} padding={"0px"}>
            Flexible solution
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            Manage data across multiple systems and 
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            departments. It's a flexible solution that powers 
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            websites, e-commerce platforms, financial 
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            applications, and more.
            </Typography>
          </Box>
         
         
        </Box>
      </Box>
    </Box>
  );
};

export default DataHandling;
