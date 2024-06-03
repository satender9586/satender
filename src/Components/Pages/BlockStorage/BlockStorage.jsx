import React from "react";
import Layout from "../../Layout/Layout";
import Growth1 from "./Growth1";
import Unlock from "./Unlock";
import Pricing from "./Pricing";
import Banner from "../LayoutPages/Banner";
import blockStorage from "../../../assets/Pages/blockStorage.webp";
import ExperienceCard from "../RepeatComponents/ExperienceCard";
import ManagementInfo from "../../Pages/RepeatComponents/MenageMantInfo";
import { GiSpeedometer } from "react-icons/gi";
import { GrVirtualStorage } from "react-icons/gr";
import { GrStorage } from "react-icons/gr";
import { RiPriceTag2Line } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { FaPiedPiperSquare } from "react-icons/fa";

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
  const Managementinfodata = [
    {
      title1: "The Ultimate Cyber Defense to",
      title2: "Secure Your Business",
      desc1:
        "Protect Your Business with Advanced Threat Detection and Prevention to Stay Ahead of Cybercriminals",
      desc2: "",
    },

    {
      image: <GiSpeedometer size={40} />,
      name: "Enjoy High-Speed Data Access",
      desc: "Store large amounts of data in a reliable and future -proof platform powered by High Speed SSDs and enjoy unbeatable speed.",
    },
    {
      image: <GrVirtualStorage size={40} />,
      name: "Simplify Your Data Storage",
      desc: "Managing data storage doesn't have to be complicated. Cloude Data makes it easy for you to store, organize and manage your data.",
    },
    {
      image: <GrStorage size={40} />,
      name: "Data Availability Guaranteed",
      desc: "Your data is available and accessible at all times, even in the event of a failure or outage.",
    },
    {
      image: <RiPriceTag2Line size={40} />,
      name: "Affordable Price",
      desc: "Affordable block storage provides the storage you need at a price that fits your budget.",
    },
  ];
  const ExpenceData = [
    {
      title:"Experience Value-Added Features"
    },
    {
      image: <TbApi size={40} />,
      name: "API-driven Management",
      desc: "Easily spin up or spin down your storage  and pay only for the hours you use, all through    our user-friendly API.",
    },
    {
      image: <FaPiedPiperSquare size={40} />,
      name: "Flexible and Scalable",
      desc: "Scale your block storage volumes without modifying your cloud instance local disk, and enjoy the freedom to expand as your needs grow.",
    },
  ];

  return (
    <Layout>
      <Banner data={data} />
      <Unlock />
      <Growth1 />
      <ManagementInfo Managementinfodata={Managementinfodata} />
      <Pricing />
      <ExperienceCard ExpenceData={ExpenceData} />
    </Layout>
  );
};

export default BlockStorage;
