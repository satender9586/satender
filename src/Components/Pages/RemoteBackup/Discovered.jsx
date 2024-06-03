import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { FaCloud } from "react-icons/fa";
import { GiSpeedometer } from "react-icons/gi";
import { GrVirtualStorage } from "react-icons/gr";
import { GrStorage } from "react-icons/gr";
import { RiPriceTag2Line } from "react-icons/ri";

const Discovered = () => {
  const Managementinfodata = [
    {
      image: <GiSpeedometer size={40} />,
      name: "Automated Backups",
      desc: "Automated backups that run seamlessly in the background. No more manual backups, no more human error risk, and no more downtime.",
    },
    {
      image: <GrVirtualStorage size={40} />,
      name: "Advanced Encryption",
      desc: "Advanced encryption methods to ensure data security during transit and at rest. With military-grade encryption,data is safe.",
    },
    {
      image: <GrStorage size={40} />,
      name: "Rapid Recovery",
      desc: "Recover your data quickly and easily in a disaster.Ensure that you can resume operations quickly, minimizing downtime and reducing revenue loss risk.",
    },
    {
      image: <RiPriceTag2Line size={40} />,
      name: "Scalable Solutions",
      desc: "Scalable to meet your needs, whether you're a small business or a large enterprise. Grow with your business,ensuring the right level of data protection.",
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
        The Ultimate Cyber Defense to
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
        {Managementinfodata?.map((data,index) => (
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

export default Discovered;
