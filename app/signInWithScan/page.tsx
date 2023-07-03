import SignInIntro from "@/components/SignInIntro";
import SignInWithScanMain from "@/components/SignInWithScanMain";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#000000] w-screen min-h-screen">
      <SignInIntro />
      <SignInWithScanMain />
    </div>
  );
};

export default page;
