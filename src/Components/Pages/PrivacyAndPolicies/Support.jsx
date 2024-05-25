import React from "react";
import { Box, Typography } from "@mui/material";
import Banner from "./Banner";
import Content from "./Content";
import Layout from "../../Layout/Layout";

const Support = () => {
  const data = {
    title: "Support Policy",
    desc: "Please read this agreement carefully, as it contains important information regarding your legal rights and remedies.",
  };
  return (
    <Layout>
      <Banner data={data} />
      <Content>
        <Box>
          <Box mt={"1rem"}>
            <Box>
              <Typography
                color={"#2f1c6a"}
                sx={{ fontWeight: 600, fontSize: "20px" }}
              >
                Scope of Support
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "15px", mt: "0.3rem" }}
                color={"#2F1C6A"}
                lineHeight={"25px"}
                letterSpacing={1}
              >
                <ul>
                  <li>
                    We provide support for technical issues, account inquiries,
                    and general questions related to our products and services.
                  </li>
                  <li>
                    Support is available via email, live chat, and our support
                    ticket system during specified business hours.
                  </li>
                </ul>
              </Typography>
            </Box>
          </Box>
          <Box mt={"1rem"}>
            <Box>
              <Typography
                color={"#2f1c6a"}
                sx={{ fontWeight: 600, fontSize: "20px" }}
              >
                Response Time:
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "15px", mt: "0.3rem" }}
                color={"#2F1C6A"}
                lineHeight={"25px"}
                letterSpacing={1}
              >
                <ul>
                  <li>
                    We strive to respond to support inquiries within 24 hours
                    during regular business hours.
                  </li>
                  <li>
                    Response times may vary depending on the complexity of the
                    issue and the volume of support requests.
                  </li>
                </ul>
              </Typography>
            </Box>
          </Box>
          <Box mt={"1rem"}>
            <Box>
              <Typography
                color={"#2f1c6a"}
                sx={{ fontWeight: 600, fontSize: "20px" }}
              >
                Support Channels:
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "15px", mt: "0.3rem" }}
                color={"#2F1C6A"}
                lineHeight={"25px"}
                letterSpacing={1}
              >
                <ul>
                  <li>
                    Email:{" "}
                    <a href="support@paytelgroup.com">
                      support@paytelgroup.com
                    </a>
                  </li>
                  <li>
                    Live Chat: Available on our website during business hours
                  </li>
                  <li>
                    Support Ticket System: Accessible through the customer
                    portal
                  </li>
                </ul>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Content>
    </Layout>
  );
};

export default Support;
