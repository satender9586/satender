import React from "react";
import Navbaar from "./Navbaar";
import TopBaarNavbaar from "./TopBaarNavbaar";
import { Box } from "@mui/material";
import Header from "./Header";
import Cards from "./Cards";
import Services from "./Services";
import Growth from "./Growth";
import Footer from "./Footer";
import Contactus from "./Contactus";

const Home = () => {
  return (
    <div>
      <Box position={"sticky"} top={0} right={0} zIndex={1}>
        {/* <TopBaarNavbaar /> */}
        <Navbaar />
      </Box>
      <Header />
      <Cards />
      <Services />
      <Contactus />
      <Growth />
      <Footer />
    </div>
  );
};

export default Home;
