import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { FaCloud } from "react-icons/fa";

const Unbrakable = () => {
  return (
    <Box sx={{ padding: { xs: "0rem 4%", md: "0rem  5% 3rem   5%" } }}>
      <Typography
        sx={{
          fontSize: { xs: "26px", md: "30px", lg: "40px" },
          fontWeight: 500,
          letterSpacing: { XS: 3, md: 2, lg: 2 },
          textAlign: "center",
          lineHeight: 1,
        }}
      >
        Stay ahead of hackers with
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "26px", md: "30px", lg: "40px" },
          fontWeight: 500,
          letterSpacing: { XS: 3, md: 2, lg: 2 },
          textAlign: "center",
          lineHeight: 1,
        }}
      >
        unbreakable security
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "17px", md: "20px" },
          letterSpacing: 0,
          textAlign: "center",
          color: "#677788",
        }}
      >
        Stay ahead of hackers to keep your business running with cloud-based
        DDoS protection that automatically detects and mitigates attacks,
        ensuring uninterrupted service for your valuable users.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 10,
          gridTemplateColumns: "repeat(2, 1fr)",
          mt: "1.5rem",
        }}
      >
        {[1, 2, 3, 4].map((data) => (
          <Box>
            <Grid container>
              <Grid item xs={1}>
                <Box>
                  <FaCloud size={40} />
                </Box>
              </Grid>
              <Grid item xs={11} paddingLeft={"1.5rem"}>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "20px" },
                    letterSpacing: 1,
                  }}
                >
                  24/7 Monitoring
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "14px" },
                    letterSpacing: 1,

                    color: "#6F7F8F",
                  }}
                >
                  24/7 monitoring ensures continuous protection for your
                  business against threats, keeping you secure around the clock.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Unbrakable;
