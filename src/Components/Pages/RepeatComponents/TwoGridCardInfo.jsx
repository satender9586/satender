import { Box, Typography } from "@mui/material";
import React from "react";
import optimzetrafic1Img from "../../../assets/Pages/optimzetrafic1.png";

const TwoGridCardInfo = () => {
  return (
    <Box sx={{ padding: "2rem 5%" }}>
    <Box>
      <Typography
        sx={{
          fontSize: "40px",
          fontWeight: 500,
          letterSpacing: 2,
          textAlign: "center",
        }}
      >
        Distribute Workload - Prevent Overload
      </Typography>
    </Box>
    <Box
      sx={{
        display: "grid",
        gap: 20,
        gridTemplateColumns: "repeat(2, 1fr)",
        mt: "1rem",
      }}
    >
      <Box>
        <Box>
          <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
            <img src={optimzetrafic1Img} alt="optimze" />
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "26px" },
              letterSpacing: 0,
              textAlign: "center",
            }}
          >
            Optimize Workload Distribution
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "16px" },
              letterSpacing: 0,
              textAlign: "center",
              color: "#6F7F8F",
            }}
          >
            Distribute workload and avoid overloading a single server, which
            can lead to sluggish response times, downtime, and revenue loss.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box>
          <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
            <img src={optimzetrafic1Img} alt="optimze" />
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "26px" },
              letterSpacing: 0,
              textAlign: "center",
            }}
          >
            Robust Traffic Handling
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "16px" },
              letterSpacing: 0,
              textAlign: "center",
              color: "#6F7F8F",
            }}
          >
            Handle high traffic for e-commerce websites, online marketplaces,
            social networks, SaaS applications, and any other system that
            requires fast and reliable performance.
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
  )
}

export default TwoGridCardInfo