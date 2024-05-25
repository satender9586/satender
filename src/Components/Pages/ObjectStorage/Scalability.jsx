import { Box, Typography } from "@mui/material";
import React from "react";

import Manage from "../../../assets/Pages/Scalability.svg";
import Infa from "../../../assets/Pages/databases.svg";





const Scalability = () => {
  return (
    <Box sx={{ padding: "0rem 3rem" ,paddingBottom:"3.5rem",paddingTop:"3.5rem"}}>
      <Typography sx={{ fontSize: "45px", textAlign: "center",  }}>
      Enjoy Unlimited Scalability
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
            limitless scalability
            </Typography>
           </Box>
           <Box display={"flex"} justifyContent={"center"} >
            <Typography fontSize={"15px"}  letterSpacing={1} color={"#6F7F8F"}>
            tore data with ease and affordability, using  
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"} >
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            highly scalable Object Storage solutions and             </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"} >
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            experience limitless scalability with a flexible            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"} >
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            pricing model.          </Typography>
          </Box>
        </Box>
        <Box  gap={2}>
          <Box display={"flex"} justifyContent={"center"}  mt={"5px"}>
          <img src={Infa} alt="access" width={50} height={50}/>
          </Box>
          <Box  display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"31px"} padding={"0px"}>
            Ideal for databases
            </Typography>
            </Box>
            <Box  display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"} letterSpacing={1} color={"#6F7F8F"}>
            Ideal for databases, virtual machines, disaster 
            </Typography>
          </Box>
          <Box  display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"}  letterSpacing={1} color={"#6F7F8F"}>
            recovery, high-performance computing, media,             </Typography>
          </Box>
          <Box  display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"15px"}  letterSpacing={1} color={"#6F7F8F"}>
            AI/ML, e-commerce, finance, and healthcare and more.            </Typography>
          </Box>
        </Box>
        
      </Box>
    </Box>
  );
};

export default Scalability;
