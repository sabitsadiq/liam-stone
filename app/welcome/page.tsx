import WelcomeIntro from "@/components/WelcomeIntro";
import WelcomeMain from "@/components/WelcomeMain";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#000000] min-h-screen">
      <WelcomeIntro />
      <WelcomeMain />
    </div>
  );
};

export default page;
