import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Tables from "./Table";
import Img1 from "../../../assets/Home/Cloud.svg";
import Img3 from "../../../assets/Home/pngwing.svg";
import Img4 from "../../../assets/Home/pngwing2.svg";
import Img5 from "../../../assets/Home/google.svg";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabCart = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Typography
        sx={{ textAlign: "center",  fontSize: {xs:"22px",sm:"25px",md:"40px"}, fontWeight: 500 }}
      >
        Say Goodbye to Overpriced Adopt
      </Typography>
      <Typography
        sx={{ textAlign: "center",  fontSize: {xs:"22px",sm:"25px",md:"40px"}, fontWeight: 500 }}
      >
        Indian Right Priced
      </Typography>

      <Box sx={{ width: "100%", padding: {xs:"0 1rem",sm:"0 1rem",md:"0 15%"}, mt: "1rem" }}>
        <Card
          sx={{
            maxWidth: "100%",
            borderRadius: 3,
            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <CardMedia>
            <Box
              bgcolor={"#0068FF"}
              padding={{xs:"0.5rem 1rem",md:"0.5rem 2rem"}}
              paddingBottom={"1rem"}
            >
              <Typography sx={{  fontSize: {xs:"20px",sm:"25px",md:"40px"}, color: "White" }}>
                Basic Virtual Machine Cost
              </Typography>
              <Typography sx={{  fontSize: {xs:"14px",sm:"18px",md:"18px"}, color: "White" }}>
                Get predictable pricing with our all-in-one packages, and start
                saving today. Compare Cloude Data and choose the best cost-
                effective options against AWS, GCP, and Azure.
              </Typography>
            </Box>

            <Box sx={{ padding: "0 2rem" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                variant="fullWidth"
                sx={{ gap: 3 }}
              >
                <Tab label="2 CPUs" {...a11yProps(0)} />
                <Tab label="4 CPUs" {...a11yProps(1)} />
                <Tab label="8 CPUs" {...a11yProps(2)} />
              </Tabs>
            </Box>
          </CardMedia>
          <CardContent sx={{padding:{xs:"0px",sm:"0px",md:"auto"}}}>
            <Box
              bgcolor={"#D5D5D5"}
              padding={"0.4rem"}
              borderRadius={"5px"}
              margin={"0 1rem"}
            >
              <Typography sx={{ textAlign: "center", color: "#6F7F8F",fontSize: {xs:"14px",sm:"18px",md:"18px"}, }}>
                4 GiB Memory | 80 GiB Storage | 1,000 GiB Bandwidth
              </Typography>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Tables
                data={[
                  {
                    img: Img1,
                    name: "Includes bandwidth",
                    price: "$18.00",
                    color: "#369B0C",
                  },
                  {
                    img: Img3,
                    name: "Includes bandwidth",
                    price: "$155.00",
                    color: "",
                  },
                  {
                    img: Img4,
                    name: "Includes bandwidth",
                    price: "$156.00",
                    color: "",
                  },
                  {
                    img: Img5,
                    name: "Includes bandwidth",
                    price: "$157.00",
                    color: "",
                  },
                ]}
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Tables
                data={[
                  {
                    img: Img1,
                    name: "Includes bandwidth",
                    price: "$36.00",
                    color: "#369B0C",
                  },
                  {
                    img: Img3,
                    name: "Includes bandwidth",
                    price: "$174.00",
                    color: "",
                  },
                  { img: Img4, name: "Includes bandwidth", price: "$242.00" },
                  { img: Img5, name: "Includes bandwidth", price: "$232.00" },
                ]}
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Tables
                data={[
                  {
                    img: Img1,
                    name: "Includes bandwidth",
                    price: "$91.00",
                    color: "#369B0C",
                  },
                  {
                    img: Img3,
                    name: "Includes bandwidth",
                    price: "$310.00",
                    color: "",
                  },
                  {
                    img: Img4,
                    name: "Includes bandwidth",
                    price: "$445.00",
                    color: "",
                  },
                  {
                    img: Img5,
                    name: "Includes bandwidth",
                    price: "$417.00",
                    color: "",
                  },
                ]}
              />
            </CustomTabPanel>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
export default TabCart;
