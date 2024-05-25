import React from 'react'
import Layout from '../../Layout/Layout'
import Banner from '../LayoutPages/Banner'
import UnderBrakable from './UnderBrakable'
import CyberDefence from './CyberDefence'
import Cart from './Cart'
import Experience from './Experience'
import networkBanner from "../../../assets/Pages/network.webp"

const Network = () => {
    const data = {
        img: networkBanner,
        title: {
          first: "Safeguard your business  ",
          second: "with Advanced Cloud ",
          third: "Firewall",
          forth: "",
        },
        desc: {
          first: "Monitor all your incoming and outgoing packets, block unauthorized",
          second: "access and easily protect your business from malicious traffic.",
        },
      };
  return (
    <Layout>
        <Banner data={data}/>
        <UnderBrakable/>
        <CyberDefence/>
        <Cart/>
        <Experience/>
    </Layout>
  )
}

export default Network