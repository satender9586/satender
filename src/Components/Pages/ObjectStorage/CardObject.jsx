import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import Read from "../../../assets/Pages/Read.svg";
import Custom from "../../../assets/Pages/Customize.svg";
import CardContent from "@mui/material/CardContent";

const CardObject = () => {
  return (
    <Box sx={{ padding: "0rem 3rem", paddingBottom: "2.5rem" }}>
      <Typography sx={{ textAlign: "Center", fontSize: "35px" }}>
        Experience Value-Added Features
      </Typography>
      <Box
        padding={"2rem"}
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Card
          sx={{
            maxWidth: 340,

            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <CardContent>
            <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
              <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
                <img src={Read} alt="access" width={50} height={50} />
              </Box>
            </Box>
            <Typography sx={{ fontSize: "20px", textAlign: "Center" }}>
              Reliability
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                textAlign: "Center",
                lineHeight: "23px",
                letterSpacing: 1,
                mt: "0.4rem",
                color: "#677788",
              }}
            >
              Automatically clone your application data three times to ensure
              high availability and data durability.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 340,

            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <CardContent>
            <Box display={"flex"} justifyContent={"center"} padding={"1rem"}>
              <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
                <img src={Custom} alt="access" width={50} height={50} />
              </Box>
            </Box>
            <Typography sx={{ fontSize: "20px", textAlign: "Center" }}>
              Customizable Data Management
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                textAlign: "Center",
                lineHeight: "23px",
                letterSpacing: 1,
                mt: "0.4rem",
                color: "#677788",
              }}
            >
              Enabling you to customize storage solutions to meet the specific
              needs of your business.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default CardObject;
