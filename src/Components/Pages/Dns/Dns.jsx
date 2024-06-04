import { Box } from "@mui/material";
import React from "react";
import Layout from "../../Layout/Layout";
import DsnBannerImg from "../../../assets/Pages/dnsBanner.webp";
import Banner from "../LayoutPages/Banner";
import TotalControls from "./TotalControls";
import Report from "./Report";
import Experience from "../Network/Experience";
import TwoCartWithOutImage from "../RepeatComponents/TwoCartWithOutImage";

const Dns = () => {
  const data = {
    img: DsnBannerImg,
    title: {
      first: "Effortless DNS  ",
      second: "Management ",
      third: "",
      forth: "",
    },
    desc: {
      first: "User-friendly interface and advanced security measures ",
      second: "give you complete control over your DNS records.",
    },
  };
  const towCartData = [{title:"Simplify Your DNS Management Process"},{  data: "Add, edit, or delete DNS records for your domain, such as A records, CNAME records, MX records, and TXT records." }, { data: "Configure DNS settings like TTL (time to live) values, name server records, and DNSSEC (DNS Security Extensions) settings to enhance DNS infrastructure security and reliability." }];
  return (
    <Layout>
      <Banner data={data} />
      <TwoCartWithOutImage towCartData={towCartData} />
      <TotalControls />
      <Report />
      <Experience />
    </Layout>
  );
};

export default Dns;
