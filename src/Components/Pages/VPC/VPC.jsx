import React from 'react'
import Layout from '../../Layout/Layout'
import Banner from '../LayoutPages/Banner'
import  VpcBanner from "../../../assets/Pages/VpcBanner.webp"
import ControlCard from './ControlCard'
import MenageMantInfo from '../RepeatComponents/MenageMantInfo'
import ExperienceSecure from './ExperienceSecure'
import ExperienceCard from '../RepeatComponents/ExperienceCard'

const VPC = () => {
    const data = {
        img: VpcBanner,
        title: {
          first: "Isolate your traffic with ",
          second: "VPC (Virtual Private ",
          third: "Cloud)",
          forth: "",
        },
        desc: {
          first: "Ensure an additional layer of security and control over ",
          second: "infrastructure by securing and isolating cloud networks.",
        },
      };
  return (
    <Layout>
        <Banner data={data}/>
        <ControlCard/>
        <MenageMantInfo/>
        <ExperienceSecure/>
        <ExperienceCard/>
    </Layout>
  )
}

export default VPC