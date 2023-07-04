import SignInIntro from "@/components/SignInIntro";
import SignInWithNumberMain from "@/components/SignInWithNumberMain";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#000000]">
      <SignInIntro />
      <SignInWithNumberMain />
    </div>
  );
};

export default page;
