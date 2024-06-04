import * as React from "react";
import { Box, Button } from "@mui/material";
import claudyImgg from "../../assets/Home/Clodywhite.svg";
import address from "../../assets/Home/address.svg";
import call from "../../assets/Home/call.svg";
import copyright from "../../assets/Home/Copy.svg";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <Box
        sx={{
          padding: { xs: "1rem 2rem 2rem", md: "2rem 1.5rem" },
          bgcolor: "#06439C",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(5, 1fr)" },
            gap: 4,
          }}
        >
          <Box>
            <Box>
              <Box>
                <img src={claudyImgg} width={180} alt="cludy" />
              </Box>

              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  marginBottom: "8px",
                  fontFamily: "poppins",
                }}
              >
                <span style={{ paddingRight: "0.5rem" }}>
                  <img src={address} width={20} alt="address" />
                </span>
                A - 212 First floor Okhla Industrial Estate Phase -3 New Delhi , 110020.
              </Typography>

              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  marginBottom: "8px",
                  mt: "1.3rem",
                  fontFamily: "poppins",
                }}
              >
                <span style={{ paddingRight: "0.5rem" }}>
                  <img src={call} width={20} alt="address" />
                </span>
                +91 01204448182
              </Typography>

              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  marginBottom: "8px",
                  mt: "1.3rem",
                  fontFamily: "poppins",
                }}
              >
                <span style={{ paddingRight: "0.5rem" }}>
                  <img src={copyright} width={15} alt="address" />
                </span>
                Cloude Data.2023.ALL Right Reserved.
              </Typography>

              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "15px",
                  mt: "1.3rem",
                  marginBottom: "8px",
                  lineHeight: "24px",
                  fontFamily: "poppins",
                }}
              >
                When You visit or interact with our sites, services or tools, we
                or our authorised service providers may use cookies for strong
                information to help provide you with a better, faster and safer
                exprience and for marketing purposes.
              </Typography>
            </Box>
          </Box>

          <Box display={{ xs: "none", md: "block" }}>
            <ListOfInfo
              lengths={[
                "About Us",
                "Trust & Security",
                "Global Infrastructure",
                "Customer & Case Studies",
                "24/7 Customer Support",
                "Predictable Pricing",
                "No Long Term Contracts",
                "Full Resource Control",
                "Enterprise Hardware",
                "New Company",
              ]}
              title={"Why Choose us?"}
            />
            <ListOfInfo
              lengths={[
                "Affilate Program",
                "Blogs",
                "Ebook",
                "Cloude Data Docs",
              ]}
              title={"Community"}
            />
          </Box>

          <Box display={{ xs: "none", md: "block" }}>
            <ListOfInfo
              lengths={[
                "Dedicated CPU",
                "Shared CPU",
                "High Memory",
                "GPU",
                "Bare Metal",
                "Kubernetes",
              ]}
              title={"Compute"}
            />
            <ListOfInfo
              lengths={[
                "Block Storage",
                "Object Storage",
                "Archive Storage",
                "Operating System",
                "Snapshots",
                "ISO",
                "Backup",
                "Remote Backups",
              ]}
              title={"Storage"}
            />

            <ListOfInfo
              lengths={["Manage Databases", "MongoDB", "MySQL", "PostgreSQL"]}
              title={"Databases"}
            />
          </Box>
          <Box display={{ xs: "none", md: "block" }}>
            <ListOfInfo
              lengths={[
                "Cloud Firewall",
                "DDoS Protection",
                "DNS Manager ",
                "Load Balancers",
                " VPC",
                "NAT Gateway",
                "Reserve IP",
                "IPv4",
                "Ipv6 ",
                "Virtual Router",
                "IPSEC Tunnels",
              ]}
              title={"Networking"}
            />
            <ListOfInfo
              lengths={[
                "API",
                "Cloud Manager",
                "Cloud Migration ",
                "Monitoring",
                "SSL Certificate",
                "SSH-Key",
              ]}
              title={"Features"}
            />
          </Box>
          <Box>
            <ListOfInfo
              lengths={[
                "Solution Overview",
                "Security Solution",
                "User Management",
                "Manage Support",
              ]}
              title={"Solutions"}
            />
            <ListOfInfo
              lengths={["Browse Marketplace"]}
              title={"Marketplace"}
            />
            <ListOfInfo1
              lengths={[
                { name: "Term & Conditions", path: "/privacy" },
                { name: "Terms use", path: "/termsofuse" },
                { name: "Support Policy", path: "/customersupport" },
                { name: "Refund Policy", path: "/refundpolicy" },
              ]}
              title={"Company"}
            />
            <ListOfInfocontact
              lengths={[
                { icons: <FaFacebookF />, name: "Facebook" },
                { icons: <IoLogoInstagram />, name: "Instagram" },
                { icons: <FaXTwitter />, name: "Twitter " },
                { icons: <IoLogoYoutube />, name: "Youtube" },
                { icons: <FaLinkedin />, name: "Linkedln" },
              ]}
              title={"Follow Us"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;

export const ListOfInfo = ({ lengths, title }) => {
  return (
    <>
      <Typography
        sx={{
          color: "#FFFFFF",
          fontSize: "18px",
          marginBottom: "8px",
          fontWeight: "600",
          fontFamily: "poppins",
        }}
      >
        {title}
      </Typography>
      <Box sx={{ paddingLeft: "1rem", maxWidth: "74%" }}>
        {lengths.map((data, index) => (
          <Typography
            key={index}
            sx={{
              color: "#D4D4D4",
              fontSize: "15px",
              paddingBottom: "0.2rem",
              fontFamily: "poppins",
            }}
          >
            {data}
          </Typography>
        ))}
      </Box>
    </>
  );
};

export const ListOfInfo1 = ({ lengths, title }) => {
  const navigate = useNavigate();
  return (
    <>
      <Typography
        sx={{
          color: "#FFFFFF",
          fontSize: "18px",
          marginBottom: "8px",
          fontWeight: "600",
          fontFamily: "poppins",
        }}
      >
        {title}
      </Typography>
      <Box sx={{ paddingLeft: "1rem", maxWidth: "74%" }}>
        {lengths.map((data, index) => (
          <Button
            variant="text"
            key={index}
            onClick={() => navigate(`${data.path}`)}
            sx={{
              padding: "0px",
              minWidth: "0px",
              textTransform: "capitalize",
            }}
          >
            <Typography
              sx={{
                color: "#D4D4D4",
                fontSize: "15px",
                paddingBottom: "0.2rem",
                fontFamily: "poppins",
              }}
            >
              {data.name}
            </Typography>
          </Button>
        ))}
      </Box>
    </>
  );
};

export const ListOfInfocontact = ({ lengths, title }) => {
  return (
    <>
      <Typography
        sx={{
          color: "#FFFFFF",
          fontSize: "18px",
          marginBottom: "8px",
          fontWeight: "600",
          fontFamily: "poppins",
        }}
      >
        {title}
      </Typography>
      <Box sx={{ paddingLeft: "1rem", maxWidth: "74%" }}>
        {lengths?.map((data, index) => (
          <Box key={index} display={"flex"} gap={1} alignItems={"center"}>
            <Button
              sx={{
                minWidth: "0px",
                minHeight: "0px",
                padding: "0.1rem",
                bgcolor: "white",
              }}
              variant="none"
            >
              {data.icons}
            </Button>
            <Typography
              sx={{
                color: "#D4D4D4",
                fontSize: "15px",
                paddingBottom: "0.2rem",
                fontFamily: "poppins",
              }}
            >
              {data.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};
