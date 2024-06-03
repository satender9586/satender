import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { FaCloud } from "react-icons/fa";

const Durable = ({ Managementinfodata }) => {
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
        Experience the Power of a Scalable
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "26px", md: "30px", lg: "40px" },
          fontWeight: 500,
          letterSpacing: { XS: 3, md: 2, lg: 2 },
          textAlign: "center",
        }}
      >
        and Durable Architecture
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "17px", md: "20px" },
          letterSpacing: 0,
          textAlign: "center",
          color: "#677788",
        }}
      >
        Seamlessly scale storage capacity as your data grows, ensuring high
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "17px", md: "20px" },
          letterSpacing: 0,
          textAlign: "center",
          color: "#677788",
        }}
      >
        data reliability and reducing data management complexity.
      </Typography>
      <Box
        sx={{
          display: "grid",
          gap: 10,
          gridTemplateColumns: "repeat(2, 1fr)",
          mt: "1.5rem",
        }}
      >
        {Managementinfodata?.map((data, index) => (
          <Box key={index}>
            <Grid container>
              <Grid item xs={1}>
                <Box>{data.image}</Box>
              </Grid>
              <Grid item xs={11} paddingLeft={"1.5rem"}>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "20px" },
                    letterSpacing: 1,
                  }}
                >
                  {data.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "14px" },
                    letterSpacing: 1,

                    color: "#6F7F8F",
                  }}
                >
                  {data.desc}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Durable;
