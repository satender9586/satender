import { Box, Typography } from "@mui/material";
import React from "react";
import circuleImg from "../../../assets/Pages/circule.webp";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const MemoryCard = () => {
  return (
    <>
      <Box
        my={"2.5rem"}
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: "repeat(4, 2fr)",
        }}
      >
        {[1, 2, 3, 4].map((data) => (
          <Box key={data}>
            <Card
              sx={{
                minWidth: "100%",
                borderRadius: 2,
                py: "0.5rem",
                boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                bgcolor: "#F5F7FA",
              }}
            >
              <CardContent>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <img width={60} src={circuleImg} alt="img" />{" "}
                  <Typography
                    textAlign={"center"}
                    fontSize={"17px"}
                    fontWeight={"600"}
                    mt={"1rem"}
                    color={"#06439C"}
                  >
                    Dedicated Resources
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="#0066FF"
                  textAlign={"center"}
                  fontSize={"16px"}
                  lineHeight={1.7}
                  mt={"0.3rem"}
                >
                  Exclusive access to dedicated CPUs and memory resources,
                  providing faster performance and greater control over resource
                  allocation.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default MemoryCard;
