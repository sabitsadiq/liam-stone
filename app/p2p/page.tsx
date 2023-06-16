import React from "react";
import P2pLogo from "@/components/P2pLogo";
import UserGuide from "@/components/UserGuide";
import P2pInnerNav from "@/components/P2pInnerNav";
import AmountSection from "@/components/AmountSection";
import HowP2pWorks from "@/components/HowP2pWorks";
import Faq from "@/components/Faq";
const page = () => {
  return (
    <div className="bg-[#1E1E1E]">
      <P2pLogo />
      <UserGuide />
      <P2pInnerNav />
      <AmountSection />
      <HowP2pWorks />
      {/* <Faq /> */}
    </div>
  );
};

export default page;
