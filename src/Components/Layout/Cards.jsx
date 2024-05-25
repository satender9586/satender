import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import RupeeImg from "../../assets/Home/Rupees.svg";
import growthImg from "../../assets/Home/Grow.svg";
import SecurityImg from "../../assets/Home/Security.svg";
import DebitImg from "../../assets/Home/Debit.svg";

function Cards() {
  return (
    <Box
      sx={{
        bgcolor: "#DDDDDD",
        mt: "-4px",
        padding:{xs:"2rem 2rem 2rem",md: "2rem 3rem"} ,
        paddingTop:"2rem"
      }}
    >
      <Box
       
        sx={{display: 'grid', gridTemplateColumns:{xs: 'repeat(1, 1fr)',md: 'repeat(4, 1fr)'},gap:3 }}
      >
        <CardItem Img={RupeeImg} text={"Indian Data"} />
        <CardItem Img={growthImg} text={"Two Times Quicker Results"} />
        <CardItem Img={SecurityImg} text={"Smooth Integration"} />
        <CardItem Img={DebitImg} text={"70% Cost Savings"} />
      </Box>
    </Box>
  );
}

export default Cards;

export const CardItem = ({ Img, text }) => {
  return (
    <>
      <Card
        sx={{
          minWidth: "100%",
          minHeight:{xs:"281px",md:"300px"} ,
          borderRadius: "13px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          
        }}
      >
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "1.2rem" }}>
            <img src={Img} style={{ objectFit: "cover" }} alt="rupeeslogo" />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "1rem" }}>
            <Typography
              sx={{
                fontSize: "23px",
                color: "#06439C",
                fontWeight: "600",
                textAlign: "Center",
                 fontFamily:"poppins",
                lineHeight:{xs:"29px"}
              }}
            >
              {text}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "0.6rem" }}>
            <Typography
              sx={{ fontSize: "16px",  fontFamily:"poppins", color: "#0066FF", textAlign: "Center",lineHeight:{xs:"1.6",md:"25px"} }}
            >
              Let us do our business in indian Currency and keep the data safe.
              let us with world leader
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
