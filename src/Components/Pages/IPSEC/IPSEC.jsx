import React from 'react'
import Layout from "../../Layout/Layout.jsx"
import Banner from "../LayoutPages/Banner.jsx"
import ipsecBannerImg from "../../../assets/Pages/ipsecBanner.webp"
import ExperienceCard from '../RepeatComponents/ExperienceCard.jsx'
import MenageMantInfo from '../RepeatComponents/MenageMantInfo.jsx'
import EightCardWithImg from '../RepeatComponents/EightCardWithImg.jsx'

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
  return (
    <Layout>
        <Banner data={data}/>
        <ExperienceCard/>
        <MenageMantInfo/>
        <EightCardWithImg/> 
    </Layout>
  )
}

export default IPSEC