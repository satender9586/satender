import React from "react";
import TopBaarNavbaar from "./TopBaarNavbaar";
import Navbaar from "./Navbaar";
import Footer from "./Footer";
import { Box } from "@mui/material";

const Layout = ({children}) => {
  return (
    <>
      {/* <TopBaarNavbaar /> */}
      <Box sx={{ position: "relative" }}>
        <Navbaar />
      </Box>
      {
        children
      }
      <Footer />
    </>
  );
};

export default Layout;
