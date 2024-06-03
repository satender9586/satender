import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import React from "react";
import banner from "../../assets/Home/Banner.webp";

const Header = () => {
  return (
    <>
      <Box sx={{ position: "relative" }}   height={{ xs:"500px",sm:"530px", lg: "550px", xl: "550px" }}>
        <Box display={{ xs: "none",md:"block", lg: "block" }} >
          <Box
            component={"img"}
            sx={{
              width: "100%",
              height: {md:"550px", lg: "550px", xl: "550px" },
              backgroundSize: "center",
              backgroundPosition: "center",
            }}
            src={banner}
          />
        </Box>
        <Box
        height={{ xs:"500px", lg: "550px", xl: "550px" }}
          sx={{
            position: {
              xs: "relative",
              md:"absolute",
              lg: "absolute",
             
            },
            bgcolor: {
              xs: "linear-gradient(90deg, hsla(51, 76%, 97%, 1) 0%, hsla(235, 90%, 92%, 1) 100%)",
              lg: "none",
            },
            top: {
              xs: "0%",sm:"0%",md:"20%",lg:"30%",xl:"",
              lg: "30%",
            },
            left: {
              xs: "0px",
              lg: "23px",
            },
            width: {
              xs: "100%",
              lg: "auto",
            },
            height: {
              xs: "auto",
            },
            padding: {
              xs: "20px",
              lg: "0px",
            },
          }}
        >
          <Box mt={{ xs: "1rem", md: "auto" }} >
            <Typography
              sx={{
                color: "#07439C",
                fontWeight: "500",
                fontSize: { xs: "30px",sm:"45px", md: "50px",lg:"50px" },
                lineHeight: { xs: "36px",sm:"70px", md: "auto" },
                fontFamily: "poppins",
              }}
            >
              Transforming Cloud
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#07439C",
                fontWeight: "500",
                fontSize: { xs: "30px",sm:"45px", md: "50px",lg:"50px" },
                lineHeight: { xs: "37px",sm:"66px", md: "auto",lg:"auto" },
                fontFamily: "poppins",
              }}
            >
              Quick, Safe and Economical
            </Typography>
          </Box>
          <Box mt={{ xs: "0.7rem", md: "auto" }}>
            <Typography
              sx={{
                color: "#0066FF",
                fontSize: { xs: "16px",sm:"23px", md: "19px" },
                lineHeight: { xs: "28px",sm:"35px", md: "48px",lg:"25px" },
                fontFamily: "poppins",
              }}
            >
              Appreciate the end of expensive setups, demanding services, and
              laziness.
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#0066FF",
                fontSize: { xs: "16px",sm:"23px", md: "19px" },
                lineHeight: { xs: "28px",sm:"37px", md: "28px", lg: "40px" },
                fontFamily: "poppins",
              }}
            >
              Cloud Data is your solution for a smooth, user-friendly cloud
              experience.
            </Typography>
          </Box>
          <Grid
            container
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
              },
              gap: 2,
            }}
          >
            <Grid item sx={{ mt: "1rem" }}>
              <Button
                sx={{
                  padding: { xs: "10px 35px", md: "0.5rem 2rem" },
                  width: { xs: "100%", md: "auto" },
                  fontFamily: "poppins",
                  textTransform: "capitalize",
                  bgcolor: "#1B58BD",
                  fontSize: "20px",
                }}
                variant="contained"
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Header;
