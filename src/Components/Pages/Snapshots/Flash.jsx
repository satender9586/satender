import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import Img from "../../../assets/Pages/Snapshots/Flash.svg";
import Img2 from "../../../assets/Pages/Snapshots/Restore.svg";
import Img3 from "../../../assets/Pages/Snapshots/Delete.svg";

const Flash = () => {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    setCurrentImage(Img);
  }, []);

  const handleViewSnapshot = () => {
    setCurrentImage(Img);
  };

  const handleRestoreSnapshot = () => {
    setCurrentImage(Img2);
  };

  const handleDeleteSnapshot = () => {
    setCurrentImage(Img3);
  };

  return (
    <Box
      sx={{
        padding: "0rem 3rem",
        paddingBottom: "2.0rem",
        paddingTop: "3.5rem",
      }}
    >
      <Typography sx={{ fontSize: "45px", textAlign: "center" }}>
        Take Snapshots in a Flash
      </Typography>

      <Box
        sx={{ display: "grid", gap: 1, gridTemplateColumns: "repeat(3, 1fr)" }}
        mt={"1rem"}
      >
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Button
            variant="outlined"
            size="small"
            sx={{ bgcolor: "#06439C" }}
            onClick={handleViewSnapshot}
          >
            <Typography color={"white"}>View Snapshot</Typography>
          </Button>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            variant="outlined"
            size="small"
            sx={{ bgcolor: "#D7E6FF" }}
            onClick={handleRestoreSnapshot}
          >
            <Typography color={"#6F7F8F"}>Restore Snapshot</Typography>
          </Button>
        </Box>
        <Box display={"flex"} justifyContent={"flex-start"}>
          <Button
            variant="outlined"
            size="small"
            sx={{ bgcolor: "#D7E6FF" }}
            onClick={handleDeleteSnapshot}
          >
            <Typography color={"#6F7F8F"}>Delete Snapshot</Typography>
          </Button>
        </Box>
      </Box>

      {currentImage && (
        <Box display={"flex"} justifyContent={"center"}>
          <img
            src={currentImage}
            alt="snapshot"
            style={{ width: 1050, height: "auto" }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Flash;
