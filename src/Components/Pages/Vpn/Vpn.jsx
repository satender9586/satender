import React from "react";
import Layout from "../../Layout/Layout";
import Banner from "../LayoutPages/Banner";
import VpnBanner from "../../../assets/Pages/VpnBanner.webp";
import MenageMantInfo from "../RepeatComponents/MenageMantInfo";
import TwoCartWithOutImage from "../RepeatComponents/TwoCartWithOutImage";
import VpnProcess from "./VpnProcess";
import ExperienceCard from "../RepeatComponents/ExperienceCard";



const Vpn = () => {
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
  return (
    <Layout>
      <Banner data={data} />
      <MenageMantInfo/>
      <TwoCartWithOutImage/>
      <VpnProcess/>
      <ExperienceCard/>
    </Layout>
  );
};

export default Vpn;
