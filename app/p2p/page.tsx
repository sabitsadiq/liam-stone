import React from "react";
import P2pLogo from "@/components/P2pLogo";
import UserGuide from "@/components/UserGuide";
import P2pInnerNav from "@/components/P2pInnerNav";
import AmountSection from "@/components/AmountSection";
import HowP2pWorks from "@/components/HowP2pWorks";
const page = () => {
  return (
    <div className="bg-[#000000]">
      <P2pLogo />
      <UserGuide />
      <P2pInnerNav />
      <AmountSection />
      <HowP2pWorks />
    </div>
  );
};

export default page;
