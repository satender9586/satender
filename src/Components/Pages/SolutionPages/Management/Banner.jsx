import { Box, Typography } from "@mui/material";
import React from "react";
import phoneVersionImg from "../../../../assets/Pages/Solutionpage/SecuritySolution/phoneVersion.png";

const Banner = () => {
  return (
    <Box
      sx={{
        padding: "4rem 5%",
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "22px", sm: "25px", md: "40px" },
              fontWeight: 600,
              letterSpacing: 2,
            }}
          >
            Secure Access
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "22px", sm: "25px", md: "40px" },
              fontWeight: 600,
              letterSpacing: 2,
            }}
          >
            Management Made
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "22px", sm: "25px", md: "40px" },
              fontWeight: 600,
              letterSpacing: 2,
            }}
          >
            Easy for Teams
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "18px", md: "18px" },
              color: "#677788",
              letterSpacing: 1,
              lineHeight: "35px",
            }}
          >
            Simplify user management and secure your cloud
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "18px", md: "18px" },
              color: "#677788",
              letterSpacing: 1,
              lineHeight: "35px",
            }}
          >
            resources with our easy-to-use solutions. Customize
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "18px", md: "18px" },
              color: "#677788",
              letterSpacing: 1,
              lineHeight: "35px",
            }}
          >
            user policies and control access with role-based security
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "18px", md: "18px" },
              color: "#677788",
              letterSpacing: 1,
              lineHeight: "35px",
            }}
          >
            for enhanced security and authorized user access.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box display={"flex"} alignItems={"center"}>
          <Box
            component={"img"}
            src={phoneVersionImg}
            alt="phoneversion-img"
            height={"60%"}
            width={"100%"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
