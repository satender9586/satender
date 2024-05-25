import React from 'react'
import Layout from '../../Layout/Layout'
import Banner from '../LayoutPages/Banner';
import iPBannerImg from "../../../assets/Pages/iPBanner.webp"
import TwoCartWithOutImage from '../RepeatComponents/TwoCartWithOutImage';
import MenageMantInfo from '../RepeatComponents/MenageMantInfo';
import ExperienceCard from '../RepeatComponents/ExperienceCard';

const Ip = () => {
        const data = {
            img: iPBannerImg,
            title: {
            first: "Effortless DNS  ",
            second: "Management ",
            third: "",
            forth: "",
            },
            desc: {
            first: "User-friendly interface and advanced security measures ",
            second: "give you complete control over your DNS records.",
            },
        };
  return (
    <Layout>
        <Banner data={data}/>
        <TwoCartWithOutImage/>
        <MenageMantInfo/>
        <ExperienceCard/>
    </Layout>
  )
}

export default Ip