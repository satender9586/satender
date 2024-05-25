import React from "react";
import Layout from "../../../Layout/Layout";
import Deploy from "./Deploy";
import PostSqlCard from "./PostSqlCard";
import PostgresqlBannerImg from "../../../../assets/Pages/PostgresqlBanner.webp"
import Banner from "../../LayoutPages/Banner";


function PostgreSQL() {
  const data = {
    img: PostgresqlBannerImg,
    title: {
      first: "Experience Seamless ",
      second: "Data Management ",
      third: "with PostgreSQL",
      forth: "",
    },
    desc: {
      first: "Smoothly manage your data with trust and ease ",
      second: "using simple and reliable PostgreSQL databases for seamless data infrastructure.",
    },
  };
  return (
    <>
      <Layout>
        <Banner data={data} />
        <PostSqlCard/>
        <Deploy/>
      </Layout>
    </>
  );
}

export default PostgreSQL;
