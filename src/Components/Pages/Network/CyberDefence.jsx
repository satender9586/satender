import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { FaCloud } from "react-icons/fa";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { IoDocumentsOutline } from "react-icons/io5";;
import { FaUsers } from "react-icons/fa";
import { MdFireHydrantAlt } from "react-icons/md";

const CyberDefence = () => {
  const Managementinfodata = [
    {
      image: <FaCloudShowersHeavy size={40} />,
      name: "Advanced Network Protection",
      desc: "Shield your network against cyber threats and keep sensitive data secure with customizable  firewall rules.",
    },
    {
      image: <IoDocumentsOutline size={40} />,
      name: "Personalized Rulesets",
      desc: "Create custom rules for each server and easily add  up to 100 rules per ruleset. Enjoy peace of mind knowing your network is fully protected..",
    },
    {
      image: <FaUsers size={40} />,
      name: "User-Friendly Interface",
      desc: "Protect your network traffic without accessing the command line or learning complicated security protocols. Our User-friendly interface makes it easy to secure the network..",
    },
    {
      image: <MdFireHydrantAlt size={40} />,
      name: "Comprehensive Control",
      desc: "Filter traffic at the network layer using fine-grained control, ensuring only trusted sources can access your   network. Plus, use one active firewall per node for  maximum security.",
    },
  ];

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
        The Ultimate Cyber Defense to
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "26px", md: "30px", lg: "40px" },
          fontWeight: 500,
          letterSpacing: { XS: 3, md: 2, lg: 2 },
          textAlign: "center",
        }}
      >
        Secure Your Business
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "17px", md: "20px" },
          letterSpacing: 0,
          textAlign: "center",
          color: "#677788",
        }}
      >
        Protect Your Business with Advanced Threat Detection and Prevention to
        Stay Ahead of Cybercriminals
      </Typography>
      <Box
        sx={{
          display: "grid",
          gap: 10,
          gridTemplateColumns: "repeat(2, 1fr)",
          mt: "1.5rem",
        }}
      >
        {Managementinfodata.map((data,index) => (
          <Box key={index}>
            <Grid container>
              <Grid item xs={1}>
                <Box>
                  {data.image}
                </Box>
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

export default CyberDefence;
