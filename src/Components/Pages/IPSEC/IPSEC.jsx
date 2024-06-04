import React from 'react'
import Layout from "../../Layout/Layout.jsx"
import Banner from "../LayoutPages/Banner.jsx"
import ipsecBannerImg from "../../../assets/Pages/ipsecBanner.webp"
import ExperienceCard from '../RepeatComponents/ExperienceCard.jsx'
import MenageMantInfo from '../RepeatComponents/MenageMantInfo.jsx'
import EightCardWithImg from '../RepeatComponents/EightCardWithImg.jsx'
import { TbApi } from "react-icons/tb";
import { FaPiedPiperSquare } from "react-icons/fa";
import { GiSpeedometer } from "react-icons/gi";
import { GrVirtualStorage } from "react-icons/gr";
import { GrStorage } from "react-icons/gr";
import { RiPriceTag2Line } from "react-icons/ri";
import { FaUmbrella } from "react-icons/fa6";
import { FaSwatchbook } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoIosCloud } from "react-icons/io";
import { FaBriefcaseMedical } from "react-icons/fa";
import { RiZoomInFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
;

const IPSEC = () => {
    const data = {
        img: ipsecBannerImg,
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
      const eightcartWithImgdata = [
        {
          title1: "Harness the Power of IPv4",
          title2: "",
          desc1: "Elevate your network with IPv4's widespread compatibility, easy ",
          desc2: "implementation, robust security, and efficient routing.",
        },
        {
          image: <FaUmbrella size={50} />,
          name: "High performance",
          desc: "IPv4's global acceptance ensures broad compatibility.",
        },
        {
          image: <FaSwatchbook size={50} />,
          name: "Easy Implementation",
          desc: "Its simple structure makes network management straightforward.",
        },
        {
          image: <FaBuildingColumns size={50} />,
          name: "Established Infrastructure",
          desc: "The vast existing infrastructure around IPv4 ensures reliability.",
        },
        {
          image: <FaLocationCrosshairs size={50} />,
          name: "Hardware Compatibility",
          desc: "Most existing hardware efficiently supports IPv4.",
        },
        {
          image: <IoIosCloud size={50} />,
          name: "Broadcast Support",
          desc: "IPv4 allows broadcasting to all network devices.",
        },
        {
          image: <FaBriefcaseMedical size={50} />,
          name: "Efficient Routing",
          desc: "Well-established protocols enable scalable data routing.",
        },
        {
          image: <RiZoomInFill size={50} />,
          name: "Mature Security",
          desc: "Years of usage have led to robust security  measures.",
        },
        {
          image: <FaCode size={50} />,
          name: "NAT Compatibility",
          desc: "NAT addresses IPv4 exhaustion by reusing private IP addresses.",
        },
      ];
    
  return (
    <Layout>
        <Banner data={data}/>
        <ExperienceCard ExpenceData={ExpenceData}/>
        <MenageMantInfo Managementinfodata={Managementinfodata}/>
        <EightCardWithImg eightcartWithImgdata={eightcartWithImgdata}/> 
    </Layout>
  )
}

export default IPSEC