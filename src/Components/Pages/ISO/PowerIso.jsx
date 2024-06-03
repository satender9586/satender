import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { FaCloud } from "react-icons/fa";
import { FaRegImages } from "react-icons/fa6";
import { GrVirtualStorage } from "react-icons/gr";
import { GrStorage } from "react-icons/gr";
import { RiPriceTag2Line } from "react-icons/ri";
import { RiProgress8Fill } from "react-icons/ri";
import { BsToggles } from "react-icons/bs";
import { FaFileUpload } from "react-icons/fa";

const PowerIso = () => {
  const Managementinfodata = [
    {
      image: <FaRegImages size={40} />,
      name: "Easy Replication",
      desc: "Create identical ISO storage images for effortless software and OS replication across devices or  servers, ensuring consistency in deployments.",
    },
    {
      image: <RiProgress8Fill size={40} />,
      name: "Compatibility and Interchangeability",
      desc: "Transfer ISO storage images across platforms, enabling seamless deployment of OS on different systems for   maximum flexibility.",
    },
    {
      image: <BsToggles size={40} />,
      name: "Data Integrity",
      desc: "ISO preserves original optical media data, safeguarding against corruption and ensuring      secure storage of software and OS files.",    },
    {
      image: <FaFileUpload size={40} />,
      name: "Efficient Backup and Recovery",
      desc: "Utilize ISO storage images for efficient system restoration, minimizing downtime and enhancing data resilience in case of failures.",
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
        Unlock the Power of ISO
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "17px", md: "20px" },
          letterSpacing: 0,
          textAlign: "center",
          color: "#677788",
        }}
      >
        Unleash the full potential of your deployments with ISO. Seamlessly
        deploy
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "17px", md: "20px" },
          letterSpacing: 0,
          textAlign: "center",
          color: "#677788",
        }}
      >
        operating systems and supercharge your efficiency
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

export default PowerIso;
