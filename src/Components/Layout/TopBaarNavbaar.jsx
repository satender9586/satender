import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button, Grid, Typography } from "@mui/material";
import phoneimg from "../../assets/Home/phone.svg";
import { useNavigate } from "react-router-dom";

const TopBaarNavbaar = () => {

  const navigate = useNavigate()

  return (
    <>
      <Box >
        <AppBar
          position="static"
          sx={{ boxShadow: "none",display:{xs:"none",lg:"block"}}}
        >
          <Toolbar
            variant="dense"
            sx={{
              gap: { xs: 1, md: 8, lg: 20 },
              bgcolor: "#F5F7FA",
              boxShadow: "none",
              color: "black",
            }}
          >
            <Box variant="h6" component="div" sx={{ flex: 5 }} >
              <Box>
                <Grid container  >
                  <Grid
                    item
                    xs={12}
                    sm={7}
                    md={5}
                    lg={4}
                    
                    sx={{ display: "flex", gap: 2, alignItems: "center" }}
                  >
                    <Box>
                      <img src={phoneimg} width={"16px"} alt="phone" />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "Center" }} >
                      <Typography sx={{ fontSize: "14px", color: "#6F7F8F" }}>
                        +91 01204448182
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={5} sm={12} md={3}  lg={5} xl={4} display={{xs:"none",lg:"block"}}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography sx={{ fontSize: "14px", color: "#6F7F8F" }}>
                        Great Place to Work - Certified
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={3} sm={5} md={4}  lg={3} xl={4} display={{ xs:"none",sm:"block",lg:"block"}}>
                    <Box>
                      <Button
                        sx={{
                          
                          minWidth: "0px",
                          maxHeight: "0px",
                          textTransform: "capitalize",
                          fontSize: "13px",
                          color:"#7489A0"
                        }}
                        variant="text"
                      >
                        We are Hiring
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
































            <Box variant="h6" component="div" sx={{ flex: 5 }} >
              <Box>
                <Grid
                sx={{display:"flex",justifyContent:"flex-end"}}
                  container
                
                  columnSpacing={{ xs: 1, sm: 1, md: 2 ,lg:3,xl:3}}
                >
                  <Grid item xs={12} display={{xs:"none",md:"block"}} sm={2} md={2} lg={2}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#6F7F8F",
                        textAlign: "center",
                      }}
                    >
                      Partners
                    </Typography>
                  </Grid>
                  <Grid item xs={12} display={{xs:"none",md:"block",xl:"block"}} sm={2} md={2} lg={2} >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#6F7F8F",
                        textAlign: "center",
                      }}
                    >
                      FAQ
                    </Typography>
                  </Grid>
                  <Grid item xs={12} display={{xs:"none",md:"none",xl:"block"}}  sm={2} md={12} lg={2}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#6F7F8F",
                        textAlign: "center",
                      }}
                    >
                      API Docs
                    </Typography>
                  </Grid>
                  <Grid item xs={12} display={{xs:"none",md:"block"}} sm={2} md={2} lg={2}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#6F7F8F",
                        textAlign: "center",
                      }}
                    >
                      Docs
                    </Typography>
                  </Grid>
                  <Grid item xs={12} display={{xs:"none",md:"block"}} sm={2} md={2} lg={2}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#6F7F8F",
                        textAlign: "center",
                      }}
                    >
                      Contact
                    </Typography>
                  </Grid>
                  <Grid item xs={2}    sm={2}  lg={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Button
                      // onClick={()=>navigate("/login")}
                      color="inherit"
                      sx={{
                        padding: "0px",
                        minHeight:"0px",
                        fontSize: "14px",
                        minWidth:"0px",
                        maxWidth:"0px",
                        textTransform: "capitalize",
                        maxHeight: "0px",
                        color: "#6F7F8F",
                      }}
                    >
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default TopBaarNavbaar;
