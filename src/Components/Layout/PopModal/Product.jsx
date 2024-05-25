import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import img from "../../../assets/Home/Vector.png";
import StorageSection from "./ProductSection/StorageSection";
import NetworkingSection from "./ProductSection/NetworkingSection";
import DataBaseSection from "./ProductSection/DataBaseSection";
import ComputeSection from "./ProductSection/ComputeSection";

const Product = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Box
        display={"flex"}
        gap={"20px"}
        gridTemplateColumns={"repeat(2,1fr)"}
        padding={"1rem"}
      >
        <Box borderRight={"2px dotted #B1B1B1"} width={"400px"}>
          {[
            { name: "Compute", desc: " Maximize Computing Potential" },
            {
              name: "Storage",
              desc: " Unleash the power of the Smart Data Storage",
            },
            {
              name: "  networking",
              desc: "Transform your Networking with innovative solutions",
            },
            { name: " database", desc: " Powerful data management solution" },
          ].map((data, index) => (
            <Box
              borderBottom={"1.4px solid #B1B1B1"}
              padding={"2rem"}
              display={"flex"}
              gap={"10px"}
              bgcolor={index===value ? "whitesmoke" : ""}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img src={img} width={40} alt="logo" />
              </Box>
              <Box
                o
                onMouseEnter={() => setValue(index)}
                // onMouseLeave={handleLeave}
              >
                <Typography color={"#0066FF"} fontSize={"22px"}>
                  {data.name}
                </Typography>
                <Typography color={"#677797"} fontSize={"16px"}>
                  {data.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box>
          {value === 0 ? (
            <ComputeSection />
          ) : value === 1 ? (
            <StorageSection />
          ) : value === 2 ? (
            <NetworkingSection />
          ) : value === 3 ? (
            <DataBaseSection />
          ) : (
            ""
          )}
        </Box>
      </Box>
    </>
  );
};

export default Product;
