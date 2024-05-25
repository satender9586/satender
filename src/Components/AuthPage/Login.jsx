import React from "react";
import loginn from "../../assets/Home/LOGIN.png";
import google from "../../assets/Home/google.svg";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import claudyImg from "../../assets/Home/clody.svg";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export default function Login() {
  return (
    <>
      <Box height={"100vh"} sx={{ overflow: "hidden" }}>
        <Grid container>
          <Grid xs={8} height={"100%"}>
            <img
              width={"100%"}
              height={"559px"}
              style={{ objectFit: "cover" }}
              src={loginn}
              alt="Login Image"
            />
          </Grid>
          <Grid
            xs={4}
            sx={{
              flexGrow: 1,
              background:
                "linear-gradient(-90.98deg, #d7d7d7 37%, rgba(115, 115, 115, 0) 111.5% )",
            }}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <img src={claudyImg} width={250} alt="cludy" />
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
              <Typography color={"#6F7F8F"} fontSize={24} fontWeight={600}>
                Create an Account
              </Typography>
            </Box>

            <Box>
              <form>
              <Box sx={{padding:"0 2rem",display:"flex",flexDirection:"column",gap:"2rem",mt:"2rem"}}>
              <TextField
                  id="outlined-basic"
                  label="Full name"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Enter Email"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label=" Password"
                  variant="outlined"
                  fullWidth
                />
              </Box>

                <Box padding={"1rem 2rem"} display={"flex"} justifyContent={"space-between"}>
                  <Button
                    style={{
                        color: "#6F7F8F",
                        backgroundColor: "white",
                        height: "35px",
                      }}
                  >
                    <img src={google} width={20} alt="google" />
                    <Typography fontSize={12} fontWeight={500}>
                      continue with Google
                    </Typography>
                  </Button>
                  <Button
                    
                    variant="contained"
                  >
                    Create Account
                  </Button>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
