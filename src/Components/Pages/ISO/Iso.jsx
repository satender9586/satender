import React from "react";
import Layout from "../../Layout/Layout";
import Effortless from "./Effortless";
import PowerIso from "./PowerIso";
import IsoCard from "./IsoCard";
import Banner from "../LayoutPages/Banner";
import isoBanner from "../../../assets/Pages/isoBanner.webp"


function Iso() {
  
  const data = {
    img:isoBanner,
    title: {
      first: "Seamlessly Deploy ",
      second: "Your Desired OS ",
      third: "with ISO",
      forth: "",
    },
    desc: {
      first: "Seamless OS deployment with our custom ISO solutions. ",
      second: "Effortlessly deploy your desired operating system for an optimized cloud experience.",
    },
  };
  return (
    <>
      <Layout>
        <Banner data={data}/>
        <Effortless/>
        <PowerIso/>
        <IsoCard/>
        
      </Layout>
    </>
  );
}

export default Iso;
