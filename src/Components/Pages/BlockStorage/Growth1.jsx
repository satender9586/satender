import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import Img1 from "../../../assets/Home/Cloud.svg";
import Img2 from "../../../assets/Home/cloudename.svg";
import Img3 from "../../../assets/Home/pngwing.svg";
import Img4 from "../../../assets/Home/pngwing2.svg";
import Img5 from "../../../assets/Home/google.svg";

const Growth1 = () => {
  return (
    <Box
      sx={{
        bgcolor: "#EFF5FF",
        padding: "2rem 3rem",
        paddingBottom: "3rem",
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "black",
            fontWeight: "400",
            textAlign: "Center",
            fontSize: "40px",
          }}
        >
          Why Cloude Data For Cloud Block Storage
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            color: "#677788",
            textAlign: "Center",
            fontSize: "19px",
            letterSpacing: "0.1rem",
          }}
        >
          Compare and evaluate different storage options and find out how Cloude
          Data is more reliable
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            color: "#677788",
            textAlign: "Center",
            fontSize: "19px",
           
          }}
        >
          than other providers and make an informed decision on which solution
          best meets your needs.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "Center", mt: "1.5rem" }}>
        <Grid container>
          <Grid xs={1} item>
            <Box>
              <img src={Img1} width={100} />
            </Box>
          </Grid>
          <Grid xs={2} item>
            <Box height={"100%"} sx={{ mt: "0.8rem" }}>
              <img src={Img2} width={160} />
            </Box>
          </Grid>
          <Grid xs={9} item>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <Box
                sx={{
                  bgcolor: "#46B617",
                  width: "13%",
                  height: "48px",
                  borderRadius: "5px",
                }}
              ></Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: "21px",
                    color: "#677788",
                    marginRight: "10px",
                  }}
                >
                  Rs. 6000
                </Typography>
                <Typography sx={{ color: "#677788", marginRight: "10px" }}>
                  {" "}
                  / month
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#677788",
                    marginRight: "10px",
                  }}
                >
                  Cloud server - 8v CPU, 32 GB RAM, 480 GB Disk, 1000 GB Traffic
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "Center", mt: "1rem" }}>
        <Grid container>
          <Grid xs={1} item>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <img src={Img3} width={35} />
            </Box>
          </Grid>
          <Grid xs={2} item>
            <Box
              height={"100%"}
              sx={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "15px",
              }}
            >
              <Typography sx={{ color: "#677788", fontSize: "13px" }}>
                AWS
              </Typography>
            </Box>
          </Grid>
          <Grid xs={9} item>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <Box
                sx={{
                  bgcolor: "#FFC700",
                  width: "37%",
                  height: "48px",
                  borderRadius: "5px",
                }}
              ></Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: "21px",
                    color: "#677788",
                    marginRight: "10px",
                  }}
                >
                  Rs. 24,880
                </Typography>
                <Typography sx={{ color: "#677788", marginRight: "10px" }}>
                  {" "}
                  / month
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#677788",
                    marginRight: "10px",
                  }}
                >
                  Cloud server - 8v CPU, 32 GB RAM, 480 GB Disk, 1000 GB Traffic
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "Center", mt: "1rem" }}>
        <Grid container>
          <Grid xs={1} item>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <img src={Img4} width={35} />
            </Box>
          </Grid>
          <Grid xs={2} item>
            <Box
              height={"100%"}
              sx={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "15px",
              }}
            >
              <Typography sx={{ color: "#677788", fontSize: "13px" }}>
                Azure
              </Typography>
            </Box>
          </Grid>
          <Grid xs={9} item>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <Box
                sx={{
                  bgcolor: "#FB6F09",
                  width: "59%",
                  height: "48px",
                  borderRadius: "5px",
                }}
              ></Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: "21px",
                    color: "#677788",
                    marginRight: "10px",
                  }}
                >
                  Rs. 33,360{" "}
                </Typography>
                <Typography sx={{ color: "#677788", marginRight: "10px" }}>
                  / month
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#677788",
                    marginRight: "10px",
                  }}
                >
                  Cloud server - 8v CPU, 32 GB RAM, 480 GB Disk, 1000 GB Traffic
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "Center", mt: "1rem" }}>
        <Grid container>
          <Grid xs={1} item>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <img src={Img5} width={35} />
            </Box>
          </Grid>
          <Grid xs={2} item>
            <Box
              height={"100%"}
              sx={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "15px",
              }}
            >
              <Typography sx={{ color: "#677788", fontSize: "13px" }}>
                GCP
              </Typography>
            </Box>
          </Grid>
          <Grid xs={9} item>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <Box
                sx={{
                  bgcolor: "#E81C0E",
                  width: "69%",
                  height: "48px",
                  borderRadius: "5px",
                }}
              ></Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: "21px",
                    color: "#677788",
                    marginRight: "10px",
                  }}
                >
                  Rs. 35,600{" "}
                </Typography>
                <Typography sx={{ color: "#677788", marginRight: "10px" }}>
                  / month
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#677788",
                    marginRight: "10px",
                  }}
                >
                  Cloud server - 8v CPU, 32 GB RAM, 480 GB Disk, 1000 GB Traffic
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Growth1;
