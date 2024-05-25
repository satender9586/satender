import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const TwoCartWithOutImage = () => {
  return (
    <Box sx={{ padding: { xs: "1rem 4%", md: "2rem 5%" } }}>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "26px", md: "30px", lg: "40px" },
            fontWeight: 500,
            letterSpacing: { XS: 3, md: 2, lg: 2 },
            textAlign: "center",
          }}
        >
          Simplify Your DNS Management Process
        </Typography>
      </Box>
      <Box>
        <Box
          padding={{ xs: "1rem", md: "2rem" }}
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: { xs: "wrap", md: "nowrap" },
            gap: 3,
          }}
        >
          <Card
            sx={{
              maxWidth: 400,
              borderRadius: 3,
              boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
              padding: "1rem 2rem",
            }}
          >
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                letterSpacing={{ xs: 1, md: 1.5 }}
                lineHeight={{ xs: 1.5, md: 2.3 }}
              >
                Add, edit, or delete DNS records for your domain, such as A
                records, CNAME records, MX records, and TXT records.
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              maxWidth: 400,
              borderRadius: 3,
              boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
              padding: "1rem 2rem",
            }}
          >
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                letterSpacing={{ xs: 1, md: 1.5 }}
                lineHeight={{ xs: 1.5, md: 2.3 }}
              >
                Configure DNS settings like TTL (time to live) values, name
                server records, and DNSSEC (DNS Security Extensions) settings to
                enhance DNS infrastructure security and reliability.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default TwoCartWithOutImage;
