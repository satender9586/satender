import React from "react";
import Layout from "../../Layout/Layout";
import Scalability from "./Scalability";
import Durable from "./Durable";
import CardObject from "./CardObject";
import Banner from "../LayoutPages/Banner";
import objectStorangeBanner from "../../../assets/Pages/objectStorangeBanner.webp"
import { BsFillOpticalAudioFill } from "react-icons/bs";
import { MdOutlineBackup } from "react-icons/md";
import { IoStopwatchOutline } from "react-icons/io5";
import { MdDataUsage } from "react-icons/md";

const ObjectStorage = () => {

  const data = {
    img:objectStorangeBanner,
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

  const Managementinfodata = [
    {
      image: <BsFillOpticalAudioFill size={40} />,
      name: "Optimized Data Experience",
      desc: "Object storage solutions that optimize your data experience, delivering high performance and scalability for your business needs.",
    },
    {
      image: <MdOutlineBackup size={40} />,
      name: "Automatic Backup",
      desc: "Protect your valuable data from loss and leverage object storage backup solutions integrated with popular platforms like cPanel,WordPress, and more",
    },
    {
      image: <IoStopwatchOutline size={40} />,
      name: "High-Performance",
      desc: "With state-of-the-art security measures, you get reliable and secure object storage solutions that offer high performance and scalability for your business.",
    },
    {
      image: <MdDataUsage size={40} />,
      name: "Data Durability",
      desc: "Ensure data durability in the event of hardware failures, power outages, or other problems, guaranteeing data integrity and availability.",
    },
  ];

  return (
    <>
      <Layout>
        <Banner data={data}/>
        <Scalability />
        <Durable Managementinfodata={Managementinfodata}/>
        <CardObject />
      </Layout>
    </>
  );
};

export default ObjectStorage;
