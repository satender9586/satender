import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import computeImg from "../../../../assets/Pages/Solutionpage/Infrastructure/compute.png";
import storageImg from "../../../../assets/Pages/Solutionpage/Infrastructure/storage.png";
import networkImg from "../../../../assets/Pages/Solutionpage/Infrastructure/network.png";
import databaseImg from "../../../../assets/Pages/Solutionpage/Infrastructure/database.png";
import imageImg from "../../../../assets/Pages/Solutionpage/Infrastructure/compute.png";

const Infrastructure = () => {

  const data = [
    { name:"Compute",image:computeImg, desc:"Powerfull processing for demanding application"},
    { name:"Storage",image:storageImg, desc:" Scalable & flexible data storage for any business size"},
    { name:"Network",image:networkImg, desc:"Secure and reliable  connectivity for your business"},
    { name:"Managed Database",image:databaseImg, desc:"Effortless managed your databases "},
    { name:"Images",image:imageImg, desc:" Deploy applications with our  extensive library of images"}
  ]


  return (
    <Box sx={{ padding: "2rem 5%" }}>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "22px", sm: "25px", md: "50px" },
            fontWeight: 600,
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          Transform Your IT Infrastructure
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "18px", md: "18px" },
            color: "#677788",
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          Experience the revolutionary impact of our Cloud Solutions, tailored
          to empower modern businesses. Discover{" "}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "18px", md: "18px" },
            color: "#677788",
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          flexible, scalable, and cost-effective options that perfectly align
          with your workload requirements
        </Typography>
      </Box>
      <Box sx={{ mt: "2rem" }} display={"grid"} gap={2} gridTemplateColumns={"repeat(5,1fr)"}>
        {data.map((data, index) => (
          <Card key={index} sx={{minHeight:"250px"}}>
            <CardMedia
              sx={{ height: 130, bgcolor: "#4283FB" }}
              image={data.image}
              title="green iguana"
            />
            <CardContent sx={{padding:"0.5rem",paddingBottom:"0px"}}>
              <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                {data.name}
              </Typography>
              <Typography
                variant="body2"
                fontSize={"14px"}
                color="text.secondary"
              >
               {data.desc}
              </Typography>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: "#0094FF",
                  textTransform: "capitalize",
                  color: "white",
                  padding: "0.3rem 1rem",
                  fontSize: "15px",
                  mt: "0.5rem",
                }}
                size="small"
              >
                Get Start
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Infrastructure;
