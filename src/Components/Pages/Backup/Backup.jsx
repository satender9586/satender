import React from "react";
import Layout from "../../Layout/Layout";
import Simplified from "./Simplified";
import EncryptedData from "./EncryptedData";
import BackupCard from "./BackupCard";
import Banner from "../LayoutPages/Banner";
import BackupBannerImg from "../../../assets/Pages/bacupBanner.webp"


function Backup() {
  const data = {
    img: BackupBannerImg,
    title: {
      first: "Eliminate Data Loss ",
      second: "Anxiety with Data ",
      third: "Backup",
      forth: "",
    },
    desc: {
      first: "Protect valuable data and say goodbye to the fear  ",
      second: "of losing it with reliable and easy-to-recover data backup solutions.",
    },
  };
  return (
    <>
      <Layout>
        <Banner data={data}/>
       <Simplified/>
       <EncryptedData/>
       <BackupCard/>
        
      </Layout>
    </>
  );
}

export default Backup;
