import React from "react";
import Layout from "../../Layout/Layout";
import Banner from "../LayoutPages/Banner";
import VpcBanner from "../../../assets/Pages/VpcBanner.webp";
import ControlCard from "./ControlCard";
import MenageMantInfo from "../RepeatComponents/MenageMantInfo";
import ExperienceSecure from "./ExperienceSecure";
import ExperienceCard from "../RepeatComponents/ExperienceCard";
import { GiSpeedometer } from "react-icons/gi";
import { GrVirtualStorage } from "react-icons/gr";
import { GrStorage } from "react-icons/gr";
import { RiPriceTag2Line } from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";
import { SiGrammarly } from "react-icons/si";

const VPC = () => {
  const data = {
    img: VpcBanner,
    title: {
      first: "Isolate your traffic with ",
      second: "VPC (Virtual Private ",
      third: "Cloud)",
      forth: "",
    },
    desc: {
      first: "Ensure an additional layer of security and control over ",
      second: "infrastructure by securing and isolating cloud networks.",
    },
  };

  const Managementinfodata = [
    {
      title1: "Say Goodbye to Downtime",
      title2: "",
      desc1:
        "Distribute incoming requests to your backend servers, ensuring your application can",
      desc2: " handle any increase in traffic.",
    },

    {
      image: <GiSpeedometer size={40} />,
      name: "Robust Security",
      desc: "Keep cloud resources safe and secure with a logically network that gives you ultimate control over infrastructure's security.",
    },
    {
      image: <GrVirtualStorage size={40} />,
      name: "Seamless Maintenance",
      desc: "Easily create and manage multiple VPCs with a developer-friendly dashboard, API, or CLI, and simplify VPC creation process.",
    },
    {
      image: <GrStorage size={40} />,
      name: "Customizable Environment",
      desc: "Tailor VPC to unique needs by interconnecting networks with IP range specifications, and controlling traffic with firewall configurations.",
    },
    {
      image: <RiPriceTag2Line size={40} />,
      name: "Scalability",
      desc: "With VPC, you can scale infrastructure as needed by adding or removing resources, subnets, and security features, without compromising security or performance.",
    },
  ];

  const ExpenceData = [
    {
      title: "Experience Value-Added Features",
    },
    {
      image: <AiOutlineGlobal size={40} />,
      name: "Global Network",
      desc: "Create a global network that spans multiple regions and provides secure, low-latency  connectivity between your cloud resources. This feature enables you to deploy applications and services globally.",
    },
    {
      image: <SiGrammarly size={40} />,
      name: "Cost Optimization",
      desc: "Cloude Data VPC provides several cost optimization features that help you minimize cloud  spending. For example: VPC can be used to create  private, low-cost network connection between  VPCs and flow logs to monitor and optimize network traffic and costs.",
    },
  ];

  return (
    <Layout>
      <Banner data={data} />
      <ControlCard />
      <MenageMantInfo Managementinfodata={Managementinfodata} />
      <ExperienceSecure />
      <ExperienceCard ExpenceData={ExpenceData} />
    </Layout>
  );
};

export default VPC;
