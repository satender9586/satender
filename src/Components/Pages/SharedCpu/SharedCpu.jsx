import React from "react";
import Balanced from "./Balanced";
import Feature from "../Cpu/Feature";
import PriceInfo from "../Cpu/PriceInfo";
import Parteners from "../Cpu/Parteners";
import ComputeFamily from "../Cpu/ComputeFamily";
import Layout from "../../../Components/Layout/Layout";
import Banner from "../../Pages/LayoutPages/Banner";
import sharedImg from "../../../assets/Pages/sharedCpuBanner.webp"

const SharedCpu = () => {
  const data = {
    img: sharedImg,
    title: {
      first: "Stable Performance in ",  
      second: "Any Workload with ",
      third: "Shared CPU",
      forth: "",
    },
    desc: {
      first: "Experience the endless possibilities of shared CPU technology",
      second: "for seamless efficiency and peak performance for any workload.",
    },
  };
  return (
    <>
      <Layout>
        <Banner data={data}/>
        <Balanced />
        <PriceInfo />
        <Feature />
        <Parteners />
        <ComputeFamily />
      </Layout>
    </>
  );
};

export default SharedCpu;
