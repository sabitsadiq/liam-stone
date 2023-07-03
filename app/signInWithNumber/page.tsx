import SignInIntro from "@/components/SignInIntro";
import SignInWithNumberMain from "@/components/SignInWithNumberMain";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#000000] w-screen min-h-screen">
      <SignInIntro />
      <SignInWithNumberMain />
    </div>
  );
};

export default page;
