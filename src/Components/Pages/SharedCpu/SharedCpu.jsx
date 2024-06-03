import React from "react";
import Balanced from "./Balanced";
import Feature from "../Cpu/Feature";
import PriceInfo from "../Cpu/PriceInfo";
import Parteners from "../Cpu/Parteners";
import ComputeFamily from "../Cpu/ComputeFamily";
import Layout from "../../../Components/Layout/Layout";
import Banner from "../../Pages/LayoutPages/Banner";
import sharedImg from "../../../assets/Pages/sharedCpuBanner.webp"
import { CgRowFirst } from "react-icons/cg";
import { BiLogoGraphql } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLuggageDepositFill } from "react-icons/ri";
import { FiMonitor } from "react-icons/fi";
import { IoAlbumsSharp } from "react-icons/io5";
import { LuDatabaseBackup } from "react-icons/lu";
import { GrStorage } from "react-icons/gr";
import { GrVirtualStorage } from "react-icons/gr";
import { ImDownload2 } from "react-icons/im";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaDumpsterFire } from "react-icons/fa";

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

  const priceData = {
    title: "4X Computing Power for Critical Workloads",
    subtitle:"Dedicated compute solutions designed with your business needs in mind, ensuring critical workloads perform efficiently.",
    data: [
      {
        image: <CgRowFirst size={50} />,
        title: "Reliable Performance Guarantee",
        desc:"Dedicated CPU instances ensure predictable performance for latency-sensitive apps."
      },
      {
        image: <BiLogoGraphql size={50}/>,
        title: "Exclusive Resource Allocation",
        desc:"Enjoy competition-free resources as Dedicated CPU vCPU threads are assigned exclusively to cores."
      },
      {
        image: <FaRegUserCircle size={50}/>,
        title: "User-friendly Management",
        desc:"Effortlessly manage resources with an easy to use interface."
      },
      {
        image: <RiLuggageDepositFill size={50}/>,
        title: "Best Price Performance Ratio",
        desc:"Choose from a variety of competitive plans, tailored to match your workload needs."
      },
    ],
  };
  const featuredata = {
    title: "4X Computing Power for Critical Workloads",
   
    data: [
      {
        image: <FiMonitor size={50} />,
        title: "Monitoring",
        desc:"Real time visibility for proactive cloud mangement."
      },
      {
        image: <IoAlbumsSharp size={50}/>,
        title: "SSH Keys",
        desc:"Securely authenticate and manage cloud access."
      },
      {
        image: <LuDatabaseBackup size={50}/>,
        title: "Backups",
        desc:"Automated, reliable data protection and quick recovery."
      },
      {
        image: <GrStorage size={50}/>,
        title: "Object Storage",
        desc:"Flexible, cost-effective storage for unstructured data."
      },
      {
        image: <GrVirtualStorage size={50} />,
        title: "Block Storage",
        desc:"High-performance, scalable app solution."
      },
      {
        image: <ImDownload2 size={50}/>,
        title: "Load Balancers",
        desc:"Efficient traffic distribution for high availability."
      },
      {
        image: <FaSnapchatSquare size={50}/>,
        title: "Snapshots",
        desc:"Point-in-time instance backups for easy restoration."
      },
      {
        image: <FaDumpsterFire size={50}/>,
        title: "Cloud Firewalls",
        desc:"Robust security shields for app and data protection"
      },
    ],
  };

  return (
    <>
      <Layout>
        <Banner data={data}/>
        <Balanced />
       
        <PriceInfo  priceData={priceData}/>
        <Feature featuredata={featuredata}/>
        <Parteners />
        <ComputeFamily />
      </Layout>
    </>
  );
};

export default SharedCpu;
