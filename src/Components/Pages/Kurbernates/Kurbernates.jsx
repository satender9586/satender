import React from "react";
import Layout from "../../Layout/Layout";
import Banner from "../LayoutPages/Banner";
import KurboImg from "../../../assets/Pages/Kurbo.webp"
import Management from "./Management";
import ManagementInfo from "./ManagementInfo";
import Deploy from "./Deploy";
import ExperienceCard from "../RepeatComponents/ExperienceCard";

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
  return (
    <>
      <Layout>
            <Banner data={data} />
            <Management/>
            <ManagementInfo/>
            <Deploy/>
            <ExperienceCard/>
      </Layout>
    </>
  );
};

export default Kurbernates;
