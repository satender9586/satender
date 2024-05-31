import React from 'react'
import Layout from '../../Layout/Layout'
import Banner from '../LayoutPages/Banner'
import gateWayBannerImg from "../../../assets/Pages/gateWayBanner.webp"
import TwoCartWithOutImage from '../RepeatComponents/TwoCartWithOutImage'
import MenageMantInfo from '../RepeatComponents/MenageMantInfo'

const GateWay = () => {

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
  return (
    <Layout>
        <Banner data={data}/>
        <TwoCartWithOutImage/>
        <MenageMantInfo/>
    </Layout>
  )
}

export default GateWay