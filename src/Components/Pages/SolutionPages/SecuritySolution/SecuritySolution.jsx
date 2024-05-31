import React from 'react'
import Layout from '../../../Layout/Layout'
import Banner from '../../LayoutPages/Banner'
import securityBanner from "../../../../assets/Pages/Solutionpage/SecuritySolution/securityBanner.png"
import Desc from './Desc'
import Protect from './Protect'
import Cartspage from './Cartspage'
import Finx from './Finx'

const SecuritySolution = () => {
    const data = {
        img: securityBanner,
        title: {
          first: "Experience unbreakable ",
          second: "security and ",
          third: "peace of mind.",
          forth: "",
        },
        desc: {
          first: "Protect your business today with advanced security solutions, designed to keep your ",
          second: "business secured and protected",
        },
      };
  return (
   <Layout>
        <Banner data={data}/>
        <Desc/>
        <Protect/>
        <Cartspage/>
        <Finx/>
   </Layout>
  )
}

export default SecuritySolution