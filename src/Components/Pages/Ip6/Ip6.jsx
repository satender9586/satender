import React from 'react'
import Layout from '../../Layout/Layout'
import Banner from '../LayoutPages/Banner'
import ip6BannerImg from "../../../assets/Pages/ip6Banner.webp"
import EightCardWithImg from '../RepeatComponents/EightCardWithImg'
import ManagementInfo from '../Kurbernates/ManagementInfo'
import TwoCardWithTitle from '../RepeatComponents/TwoCardWithTitle'

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
  return (
    <Layout>
        <Banner data={data}/>
       <EightCardWithImg/> 
       <ManagementInfo/>
       <TwoCardWithTitle/>
    </Layout>
  )
}

export default Ip6