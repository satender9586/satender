import React from "react";
import Layout from "../../Layout/Layout";
import Banner from "../LayoutPages/Banner";
import ipv4Banner from "../../../assets/Pages/ipv4Banner.webp";
import EightCardWithImg from "../RepeatComponents/EightCardWithImg";
import MenageMantInfo from "../RepeatComponents/MenageMantInfo";
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

const Ipv4 = () => {
  const data = {
    img: ipv4Banner,
    title: {
      first: "Dive into the Internet's ",
      second: "Architecture with IPv4 ",
      third: "",
      forth: "",
    },
    desc: {
      first:
        "Experience enhanced connectivity, improved data transfer, and fortified security. Dive into IPv4, and",
      second: "unlock your digital potential.",
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
      title1: "Optimize Your Networking with ",
      title2: "Cloude Data IPv4 Services",
      desc1:
        "Experience seamless networking with Cloude Data IPv4 services - designed for ",
      desc2: "superior compatibility, security, and efficiency.",
    },

    {
      image: <GiSpeedometer size={40} />,
      name: "Global Compatibility",
      desc: "Experience seamless interoperability with Cloude Data IPv4 services.",
    },
    {
      image: <GrVirtualStorage size={40} />,
      name: "Ease and Control",
      desc: "Simplify network management without sacrificing command.",
    },
    {
      image: <GrStorage size={40} />,
      name: "Enhanced Security",
      desc: "Cloude Data IPv4 services prioritize robust data protection.",
    },
    {
      image: <RiPriceTag2Line size={40} />,
      name: "Efficient Data Flow",
      desc: "Benefit from smooth and scalable data transmission.",
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
      <EightCardWithImg eightcartWithImgdata={eightcartWithImgdata} />
      <MenageMantInfo Managementinfodata={Managementinfodata} />
      <TwoCardWithTitle TwoCardWithTitleData={TwoCardWithTitleData} />
    </Layout>
  );
};

export default Ipv4;
