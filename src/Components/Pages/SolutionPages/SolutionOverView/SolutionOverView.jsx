import React from 'react'
import Layout from '../../../Layout/Layout'
import Infrastructure from './Infrastructure'
import Image from './Image'
import Deployment from './Deployment'

const SolutionOverView = () => {
  return (
    <Layout>
        <Infrastructure/>
        <Image/>
        <Deployment/>
    </Layout>
  )
}

export default SolutionOverView