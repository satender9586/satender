import React from "react";
import Layout from "../../../Layout/Layout";
import DataHandling from "./DataHandling";
import Mysql from "./Mysql";
import MySqlbanner2Img from "../../../../assets/Pages/MySqlbanner2.webp";
import Banner from "../../LayoutPages/Banner";

function Sql() {
  const data = {
    img: MySqlbanner2Img,
    title: {
      first: "Maximize Your ",
      second: "Database Potential ",
      third: "with MySQL.",
      forth: "",
    },
    desc: {
      first: "Say goodbye to the headache of MySQL management! ",
      second:
        "From setup to backups and updates, we'll take care of all the technicalities.",
    },
  };
  return (
    <>
      <Layout>
        <Banner data={data} />
        <DataHandling />
        <Mysql />
      </Layout>
    </>
  );
}

export default Sql;
