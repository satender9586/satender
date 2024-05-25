import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import Img1 from "../../assets/Home/Cloud.svg";
import Img2 from "../../assets/Home/cloudename.svg";
import Img3 from "../../assets/Home/pngwing.svg";
import Img4 from "../../assets/Home/pngwing2.svg";
import Img5 from "../../assets/Home/google.svg";

const Growth = () => {
  return (
    <Box sx={{ bgcolor: "#EFF5FF", padding:{xs:"1rem 2rem 2rem",md: "2rem 3rem 3rem 3rem"} ,display:{xs:"none",md:"block"}}}>
      <Box >
        <Typography
          sx={{
            color: "#06439C",
            fontWeight: "500",
            textAlign: "Center",
            fontSize: {xs:"27px",md:"38px"},
            fontFamily:"poppins"
          }}
        >
          Attractive prices paired with lightning-fast
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            color: "#06439C",
            fontWeight: "500",
            textAlign: "Center",
            fontSize: {xs:"27px",md:"38px"},
            lineHeight:"38px",
            fontFamily:"poppins"
          }}
        >
          speed and efficiency.
        </Typography>
      </Box>
      <Box mt={"1.3rem"}>
        <Typography
          sx={{ color: "#0066FF", textAlign: "Center",  fontFamily:"poppins",fontSize: "18px" ,display:{xs:"none",md:"block"}}}
        >
          Get enterprise-grade solutions at the lowest cost in the market
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{ color: "#0066FF", textAlign: "Center", fontFamily:"poppins", fontSize: "18px" ,display:{xs:"none",md:"block"} }}
        >
          when you compare prices with competitors and get
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{ color: "#0066FF", textAlign: "Center", fontFamily:"poppins", fontSize: "18px" ,display:{xs:"none",md:"block"} }}
        >
          more features and services for your money
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "Center", mt: "1.5rem" }}>
        <Grid container>
          <Grid xs={1}  item>
            <Box>
              <img src={Img1} width={100} />
            </Box>
          </Grid>
          <Grid xs={2} item>
            <Box height={"100%"} sx={{mt:"0.8rem"}}>
              <img src={Img2} width={160} />
            </Box>
          </Grid>
          <Grid xs={9} item>
            <Box sx={{display:"flex",gap:1.5}}>
              <Box sx={{bgcolor:"#46B617",width:"13%",height:"48px",borderRadius:"5px"}}></Box>
              <Box sx={{display:"flex",alignItems:"center"}}><Typography sx={{fontSize:"21px" ,color:"#677788",marginRight:"10px"}}>Rs. 5000</Typography><Typography sx={{color:"#677788",marginRight:"10px"}}> / month</Typography></Box>
            </Box>
            <Box>
              <Box><Typography sx={{fontSize:"15px" ,color:"#677788",marginRight:"10px"}}>Cloud server - 8v CPU, 32 GB RAM, 480 GB Disk, 1000 GB Traffic</Typography></Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "Center", mt: "1rem" }}>
        <Grid container>
          <Grid xs={1} item >
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}>
              <img src={Img3} width={35} />
            </Box>
          </Grid>
          <Grid xs={2} item>
            <Box height={"100%"} sx={{display:"flex",alignItems:"center",paddingLeft:"15px"}}>
                <Typography sx={{color:"#677788",fontSize:"13px"}}>AWS</Typography>
            </Box>
          </Grid>
          <Grid xs={9} item>
            <Box sx={{display:"flex",gap:1.5}}>
              <Box sx={{bgcolor:"#FFC700",width:"37%",height:"48px",borderRadius:"5px"}}></Box>
              <Box sx={{display:"flex",alignItems:"center"}}><Typography sx={{fontSize:"21px" ,color:"#677788",marginRight:"10px"}}>Rs. 24,880</Typography><Typography sx={{color:"#677788",marginRight:"10px"}}> / month</Typography></Box>
            </Box>
            <Box>
              <Box><Typography sx={{fontSize:"15px" ,color:"#677788",marginRight:"10px"}}>Cloud server - 8v CPU, 32 GB RAM, 480 GB Disk, 1000 GB Traffic</Typography></Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "Center", mt: "1rem" }}>
        <Grid container>
          <Grid xs={1} item>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}>
              <img src={Img4} width={35} />
            </Box>
          </Grid>
          <Grid xs={2} item>
            <Box height={"100%"} sx={{display:"flex",alignItems:"center",paddingLeft:"15px"}}>
                <Typography sx={{color:"#677788",fontSize:"13px"}}>Azure</Typography>
            </Box>
          </Grid>
          <Grid xs={9} item>
            <Box sx={{display:"flex",gap:1.5}}>
              <Box sx={{bgcolor:"#FB6F09",width:"59%",height:"48px",borderRadius:"5px"}}></Box>
              <Box sx={{display:"flex",alignItems:"center"}}><Typography sx={{fontSize:"21px" ,color:"#677788",marginRight:"10px"}}>Rs. 33,360 </Typography><Typography sx={{color:"#677788",marginRight:"10px"}}>/ month</Typography></Box>
            </Box>
            <Box>
              <Box><Typography sx={{fontSize:"15px" ,color:"#677788",marginRight:"10px"}}>Cloud server - 8v CPU, 32 GB RAM, 480 GB Disk, 1000 GB Traffic</Typography></Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "Center", mt: "1rem" }}>
        <Grid container>
          <Grid xs={1} item>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}>
              <img src={Img5} width={35} />
            </Box>
          </Grid>
          <Grid xs={2} item>
            <Box height={"100%"} sx={{display:"flex",alignItems:"center",paddingLeft:"15px"}}>
                <Typography sx={{color:"#677788",fontSize:"13px"}}>GCP</Typography>
            </Box>
          </Grid>
          <Grid xs={9} item>
            <Box sx={{display:"flex",gap:1.5}}>
              <Box sx={{bgcolor:"#E81C0E",width:"69%",height:"48px",borderRadius:"5px"}}></Box>
              <Box sx={{display:"flex",alignItems:"center"}}><Typography sx={{fontSize:"21px" ,color:"#677788",marginRight:"10px"}}>Rs. 35,500 </Typography><Typography sx={{color:"#677788",marginRight:"10px"}}>/ month</Typography></Box>
            </Box>
            <Box>
              <Box><Typography sx={{fontSize:"15px" ,color:"#677788",marginRight:"10px"}}>Cloud server - 8v CPU, 32 GB RAM, 480 GB Disk, 1000 GB Traffic</Typography></Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Growth;
