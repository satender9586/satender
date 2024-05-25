import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import contactImg from "../../assets/Home/contact.png";

const Contactus = () => {
  return (
    <Box sx={{ bgcolor: "whitemoke",  padding:{xs:"0 2rem 2rem",md: "2rem 3rem 3rem 3rem"} }}>
      <Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {xs:"repeat(1,1fr)",md:"repeat(2,1fr)"},
          }}
        >
          <Box>
            <Box mt={{xs:"0.5rem",md:"0rem"}}>
              <Typography sx={{ fontSize: "38px",fontFamily:"Poppins", fontWeight: 600,color:"#06439C",textAlign:{xs:"center",md:"start"} }}>
                Get in touch
              </Typography>
              <Typography sx={{ fontSize: "24px",lineHeight:"30px" ,fontFamily:"Poppins"}}>
                Feel free to contact with us anytime
              </Typography>
            </Box>
            <Box mt={"1rem"} maxWidth={{xs:"100%",md:"80%"}}>
              <Box>
                <TextField
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                  size="medium"
                  fullWidth
                  sx={{bgcolor:"whitesmoke",borderRadius:"2px"}}
                />
              </Box>
              <Box mt={"1rem"}>
                <TextField
                  id="outlined-basic"
                  label="Phone No"
                  variant="outlined"
                  size="medium"
                  fullWidth
                  sx={{bgcolor:"whitesmoke",borderRadius:"2px"}}
                />
              </Box>
              <Box mt={"1rem"}>
                <TextField
                  id="outlined-basic"
                  label="Email Id"
                  variant="outlined"
                  size="medium"
                  fullWidth
                  sx={{bgcolor:"whitesmoke",borderRadius:"2px"}}
                />
              </Box>
              <Box mt={"1rem"}>
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  sx={{bgcolor:"whitesmoke",borderRadius:"2px"}}
                />
              </Box>
              <Box mt={"1rem"}>
                <Button fullWidth variant="contained">
                  Send Message
                </Button>
              </Box>
              
            </Box>
          </Box>
          <Box display={{xs:"none",md:"Flex"}} justifyContent={"flex-end"} paddingTop={"1.5rem"}>
            <Box>
              <img
                style={{
                  objectFit: "cover",
                  height: "470px",
                  width: "450px",
                  borderRadius: 10,
                }}
                src={contactImg}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contactus;
