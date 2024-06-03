import { Box, Typography } from "@mui/material";
import React from "react";
import MemoryCard from "./MemoryCard";
import TabCart from "../Cpu/TabCart";

const EnterPrice = () => {
  return (
    <Box sx={{ padding: "2rem 3rem", paddingBottom: "3.5rem" }}>
      <Typography
        sx={{ textAlign: "center", fontSize: "35px", fontWeight: 500 }}
      >
        Enterprise-Grade Performance
      </Typography>
      <Typography
        sx={{
          fontSize: "17px",
          letterSpacing: 0,
          textAlign: "center",
          color: "#6F7F8F",
        }}
      >
        High Memory Instances built to provide enterprise-grade
      </Typography>
      <Typography
        sx={{
          fontSize: "17px",
          letterSpacing: 0,
          textAlign: "center",
          color: "#6F7F8F",
        }}
      >
        performance for memory-intensive workloads.
      </Typography>
      <MemoryCard />
      <TabCart />
    </Box>
  );
};

export default EnterPrice;
