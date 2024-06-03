import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { FaCloud } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LuComputer } from "react-icons/lu";
import { FaFileContract } from "react-icons/fa";
import { FaPeace } from "react-icons/fa6";

const EncryptedData = () => {
  const Managementinfodata = [
    {
      image: <IoShieldCheckmarkOutline size={40} />,
      name: "Protection Against Data Loss ",
      desc: "Keep digital files safe from unforeseen events like cyberattacks, hardware failure, or human error.Rest assured that your valuable data is protected and recoverable.",
    },
    {
      image: <LuComputer size={40} />,
      name: "Business Continuity",
      desc: "Stay ahead of disruptions and quickly recover important data, minimizing downtime and ensuring business operations continue seamlessly.",
    },
    {
      image: <FaFileContract size={40} />,
      name: "Compliance with Regulations",
      desc: "Avoid legal penalties and comply with industry regulations requiring data retention and backup policies. Meet regulatory requirements and keep business operations running smoothly.",
    },
    {
      image: <FaPeace size={40} />,
      name: "Peace of Mind",
      desc: "Enjoy peace of mind knowing your critical data is safe, secure, and easily recoverable Focus on your core business activities, without worrying about data loss or cyberattacks.",
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
        Encrypted Data Backup
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "17px", md: "20px" },
          letterSpacing: 0,
          textAlign: "center",
          color: "#677788",
        }}
      >
        Experience an added layer of security, enjoy peace of mind knowing that
        
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "17px", md: "20px" },
          letterSpacing: 0,
          textAlign: "center",
          color: "#677788",
        }}
      >
       
        your valuable data is safe and encrypted.
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

export default EncryptedData;
