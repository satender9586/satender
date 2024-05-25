import React from "react";
import LayoutPages from "../LayoutPages/LayoutPages";
import CartPage from "./CartPage";
import PriceInfo from "./PriceInfo";
import Feature from "./Feature";
import Parteners from "./Parteners";
import ComputeFamily from "./ComputeFamily";

const Cpu = () => {
  return (
    <>
      <LayoutPages>
        <CartPage />
        <PriceInfo />
        <Feature />
        <Parteners />
        <ComputeFamily/>
      </LayoutPages>
    </>
  );
};

export default Cpu;
