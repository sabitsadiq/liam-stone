import React from "react";
import Logo from "@/components/Logo";
import Supply from "@/components/Supply";
import BuyLsbt from "@/components/BuyLsbt";
import TotalSupply from "@/components/TotalSupply";
import BuyLsbts from "@/components/BuyLsbts";
const page = () => {
  return (
    <div className="bg-[#000000]">
      <Logo />
      <Supply />
      <BuyLsbt />
      <TotalSupply />
      <BuyLsbts />
    </div>
  );
};

export default page;
