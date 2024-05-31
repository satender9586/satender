import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

import { FaRegUserCircle } from "react-icons/fa";
import { LuShieldCheck } from "react-icons/lu";
import { BsToggles } from "react-icons/bs";
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoHardwareChipOutline } from "react-icons/io5";
import { CgOrganisation } from "react-icons/cg";

const Cartspage = () => {
  const data = [
    {
      name: "100% Human Support",
      icon: <FaRegUserCircle size={40} />,
      desc: "Quick and efficient assistance from real experts whenever you need it.",
    },
    {
      name: "Secure and Reliable",
      icon: <LuShieldCheck size={40} />,
      desc: "Tier 3 and Tier IV data centers ensure the safety and availability of your data.",
    },
    {
      name: "Full Resource Control",
      icon: <BsToggles size={40} />,
      desc: "Access and manage your cloud resources without restrictions or permission requirements.",
    },
    {
      name: "No Long-Term Contracts",
      icon: <IoDocumentTextSharp size={40} />,
      desc: "Enjoy flexibility with pay-as-you- go billing and no long-term commitments",
    },
    {
      name: "Enterprise Hardware",
      icon: <IoHardwareChipOutline size={40} />,
      desc: "Benefit from unbeatable speed and reliability with top-of-the- line equipment.",
    },
    {
      name: "13-Year-Old Company",
      icon: <CgOrganisation size={40} />,
      desc: "Trust in our 13-year track record of cost reduction and timely infrastructure delivery.",
    },
  ];
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
          Why Choose Cloude Data for
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "22px", sm: "25px", md: "40px" },

            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          Unbreakable Security?
        </Typography>
      </Box>
      <Box sx={{ mt: "2.5rem" }}>
        <Box
          sx={{
            mt: "2rem",
            display: "grid",
            columnGap: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
            rowGap: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
          }}
        >
          {data.map((data, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: "100%",
                borderRadius: 3,
                padding: 1,
                boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  {data.icon}
                </Box>
                <Typography
                  sx={{ fontSize: "20px", textAlign: "Center", mt: "15px" }}
                >
                  {data.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    textAlign: "Center",
                    letterSpacing: 1,
                    mt: "0.4rem",
                    color: "#677788",
                    lineHeight: 1.7,
                  }}
                >
                  {data.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Cartspage;
