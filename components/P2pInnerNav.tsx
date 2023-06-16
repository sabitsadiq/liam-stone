import React from "react";

const P2pInnerNav = () => {
  return (
    <div className="w-11/12 mx-auto block md:flex flex-row gap-7 items-center text-[#ffffff] opacity-70 py-4 md:p-4 bg-blend-overlay">
      <div className="flex gap-4 md:inline-flex">
        <div className="bg-[#E9420E] px-6 py-3 h-fit rounded-xl">Buy</div>
        <div className="bg-[#5A5A5A] px-6 py-3 h-fit rounded-xl">Sell</div>
      </div>
      <div className="grid grid-cols-5 gap-6 md:flex mt-4 md:mt-0">
        <div>USDT</div>
        <div>BTC</div>
        <div>BUSD</div>
        <div>BNB</div>
        <div>ETH</div>
        <div>DODGE</div>
        <div>DAI</div>
        <div>TUSD</div>
      </div>
    </div>
  );
};

export default P2pInnerNav;
