import React from "react";
import Layout from "../../Layout/Layout";
import ProSnap from "./ProSnap";
import Safeguard from "./Safeguard";
import Flash from "./Flash";
import Banner from "../LayoutPages/Banner";
import snapshortBanner from "../../../assets/Pages/snapshortBanner.webp"

function Snapshot() {

  const data = {
    img:snapshortBanner,
    title: {
      first: "Reliable and Scalable ",
      second: "Remote Backup ",
      third: "Solutions",
      forth: "",
    },
    desc: {
      first: "Safeguard your data by replicating it to offsite servers to ",
      second: "ensure easy recovery.",
    },
  };
  return (
    <>
      <Layout>
        <Banner data={data}/>
        <ProSnap />
        <Safeguard />
        <Flash />
      </Layout>
    </>
  );
}

export default Snapshot;
