import React from "react";
import Layout from "../../Layout/Layout";
import Banner from "../LayoutPages/Banner";
import optimizeTraficImg from "../../../assets/Pages/optimzeTraficBanner.webp";
import TwoGridCardInfo from "../RepeatComponents/TwoGridCardInfo";
import Convience from "./Convience";
import ExperienceCard from "../RepeatComponents/ExperienceCard";
import MenageMantInfo from "../RepeatComponents/MenageMantInfo";


const OptimizeTrafic = () => {
  const data = {
    img: optimizeTraficImg,
    title: {
      first: "Flexible and Affordable ",
      second: "Object Storage forOn-",
      third: "Demand Storage Needs",
      forth: "",
    },
    desc: {
      first: "Enable easy data storage, management, and access on demand, ",
      second: "with scalability and cost-effectiveness for your business.",
    },
  };
  return (
    <Layout>
      <Banner data={data} />
      <TwoGridCardInfo/>
      <MenageMantInfo />
      <Convience />
      <ExperienceCard />
    </Layout>
  );
};

export default OptimizeTrafic;
