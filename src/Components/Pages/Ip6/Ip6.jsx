import React from "react";
import Layout from "../../Layout/Layout";
import Banner from "../LayoutPages/Banner";
import ip6BannerImg from "../../../assets/Pages/ip6Banner.webp";
import EightCardWithImg from "../RepeatComponents/EightCardWithImg";
import ManagementInfo from "../Kurbernates/ManagementInfo";
import TwoCardWithTitle from "../RepeatComponents/TwoCardWithTitle";
import { FaUmbrella } from "react-icons/fa6";
import { FaSwatchbook } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoIosCloud } from "react-icons/io";
import { FaBriefcaseMedical } from "react-icons/fa";
import { RiZoomInFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { GiSpeedometer } from "react-icons/gi";
import { GrVirtualStorage } from "react-icons/gr";
import { GrStorage } from "react-icons/gr";
import { RiPriceTag2Line } from "react-icons/ri";


const Ip6 = () => {
  const data = {
    img: ip6BannerImg,
    title: {
      first: "Experience Seamless ",
      second: "Connectivity with IPv6.",
      third: "",
      forth: "",
    },
    desc: {
      first: "Embrace the power of this next-generation internet protocol for ",
      second: "enhanced networking and effortless  digital communication.",
    },
  };
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
  const Managementinfodata = [
    {
      title1: "The Ultimate Cyber Defense to",
      title2: "Secure Your Business",
      desc1:
        "Protect Your Business with Advanced Threat Detection and Prevention to Stay Ahead of Cybercriminals",
      desc2: "",
    },

    {
      image: <GiSpeedometer size={40} />,
      name: "Enjoy High-Speed Data Access",
      desc: "Store large amounts of data in a reliable and future -proof platform powered by High Speed SSDs and enjoy unbeatable speed.",
    },
    {
      image: <GrVirtualStorage size={40} />,
      name: "Simplify Your Data Storage",
      desc: "Managing data storage doesn't have to be complicated. Cloude Data makes it easy for you to store, organize and manage your data.",
    },
    {
      image: <GrStorage size={40} />,
      name: "Data Availability Guaranteed",
      desc: "Your data is available and accessible at all times, even in the event of a failure or outage.",
    },
    {
      image: <RiPriceTag2Line size={40} />,
      name: "Affordable Price",
      desc: "Affordable block storage provides the storage you need at a price that fits your budget.",
    },
  ];
  const TwoCardWithTitleData = [
    {title1:"Unlock Connectivity",title2:"",desc1:"Experience seamless networking with versatile Public and Private IPs. Empower your ",desc2:"digital journey with Cloude Data comprehensive IP solutions."},
    {name:"Public IP",desc:"Embrace a globally accessible online presence with Public IP. Connect with the world, host servers, and reach your audience effortlessly."},
    {name:"Private IP",desc:"Securely connect devices within your network using Private IP. Enjoy enhanced privacy, reliable   internal communication, and efficient data transfer. "},
  ]
  return (
    <Layout>
      <Banner data={data} />
      <EightCardWithImg eightcartWithImgdata={eightcartWithImgdata}/>
      <ManagementInfo Managementinfodata={Managementinfodata}/>
      <TwoCardWithTitle TwoCardWithTitleData={TwoCardWithTitleData} />
    </Layout>
  );
};

export default Ip6;
