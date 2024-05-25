import React from "react";
import Layout from "../../Layout/Layout";
import Scalability from "./Scalability";
import Durable from "./Durable";
import CardObject from "./CardObject";
import Banner from "../LayoutPages/Banner";
import objectStorangeBanner from "../../../assets/Pages/objectStorangeBanner.webp"

const ObjectStorage = () => {

  const data = {
    img:objectStorangeBanner,
    title: {
      first: "Flexible and Affordable ",
      second: "Object Storage forOn-",
      third: "Demand Storage Needs",
      forth: "",
    },
    desc: {
      first: "Enable easy data storage, management, and access on demand, ",
      second: "with scalability and cost-effectiveness for your business.",
    },
  };
  return (
    <>
      <Layout>
        <Banner data={data}/>
        <Scalability />
        <Durable />
        <CardObject />
      </Layout>
    </>
  );
};

export default ObjectStorage;
