import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const NoteFound = () => {

  return (
    <Box
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box>
        <Card
          sx={{ minWidth: 275, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 30, padding: "1rem", fontWeight: 600 }}
              color="text.secondary"
            >
              Page Not Found
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              size="small"
              onClick={() => (window.location.href = "https://cloudedata.com/")}
            >
              Go to home
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default NoteFound;
