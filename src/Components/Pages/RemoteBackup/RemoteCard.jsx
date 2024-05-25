import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import Access from "../../../assets/Pages/RemoteBackup/Access.svg";
import Security from "../../../assets/Pages/RemoteBackup/Security.svg";
import CardContent from "@mui/material/CardContent";

const RemoteCard = () => {
  return (
    <Box sx={{ padding: "0rem 3rem", paddingBottom: "2.5rem" }}>
      <Typography sx={{ textAlign: "Center", fontSize: "35px" }}>
        Experience Value-Added Features
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
                <img src={Access} alt="access" width={50} height={50} />
              </Box>
            </Box>
            <Typography sx={{ fontSize: "20px", textAlign: "Center" }}>
              Accessible Anywhere
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
              Access your data from anywhere, at any time. Whether you're
              working remotely, on the go, or in the office, you can rest
              assured that your data is always within reach.
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
                <img src={Security} alt="access" width={50} height={50} />
              </Box>
            </Box>
            <Typography sx={{ fontSize: "20px", textAlign: "Center" }}>
              Data Integrity and Security
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
              Our team of experts is here to help you with any questions or
              concerns. This ensures that you always have the support you need
              to keep your data safe and secure.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default RemoteCard;
