import React from 'react'
import Layout from '../../Layout/Layout'
import Banner from '../LayoutPages/Banner'
import ipv4Banner from  "../../../assets/Pages/ipv4Banner.webp"
import EightCardWithImg from '../RepeatComponents/EightCardWithImg'
import MenageMantInfo from '../RepeatComponents/MenageMantInfo'
import TwoCardWithTitle from '../RepeatComponents/TwoCardWithTitle'


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
          first: "Experience enhanced connectivity, improved data transfer, and fortified security. Dive into IPv4, and",
          second: "unlock your digital potential.",
        },
      };
  return (
    <Layout>
        <Banner data={data}/>
        <EightCardWithImg/>
        <MenageMantInfo/>
        <TwoCardWithTitle/>
    </Layout>
  )
}

export default Ipv4