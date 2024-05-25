import React from 'react'
import Layout from '../../Layout/Layout'
import protectionImg from "../../../assets/Pages/ProtectionBanner.webp"
import Banner from '../LayoutPages/Banner';
import CartImg from './CartImg';
import Unbrakable from './Unbrakable';
import HowWork from './HowWork';

const Protection = () => {
    const data = {
        img: protectionImg,
        title: {
          first: "Enjoy peace of mind ",
          second: "with high-end DDoS ",
          third: "protection",
          forth: "",
        },
        desc: {
          first: "Shield your business with high end security and unleash ",
          second: "Shield your business with high end security and unleash he power of advanced DDoS protection to secure your        business for a long run.",
        },
      };
  return (
    <Layout>
        <Banner  data={data}/>
        <CartImg/>
        <Unbrakable/>
        <HowWork/>
    </Layout>
  )
}

export default Protection