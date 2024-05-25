import { Box, Typography } from "@mui/material";
import React from "react";

import Manage from "../../../assets/Pages/Manage.svg";
import Infa from "../../../assets/Pages/Infa.svg";





const Unlock = () => {
  return (
    <Box sx={{ padding: "0rem 3rem" ,paddingBottom:"3.5rem",paddingTop:"3.5rem"}}>
      <Typography sx={{ fontSize: "45px", textAlign: "center",  }}>
      Unlock the full potential of your data storage
      </Typography>
    
     

      <Box
        sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(2, 1fr)" }}
        mt={"2rem"}
      >
        <Box  gap={2}>
          <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
            
            <img src={Manage} alt="access" width={50} height={50}/>
          </Box>
          <Box display={"flex"} justifyContent={"center"} >
            <Typography fontSize={"31px"} padding={"0px"}>
            Easily Manage
            </Typography>
           </Box>
           <Box display={"flex"} justifyContent={"center"} >
            <Typography fontSize={"15px"}  letterSpacing={1} color={"#6F7F8F"}>
            Store and retrieve data in fixed-size blocks or chunks, 
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"} >
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            perfect for optimal-performance.
            </Typography>
          </Box>
        </Box>
        <Box  gap={2}>
          <Box display={"flex"} justifyContent={"center"}  mt={"5px"}>
          <img src={Infa} alt="access" width={50} height={50}/>
          </Box>
          <Box  display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"31px"} padding={"0px"}>
            Existing infrastructure
            </Typography>
            </Box>
            <Box  display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            Advanced block storage solutions designed for high-
            </Typography>
          </Box>
          <Box  display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"}  letterSpacing={1} color={"#6F7F8F"}>
            performance, scalability, and seamless integration 
            </Typography>
          </Box>
          <Box  display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"}  letterSpacing={1} color={"#6F7F8F"}>
            with your existing infrastructure.
            </Typography>
          </Box>
        </Box>
        
      </Box>
    </Box>
  );
};

export default Unlock;
