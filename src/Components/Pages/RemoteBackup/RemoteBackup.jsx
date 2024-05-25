import React from "react";
import Layout from "../../Layout/Layout";
import Offsite from "./Offsite";
import Discovered from "./Discovered";
import RemoteCard from "./RemoteCard";
import Banner from "../LayoutPages/Banner";
import remoteBackupBanner from "../../../assets/Pages/remoteBackupBanner.webp"


function RemoteBackup() {
   const data = {
    img:remoteBackupBanner,
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
        <Offsite/>
        <Discovered/>
        <RemoteCard/>
      </Layout>
    </>
  );
}

export default RemoteBackup;
