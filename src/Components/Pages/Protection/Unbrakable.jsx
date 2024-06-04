import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { FaCloud } from "react-icons/fa";
import { BsStopwatchFill } from "react-icons/bs";
import { FaShieldVirus } from "react-icons/fa6";
import { FaStopCircle } from "react-icons/fa";
import { LuCircuitBoard } from "react-icons/lu";

const Unbrakable = () => {
  const cardData = [
    {image:<BsStopwatchFill size={40}/>,name:"24/7 Monitoring",desc:"24/7 monitoring ensures continuous protection for your business against threats, keeping you secure  around the clock."},
    {image:<FaShieldVirus size={40}/>,name:"Block malicious traffic",desc:"Advanced firewall technology blocks all malicious traffic, providing robust security for your business infrastructure."},
    {image:<FaStopCircle size={40}/>,name:"Preventive Defense",desc:"Proactive defense mechanisms detect and prevent attacks before they happen, keeping your business safe and secure."},
    {image:<LuCircuitBoard size={40}/>,name:"Scalability",desc:"Scalable solutions adapt to the changing needs of your business, providing optimal security as you grow and expand."},
  ]
  return (
    <Box sx={{ padding: { xs: "0rem 4%", md: "0rem  5% 3rem   5%" } }}>
      <Typography
        sx={{
          fontSize: { xs: "26px", md: "30px", lg: "40px" },
          fontWeight: 500,
          letterSpacing: { XS: 3, md: 2, lg: 2 },
          textAlign: "center",
          lineHeight: 1,
        }}
      >
        Stay ahead of hackers with
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "26px", md: "30px", lg: "40px" },
          fontWeight: 500,
          letterSpacing: { XS: 3, md: 2, lg: 2 },
          textAlign: "center",
          lineHeight: 1,
        }}
      >
        unbreakable security
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "17px", md: "20px" },
          letterSpacing: 0,
          textAlign: "center",
          color: "#677788",
        }}
      >
        Stay ahead of hackers to keep your business running with cloud-based
        DDoS protection that automatically detects and mitigates attacks,
        ensuring uninterrupted service for your valuable users.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 10,
          gridTemplateColumns: "repeat(2, 1fr)",
          mt: "1.5rem",
        }}
      >
        {cardData?.map((data,index) => (
          <Box key={index}>
            <Grid container>
              <Grid item xs={1}>
                <Box>
                  {data.image}
                </Box>
              </Grid>
              <Grid item xs={11} paddingLeft={"1.5rem"}>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "20px" },
                    letterSpacing: 1,
                  }}
                >
                 {data.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "14px" },
                    letterSpacing: 1,

                    color: "#6F7F8F",
                  }}
                >
                 {data.desc}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Unbrakable;
