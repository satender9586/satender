import React from "react";
import Layout from "../../Layout/Layout";
import Banner from "../LayoutPages/Banner";
import virtutalBannerImg from "../../../assets/Pages/virtutalBanner.webp";
import MenageMantInfo from "../RepeatComponents/MenageMantInfo";
import EightCardWithImg from "../RepeatComponents/EightCardWithImg";
import { FaSection } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { FaCloudscale } from "react-icons/fa6";
import { TbZoomPan } from "react-icons/tb";
import { IoHardwareChipSharp } from "react-icons/io5";
import { DiHtml53dEffects } from "react-icons/di";
import { BsFillOpticalAudioFill } from "react-icons/bs";
import { GrFanOption } from "react-icons/gr";
import { FaUmbrella } from "react-icons/fa6";
import { FaSwatchbook } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoIosCloud } from "react-icons/io";
import { FaBriefcaseMedical } from "react-icons/fa";
import { RiZoomInFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";

const VirtualRoute = () => {
  const data = {
    img: virtutalBannerImg,
    title: {
      first: "Safeguard Your ",
      second: "Privacy with Secure ",
      third: "Encrypted VPN",
      forth: "",
    },
    desc: {
      first:
        "Experience digital peace like never before with Enterprise VPN. Protect your online presence from ",
      second:
        "prying eyes and hackers, ensuring your personal information remains confidential.",
    },
  };

  const Managementinfodata = [
    {
      title1: "How Virtual Routers Can Benefit Your Business",
      title2: "Secure Your Business",
      desc1:
        "Experience enhanced connectivity, increased efficiency, and significant cost savings.",
      desc2: "Unleash the full potential of your network infrastructure.",
    },

    {
      image: <FaSection size={40} />,
      name: "Secure Remote Access",
      desc: "Establish a VPN with virtual routers for secure network access from anywhere. Collaborate, access files, and       work with peace of mind.      ",
    },
    {
      image: <FaWifi size={40} />,
      name: "Network Testing and Development",
      desc: "Simulate complex network scenarios with virtual routers. Test configurations, validate performance, and save costs on hardware.",
    },
    {
      image: <FaCloudscale size={40} />,
      name: "Cloud Connectivity and Scalability",
      desc: "Connect virtual machines and networks in the cloud effortlessly. Optimize traffic, scale applications, and  ensure efficient communication.",
    },
    {
      image: <TbZoomPan size={40} />,
      name: "IoT Network Management",
      desc: "Control IoT devices with virtual routers. Ensure reliable connectivity, segment traffic, and enforce robust      security measures.",
    },
  ];
  const Managementinfodata2 = [
    {
      title1: "Empower Your Network with Virtual Routers",
      title2: "",
      desc1:
        "Take control of your network infrastructure and experience the transformative ",
      desc2: "power of virtual routers.",
    },

    {
      image: <IoHardwareChipSharp size={40} />,
      name: "Seamless Compatibility",
      desc: "Experience hassle-free integration with diverse hardware and protocols. Cloude Data virtual router ensures seamless      compatibility.",
    },
    {
      image: <DiHtml53dEffects size={40} />,
      name: "Effortless Configuration",
      desc: "Simplify setup with user-friendly interface. Empower users of all levels to easily configure and manage their  networks.",
    },
    {
      image: <BsFillOpticalAudioFill size={40} />,
      name: "Optimal Resource Allocation",
      desc: "Optimize performance without wasting resources. Intelligently allocates resources,optimizing efficiency and scalability.",
    },
    {
      image: <GrFanOption size={40} />,
      name: "Uninterrupted Reliability",
      desc: "Stay connected, even during host device issues. Our virtual router ensures continuous network operations, minimizing downtime.",
    },
  ];

  const eightcartWithImgdata = [ 
    {
      title1: "Empower Your Network with Virtual Routers",
      title2: "",
      desc1:
        "Take control of your network infrastructure and experience the transformative ",
      desc2: "power of virtual routers.",
    },
    {
      image:<FaUmbrella size={50}/>,
      desc:"Small and Medium-sized Businesses (SMBs)"
    },
    {
      image:<FaSwatchbook size={50}/>,
      desc:"Remote and Distributed Workforces"
    },
    {
      image:<FaBuildingColumns size={50}/>,
      desc:"Startups and Entrepreneurial  Ventures."
    },
    {
      image:<FaLocationCrosshairs size={50}/>,
      desc:"Branch Offices  and Remote  Sites"
    },
    {
      image:<IoIosCloud size={50}/>,
      desc:"Cloud-based Businesses"
    },
    {
      image:<FaBriefcaseMedical size={50}/>,
      desc:"Educational Institutions."
    },
    {
      image:<RiZoomInFill size={50}/>,
      desc:"Internet of Things  (IoT) Implementations."
    },
    {
      image:<FaCode size={50}/>,
      desc:"Software Development and Testing."
    },
  ];
  return (
    <Layout>
      <Banner data={data} />
      <MenageMantInfo Managementinfodata={Managementinfodata} />
      <MenageMantInfo Managementinfodata={Managementinfodata2} />
      <EightCardWithImg eightcartWithImgdata={eightcartWithImgdata}/>
    </Layout>
  );
};

export default VirtualRoute;
