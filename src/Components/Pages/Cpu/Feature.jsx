import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import monitor from "../../../assets/Pages/monitor.png";
import CardContent from "@mui/material/CardContent";

const Feature = () => {
  return (
    <>
      <Box bgcolor={"#F7FAFF"} sx={{ padding: "2rem 5%" }}>
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: 500,
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          Achieve more with Advanced Features
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: 4,
            gridTemplateColumns: "repeat(4, 2fr)",
            my: "1rem",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => (
            <Box key={data}>
              <Card
                sx={{
                  maxWidth: "100%",
                  borderRadius: 2,
                  boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <CardContent>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <img width={50} src={monitor} alt="img" />{" "}
                    <Typography
                      textAlign={"center"}
                      fontSize={"17px"}
                      fontWeight={"600"}
                      paddingY={"0.4rem"}
                    >
                      SSH Keys
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign={"center"}
                    fontSize={"16px"}
                    lineHeight={1.5}
                  >
                    Automated, reliable data protection and quick recovery.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "Center", mt: "2.5rem" }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "10px",
              bgcolor: "#0094FF",
              textTransform: "capitalize",
              padding: "0.6rem 2.3rem",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            See all products
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Feature;
