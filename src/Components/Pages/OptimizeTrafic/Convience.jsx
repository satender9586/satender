import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import Access from "../../../assets/Pages/RemoteBackup/Access.svg";
import Security from "../../../assets/Pages/RemoteBackup/Security.svg";
import CardContent from "@mui/material/CardContent";

const Convience = () => {
  return (
    <Box sx={{ padding: "2rem 5%",paddingBottom:"3.8rem" }} bgcolor={"#F7FAFF"}>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "26px", md: "30px", lg: "40px" },
            fontWeight: 500,
            letterSpacing: { XS: 3, md: 2, lg: 2 },
            textAlign: "center",
          }}
        >
          Enjoy the convenience of monthly billing cycles.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "17px", md: "20px" },
            letterSpacing: 0,
            textAlign: "center",
            color: "#677788",
            mt:"1rem"
          }}
        >
          Maximize savings with annual billing cycles.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 6, mt: "3rem", alignItems: "center" }}>
        {[1, 2, 3, 4].map((data) => (
          <Card
            key={data}
            sx={{
              maxWidth: "100%",
              borderRadius: 4,
              boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <CardContent>
              <Box display={"flex"} justifyContent={"center"} padding={"0.5rem"}>
                <Box display={"flex"} justifyContent={"center"} mt={"5px"}>
                  <img src={Security} alt="access" width={50} height={50} />
                </Box>
              </Box>
              <Typography sx={{ fontSize: "18px", textAlign: "Center" }}>
                Transparent Cost Estimation
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
                Cost efficiency and scalability with payment based on actual
                traffic handled.
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Convience;
