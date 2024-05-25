import React from "react";
import Layout from "../../Layout/Layout";
import Growth1 from "./Growth1";
import Unlock from "./Unlock";
import Pricing from "./Pricing";
import Banner from "../LayoutPages/Banner";
import blockStorage from "../../../assets/Pages/blockStorage.webp";
import ExperienceCard from "../RepeatComponents/ExperienceCard";
import ManagementInfo from "../../Pages/RepeatComponents/MenageMantInfo"


const BlockStorage = () => {
  const data = {
    img: blockStorage,
    title: {
      first: "Reliable and Scalable ",
      second: "Block Storage",
      third: "",
      forth: "",
    },
    desc: {
      first: "Power your business's growth with world-class block ",
      second: "storage solutions built for scalability.",
    },
  };

  return (
    <Layout>
      <Banner data={data} />
      <Unlock />
      <Growth1 />
      <ManagementInfo/>
      <Pricing />
      <ExperienceCard />
    </Layout>
  );
};

export default BlockStorage;
