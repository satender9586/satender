import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import { FaShield } from "react-icons/fa6";
import CardContent from "@mui/material/CardContent";

const TwoCardWithTitle = () => {
  return (
    <Box sx={{ padding: { xs: "0rem 4%", md: "3rem  5% 3.5rem  5%" } }}>
      <Typography
        sx={{
          fontSize: { xs: "26px", md: "30px", lg: "40px" },
          fontWeight: 500,
          letterSpacing: { XS: 3, md: 2, lg: 2 },
          textAlign: "center",
          lineHeight: 1,
        }}
      >
        Unlock Connectivity
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "17px", md: "20px" },
          letterSpacing: 0,
          textAlign: "center",
          color: "#677788",
          mt: "1.2rem",
        }}
      >
        Experience seamless networking with versatile Public and Private IPs.
        Empower your digital
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "17px", md: "20px" },
          letterSpacing: 0,
          textAlign: "center",
          color: "#677788",
        }}
      >
        digital journey with Cloude Data comprehensive IP solutions.
      </Typography>
      <Box sx={{ mt: "3rem",display:"flex",justifyContent:"space-between" }}>
        {[1, 2].map((data) => (
          <Card
          key={data}
            sx={{
              maxWidth: 440,
              padding: "1rem 2rem",
              borderRadius: 1,
              boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "600",
                  textAlign: "Center",
                }}
              >
                Public IP
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  textAlign: "Center",
                 letterSpacing: 1,
                  mt: "0.4rem",
                  color: "#677788",
                  lineHeight: 1.8,
                }}
              >
                Embrace a globally accessible online presence with Public IP.
                Connect with the world, host servers, and reach your audience
                effortlessly.
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default TwoCardWithTitle;
