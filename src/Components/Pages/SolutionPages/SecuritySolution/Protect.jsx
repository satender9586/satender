import { Box, Button, Typography } from "@mui/material";
import React from "react";
import protecitonImg from "../../../../assets/Pages/Solutionpage/SecuritySolution/protectionone.png";

const Protect = () => {
  return (
    <Box sx={{ padding: "2rem 5%" }}>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "22px", sm: "25px", md: "40px" },

            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          Protect Your Business from Threats with
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "22px", sm: "25px", md: "40px" },

            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          Our Advanced Security Measures
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 4,
          padding: "2rem 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "25px" }}>Cloud Firewall</Typography>
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "18px", md: "18px" },
              letterSpacing: 1,
              color: "#6F7F8F",
            }}
          >
            Cloud firewall protects your network from unauthorized access and
            ensures secure communication between your cloud resources. With our
            firewall, you can create custom rules to control traffic and prevent
            threats from reaching your network.
          </Typography>
          <Button
            sx={{ width: " fit-content", mt: "0.5rem" }}
            variant="contained"
          >
            Know More
          </Button>
        </Box>
        <Box>
          <Box
            component={"img"}
            sx={{ width: "100%" }}
            alt="protection"
            src={protecitonImg}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 4,
          padding: "2rem 0",
        }}
      >
        <Box>
          <Box
            component={"img"}
            sx={{ width: "100%" }}
            alt="protection"
            src={protecitonImg}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "25px" }}>DDoS Protection</Typography>
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "18px", md: "18px" },
              letterSpacing: 1,
              color: "#6F7F8F",
            }}
          >
            DDoS protection solution keeps your applications and websites safe
            from malicious attacks, such as Distributed Denial of Service
            attacks. We use advanced algorithms to detect and block DDoS attacks
            before they can cause damage to your business.
          </Typography>
          <Button
            sx={{ width: " fit-content", mt: "0.5rem" }}
            variant="contained"
          >
            Know More
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 4,
          padding: "2rem 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "25px" }}>IPSEC Tunnel</Typography>
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "18px", md: "18px" },
              letterSpacing: 1,
              color: "#6F7F8F",
            }}
          >
            PSEC Tunnel solution encrypts all traffic between your cloud
            resources, ensuring secure communication between endpoints. With our
            IPSEC Tunnel, you can connect your cloud resources safely and
            securely, without worrying about data breaches or unauthorized
            access.
          </Typography>
          <Button
            sx={{ width: " fit-content", mt: "0.5rem" }}
            variant="contained"
          >
            Know More
          </Button>
        </Box>
        <Box>
          <Box
            component={"img"}
            sx={{ width: "100%" }}
            alt="protection"
            src={protecitonImg}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Protect;
