import SignInIntro from "@/components/SignInIntro";
import SignInMain from "@/components/SignInMain";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#000000]">
      <SignInIntro />
      <SignInMain />
    </div>
  );
};

export default page;
