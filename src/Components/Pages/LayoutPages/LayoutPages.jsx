import React from "react";
import Layout from "../../Layout/Layout";
import Banner from "./Banner";
import bannerImg from "../../../assets/Pages/banner.webp";

const LayoutPages = ({ children }) => {
  const data = {
    img : bannerImg,
    title:{first:"Dedicated Computing",second:"Power for CPU-intensive",third:"Workloads",forth:""},
    desc:{first:"Don't let resource sharing slow down performace. Get dedicated",second:"CPU instances for reliable computing power with no sharing."}
  }
  return (
    <>
      <Layout>
        <Banner data={data} />
        {children}
      </Layout>
    </>
  );
};

export default LayoutPages;
