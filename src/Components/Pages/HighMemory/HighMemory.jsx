import React from "react";
import Layout from "../../Layout/Layout";
import Banner from "../LayoutPages/Banner";
import memoryImg from "../../../assets/Pages/memory.webp";
import EnterPrice from "./EnterPrice";
import Feature from "../Cpu/Feature";
import Parteners from "../Cpu/Parteners";
import ComputeFamily from "../Cpu/ComputeFamily";
import Experience from "./Experience";

const HighMemory = () => {
  const data = {
    img: memoryImg,
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
    <Layout>
      <Banner data={data} />
      <Experience/>
      <EnterPrice />
      <Feature />
      <Parteners />
      <ComputeFamily />
    </Layout>
  );
};

export default HighMemory;
