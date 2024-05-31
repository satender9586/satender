import React from "react";
import "./App.css";
import Home from "./Components/Layout/Home";
import { Routes, Route } from "react-router-dom";
import MarketPlace from "./Components/Pages/MarketPlaces/MarketPlace";
import Price from "./Components/Pages/Cpu/Cpu";
import SharedCpu from "./Components/Pages/SharedCpu/SharedCpu";
import HighMemory from "./Components/Pages/HighMemory/HighMemory";
import Kurbernates from "./Components/Pages/Kurbernates/Kurbernates";
import Privacy from "./Components/Pages/PrivacyAndPolicies/Privacy";
import Support from "./Components/Pages/PrivacyAndPolicies/Support";
import Refund from "./Components/Pages/PrivacyAndPolicies/Refund";
import Transation from "./Components/Pages/PrivacyAndPolicies/Transation";
import NoteFound from "./Components/Layout/NoteFound";
import Network from "./Components/Pages/Network/Network";
import Protection from "./Components/Pages/Protection/Protection";
import BlockStorage from "./Components/Pages/BlockStorage/BlockStorage";
import ObjectStorage from "./Components/Pages/ObjectStorage/ObjectStorage";
import Snapshot from "./Components/Pages/Snapshots/Snapshot";
import Iso from "./Components/Pages/ISO/Iso";
import Backup from "./Components/Pages/Backup/Backup";
import RemoteBackup from "./Components/Pages/RemoteBackup/RemoteBackup";
import ManageDatabase from "./Components/Pages/DataBase/ManageDataBase/ManageDatabase";
import MongoDb from "./Components/Pages/DataBase/MongoDb/MongoDb";
import Sql from "./Components/Pages/DataBase/SQL/Sql";
import PostgreSQL from "./Components/Pages/DataBase/PostgreSQL/PostgreSQL";
import Dns from "./Components/Pages/Dns/Dns";
import OptimizeTrafic from "./Components/Pages/OptimizeTrafic/OptimizeTrafic";
import VPC from "./Components/Pages/VPC/VPC";
import Vpn from "./Components/Pages/Vpn/Vpn";
import Ip from "./Components/Pages/Ip/Ip";
import Ipv4 from "./Components/Pages/Ipv4/Ipv4";
import Ip6 from "./Components/Pages/Ip6/Ip6";
import VirtualRoute from "./Components/Pages/VirtutalRoute/VirtualRoute";
import GateWay from "./Components/Pages/GateWay/GateWay";
import IPSEC from "./Components/Pages/IPSEC/IPSEC";
import SolutionOverView from "./Components/Pages/SolutionPages/SolutionOverView/SolutionOverView";
import SecuritySolution from "./Components/Pages/SolutionPages/SecuritySolution/SecuritySolution";
import Trust from "./Components/Pages/SolutionPages/Trust/Trust";
import Management from "./Components/Pages/SolutionPages/Management/Management";
import Problem from "./Components/Pages/SolutionPages/Problem/Problem";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/marketplace" element={<MarketPlace />}/>
        <Route path="/privacy" element={<Privacy />}/>
        <Route path="/customersupport" element={<Support />}/>
        <Route path="/refundpolicy" element={<Refund />}/>
        <Route path="/termsofuse" element={<Transation />}/>
        <Route path="/*" element={<NoteFound />}/>
       

        {/*------------------Products>Compute-----------------*/}
        <Route path="/cpu" element={<Price />}/>
        <Route path="/sharedcpu" element={<SharedCpu />}/>
        <Route path="/highmemory" element={<HighMemory />}/>
        <Route path="/kurbo" element={<Kurbernates />}/> 
        {/*---------------------------------------------------*/}

        {/*------------------Products>Storage-----------------*/}
        <Route path="/Backup" element={<Backup/>}/>
        <Route path="/Iso" element={<Iso/>}/>
        <Route path="/BlockStorage" element={<BlockStorage/>}/>
        <Route path="/Snapshot" element={<Snapshot/>}/>
        <Route path="/RemoteBackup" element={<RemoteBackup/>}/>
        <Route path="/ObjectStorage" element={<ObjectStorage/>}/>
        {/*---------------------------------------------------*/}

         {/*------------------Products>NetWork-----------------*/}
         <Route path="/network" element={<Network />}/>
         <Route path="/dns" element={<Dns/>}/>
         <Route path="/protection" element={<Protection />}/>
         <Route path="/optimzetrafic" element={<OptimizeTrafic />}/>
         <Route path="/vpc" element={<VPC />}/>
         <Route path="/vpn" element={<Vpn />}/>
         <Route path="/ip" element={<Ip />}/>
         <Route path="/ipv4" element={<Ipv4 />}/>
         <Route path="/Ip6" element={<Ip6/>}/>
         <Route path="/Virtual" element={<VirtualRoute/>}/>
         <Route path="/gateway" element={<GateWay/>}/>
         <Route path="/ipsec" element={<IPSEC/>}/>

        {/*---------------------------------------------------*/}

        {/*------------------Products>DataBase----------------*/}
        <Route path="/ManageDatabase" element={<ManageDatabase/>}/>
        <Route path="/MongoDb" element={<MongoDb/>}/>
        <Route path="/Sql" element={<Sql/>}/>
        <Route path="/PostgreSQL" element={<PostgreSQL/>}/>
         {/*-------------------------------------------------*/}

         {/* --------------------Solution Pages----------- */}
         <Route path="/solutionoverview" element={<SolutionOverView/>}/>
         <Route path="/securitysolution" element={<SecuritySolution/>}/>
         <Route path="/trust" element={<Trust/>}/>
         <Route path="/management" element={<Management/>}/>
         <Route path="/problem" element={<Problem/>}/>
      
      </Routes>
    </>
  );
}

export default App;
