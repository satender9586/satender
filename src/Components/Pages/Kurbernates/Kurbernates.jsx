import React from "react";
import Layout from "../../Layout/Layout";
import Banner from "../LayoutPages/Banner";
import KurboImg from "../../../assets/Pages/Kurbo.webp";
import Management from "./Management";
import ManagementInfo from "./ManagementInfo";
import Deploy from "./Deploy";
import ExperienceCard from "../RepeatComponents/ExperienceCard";
import { FiShield } from "react-icons/fi";
import { BsToggles } from "react-icons/bs";

const Kurbernates = () => {
  const data = {
    img: KurboImg,
    title: {
      first: "Scale business ",
      second: "confidently with ",
      third: "Kubernetes",
      forth: "",
    },
    desc: {
      first: "Easily manage, deploy, and scale containerized applications ",
      second: "and experience 99.99% uptime SLA.",
    },
  };

  const ExpenceData = [
    {
      title:"Experience Value-Added Features"
    },
    {
      image: <FiShield size={40}/>,
      name: "Simplified Management",
      desc: "Easily create and manage Kubernetes clusters directly through our user-friendly interface or API, saving you time and effort.",
    },
    {
      image: <BsToggles size={40}/>,
      name: "Simplified Management",
      desc: "Easily create and manage Kubernetes clusters directly through our user-friendly interface or API, saving you time and effort.",
    },
  ];
  return (
    <>
      <Layout>
        <Banner data={data} />
        <Management />
        <ManagementInfo />
        <Deploy />
        <ExperienceCard  ExpenceData={ExpenceData}/>
      </Layout>
    </>
  );
};

export default Kurbernates;
