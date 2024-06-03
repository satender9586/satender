import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { FaCloud } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoRecordingSharp } from "react-icons/io5";
import { FaHandsAslInterpreting } from "react-icons/fa6";

const Safeguard = () => {

  const Managementinfodata = [
    {
      image: <FaImage size={40} />,
      name: "Rapid snapshot creation",
      desc: "Take snapshots of your virtual machines and  storage volumes in seconds, minimizing downtime and ensuring swift disaster recovery.",
    },
    {
      image: <IoDocumentTextOutline size={40} />,
      name: "Flexible retention policies",
      desc: "Customize retention timelines and frequencies to meet compliance needs and optimize costs.",
    },
    {
      image: <IoRecordingSharp size={40} />,
      name: "Specific data recovery",
      desc: "Recover exactly what you need, when you need it, be it individual files or entire virtual machines.",
    },
    {
      image: <FaHandsAslInterpreting size={40} />,
      name: "Integration with backup tools",
      desc: "Our service integrates seamlessly with other backup tools, enhensive, tailor-made data protection strategy.",
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
        Safeguard Your Business with
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "26px", md: "30px", lg: "40px" },
          fontWeight: 500,
          letterSpacing: { XS: 3, md: 2, lg: 2 },
          textAlign: "center",
        }}
      >
        Instant Snapshot Recovery
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "17px", md: "20px" },
          letterSpacing: 0,
          textAlign: "center",
          color: "#677788",
        }}
      >
        Protect your data in a snap - create instant, reliable snapshots in
        seconds!
      </Typography>
      <Box
        sx={{
          display: "grid",
          gap: 10,
          gridTemplateColumns: "repeat(2, 1fr)",
          mt: "1.5rem",
        }}
      >
        {Managementinfodata?.map((data,INDEX) => (
          <Box key={INDEX}> 
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

export default Safeguard;
