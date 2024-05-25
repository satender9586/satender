import React from "react";
import picc from "../../../assets/Pages/Balanced.svg";
import { Box, Typography} from "@mui/material";
import Line from "../../../assets/Pages/Line77.svg";

const Balanced = () => {
  return (
    <>
      <Box
        display={"flex"}
        bgcolor={"#F7FAFF"}
        gridTemplateColumns={"repeat(2,1fr)"}
        sx={{ padding: "2rem 3rem" }}
        height={500}
      >
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          height={500}
          width={800}
          
        >
          <Box
          width={800} height={520}>
          <img src={picc} width={785} height={501} alt="logo" />
          </Box>
        </Box>

        <Box display={"inline-grid"} height={420} width={500}>
          <Box display={"flex"} justifyContent={"flex-start"}>
            <Typography
              sx={{
                fontSize: "26px",
              }}
            >
              Ensure Balanced Performance
            </Typography>
          </Box>
          <Box>
            <Box display={"flex"} gridTemplateColumns={"repeat(2,1fr)"}>
              <Box>
                <Box display={"flex"} alignItems="center">
                  <Box
                    bgcolor={"#D9D9D9"}
                    width={25}
                    height={25}
                    borderRadius={50}
                    textAlign={"center"}
                    sx={{ marginRight: 1 }}
                  >
                    <Typography>1</Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "22px",
                      justifyContent: "flex-start",
                    }}
                  >
                    Scalable and affordable
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box display={"flex"} gridTemplateColumns={"repeat(2,1fr)"}>
              <Box
                width={50}
                sx={{ marginRight: 2 }}
                display={"flex"}
                justifyContent={"flex-end"}
              >
                <img src={Line} width={2} height={140} alt="line" />
              </Box>
              <Box display={"flex"}>
                <Typography
                  sx={{
                    fontSize: "19px",
                    textAlign: "left",
                    color: "#2C425A",
                  }}
                >
                  Scalable and affordable shared CPU solution for balanced
                  performance. Increase computing power to meet changing demands
                  without additional hardware.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display={"flex"} gridTemplateColumns={"repeat(2,1fr)"}>
              <Box>
                <Box display={"flex"} alignItems="center">
                  <Box
                    bgcolor={"#D9D9D9"}
                    width={25}
                    height={25}
                    borderRadius={50}
                    textAlign={"center"}
                    sx={{ marginRight: 1 }}
                  >
                    <Typography>2</Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "22px",
                      justifyContent: "flex-start",
                    }}
                  >
                    Shared CPU technology
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box display={"flex"} gridTemplateColumns={"repeat(2,1fr)"}>
              <Box
                width={50}
                sx={{ marginRight: 2 }}
                display={"flex"}
                justifyContent={"flex-end"}
              >
                <img src={Line} width={2} height={140} alt="line" />
              </Box>
              <Box display={"flex"}>
                <Typography
                  sx={{
                    fontSize: "19px",
                    textAlign: "left",
                    color: "#2C425A",
                  }}
                >
                  Shared CPU technology is ideal for businesses like yours for
                  efficient resource management of multi-tenant hosting, VDI,
                  batch processing, web hosting and more.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Balanced;
