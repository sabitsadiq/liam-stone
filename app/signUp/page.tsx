import SignUpBtn from "@/components/SignUpBtn";
import SignUpIntro from "@/components/SignUpIntro";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#000000] min-h-screen">
      <SignUpIntro />
      <SignUpBtn />
    </div>
  );
};

export default page;
