import React from "react";
import Layout from "../../../Layout/Layout";
import Scale from "./Scale";
import AdminTask from "./AdminTask";
import MongoCard from "./MongoCard";
import Banner from "../../LayoutPages/Banner";
import MongodbBannnerImg from "../../../../assets/Pages/MongodbBannner.webp"


function MongoDb() {
  const data = {
    img: MongodbBannnerImg,
    title: {
      first: "Hassle-free MongoDB",
      second: "Integration",
      third: "",
      forth: "",
    },
    desc: {
      first: "Unlock your modern apps' potential with seamless ",
      second: "MongoDB integration for effortless data management and simplified workflows.",
    },
  };
  return (
    <>
      <Layout>
        <Banner data={data}/>
        <Scale />
        <AdminTask />
        <MongoCard />
      </Layout>
    </>
  );
}

export default MongoDb;
