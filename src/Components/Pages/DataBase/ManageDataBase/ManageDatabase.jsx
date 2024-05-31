import React from "react";
import Layout from "../../../Layout/Layout";
import Banner from "../../LayoutPages/Banner";
import Effort from "./Effort";
import Performance from "./Performance";
import ManageCard from "./ManageCard";
import MySqlBannerImg from "../../../../assets/Pages/MySqlBanner.webp"

function ManageDatabase() {

  const data = {
    img: MySqlBannerImg,
    title: {
      first: "High Availability ",
      second: "and Scalability with ",
      third: "Managed Databases",
      forth: "",
    },
    desc: {
      first: "Manage your MySQL, PostgreSQL, and MongoDB ",
      second: "databases hassle-free with fully managed database services.",
    },
  };

  return (
    <>
      <Layout>
        <Banner data={data}/>
        <Effort/>
        <Performance/>
        <ManageCard/>
      </Layout>
    </>
  );
}

export default ManageDatabase;
