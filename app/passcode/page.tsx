import React from "react";
import PassCodeIntro from "@/components/PassCodeIntro";
import PassCodeMain from "@/components/PassCodeMain";
const page = () => {
  return (
    <div className="bg-[#000000] min-h-screen">
      <PassCodeIntro />
      <PassCodeMain />
    </div>
  );
};

export default page;
