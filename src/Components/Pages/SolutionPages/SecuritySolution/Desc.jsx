import { Box, Button, Typography } from "@mui/material";
import React from "react";
import phoneVersionImg from "../../../../assets/Pages/Solutionpage/SecuritySolution/phoneVersion.png"

const Desc = () => {
  return (
    <Box sx={{ padding: "2rem 5%" }}>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" ,gap:6}}>
        <Box display={"flex"} alignItems={"center"}>
          <Box component={"img"} src={phoneVersionImg} alt="phoneversion-img" height={"70%"} width={"100%"}/>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "25px", fontWeight: 600 }}>
            Why Security Solutions
          </Typography>
          <Box sx={{ display: "flex", gap: 3, mt: "0.8rem" }}>
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
              mt={"0.4rem"}
            >
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "100%",
                  bgcolor: "#6F7F8F",
                  padding: "0.6rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "10px",
                }}
              >
                1
              </Box>
              <Box
                sx={{
                  height: "100%",
                  borderLeft: "3px dotted #6F7F8F",
                  mt: "0.5rem",
                }}
              ></Box>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                Protect Business from Cyber Threats
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "30px",
                  color: "#6F7F8F",
                  letterSpacing: 0.5,
                }}
              >
                In today's digital age, businesses are constantly at risk of
                cyber threats such as hacking, malware, and phishing attacks.
                Without proper security measures in place, your business can be
                vulnerable to these threats, which can result in significant
                financial losses and reputational damage.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 3, mt: "0.8rem" }}>
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
              mt={"0.4rem"}
            >
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "100%",
                  bgcolor: "#6F7F8F",
                  padding: "0.6rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "10px",
                }}
              >
                2
              </Box>
              <Box
                sx={{
                  height: "100%",
                  borderLeft: "3px dotted #6F7F8F",
                  mt: "0.5rem",
                }}
              ></Box>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                Compliance and Regulations
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "30px",
                  color: "#6F7F8F",
                  letterSpacing: 0.5,
                }}
              >
                Many industries have strict regulations regarding data security
                and privacy. Failing to comply with these regulations can result
                in huge fines, legal action, and damage to your reputation.
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "30px",
                  color: "#6F7F8F",
                  letterSpacing: 0.5,
                  mt:"0.2rem"
                }}
              >
                By investing in our security solutions, you can ensure that your
                business is fully compliant with all relevant regulations and
                standards.
              </Typography>
              <Box sx={{padding:"0.5rem 0"}}>
                <Button variant="contained">Secure your Business</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Desc;
