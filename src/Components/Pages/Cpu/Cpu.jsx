import React from "react";
import LayoutPages from "../LayoutPages/LayoutPages";
import CartPage from "./CartPage";
import PriceInfo from "./PriceInfo";
import Feature from "./Feature";
import Parteners from "./Parteners";
import ComputeFamily from "./ComputeFamily";
import cpuimg from "../../../assets/Pages/cupimges2.png";
import img1 from "../../../assets/Pages/price1.webp";
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


const Cpu = () => {
  const cardData = {
    title: "Maximize Computing Power",
    data: [
      {
        image: img1,
        desc: "Dedicated CPU provides exclusive access to CPU resources for a single user or application. With no resource sharing, ensure reliable and consistent performance for CPU-intensive tasks.",
      },
      {
        image: cpuimg,
        desc: "Ideal for CPU-intensive tasks, including data analytics,AI/ML training, video encoding, gaming servers etc. For these tasks, get reliable andconsistent computing power.",
      },
    ],
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
      <LayoutPages>
        <CartPage cardData={cardData} />
        <PriceInfo  priceData={priceData}/>
        <Feature featuredata={featuredata}/>
        <Parteners />
        <ComputeFamily />
      </LayoutPages>
    </>
  );
};

export default Cpu;
