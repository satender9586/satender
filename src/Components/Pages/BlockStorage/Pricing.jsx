import { Box, Typography, Button } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";





const Pricing = () => {
  return (
    <Box bgcolor={"#F7FAFF"} sx={{ padding: "0rem 3rem" ,paddingBottom:"2.5rem"}}>
      <Typography sx={{ fontSize: "35px",fontWeight:"500", textAlign: "center" }}>
      Pricing
      </Typography>
     
      <Typography
        sx={{ fontSize: "22px", textAlign: "center", color:"#677788" }}
      >
No additional costs. Pay for what you use.      </Typography>

    <Box 
            sx={{ display: "grid", gap: 3, gridTemplateColumns: "repeat(2, 1fr)" }}
            mt={"0.1rem"}
        >
         <Box
        sx={{ display: "grid",justifyContent:"center",alignItems:"end"  }}
        mt={"1rem"}
      >
       <Card
        sx={{
        //   minWidth: "100%",
        //   minHeight: "100px",
        width:"494px",
        height:"329px",
          borderRadius: "5px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
         
        }}
      >
        <CardContent 
        >
        
          <Box sx={{ display: "flex", justifyContent: "flex-start", mt: "1rem" }}>
          <Typography sx={{ fontSize: "65px",fontWeight:"600", textAlign: "center" }}>
          Rs.5.00
      </Typography>
      <Box  height={80} display={"grid"} alignContent={"end"} >
      <Typography sx={{ fontSize: "20px",fontWeight:"500",  }}>
      /GB per month
      </Typography>
      
      
      
    
      </Box>
    
     
          </Box>
          <Box  sx={{ display: "flex", justifyContent: "flex-start", mt: "0.6rem" }}>
         
          <Typography sx={{ fontSize: "20px",fontWeight:"500",color:"#677788"}}>
      Start using block storage
      </Typography>
     
          </Box>
          <Box paddingTop={"1rem"}>
          <Button
                  variant="contained"
                  sx={{ textTransform: "capitalize" }}
                >
                  Get Started
                </Button>
                </Box>
        </CardContent>
      </Card>
      </Box>


      <Box 
        sx={{ display: "grid", gap: 3, gridTemplateColumns: "repeat(2, 1fr)",  }}
        mt={"2rem"}
      >
        <Box display={"flex"} alignItems={"start"} >
          {/* <Box mt={"5px"}>
           
            <img src={Access} alt="access" width={50} height={50}/>
          </Box> */}
          <Box>
            <Typography fontSize={"20px"} fontWeight={500} padding={"0px"}>
            Boot from a Block Storage Volume
            </Typography>
            <Typography fontSize={"14px"}  letterSpacing={1} color={"#6F7F8F"}>
            Block storage volumes are presented 
as a regular drive to your Server. This 
means you can netboot from it or use 
it as your root directory.
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"start"} >
         
          <Box>
            <Typography fontSize={"20px"} fontWeight={500} padding={"0px"}>
            Add Volumes to Your Configuration 
Profile
            </Typography>
            <Typography fontSize={"14px"}  letterSpacing={1} color={"#6F7F8F"}>
            Easily map volumes to your Servers by 
changing the order in which the drives are 
presented inside the Server.
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"start"} gap={2}>
          
          <Box>
            <Typography fontSize={"20px"} fontWeight={500} padding={"0px"}>
            Block Storage Volumes Look Like 
Local Disks           </Typography>
            <Typography fontSize={"14px"}  letterSpacing={1} color={"#6F7F8F"}>
            Block storage volumes show up as if you 
plugged in a new drive to your Server. Format 
and use it just like a regular disk. No special 
software is required to use the service.
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"start"} >
          
          <Box>
            <Typography fontSize={"20px"} fontWeight={500} padding={"0px"}>
            Hot-Plug Volumes into and out of 
Running Servers
            </Typography>
            <Typography fontSize={"14px"} letterSpacing={1} color={"#6F7F8F"}>
            Work faster without reboots. Attach and 
detach events are seemingly instantaneous, 
allowing you to move drives between 
systems in seconds.
            </Typography>
          </Box>
        </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Pricing;
