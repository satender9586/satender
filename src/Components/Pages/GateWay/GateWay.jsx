import React from 'react'
import Layout from '../../Layout/Layout'
import Banner from '../LayoutPages/Banner'
import gateWayBannerImg from "../../../assets/Pages/gateWayBanner.webp"
import TwoCartWithOutImage from '../RepeatComponents/TwoCartWithOutImage'
import MenageMantInfo from '../RepeatComponents/MenageMantInfo'
import { GiSpeedometer } from "react-icons/gi";
import { GrVirtualStorage } from "react-icons/gr";
import { GrStorage } from "react-icons/gr";
import { RiPriceTag2Line } from "react-icons/ri";

const GateWay = () => {

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
        img: gateWayBannerImg,
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

      const towCartData = [{title:"Reliable Network Access"},{  data: "Securely connect your private network to the internet, while keeping private IP addresses hidden from the public. This protects your resources from unauthorized access and potential attacks." }, { data: "Scale easily with multiple devices sharing a single public IP address, reducing costs and simplifying network management. Ideal for hosting web servers, accessing cloud services, and enabling remote access to internal resources." }];
  return (
    <Layout>
        <Banner data={data}/>
        <TwoCartWithOutImage towCartData={towCartData}/>
        <MenageMantInfo Managementinfodata={Managementinfodata}/>
    </Layout>
  )
}

export default GateWay