import React from "react";
import Layout from "../../Layout/Layout";
import Banner from "../LayoutPages/Banner";
import iPBannerImg from "../../../assets/Pages/iPBanner.webp";
import TwoCartWithOutImage from "../RepeatComponents/TwoCartWithOutImage";
import MenageMantInfo from "../RepeatComponents/MenageMantInfo";
import ExperienceCard from "../RepeatComponents/ExperienceCard";
import { IoLocation } from "react-icons/io5";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { GiFlexibleStar } from "react-icons/gi";
import { FaGoogleDrive } from "react-icons/fa6";
import { FiShield } from "react-icons/fi";
import { BsToggles } from "react-icons/bs";

const Ip = () => {
  const data = {
    img: iPBannerImg,
    title: {
      first: "Effortless DNS  ",
      second: "Management ",
      third: "",
      forth: "",
    },
    desc: {
      first: "User-friendly interface and advanced security measures ",
      second: "give you complete control over your DNS records.",
    },
  };

  const Managementinfodata = [
    {
      title1: "Optimize Cloud Performance with ",
      title2: "Dedicated IP Addresses",
      desc1:
        "Dedicated IP addresses for cloud resources, ensure optimal performance and ",
      desc2: "minimize network latency.",
    },
    {
      image: <IoLocation size={40} />,
      name: "Dedicated Static IP Address",
      desc: "Dedicated static IP address for your cloud resources, ensuring seamless connectivity and enhanced security.",
    },
    {
      image: <MdOutlineSettingsApplications size={40} />,
      name: "Improved Application Performance",
      desc: "Improve application performance by minimizing network latency and errors caused by IP address conflicts or changes.",
    },
    {
      image: <GiFlexibleStar size={40} />,
      name: "Flexibility",
      desc: "Easily configure VMs with desired IPs. Even after deletion and recreation, maintain your preferred IP settings effortlessly.",
    },
    {
      image: <FaGoogleDrive size={40} />,
      name: "Simplified Management",
      desc: "Simplified management of your cloud infrastructure  by providing a centralized and user-friendly interface to manage your IP addresses.",
    },
  ];

  const towCartData = [{title:"Simplify Your DNS Management Process"},{  data: "Add, edit, or delete DNS records for your domain, such as A records, CNAME records, MX records, and TXT records." }, { data: "Configure DNS settings like TTL (time to live) values, name server records, and DNSSEC (DNS Security Extensions) settings to enhance DNS infrastructure security and reliability." }];

  const ExpenceData = [
    {
      title:"Experience Value-Added Features"
    },
    {
      image: <FiShield size={40}/>,
      name: "Business Continuity",
      desc: "Ensure uninterrupted access to your cloud resources, which is key to maintaining business continuity and meeting service-level  agreements.",
    },
    {
      image: <BsToggles size={40}/>,
      name: "Create with Ease",
      desc: "Create and manage dedicated static IP addresses easily, giving you more control and flexibility over your cloud infrastructure. ",
    },
  ];

  return (
    <Layout>
      <Banner data={data} />
      <TwoCartWithOutImage towCartData={towCartData}/>
      <MenageMantInfo Managementinfodata={Managementinfodata} />
      <ExperienceCard ExpenceData={ExpenceData}/>
    </Layout>
  );
};

export default Ip;
