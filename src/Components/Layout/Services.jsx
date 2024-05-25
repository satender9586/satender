import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import databaseImg from "../../assets/Home/Database.svg";
import databaseImg1 from "../../assets/Home/Database1.svg";
import databaseImg2 from "../../assets/Home/Database2.svg";
import databaseImg3 from "../../assets/Home/Database3.svg";
import databaseImg4 from "../../assets/Home/Database4.svg";
import databaseImg5 from "../../assets/Home/Database5.svg";
import databaseImg6 from "../../assets/Home/Database6.svg";
import databaseImg7 from "../../assets/Home/Database7.svg";
import { Button } from "@mui/material";

const Services = () => {
  return (
    <Box sx={{ bgcolor: "#DDDDDD", padding:{xs:"0 2rem 2rem",md: "2rem 3rem 3rem 3rem"} }}>
      <Box>
        <Typography
          sx={{
            color: "#06439C",
            fontWeight: "600",
            textAlign: "Center",
            fontSize: {xs:"35px",md:"40px"},
            lineHeight:{xs:"42px",md:"auto"},
            fontFamily:"poppins"
          }}
        >
          Create Raise Cloud Data 
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{ color: "#0066FF", textAlign: "Center", fontFamily:"poppins", fontSize: {xs:"22px",md:"20px"},mt:"0.5rem"}}
        >
          The Service of Cloude Data Range
        </Typography>
      </Box>

      <Box sx={{display:"flex",justifyContent:"Center",bgcolor:"#DDDDDD"}}>
        <Box
          sx={{display: 'grid', gridTemplateColumns:{xs: 'repeat(1, 1fr)',md: 'repeat(4, 1fr)'},padding:"2rem 0rem",gap:3 }}
        >
          <CardItem Img={databaseImg} text={"Digital Computers"} />
          <CardItem Img={databaseImg1} text={"Kubernetes"} />
          <CardItem Img={databaseImg2} text={"Database Management"} />
          <CardItem Img={databaseImg3} text={"Storage of Objects"} />
          <CardItem Img={databaseImg4} text={"Block Holding"} />
          <CardItem Img={databaseImg5} text={"Balancers for loads"} />
          <CardItem Img={databaseImg6} text={"VPC"} />
          <CardItem Img={databaseImg7} text={"Cloud Defense Systems"} />
        </Box>
        
      </Box>
      <Box width={"100%"} display={"flex"} mt={"0.5rem"} justifyContent={"center"}>
        <Button variant="contained" sx={{borderRadius:"10px",bgcolor:"#06439C",textTransform:"capitalize",padding:"0.8rem 2.3rem",fontSize:"20px",fontWeight:"600"}}>See all Products</Button>
      </Box>
    </Box>
  );
};

export default Services;

export const CardItem = ({ Img, text }) => {
  return (
    <>
      <Card
        sx={{
          width: "100%",
          minHeight:{xs:"281px",md:"280px"} ,
         
          borderRadius: "13px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          bgcolor: "#06439C",
        }}
      >
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "1.2rem" }}>
            <img
              src={Img}
              style={{ objectFit: "cover", color: "white" }}
              alt="rupeeslogo"
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "1rem" }}>
            <Typography
              sx={{
                fontSize: "26px",
                fontWeight: "600",
                textAlign: "Center",
                color: "white",
                fontFamily:"Poppins",
                lineHeight:"30px"
              }}
            >
              {text}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "0.6rem",
              color: "white",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                color: "#fffff",
                textAlign: "Center",
                fontFamily:"Poppins"
               
              }}
            >
              Let us do our business in indian Currency and keep the data safe.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
