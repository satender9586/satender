import React from "react";
import picc from "../../../assets/Home/pricingg.svg";
import { Box, Typography } from "@mui/material";
import img from "../../../assets/Home/Vector.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  return (
    <>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            padding: "1.2rem",
            gap: 2,
          }}
        >
          {[1, 2, 3].map((data, index) => (
            <Box key={data}>
              <Card sx={{ maxHeight: "180px" }}>
                <CardActions onClick={() => navigate("/")}>
                  <CardContent>
                    <Box
                      padding={"0.5rem"}
                      display={"flex"}
                      gap={"20px"}
                      bgcolor={"white"}
                    >
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <img src={img} width={40} alt="logo" />
                      </Box>
                      <Box>
                        <Typography color="blue" fontSize={"20px"}>
                          Solution Overview
                        </Typography>

                        <Typography color={"#677797"}>
                          Maximize Computing Potential
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
        <Box>
          <img
            src={picc}
            style={{ width: "100%", objectFit: "cover" }}
            alt="logo"
          />
        </Box>
      </Box>
    </>
  );
};

export default Pricing;
