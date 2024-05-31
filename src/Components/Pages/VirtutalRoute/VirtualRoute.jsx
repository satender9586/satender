import React from 'react'
import Layout from '../../Layout/Layout'
import Banner from '../LayoutPages/Banner'
import virtutalBannerImg from "../../../assets/Pages/virtutalBanner.webp"
import MenageMantInfo from '../RepeatComponents/MenageMantInfo'
import EightCardWithImg from '../RepeatComponents/EightCardWithImg'

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
          first: "Experience digital peace like never before with Enterprise VPN. Protect your online presence from ",
          second: "prying eyes and hackers, ensuring your personal information remains confidential.",
        },
      };
  return (
    <Layout>
            <Banner data={data}/>
            <MenageMantInfo/>
            <MenageMantInfo/>
            <EightCardWithImg/>
    </Layout>
  )
}

export default VirtualRoute