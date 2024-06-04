import React from "react";
import Layout from "../../Layout/Layout";
import Banner from "../LayoutPages/Banner";
import VpnBanner from "../../../assets/Pages/VpnBanner.webp";
import MenageMantInfo from "../RepeatComponents/MenageMantInfo";
import TwoCartWithOutImage from "../RepeatComponents/TwoCartWithOutImage";
import VpnProcess from "./VpnProcess";
import ExperienceCard from "../RepeatComponents/ExperienceCard";
import { GiSpeedometer } from "react-icons/gi";
import { GrVirtualStorage } from "react-icons/gr";
import { GrStorage } from "react-icons/gr";
import { RiPriceTag2Line } from "react-icons/ri";
import { FiShield } from "react-icons/fi";
import { BsToggles } from "react-icons/bs";


const Vpn = () => {

  const Managementinfodata = [
    {
      title1: "Experience Advanced Networking Solution",
      title2: "",
      desc1:
        "Advanced security, scalability, and performance optimization, delivering a cutting-",
      desc2: "edge networking solution for your business.",
    },

    {
      image: <GiSpeedometer size={40} />,
      name: "Advanced security features",
      desc: "Advanced security features such as DDoS protection, network ACLs, and VPC security groups help protect your resources from unauthorized access and potential attacks.",
    },
    {
      image: <GrVirtualStorage size={40} />,
      name: "User-friendly management interface",
      desc: "User-friendly management interface that allows you to easily configure and manage your NAT gateway, without extensive networking expertise.", },
    {
      image: <GrStorage size={40} />,
      name: "Automatic scaling and optimization",
      desc: "Automatically scale and optimize network resources to handle increased network traffic, ensuring your network remains performant and efficient.",},
    {
      image: <RiPriceTag2Line size={40} />,
      name: "Global availability",
      desc: "Cloude Data NAT Gateway service is available in multiple regions around the world, allowing you to easily deploy and manage your network resources wherever your business operates.",},
  ];

  const data = {
    img: VpnBanner,
    title: {
      first: "Safeguard Your ",
      second: "Privacy with Secure ",
      third: "Encrypted VPN",
      forth: "",
    },
    desc: {
      first: "Experience digital peace like never before with Enterprise VPN. Protect your online presence from ",
      second: "prying eyes and hackers, ensuring your personal information remains confidential.",
    },
  };
  const towCartData = [{title:"Simplify Your DNS Management Process"},{  data: "Add, edit, or delete DNS records for your domain, such as A records, CNAME records, MX records, and TXT records." }, { data: "Configure DNS settings like TTL (time to live) values, name server records, and DNSSEC (DNS Security Extensions) settings to enhance DNS infrastructure security and reliability." }];
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
    <Layout>
      <Banner data={data} />
      <MenageMantInfo Managementinfodata={Managementinfodata}/>
      <TwoCartWithOutImage towCartData={towCartData}/>
      <VpnProcess/>
      <ExperienceCard ExpenceData={ExpenceData}/>
    </Layout>
  );
};

export default Vpn;
